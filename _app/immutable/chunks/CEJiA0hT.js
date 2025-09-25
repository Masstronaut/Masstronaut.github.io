const e=`---
title: Adding users to new teams with Lucia auth and Prisma
description: When building a B2B product, most customers will want to invite their team members. This post explores how I added support for that to Doc Duck, a documentation feedback solution I'm building.
slug: notes/customer-teams-lucia
publish: true
lastmod: 2023-10-22
date: 2023-10-16
aliases: null
tags:
- status/seedling
- topic/prisma
- topic/lucia
- topic/auth
- topic/SaaS
- topic/webdev
---

Recently I've been building [Doc Duck](https://docduck.dev), a user feedback platform. I wanted to add support for teams so that a customer can invite their coworkers to also participate. Multiple people from a team/company wanting access to the software is a really common scenario in B2B. For Doc Duck, I anticipate that an analyst or PM will want to view data in the dashboard and share it with their team. Plus they will want an engineer to do the integration work. In this post, I'm going to explain how I added support for teams and wired up that information in the auth library I'm using, [Lucia-auth](https://lucia-auth.com/) so that when accessing a user's session I also get the information about teams they are on.

## Updating the database with tables for auth and teams

First, I needed to add the relevant tables and fields to my database to support auth & teams. I'm using \`prisma\`, so the following is what I've added to my \`schema.prisma\` file to support the [fields needed for Lucia](https://lucia-auth.com/database-adapters/prisma/#prisma-schema)  and to add support for teams.

\`\`\`\`prisma
// This describes a user's role in a team.
enum Role {
	admin
	user
	@@map("role")
}

model User {
	// These 3 fields are the User model defined by Lucia
	id String @id @unique
	auth_session Session[]
	key Key[]

	// These are additional fields I want
	email String @unique
	created_date DateTime

	// This defines a relation to the TeamMember table where a user can be a member of multiple teams 
	teams TeamMember[]
}

  
// The  Session model defined by Lucia
model Session {
	id String @id @unique
	user_id String
	active_expires BigInt
	idle_expires BigInt
	user User @relation(fields: [user_id], references: [id], onDelete: Cascade)
	@@index([user_id])
}

// The Key model defined by Lucia
model Key {
	id String @id @unique
	hashed_password String?
	user_id String
	user User @relation(fields: [user_id], references: [id], onDelete: Cascade)
}

// This model represents teams in the database
model Team {
	id String @id @unique
	name String
	created_date DateTime
	users TeamMember[]
}

  
// This model defines team membership - each row represents one user's membership in one team
model TeamMember {
	team_id String
	user_id String
	role Role
	joined DateTime @default(now())
	team Team @relation(fields: [team_id], references: [id], onDelete: Cascade)
	user User @relation(fields: [user_id], references: [id], onDelete: Cascade)
	@@id([team_id, user_id])
}
\`\`\`\`

For simplicity I'm only using a \`Role\` enum to manage user permissions within a team. For more complex permission setups like [Discord's role management system](https://support.discord.com/hc/en-us/articles/214836687-Role-Management-101), I'd recommend implementing a more advanced permission system like [Role-based access control](https://en.wikipedia.org/wiki/Role-based_access_control). RBAC is out of scope for this article, but if you'd like one from me in the future, let me know on [Twitter](https://twitter.com/AllanDeutsch). If it gets enough interest, I might do it.

Now that the model is defined, we can:

1. \`npx prisma generate\` to generate the type definitions we will be using
1. \`npx prisma db push\` to push these changes to the database

## Implementing team support in the database model

I care a lot about providing a great user experience - both to myself as a developer, and to users of the software I develop. I don't want new users to start their experience using [Doc Duck](https://docduck.dev) by signing up and then creating a team. I want to minimize the time it takes to get from 0 to the "aha" moment, so when they sign up I'm going to create a team for them.

### Requirements for user and team creation

Creating a team and a user in the database simultaneously poses an additional challenge over doing them as separate operations. If creating one of them fails, both should fail. They need to be completed in a single ACID transaction.

Since Lucia doesn't support this, I'm going to have to define my own function for creating a user that meets my requirements. Those requirements are:

1. When a signing up a user, an *account and team* must be created
1. Both need to succeed or fail completely - partial success is a full failure
1. The results must still work with Lucia.
1. On success, it should return the created \`User\` and \`Team\`
1. On failure, it should return the error information
1. I want to use TypeScript to easily and safely determine whether it succeeded or failed and get the corresponding data

For now, I'm only supporting email & password combos, so that's what the function will take in as a parameter. Since database requests happen over a network, the most efficient way to write them is using async functions. Here's the function signature for creating a user:

\`\`\`\`ts
export const createUser = async (userData: {
	email: string;
	password: string;
}) => {
  // What goes here?
}
\`\`\`\`

Next I'm building the Prisma query for creating the user, team, and the relationship between them. To do this I used the prisma client and a couple utilities from Lucia for password hashing and creating a key.

\`\`\`\`ts
import { prisma } from '$lib/server/prisma';
import { generateLuciaPasswordHash } from 'lucia/utils';
import { createKeyId } from 'lucia';
\`\`\`\`

I create a single Prisma client to use across my backend in \`'$lib/server/prisma'\`, which is that first import. I'm using the slick   [server-only module feature of SvelteKit](https://kit.svelte.dev/docs/server-only-modules#your-modules). By putting my Prisma module in \`$lib/server\`, SvelteKit will not let me import it into client code. Nifty!

### Including the right data

Now let's look at the Prisma query itself! I am making a query to create a \`User\` and inside it I'm nesting the insertion of a \`Key\`, \`TeamMember\`, \`Team\`. [Prisma performs nested inserts as a transaction](https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#create), which means the inserts will all succeed or all fail.

I split it out into the constituent parts to make it a bit easier to discuss here. There are 3 parts:

1. The \`data\` object contains the data I want to insert to the database
1. the \`include\` argument tells Prisma what to include in the response, in addition to the inserted \`User\`
1. Perform the query

This is based on the excellent Lucia documentation about [falling back to database queries in Lucia](https://lucia-auth.com/basics/fallback-database-queries/).

\`\`\`\`ts
// @noErrors
const data = {
	// to-do
} satisfies Prisma.UserCreateArgs['data'];

const include = {
	// to-do
} satisfies Prisma.UserCreateArgs['include'];

// this performs the actual query
const result = await prisma.user.create({
	include,
	data
// If you're curious about the shape of the query result, this is how to get it from prisma
// see here: V
}) satisfies Prisma.UserGetPayload<{include: typeof include}>;
\`\`\`\`

I've used \`satisfies Prisma.<something>\` in all of these to get better type safety and tooling support. Note that for \`include\` and \`data\` it's important to use \`satisfies\` rather than a type annotation. This is because a type annotation will *widen* the value to the type of the annotation. In contrast, \`satisfies\` enforces the constraints of the specified type, but won't widen the value into that type. This behavior is necessary for \`Prisma.UserGetPayload<>\` to provide the correct result type. You can learn more about the \`satisfies\` operator in the [Typescript 4.9 release announcement](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html#the-satisfies-operator).

Now that I have the structure of the query and result, lets look at the meat of the request, starting with include:

\`\`\`\`ts
// @noErrors
const include = {
	teams: {
		include: {
			team: true
		}
	}
} satisfies Prisma.UserCreateArgs['include'];
\`\`\`\`

This include object might look a little convoluted. Think back to the data model; to support users being in multiple teams, I have 3 tables:

1. User - the table with user properties
1. Team - the table with team properties
1. TeamMember - the table that defines relationships between users and teams

So the include statement above is telling Prisma what fields to give us in response. In addition to the basic fields of the \`User\` model, I've told it to include an array of \`TeamMember\`s and corresponding \`team\`s that the user is in. Because I'm inserting a new user and team here, I know that \`teams\` will be an array of exactly 1 team.

#### Shape of a \`User\` type that includes teams

The result will be of the following shape, which I've written out to provide annotations:

\`\`\`\`ts
type UserIncludingTeam = {
	// The basic fields from the \`User\` model
	id: string;
	email: string;
	created_date: Date;
	// also include the \`TeamMember\` relation, called \`teams\`
	teams: {
		// The basic fields from the \`TeamMember\` model
		team_id: string;
		user_id: string;
		role: $Enums.Role;
		joined: Date;
		// also include the \`Team\` relation, called \`team\`:
		team: {
			id: string;
			name: string;
			created_date: Date;
		}
	}[]
}
\`\`\`\`

Outside of an article, I prefer to use the [Prisma utilities for advanced type safety](https://www.prisma.io/docs/concepts/components/prisma-client/advanced-type-safety#type-utilities). They are generated based on the model definition, so are going to stay up-to-date when the model changes. An equivalent type can be produced by Prisma with a single line: \`Prisma.UserGetPayload<{include: typeof include}>\`. Much easier to write!

### Create the new user and their team

Up next is the \`data\` object. This is how I specify what data should be used to create:

1. The user
1. The \`TeamMember\` and corresponding \`Team\` that the user will be in
1. A \`Key\` entry so the user can sign in with username and password

\`\`\`\`ts
const data = {
	// The basic user data
	created_date: new Date(Date.now()),
	email,
	id: crypto.randomUUID(), // available on most browsers and NodeJS
	teams: {
		// This tells Prisma to create a TeamMember with a relation to the new user
		create: {
			role: 'admin',
			team: {
				// This creates the new Team
				create: {
					name: 'My Team',
					created_date: new Date(Date.now()),
					id: crypto.randomUUID()
				}
			}
		}
	},
	key: {
		// I need to store a key so in the future the user can sign in 
		create: {
			// These functions are provided by Lucia-auth
			id: createKeyId('email', email.toLowerCase()),
			hashed_password: await generateLuciaPasswordHash(password)
		}
	}
//V This also provides great intellisense support!
} satisfies Prisma.UserCreateArgs['data'];
\`\`\`\`

Finally I bring it all together and create the user and their new team. Whew!

\`\`\`\`ts
const queryResult = await prisma.user.create({
	data,
	include
});
\`\`\`\`

Now that the bulk of my \`createUser()\` logic is done, I need to return the results!

### Structuring and returning the result of creating a user

To get my \`User\` and \`Team\` back from the sign-up transaction, I'll use the types defined by prisma to build my result types. I've opted to use separate types to represent success and failure, and combine them into a [union type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types) called \`CreateUserResult\`:

\`\`\`\`ts
import type { Team, User } from '@prisma/client';

type CreateUserSuccess = {
	success: true;
	user: User;
	team: Team;
};

type CreateUserFailure = {
	success: false;
	error: string;
	code: string | undefined;
};
type CreateUserResult = CreateUserSuccess | CreateUserFailure;
export const createUser = async (userData: {
	email: string;
	password: string;
}): Promise<CreateUserResult> => {
// ...
}
\`\`\`\`

This uses a *TypeScript* technique called a [discriminated union](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions). Based on the value of \`.success\` in the \`CreateUserResult\` returned by \`createUser()\`, TypeScript can safely determine whether the object is a success or failure and expose the correct fields to me.

The success case is fairly straightforward; grab the user and team from the \`queryResult\` and return a \`CreateUserSuccess\`:

\`\`\`\`ts
return {
	success: true, // client code can use this to discriminate the result is \`CreateUserSuccess\`
	// This will narrow the \`user\` down to the basic fields of email, created_date, and id.
	user: queryResult as Omit<typeof queryResult, 'teams'>,
	// Since it's a newly inserted user, I know they are in exactly 1 team
	team: user.teams[0].team
} satisfies CreateUserSuccess; // this provides better intellisense support
\`\`\`\`

The failure case occurs when something goes wrong with the Prisma query. When that happens, it will throw an error. We can catch it by wrapping the query in a try/catch block:

\`\`\`\`ts
const data = {...};
const include = {...};
try {
	const queryResult = await prisma.user.create({
		data,
		include
	});
	return {...} satisfies CreateUserSuccess;
} catch (e) {
	if (e instanceof Prisma.PrismaClientKnownRequestError &&
		e.code === 'P2002'){
		return {
			success: false,
			error: e.message,
			code: e.code
		}
	}
	return {
		success: false, 
		error: 'Unknown error occurred.', 
		code: undefined
	}
}
\`\`\`\`

I've kept this error handling example brief. When building for production, I recommend handling the full list of [Prisma errors](https://www.prisma.io/docs/reference/api-reference/error-reference).

## Extending Lucia types to include teams

Now that teams are supported in the database and get created alongside new users, I want to start using them in my SvelteKit endpoints and [load functions](https://kit.svelte.dev/docs/load). That's how I will validate the user's session and make sure they are *authorized* for whatever they are trying to do. This is important because I don't want to let any user view or interact with data for teams they aren't part of. Plus, some actions like adding or removing members from the team will require the user to be in the team and have elevated privileges. The [Lucia guide to SvelteKit setup](https://lucia-auth.com/getting-started/sveltekit/#set-up-hooks) adds the Lucia \`auth\` object to \`locals\`, so it's readily available for this.

Unfortunately, I've got a problem! Lucia doesn't know about teams yet, so the \`Session\` object it gives me doesn't contain team data:

\`\`\`\`ts
import type { PageServerLoad } from './$types'; // generated by SvelteKit
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals, params }) => {
	const session = await locals.auth.validate(); // this
	if(null === session) throw redirect(302, '/login');
	const user = session.user;

	// Now I want to check the user's teams, but it's not included in the session info!
	const teams = user.teams; // error!
}
\`\`\`\`

Now that I've used Lucia to *authenticate* the user, I want to check their team data to make sure they are *authorized* to view this page. The most straightforward way to do this would be to use Prisma from here. I could use the value of \`session.user.id\` to get the teams the user is in from the database. The problem with that approach is it requires a second round-trip request to the database, which has several downsides:

1. Higher serverless function execution time, which increases costs
1. More database queries also increases costs
1. Longer backend execution times means it takes longer for the page to load, degrading the user experience
1. The increase in database load would reduce how many concurrent users can be supported

Overall not a great solution! Instead, I want Lucia to grab the team with the user and session info in a single query, rather than making 2 (or even 3!) queries out to the database. I also need to tell Lucia what my desired user type is so it can provide type safety. Fortunately, this is all supported out of the box; no hacks necessarily!

### Modifying the auth \`User\` type to include team information

I found the easiest way to go about updating Lucia's auth \`User\` type to include teams is to re-run the [Lucia starter guide](https://lucia-auth.com/starter-guides/) for my framework (SvelteKit). It looks like these changes are really similar for other frameworks too.

First, I need to update the \`app.d.ts\` file to extend Lucia's \`DatabaseUserAttributes\` to include the team data I want. I used Prisma to generate the typing for me:

\`\`\`\`ts
// app.d.ts
import type { Prisma, User } from '@prisma/client';
declare global {
	namespace Lucia {
		type Auth = import('$lib/server/lucia').Auth;
		// Lucia wants you to exclude the 'id' attribute, because it's required
		type DatabaseUserAttributes = Omit<User, 'id'> & {
			teams: Prisma.TeamMemberGetPayload<{include: {team: true}}>[];
		};
		type DatabaseSessionAttributes = {};
	}
}
// THIS IS IMPORTANT (according to the Lucia docs)
export {}
\`\`\`\`

Two things of note here:

1. I used \`Omit<>\` to remove the \`id\` attribute from the \`User\` type Prisma generated from my data model because Lucia already knows that users have an \`id\`.
1. The type of \`Lucia.DatabaseUserAttributes.teams\` is the result of getting a \`TeamMember\` entry (which defines the relation between a user and team) and including the \`Team\` with it. I made this an array by appending \`[]\` because a user can be in multiple teams.

### Plumbing the team data into Lucia

By default, [Lucia's Prisma adapter](https://lucia-auth.com/database-adapters/prisma/) works great. Unfortunately, it doesn't know how to perform the slightly more complex join query to get the team data I want with my users. Fortunately, there's a great (experimental as of this writing) solution to this problem: \`joinAdapters()\`.

The default adapter works for everything I need *except* getting users. To fix that I use \`joinAdapters()\` to partially extend the default Prisma adapter. The change takes place in the [Lucia config](https://lucia-auth.com/guidebook/sign-in-with-username-and-password/sveltekit/#configure-lucia) that I defined in \`$lib/server/lucia.ts\`. As an optimization, [\`Lucia\` will try to use the provided adapter's \`getSessionAndUser()\`](https://github.com/lucia-auth/lucia/blob/f4ce8ffbdf40e64d9c1475c6f0ef98cfcd709d3a/packages/lucia/src/auth/index.ts#L205) to get both in a single query. If it's not present, it will fall back to \`getUser()\`. To get the best performance in all cases, I override both.

#### Writing custom \`getUser()\` and \`getSessionAndUser()\` functions

I started with \`getUser()\` because it's simpler. I imported Lucia's \`Adapter\` type to defines the function signature for \`getUser()\` and my Prisma client instance to perform the query within. Here's how that all comes together:

\`\`\`\`ts
// $lib/server/lucia.ts
import type { Prisma } from '@prisma/client';
import type { Adapter } from 'lucia';
import { prisma } from '$lib/server/prisma';

// override the default getUser method on the prisma adapter to include the user's teams
const getUser = (async (userId) => {
	const user = await prisma.user.findUnique({
		select: {
			teams: { include: { team: true } },
			id: true,
			email: true,
			created_date: true
		},
		// The specific user to grab
		where: { id: userId }
	});
	return user;
	// This gives me type checking and better intellisense
}) satisfies Adapter['getUser'];
\`\`\`\`

Note that the value being assigned to \`getUser\` is wrapped in parentheses. This is so I can use the \`satisfies\` operator to provide a type constraint.

Continuing on in the file I made \`getSessionAndUser()\`. This one is a little more complicated because the result needs to be a 2 element array: \`[session, user]\`. I ran into a couple gotchas here:

1. If the session doesn't exist, \`getSessionAndUser()\` should return \`[null, null]\`
1. [Lucia's models the Session's \`active_expires\` and \`idle_expires\` as \`BigInt\`s](https://lucia-auth.com/database-adapters/prisma/#prisma-schema). I had to [convert them to \`number\`s](https://discord.com/channels/1004048134218981416/1164693156730773567/1164693156730773567)

\`\`\`\`ts
const getSessionAndUser = (async (sessionId) => {
	const session = await prisma.session.findUnique({
		where: { id: sessionId },
		include: { user: { include: { teams: { include: { team: true } } } } }
	});
	if (null === session) return [null, null];
	return [
		{
			...session,
			active_expires: Number(session.active_expires),
			idle_expires: Number(session.idle_expires)
		},
		session.user
	];
	// Again, this is for better type checking & intellisense support
}) satisfies Adapter['getSessionAndUser'];
\`\`\`\`

#### Tying it all together in the Lucia config

With the two overrides written, all that remains is to bring it all together in the Lucia config!

To do this, I used the (currently experimental) \`joinAdapters()\` utility that Lucia provides. It's pretty straightforward:

1. Pass it the first adapter to use
1. Pass an object with the Adapter methods to override

Tying it all together, I have the following Lucia config:

\`\`\`\`ts
import { lucia, type Adapter } from 'lucia';
import { sveltekit } from 'lucia/middleware';
import { dev } from '$app/environment';
import { prisma as PrismaAdapter } from '@lucia-auth/adapter-prisma';
import { prisma } from '$lib/server/prisma';
import { __experimental_joinAdapters as joinAdapters } from 'lucia/utils';

// truncated for brevity
const getUser = (...) satisfies Adapter['getUser'];
const getSessionAndUser = (...) satisfies Adapter['getSessionAndUser'];

// The Lucia config
export const auth = lucia({
	env: dev ? 'DEV' : 'PROD',
	middleware: sveltekit(),
	// joinAdapters makes it possible to override parts of the default \`PrismaAdapter\`
	adapter: joinAdapters(
		PrismaAdapter(prisma, {
			user: 'user',
			key: 'key',
			session: 'session'
		}),
		// This "adapter" object has the overrides to get teams with the user
		{ getUser, getSessionAndUser }
	),
	getUserAttributes: (user /*: UserSchema*/) => {
		// \`UserSchema\` pulls in the \`teams\` field I added in app.d.ts
		return user;
	}
});
export type Auth = typeof auth;
\`\`\`\`

### Accessing the user's team data provided by Lucia

Now that Lucia knows how to get the team data, I can access it easily via \`(await locals.auth.validate()).user.teams\` in my SvelteKit page load functions and server endpoints. Going back to the code example from the start of this section on extending Lucia types to include teams, it now works the way I wanted! Check it out:

\`\`\`\`ts
// routes/[teamId]/+page.server.ts
import type { PageServerLoad } from './$types'; // generated by SvelteKit
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals, params }) => {
	const session = await locals.auth.validate(); // this
	if(null === session) throw redirect(302, '/login');
	const user = session.user;

	// Now the user's teams are included in the session info!
	const teams = user.teams; // works now!
	if (teams.find(team => team.id === params.teamId) === undefined){
		// unauthorized
	}
	// The user is supposed to be here!
}
\`\`\`\`

Now when I use Lucia to authenticate user sessions, I also get the data I need to make sure the user is authorized. Awesome!

## Conclusion

I hope this is helpful to you in adding support for teams (or anything else!) to your SaaS!

This article was a lot of fun to write, and I ended up learning and improving my code a lot in the process. I have really enjoyed building with Lucia, SvelteKit, and Prisma. With any luck, this article has helped you get excited to go build something with them too!
`;export{e as default};
