const e=`---
title: Beautifully render code in Svelte
description: How I transform the code in my markdown files into beautifully rendered snippets on this site.
slug: notes/svelte-shiki-twoslash
publish: true
lastmod: 2024-04-24
date: 2024-04-07
aliases: null
tags:
- status/budding
---

I love the craft of building software. It amazes me that I can write something and have computers reliably and consistently do what I told it to. Add a few more clicks and I can make it instantly available to anyone, anywhere on the planet, so long as they have an internet connected device.

When I code something particularly interesting I want to share how I did it. Teaching is a valuable part of my own learning process, and it's rewarding to help other people get excited about building. Sharing code is a critical part of that, and this note is about how I make the code I share look great!

To start with, it's helpful to understand a bit about my pipeline for getting from raw markdown code blocks to a rendered page on [allandeutsch.com](https://allandeutsch.com).

* [mdsvex](https://mdsvex.pngwn.io/) is a svelte preprocessor that uses [remark](https://remark.js.org/) to process raw markdown and [remark-rehype](https://github.com/remarkjs/remark-rehype) to transform it to HTML
* mdsvex passes the markdown code blocks to a code highlighter to provide syntax highlighting
* A \`meta\` string in the code fence of code blocks is used to pass options to twoslash; I use \`fenceparser\` to parse the code fence
* I wrote a highlighter that uses [shiki](https://shiki.style) to render code in light & dark themes
  * It uses [@shikijs/twoslash](https://shiki.style/packages/twoslash) to provide type annotations on typescript code
* A CSS media query styles the code using the light or dark theme based on the user's preference

## Installing the dependencies

My site is built using "Static Site Generation" (SSG), a technique which compiles my source into static HTML, CSS, and JS files at build time so the deployment can be delivered to visitors really efficiently via CDN since no logic needs to run on each request. This approach means I can do the highlighting at build time rather than runtime, and all of the tools I listed above can be included as dev dependencies. to install them:

\`\`\`\`sh
npm install --save-dev @shikijs/twoslash shiki mdsvex fenceparser
\`\`\`\`

## Configuring mdsvex

One important thing to know about mdsvex is that it is a svelte **pre**processor. This is important to note: the preprocessor code doesn't get preprocessed because it runs before the compiler. For now, that means **it cannot use TypeScript** because it would need to be compiled to JS first and that doesn't happen for [reasons](https://github.com/sveltejs/kit/pull/4031). Hopefully that will [change in the future](https://github.com/sveltejs/rfcs/pull/59).

What this means practically is that the mdsvex config can't be implemented in TypeScript: it **must** be javascript. Here's how I configured mine to highlight code blocks!

\`\`\`\`js filename="mdsvex.config.js"
import { defineMDSveXConfig as defineConfig, escapeSvelte } from 'mdsvex';
import { codeToHtml } from 'shiki';
import { transformerTwoslash } from '@shikijs/twoslash';
import { lex, parse } from 'fenceparser';

// Define an mdsvex-compatible code highlighter
async function ShikiTwoslashHighlighter(code, lang, meta) {
	// Parse the \`meta\` prop, if defined, for any options to provide to shiki
	let fence;
	if (meta) fence = parse(lex([lang, meta].filter(Boolean).join(' ')));
	if (fence) {
		// structure the options as a \`CodeOptionsMeta\` object
		fence = { ...fence, __raw: meta };
	}

	// Run shiki's highlighter
	const html = await codeToHtml(code, {
		// shiki's language list is case sensitive and all lowercase
		// default behavior without a language is to throw
		// I prefer no highlighting, which 'text' achieves
		lang: lang ? lang.toLowerCase() : 'text',
		themes: { light: 'github-light', dark: 'slack-dark' },
		defaultColor: 'light',
		meta: fence,
		transformers: [
			// only run twoslash if \`twoslash\` is in the code fence
			// see: https://shiki.style/packages/twoslash#explicit-trigger
			transformerTwoslash({ explicitTrigger: true }),
			// any other transformers...
		]
	});
	// this escapes the rendered HTML and wraps it in a
	// svelte [{@html ...} tag](https://svelte.dev/docs/special-tags#html)
	return \`{@html \\\`\${escapeSvelte(html)}\\\` }\`;
}
// configure mdsvex
const config = defineConfig({
	extensions: ['.md', '.svx'],
	highlight: {
		highlighter: ShikiTwoslashHighlighter
	},
	// other config options...
});

export default config;

\`\`\`\`

There's a good bit going on in this config, so I did my best to document it with comments. One aspect I didn't cover was theming; I think the [shiki dual theme documentation](https://shiki.style/guide/dual-themes) does a great job explaining how to configure rendering light and dark themes. It also includes CSS snippets for setting the theme. I prefer to follow what the user's OS specifies, which perfectly fits their [CSS media query](https://shiki.style/guide/dual-themes#query-based-dark-mode) example which worked for me with no changes.

## Configuring svelte to use the mdsvex preprocessor

Svelte needs to be configured to use mdsvex as a preprocessor for markdown files. This is done in \`svelte.config.js\`. mdsvex supports using svelte components in markdown. By convention, svelte-y markdown files use the \`.svx\` extension, but it's possible to use any file extension.

This is how I configured svelte to use mdsvex as a preprocessor for \`.md\` and \`.svx\` files:

\`\`\`\`js filename="svelte.config.js"
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // using the extensions from mdsvexConfig keeps them in sync
  extensions: ['.svelte', ...mdsvexConfig.extensions],
  preprocess: [
    mdsvex(mdsvexConfig), // <--- crucial
    // other preprocessors...
  ],
  // other config...
};
export default config;
\`\`\`\`

With that config in place, svelte is able to import \`.md\` and \`.svx\` files and render them as components.

I've found this makes my notes on programming (like this one!) much nicer to read. Hopefully you agree!
`;export{e as default};
