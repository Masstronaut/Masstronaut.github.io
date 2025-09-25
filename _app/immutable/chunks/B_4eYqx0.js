const e=`---
title: Branded Types
description: TypeScript is a structurally typed language, but can have nominal typing semantics using a technique called type branding
slug: notes/branded-types
publish: true
lastmod: 2024-05-08
date: 2024-05-08
aliases:
- Type branding
tags:
- status/evergreen
---

Typescript is built on set theory, which is a cool feature for a language. it makes it possible to smash types together gracefully, like this:

\`\`\`\`ts twoslash
type User = {
	email: string;
	password: string;
};

type AuthSession = {
	sessionId: string;
}

type AuthUser = User & AuthSession;
\`\`\`\`

To make this work seamlessly, [TypeScript uses *structural* typing](https://www.typescriptlang.org/docs/handbook/type-compatibility.html). In structural typing, types where *properties* share the same name and type  are compatible, even if the types have different names. For example:

\`\`\`\`ts twoslash
type LoginFormInfo = {
	email: string;
	password: string;
};
type User = {
	email: string;
	password: string;
};

const formdata: LoginFormInfo = { 
	email: "me@domain.com", 
	password: "Secret123"
};
const user: User = formdata; // Compatible!
//          ^^^^^^^^^^^^^^^
\`\`\`\`

This is often very convenient!

The relaxed typing does make some issues easier to introduce, though. Consider this code, which has two names for structurally equal representations of a user:

\`\`\`\`ts twoslash
type UserLogin = {
	email: string;
	password: string;
}
type AuthenticatedUser = {
	email: string;
	password: string;
}
\`\`\`\`

They share the same structure, but the names imply very different meanings.

\`\`\`\`ts twoslash
type UserLogin = {
	email: string;
	password: string;
}
type AuthenticatedUser = {
	email: string;
	password: string;
}
//---cut---
function authnUser(user: UserLogin): AuthenticatedUser { 
	// "Securely" hash the password 
	// and authenticate the user...
	return user; 
}
// Only authenticated users can perform this action
function performSecureAction(user: AuthenticatedUser){
	// ...
}
function login(user: UserLogin) {
	const authenticatedUser = authnUser(user);
	performSecureAction(user);
	//                  ^^^^
// @warn: yikes! I didn't pass an \`AuthenticatedUser\` but got no warning/error
}
\`\`\`\`

This category of issue is possible *because* of structural type compatibility. \`AuthenticatedUser\` is a subset of \`MagicLinkForm\`, so the form submission data can be passed to a function that thinks it is getting an \`AuthenticatedUser\`. Yikes!

It would be helpful if the the type system could catch this bug.

There's a more strict approach called *nominal* typing. Nominal types are only compatible if they share the same *name*. An \`AuthenticatedUser\` instance couldn't be assigned a value of any other type, making this mistake impossible. Fantastic! But how can we do that in a *structurally typed* language like TypeScript? With *branded* types!

Branded types are a TS technique that emulates the behavior of a nominal type system by adding a unique field that no other type has. This makes the type structurally incompatible with every other type, which is exactly how nominal typing works. Check it out:

\`\`\`\`ts twoslash
declare const brand: unique symbol;
\`\`\`\`

the jumble of keywords is probably not the sort of thing you see in your day-to-day TypeScript work. Let's break it down a bit:

* \`declare\` is used to declare something exists in global scope. Importantly, it doesn't require providing an *implementation* of that thing.
* \`const brand\` says that we are creating an immutable variable named \`brand\`.
* \`: unique symbol\` The colon after \`brand\` tells TypeScript that we are explicitly specifying the type of brand. [\`unique symbol\`](https://www.typescriptlang.org/docs/handbook/symbols.html#unique-symbol) is the type being specified. It's a special type that can only be assigned to \`const\` variables, so it's important that we used \`const\` rather than \`let\` or \`var\`. Crucially, a \`unique symbol\` is guaranteed to be a unique type which can't be assigned or compared to any other type.

"Can't be assigned to any other type" is exactly what we need for *nominal* typing! The next step is figuring out how we can use our \`unique symbol\`. Symbols are valid keys for object properties, so \`brand\` can be used as property key and is guaranteed to be unique, so it won't even show up as a member in intellisense. Check this out:

\`\`\`\`ts twoslash
declare const brand: unique symbol;
type Email = {email: string};
type BrandedEmail = Email & {[brand]: "email"};
\`\`\`\`

In this example, I'm creating a type union with two parts:

1. The data type I actually want
1. Another type that uses the guaranteed unique value of \`[brand]\` as a key that can only be set to the value "email"

Colloquially, this is a "branded type" which is only compatible with a structurally compatible data type that has also been "branded" with the same name.

This syntax is rather gross, though. I'd like to be able to easily brand any type, and having to remember this brand syntax is not ideal for me, let alone anyone else in the codebase. This is a perfect use case for a Generic type, is basically a function that operates on types rather than values. Here's a generic version of a brand:

\`\`\`\`ts twoslash filename="brand.ts"
declare const brand: unique symbol;
export type Brand<BaseType, BrandedName extends string> = BaseType & {
  [brand]: BrandedName
}
// Example usage:
type Email = {email: string};
type BrandedEmail = Brand<Email, "email">;
\`\`\`\`

\`Brand\` is a generic type with two type parameters:

1. \`BaseType\`: the data type that will be branded.
1. \`BrandedName\`: a string literal that the \`BaseType\` will be "branded" with

The result is a type which is structurally equivalent to the \`BaseType\`, but is only assignable with other values branded with the same name. Here are some examples:

\`\`\`\`ts twoslash filename="branded-examples.ts"
declare const brand: unique symbol;
type Brand<BaseType, BrandedName extends string> = BaseType & {
  [brand]: BrandedName
}
// 
// ---cut---
type Password = {password: string};
type HashedPassword = Brand<Password, "Hashed">;

function hashPassword(pw: Password): HashedPassword {
	// do some cryptographically secure hashing...
	return {password: [pw.password].reverse().join('')} as HashedPassword;
	//                                                  ^^^^^^^^^^^^^^^^^
}

let password: Password = {password: "superSecret123"};
// @errors: 2322
let hashedPassword: HashedPassword = password;
let hashedPassword2: HashedPassword = hashPassword(password);
\`\`\`\`

Notice that assigning a value to \`hashedPassword\` produces an error, but \`hashedPassword2\` doesn't!

Branded types seem to exist purely at the type level, so when the TypeScript gets compiled the \`[brand]\` property is omitted from the generated JavaScript. You can see this by logging the keys on the \`hashedPassword2\` object. Try \`console.log()\`ing the \`Object.keys()\` on the playground link!

It's also important to note that branding isn't *security*. It is a tool that helps you, the software engineer, *catch* issues which could be security vulnerabilities, but it's not a complete solution. As an example, try assigning \`password as HashedPassword\` to \`hashedPassword\`.

While it doesn't guarantee your code is secure, it's a great tool that can help you write better code. Some examples that are great fits for branded types are:

* Unique keys in a database
* Hashed passwords
* Validated and verified emails
* IDs for different schemas such as users or posts
* A \`User\` object that came from a database record

Summary:

* TypeScript types can be combined like sets
* TS types are highly compatible because TS is structurally typed
* [Type branding removes structural type compatibility](Type%20branding%20removes%20structural%20type%20compatibility.md) from types
* A generic type provides a nice API for branding types
* Branded types can help you catch bugs and write better code, but don't add security
`;export{e as default};
