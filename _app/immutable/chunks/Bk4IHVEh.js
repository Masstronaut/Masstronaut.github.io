const t=`---
title: Dynamically generate TypeScript Playground links
description: TypeScript playground has a URL param to specify the code content. This makes it possible to always have up-to-date playground links for example code!
slug: notes/dynamic-ts-playground-links
publish: true
lastmod: 2024-05-11
date: 2024-05-09
aliases: null
tags:
- status/budding
---

Recently I was presenting a talk at SeattleJS on [Branded Types](Branded%20Types.md) using my blog post as the visual content. I wanted to do some live coding, so I decided to add TypeScript playground links to my code snippets.

Fun fact: it's possible to [dynamically generate TypeScript playground links](https://www.typescriptlang.org/play/?#handbook-9)!

The process is fairly simple:

1. Use \`lz-string\` to base64 encode and zip the source code and URI encode the result (use \`LZString.compressToEncodedURIComponent()\`, an easy one-liner)
1. Append the encoded string to a playground URL
1. Put the link on the code block

I love this solution because it generates an updated link every time I build my site. I'm guaranteed to have up-to-date playground links and don't have to do anything after the initial setup. Awesome!

I followed [the TS playground docs](https://www.typescriptlang.org/play/?#handbook-9) to write the code that generates TS playground links. I updated my code highlighter function to generate the TS playground links and add them to a \`data-tsplay\` attribute on the containing \`<pre>\` tag for each TS code block. Check it out:

\`\`\`\`js filename="mdsvex.config.js"
import LZString from 'lz-string';
import { codeToHtml } from 'shiki';
import { transformerTwoslash } from '@shikijs/twoslash';
import { lex, parse } from 'fenceparser';
// ---cut---
/** @type Exclude<import('mdsvex').MdsvexOptions['highlight'],false | undefined>['highlighter'] */
async function ShikiTwoslashHighlighter(code, lang, meta) {
	let tsPlaygroundLink = undefined;
		if (lang === 'ts') {
			// Generate a TS Playground link
			tsPlaygroundLink = \`https://typescriptlang.org/play/#code/\${
				LZString.compressToEncodedURIComponent(code)
			}\`;
		}
	const html = await codeToHtml(code, {
		transformers: [
			transformerTwoslash({ explicitTrigger: true }),
			// This custom transformer adds the data-tsplay attribute
			{
				name: 'TSPlaygroundLinkInserter',
				pre(el) {
					if (tsPlaygroundLink !== undefined)
						el.properties['data-tsplay'] = tsPlaygroundLink;
				}
			},
			// other transformers...
		],
		// other config options...
	});
	
\`\`\`\`

With that I have playground links available in my output HTML. The last step I have to [Make example code interactive](Make%20example%20code%20interactive.md) on my blog is to [Add a demo link to TypeScript code blocks](Add%20a%20demo%20link%20to%20TypeScript%20code%20blocks.md).

I'm so glad I ended up doing this. Being able to quickly pop open a live editor to make changes and show runtime values made my Seattle JS talk much better!
`;export{t as default};
