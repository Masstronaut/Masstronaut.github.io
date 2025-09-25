const e=`---
title: devlog 2
description: Branding and landing page updates for my startup, plus an exciting personal announcement!
slug: devlog/2
publish: true
lastmod: 2024-04-21
date: 2024-04-21
aliases: null
tags:
- status/evergreen
---

# Penguinsight

## Updating the branding to match the docs vision

When I started building penguinsight, my vision was to build a service that helps teams get customer feedback on anything and use the data to surface insights. Along the way I realized that it was too broad of a goal to build anything meaningful, and niched down to docs.

With my focus zeroed in on docs, I had plenty more to build. Gradually it became clear that the product I am building is drifting further from the name I originally picked for it. The branding didn't make sense because the focus isn't on insights anymore, but rather on docs. It was time for a change that conveys the focus on docs and supporting software developers. I'm stoked about what I landed on - Doc Duck.

I've already got a ton of great ideas to make the brand fun. Most notably, the duck will be a rubber duck, paying homage to the sacred ritual of rubber-duck debugging (or simply rubber ducking) that many software engineers practice. Look forward to the launch of a new domain, terrible duck puns, and an adorable mascot for the brand as it gets fleshed out.

## What goes into a landing page?

For the past few weeks, the penguinsight landing page has only had a heading & subheading with an email capture. It doesn't do a great job convincing visitors they want the product, and that needs to change. To figure out how to approach this I enlisted the help of my friend Tony. He has excellent design sensibilities and a knack for distilling things down to their core. We spent most of the day Thursday catching him up to speed on what I'm doing, riffing on ideas, and figuring out how best to convey the essence of what Doc Duck does.

We landed on an approach that I believe is novel, does an exceptional job conveying the essence of the product, and will work great across device form factors. I've already started building it and I'm excited to take it live.

At a high level, Doc Duck improves the process of providing feedback on docs and addressing that feedback. If I'm successful at executing on this new landing page, in 30s it will:

* Convey what steps are involved in collecting & addressing feedback
* Demonstrate Doc Duck efficiently facilitating each step

I'm really excited to do this because it's the first time I'll be able to easily share with people what I've been working on.

# Personal

I spent some time this week working on [epicweb.dev](https://epicweb.dev) with my friend James, who has coding experience but is new to web. We worked through a couple modules on form validation and accessibility. Most of it was refresher for me, but one new thing I learned is that form elements can have a \`novalidate\` attribute set. This is handy when using client-side validation with something like zod. Once JS is loaded on the page, using \`novalidate\` in a form stops the browser from handling validation, fully handing it over to JS. I think this is a great way to get the benefits of the browser when needed, and progressively enhance the experience with my own validation & error handling if client-side JS is available.

This week is exciting to me for another reason! One of the most fulfilling things I've done as a software engineer is in fact not software engineering at all. As an undergrad student, I had the good fortune to be a volunteer at C++Now and a speaker at CppCon, two amazing C++ conferences. I also went on to present a talk a C++Now after graduating. My work as a PM moved me away from C++, so I haven't been to a C++ conference since. I absolutely adored my time with the C++ committee and at conferences, though, and have yearned for something similar ever since. At Microsoft, I helped run conferences but was not a presenter in them. Recently I discovered that there is a Seattle JS meetup, and started attending their events. My very first time, one of the organizers asked people to submit presentation proposals even if it's just a lightning talk, and so I did. This week, I'm thrilled to have been confirmed as a speaker at the May Seattle JS Meetup, where I will be presenting about [Branded Types](Branded%20Types.md) in TypeScript. This is my first time presenting a technical talk since 2018 and I'm absolutely jazzed to be doing it again!
`;export{e as default};
