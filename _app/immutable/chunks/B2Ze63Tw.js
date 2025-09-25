const e=`---
title: Uses
description: The tools, technologies, hardware, and software that I use to do my thing.
slug: uses
publish: true
lastmod: 2025-01-16
date: 2025-01-04
aliases: null
tags:
- status/seedling
---

As someone who is interested by design and technology, I often find it fascinating to learn what other people use to do their thing. Typically I've learned about it through visiting their home or office, a youtube video, or a random social media post.

Recently, I found out via [Wes Bos](https://wesbos.com/uses) that there's another way - having a [uses](uses.md) page! Inspired by that and many others on [uses.tech](https://uses.tech), I decided to write my own!

## Computing environment

My ideal computing environment works great out of the box with sensible defaults, and provides powerful ways for me to customize it to suit me. In a past life, I really enjoyed Arch linux on a desktop. Unfortunately, the realities of game development (requires Windows) and more recently my preference for a laptop have led me down other paths.

Currently I find Mac works pretty well out of the box and has the best hardware for my needs (good performance, exceptional battery life, clean aesthetic). It's been a bit of a journey to get the customizations dialed in, but I'm very happy with how things are now.

* My computer is an M1 MacBook Pro. The OG Apple silicon laptop, it's been working great since day 1. I used to also run a more powerful desktop, but I'm not doing game development these days and the laptop is plenty for web. The battery life is amazing!
* [Aerospace Window Manager](https://github.com/nikitabobko/AeroSpace) makes it easy for me to manage my windows. It reimplements window management from scratch on Mac to have better hotkey support and instant window switching. I much prefer this setup to the native MacOS solution
* [Sketchybar](https://github.com/FelixKratz/SketchyBar) is how I know which windows are in which spaces. I wrote a custom config that show my Aerospace workspaces and the windows in each. If you're interested, it's in my [dotfiles repo](https://github.com/Masstronaut/dotfiles/tree/main/sketchybar). Let me know if you have any questions!

<picture>
<source media="(prefers-color-scheme: dark)" srcset="https://img.allandeutsch.com/allandeutschcom-note-images/9353046d58688f8c597ebfe37c82010a.png"/>
<source media="(prefers-color-scheme: light )" srcset="https://img.allandeutsch.com/allandeutschcom-note-images/28667c4ea728c28a073e02d87b78197e.png"/>
<img alt=""/>
</picture>

* I use [WezTerm](https://wezfurlong.org/wezterm/) as my terminal emulator. I'm curious about [Ghostty](https://ghostty.org/), but it's tabs don't play well with Aerospace and that's a non-starter for me. I particularly like that WezTerm is configured using lua, as I primarily use it for neovim which is also configured using lua.
* [NeoVim](https://neovim.io/) is my editor of choice. I love how configurable it is and that it's done using Lua instead of JSON. I've found vim-style bindings make text editing a lot more fun! You can read more about my thoughts about it in my blog post [I use Neovim btw](I%20use%20Neovim%20btw.md). My full config is in my [dotfiles repo](https://github.com/Masstronaut/dotfiles/tree/main/nvim)
* I've got some fancy keyboards, but I have come to love the simplicity of just using the one attached to my laptop. I have made some minor tweaks to it using [Karabiner Elements](https://karabiner-elements.pqrs.org/). Mostly just changes to shift and caps lock to make them more useful for me. Full details in my [dotfiles](https://github.com/Masstronaut/dotfiles/blob/main/karabiner/karabiner.json), though I wouldn't necessarily recommend using these without some serious consideration.
* [Obsidian](https://obsidian.md) is where I do all of my writing. It works on a folder full of markdown files which I sync across my devices using Git. I also built a CICD workflow for my notes repo that publishes this site, so whenever I change a public note it goes live immediately and automatically. This setup brings me a lot of joy.
* [Arc](https://arc.net/) is my portal to the internet. I mostly use it as a chrome wrapper, but I like it more.
* [Raycast](https://www.raycast.com/) is what I use to launch applications, open files, and solve basic queries like math and unit conversions. It's fast and works well reliably. Great replacement to the default spotlight search.
* Across many of the tools I keep open all day, I use the [Rosé pine theme](https://rosepinetheme.com/). I find it easy on my eyes, and use both the "Main" (dark) and "Dawn" (light) variants, switched automatically at sunrise and sunset.

## Audio and video equipment

I've worked remote since before the CoViD-19 pandemic, and expect I'll continue working remote for a substantial portion of my career. One thing that frustrates me about remote work is that communication is lower bandwidth than in person. The audio isn't as clear, it's not possible to see someone's whole body (and importantly their body language!), and eyes and faces on camera are often blurry, low resolution, or full of compression artifacts.

The tech industry has many neurodivergent people who struggle with picking up social cues, auditory processing, and plenty of other communication skills. Remote workers with poor quality audio/video setups at home make it even harder by providing worse input data.

My home setup is my acknowledgement of these challenges and it reflects my efforts to communicate clearly and effectively with everyone.

* [Sony A7IV camera](https://www.amazon.com/dp/B09JZT6YK5) is my go-to for both my photography hobby and video calls. I typically do videos with a lens at ~50mm focal length.
* My desk is set up in front of a window, but I have an [Elgato key light](https://www.elgato.com/us/en/p/key-light) for evening calls and cloudy days.
* The [Yeti mic](https://www.logitechg.com/en-us/products/streaming-gear/yeti-premium-usb-microphone.988-000100.html) has been helping my coworkers hear me reliably for years with zero quality complaints (the substance of that audio is another story)
*  A [Compass mic arm](https://www.logitechg.com/en-us/products/streaming-gear/compass-boom-microphone-arm.html) keeps my mic in position to pick up my voice clearly. I think it looks great and works very well, but I'm casually interested in swapping it for something that holds the mic below me rather than above me.

## Desk setup

My desk setup makes up much of the periphery of what I see when working. It needs to be functional, but I also want it to be beautiful in an understated and non-distracting way.

Most importantly, my desk setup must facilitate me doing great work. As I write this from my couch at the start of 2025, this is a topic I've found myself reflecting on often in recent months. Lately I've been concluding that my desk setup is failing at its prime directive and needs to be changed.

This is a topic I find myself revisiting every year or two. In *my value system* it's important to me that I do great work. *Doing great work is fulfilling* and *fulfillment is a requirement of deep contentment*. I also find that *my ideal working environment*, or at least my understanding of it, changes over time.

Here's the elements of my desk setup as they stand currently. I've included my thoughts on what is and isn't working well.

* A [Twelve South BookArc](https://www.twelvesouth.com/products/bookarc-for-macbook) is how I dock my laptop without cluttering up my desk surface. Recently I've not been using it, though.
* My laptop is a 13" MacBook pro. For a few months I've been working with my laptop open and using the built-in keyboard instead of a mechanical board. Being able to make use of it as second, smaller screen below the primary one has been great.
* The massive [Dell 49 inch ultrawide monitor](https://www.dell.com/en-us/shop/dell-ultrasharp-49-curved-usb-c-hub-monitor-u4924dw/apd/210-bgtz/monitors-monitor-accessories) has been adorning my desk for several years, held by a desk-mounted [Ergotron HX arm](https://www.ergotron.com/en-us/products/product-details/45-475#/?color=white). In theory the screen is equivalent to two ~27" monitors with no bezel in between. In practice, window management is much worse than on two separate screens. It's also so wide that the far edges of it aren't very ergonomic to use. I've come to the conclusion it's too big. I love the built-in USB hub, and it's ability to function as a KVM was useful in the past when I used multiple computers.
* The desk itself is a 48" walnut butcher block that I cut and finished by hand and attached to some sit/stand legs from Humanscale. I often find it gets more cluttered than I like with papers, small items, and a variety of accessories. I'd like to take a pass at reducing how many items live on it. In the back I use their [NeatTech cable organizer](https://www.humanscale.com/products/cable-management-tools/neattech-system), which hides the mess but in my case "neat" is a stretch...
* My monitor can't quite handle all the devices I plug in at my desk, so for the rest of them I have a [Kensington thunderbolt 3 dock](https://www.kensington.com/internal-support-pages/SD5300T/). I'd like to prune down the list of always attached accessories to remove the need for this.
* A [Logitech MX Master 3 mouse](https://www.logitech.com/en-us/products/mice/mx-master-3s-mac-bluetooth-mouse.910-006570.html) and [Ducky One 2 RGB TKL white keyboard](https://www.duckychannel.com.tw/en/One-2-RGB-TKL-White\`) have been sitting unused on my desk for a few months. I find myself only using the built-in keyboard and trackpad lately. This is the most seamless setup for moving between working at my desk and *anywhere else*, as all I have to do is plugin my laptop and everything is exactly the same. I have been working from [cafes](cafes.md) a ton the past few years, and I suspect the two are related.
* Previously I had a [Herman Miller Embody chair](https://store.hermanmiller.com/office-chairs-ergonomic-chairs/embody-chair/4737.html), but despite trying to convince myself otherwise for several years, I really didn't find it that comfortable. I sold it in 2024, and haven't replaced it with another office chair since.
* A [Walkingpad R1 Pro treadmill](https://www.walkingpad.com/products/walkingpad-r1-pro-2in1-foldable-treadmill) has been the sole intermediary between me and the floor at my desk for the better part of a year. I find walking much more comfortable than standing and appreciate the health and thinking (blood flow) benefits that come with it vs standing and sitting. I chose this model because I wanted the option to also run at home, but when I run the belt slips and when I don't run I'm aware of the crease where it folds. When I'm not at my desk it's bigger and uglier than its contemporaries. Rather than being more convenient for walking and running, I find it a bit uncomfortable for both. I also have a mat under it, so it's not very convenient to fold it away. I should really sell this thing and replace it with the smaller [Egofit Walker](https://egofitwalker.com/products/m1-under-desk-treadmill?variant=41959712850059) instead of turning this page into a rant about it.
* I have a [Kensington iPad dock](https://www.amazon.com/gp/product/B09L1M2WTK) with chargers for my AirPods and iPhone. I would rather my phone live further from my desk, but I need it for 2FA codes. The dock isn't compatible with cases, and my iPad lives in a case. Overall I don't think this thing is working well for me. There's not really room on my desk for an iPad with the 49" ultrawide anyway, so I think it's time to get rid of this thing.

## Web technologies

The bulk of my work recently is building things on the internet, particularly front-end web development ie code that runs on the client device. I'll also include tools that I use in my development process here.

* HTML & CSS are a necessity. These days most of my CSS is written as inline Tailwindcss classes, and I'll use vanilla CSS for anything that feels complicated or overly verbose to do in tailwind.
* TypeScript is my preference for interactivity & logic. My background is in C and C++, so working in vanilla JS without type information is really difficult for me. I much prefer TypeScript to JSDoc type annotation comments.
* Svelte is my go-to for reusable components. I love how close to vanilla HTML, CSS, and JS svelte is. I'm starting to migrate projects from svelte 4 to svelte 5 and first impressions have been great.
* Sveltekit is a natural pairing for a svelte frontend that needs a lightweight backend. It's got pretty good end-to-end type safety and I feel it has sensible defaults. My only real complaint is that I find it a little annoying to manage component logic that should be run exclusively on the client vs client and server.
* Vite has been great. Easy to write plugins, works well, works quickly, and development seems to closely mirror production. It's a dev server I don't have to think about much, and that's wonderful.
* Vitest has been a great test runner. I love that it shares my vite config as maintaining multiple versions of environment config is horrible. I use it to run all my tests.
* Storybook is a tool I'm really excited about, but that prior to svelte 5 felt like it wasn't quite there yet *for svelte components*. The new svelte 5 API has been awesome to work with on the first project I'm migrating from svelte 4 to 5 and I'm excited to integrate storybook more into my development workflow.
* I use Git/GitHub for version control. I recently watched a talk about [how Jane Street does code reviews](https://www.janestreet.com/tech-talks/janestreet-code-review/) and I'm interested in exploring what else might be out there for the code review experience. Their concept of a "brain" (a diff of what diffs have been reviewed) seems really interesting.
* Static deployments on GitHub Pages and server-backed deployments on Vercel has been working well for me. They just work, and that's fantastic. I am looking to try out [coolify](https://coolify.io/) on a dedicated server though. I think serverless has some great properties for scaling, but also some major downsides and complexity. I want to explore affordable long-running servers to back low scale projects as it seems the DX may have caught up.
* Static analysis tools are magic because they reduce the cognitive burden of writing great code. Often the rules have been written by thoughtful engineers with a deep understanding of the technologies they are linting, and can be a great way to catch bugs before they happen. I use ESLint and typescript-eslint and am thrilled to have them.
* Similarly, formatting/code style is not something I want to think about. Prettier does a great job handling it for me so I can use my brain for more interesting problems.
`;export{e as default};
