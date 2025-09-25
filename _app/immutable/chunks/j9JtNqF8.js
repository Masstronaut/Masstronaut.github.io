const e=`---
title: Structural types increase data compatibility
description: Structural types are only concerned with the shape of data, rather than the names of types. This makes data types more compatible.
slug: notes/structural-types-increase-compatibility
publish: true
lastmod: 2024-02-04
date: 2024-02-04
aliases: null
tags:
- status/seedling
- topic/typescript
---

Typescript uses an approach to types called "structural typing". Structural types are compatible if they share the same structure: the same named members and those members have the same types. This differs from languages such as C & C++ which use an approach called "nominal typing." Nominal types are only equivalent if they share the same structure **and name**. Here's a quick reference:

||Nominal|Structural|
|-|-------|----------|
|Languages|C, C++, Java, C#|TypeScript, Go|
|Type compatibility requirements|Structure and name|Structure|
|Specificity|Strict|Flexible|

I find it easiest to understand how structural types work with code examples:

\`\`\`\`ts
type A = { a: number };
type B = { a: number, b: string };

// \`a1\` is explicitly typed as an \`A\` object
let a1: A = { a: 123 };
// \`a2\` is not explicitly typed as \`A\`...
let a2 = { a: 321 };
// But its structure matches,
// so it can be assigned to a type \`A\` object
a1 = a2; // Valid

// \`b\` is explicitly typed as a \`B\` object
let b: B = {a: 135, b: "abc"};
// \`b\` can be assigned to an \`A\` object 
// because it is a superset of the structure of A
a2 = b; // Valid
\`\`\`\`

This approach is really convenient on the web where it's common for data to come from external APIs; they may change the data provided. Structural typing makes it easy to handle extra data. In the \`a2 = b\` example above, the extra data on \`b\` is "sliced" off, narrowing it to an \`A\` object. The extra field on \`B\` doesn't cause any issues! This makes it easy to opt-in to using additional data on a type when I'm ready, and to continue working until then.

TypeScript type compatibility can *reduce clarity* that a developer could otherwise provide using a named type. This might be an issue when trying to distinguish between *structurally* equivalent types that are *nominally* different. As an example, consider a \`UserID\` and \`PostID\` that are both represented as strings:

\`\`\`\`ts twoslash {5}
type UserID = string;
type PostID = string;

let user: UserID = "allan";
let post: PostID = user;
\`\`\`\`

These are two different *named* types but because they are *structurally* identical TypeScript will allow you to assign a \`UserID\` value to a \`PostID\` object. Yikes! Compatibility makes problems like this possible.

Fortunately, it can be solved in TypeScript. [Type branding removes structural type compatibility](Type%20branding%20removes%20structural%20type%20compatibility.md), and can be used to prevent this type of problem.
`;export{e as default};
