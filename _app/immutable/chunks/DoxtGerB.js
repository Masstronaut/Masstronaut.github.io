const e=`---
title: Svelte component APIs
description: There are many ways to Svelte a component...
slug: notes/svelte-component-apis
publish: true
lastmod: 2024-02-06
date: 2024-02-13
aliases: null
tags:
- status/seedling
- topic/webdev
- topic/svelte
---

There are a handful of possible approaches to designing the API for a svelte component. I document the ones I've encountered and my thoughts on them here. If there is a more widely-used name for any of them, or there is a design I'm missing, please [let me know](https://twitter.com/AllanDeutsch)!

* Self-contained component
* Slot component
* Fragmented component
* Nesting doll component

|API characteristic|Self-contained|Slot|Fragmented|Nesting doll|
|------------------|--------------|----|----------|------------|
|Flexibility|Very low|Excellent|Moderate+|Moderate|
|Opinionatedness|High|Very low|Low|Moderate|
|Discoverability|Excellent|Poor|Sufficient|Very good|
|Boilerplate|Excellent|Low|Moderate|Moderate|
|Misusability|Very low|Very high|Moderate+|Low|
|Error quality|Excellent|Poor|Moderate|Good|

In brief, I think of these API characteristics as follows:

* **Flexibility**: how well an API can adapt to a wide variety of uses not anticipated by the API author
* **Opinionatedness**: whether the API imposes its opinions on the consumer or leaves room for the consumer's opinions on how things should be done
* **Discoverability**: how easy is it to "discover" what the API can do without reading its source code or documentation
* **Boilerplate**: does the API require a lot of "copy-paste" code to interact with it, or can it be used without writing lots of code
* **Misusability**: is it easy to use the API in an incorrect or sub-optimal way? [Make API misuse hard](Make%20API%20misuse%20hard.md).
* **Error quality**: when something is wrong, how helpful are the errors? How helpful can they be?

## Self-contained component

\`\`\`\`svelte
<script lang="ts">
	import {Accordion} from '$lib/components'
	const accordionData = [{
			title: "Click to expand",
			content: "Hello, world"
		}, { 
			title: "I expand too!",
			content: "Click me again to make me collapse"
		}
	]
<\/script>
<Accordion items={accordionData} />
\`\`\`\`

Self-contained components tend to have minimal APIs, typically defined in a single file. I've found them the easiest to read and understand within my own codebase. They also have great error messaging when used improperly: not providing \`items\` or providing \`items\` of the wrong type both result in typescript errors. However, the minimal API of self-contained components offers minimal flexibility to consumers. The consumer is unable to do any customization not explicitly supported by the API. Adding a button in the first accordion item (as was done with the Fragmented component API) can't be done without changing the \`Accordion\` API, which also has no way to style nested elements like the accordion items. While it's possible to work around this limitation, doing so would require a much less minimal API:

* Optional styles for each item passed to \`items\`
* Accepting a \`SvelteComponent\` as an option for the \`items\` prop (which would require each item be defined in a separate component file)
* Having a way to pass nested styles to the \`Accordion\` component

I find all of these are very unpleasant ways to customize a component, so I believe this API design is best for single-use components at the application layer that can afford to be stubbornly opinionated.

## Slot component

\`\`\`\`svelte
<script lang="ts">
	import {Accordion, AccordionItem} from '$lib/components'
<\/script>

<Accordion>
	<AccordionItem>
		<h2 slot="title">Click to expand</h2>
		<svelte:fragment slot="content">
			<p>Hello, world</p>
			<button>Click me</button>
		</svelte:fragment>
	</AccordionItem>
	<AccordionItem>
		<h2 slot="title">I expand too!</h2>
			<p slot="content">Click me again to make me collapse</p>
	</AccordionItem>
</Accordion>
\`\`\`\`

[Svelte slots](https://svelte.dev/docs/special-elements#slot) are a great way to allow client code to specify nested content. Slot component APIs are a middle ground between strongly opinionated and unopinionated. They allow the client code to provide content of any structure they choose and style it as they see fit. The component maintains its intended structure because it can specify where the content of each slot goes. By only imposing some structure, I find slot components are able to retain the simpler data models and maintainability of self-contained components, while offering some of the flexibility of fragmented & nested doll components.

Where I find the slot approach lacking is in the API discoverability. I haven't found a way to coerce my text editor to suggest slots as \`name=""\` attribute values. Similarly, TypeScript seems blissfully unaware of slots. This means I must either read the component code or documentation to know about its slots. I find neither approach as ergonomic as an in-editor IntelliSense suggestion.

The slot approach seems ideal for components which need a high-degree of customization for their content, while still wrapping that content in a well-defined design system or underlying functionality. Slots shine brightest in minimally reused layout components like a sidebar or header where the content can vary wildly but needs to remain on-brand. The poor API discoverability makes a slot API undesirable for frequently used or undocumented components.

## Fragmented component

\`\`\`\`svelte
<script lang="ts">
	import {Accordion} from '$lib/components'
<\/script>

<Accordion.Root>
	<Accordion.Item>
		<Accordion.Title>
			Click to expand
		</Accordion.Title>
		<Accordion.Content>
			<p>Hello, world</p>
			<button>Click me</button>
		</Accordion.Content>
	</Accordion.Item>
	<Accordion.Item>
		<Accordion.Title>
			I expand too!
		</Accordion.Title>
		<Accordion.Content>
			<p>Click me again to make me collapse</p>
		</Accordion.Content>
	</Accordion.Item>
</Accordion.Root>

\`\`\`\`

Component fragments offer a clean API with great flexibility for the consumer to provide custom styling and child content. While this example makes the API appear highly verbose, in many cases the \`Accordion.Item\`s could be put in an \`#each\` block to minimize the boilerplate.

Fragmented components are more error prone. Fragments can be used improperly, such as with the wrong nesting or by not including required children. I'm not aware of a way to provide good error messaging like \`Accordion error: Content was not provided\`, though Nesting doll components can enforce the correct nesting hierarchy. The design also makes components with non-trivial state more complicated. If I wanted the accordion to only allow 1 item to be expanded at a time, either the consuming code would need to wire a lot of props and values, or the Accordion components would need to use the context API to handle state since it's not a Self-contained component.

Due to the high level of customizability, I think this approach is best for lower-level uses like component libraries where a less opinionated approach is best. It offers a lot of flexibility to downstream consumers of the component.

## Nesting doll component

\`\`\`\`svelte
<script lang="ts">
	import {Accordion} from '$lib/components'
<\/script>

<Accordion let:Item>
	<Item let:Title let:Content>
		<Title>
			Click to expand
		</Title>
		<Content>
			<p>Hello, world</p>
			<button>Click me</button>
		</Content>
	</Item>
	<Item let:Title let:Content>
		<Title>
			I expand too!
		</Title>
		<Content>
			<p>Click me again to make me collapse</p>
		</Content>
	</Item>
</Accordion>
\`\`\`\`

This design has many of the benefits of Fragmented components, and in some cases a less verbose API (no more \`Accordion.\` for each child element). Where I think it truly outshines is how it reduces the opportunity for incorrect usage of nested child components. It's impossible to put an Accordion \`Item\` outside of an \`Accordion\` component, because the only way to access the \`Item\` component is *inside* an \`Accordion\`. The same is true of the \`Title\` and \`Content\` of an \`Item\`. The Svelte Language Server also provides IntelliSense hints about nested components; the IDE can therefore tell you that \`let:Item\` is available on \`Accordion\`. This is the magic of nesting doll components!

I'm not sure if this approach supports tree-shaking; if not, it may unnecessarily increase bundle size if not all of the nested components are used. It also shares most of the downsides of Fragmented components:

* Limited error messaging
  * it's possible to use them incorrectly without errors
* Somewhat verbose API
* Increased complexity for components that use state across nested components
`;export{e as default};
