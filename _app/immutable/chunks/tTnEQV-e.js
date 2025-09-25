const n=`---
title: Type branding removes structural type compatibility
description: A structural type can be "branded" to add context to values by using the type system for annotations as is done with nominal types. Doing so makes them incompatible with structurally equivalent types.
slug: notes/structural-branded-types-nominal
publish: true
lastmod: 2024-04-06
date: 2024-02-03
aliases: null
tags:
- topic/typescript
- status/budding
---

Chalk it up to growing up on C++, but sometimes I find it helpful to name a type and limit the usage based its name.

Consider an email address input. A user can type any string! I have no idea if they typed a valid email or not, all I know is it's a string. Once I validate it with *Zod* I know more, but as far as TypeScript is concerned it's still just a \`string\`. I could mistakenly assign something else to it, or accidentally use a different value when calling a function that requires a validated email. This is a problem in TypeScript because it uses *structural types* - data with the same shape is considered equivalent. This is in contrast to *nominal types* which are only compatible with objects that share the same type name.

Fortunately there's a TypeScript technique called "Branded types" that makes it possible to reduce a structural type's compatibility to the level of a nominal type. It is also a great way to encode information about a value in the type system.

\`\`\`\`ts twoslash
/** \`brand\` is a globally unique value, so the only ways to create an "Email" type are 
* 1. "branding" a string using \`as Email\` 
* 2. copying an already branded \`Email\`
*/
declare const brand: unique symbol;
type Email = string & { [brand]: "email"}

const isEmail = (email: string):email is Email=> { return email.includes("@gmail.com") };

function sendEmail(email: Email) {
	console.log("sent.");
}

function trySendEmail(email = "user@gmail.com"){
	// @ts-expect-error
	sendEmail(email); // string is not assignable to paramter of type \`Email\`
	if( isEmail(email) ) {
	  sendEmail(email)
	} else {
	  console.log("not an email")
	}
}

trySendEmail()
\`\`\`\`

In this example I make a "branded" \`Email\` type and use the \`isEmail\` function to narrow validated strings to \`Email\`s which is useful in a case such as \`trySendEmail()\`.

Branding can also be done with a reusable generic type:

\`\`\`\`ts twoslash
declare const brand: unique symbol;
// The Brand generic can be used to augment any structural data type with nominal type safety
type Brand<T, TBrand extends string> = T & {[brand]: TBrand}
type Email = Brand<string, "Email"> // works the same as the \`Email\` type in the previous example
type Password = Brand<string, "Password"> // Easy to reuse
type UserID = Brand<number, "User ID"> // can be used with any primitive type
type DBUser = Brand<{id: UserID; username: string}, "Database User">; // and with object types
\`\`\`\`

The \`Brand\` utility type makes it easy to encode information about a value in its type. I find this helpful as values move through an application. Branded types can represent:

* Unique keys in a database
* Hashed passwords
* Validated emails
* Verified emails
* IDs for different schemas such as users or posts
* A \`User\` object that came from a database record
* and more!

## Narrowing to a branded type using type predicates and assertion functions

Brands can also be used with [type predicate functions](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates) to narrow a structural type to a *branded* type in something like a validation function. For example:

\`\`\`\`ts twoslash
declare const brand: unique symbol;
type Brand<T, TBrand extends string> = T & {[brand]: TBrand}
// ---cut---
type Password = string;
type ValidPassword = Brand<Password, "Valid">;

function isValidPassword(password: Password): password is ValidPassword {
	if( password.length >= 8) return true;
	return false;
}


let pass: Password = "12345678";

if(isValidPassword(pass)){
	pass
	// Hover \`pass\` above to see it's now typed as \`ValidPassword\`
}
\`\`\`\`

If you want to reduce the need for nested \`if\` statements or include guards, or prefer to treat a \`false\` case as an error/exception, consider using [assertion functions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions) instead:

\`\`\`\`ts twoslash
declare const brand: unique symbol;
type Brand<T, TBrand extends string> = T & {[brand]: TBrand}
type Password = string;
type ValidPassword = Brand<Password, "Valid">;
// ---cut---
function assertPasswordIsValid(password: Password): asserts password is ValidPassword {
	if(password.length < 8) throw new Error("Password too short")
}

let pass: Password = "12345678";
assertPasswordIsValid(pass);
pass
// Hover over \`pass\` to see it's now typed as \`ValidPassword\` - no \`if\` statements needed!
\`\`\`\`
`;export{n as default};
