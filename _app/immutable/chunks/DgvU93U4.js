const t=`---
title: devlog 1
description: Code block updates on allandeutsch.com and detailed feedback on Doc Duck. Plus a new post!
slug: devlog/1
publish: true
lastmod: 2024-04-14
date: 2024-04-14
aliases: null
tags:
- status/evergreen
---

## Code block copy button

Code blocks on [allandeutsch.com](https://allandeutsch.com) now have a copy code button!

I previously had copy code buttons, but I when I upgraded to using [@shikijs/twoslash](https://shiki.style/packages/twoslash) it broke them in a couple ways. First, the output HTML changed and broke my query selectors - that was an easy fix. Slightly more interesting is that typescript code blocks that are augmented with type information by [twoslash](https://twoslash.netlify.app/) processing. Previously I was selecting the \`innerText\` to grab only the code, but twoslash adds additional elements (and \`innerText\`) that contain the type information. I don't want all of that on the clipboard when copying a code snippet! To fix this I put a \`pre\` element with the class \`code-copy-target\` after each code block rendered by shiki. I inject the raw code from my markdown code block into the \`innerText\` of that node. The copy button gets the text from that node instead of the pretty code block. I also set its display to hidden so it doesn't disrupt the view of the page and won't be read by screen readers. I also needed to escape a few characters like \`<\` and \`>\` with their HTML escape code equivalents so that code snippets with angle brackets don't break the page HTML.

## Detailed feedback view page

[Penguinsight](https://penguinsight.com) now has a page for viewing detailed information about feedback. Clicking the link to view the original document now highlights the section of the page that feedback was provided for. I'm really excited about this because it's such useful context for reviewing feedback

## Automatic linting & formatting update

My setup for Prettier and ESLint has been broken for about a month and the lack of auto-formatting has been driving me crazy. This week I've been working through Kent's [Epic Web Dev](https://epicweb.dev) course with a friend, and being reminded of how nice it is to have a working linter & formatter was the final straw.

I finally got around to fixing the config for ESLint & Prettier on Penguinsight. This was more work than I expected; ESLint switched to a new [flat config](https://eslint.org/docs/latest/extend/plugin-migration-flat-config) format which I've now adopted. I wasn't able to upgrade to the latest ESLint 9.0.0 because [typescript-eslint doesn't support it yet](https://github.com/typescript-eslint/typescript-eslint/issues/8211), but I did manage to get [linting with type information](https://typescript-eslint.io/getting-started/typed-linting) working which helped me catch a few potential bugs already.

For the full details, check out how I set up [Linting and formatting a svelte typescript project](Linting%20and%20formatting%20a%20svelte%20typescript%20project.md).
`;export{t as default};
