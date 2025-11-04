const e=`---
title: 'devlog 13: frontend tooling updates'
description: 'Upgrading dependencies: a pain, but one that often comes with sweet rewards.'
slug: devlog/13
publish: true
lastmod: 2025-02-24
date: 2025-02-24
aliases:
- null
tags:
- status/seedling
---

## Upgrading this site to TailwindCSS v4 and Svelte 5

Recently a bunch of the tools I use had major version upgrades. I'm generally slow to upgrade packages unless it's a security update, but these are technologies I'm interacting with daily. Notably:

* TailwindCSS 4
* Svelte 5
* Vite 6

I've already started an overhaul to [wealthy.fyi](https://wealthy.fyi) to use svelte 5, and found I was really missing some of the new features when working on my personal site ([allandeutsch.com](https://allandeutsch.com)).

Since this site is more substantial, the great package migration was a bit more involved. It took the better part of two days, aided by the svelte & tailwind migration scripts. As far as I can tell everything is working and looking roughly the same now. I wanted to quickly write up some of the changes, and potentially expand them into a blog post of their own if people are interested (let me know on [bluesky](https://bsky.app/profile/allandeutsch.com)).

Tailwind changes:

* Config is now defined in CSS instead of JS/TS
* Tailwind shipped their own vite preprocessor, removing the need for postcss and \`lang="postcss"\` in \`style\` tags
* When using \`@apply\` in a svelte \`style\` tag to apply tailwind classes, it's now required to \`@reference "path/to/app.css"\` to load tailwind
* Tailwind now uses CSS variables for design tokens (colors, sizes, etc.), so it's possible to use them with css \`var()\` instead of the old \`theme()\` or \`@apply\` approaches. **This has been most of the migration effort**.

Svelte changes:

* derived state using the old syntax (\`$:\`) would assign a new *value* when rerun, breaking referential equality. Now in Svelte 5, \`$state()\` and \`$derived()\` values are proxied. The wrapper maintains referential equality, so downstream updates don't happen anymore.
`;export{e as default};
