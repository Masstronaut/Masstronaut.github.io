const e=`---
title: Total Typescript notes
description: I've learned a lot from this course, and use this note to record bits I want to remember and riff on some of my observations.
slug: notes/total-typescript-notes
publish: true
lastmod: 2024-05-19
date: 2023-11-23
aliases: null
tags:
- status/budding
---

Sections here which I've expanded into their own notes:

* [Branded Types](Branded%20Types.md) & [Type branding removes structural type compatibility](Type%20branding%20removes%20structural%20type%20compatibility.md)
* [Identity functions](Identity%20functions.md)

## Splitting a string literal using a delimeter

\`\`\`\`ts twoslash
type SplitString<
  T extends string,
  Delimiter extends string
> = T extends \`\${infer Left}\${Delimiter}\${infer Right}\`
  ? [\`\${Left}\`, ...SplitString<\`\${Right}\`, Delimiter>]
  : [T];
\`\`\`\`

This snippet splits a into a union of parts using a recursive template literal string. The type splits its input into two pieces: before the delimiter and after. The part after the delimiter is recursively passed into the \`SplitString<>\` utility type and split until no delimiters remain. The split pieces are then bundled up into a tuple.

### Extracting route parameters from a route

Imagine you have routes with parameters in them that you wish to extract into an object that could be passed to a route handler with the values for a route instance. For example, you have handlers for the following routes:

|Route|RouteParams object provided to handler|
|-----|--------------------------------------|
|\`/item/:id\`|\`{ id: string }\`|
|\`/user/:id/team/:teamId\`|\`{ user: string; team: string}\`|

To maintain type safety, the routes need to be used to generate RouteParams objects at the type level. The API to generate a RouteParams object would look something like \`\`RouteParams<\`/item/:id\`>\`\`, receiving the route as a *type* parameter rather than a runtime variable.

Building on the \`Split\` type from *Splitting a string literal using a delimeter* this is possible, enabling type-safety in route handlers.

\`\`\`\`ts
type RouteParams<T extends \`/\${string}\`> = {
  [Segment in SplitString<T, '/'>[number] 
	  as Segment extends \`:\${infer Param}\` 
	  ? Param : never]: string;
};
\`\`\`\`

This snippet works in 3 parts:

1. \`SplitString<T, '/'>\`splits the route into segments separate by \`/\`
1. Segments that start with a \`:\` are kept as params; segments that don't are discarded as \`never\`
1. The kept segments are used to create a [mapped type](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html) with the params as the object keys that correspond to string values.

Then a runtime parser can be used to grab the param values from real request URLs, construct a RequestParams object, and pass it to the route handler. Awesome!

## TypeScript MOMU pattern - Mapped object, mapped union

This isn't explicitly a pattern in TTS, but I noticed its recurrence and wanted to note it for myself.

Imagine you have an object type consisting of basic key-value (KV) pairs. For example:

\`\`\`\`ts
type Person = {
	id: string;
	name: string;
	age: number;
};
\`\`\`\`

Using a [mapped type](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html) this can be transformed into a derivative type, such as one where the KV pairs are tuple values. To demonstrate, consider this mapped type:

\`\`\`\`ts
type PersonKVs = {
	[K in keyof Person]: [K, Person[K]];
};
\`\`\`\`

A hand-written equivalent of this type would be:

\`\`\`\`ts
type PersonKVs = {
	id: ['id', string];
	name: ['name', string];
	age: ['age', number];
};
\`\`\`\`

Mapped types are useful for transforming one type into another shape, adding functionality (such as getter/setter functions), etc.

The Mapped Object Mapped Union (MOMU) pattern extends this by taking the mapped object and further mapping it into a union type. This can be used to transform an initial object type such as \`Person\` into a union of tuple types. For example:

\`\`\`\`ts
type PersonKVTuples = {
	[K in keyof Person]: [K, Person[K]];
}[keyof Person];

// equivalent type:
type PersonKVTuple = ['id', string] | ['name', string] | ['age' | number];
\`\`\`\`

In the MOMU pattern, the initial mapped object type is mapped once more into a union type. Performing a second mapping provides a lot of extra options when transforming types.

The MOMU pattern can also be used to transform a union type into another union type. One example of this is turning a discriminated union into a union of template literals:

\`\`\`\`ts
type Errors = {
	code: 404;
	message: 'Not found';
} | {
	code: 403;
	message: 'Forbidden';
};

type ErrorMessages = {
	[K in Errors as K['code']]: \`\${K['code']}: \${K['message']}\`;
}[Errors['code']];
\`\`\`\`

The \`ErrorMessages\` would be equivalent to the following union type:

\`\`\`\`ts
type ErrorMessages = '404: Not found' | \`403: Forbidden\`;
\`\`\`\`

The MOMU pattern also works if the scenario is flipped and you wanted to get from \`ErrorMessages\` to \`Errors\`:

\`\`\`\`ts
// Produces the same union as the \`Errors\` type
type Errors2 = {
    [Error in ErrorMessages]: Error extends \`\${infer code}: \${infer message}\` 
    ? {code: code, message: message} 
    : never
}[ErrorMessages]
\`\`\`\`

## Use generics at the lowest level possible

Imagine you want to write a generic function for overriding home page feature flags. Instead of making the entire config object generic, make only the *home page* feature flags generic. Here's an example from the total typescript exercise:

\`\`\`\`ts
export const getHomePageFeatureFlags = <Flags>(
  config: { rawConfig: { featureFlags: { homePage: Flags } } },
  override: (flags: Flags) => Flags
) => {
  return override(config.rawConfig.featureFlags.homePage);
};
\`\`\`\`

Rather than having the entire \`config\` object be a generic, only \`config.rawConfig.featureFlags.homePage\` is. Here the \`override\` signature is able to accept only the nested home page flags object. This provides nicer intellisense, requires less code be written, and is more readable.

### Example: Get a typed array of object keys

Using JavaScript's \`Object.keys()\` is a handy way to get an array of any object's keys. Unfortunately, the result is typed as \`string[]\`, which isn't specific enough to make typesafe accesses to an object. For that case, it's better to use a generic to get a *typed* array of the keys. Check it out:

\`\`\`\`ts

const typedObjectKeys = <T extends string>(obj: Record<T, unknown>) => {
  return Object.keys(obj) as Array<T>;
};
\`\`\`\`

\`typedObjectKeys\` uses the generic at the lowest level possible, the object's keys, to minimize how much of the type is a generic. It still requires a cast (the \`as Array<T>\`) to get the result typed correctly.

### Example: infer the literal types of an array, rather than the basic type

Sometimes the TypeScript compiler infers a broader type than is desirable. Consider this example:

\`\`\`\`ts
const makeArray = <T extends Array<string>>(values: T) => values;
const array = makeArray(['foo', 'bar']); // typed as Array<string> or string[]
\`\`\`\`

This typing is less precise than I'd like, because the values are known at compile time. Because the generic \`T extends Array<string>\` is broadly generic on the *\`Array\`* type, the compiler doesn't narrow the generic being passed to \`Array<>\`, ie the \`string\`. By moving \`makeArray\`'s generic a lower level - the type parameter being passed to \`Array<>\`, Typescript is able to infer a narrower type. Rather than it inferring the \`Array<string>\` it will infer what is being passed to \`Array\`. Here's what that looks like:

\`\`\`\`ts
const makeArray = <T extends string>(values: Array<T>) => values;
const array = makeArray(['foo', 'bar']); 
//    ^ typed as Array<'foo' | 'bar'> or ('foo' | 'bar')[]
\`\`\`\`

This makes use of the same trick as the *getting a typed array of object keys* - moving the generic to something more specific to coerce the Typescript compiler to infer a narrower type.

### Example: wrap a function and safely get the result or thrown error

Often there is a need to call a function which might throw. by the time all the cases are handled in the \`catch\` block it's a long and deeply-nested mess of unwieldy code. What would it look like to instead wrap the potentially throwing function and get a result of \`'success'\` or \`'failure'\` that can be used with a guard clause instead? Here's a riff on how Matt Pocock handles that in Total Typescript.

Notice that the generic is at a higher level (the entire function type) rather than the lowest possible level (the parameters & return type of the function). This is so that in contexts where the generic is used, the intellisense will show \`makeSafe\` as a generic on the function type, which is more intuitive than having a generic with 2 type parameters - 1 for the function parameters and another for the return type.

\`\`\`\`ts
const makeSafe =
  <T extends (...args: Array<any>) => any>(func: T) =>
  (
    ...args: Parameters<T>
  ):
    | {
        type: 'success';
        result: ReturnType<T>;
      }
    | {
        type: 'failure';
        error: Error;
      } => {
    try {
      const result = func(...args);
      return {
        type: 'success',
        result,
      };
    } catch (e) {
      return {
        type: 'failure',
        error: e as Error,
      };
    }
  };

// usage
const validateWidget = (foo: Widget) => {if (foo.valid) return foo; throw "Invalid widget";}

const safeValidateWidget = makeSafe(validateWidget);

const widgetValidationResult = safeValidateWidget(widget);
if(widgetValidationResult.type !== success)
	return "failed to validate widget"
widgetValidationResult.result.useWidget();
\`\`\`\`

This approach is great because the \`result\` on \`widgetValidationResult\` will be correctly typed as the return type of \`validateWidget\`. Similarly, trying to call \`validateWidget\` with a value that doesn't satisfy \`Widget\` will result in a Typescript error.

## Narrowing return types in generics

TypeScript's type system being built on set theory has some limitations when it comes to narrowing.

## Function overloads

Function overloads are a bit weird in TypeScript. This is an artifact of TypeScript being compatible with JavaScript, which doesn't support function overloading. To work around this, TypeScript allows function overloading in a very specific way:

1. All of the overload signatures must be declared using the \`function\` keyword (they can't be arrow functions)
1. The overload signatures must be declared next to each other in code, with nothing else in between them
1. None of the overload signatures can have an implementation
1. An overload implementation must be written after the overload signatures. It must be compatible with all of the overload signatures declared before it.

To simplify, here's an example of what a valid function overload might look like:

\`\`\`\`ts
// The overload signatures are public interfaces that can be used to invoke the function
function foo(input: string): string;
function foo(input: number): number;
function foo(input: {user: string}): boolean;
// The implementation is a *private* interface which is not exposed to users
function foo(input: any){
	if(typeof input === "string") return "string";
	if(typeof input === "number") return 123;
	if(typeof input === "object" && Object.hasOwn(input, "user")) return true;
}
\`\`\`\`

Unfortunately this example has an issue. While the compiler correctly infers return types, it thinks that the implementation isn't compatible with the declarations. There are 2 approaches to fix this:

1. Provide a type annotation for the implementation's return type
1. Add type annotations to the values being returned within the implementation.

Option 1 looks like this:

\`\`\`\`ts
function foo(input: any): string | number | boolean {
// ...
}
\`\`\`\`

The downside of this approach is that typescript can't provide useful hints within the function about valid values, especially for narrower types.

The alternative is a slightly more verbose approach of specifying types for each return value. In many cases this will probably be fine as real functions tend to be more complex than demos. There are two ways of doing this. My preference is to declare the variables ahead of the return statement and use a type annotation:

\`\`\`\`ts
function foo(input: any) {
	if(typeof input === "string") {
		const s: string = "string";
		return s;
	}
	// other implementations...
}
\`\`\`\`

Alternatively, the annotations can be provided inline using \`as\`:

\`\`\`\`ts
function foo(input: any) {
	if(typeof input === "string") return "string" as string;
	// other implementations...
}
\`\`\`\`

This is more concise, but in my opinion using \`as\` is a bit of a code smell vs using an explicit type annotation.

Overall, TypeScript function overloads seem to only be worth it if the return type changes based on the input. If the return type is always the same, I find it cleaner to write a single function signature where the parameter(s) are a union of the possible input values and there is a single return type.

## Identity functions

See [Identity functions](Identity%20functions.md)

## Type transformations

Type transformations are techniques that change a type from one format to another. Some examples of common type transformations:

* converting array of objects into an a single object with a key for each array element
* Converting an object into an array
* Changing the shape of objects

Here I've catalogued some type transformation techniques I find helpful and/or interesting.

### Reverse mapped types

A reverse mapped type lets you inject data from the inferred type into itself.

In this example, \`injectEventNames\` adds type information to the \`name\` function parameters on the object passed to it. Since \`name\` has no type annotation, it otherwise would've been typed as \`any\`.

\`\`\`\`ts twoslash
export function injectEventNames<T>(obj: {[K in keyof T]: (key: K) => void}) {
  return obj;
}
// @log: Notice that \`name\` is typed as "hover"
const events = injectEventNames({ hover: (name) => console.log(name) })
//                                        ^^^^


\`\`\`\`
`;export{e as default};
