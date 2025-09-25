const e=`---
title: Improve site previews on social media by unfurling webpages
description: Some webpages have nice previews when shared on social media. These can be specified in the page HTML. Previews make the site user-friendly before users even visit it!
slug: notes/site-unfurling
publish: true
lastmod: 2021-10-31
date: 2021-10-31
aliases:
- site unfurling
- Improve site previews on social media by unfurling webpages
tags:
- status/seedling
- taxonomy/reference
---

# Use OpenGraph meta tags to provide page previews on social media

You built a website to share something valuable with people. If other people find it valuable, they will share it too, on:

* Facebook
* Twitter
* Slack
* LinkedIn

...and other platforms!

To maximize your click-through rates for social media shares, give social media users a great first impression. To help social media platforms present your content to their users, you need to help them *unfurl* your pages. This is done using 2 simple APIs: [Facebook Open Graph HTML Markup](https://developers.facebook.com/docs/sharing/webmasters#markup) and [Twitter Cards](https://developer.twitter.com/docs/twitter-for-websites/cards/overview/about-cards).

Most platforms use the Open Graph API. It has 5 properties you need to know about:

1. \`og:type\` specifies what type of content is the focus of a page. There are 6 options:
   * \`website\` - this is also the default option if no type is specified
   * \`article\`
   * \`profile\`
   * \`video\`
   * \`music\`
   * \`book\`
1. \`og:url\` specifies your website's Canonical URL. Think of this as the address for your front door.
1. \`og:title\` is the title *page* title. This should be contextual and specific to each page. Think *article* title, not site title.
1. \`og:description\` is a brief description of the *page* content. Use it to help people make a quick decision about if they are interested in the content. It's a great place for a hook.
1. \`og:image\` is used to specify a preview/thumbnail image for the page. This could be as simple as the header graphic for the page.

I wrote this note while adding unfurling content to [allandeutsch.com](https://allandeutsch.com). Here's the Open Graph code I added to the \`<head>\` of my homepage:

\`\`\`\`html
<meta property="og:type" content="website"/>
<meta property="og:url" content="https://allandeutsch.com" />
<meta property="og:title" content="Allan Deutsch" />
<meta property="og:description" content="Learning, thinking, and building in public. Notes on product, technology, and business." />
\`\`\`\`

The Twitter Cards API is pretty similar. \`twitter:url\`, \`twitter:title\`, \`twitter:description\`, and \`twitter:image\` serve the same purpose as their \`og:\` counterparts. Instead of a \`type\` property, Twitter uses \`twitter:card\` which specifies a card type. There are  four options:

1. \`summary\` is used for most types of content, like blog posts, articles, websites, etc. It should provide a preview of the page content  prior to a click-through. Including an image is optional.
1. \`summary_large_image\` is similar to to \`summary\`, but with a focus on visual content.
1. \`app\` is used for driving conversions on a mobile app.
1. \`player\` is used to provide a media player for audio or video content.

Twitter has two other additional fields that are broadly applicable:

1. \`twitter:site\` is used for the twitter account associated with the site - for example a link to a YouTube video would use \`@YouTube\`.
1. \`twitter:creator\` is for the author/creator of the content on the page. This would be the YouTuber who made the video, or the author of a specific article or blog post.

On [allandeutsch.com](https://allandeutsch.com) I use this code in my \`<head>\` tag:

\`\`\`\`html
<meta property="twitter:card" content="summary"/>
<meta property="twitter:url" content="https://allandeutsch.com" />
<meta property="twitter:title" content="Allan Deutsch" />
<meta property="twitter:description" content="Learning, thinking, and building in public. Notes on product, technology, and business." />
<meta property="twitter:site" content="@AllanDeutsch" />
<meta property="twitter:creator" content="@AllanDeutsch" />
\`\`\`\`

Setting up Open Graph and Twitter Cards for a site improves the experience for existing users and helps reach new ones.
`;export{e as default};
