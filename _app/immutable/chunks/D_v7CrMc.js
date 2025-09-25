const e=`---
title: Slugs make links readable
description: Special characters aren't valid in URLs, so custom slugs are used to make links easier to read.
slug: notes/slugs-make-links-readable
publish: true
lastmod: 2024-02-04
date: 2024-02-04
aliases: null
tags:
- status/seedling
- topic/webdev
- topic/SEO
---

A "slug" is how a page title is encoded as a URL. Unfortunately, many special characters, include spaces, aren't valid in a URL and need to be encoded. Spaces get encoded as \`%20\`, which is hard to read. If I had used this page's title as its slug, it would be encoded as \`slugs%20make%20links%20readable\`. Gross!

Instead, I define a custom slug for my published notes that doesn't use characters requiring encoding. No apostrophes, accents, or spaces for me! This page for example has the slug \`slugs-make-links-readable\`. It's not perfect, but it's a lot easier on the eyes than the version gunked up with a bunch of \`%20\`s in it!

This is why sites and publishers online will typically use a hyphen or underscore in the slug; it's more readable! That readability isn't just for humans, either. Search engines prefer content that they think will be easier for a human to read too.
`;export{e as default};
