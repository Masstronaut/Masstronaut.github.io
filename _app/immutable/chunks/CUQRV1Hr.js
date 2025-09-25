const n=`---
title: Mac tips
description: Various tips, hotkeys, and software I use on my Mac that I find to be broadly helpful and think everyone should know about.
slug: notes/mac-tips
publish: true
lastmod: 2023-12-30
date: 2021-06-23
aliases: null
tags:
- status/seedling
- flashcards/hotkeys
---

# Mac tips

* Screenshot whole desktop::-:\`⌘+⇧+3\` <!--SR:!2022-11-25,339,290-->
* Screenshot box::-:\`⌘+⇧+4\` <!--SR:!2024-05-19,771,330-->
* Screen shot/rec settings::-:\`⌘+⇧+5\` <!--SR:!2024-06-02,785,330-->
* Open launchpad::-:Pinch with thumb and three fingers <!--SR:!2022-10-15,272,270-->
* Open file(s)/folder(s)::-:\`⌘+O\` <!--SR:!2022-07-01,83,290-->
* Show all windows and virtual desktops::-:Swipe up with three fingers OR ctrl+↑ <!--SR:!2022-06-01,11,210-->
* Minimize active window::-:\`⌘+M\` <!--SR:!2022-06-28,189,270-->
* Switch active application::-:\`⌘+tab\` <!--SR:!2022-07-09,200,270-->
* Switch focused window of active application::-:\`\` ⌘+\` \`\` <!--SR:!2024-05-20,772,330-->
* Open the emoji and symbols keyboard::-:\`🌐 OR ⌃+⌘+space\` <!--SR:!2022-06-14,118,292-->

Rebind the \`caps lock\` key to the \`^ control\` key

1. Open system settings
1. Search "Customize modifier keys"
1. Change \`Caps Lock\` to \`^ Control\`

# Software stack

* [Homebrew](https://brew.sh/) - a package manager for MacOS. Install this first and you can use it to install raycast, Arc, and warp.dev
* [Raycast](https://www.raycast.com/) - a drop-in spotlight replacement with [window management](https://www.raycast.com/extensions/window-management), calculator, unit conversions, and great extensibility

\`\`\`\`bash
brew install --cask raycast
\`\`\`\`

* [Arc Browser](https://arc.net/) - A slick browser with better UI and tab management, built on chromium

\`\`\`\`bash
brew install --cask arc
\`\`\`\`

* [warp.dev](https://www.warp.dev/) - A super fast, AI-enabled terminal with an IDE-like editing experience

\`\`\`\`bash
brew install --cask warp
\`\`\`\`
`;export{n as default};
