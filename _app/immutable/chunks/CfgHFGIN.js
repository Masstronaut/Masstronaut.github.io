const e=`---
title: 'devlog 8: Squeaky clean feedback UX'
description: Murder, a new bike, polishing the feedback view, and a live site incident!
slug: devlog/8
publish: true
lastmod: 2024-06-05
date: 2024-06-02
aliases:
- 'devlog 8: Squeaky clean feedback UX'
tags:
- status/seedling
---

## Personal updates

### Murder at the Juice Joint

This week my mom hosted a murder mystery dinner party. The theme was "Murder at the Juice Joint," a 1920s-era speakeasy feature mob bosses, henchmen, corrupt government employees, and even a Hollywood director! It's a lot of fun getting into character and then doing some improv acting for a couple hours. This year was extra interesting for me because I had to play two characters:

1. First was a mob boss, the character who got murdered
1. After my first character dying, I played a second role as an investigator looking into the murder of my first character!

It's a fun way to spend an evening with friends new and old! I was glad to meet some of my mom's new friends from her exercise & writing groups. My only complaint is that because everyone is acting in character, it's not a great way to get to know the person playing the character. These parties are also the only time I get to see both of my (divorced) parents at the same time, which makes them a special treat for me.

![image](https://img.allandeutsch.com/allandeutschcom-note-images/572b50050af2adc3b848e0e2d2256d35.jpeg)

### My new bike

Last week in [devlog 7](devlog%207.md) I mentioned that it was time to replace my bike. It had a few issues:

* Sometimes the chain would slip
* Fixing a dropped chain is a messy endeavor
* the gear switching was a bit unreliable
* the caliper-style brakes were sketchy when coming down Seattle's steep hills, especially in the rain

I also found the gear switching annoying in the city, where stopping and starting is at outside my control due to traffic and streetlights. Fortunately, I was able to find a bike that solved all these issues and a few more for me. Enter the [Priority Continuum Onyx](https://www.prioritybicycles.com/products/continuumonyx).

I was fortunate to find a used one in my size for a bit under half price. The bike has been awesome for me so far! Some of the highlights:

* It uses a fixed belt drive - no grease and no slipping
* It has internal gearing, which means no derailleur and makes it possible to switch gears while stopped
* Disc brakes, the most reliable style, which have earned my trust on the hills
* The gear shifting is continuous - there are no discrete gears

![image](https://img.allandeutsch.com/allandeutschcom-note-images/e6756d539dfc37f8e6cdd63865e3afbc.jpeg)

I've found this bike to be a joy to ride! The continuous transmission has made the constant start/stop and hills quite manageable. Overall, I love that it just works. It also has a dynamo which powers integrated front & rear lights using the movement of the bike, so I never have to worry about charging them or a dead battery. I went on a long ride with Maya to get ice cream one night and this came in handy when the ice cream line was 20 minutes long and we didn't head home until after dark.

With the combination of the new bike and the Tesla we got recently, my way of moving around the world is fully upgraded and it's been so nice to go around.

Today I'm off to Oregon for a work retreat in Camp Sherman with some friends! More on that next week...

## Doc Duck

Navigating through feedback items was a bit janky. For example, using the interface to change that status of an item would deselect the feedback item, removing the detail view. I also had to grapple with multiple related views that needed to reactively re-render *sometimes* to have a smooth UX. Now I've got it cleaned up and navigating the feedback list feels right. Updating feedback status also works reliably with no quirky side effects.

I also got some logos made on Fiverr. Doc Duck needed a logo for the submission to the CascadiaJS conference. Unfortunately, I'm not that thrilled with the results. I needed something and I got something, but I'll definitely want to revisit this in the future and get something I'm happier with.

## Allandeutsch.com

On Friday I had an interesting live site incident. The site was down, and I was getting an ugly Cloudflare "error 526" page because of an SSL issue. This struck me as strange, because GitHub pages handles cert rotations for the site; I expect it to just work. When I looked into it, it seemed that GitHub was hanging on trying to create the cert. Based on some other search results, I found that it was often addressed by removing and re-adding the custom domain from GitHub Pages. After about 10 minutes of unsuccessfully messing about with that, I concluded there must be a better solution.

It turns out, cloudflare by default will proxy the DNS A records, which are responsible for answering the requests that look something like "I want to visit allandeutsch.com, where do I go?" That proxy seems to be incompatible with GitHub's SSL certificate generator. Turning off the cloudflare proxy seemed to work immediately.
`;export{e as default};
