const n=`---
title: TypeScript assertion functions increase type safety
description: Assertion functions let the programmer narrow types using a named function, making type narrowing much more readable.
slug: notes/assertion-functions
publish: true
lastmod: 2024-02-16
date: 2024-02-16
aliases: null
tags:
- status/seedling
---

When working with union types, I often want to narrow the type to something specific. One way to do this is using [assertion functions](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#assertion-functions) which assert that after they've been invoked, I can be certain that the type is what was asserted. The following assertion function will assert that a user is an admin:

\`\`\`\`ts twoslash {10, 18-19}
// @errors: 2775
export type User = {id: string};
export type AdminUser = User & {role: "admin"};
export type NormalUser = User & {role: "user"};
// ---cut---
function assertIsAdmin(user: NormalUser | AdminUser): asserts user is AdminUser {
	if( "admin" !== user.role ) throw new Error("user is not an Admin");
}
// Notice the arrow function syntax here
const assertIsAdmin2 = (user: NormalUser | AdminUser): asserts user is AdminUser => {
  if( "admin" !== user.role ) throw new Error("user is not an Admin");
}

function adminOnly(user: NormalUser | AdminUser){
  assertIsAdmin2(user);
}

function deleteOrganization(user: AdminUser, organizationId: string){
  // ...
}

function attemptDeleteOrganization(user: NormalUser | AdminUser, organizationId: string){
	assertIsAdmin(user);
	deleteOrganization(user, organizationId);
	//                 ^?
}
\`\`\`\`

\`assertIsAdmin\` *asserts* that the \`user\` is an \`AdminUser\`. There are a couple things to note here:

1. The \`function\` keyword is required. Notice that using \`assertIsAdmin2\`, the version with an arrow function, causes an error. This is because of an implementation detail of the compiler; [the control flow graph is computed *before* type inferencing](https://github.com/microsoft/TypeScript/issues/56147#issuecomment-1768592995).
1. Any code that sits below a call to \`assertIsAdmin\` will have the type of \`user\` narrowed to \`AdminUser\`.

In \`attemptDeleteOrganization\`, you can see that after the call to \`assertIsAdmin\`, the \`user\`'s type is narrowed to \`AdminUser\`.
`;export{n as default};
