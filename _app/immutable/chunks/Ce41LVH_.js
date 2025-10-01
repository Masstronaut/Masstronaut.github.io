const e=`---
title: Take the reins when using LLMs for development
description: LLMs are an incredible evolution of the next word suggestion features of early smartphones, but just as before their predictions are only right for a little while at a time.
slug: notes/rein-in-llms
publish: true
lastmod: 2025-08-31
date: 2025-08-31
aliases: null
tags:
- status/seedling
---

Back when smartphone keyboards began to offer next-word suggestions, a silly game emerged online. Type some word, then select the suggested word 5, 10, maybe 20 times and post the resulting sentence. They would start out normal, and then very quickly descend into random nonsense like "what would you want to do or be even look more like". The feature was useful for the next word, but very quickly everyone saw that they produce nonsense after few words. The suggestions were useful for some words here and there, interspersed throughout my own words whenever the predictions matched. Then along came LLMs, which promised to change everything!

It started innocently enough: GitHub Copilot completing my current line of code with uncanny accuracy. As more agentic tools like Claude Code became available, the LLMs gained the ability to grep for code usage, read relevant files, and write substantial code blocks correctly using their expanded context. As I let the LLMs run more agentically, a subtle shift begins to occur. At the start of a session, I agree completely with much of what they do. As an increasing amount of the context becomes LLM-generated, the predictions strayed further from what I would do. Just like their predecessors, LLMs quickly begin to produce slop. They can predict many more tokens effectively, and the decline in prediction quality is much more gradual, but nonetheless there is a clear decline in quality over time. For me this sparks the question: how can I leverage agentic LLMs to produce lots of high quality code?

Once again, the answer can be found by looking to the past. Write a bit, accept some suggestions. When the suggestions diverge from my intent, I take the reins and point the LLM where I want to go once more. This is much slower than a fully agentic workflow uninhibited by the need to seek my approval for anything. I've found the agentic workflows produce huge swaths of code that need to be reviewed and ultimately thrown out or completely redone to meet my standards. This is not a new problem; many engineering orgs have experienced new devs joining and producing a PR with a huge diff. Often those PRs sit longer, as they are more difficult to review. Strong engineering cultures will often reject these PRs outright, requesting it be split into smaller PRs that are easier to review. Why would I be more lax when working with an LLM?

With the goal of using LLMs for building higher *quality* software such as [typesafe-ts](https://github.com/Masstronaut/typesafe-ts), rather than a higher *quantity* of software, I've found this approach of continuously keeping the LLM on the right path is the most effective. I'd love to hear from you; how are you leveraging LLMs to produce higher quality code?
`;export{e as default};
