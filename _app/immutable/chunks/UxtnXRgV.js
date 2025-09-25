const e=`---
title: 'devlog 7: More life'
description: What do polyrhythms, new cars, bike rides, and CascadiaJS have in common? They're all part of this week's updates!
slug: devlog/7
publish: true
lastmod: 2024-05-27
date: 2024-05-26
aliases: null
tags:
- status/seedling
---

This was a fun week! Some highlights were:

* I [built a polyrhythm](devlog%207.md#building-a-polyrhythm-using-web-apis) as a fun toy project
* Maya & I got a new car and took delivery of it on Thursday!
* Went for a long bike ride around Seattle with Maya
* Did a night at Harrison Hot Springs with My Dad & Maya
* Got accepted into [Cascadia JS](devlog%207.md#cascadia-js)!

I also decided it's time to replace my bike with something in better shape and more suitable for commuting around a hilly city like Seattle, and have started researching what the right choice is. Hopefully I'll have a conclusion in the next couple weeks and can write a note on it!

## Cascadia JS

Earlier this month I met a guy named Carter Rabasa, who runs the Seattle JS meetup I presented at. Before the meetup started, we had a chance to chat a bit and I told him that I'm trying to build a company to make docs better. He also organizes a Pacific Northwest JS conference called CascadiaJS, which has a startup fair. At the time he said that they had no available spots for startups, but would let me know if anything opened up. The most exciting development of this week came on Sunday in the form of an email from Carter.

 > 
 > Hey Allan,
 > 
 > I'm writing to let you know that we'd like you (and your startup) to join us for this year's Startup Fair. Congrats!

This is fantastic news! A developer conference is a great place to meet potential customers for Doc Duck. I already had a ticket to the conference, and smaller conferences are my favorite. This makes it much more exciting for me, though! My favorite way to be a part of conferences is by contributing something to them. Unfortunately, this year I wasn't ready to go as a speaker before the call for proposals closed. I'm thrilled I get to go as a startup and talk to a bunch of new people about actionable docs feedback and using it to improve developer experience.

## Epic Web Dev

This week James & I finished up the [Data Modeling workshop](https://www.epicweb.dev/workshops/data-modeling-deep-dive). Notably, I learned how to have the database query planning tell me its query plan, using the very literal SQL:

\`\`\`\`sql
EXPLAIN QUERY PLAN
\`\`\`\`

Followed by whatever SQL query I want it to explain.

The workshop had an example where a user search page orders users by when they most recently updated a note, which required a foreign relation and was generating a B-Tree *for each user* to figure out their most recent note update. B-Trees take time and memory to use, so this was a very expensive query.

The fix (and the lesson for optimizing queries) was to add indexes for:

* Foreign keys in basically all cases - foreign keys are used for lookups in other tables, so it's strange this isn't just the default behavior
* columns referenced together, so in the workshop example this was an index on the \`Note\` table of the note's owner ID and updated date

In prisma it is quite easy to add indexes:

\`\`\`\`prisma
model Note {
  id      String @id @default(cuid())
  title   String
  content String

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  owner   User   @relation(fields: [ownerId], references: [id], onDelete: Cascade, onUpdate: Cascade)
  ownerId String

  images NoteImage[]

  // indexing by owner ID (most frequently referenced) then updatedAt (a sort criteria)
  // to improve query performance when getting a user's notes
  @@index([ownerId, updatedAt])
  
  // non-unique foreign keys aren't indexed by default
  @@index([ownerId])
}
\`\`\`\`

This is surprisingly easy and resulted in something like a 250x faster query. I have a couple of queries on [Doc Duck](https://docduck.dev) that are on the slower end, so I'm excited to put my new query optimization skills to use improving the dashboard loading speed there!

## Doc Duck

### Dashboard performance

Inspired by what I learned about optimizing SQL in the Epic Web Dev course, I spent a couple hours on Thursday profiling and optimizing the Doc Duck dashboard. It was taking a couple seconds to load, which is quite sluggish for the page that comes after a login. The whole process was even worse, because the login also takes time, then the user gets redirected to the dashboard, *then* the 2 second load started. *Oof*.

I profiled how long everything was taking, and realized that while some of the data was queried in parallel, one of the dashboard data visualizations was making two requests to the database and was blocking. I was able to reduce it to a single, non-blocking request that runs in parallel with the others. I also added some database indexes for foreign key relationships. These two changes resulting in an average ~50% speedup for loading the dashboard!

### Feedback filtering

This week I also implemented filtering for the feedback view. This makes managing feedback much easier. I have been bumping up against some limitations of the svelte reactivity model and found a use case where React's \`useState\` hook would give me better control over how and when re-rendering occurs. Specifically, when a feedback item's status is updated, I want to rerender the item's status but not rebuild the table. This is tough in svelte, because reactive state changes waterfall, so updating any reactive state will also trigger other reactive declarations to be re-run.

## Building a polyrhythm using web APIs

I wanted to learn something a little different this week that speaks to my background in simulation software. Specifically, I wanted to play with the [canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) and [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) to build a [polyrhythm](https://allandeutsch.com/projects/polyrhythm)! I figured I could build one in a day or two, which is a good amount of time to play with an API and get a feel for what it's capable of.

### The Canvas API

Canvas, or more specifically the \`<canvas>\` element, is used to draw things. It can draw lines and arcs. It's intended for things like data visualizations, game graphics, and image editing. The API seemed to be designed to work like using a pen. It works something like this:

\`\`\`\`
pen.moveToPosition(X,Y);
pen.lineTo(X + 100, Y);
pen.draw();
\`\`\`\`

That example would draw a horizontal line 100 pixels across. Neat!

With this plus some basic trigonometry and physics, it didn't take me long to get a bunch of semicircle arcs draw and some circles bouncing along them.

Next up was having my bouncing balls make noises when they reached the end of their arc. I could've used an existing tool, recorded an audio for each one, and then played those. That seemed really tedious, though. Plus it would be WAY more awesome if I created the sounds programmatically 😎

### The web audio API

This one I found a bit trickier, probably because I didn't know much about how audio synthesis works going in. Fortunately, I found a really cool talk by Neil McCallion called [I play JavaScript](https://www.youtube.com/watch?v=uasGsHf7UYA) that he presented at NIDevConf in 2020. Neil does a fantastic job explaining both the web audio API *and* the underlying principles of audio synthesis.
`;export{e as default};
