const e=`---
title: 'devlog 5: back on stage!'
description: Back on stage, this time to present about TypeScript! I also made some PRs to TypeScript and added dynamic TS playground links.
slug: devlog/5
publish: true
lastmod: 2024-5-11
date: 2024-5-11
aliases:
- 'devlog 5: back on stage!'
tags:
- status/evergreen
---

This week I had the thrilling opportunity to present at the Seattle JS meetup. I presented about a TypeScript technique called [Branded Types](Branded%20Types.md). I presented out of the linked blog post, which worked surprisingly well!

![image](https://img.allandeutsch.com/allandeutschcom-note-images/af829ed2cd26978869fef3a7e85ebaaa.jpeg)

The last time I presented a technical talk was at C++Now in May of 2018 on the topic of [Game Engine API Design](https://www.youtube.com/watch?v=W3ViIBnTTKA). Since my C++ era I've had two career changes, first to become a PM, and second to become a web developer. It was great to be back on stage sharing something I know, and the meetup group was super welcoming and friendly. A bunch of people came up to thank me for the talk afterwards and there seemed to be a lot of interest in how [Doc Duck](https://docduck.dev) could improve documentation.

I also had my interview with First Round capital for their Summer 2024 [Product Market Fit Method](https://pmf.firstround.com/) program. I think it went well, but there were a couple questions that I didn't answer as well as I would've liked. One was about raising capital, which I said I was planning to do in 2024H2, but in reality it's something I want to do when [Doc Duck](https://docduck.dev) is on pace to become capital constrained, rather than arbitrarily at some other time.

It's also been an eventful week for other reasons - both my Dad's birthday and Mother's day. I celebrated with my dad by taking him to our favorite Seattle thermal spa, [Banya 5](https://maps.app.goo.gl/J2z1uKnFS85UoNWa9), as well as a post-soak brunch at [Portage Bay Cafe](https://maps.app.goo.gl/uvcpNCNufjt5yWxQ7). He also gave Maya & I a tour of the school he started working at recently, which has an awesome rooftop soccer field! 🤯 For Mother's day Maya & I are going down to Olympia to visit my mom and check out the [Mima Mounds](https://maps.app.goo.gl/ppnZ4QwM1mymF6CU8) as well as try out a fancy new restaurant in Olympia with her.

## Adding interactive code to AllanDeutsch.com

For my [Branded Types](Branded%20Types.md) presentation at the SeattleJS meetup I tried a new presentation format: talk through my blog post. I've noticed a recent trend where tech streamers will livestream themselves reading blog posts and adding commentary. Riffing on that idea, I thought: why not read my own blog post and provide commentary?

I wanted to try this new (to me) format for this talk because:

1. It's a web development talk, so presenting from a website feels fitting
1. Making slides is a lot of work and the talks aren't recorded, so I'd rather put the effort into making a great blog post that remains valuable
1. It's a lightning talk (low stakes) at a free event (if I bomb nobody wasted money to see it). The risk is super low!

Part of my talk involved showing how branded types can cause certain undesirable behavior to produce type errors. My blog could already [Beautifully render markdown code blocks in Svelte](Beautifully%20render%20markdown%20code%20blocks%20in%20Svelte.md), including TypeScript errors, which was a great fit for the talk.

For a couple examples, though, I wanted to make small changes to code or show runtime outputs. For now my blog doesn't have interactive code snippets. I needed another way to [Make example code interactive](Make%20example%20code%20interactive.md).

The obvious choice was to create the demos on the [TypeScript playground](https://typescriptlang.org/play/). The process seemed straightforward enough. For each snippet I'd have to:

1. Create the playground with the code snippet
1. Save the playground
1. Generate a link to it
1. Add the link to my post in the right spot

This would be super tedious though, especially if I ever want to make changes to the code (which I did at least 10 times the day of my presentation 😅). I knew there had to be a more automated way to do this. Fortunately, I found it quickly in [the playground docs on URL structure](https://www.typescriptlang.org/play/?#handbook-9). My solution to [Make example code interactive](https://allandeutsch.com/notes/make-example-code-interactive/) was to [Dynamically generate TypeScript Playground links](Dynamically%20generate%20TypeScript%20Playground%20links.md) and [Add a demo link to TypeScript code blocks](Add%20a%20demo%20link%20to%20TypeScript%20code%20blocks.md) on my blog. The results were great, and I got a ton of positive feedback on my presentation!

I was also pretty prolific in my writing this week! In addition to this devlog, I published a handful of notes:

* [Branded Types](Branded%20Types.md), the article I presented at SeattleJS. It also inspired me to write about some of the technical details that powered it:
* [Dynamically generate TypeScript Playground links](Dynamically%20generate%20TypeScript%20Playground%20links.md) and
* [Add a demo link to TypeScript code blocks](Add%20a%20demo%20link%20to%20TypeScript%20code%20blocks.md). These inspired a more philosophical note about technical content in general:
* [Make example code interactive](Make%20example%20code%20interactive.md)

## Epic web dev

This Friday James & I met up to learn about data modeling. A lot of it was review for me because I've already been using [prisma](https://www.prisma.io/) to talk to my database, but I learned about an awesome feature I had no idea existed: [logging events](https://www.prisma.io/docs/orm/prisma-client/observability-and-logging/logging#event-based-logging)! We also learned about a library called [chalk](https://www.npmjs.com/package/chalk) to style the logging output. This can make slow queries stand out in my logs. Awesome!

## Open source

I use a lot of open source, and one of the things I've been really excited about is the tech stack for [Beautifully render markdown code blocks in Svelte](Beautifully%20render%20markdown%20code%20blocks%20in%20Svelte.md). While I was working on my [Branded Types](Branded%20Types.md) presentation, I found a bug. A tool called "twoslash" runs my typescript snippets through the TS compiler to get extra metadata about the code and display it in the snippets. It also supports custom commands for things like user defined warnings and errors. I couldn't get them to work, and I managed to debug it down to a problem with indentation. My editor auto-indents comments to line up with code, but twoslash only transforms custom commands that are not indented. I made a [3 character PR to address this issue](https://github.com/microsoft/TypeScript-Website/pull/3099) and wrote a short essay explaining it.

There was another issue I had a while back where the behavior of TypeScript's [type predicates](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates) and [assertion functions](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#assertion-functions) was unexpected. I [created an issue](https://github.com/microsoft/TypeScript/issues/57436) about it. The issue was closed as "working as intended", but I remain unconvinced that it is good and desirable behavior. In the interim, I've [made a PR to update the TypeScript docs](https://github.com/microsoft/TypeScript-Website/pull/3100) to better convey the current behavior.
`;export{e as default};
