const e=`---
title: Make API misuse hard
description: Being hard to misuse is an underrated characteristic of exceptional APIs, especially when the possibility needs to be exposed to the client for advanced scenarios.
slug: notes/make-api-misuse-hard
publish: true
lastmod: 2024-02-13
date: 2024-02-14
aliases: null
tags:
- status/seedling
- topic/softwaredev
---

APIs are a tool used to accomplish a task. In almost every case, there exists one or a few correct ways to do it, and many incorrect ways. A *great* API makes it much more difficult to do it wrong.

## C++’s \`unique_ptr\`, an API great at avoiding misuse

My favorite example of this principle is the C++ standard library’s \`unique_ptr<T>\`. In C++, memory needs to be manually allocated and freed by the programmer; it’s extremely hard to get right, and every C++ programmer has struggled with issues that arise from doing it wrong. The \`unique_ptr<T>\` addresses this by taking sole custody of a memory block and freeing the memory when it leaves scope or is destructed. If you use a \`unique_ptr<T>\` to manage all the memory you allocate, you will not have a memory leak. It works correctly by default. Great API design!

Sometimes there is a legitimate need to access the memory address of your data directly, which can be done using \`unique_ptr<T>\`‘s \`get()\` or \`release()\` method. This opens up a variety of ways to shoot yourself in the foot by managing memory incorrectly. It’s still possible to shoot yourself in the foot, but doing so requires manually disabling the safety. It’s harder to use incorrectly. Great API design.

## Unity components, an easily misused API

Unity is a popular game engine that uses a component-centric API. Everything in the game is created as a game object, and an object’s behavior is determined by which components are added to it. A component encapsulates both logic and the data it depends on. Often data is needed by multiple behaviors; the most common example is rendering and physics both needing to know where an object is. Components can read and write to each others’ data via the parent game object: \`this.parent.get<Component>()\`.

This API is simple, straightforward, and easy to use. Upon realizing you need to more data for a behavior, it makes it easy to just grab the data and get on with it. Unfortunately, it’s a terribly slow API for games, requiring at least two different cache misses - the parent, and the other component. Used sparingly this isn’t a problem, but used in many components on many game objects, it offers a convenient way to make every part of the game run slowly. Furthermore, the way the API is designed makes it impossible to avoid the cache misses; it’s performance dead-end that can’t be optimized! This API makes it easy to ruin a game’s performance; it’s a poor API design.

I found the idea of APIs limiting performance of game engines so fascinating I did a [C++Now presentation on the topic](https://youtu.be/W3ViIBnTTKA). In the talk, I introduce another API design which is still simple to use, makes it easy to introduce additional data in the future, and keeps the backing implementation possible to optimize in a variety of ways, including with safe concurrency. It’s worth a watch if you build performance-sensitive libraries.
`;export{e as default};
