import{t as u,a as y}from"./Sv_TBA-2.js";import"./BaJv1Ckm.js";import{s as e,f,a5 as g}from"./BOCtfefK.js";import{h as a}from"./BMMBz_fM.js";import{l as m,s as b}from"./B8ys1oD7.js";import{M as w}from"./Caavvd2i.js";const l={title:"devlog 7: More life",description:"What do polyrhythms, new cars, bike rides, and CascadiaJS have in common? They're all part of this week's updates!",slug:"devlog/7",publish:!0,lastmod:"2024-05-27T00:00:00.000Z",date:"2024-05-26T00:00:00.000Z",aliases:null,tags:["status/seedling"],readTime:9,internalLinks:["/devlog/7#building-a-polyrhythm-using-web-apis","/devlog/7#cascadia-js"],flashcards:[]},{title:T,description:S,slug:q,publish:P,lastmod:N,date:_,aliases:z,tags:F,readTime:$,internalLinks:j,flashcards:L}=l;var A=u('<p>This was a fun week! Some highlights were:</p> <ul><li>I <a href="/devlog/7#building-a-polyrhythm-using-web-apis">built a polyrhythm</a> as a fun toy project</li> <li>Maya & I got a new car and took delivery of it on Thursday!</li> <li>Went for a long bike ride around Seattle with Maya</li> <li>Did a night at Harrison Hot Springs with My Dad & Maya</li> <li>Got accepted into <a href="/devlog/7#cascadia-js">Cascadia JS</a>!</li></ul> <p>I also decided it’s time to replace my bike with something in better shape and more suitable for commuting around a hilly city like Seattle, and have started researching what the right choice is. Hopefully I’ll have a conclusion in the next couple weeks and can write a note on it!</p> <h2 id="cascadia-js"><a aria-hidden="true" tabindex="-1" href="#cascadia-js"><span class="icon icon-link"></span></a><a href="#cascadia-js" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Cascadia JS</h2> <p>Earlier this month I met a guy named Carter Rabasa, who runs the Seattle JS meetup I presented at. Before the meetup started, we had a chance to chat a bit and I told him that I’m trying to build a company to make docs better. He also organizes a Pacific Northwest JS conference called CascadiaJS, which has a startup fair. At the time he said that they had no available spots for startups, but would let me know if anything opened up. The most exciting development of this week came on Sunday in the form of an email from Carter.</p> <blockquote><p>Hey Allan,</p> <p>I’m writing to let you know that we’d like you (and your startup) to join us for this year’s Startup Fair. Congrats!</p></blockquote> <p>This is fantastic news! A developer conference is a great place to meet potential customers for Doc Duck. I already had a ticket to the conference, and smaller conferences are my favorite. This makes it much more exciting for me, though! My favorite way to be a part of conferences is by contributing something to them. Unfortunately, this year I wasn’t ready to go as a speaker before the call for proposals closed. I’m thrilled I get to go as a startup and talk to a bunch of new people about actionable docs feedback and using it to improve developer experience.</p> <h2 id="epic-web-dev"><a aria-hidden="true" tabindex="-1" href="#epic-web-dev"><span class="icon icon-link"></span></a><a href="#epic-web-dev" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Epic Web Dev</h2> <p>This week James & I finished up the <a href="https://www.epicweb.dev/workshops/data-modeling-deep-dive" rel="nofollow">Data Modeling workshop</a>. Notably, I learned how to have the database query planning tell me its query plan, using the very literal SQL:</p> <!><!> <p>Followed by whatever SQL query I want it to explain.</p> <p>The workshop had an example where a user search page orders users by when they most recently updated a note, which required a foreign relation and was generating a B-Tree <em>for each user</em> to figure out their most recent note update. B-Trees take time and memory to use, so this was a very expensive query.</p> <p>The fix (and the lesson for optimizing queries) was to add indexes for:</p> <ul><li>Foreign keys in basically all cases - foreign keys are used for lookups in other tables, so it’s strange this isn’t just the default behavior</li> <li>columns referenced together, so in the workshop example this was an index on the <code>Note</code> table of the note’s owner ID and updated date</li></ul> <p>In prisma it is quite easy to add indexes:</p> <!><!> <p>This is surprisingly easy and resulted in something like a 250x faster query. I have a couple of queries on <a href="https://docduck.dev" rel="nofollow">Doc Duck</a> that are on the slower end, so I’m excited to put my new query optimization skills to use improving the dashboard loading speed there!</p> <h2 id="doc-duck"><a aria-hidden="true" tabindex="-1" href="#doc-duck"><span class="icon icon-link"></span></a><a href="#doc-duck" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Doc Duck</h2> <h3 id="dashboard-performance"><a aria-hidden="true" tabindex="-1" href="#dashboard-performance"><span class="icon icon-link"></span></a><a href="#dashboard-performance" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Dashboard performance</h3> <p>Inspired by what I learned about optimizing SQL in the Epic Web Dev course, I spent a couple hours on Thursday profiling and optimizing the Doc Duck dashboard. It was taking a couple seconds to load, which is quite sluggish for the page that comes after a login. The whole process was even worse, because the login also takes time, then the user gets redirected to the dashboard, <em>then</em> the 2 second load started. <em>Oof</em>.</p> <p>I profiled how long everything was taking, and realized that while some of the data was queried in parallel, one of the dashboard data visualizations was making two requests to the database and was blocking. I was able to reduce it to a single, non-blocking request that runs in parallel with the others. I also added some database indexes for foreign key relationships. These two changes resulting in an average ~50% speedup for loading the dashboard!</p> <h3 id="feedback-filtering"><a aria-hidden="true" tabindex="-1" href="#feedback-filtering"><span class="icon icon-link"></span></a><a href="#feedback-filtering" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Feedback filtering</h3> <p>This week I also implemented filtering for the feedback view. This makes managing feedback much easier. I have been bumping up against some limitations of the svelte reactivity model and found a use case where React’s <code>useState</code> hook would give me better control over how and when re-rendering occurs. Specifically, when a feedback item’s status is updated, I want to rerender the item’s status but not rebuild the table. This is tough in svelte, because reactive state changes waterfall, so updating any reactive state will also trigger other reactive declarations to be re-run.</p> <h2 id="building-a-polyrhythm-using-web-apis"><a aria-hidden="true" tabindex="-1" href="#building-a-polyrhythm-using-web-apis"><span class="icon icon-link"></span></a><a href="#building-a-polyrhythm-using-web-apis" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Building a polyrhythm using web APIs</h2> <p>I wanted to learn something a little different this week that speaks to my background in simulation software. Specifically, I wanted to play with the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API" rel="nofollow">canvas API</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API" rel="nofollow">Web Audio API</a> to build a <a href="https://allandeutsch.com/projects/polyrhythm" rel="nofollow">polyrhythm</a>! I figured I could build one in a day or two, which is a good amount of time to play with an API and get a feel for what it’s capable of.</p> <h3 id="the-canvas-api"><a aria-hidden="true" tabindex="-1" href="#the-canvas-api"><span class="icon icon-link"></span></a><a href="#the-canvas-api" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>The Canvas API</h3> <p>Canvas, or more specifically the <code>&lt;canvas&gt;</code> element, is used to draw things. It can draw lines and arcs. It’s intended for things like data visualizations, game graphics, and image editing. The API seemed to be designed to work like using a pen. It works something like this:</p> <!><!> <p>That example would draw a horizontal line 100 pixels across. Neat!</p> <p>With this plus some basic trigonometry and physics, it didn’t take me long to get a bunch of semicircle arcs draw and some circles bouncing along them.</p> <p>Next up was having my bouncing balls make noises when they reached the end of their arc. I could’ve used an existing tool, recorded an audio for each one, and then played those. That seemed really tedious, though. Plus it would be WAY more awesome if I created the sounds programmatically 😎</p> <h3 id="the-web-audio-api"><a aria-hidden="true" tabindex="-1" href="#the-web-audio-api"><span class="icon icon-link"></span></a><a href="#the-web-audio-api" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>The web audio API</h3> <p>This one I found a bit trickier, probably because I didn’t know much about how audio synthesis works going in. Fortunately, I found a really cool talk by Neil McCallion called <a href="https://www.youtube.com/watch?v=uasGsHf7UYA" rel="nofollow">I play JavaScript</a> that he presented at NIDevConf in 2020. Neil does a fantastic job explaining both the web audio API <em>and</em> the underlying principles of audio synthesis.</p>',1);function M(d,p){const h=m(p,["children","$$slots","$$events","$$legacy"]);w(d,b(()=>h,l,{children:(c,D)=>{var s=A(),i=e(f(s),18);a(i,()=>'<pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#393A34;--shiki-dark:#DBD7CAEE">EXPLAIN QUERY PLAN</span></span></code></pre>');var n=e(i);a(n,()=>'<pre class="code-copy-target hidden">EXPLAIN QUERY PLAN</pre>');var t=e(n,12);a(t,()=>`<pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#AB5959;--shiki-dark:#CB7676">model</span><span style="color:#2E8F82;--shiki-dark:#5DA994"> Note</span><span style="color:#999999;--shiki-dark:#666666"> &#123;</span></span>
<span class="line"><span style="color:#B07D48;--shiki-dark:#BD976A">  id</span><span style="color:#2E8F82;--shiki-dark:#5DA994">      String</span><span style="color:#59873A;--shiki-dark:#80A665"> @id</span><span style="color:#59873A;--shiki-dark:#80A665"> @default</span><span style="color:#999999;--shiki-dark:#666666">(</span><span style="color:#998418;--shiki-dark:#B8A965">cuid</span><span style="color:#999999;--shiki-dark:#666666">())</span></span>
<span class="line"><span style="color:#B07D48;--shiki-dark:#BD976A">  title</span><span style="color:#2E8F82;--shiki-dark:#5DA994">   String</span></span>
<span class="line"><span style="color:#B07D48;--shiki-dark:#BD976A">  content</span><span style="color:#2E8F82;--shiki-dark:#5DA994"> String</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B07D48;--shiki-dark:#BD976A">  createdAt</span><span style="color:#2E8F82;--shiki-dark:#5DA994"> DateTime</span><span style="color:#59873A;--shiki-dark:#80A665"> @default</span><span style="color:#999999;--shiki-dark:#666666">(</span><span style="color:#998418;--shiki-dark:#B8A965">now</span><span style="color:#999999;--shiki-dark:#666666">())</span></span>
<span class="line"><span style="color:#B07D48;--shiki-dark:#BD976A">  updatedAt</span><span style="color:#2E8F82;--shiki-dark:#5DA994"> DateTime</span><span style="color:#59873A;--shiki-dark:#80A665"> @updatedAt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B07D48;--shiki-dark:#BD976A">  owner</span><span style="color:#A65E2B;--shiki-dark:#C99076">   User</span><span style="color:#59873A;--shiki-dark:#80A665">   @relation</span><span style="color:#999999;--shiki-dark:#666666">(</span><span style="color:#B07D48;--shiki-dark:#BD976A">fields</span><span style="color:#999999;--shiki-dark:#666666">:</span><span style="color:#393A34;--shiki-dark:#DBD7CAEE"> [</span><span style="color:#A65E2B;--shiki-dark:#C99076">ownerId</span><span style="color:#393A34;--shiki-dark:#DBD7CAEE">], </span><span style="color:#B07D48;--shiki-dark:#BD976A">references</span><span style="color:#999999;--shiki-dark:#666666">:</span><span style="color:#393A34;--shiki-dark:#DBD7CAEE"> [</span><span style="color:#A65E2B;--shiki-dark:#C99076">id</span><span style="color:#393A34;--shiki-dark:#DBD7CAEE">], </span><span style="color:#B07D48;--shiki-dark:#BD976A">onDelete</span><span style="color:#999999;--shiki-dark:#666666">:</span><span style="color:#A65E2B;--shiki-dark:#C99076"> Cascade</span><span style="color:#393A34;--shiki-dark:#DBD7CAEE">, </span><span style="color:#B07D48;--shiki-dark:#BD976A">onUpdate</span><span style="color:#999999;--shiki-dark:#666666">:</span><span style="color:#A65E2B;--shiki-dark:#C99076"> Cascade</span><span style="color:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="color:#B07D48;--shiki-dark:#BD976A">  ownerId</span><span style="color:#2E8F82;--shiki-dark:#5DA994"> String</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B07D48;--shiki-dark:#BD976A">  images</span><span style="color:#A65E2B;--shiki-dark:#C99076"> NoteImage</span><span style="color:#AB5959;--shiki-dark:#CB7676">[]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;--shiki-dark:#758575DD">  // indexing by owner ID (most frequently referenced) then updatedAt (a sort criteria)</span></span>
<span class="line"><span style="color:#A0ADA0;--shiki-dark:#758575DD">  // to improve query performance when getting a user's notes</span></span>
<span class="line"><span style="color:#59873A;--shiki-dark:#80A665">  @@index</span><span style="color:#999999;--shiki-dark:#666666">(</span><span style="color:#393A34;--shiki-dark:#DBD7CAEE">[</span><span style="color:#A65E2B;--shiki-dark:#C99076">ownerId</span><span style="color:#393A34;--shiki-dark:#DBD7CAEE">, </span><span style="color:#A65E2B;--shiki-dark:#C99076">updatedAt</span><span style="color:#393A34;--shiki-dark:#DBD7CAEE">]</span><span style="color:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="color:#393A34;--shiki-dark:#DBD7CAEE">  </span></span>
<span class="line"><span style="color:#A0ADA0;--shiki-dark:#758575DD">  // non-unique foreign keys aren't indexed by default</span></span>
<span class="line"><span style="color:#59873A;--shiki-dark:#80A665">  @@index</span><span style="color:#999999;--shiki-dark:#666666">(</span><span style="color:#393A34;--shiki-dark:#DBD7CAEE">[</span><span style="color:#A65E2B;--shiki-dark:#C99076">ownerId</span><span style="color:#393A34;--shiki-dark:#DBD7CAEE">]</span><span style="color:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="color:#999999;--shiki-dark:#666666">&#125;</span></span></code></pre>`);var o=e(t);a(o,()=>`<pre class="code-copy-target hidden">model Note &#123;
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
&#125;</pre>`);var r=e(o,24);a(r,()=>`<pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee" tabindex="0"><code><span class="line"><span>pen.moveToPosition(X,Y);</span></span>
<span class="line"><span>pen.lineTo(X + 100, Y);</span></span>
<span class="line"><span>pen.draw();</span></span></code></pre>`);var k=e(r);a(k,()=>`<pre class="code-copy-target hidden">pen.moveToPosition(X,Y);
pen.lineTo(X + 100, Y);
pen.draw();</pre>`),g(10),y(c,s)},$$slots:{default:!0}}))}export{M as default,l as metadata};
