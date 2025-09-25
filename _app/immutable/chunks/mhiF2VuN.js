const e=`---
title: 'devlog 10: CascadiaJS'
description: Doc Duck takes to the stage! Finding my first customer and also inspiration at the PNW's premier JS conference.
slug: devlog/10
publish: true
lastmod: 2024-06-26
date: 2024-06-23
aliases: null
tags:
- status/seedling
---

## Doc Duck

This week it's go time for CascadiaJS! My only priorities for the week have been getting ready for and attending the conference to show up as well as I can. Some of the work I did to have a great demo are:

* Fix a bug that caused the page to scroll when submitting feedback using the Doc Duck feedback widget. The bug looked terrible in the zoomed-in demo videos
* I learned that it's impossible to style all text that is *not* the selected text. This was a bummer because I wanted to blur all text on the page except the selection to provide a slick demo video that focuses viewer attention on the core feedback interaction.
* Updated the [landing page](https://docduck.dev) with sharp new demo videos
* Switched to Cloudflare DNS
* Setup Cloudflare R2 storage to serve the new video files

At CascadiaJS I had a couple awesome opportunities:

1. I got to pitch Doc Duck to the entire live & online conference audience. The recording is [available here](https://www.youtube.com/live/o2VQXBI_yk8?si=KjKIWIj4FNJSHLcs&t=11674)
1. Doc Duck had a booth at the startup fair, and I was able to get up to [shenanigans](https://x.com/rachelnabors/status/1804328433008431209) and receive some amazing feedback from Rachel who used to run the React docs, plus I found a startup whose docs are getting 5k+ monthly unique visitors to be my first adopter!

## CascadiaJS

The big event finally came! CascadiaJS was such an awesome time. I met a bunch of awesome people and made lots of new friends. I was surprised and delighted to find that weight lifting is a common hobby among web devs.

Some of the cool people I met:

* [@RachelNabors](https://x.com/rachelnabors/status/1804328433008431209) who used to work on the react docs and had awesome feedback on tooling for enterprise customers
* [@HenriHelvetica](https://x.com/HenriHelvetica), who organized a casual 5k after the conference and gave a great talk on web performance
* [@JohnPhamous](https://x.com/JohnPhamous) had a talk with a sick live demo where the whole UI updated for everyone multiple times without requiring a page refresh. He is also based in Seattle and a fellow lifter!
* [@JoshuaKGoldberg](https://x.com/JoshuaKGoldberg) presented some exciting ideas on mixing linting tools with AI to get better LLM code generation. I'm really interested in trying this idea out together with langchain to build a fun little side project.
* [@DomFarolino](https://x.com/domfarolino), the main guy behind a new web standard proposal, [Observable](https://github.com/WICG/observable) which is an event handling API that doesn't require promises and callbacks.

### My favorite presentations

There were a handful of presentations that I particularly enjoyed. Here they are and why they stood out to me!

#### Building useful apps with small, local LLMs

[Video link](https://www.youtube.com/live/HfsNGyDQtJ4?si=lH2dLN1zOJQUoXY-&t=28565)

This talk was presented by [Jacob Lee](https://x.com/Hacubu) of LangChain and I found 2 concepts from it particularly interesting:

1. Statistical AI pipelines are starting to borrow some techniques from Game AI, such as state machines and behavior graphs, to augment LLM completions with domain logic to get better results. LangChain seems like an awesome tool for this, and I'm excited to try it out.
1. Breaking a large request into many smaller AI tasks and chaining them together makes it possible to get excellent end results while using smaller/faster/cheaper models can run on device.

This talk got me really excited about the potential to get more reliable outputs from AI by using a tool like langchain to compose pipelines of smaller tasks.

#### AI-Generated React Server Components

[Video link](https://www.youtube.com/live/HfsNGyDQtJ4?si=5q6YSkLdJEiwjFDk&t=30292)

This talk by [Tejas](https://x.com/TejasKumar_) was a glimpse at the future of AI and software interactivity. Instead of a simple text chat interface, what if the whole experience could be tailored per request?

In [his demo](https://www.youtube.com/live/HfsNGyDQtJ4?si=-2o4Ip7F6bCz23BZ&t=31681), Tejas showed this future is possible today. He asked an LLM for "Movies with a strong female lead" and not only got the answer, but:

* a custom UI showing the movie posters and titles
* Each movie card was a link to the full film details on [TMDB](https://www.themoviedb.org/?language=en-US)
* Asking for the trailer [starts playing it](https://www.youtube.com/live/HfsNGyDQtJ4?si=PJHP1aXImtuJIlIT&t=31741)

As far as demos go, this was pretty incredible. Imagine a world where every user can get custom applications for the exact task they are trying to accomplish! I think this could be a big unlock for putting the personal into *personal* computing, even for people who aren't software developers.

#### Your AI Needs an Assistant

[Video link](https://www.youtube.com/live/HfsNGyDQtJ4?si=D20jFmPjQo6eKxDQ&t=31969)

[Josh Goldberg](https://x.com/JoshuaKGoldberg) is behind tseslint, a tool that statically analyzes code to help avoid bugs and common pitfalls. His talk looks at combining static analysis tools with AI code generation in an attempt to get better code out of LLMs. The idea is similar to a REPL:

1. Generate code using an LLM
1. Evaluate the code using static analysis tools
1. Prompt the AI to update its code to address feedback from the static analysis step
1. Loop through these steps until there are no static analysis issues

This was a natural follow-up to Jacob's talk on building useful apps with small LLMs. It's an excellent concrete use-case for the pattern. I'm really excited to see what the future holds for this.

#### Optimize for Vibes

[Video link](https://www.youtube.com/live/o2VQXBI_yk8?si=YuPlIMiwCmmt2B6K&t=4143)

[Geoff Rich](https://x.com/geoffrich_) gave a talk on the changes coming to Svelte 5, primarily focused on [Runes](https://svelte.dev/blog/runes) and reactivity. Notably, Svelte 5 will be using signals under the hood. Signals are currently the best approach for efficiently handling fine-grained reactivity, so it's great to see Svelte moving in that direction.

While my initial reaction to seeing the runes API was along the lines of "eww this looks like React hooks," I've slowly come around to them and appreciate how close they are to the vibe Svelte has. They provide a more explicit way of managing reactivity and a few other things in Svelte, and I'm excited to start using them.

#### Why We Should Put More Fun Back Into Web Dev

[Video link](https://www.youtube.com/live/o2VQXBI_yk8?si=o9sn5b9XAcmqGVTk&t=26974)

Usually I find myself disappointed when I see a non-technical presentation at a tech conference, but [Jason Lengstorf](https://x.com/jlengstorf)'s talk bucked that trend and was easily one of my favorites at CascadiaJS. The idea of putting fun first has been core to a lot of my thinking around work lately. It's why I took a couple days off to build [a polyrhythm](https://allandeutsch.com/projects/polyrhythm) and learn the web canvas & audio APIs.

Some central points to his talk were:

* Working hard and having fun are uncorrelated; it's possible to work hard and have a great time.
* Getting the fun work projects and jobs is often a consequence of gaining the relevant skills by building silly things for fun

The talk was a great reminder of a message that has been said many times and many ways - love the process, the journey is more important than the end, etc.
`;export{e as default};
