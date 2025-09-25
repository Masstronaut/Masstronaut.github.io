const t=`---
title: The publishing pipeline for allandeutsch.com
description: An overview of how I avoided needing to copy+paste my notes into blogging software to publish them.
slug: notes/publishing-this-site
publish: true
lastmod: 2024-02-07
date: 2021-10-04
aliases: null
tags:
- topic/webdev
- status/budding
- taxonomy/blog
---

Like any good PM, I opted to start from the ideal user experience. This was unusually easy since I am the only user; talk about putting the *personal* in personal computing!

My ideal workflow for publishing is to author my notes in [Obsidian](https://obsidian.md) on any device and control publishing them to my website using a frontmatter property in each note. Step by step, this looks something like:

1. I edit my notes locally on any device of my choice using Obsidian
1. Sync notes across devices using automatic git backups
1. I can add \`publish: true\` to any note's frontmatter to **opt-in** to publishing the note (default to private)
1. Git commits to my private notes repo triggers an automated workflow to build & deploy notes opted-in to publishing

## Structuring the build pipeline

Because I want my notes to be private by default, they exist in their own private git repo. The SvelteKit code for this site is private, though I hope to open-source it one day. That leaves the site deployment, which is hosted using my GitHub account's [GitHub Pages repo](https://github.com/Masstronaut/Masstronaut.github.io) and pushed to automatically by my GitHub Actions workflow.

Here's an overview of what happens in the CI workflow:

1. Commits to either the private notes or private site code repos trigger a build
1. The build action pulls the private notes and processes them for publishing:
   1. A python script deletes all notes not opted-in for publishing
   1. The remaining notes are run through [obsidian-export](https://github.com/zoni/obsidian-export) to convert them from Obsidian markdown to [Commonmark](https://commonmark.org/)
1. The site's SvelteKit code is pulled from another repo
1. The processed notes are dumped into a \`content\` folder
1. The SvelteKit site is built using the [static adapter](https://www.npmjs.com/package/@sveltejs/adapter-static)
1. The completed build is pushed to my GitHub Pages repo

This entire process takes around 2 minutes from start to finish. I've noticed that sometimes GitHub takes another minute or two to distribute the latest build across the Pages CDN.

## Initiating builds

My build pipeline is fully automated, but that's not the only piece. I generally don't need to manually author commits, either. While I generally avoid committing broken code, notes don't really have a broken state that would fail to compile. A half-written note is in a valid state for backing up to git, so notes are a great candidate for automatic git commits.

I achieve automated commits in 2 ways, depending on the device. On a computer, I use the [obisidian-git](https://github.com/denolehov/obsidian-git) plugin. It's easy to set up and works great. I have it configured to automatically backup my notes to git every 30 minutes if there are any changes, and it provides a command to manually trigger a backup too.

On mobile & tablet devices, though, it's not so great. iOS and Android lack a native git client for the plugin to use, so it ships with a JS implementation of git that is very slow. I didn't like this approach, so opted for a different workflow.

On mobile & tablet, I use a combination of [Working Copy](https://workingcopy.app/) as a git client and Apple Shortcuts to operate it. I have 2 shortcuts:

1. A button shortcut that replaces my Obsidian app icon. When tapped, it:
   1. Pulls the git repo containing my notes, then
   1. Launches obsidian once the pull is completed
1. An automated shortcut that pushes all changes to my notes repo when I leave the Obsidian app

I've found this setup makes it extremely easy to get content published and shared with people on demand.

## Specifying publishing details for notes

The last detail worth covering is how I specify metadata for published notes. TL;DR: I use frontmatter.

All the metadata on this and other notes is specified in the frontmatter. [Slugs make links readable](Slugs%20make%20links%20readable.md), so I specify my slugs in the frontmatter. For this note that frontmatter is \`slug: publishing-this-site\`. Really simple! I do similar for the created date, last modified date, title, description, etc. I use [mdsvex](https://mdsvex.pngwn.io/) to process my markdown into svelte components, and it makes the frontmatter metadata available so I can easily use it when rendering the page.

Hopefully this overview inspires you to build your own publishing pipeline and put the *personal* back in *personal computing*. If you have any questions/comments/feedback, please [reach out to me on Twitter](https://twitter.com/AllanDeutsch)!
`;export{t as default};
