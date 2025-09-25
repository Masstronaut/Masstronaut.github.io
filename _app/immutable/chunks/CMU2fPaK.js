const e=`---
title: devlog 11
description: Learning new technologies, vim, and neovim!
slug: devlog/11
publish: true
lastmod: 2024-07-09
date: 2024-07-28
aliases: null
tags:
- status/seedling
---

## Building an AI improv skit generator

I find that over time I encounter a number of technologies I'm interested in trying out. Often, it's not easy to do so in an existing project because something else is already in use that fills a similar role. A couple recent examples for me are:

* [Deno](https://deno.land), a *JavaScript*/*TypeScript* runtime and package manager
* [Drizzle ORM](https://orm.drizzle.team/docs/overview), a *TypeScript* Object-Relational Mapping (ORM) tool with great performance that has syntax similar to SQL

Additionally, I learned about [LangChain and LangGraph](https://www.langchain.com/) recently at [CascadiaJS](https://cascadiajs.com/2024/) and was pretty excited to try my hand at building something with it. I had no need for it in my existing projects, though. Time to start a new project!

I decided to use LangGraph to build an AI agent that orchestrates an AI-powered improv show. It runs on a Deno server that exposes a single endpoint that allows users to provide a skit topic, and then generates a few rounds of banter between some AI comedians on the topic. As the agent completes steps in its task, the progress is saved as a \`Checkpoint\` which I save in a database using Drizzle.

The project isn't deployed anywhere, but you can check out the code [on my GitHub](https://github.com/Masstronaut/langchain-endpoint). If you want a little improv skit of your own, the repo has some setup instructions in the readme.

## Learning Neovim

On Sunday I was still in the learning mood, but didn't feel like doing any serious programming work. So instead I decided to cave to some peer pressure (and YouTube algorithm recommendations) and [learn how to setup Neovim as an IDE](https://www.youtube.com/playlist?list=PLsz00TDipIffreIaUNk64KxTIkQaGguqn). The experience brought back fond memories of my time as an Arch Linux user, and now [I use Neovim btw](I%20use%20Neovim%20btw.md). I was surprised to find that getting to a similar level of productivity with vim vs without takes very little time, and the rest is upside. Plus, editing text is *substantially* more fun using vim. As someone who spends most of the day typing, I believe it's worth learning just to make the day more fun!
`;export{e as default};
