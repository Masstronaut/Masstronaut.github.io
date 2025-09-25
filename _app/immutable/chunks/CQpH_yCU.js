const t=`---
title: Add a demo link to TypeScript code blocks
description: Seeing example code with syntax highlighting is great, but sometimes you've just gotta run the code and see what happens...
slug: notes/code-block-tsplay-demo-link
publish: true
lastmod: 2024-05-09
date: 2024-05-09
aliases: null
tags:
- status/seedling
---

TypeScript Playground is an online tool to interactive with TypeScript. It's a great way to test out small snippets, share repros, and experiment with the language as it is portable and requires no setup. Recently, I learned about another amazing feature - it's possible to [Dynamically generate TypeScript Playground links](Dynamically%20generate%20TypeScript%20Playground%20links.md) for any TypeScript code! Technical writing should [Make example code interactive](Make%20example%20code%20interactive.md), and this is an excellent way to do it.

Once I've got my TS playground link generated, all that's left is to put the link on the page. Easy!

I already built a copy button for my  code blocks, which makes this even easier. I modified that code to render TS playground links instead of copy buttons. This Svelte component renders a link as a small square button:

\`\`\`\`svelte filename="TSPlaygroundButton.svelte"
<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon';
	import { ArrowTopRightOnSquare } from '@steeze-ui/heroicons';

	export let href: string;

	const tailwindClasses = 
		"group flex items-center rounded-lg border " +
		"border-base-content/50 px-3 py-2 " +
		"hover:border-base-content transition-all "
	
	// Reactively add any classes passed to the component
	// This allows component consumers to style the link
	$: classes = tailwindClasses + $$props.class
<\/script>

<a
	class={classes}
	title="Open in TypeScript playground"
	target="_blank"
	{href}>
	<Icon
		src={ArrowTopRightOnSquare}
		class="w-6 stroke-base-content/50 transition-colors group-hover:stroke-base-content" />
	<span class="sr-only">Open this code snippet on typescript playground</span>
</a>
\`\`\`\`

Great! But I still need to find the \`<pre>\` tags with a \`data-tsplay\` attribute and use my new component with them. I only need this to happen on pages based on markdown and rendered using MDSveX, so I put the logic in my mdsvex layout component.

For these links to show up on my code blocks, I need to:

1. Find all the code block elements (\`<pre>\` tags) with a \`data-tsplay\` attribute
1. Grab the TS playground link from the \`data-tsplay\` attribute
1. Instantiate a \`TSPlaygroundButton\` with the link and put it on the code block

1 & 2 are pretty straightforward with basic browser APIs. I'm using svelte, so I did number 3 with the [Svelte client-side component API](https://svelte.dev/docs/client-side-component-api#creating-a-component). It should be pretty similar in other frameworks.

\`\`\`\`svelte filename="MDSVexLayout.svelte"
<script>
	import { onMount } from 'svelte';
	import { default as TSPlaygroundButton } from '$lib/components/TSPlaygroundButton.svelte';

	function addTSPlaygroundLinkToCodeBlocks() {
		// 1. Find all the code block elements with a playground link
		const codeblocks = document.querySelectorAll(
			'pre.shiki[data-tsplay^="https://typescriptlang.org/play/#code/"]'
		);
		Array.from(codeblocks).forEach((element) => {
			// 2. grab the playground link
			const tsplaylink = element.getAttribute('data-tsplay');
			if (!tsplaylink) { return; }
			const anchor = element.firstElementChild;
			if (!anchor) return;
			// 3. instantiate the button using the 
			new TSPlaygroundButton({
				target: element,
				anchor,
				props: {
					href: tsplaylink,
					// This positions the link left of the copy button
					class: 'absolute top-2 right-16'
				}
			});
		});
	}
	// Once the page is mounted add the TS playground links
	onMount(() => {
		addTSPlaygroundLinkToCodeBlocks();
	});
<\/script>

<slot />
\`\`\`\`

Adding these interactive links is how I [Make example code interactive](Make%20example%20code%20interactive.md) on my blog. I built it for a SeattleJS presentation on [Branded Types](Branded%20Types.md) that I ran out of that very blog post! It turned out to be a valuable tool for quick demos when I wanted to do live coding or show runtime outputs.
`;export{t as default};
