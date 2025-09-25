const e=`---
title: 'devlog 4: in glorious 5K'
description: I went to the Berkshire Hathaway annual shareholder meeting, launched the Doc Duck site, and brushed up on my databases knowledge
slug: devlog/4
publish: true
lastmod: 2024-05-05
date: 2024-05-05
aliases:
- 'devlog 4: in glorious 5K'
tags:
- status/evergreen
---

## Omaha, NE - Berkshire Hathaway Annual shareholders meeting

On Thursday I flew out to Omaha, NE with some friends to attend the annual Berkshire Hathaway shareholder meeting. The event was bittersweet. It opened with a touching movie memorializing Charlie Munger and his lighthearted personality, but the air was heavy with the weight of his passing. There was also an undercurrent of nervous excitement (anxiety?) around the opportunity to see Warren Buffett live before it's too late and the implications of his impending mortality on the future of the company. Succession planning was a recurring theme in many of the day's questions.

The Q&A with Warren Buffett is a long-running tradition, and makes up the bulk of the day's activity. The festivities opened with Charlie's memorial video. I'm sad I didn't go while he was still alive. It painted a picture of Charlie as the life of the Q&A - [lighthearted and humorous](https://www.cnbc.com/2023/11/28/charlie-mungers-sharp-wit-turned-berkshire-meetings-into-uproarious-affairs-heres-a-sample.html). Charlie & Warren reminded me of the Dalai Lama and Archbishop Desmond Tutu in [The Book of Joy](https://a.co/d/bdi2Sej). Two sages full of life experience joyfully sharing it with the world.

Surprisingly, the most valuable bits came all the way at the end. First, from a child who asked the most human question, and finally by a philosophical question of duty. Paraphrased in order:

Q: If you could have one more day with Charlie, how would you spend it?
A: We did our best to spend every day doing what we wanted to do and living a life we enjoyed. If we could have another day together, it would be spent much the same way as we spent the days we had.

There's an eternal wisdom here which has been repeated for ages - enjoy life and live without regrets.

Q: Charlie's will contained an unusual codicil (amendment to a will) calling out an old practice he wished was more common: an *ethical* bequeath which transmits *duty* rather than property. If you were to make an ethical bequest to Berkshire shareholders, what duties would you impose and why?
A: If you're not financially well off, if you're being kind you're doing something that most rich people don't do even when they give away money. If you're lucky in life, make sure a bunch of other people are lucky too.

The next most exciting part of my weekend in Omaha was the "Invest in yourself" 5k run. I loved the idea of a race as an activity while on a trip, so I went for it. To my surprise, the whole squad ended up signing up for the race with me! I went in with the goal of finishing in under 35 minutes, and absolutely crushed it with a finish time of 29:42! I guess the whole low intensity zone 2 cardio thing really works. I placed 611th out of around ~2400 finishers, which I'm quite proud of for my first real race.

![image](https://img.allandeutsch.com/allandeutschcom-note-images/d76b68958a9fdc4c83b6951627c1995c.png)

Coincidentally, one of the people on this trip, Josh, works in Private Equity. He's looking for opportunities to deploy capital, including at seed stage. A great example of luck from motion!

## Epic web dev

Monday James & I started the data modeling workshop. We made some great progress, clearing 4 sections - database schemas, relationships, and migrations, as well as seeding data. Personally I'm pretty excited to go over database seeding. I'm working on demos for doc duck, and dashboard demos look better when they have a bunch of data in them. Absent real data, seeding the DB with a bunch of generated data is a great way to setup the demo.

I also decided to try building a \`UniqueEnforcer\` like we learned about in rate limiting last week. It was a pretty fun exercise, here's a simple solution:

\`\`\`\`ts twoslash
class UniqueEnforcer {
	private items: Set<any>;
	constructor() {
		this.items = new Set();
	}
	enforce<T extends any>(generator: () => T): T {
		let value = generator();
		while (this.items.has(value)) {
			value = generator();
		}
		this.items.add(value);
		return value;
	}
}
\`\`\`\`

I think it could be cool to collect these small things into an NPM package of utilities that are super small and lightweight but broadly useful for web.

## Doc Duck

Some big news on the Doc Duck front this week!

This week I set up test database seeding for Doc Duck. I learned about this in the Epic Web Dev course and immediately knew it would be useful to me. One timely benefit is that having a bunch of mocked data makes a dashboard demo look much better. I needed to record a dashboard demo to put on the new landing page for my CascadiaJS application (due this Sunday) so this was perfect. On that note...

The new [Doc Duck](https://docduck.dev) landing page is live! I got a lot of help designing this from Tony, and it looks much better than what I had come up with. It's still missing some content I want to add, but I'm now happy enough with it that I'm willing to share the site with people. That's a big milestone I was working towards for this week, and with good reason...

This week I applied to the [Cascadia JS startup fair](https://cascadiajs.com/2024/startup-fair)! Part of the application is a link to the product, which is why I had a big milestone of getting it to a state I'm happy to share. Getting into this would be amazing for Doc Duck, because it would be a huge opportunity to talk to developers and companies building developer products. The visibility would help with both improving the product and landing some early customers.

On the topic of applications, I also applied to the [buildspace](https://buildspace.io) nights & weekends program! It's for people building stuff to find community and support. I learned about build space from Jon while we were at a new cowork called "The Garage." Hilariously, the cowork is started by Michael, who was inspired to create it by his time at buildspace.

I also fixed a couple small bugs that were annoying me:

1. When hovering over the feedback distribution chart for a doc, the tooltip theme was often incorrect. I fixed this by subscribing it to light/dark mode changes
1. I broke sidebar collapsing behavior when I cleaned up the layout code a few weeks ago. That's fixed now!

Feedback now has status tracking. This makes it easy to manage feedback items like tasks. It represents an important step towards helping docs maintainers take action on the feedback they receive via Doc Duck.
`;export{e as default};
