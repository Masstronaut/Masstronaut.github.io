const e=`---
title: 'devlog 14: typesafe TypeScript'
description: TypeScript brings types to JS, but it's still up to the developer to leverage them to write safer code.
slug: devlog/14
publish: true
lastmod: 2025-10-16
date: 2025-10-16
aliases:
- null
tags:
- status/seedling
---

Over the past few months I've been working on [typesafe-ts](https://github.com/Masstronaut/typesafe-ts), a library of utilities that leverage TypeScript's type system to make it possible to write safer, more reliable code using types with strict checking requirements. The [typesafe-ts readme](https://github.com/Masstronaut/typesafe-ts/blob/main/readme.md) has a lot more details, but here's a quick summary:

* **[typesafe-ts/optional](https://github.com/Masstronaut/typesafe-ts/tree/main/src/optional)**: Turns “maybe” values into something easy to work with, whether or not they are a value. Includes a tool to ensure it is used.
* **[typesafe-ts/result](https://github.com/Masstronaut/typesafe-ts/tree/main/src/result)**: Gives operations “worked” or “had an issue” outcomes, making issues explicit and issue-handling straightforward. Includes a tool to ensure it is used.
* **[typesafe-ts/brand](https://github.com/Masstronaut/typesafe-ts/tree/main/src/brand)**: Adds name tags to look-alike objects (UserId vs ProductId) so you never hand the wrong one to a function. Also provides a utility for clear error types.
* **[typesafe-ts/assert](https://github.com/Masstronaut/typesafe-ts/tree/main/src/assert)**: Compile-time checks that help confirm “are these types what I think they are?” I find them extremely useful for library & API development.

A big motivator in writing \`typesafe-ts\` is that I wanted these patterns for [Doc Duck](https://docduck.dev). Switching to using branded errors and \`result\` for all my code that could produce errors was a substantial amount of work. As a result, I'm much more confident the errors are being handled. I also went from ~3 custom error types to 9, and now explicitly handle more errors from Prisma, the database ORM I use. The change was around net 0 for lines of code, but now explicitly handles many more error cases. This makes me happy, because it means typesafe-ts provides a more concise or "expressive" way of writing code that may fail and handling it gracefully.
`;export{e as default};
