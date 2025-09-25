const e=`---
title: I use Neovim btw
description: Imagine a world where something as simple as editing text becomes a fun and challenging puzzle to be solved.
slug: notes/use-neovim
publish: true
lastmod: 2024-07-30
date: 2024-07-30
aliases: null
tags:
- status/seedling
---

I've been writing code in various capacities for nearly twenty years now, though only seriously for around the past 10 years. Despite getting into Arch linux as a hobby in my early teens, I never really put a lot of thought into my text editor & IDE setup. Notepad++, followed by Sublime text, then Visual Studio, and finally VS Code have always felt sufficient to me.

While I've been aware of vim for years, I've long held the opinion that the steep learning curve isn't worth it. Most of my time programming isn't spent text editing problems. I spend a lot more time on problems like:

* What's the best approach to implement this?
* How can I configure X to do Y?
* How should I architect this system?
* Which API design is going to be the most intuitive for consumers?
* What's the best way to communicate these trade-offs in a spec to ensure we have a valuable discussion about this work?
* Which edge cases do I need to consider and test for?

I have spent comparably little time on text *editing* problems such as:

* How can I delete this code I'm not using?
* What's the fastest way to refactor this hacky testing code into a proper unit/integration test?
* How can I quickly reshape this series of function calls in object property k:v pairs?

Learning vim to optimize my text editing skills - which only take up about 25% of my time "programming" - is something I've always concluded is not worth it.

Additionally, VS Code has incredibly broad adoption across technology stacks today. It's excellent plugin architecture has produced a thriving ecosystem of 3rd-party add-ons that means in-editor support for every technology is just a couple clicks away. Plus, Microsoft has done something that seemed impossible in the past: established industry standards for integrating an editor with both programming language tools (via Language Server Protocol, or LSP) and debuggers (via the Debug Adapter Protocol, or DAP). It almost feels ridiculous to consider another editor right now...

As it turns out, Microsoft's fantastic success establishing industry standards with LSP and DAP has been great for the rest of the editor ecosystem. Thanks to the standardized APIs, [other](https://www.cursor.com/) [editors](https://zed.dev/) have tapped into the incredible work. There are now many editors with modern features (or plugins) built leveraging these standards, such as:

* [Language-aware semantic syntax highlighting](https://github.com/nvim-treesitter/nvim-treesitter)
* [Language-specific text completion suggestions](https://github.com/hrsh7th/cmp-nvim-lsp)
* [Integrated debugger support](https://github.com/mfussenegger/nvim-dap)

The reality is that while VS Code is perhaps the most dominant a text editor has ever been, the quality of alternatives is also better than ever. Recently, I've been doing more and more tinkering with my text editors. I tried out Zed, set up a custom \`launch.json\` to debug a Deno project, and even customized my VS Code UI to look more minimal:

<picture>
<source media="(prefers-color-scheme: dark)" srcset="https://img.allandeutsch.com/allandeutschcom-note-images/19525a9cd3427d47b8c3200c472c7610.png"/>
<source media="(prefers-color-scheme: light )" srcset="https://img.allandeutsch.com/allandeutschcom-note-images/3a7f36c483eb758c7241f2ef73818415.png"/>
<img alt="A code block on allandeutsch.com rendered to show the filename in a tab along the top bar of the code block"/>
</picture>

Meanwhile, the YouTube algorithm has been recommending me videos from [TypeCraft](https://www.youtube.com/@typecraft_dev), a dev YouTuber who makes content about configuring your dev environment using linux, tmux, and neovim. I've been in the mood for learning recently, so [on Sunday afternoon](devlog%2011.md#learning-neovim) I decided to go through TypeCraft's free course on setting up Neovim as an IDE. Note that the course is on setting up the IDE, not on vim motions and keybindings. I went into this with extremely basic vim skills - I could change between normal and insert mode, save a file, exit vim, and not much more.

## Configuring Neovim

Despite my near-complete incompetence, I was able to get through the whole course. That fact says a lot about Chris (TypeCraft)'s course quality. Neovim aside, I learned a lot about the workings of modern IDEs. If I end up going back to using VS Code as my daily driver, it still feels like time well spent.

Something I particularly liked was the approach to configuring Neovim. All the extensions are written as lua scripts (and naturally there is [a plugin to get better completions in your nvim config files](https://github.com/folke/lazydev.nvim)) in \`~/.config/nvim/\`. He set it up so that the [plugin manager, Lazy](https://github.com/folke/lazy.nvim/) is loaded first, and it will auto-load any other plugins that are included when Neovim is launched. These factors mean that:

1. the config folder can be [version controlled via git](https://github.com/Masstronaut/nvim-config)
1. cloning the config repo into \`~/.config/nvim/\` then opening neovim is all it takes to set up a new machine with my IDE
1. To try someone else's config is as simple as cloning their config

Another detail I like about the Neovim config is that it is extremely minimal by default, and I only pay the cost of loading in features that I want. As the name implies, the Lazy package manager will lazy load packages by default. This means I only have to wait for my debugging plugins to load when I start to use debugging features! The result is an extremely snappy editor that opens in **milli**seconds with a minimal UI.

This approach of being minimal by default hearkens back to my time with Arch Linux, another environment where nearly all functionality is opt-in. The main drawback is quite obvious - some assembly is required. The benefits are plentiful though, and make a good case for why it's worth the effort:

* It provides the opportunity to customize things to my own preferences
* Configuring all the features I want helps me learn a bit more about how they work
* I don't have to pay a performance costs for things I'm not going to use
* 🌶️ take: it demonstrates to me and others that I take pride in my tools and my work.

## Why I changed my mind about Vim

While I've historically felt that vim wasn't worth the effort, a few things have come together to change my mind. These factors really changed how I evaluate the ROI on learning vim. I'm now of the opinion that it's

I'm ashamed to admit it, but the biggest one was putting in some effort to learn vim. I incorrectly believed that it would be akin to learning an alternative keyboard layout like Dvorak: something I tried and decided wasn't worth it after a couple weeks. The thing is, to have the same productivity with vim only requires knowing three vim hot keys:

* \`:wq\` - to save the current file and quit vim
* \`i\` - Enters "insert mode", which is basically identical to how every other text editor works - move the cursor with arrow keys, and typing a key adds it at the cursor.
* \`Esc\` - exits insert mode, which is necessary to save and quit.

After learning those three commands, I was surprised to find I'm roughly as productive in vim as without it. It turns out everything I thought was required to match my existing productivity in vim is pure upside. 🤯

Another big factor is the IDE experience. Coming from my background building games, I can't imagine trying to debug code using only print statements; a life choice I've found shockingly common among web developers. I'm also quite fond of GitHub Copilot and language-specific completions, and wouldn't want to give them up by changing IDE. This seemed like a huge barrier, but largely thanks to Microsoft these are widely available features now. I spent a few hours getting them setup, but now my config is [on GitHub](https://github.com/Masstronaut/neovim-config), so it'll be extremely fast in the future.

 > 
 > Vim transforms text-editing into a [puzzle game](https://vim-adventures.com)-like experience

The final reason, and one that caught me by surprise, is that using vim is fun! It has really changed the text editing experience. I think of text editing as the necessary labor that shapes and molds text like clay until it matches the picture in my mind of what the code should do. With a basic editor, this is laborious and menial work. It's akin to sculpting using only a fine chisel. Vim transforms text-editing into a [puzzle game](https://vim-adventures.com)-like experience that makes text editing a lot more fun. Look at [Primeagen's enthusiasm](https://youtube.com/shorts/VWihUa8mUKI?si=h3vZqiXXFAM3axX5) for [nailing a macro](https://youtube.com/shorts/mV8ffOGWZCs?si=vAHndCDFfh-OUyjJ)! I have *never* seen anyone that excited about typing using a regular text editor.

The fun alone makes vim worth learning. I love coding, and I'm thrilled to still be finding new ways to add joy to the experience. Given the recent [2024 Stack Overflow developer survey showed only 20% of developers are happy at work](https://survey.stackoverflow.co/2024/professional-developers/#3-satisfied-at-current-job), I'm hoping that we can all get a little better at [putting the fun into development](https://www.youtube.com/live/o2VQXBI_yk8?si=OCXL34vH51MVR9f5&t=26974).
`;export{e as default};
