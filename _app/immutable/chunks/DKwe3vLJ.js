const e=`---
title: 'devlog 15: inline comment rendering'
description: Imagine being able to see word processor style comments, inline, on any website! Turns out it's not small feat...
slug: devlog/15
publish: true
lastmod: 2025-11-03
date: 2025-11-03
aliases:
- null
tags:
- status/seedling
---

I've made exciting progress on [Doc Duck](https://docduck.dev): it now has the ability to show inline comments on ranges of text. This may not sound like a big deal, but in Sam's words, [that turns out to be Really Fucking Hard](https://bsky.app/profile/samwho.dev/post/3ls7ydfxux22p). Sam's case was actually much easier than mine, too; it was scoped to his own site. Doc Duck needs to be able to do it on *any* site.

## Finding a previous selection in a document

One of the hardest parts of this problem is *finding the range of the document that was commented on*. Documents tend to change over time, and Doc Duck's code needs to work on any site, which means a wide range of possible ways the page content exists. This means many edge cases which all need to be handled. The Doc Duck widget uses 5 heuristics to try to find the range with feedback on it.

I also employs a handful of other techniques that attempt to manage changes in document structure between when feedback was provided and when a Doc Duck user is trying to view it. For example, when a user selects text whitespace gets collapsed, but when traversing the DOM tree it doesn't. I had to build a custom utility for collapsing whitespace.

I've still got a lot more work to do here to provide a good experience when the original text has changed, but I'm happy with where it's at currently as a v1.

## Rendering feedback on a 3rd-party site

Another major challenge with Doc Duck's inline comments rendering is that it's done on third party sites. Feedback should only be rendered for Doc Duck users who are authorized to see feedback on that site. This is difficult because it would be insecure for a user signed in on [docduck.dev](https://docduck.dev) to send their auth cookie on requests to the doc duck servers that come from other web pages.

The solution I've come up with here is that users must request to see feedback inline on a page from within the Doc Duck dashboard. They get a 1-time token that the widget can use to load feedback for them on a single page. It's extremely secure, works reliably, and the experience is seamless.

I'm excited to get this in the hands of customers as it's a massive improvement over existing solutions.
`;export{e as default};
