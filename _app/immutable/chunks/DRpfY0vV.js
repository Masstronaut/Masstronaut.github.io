const e=`---
title: 'devlog 6: routing overhaul'
description: A major overhaul to routing on this site! Plus TS identity functions, reference sheets, and my resume!
slug: devlog/6
publish: true
lastmod: 2024-05-19
date: 2024-05-15
aliases:
- 'devlog 6: routing overhaul'
tags:
- status/seedling
---

## Allandeutsch.com

### Improving how markdown-based pages are loaded

A design decision I made years ago has recently started to haunt me. The decision was to have every page from my notes served on the route \`https://allandeutsch.com/notes/{slug}/\`. For a long time this wasn't an issue, but recently I started writing weekly [dev logs](https://allandeutsch.com/devlog/) like the one you are reading now! Since my devlogs are a periodical publication, I wanted them to stand alone in a separate place - \`/devlog/{id}\`. That was incompatible with the existing approach to publishing where notes lived under \`/notes/{slug}/\`. For the first couple couple weeks I manually copied over the devlogs into my site repo and while that worked fine, it left things to be desired. I had to manually update all the links, and I ended up finding a variety of other workarounds were needed to use functionality I'd already built for notes. It was finally time to improve my publishing pipeline to support more configurable page routes!

Now I can set a note's slug to a nested route, such as \`devlog/6\` (this page!) and it goes through the normal note publishing pipeline with all my shiny features and gets published on the right URL! I also cleaned up the server code for getting from the slug of a requested page to the markdown file with its content. What used to be a brittle and buggy process has been smooth and reliable since the change went live.  Before I was loading up all the notes when the server started. That caused me headaches in a number of ways:

1. If I updated a note after launching the dev server, I had to restart the server to render the new content. ick!
1. My CICD pipeline recently started to ran out of RAM eagerly loading all my notes. I switched to a more serial approach to loading which fixed this.

The new approach will reload notes on request/change, which has been a much nicer dev experience for me. This has been great as I've been playing with some more advanced [twoslash](https://shiki.style/packages/twoslash#rendererrich) features, like in [Identity functions > Providing type hints to API consumers](Identity%20functions.md#providing-type-hints-to-api-consumers), where I show intellisense completion suggestions.

It took a couple days getting all my note routing changes up and running, but I'm thrilled I did. One giant leap towards open-sourcing the site code!

### Flexbox reference sheet

James and I built our own versions of the [malven flexbox reference](https://flexbox.malven.co). I had fun making [a Tailwind version](https://allandeutsch.com/projects/flex/) and it was refreshing to work on a small project that is done at the end of the day. It was also a great first project for James, who set up a new remix project, added Tailwind to it, and got a ton of practice in arranging boxes.

A few years ago I started building my resume as a basic HTML web document and it's been much better than a word doc. This week I moved it from a standalone project into my website, and now the web version of [my resume is on allandeutsch.com/resume](https://allandeutsch.com/resume/). I also updated the styles so it stays readable on mobile. Much easier to share a link to it now!

## Total TypeScript

This week I finished the unit on [identity functions](Identity%20functions.md). I find the way they are used to coerce the TypeScript compiler to infer more specific types is fascinating. The technique manifests in a variety of ways, and they are often behind the scenes of great TypeScript APIs.

I found [reverse mapped types](Total%20Typescript%20notes.md#reverse-mapped-types) to be particularly fascinating.

## Doc Duck

This week I found out that I wasn't accepted to the PMF program with first round. While I was really excited about it and moving to SF for a few months, I slowly realized it was going to be pretty painful. I had something I *really* want to be in Seattle for every couple weeks for June through mid-July, which would've really detracted from my SF experience. Plus missing the Seattle Summer would've been a real bummer. I'll set my sights on landing some customers on my own and shooting for an SF accelerator in Fall/Winter, which should line up well with when I need to extend my runway.

I also talked to my friend Vritant, who works on the VS Code education team. He made the excellent observation that Doc Duck would be very helpful for other types of web-based documents, not just *product* docs. He works on building an in-editor curriculum for teaching programming, and it would be helpful if students could send their feedback from right in the editor.

Similarly, I think Doc Duck could be helpful for other courses. The web development courses I've done recently are all custom web software, which could be great candidates:

* Josh W Comeau's [CSS for JS devs]()
* Kent C Dodd's [Epic Web Dev](https://epicweb.dev)
* Matt Pocock's [Total TypeScript](https://www.totaltypescript.com/)
`;export{e as default};
