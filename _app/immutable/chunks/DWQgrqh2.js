const e=`---
title: 'devlog 3: now with more pixels'
description: Professional web forms, dogfooding Doc Duck, and glorious images on the internet!
slug: devlog/3
publish: true
lastmod: 2024-04-28
date: 2024-04-28
aliases:
- 'devlog 3: now with more pixels'
tags:
- status/evergreen
---

This week started out strong!

* James & I tore through the remaining lessons on web forms
* I made some improvements to allandeutsch.com in preparation for Doc Duck demos
* I learned about optimizing & hosting images on the web

On Friday I didn't manage to get much done besides a workout, then Maya & I were off to Vancouver for a weekend retreat at horseshoe bay. The view was excellent, but don't just take my word for it:

![image](https://img.allandeutsch.com/allandeutschcom-note-images/4eaa4601560a21b74f8e29b5f9dd6f2d.jpeg)

I also bought my ticket for [Cascadia JS](https://cascadiajs.com/2024) as part of my journey back into the conference scene. I need to get ready for my talk on type branding in a week and a half at the SeattleJS meetup. I bet there's some sort of library for making presentations in JS so it's easy to share on the web 🤔

## Epic web dev course

I spent Monday and Tuesday working on epicweb.dev with James. We finished the module on professional web forms! This week was focused on securing forms against bad actors. I got some inspiration for open source projects to build in the svelte ecosystem - honeypot & CSRF tools would be great. Maybe I'll figure out a couple hackathons to bang each of those out in.

We also learned about rate limiting. I'm already familiar from my time in Xbox Live & PlayFab, but it was a good refresher and I learned about some solutions in the JS ecosystem.

### Honeypots

Malicious bots fill out forms for a variety of reasons, such as:

* Generate email spam using your mail server
* Post links to their own site
* Discover vulnerabilities to exploit later

A common way of dealing with this is using a technique called a "honeypot" to identify bot-submitted forms.

### CSRF protection

Cross-site request forgery is a type of attack where hackers trick users into performing an action like clicking a button on one site, which will cause them to submit a request to another site.

The main way to protect from CSRF attacks is by setting a csrf cookie that contains a token for validation. The cookie gets set by the server as \`httpOnly\` so that malicious client-side JS can't read its value. The server then also injects the CSRF token into any forms on the page that need to be protected. When the client submits the form, the request will contain the form data with the CSRF token as well as the request headers with the CSRF cookie. If the values in the cookie and token don't match, the server disregards the request. Since the tokens don't match, the server can't verify that the request came from a user interacting with the page as intended.

Before setting a CSRF cookie, check the request to see if one already exists. If it's set on each request, it would break old tabs for users who have multiple tabs of the site open.

## Allandeutsch.com

I added filename support to my code blocks! This might seem insignificant, but there are certain cases where the filename is very important. It's very common in web development for libraries to have naming conventions. Sveltekit for example requires page components to be named \`+page.svelte\`, so knowing that is the filename conveys important meaning about the file. Some other examples:

* The eslint config file must be named one of [a few options](https://eslint.org/docs/latest/use/configure/configuration-files#configuration-file) such as \`eslint.config.js\`
* Configuring svelte must be done in \`svelte.config.js\`
* a \`.gitignore\` file tells git which directories and files should not be tracked

I updated a couple notes to showcase the codeblock file names:

* [Beautifully render markdown code blocks in Svelte](Beautifully%20render%20markdown%20code%20blocks%20in%20Svelte.md)
* [Linting and formatting a svelte typescript project](Linting%20and%20formatting%20a%20svelte%20typescript%20project.md)

This is how it looks in your current color scheme:

<picture>
<source media="(prefers-color-scheme: dark)" srcset="https://img.allandeutsch.com/allandeutschcom-note-images/405bfdcf0bbab7a0a8034d1a416b0f09.png"/>
<source media="(prefers-color-scheme: light )" srcset="https://img.allandeutsch.com/allandeutschcom-note-images/79b94f9fcf9df49c037b6920bbfba95e.png"/>
<img alt="A code block on allandeutsch.com rendered to show the filename in a tab along the top bar of the code block"/>
</picture>

On a related note, the light and dark mode versions are not rendered as code blocks, but as images! This is a new feature in my publishing pipeline, and I'm excited to start adding more images around here.

I use an obsidian plugin called [s3-image-uploader](https://github.com/jvsteiner/s3-image-uploader) to automatically upload images I paste or drag into [obsidian](https://obsidian.md) (the tool I use for writing notes) and insert the image embedding link into the markdown for my note. I use a cloudflare R2 bucket which is s3-compatible to host the images. The bucket contents are exposed on img.allandeutsch.com. Now when I publish a note with an embedded image, the image is linked on the internet and available on my site to viewers like you!

## Doc Duck

### Feedback context links

Doc Duck lets developers provide feedback on a specific *selection* of a document. When a Doc Duck customer is viewing that feedback, it's helpful to see the selection in context *in the document*. So I did that:

![image](https://img.allandeutsch.com/allandeutschcom-note-images/922324c6c65793f85a6e6911f95dceb6.webp)

This week I've also been working on *content* for the landing page. My vision is to show visitors what the world looks like with a documentation feedback process powered by Doc Duck. This means setting up demos and recording short clips of the core interactions. It's super important to me to nail this because it's the first and likely only chance I will get to convince someone of the value of Doc Duck.

## Next week

Looking forward, I've got some big things to accomplish:

1. Apply to the startup fair at Cascadia JS. This is the most important because it could single-handedly make my year if I play it well
1. Ship the beta Doc Duck landing page. I think this is a critical piece of nailing the CascadiaJS application
1. Build a cost-benefit-significance graph for bike infrastructure upgrade projects for the sustainable transit project

If I nail the first two the week is a win, but there are a lot of dependencies leading up to that startup fair application. There are a few features that aren't quite demo ready yet; I'll need to bridge that gap, then record the demos, then add the demos to the landing page, then apply for the startup fair. No biggie, I got this... 😅

...And I've also got a flight Thursday morning to Omaha for the Berkshire Hathaway shareholders meeting; It's effectively a 3 day week. ***furious typing ensues***
`;export{e as default};
