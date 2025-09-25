const e=`---
title: Identity functions
description: Identity functions make it possible to provide a much better developer experience at API boundaries by improving the type
slug: notes/identity-functions
publish: true
lastmod: 2024-05-19
date: 2024-05-18
aliases: null
tags:
- status/seedling
---

Identity functions are a tool to improve type information. They take the form of a function that provides TypeScript with extra type information and typically have a return value that is identical to argument passed to them. Typically identity functions are used to either provide a library's users with better type information, or for a library to get better type information from a user. In both cases, the goal seems to be improving ease of use and developer experience.

## Providing type hints to API consumers

Libraries with many configuration options commonly use an identity function to make it easier for users to configure them. This is typically done by exporting a function with a name like \`defineConfig()\`. It will take a parameter typed identically to the library's configuration object. Since this tells the IDE what values exist on the object, it can display those options to the users. I much prefer this in-editor experience to tabbing back and forth between my code and the docs. Some tools I use that take this approach are:

* [typescript-eslint](https://typescript-eslint.io/packages/typescript-eslint#config)
* [vite's defineConfig](https://vitejs.dev/config/#config-intellisense)

For example, compare the intellisense help with and without Vite's \`defineConfig()\`:

\`\`\`\`ts twoslash filename="vite.config.ts"
import { defineConfig } from 'vite'


// @log: No intellisense; TypeScript doesn't know this is a vite config object.

const config1 = { base: '/' };

// @log: defineConfig's parameter is typed. Behold: valid config options!

// @noErrors
const config2 = defineConfig({ base: '/' });
//                              ^|



\`\`\`\`

I hope the identity function approach rapidly gains popularity. The *developer experience* is excellent, and it uses simple syntax that is easy to understand. I find it much more intuitive than JSDoc type import annotations.

## Getting narrower type information from API consumers

Imagine you are building a basic router. It needs to know the path and handler for each route, and it takes an array of objects with these values. Trivially, that might look something like this:

\`\`\`\`ts
type Route = {
	path: string;
	handler: (...args: any[])=> any
}
function DefineRoutes(routes: Route[]){
	return routes;
}


\`\`\`\`

This straightforward approach will produce a runtime array of values, but the type system doesn't know the *exact* paths or *exact* parameters for each route. TypeScript only knows that paths are strings and handlers are functions. Hovering over the highlighted values below reveals that TypeScript knows only their broad types.

\`\`\`\`ts twoslash
type Route = {
	path: string;
	handler: (...args: any[])=> any
}
function DefineRoutes(routes: Route[]){
	return routes;
}
// ---cut---
const routes = DefineRoutes([{
    path: '/hello/world', 
//  ^^^^
    handler: (message: string)=> message.length
//  ^^^^^^^
    }, {
    path: '/goodbye/moon', 
//  ^^^^
    handler: ()=>{}
//  ^^^^^^^
}])

\`\`\`\`

Now let's build a version of this API where the type system has extremely narrow types for each value. That can provide many benefits that are impossible otherwise:

* A type safe API that only allows calls to a route that match the route handler's signature
* When specifying a route, instead of any string being allowed it could be limited to only *defined* routes, which would all pop up as suggestions in the intellisense

\`Router\` will need to be a generic so the type system can infer narrower types. Specifically, it needs to narrow in three ways:

1. The \`Route.path\` values must be narrowed to [string literals](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types)
1. The \`Route.handler\` values must be narrowly typed as their exact function signature
1. Both 1&2 need to happen separately for each value in the array

To do this requires a [\`const\` type parameter](https://devblogs.microsoft.com/typescript/announcing-typescript-5-0/#const-type-parameters) (introduced in TypeScript 5.0) and until TS 5.3 it requires using a \`ReadonlyArray\` as well. This should do it:

\`\`\`\`ts twoslash
type Route = {
	path: string;
	handler: (...args: any[])=> any
}
function DefineRoutes<const TRoutes extends ReadonlyArray<Route>>(routes: TRoutes){
//                    ^^^^^                 ^^^^^^^^^^^^^^^^^^^^
	return routes;
}


\`\`\`\`

The \`const\` type parameter tells TypeScript to infer the narrowest type possible. It does a great job at it, too. Check them out for the same call to \`Router\` as above, but using the new typing for it:

\`\`\`\`ts twoslash
type Route = {
	path: string;
	handler: (...args: any[])=> any
}
function DefineRoutes<const TRoutes extends ReadonlyArray<Route>>(routes: TRoutes){
	return routes;
}
// ---cut---
const routes = DefineRoutes([{
    path: '/hello/world', 
//  ^^^^
    handler: (message: string)=> message.length
//  ^^^^^^^
    }, {
    path: '/goodbye/moon', 
//  ^^^^
    handler: ()=>{}
//  ^^^^^^^
}])





\`\`\`\`

Notice that both the \`path\` and \`handler\` values are getting typed as narrowly as possible. That makes it possible to do all sorts of cool things with them:

\`\`\`\`ts twoslash
type Route = {
	path: string;
	handler: (...args: any[])=> any
}
function DefineRoutes<const TRoutes extends ReadonlyArray<Route>>(routes: TRoutes){
	return routes;
}
const routes = DefineRoutes([{
    path: '/hello/world', 
//  ^^^^
    handler: (message: string)=> message.length
//  ^^^^^^^
    }, {
    path: '/goodbye/moon', 
//  ^^^^
    handler: ()=>{}
//  ^^^^^^^
}])
// ---cut---

// @log: Routes is a type union of the paths passed to \`Router()\`
type Routes = typeof routes[number]['path']
//   ^^^^^^


\`\`\`\`

If you brave slightly gnarlier TypeScript, you can get some truly incredible results:

\`\`\`\`ts twoslash
type Route = {
	path: string;
	handler: (...args: any[])=> any
}
function DefineRoutes<const TRoutes extends ReadonlyArray<Route>>(routes: TRoutes){
	return routes;
}
const routes = DefineRoutes([{
    path: '/hello/world', 
//  ^^^^
    handler: (message: string)=> message.length
//  ^^^^^^^
    }, {
    path: '/goodbye/moon', 
//  ^^^^
    handler: ()=>{}
//  ^^^^^^^
}])
// @log: Routes is a type union of the paths passed to \`Router()\`

type Routes = typeof routes[number]['path']
//   ^^^^^^
// ---cut---
// @log: Create a router of {path: handler} pairs

function MakeRouter<TRoutes extends ReadonlyArray<Route>>(
  routes:TRoutes
 ) {
  return routes.map(route=>({[route.path]: route.handler})) as 
  {[T in TRoutes[number] as T['path']]: T['handler']};
}
const router = MakeRouter(routes);

// @log: and easily invoke them with proper type safety

router['/hello/world']('Greetings!')
//       ^|



\`\`\`\`

Pretty nifty, eh? It could be fun to build a router API that provides a nice client object and outputs bindings for popular backend frameworks like Express, fastify, and hono by doing type transformations on the input routes.
`;export{e as default};
