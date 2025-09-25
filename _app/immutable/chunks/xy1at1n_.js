const t=`---
title: Improving zsh startup times
description: 'Applying my skills in performance optimization in a new domain: terminal (zsh) startup speed.'
slug: notes/zsh-startup
publish: true
lastmod: 2025-02-02
date: 2025-01-31
aliases: null
tags:
- status/budding
---

I found an excellent article by Scott Spence on [Speeding up my zsh shell](https://scottspence.com/posts/speeding-up-my-zsh-shell). I've been spending a lot more time in the terminal since [switching to neovim](I%20use%20Neovim%20btw.md) last Summer, and thought it was a good opportunity to improve my own zsh startup times.

## Profiling zsh startup

To get started with any performance-related work, the first step is to do some profiling. Profiling is what tells me how long everything is taking, and whether optimizing a game engine, a frontend application, or a terminal emulator startup, profiling is *always* the first step!

### Establish a baseline startup time

It's important to understand the *actual* time something takes. That makes it possible to understand when it is fast enough. "Fast enough" depends on the context. For my zsh startup, I'll be happy with a time around 0.5-0.25 seconds.

There's often performance variability from one run to the next due to a variety of factors outside the actual code being profiled. Think of scenarios like the serverless cold start problem, running code that is vs isn't in CPU cache, or starting an application from disk vs already loaded in memory. To get a better idea of how long something takes on average, it's typical to run it multiple times to get a range of execution times and identify an average. I do this for zsh startup times with the following command:

\`\`\`\`sh
for i in $(seq 1 10); do /usr/bin/time zsh -i -c exit; done
\`\`\`\`

Briefly what's going on here is:

* \`for i in ...\` is a for loop that runs once for each value in a list, with \`i\` set to the current list item's value
* \`$(seq 1 10)\` uses the \`seq\` command to generate a list of numbers from 1-10 and captures the list as a value to be used by \`for\`
* \`time\` is a utility that times how long a command took to execute
* \`zsh -i\` starts an interactive zsh session, ie one that can run commands
* \`-c\` tells \`zsh\` to run the next argument (\`exit\`) as a command, rather than treating it as parameter to the current command

When I run this, I got a range from ~1.05-1.1 seconds:

\`\`\`\`
1.06 real         0.56 user         0.46 sys
\`\`\`\`

So I'll need to shave off a bit more than 50% to get to the top end of my acceptable time of 0.5s. With that in mind, it's go time!

### detailed profiling

Simply knowing how long my \`zsh\` startup takes and how fast I want it to be is insufficient. To know what needs optimizing, it's important to **profile the code**. Profiling produces a detailed breakdown of how long each piece takes. Most technology stacks have some sort of performance profiling tool available for this reason.

Zsh comes with a profiler, and it's pretty easy to use. Crack open \`.zshrc\` and add two commands:

\`\`\`\`sh filename=".zshrc"
# Start the profiler at the top of the .zshrc
zmodload zsh/zprof

# all of my existing config in the middle....
# ...

# Finish the profiler and print the results
zprof
\`\`\`\`

Save the file and start up a new zsh session (I do this by opening a new tab in WezTerm). After a slight delay, I see a printout of how long everything took:

\`\`\`\`
num  calls                time                       self            name
-----------------------------------------------------------------------------------
 1)    1         544.25   544.25   87.38%    263.45   263.45   42.30%  nvm_auto
 2)    2         254.65   127.32   40.89%    142.52    71.26   22.88%  nvm
 3)    1          88.13    88.13   14.15%     74.74    74.74   12.00%  nvm_ensure_version_installed
 4)    2          46.76    23.38    7.51%     46.76    23.38    7.51%  compaudit
 5)    1          22.84    22.84    3.67%     17.54    17.54    2.82%  nvm_die_on_prefix
 6)    1          61.34    61.34    9.85%     14.58    14.58    2.34%  compinit
 7)    1          13.39    13.39    2.15%     13.39    13.39    2.15%  nvm_is_version_installed
 8)    1          26.15    26.15    4.20%     11.59    11.59    1.86%  nvm_is_valid_version
 9)    1          12.21    12.21    1.96%      8.64     8.64    1.39%  nvm_validate_implicit_alias
10)    1           7.36     7.36    1.18%      7.28     7.28    1.17%  _zsh_highlight_load_highlighters
...
\`\`\`\`

Note: I've truncated this list to exclude anything taking less than 1% of startup time, denoted by the \`...\`

This gives me a fairly detailed list of how long each item takes to run, sorted from the slowest to the fastest. This is great, because the slowest bits for me were at the bottom of my \`.zshrc\`. If I'd optimized that file from top to bottom I would've done a ton of work with no impact!

## Optimize the slowest stuff first

There's one obvious culprit behind my zsh startup times. Over 75% of the time is spent on various \`nvm\` tasks. Most of the time I am not even using \`nvm\`!

This is great news since I only need a ~50% speed up to hit my performance target. I might be able to get away with an easy win and be done!

### Identify the slowest code

Here's the offending \`nvm\` bits from near the bottom of my \`.zshrc\`:

\`\`\`\`sh filename=".zshrc"
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \\. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
\`\`\`\`

I tried commenting out the line for completions and all the slowest bits were still there according to \`zprof\`, so it's definitely loading \`nvm\` that's slow. Commenting out the \`nvm\` loading code gets me down to ~0.55s startup time, so this is definitely a great place to start.

I don't use \`nvm\` much, which means two things to me:

1. it I'm okay with it starting slower instead of paying the load times on every shell startup. That makes it a perfect candidate for lazy loading!
1. I'm not very familiar with its config or if it has built-in support for lazy-loading.

If it does, great! If it doesn't, I'm going to have to DIY a solution. A quick search led me to Armno Prommarak's article, aptly titled [Lazy-load nvm to Reduce ZSH's Startup Time](https://armno.in.th/blog/zsh-startup-time/). Perfect! That's exactly what I'm trying to do.

### lazy-loading nvm to improve zsh startup performance

It seems that \`nvm\` doesn't have lazy loading out of the box. Fortunately, there's [a zsh plugin that wraps nvm](https://github.com/lukechilds/zsh-nvm) with some extra features, including lazy loading!

The obvious move here is to install the plugin, set it up, and be done. I *really* dislike repetitive and tedious tasks, and manually reinstalling dependencies is very boring for me. So instead, I'm going to set up my \`.zshrc\` to check if \`zsh-nvm\` is installed (very fast) and if it isn't, install it. That way when I clone [my dotfiles repo](https://github.com/Masstronaut/dotfiles) on another machine in the future, it'll automatically install \`zsh-nvm\` for me with no effort on my part. The way I'm going to do this is:

1. Check if \`zsh-nvm\` is installed
   1. if it's not installed, install it via git
1. Set it to lazy-load \`nvm\`
1. \`source\` the plugin code

Here's what that looks like in code:

\`\`\`\`sh filename=".zshrc"
# Install zsh-nvm if it's not already installed
if [[ ! -f ~/.zsh_plugins/zsh-nvm/zsh-nvm.plugin.zsh ]]; then
	git clone https://github.com/lukechilds/zsh-nvm.git ~/.zsh_plugins/zsh-nvm
fi

# Set the nvm
export NVM_DIR="$HOME/.nvm"

# Tell zsh-nvm to lazy-load nvm
export NVM_LAZY_LOAD=true

# also load nvm when launching nvim
# Some web dev tooling depends on node
export NVM_LAZY_LOAD_EXTRA_COMMANDS=('nvim')

# Tell zsh-nvm plugin to load nvm's bash completions
export NVM_COMPLETION=true

# Load zsh-nvm
source ~/.zsh_plugins/zsh-nvm/zsh-nvm.plugin.zsh
\`\`\`\`

After a single .99s cold start, my remaining startups were ~.65s with this one change. Awesome! Shoutout to Luke Childs for making this great nvm plugin.

Taking a look with \`zprof\` on, I get the following as my 3 slowest zsh startup steps:

\`\`\`\`
num  calls                time                       self            name
-----------------------------------------------------------------------------------
 1)    1         372.07   372.07   89.50%    124.22   124.22   29.88%  compinit
 2)    1         115.43   115.43   27.76%    115.43   115.43   27.76%  compdump
 3)  811         107.50     0.13   25.86%    107.50     0.13   25.86%  compdef
\`\`\`\`

Those are related to the completion system in zsh, so it looks like that's up next!

## Speeding up zsh completion system loading

Unlike with \`nvm\`, I'm always using commands when I open a new shell. Completions help me write commands faster and with better accuracy. I definitely want them every time I open my shell, so I can't get away with lazy loading this time.

Fortunately for me, Scott Spence also called out slow completion startups in their [zsh startup times blog post](https://scottspence.com/posts/speeding-up-my-zsh-shell#fixing-the-completion-system-3076--10). It was a quick fix too! The change is to only rebuild the completions cache if it doesn't exist or is over 24h old, based on [this github gist](https://gist.github.com/ctechols/ca1035271ad134841284):

\`\`\`\`zsh filename=".zshrc"
# On slow systems, checking the cached .zcompdump file to see if it must be 
# regenerated adds a noticable delay to zsh startup.  This little hack restricts 
# it to once a day.  It should be pasted into your own completion file.
#
# The globbing is a little complicated here:
# - '#q' is an explicit glob qualifier that makes globbing work within zsh's [[ ]] construct.
# - 'N' makes the glob pattern evaluate to nothing when it doesn't match (rather than throw a globbing error)
# - '.' matches "regular files"
# - 'mh+24' matches files (or directories or whatever) that are older than 24 hours.
autoload -Uz compinit 
if [[ -n ~/.zcompdump(#qN.mh+24) ]]; then
	compinit;
else
	compinit -C;
fi;
\`\`\`\`

I found that this made almost 0 impact on my zsh startup time, so for me it's probably not worth the added config complexity and the disabled security check.

## Hidden in plain sight

I noticed a major omission from my \`zprof\` output - neofetch! Neofetch is a mostly useless tool; it prints out a pretty display with ASCII art of the OS logo and some system info. I have it run at the end of my \`.zshrc\`, and so its absence in \`zprof\` is peculiar. I'm not sure why it's not in \`zprof\`, but was able to time it directly:

\`\`\`\`zsh
(time /opt/homebrew/bin/neofetch) 2>&1
/opt/homebrew/bin/neofetch  0.28s user 0.26s system 86% cpu 0.626 total
\`\`\`\`

That is a substantial chunk of my ~.65s startup time. I went to check the [neofetch repo](https://github.com/dylanaraps/neofetch) for any discussion about improving performance, and found the project has been archived. 😱

Apparently the last release was in 2020! While it still works, I prefer not to run unmaintained software. The biggest reason is that unmaintained software likely still has vulnerabilities. If they are discovered and exploited, no software update will be released to fix it.

Fortunately there are some maintained forks of neofetch! I found [fastfetch](https://github.com/fastfetch-cli/fastfetch), which is one written in C that has a focus on performance. I gave it a go with the following:

\`\`\`\`zsh
brew install fastfetch
fastfetch
\`\`\`\`

It grabs a bunch more data than my neofetch config does, and is configured via \`jsonc\`.  Importantly, it runs quite a bit faster:

\`\`\`\`
(time /opt/homebrew/bin/neofetch) 2>&1
                    ..'          allan@Allans-MacBook-Pro
                 ,xNMM.           ------------------------
               .OMMMMo            OS: macOS Sequoia 15.2 arm64
               lMM"               Host: MacBook Pro (13-inch, M1, 2020)
     .;loddo:.  .olloddol;.       Kernel: Darwin 24.2.0
   cKMMMMMMMMMMNWMMMMMMMMMM0:     Uptime: 47 days, 5 hours, 22 mins
 .KMMMMMMMMMMMMMMMMMMMMMMMWd.     Packages: 173 (brew), 11 (brew-cask)
 XMMMMMMMMMMMMMMMMMMMMMMMX.       Shell: zsh 5.9
;MMMMMMMMMMMMMMMMMMMMMMMM:        Display (Color LCD): 1920x1200 @ 60 Hz in 13" [Built-in]
:MMMMMMMMMMMMMMMMMMMMMMMM:        DE: Aqua
.MMMMMMMMMMMMMMMMMMMMMMMMX.       WM: Quartz Compositor 278.2.7
 kMMMMMMMMMMMMMMMMMMMMMMMMWd.     WM Theme: Pink (Dark)
 'XMMMMMMMMMMMMMMMMMMMMMMMMMMk    Font: .AppleSystemUIFont [System], Helvetica [User]
  'XMMMMMMMMMMMMMMMMMMMMMMMMK.    Cursor: Fill - Black, Outline - White (32px)
    kMMMMMMMMMMMMMMMMMMMMMMd      Terminal: WezTerm 20240203-110809-5046fc22
     ;KMMMMMMMWXXWMMMMMMMk.       Terminal Font: Hack Nerd Font
       "cooc*"    "*coo'"         CPU: Apple M1 (8) @ 3.20 GHz
                                  GPU: Apple M1 (8) [Integrated]
                                  Memory: 12.48 GiB / 16.00 GiB (78%)
                                  Swap: 5.51 GiB / 7.00 GiB (79%)
                                  Disk (/): 612.69 GiB / 926.35 GiB (66%) - apfs [Read-only]
                                  Local IP (en0): ***.***.***.***
                                  Battery (bq20z451): 100% (13 hours, 13 mins remaining) [Discharging]
                                  Locale: en_US.UTF-8
/opt/homebrew/bin/fastfetch  0.09s user 0.07s system 49% cpu 0.325 total
\`\`\`\`

That's 3x faster than neofetch, and it's grabbing more system info. With a bit of config tweaking, I'm sure I can get that down a little further. Strangely, after swapping it with \`neofetch\` in my \`.zshrc\`, \`zprof\` doesn't show fastfetch as a line item either. If you know why these aren't covered in zprof please let me know!

Anyway I tried timing my zsh startups again and got great results:

\`\`\`\`zsh
for i in $(seq 1 10); do /usr/bin/time zsh -i -c exit; done
0.45 real         0.25 user         0.16 sys
0.18 real         0.08 user         0.06 sys
0.18 real         0.08 user         0.06 sys
0.17 real         0.08 user         0.06 sys
...
\`\`\`\`

It *feels* fast, and the numbers support that. Even with a cold start I'm under my 0.5s startup time target, and the typical startups are even faster than I was shooting for. Fantastic!

## Conclusion

To get my shell starting fast again, I used zsh's profiler and the \`time\` utility to figure out what was taking the longest time. By starting with the slowest pieces, I was able to hit my performance target in only a few changes:

1. Lazy-loading \`nvm\` only when I'm going to need node.js
1. \\[Skipped\\] limit how often completions are rebuilt. I opted not to keep this change as the performance gain was minimal and not worth the added security risk
1. Swapping out archived software, neofetch, for a faster and maintained replacement: fastfetch

I'll have to tinker with my fastfetch config to get the same output I had in neofetch. I'm glad I found that it was deprecated though. There's one last step and this is a wrap:

\`\`\`\`zsh
brew uninstall neofetch
\`\`\`\`

🫡 So long, old friend!
`;export{t as default};
