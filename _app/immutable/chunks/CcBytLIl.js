import{t as s,a as r}from"./Sv_TBA-2.js";import"./BaJv1Ckm.js";import{a5 as l}from"./BOCtfefK.js";import{l as h,s as d}from"./B8ys1oD7.js";import{M as c}from"./Caavvd2i.js";const e={title:"devlog 12: What if MacOS was a linux distro",description:"The first Seattle Design meetup and an interesting question: How far can I get if I pretend MacOS is a linux distro?",slug:"devlog/12",publish:!0,lastmod:"2024-08-23T00:00:00.000Z",date:"2024-08-18T00:00:00.000Z",aliases:null,tags:["status/seedling"],readTime:10,internalLinks:["/devlog/11"],flashcards:[]},{title:b,description:k,slug:v,publish:I,lastmod:x,date:T,aliases:M,tags:S,readTime:A,internalLinks:W,flashcards:O}=e;var p=s('<h2 id="what-if-i-pretend-macos-is-a-linux-distro"><a aria-hidden="true" tabindex="-1" href="#what-if-i-pretend-macos-is-a-linux-distro"><span class="icon icon-link"></span></a><a href="#what-if-i-pretend-macos-is-a-linux-distro" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>What if I pretend MacOS is a Linux distro?</h2> <p>I got into Linux as a kid and used Arch as a teenager. The Arch linux philosophy had a big impact on shaping who I am as a developer and as a person. At DigiPen I switched to Windows as my desktop OS, because I needed both DirectX and Visual Studio for my coursework. In 2020 with the release of Apple’s silicon I switched to MacOS. After a year with it, I realized I was rarely using my desktop and decided to go all-in on a MacBook + dock setup, marking the end of my time using Windows as a desktop OS.</p> <p>These things happened largely due to circumstances I had little control over (course curriculums and hardware innovations). Despite that, it’s felt like a slow and steady drift away from the Arch philosophy of building my system to be exactly what I need. Along the way, many small frictions have started to add up and started to become frustrating. Things like VS Code not feeling like a fast and reliable IDE and poor window management in MacOS have contributed to me feeling uncomfortable in my own home.</p> <p>One way I tried to resolve this is by trying out other text editors such as Zed. <a href="/devlog/11">Recently</a> I had a lot of fun learning vim bindings and setting up neovim as an IDE. Neovim starts out as a very barebones editor, and all the functionality needs to be built up by adding plugins and writing some configuration code. The experience made me nostalgic for Arch. It was also a good reminder that even on MacOS I can customize my environment to suit my needs. The whole experience got me thinking: What if I pretended MacOS was a linux distro?</p> <h3 id="window-managers"><a aria-hidden="true" tabindex="-1" href="#window-managers"><span class="icon icon-link"></span></a><a href="#window-managers" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Window managers</h3> <p>It turns out there are a lot of developers using Mac these days, and some of them have built Mac apps that echo elements of the Linux experience. Perhaps the most well known example is <a href="https://brew.sh" rel="nofollow">homebrew</a>, a popular package manager for Mac. Another great example is window management. Notoriously awful on Mac, Linux has a plethora of options and paradigms. My preference is tiling window managers, a system that automatically positions and resizes windows on the desktop as they are opened and closed. I was pleased to find several Mac options, including:</p> <ul><li><a href="https://github.com/nikitabobko/AeroSpace" rel="nofollow">aerospace</a>, which takes inspiration from i3wm</li> <li><a href="https://github.com/ianyh/Amethyst" rel="nofollow">amethyst</a>, which takes inspiration from xMonad</li> <li><a href="https://github.com/koekeishiya/yabai" rel="nofollow">yabai</a></li></ul> <p>I chose to use amethyst. Amethyst uses the native virtual desktop system on Mac and adds window tiling on top. Switching desktops in amethyst therefore inherits an animation delay from the OS. I don’t love the delay, but the benefits are that Amethyst has good multi-monitor support and I can still use 1-handed trackpad gestures to get around. Gestures are often handy when using my laptop undocked on the couch.</p> <h3 id="terminal-emulator"><a aria-hidden="true" tabindex="-1" href="#terminal-emulator"><span class="icon icon-link"></span></a><a href="#terminal-emulator" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Terminal emulator</h3> <p>There are also a ton of terminal emulator options. The default Mac terminal isn’t amazing, so I was happy to have alternatives to explore. I’ve been using warp for a while, and I think it’s AI is fantastic for running commands around the system. it has a lot of UI that can be distracting when using neovim, though. I decided to switch to WezTerm as my primary terminal emulator. Similar to neovim it is highly configurable using lua. I think it looks great!</p> <h3 id="top-bar"><a aria-hidden="true" tabindex="-1" href="#top-bar"><span class="icon icon-link"></span></a><a href="#top-bar" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Top bar</h3> <p>The Mac menu bar (typically at the top of the screen) was next on my hit list. It has some useful info and addons, but it’s missing a crucial piece of information I want at a glance: what windows/apps are open, and where? Fortunately I found an awesome extensible alternative I’ve been using called <a href="https://github.com/FelixKratz/SketchyBar" rel="nofollow">Sketchybar</a>.</p> <p>I’ve set the Mac menu bar to auto hide in favor of seeing sketchybar by default. I set it up to show me:</p> <ul><li>the date and time</li> <li>Volume level</li> <li>WiFi status & network</li> <li>CPU utilization</li> <li>currently playing song (I really like this with algorithm feeds)</li> <li>the active window</li> <li>Which desktop is active</li> <li>Which windows are open on each desktop</li></ul> <p>Here’s a couple of screenshots showing my sketchybar setup.</p> <picture><source media="(prefers-color-scheme: dark)" srcset="https://img.allandeutsch.com/allandeutschcom-note-images/b0b4ad95344f8b053ab34226a5e33abf.png"> <source media="(prefers-color-scheme: light )" srcset="https://img.allandeutsch.com/allandeutschcom-note-images/a0093b0cc05666b22475d0d52f1fb643.png"> <img alt="The current desktops and the apps open in each as shown in my sketchybar config. The active desktop and app are highlighted."></picture> <picture><source media="(prefers-color-scheme: dark)" srcset="https://img.allandeutsch.com/allandeutschcom-note-images/0eaff74d24f3caf3b0818b2a36e8f47c.png"> <source media="(prefers-color-scheme: light)" srcset="https://img.allandeutsch.com/allandeutschcom-note-images/f07422348b93888a159b44ac91f95080.png"> <img alt="The system status pips in my sketchybar. It shows the current wifi status and network, CPU utilization, battery, volume, and datetime."></picture> <h3 id="color-scheme"><a aria-hidden="true" tabindex="-1" href="#color-scheme"><span class="icon icon-link"></span></a><a href="#color-scheme" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Color scheme</h3> <p>Additionally, I’ve been really enjoying the <a href="https://rosepinetheme.com/" rel="nofollow">Rosé pine color scheme</a>, so I set it up in neovim, WezTerm, Warp, Sketchybar, and <a href="https://obsidian.md" rel="nofollow">Obsidian</a>. I’ve configured them all to switch between the light and dark variant when my system does. I often work in sunny places, so I usually use light mode during the day and dark mode at night. I’m using the main Rosé pine theme for dark mode, and the “Dawn” variant for light mode.</p> <h3 id="key-remapping"><a aria-hidden="true" tabindex="-1" href="#key-remapping"><span class="icon icon-link"></span></a><a href="#key-remapping" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Key remapping</h3> <p>After getting all that setup, I discovered a problem. I didn’t want to compromise and choose keys that don’t make sense to me (I like navigating between both tabs and desktops using 1-9, for example). Using a difficult combination of modifier keys like <code>ctrl+command+shift</code> is out of the question. Wanting a better option, I discovered <a href="https://github.com/pqrs-org/Karabiner-Elements" rel="nofollow">Karabiner-elements</a>. It’s a flexible key remapping tool, and I’ve configured a few key mappings to make life easier:</p> <ul><li>Caps lock is now control (this is available in MacOS settings) <ul><li>When pressed alone, it’s the escape key. This makes getting out of insert mode in vim much easier.</li></ul></li> <li>Right shift is now <code>shift+option+control+command</code> (all the modifiers). This is often referred to as “hyper” <ul><li>Pressing any 1 modifier key with right shift <em>removes</em> it from the list, so for example <code>command+right_shift</code> becomes <code>shift+option+control</code></li></ul></li></ul> <p>Remapping caps lock probably doesn’t need much explanation. I’ve only met one person who uses it on purpose. Remapping right shift feels a bit more interesting, though. I always use left shift for capital letters, so for me the right shift key sees about as much action as caps lock. I would never use for a hotkey that requires pressing 3-4 modifiers <em>plus another key</em>, so the way I’m remapping my right shift key effectively creates 5 new modifier key combos for me - hyper, and hyper + any one other modifier key. I’ve been finding <code>right_shift + &lt;key&gt;</code> and <code>right_shift + cmd + &lt;key&gt;</code> is a really convenient place to bind window management hotkeys.</p> <h2 id="seattle-design-meetup"><a aria-hidden="true" tabindex="-1" href="#seattle-design-meetup"><span class="icon icon-link"></span></a><a href="#seattle-design-meetup" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Seattle design meetup</h2> <p>My friend <a href="https://x.com/JohnPhamous" rel="nofollow">John Pham</a> organized a design meetup that happened on Saturday. It was cool to see an in-person event get pulled together via Twitter; a great example of using social media to facilitate real-world socializing! I think it was through Twitter that John met <a href="https://x.com/wwwjim" rel="nofollow">Jimmy</a> who provided the space.</p> <p>The event was fantastic - everyone I talked to was fascinating, the food was phenomenal, and the venue had a spectacular view of Puget Sound! It was hosted at the Jimmy’s internet.dev office at Pike Place Market. I met some awesome people, and was invited to come cowork from the internet.dev office in the future. I’m planning to take them up on the offer as I find it inspiring to work in proximity to other builders, and the space is also used by the Bluesky team.</p>',1);function z(a,t){const i=h(t,["children","$$slots","$$events","$$legacy"]);c(a,d(()=>i,e,{children:(n,m)=>{var o=p();l(50),r(n,o)},$$slots:{default:!0}}))}export{z as default,e as metadata};
