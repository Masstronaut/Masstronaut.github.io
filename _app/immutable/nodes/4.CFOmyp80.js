import{t,a as e,d as J}from"../chunks/Sv_TBA-2.js";import"../chunks/BaJv1Ckm.js";import{s as c,c as q,f as w,r as N,af as X,$ as H}from"../chunks/BOCtfefK.js";import{h as L}from"../chunks/CodHM6-c.js";import{i as R}from"../chunks/tqtBAqyL.js";import{s as E}from"../chunks/BmDftNyR.js";var O=t('<h2 class="svelte-1def9nf">A placeholder heading</h2>'),K=t('<p class="svelte-1def9nf">Some placeholder content about why this thing is significant</p>'),Y=t('<div class="node svelte-1def9nf"><div class="mb-8 inline-block rounded-md border border-slate-100 p-6 svelte-1def9nf"><!> <!></div> <!></div>');function s(F,f){var M=Y(),P=q(M),U=q(P);{var _=u=>{var v=J(),A=w(v);E(A,()=>f.heading),e(u,v)},T=u=>{var v=O();e(u,v)};R(U,u=>{f.heading?u(_):u(T,!1)})}var z=c(U,2);{var W=u=>{var v=J(),A=w(v);E(A,()=>f.content),e(u,v)},B=u=>{var v=K();e(u,v)};R(z,u=>{f.content?u(W):u(B,!1)})}N(P);var j=c(P,2);E(j,()=>f.children??X),N(M),e(F,M)}var V=t('<h1 class="mt-0">My Career History</h1>'),Z=t(`<p>My intense curiosity has led me down a nonlinear career path. I'm
				fortunate that it's afforded me a breadth of experiences across software
				development, product management, business strategy, and people. I've
				chronicled some of the highlights below in roughly chronological order.</p>`),Q=t('<h2 class="mt-0">Digipen, BSCS</h2>'),ee=t(`<div><p>At DigiPen I studied Computer Science and earned my Bachelor of
						Science in Computer Science. This is where I began to discovered the
						type of work that fulfills me: creating things that make it easier for
						others to bring their visions into existence. Some highlights from my
						time at DigiPen include:</p> <ul><li>Interned at Microsoft as a Software Engineer and a Product Manager</li> <li>Building 5 game engines from scratch in C and C++</li> <li>Leading multi-discipline game teams for 3 years</li> <li>Mentoring peers and subsequent cohorts as a TA, student lecturer,
							and club leader</li> <li>Exhibiting my Junior year game project at Alt.Ctrl.GDC with my team</li> <li>Presented a <a href="https://youtu.be/-8UZhDjgeZU">talk on data structures</a> and a poster on game engine architecture
							at CppCon in 2017</li> <li>Participating in the C++ Standards committee in an attempt to add \`<a href="https://github.com/Masstronaut/slot_array">slot_map</a>\` to the standard library</li></ul></div>`),te=t('<h3 class="mt-0">Sand Garden</h3>'),ae=t(`<div><img src="https://img.allandeutsch.com/allandeutschcom-note-images/6450254ffa2f2ea627259d8c91bd6536.png" alt="An early prototype of Sand Garden, showing a box of sand with a TV behind it that renders the game world"> <p>Sand Garden was my Junior year project at DigiPen. At peak, the
							team had 15 other people across sound design, game design,
							engineering, and art. Sand Garden was a unique project in which
							players shape a small world to suit its inhabitants and protect them
							from disasters. Players interact by using their hands to manipulate
							a real-world box of sand. Some of the challenges I overcame on the
							project were:</p> <ul><li>Creating a custom game engine that enabled the whole team to
								collaborate effectively within a complex, interwoven system</li> <li>📖 Convincing the school president to allow us to have a box of
								sand in a computer lab, and to spend ~$1000 on fancy dirt.</li> <li>📖 Worked with the game projects faculty to get ~half the
								certification requirements waived for the game.</li></ul></div>`),oe=t('<h4 class="mt-0">Exhibiting at Alt.Ctrl.GDC</h4>'),ne=t(`<div><iframe width="560" height="315" src="https://www.youtube.com/embed/L6aa6X10Ow4?si=KVHkNn8Ezk1lF7CA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen=""></iframe> <p>Sand Garden was accepted as a finalist at Alt.Ctrl.GDC, a
								competition at the largest game developer conference for games
								with "alternate control" schemes. <br> <a href="https://www.gamedeveloper.com/design/alt-ctrl-gdc-showcase-i-sand-garden-i-" target="_blank">GameDeveloper.com published an interview</a> with
								me and another team member about the game.</p></div>`),re=t(`<h4 class="mt-0">"It's pretty cool"</h4>`),ie=t(`<div><img src="https://img.allandeutsch.com/allandeutschcom-note-images/60a9d8c718db1f7f9b9a62cd7b9da8d0.jpeg" alt="A blurry Bill Gates stands by admiring an early Sand Garden build. The janky construction looks like it could fall over at any moment, but everyone is engrossed in the game."> <p>The Summer after my Junior year, some teammates continued to work
								on Sand Garden. You can tell from the precarious contraption
								towering above them that we were software folks with limited
								skills in hardware.</p><p>If you look closely, you can see the person on the right is Bill
								Gates! Bill and his son stopped by to play Sand Garden. <br> When asked what he had to say about the game, my teammates informed
								me that he had said "it's pretty cool!"</p> <p>Unfortunately, I missed out on my chance to meet Bill Gates while
								he played a game I made. I was tragically unavailable because I
								was busy working on another game... at Microsoft.</p></div>`),se=t("<!> <!>",1),de=t('<h3 class="mt-0">Microsoft SWE internship</h3>'),he=t(`<div><img src="https://img.allandeutsch.com/allandeutschcom-note-images/39df740e01625b08bb5a5e2ea89065c6.png" alt="Cover art for ReCore, an xbox game. It shows the protagonist, Joule, in a sandstorm with a vignette of her robot companions in the bottom left corner."> <p>Microsoft's "Global Game Publishing Division" had a problem: ReCore
							needs to ship soon, and it was not ready to go out the door. The
							game's performance was particularly problematic, and I was super
							excited to dig in and speed things up. among the myriad performance
							issues I resolved, a few things stand out:</p> <ul><li>I identified a core loop in AI execution that wasn't utilizing
								CPU cache effectively. Fixing this took average per-second AI
								execution time from 33ms to 15ms, netting the game 1FPS at a 60FPS
								target.</li> <li>Discovered that spawning entities was extremely slow due to the
								way models were being loaded. My optimizations reduced total
								entity spawning times by 75%.</li> <li>Implemented performance regression test scenarios that made it
								easy to catch any further incoming changes that impacted
								performance.</li></ul></div>`),ce=t('<h3 class="mt-0">Microsoft PM internship</h3>'),le=t(`<p>I analyzed our incoming support requests to understand where our
						ecosystem was failing developers and investigated 10 other developer
						ecosystems to understand what a great one looks like. Then I put
						together a strategy for Xbox to get there and worked across
						organizations within Microsoft to get alignment on the strategy.</p>`),ue=t('<h3 class="mt-0">C++Con presentation</h3>'),ge=t(`<div><iframe width="560" height="315" src="https://www.youtube.com/embed/-8UZhDjgeZU?si=WKaemynGjkO7x3-G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen=""></iframe> <p>I presented a talk on data structures and a poster on game engine
							architecture at CppCon in 2017</p></div>`),pe=t('<h3 class="mt-0">Known for Linux, Git, and...</h3>'),me=t(`<div><img src="https://img.allandeutsch.com/allandeutschcom-note-images/99a8f82869993add58655df8a1852751.png" alt="Me standing next to Linus Torvalds, who was wearing a Subsurface shirt. We had just returned to shore from a morning of dives."> <p>If you guessed the SCUBA dive logging software, Subsurface, you got
							it! It's Linus Torvalds! After missing my chance to meet Bill Gates,
							redemption was mine when I met Linus Torvalds in Hawaii. We both
							ditched our families on Thanksgiving morning to go SCUBA diving!</p> <p>This of course has nothing to do with my career, but I wanted to
							share the happy ending after the whole Bill Gates fiasco.</p></div>`),ve=t("<!> <!> <!> <!> <!>",1),fe=t('<h2 class="mt-0">Microsoft</h2>'),we=t(`<div><p>After graduating DigiPen, I returned to Microsoft for 4 years as a
						Product Manager. I was fortunate to gain a breadth of experience there
						that has continued to serve me in unexpected ways ever since.</p></div>`),ye=t('<h3 class="mt-0">Game Developer Experience PM</h3>'),be=t(`<div><p>"Whatever it takes to make sure game developers can successfully
							ship great games for the next-generation Xbox console launch."
							That's the overarching theme of what I did in this role.</p></div>`),_e=t('<h4 class="mt-0">Game Engine API Design</h4>'),ke=t(`<div><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/W3ViIBnTTKA?si=zUvyTt8J3IgG0rBR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen=""></iframe> <p>This was a talk I gave at C++Now in 2018, showing how API design
								can impact the performance and optimizability of a game engine.
								This had become a major problem for Unity, and I proposed a
								different way of designing a game engine API that was expressive
								and provided ample opportunities for optimization that better
								aligns with how hardware works.</p></div>`),Ie=t('<h4 class="mt-0">A tighter feedback loop</h4>'),xe=t(`<div><p>Remember a decade ago when detailed order tracking wasn't very
								common? I'd buy something online, have no idea when it shipped,
								where it was, or when to expect it would be delivered. Then one
								day, my package would show up. Yay!</p> <p>That's what it was like for game developers with a support
								request. Fine if it's non-blocking and release is far away, or
								infuriating if you're supposed to ship in a few days and your
								game's Xbox build keeps crashing.</p> <p>We had a couple of separate systems we needed to integrate, but
								they had conflicting constraints that made it difficult. The
								answer was clear:</p> <img src="https://imgs.xkcd.com/comics/standards.png" alt="an XKCD comic about 14 competing standards. The character proposes a new 15th standard to unify them all, resulting in the new problem of 15 competing standards."> <p>Fortunately, this ended up being a great and extensible solution
								for integrating our developer forums to internal task tracking.
								The experience improved from a lack of clarity to being
								automatically measured and reported internally. The developer
								experience improved from a mystery order to a detailed pizza
								tracker, which was the inspiration for how support progress was
								reported to developers. This was not the last time I would be a
								"pizza tracker" in my career.</p></div>`),$e=t('<h4 class="mt-0">Read the f@#$ing manual</h4>'),Te=t(`<div><p>With better issue tracking set up, a clear problem emerged: the
								answers are in the docs, but devs aren't finding them.</p> <p>It didn't take long to find the problem. I couldn't find the
								docs! Googling got me nothing. When I gave up, I asked the docs
								team and someone showed me how to find a download link for a
								compiled HTML file (.chm, pronounced "chum") containing the docs.
								Fishy.</p> <p>This thing was undiscoverable, hidden behind an auth wall, and
								once I downloaded it I couldn't even search for any text content!
								No wonder nobody was finding answers in there.</p> <p>In my naiveté, I thought the solution was obvious: put the docs
								on our good docs platform, docs.microsoft.com. Everyone told me it
								was impossible. There were certain details that just couldn't be
								made public.</p> <p>So I did what any reasonable person would do. I made a
								spreadsheet to track every single one of our thousands of doc
								pages, figured out who was responsible for each one, and got
								explicit sign off for every single page that could be made public.
								It took months, but in the end around 95% of the docs were cleared
								for release.</p> <p>Now they're public! I also built the first version of the landing
								page, which still serves as <a href="https://learn.microsoft.com/en-us/gaming/xbox/">the hub routing Xbox developers to the resources they need</a>. Most importantly, a developer can find them the easy way now: <img src="https://img.allandeutsch.com/allandeutschcom-note-images/21f4182d53776370653d37f18a21f2ab.png" alt="a google search for 'xbox development documentation' where the top two results are the relevant documentation landing pages on docs.microsoft.com"></p></div>`),Se=t('<h4 class="mt-0">No docs, no ship</h4>'),Ce=t(`<div><p>"If a tree falls in the forest and no one is around to hear it,
								does it make a sound?" <br>"If I release a feature and don't tell anyone how to use it
								in the docs, is it really released?"</p> <p>The fancy new Xbox features were supposed to make the new games <em>look</em> and <em>feel</em> new. That only happens when developers use the features!</p> <p>With only 4 writers, the docs team was hopelessly outmatched by
								dozens of feature teams cranking out new capabilities for the new
								console. Even if we hired a bunch of new writers, we wouldn't be
								able to get on top of all the existing and expected docs work.
								Something had to change!</p> <p>There was really only one viable path forward after accounting
								for budget and timeline constraints. I had to propose the obvious
								solution: "Feature teams could write their own docs!" It wasn't a
								popular suggestion among the feature team engineering leadership,
								but nobody else had a solution.</p> <p>To set the feature teams up for success, I helped the docs team
								put together resources to set the feature teams up for success:
								templates, examples, training sessions, and a review process. I
								worked with release management to make quality docs a gating
								factor for releasing features. That's one way to solve the
								philosophical question!</p> <p>This approach turned out to be the right solution long-term.
								Nobody knows a feature better than its author, and once the dev
								had written the meat of a doc they were able to pair with a writer
								on making it easier to find and understand. This culture change
								resulted in a longer-term trend towards better quality docs and
								better docs coverage.</p></div>`),Me=t("<!> <!> <!> <!>",1),Pe=t('<h3 class="mt-0">Game Developer Services PM</h3>'),Ae=t(`<p>My next chapter at Microsoft was working on Xbox Live and PlayFab.
						Officially, I was responsible for 10 services, but Achievements, game
						saves, and PlayFab's core were 95% of the work. Much of the work I did
						in this role is unfortunately not easy to share as it is deeply
						intertwined with sensitive business information protected by NDA.</p>`),Ge=t('<h4 class="mt-0">The right defaults</h4>'),De=t(`<div><p>Smaller studios were running into issues with configuring their
								achievements. Sometimes they would realize it before release,
								other times it would be when players weren't getting achievements
								they were supposed to. Xbox Achievements are available in two
								flavors: <a href="https://learn.microsoft.com/en-us/gaming/gdk/_content/gc/live/features/player-data/achievements/live-achievements-eb-vs-tm">event-based and title-managed</a>. Or more simply: the old complicated way and the new simple way.
								Unfortunately, most new titles were choosing the old complicated
								way.</p> <p>I did the obvious thing and updated the docs to make this really
								easy to figure out. A big banner that says "We recommend using
								title-managed Achievements to configure new titles." But of course
								nobody reads the docs. No measurable change. What else can be
								done?</p> <p>Second time at bat on this problem, I was curious what was going
								wrong. I tried setting up a demo title, and found my answer.
								Buried in a services config page was a radio selector with
								"event-based" pre-selected and "title-managed" underneath.</p> <p>Gave those two the ol' switcheroo and added a link to the docs as
								a cherry on top. The measure (support requests) was very lagging,
								so it took a months to be sure. Gradually, these configuration
								issues declined until months went by without seeing any of them.
								The right default made all the difference.</p></div>`),ze=t('<h4 class="mt-0">Consulting with Ikon Games</h4>'),We=t(`<div><p>Ikon was struggling with an ambitious game project and needed an
								infusion of cash and more experience shipping games. I had
								identified a market opportunity that was a perfect fit: short,
								inexpensive games centered around achievements for the
								"Achievement Hunter" audience. We were able to develop an
								achievement puzzle concept that leveraged Ikon's existing assets
								and ship two games in ~6 months.</p> <p>This bold new product strategy, combined with strategic creator
								partnerships proved extremely effective. The studio was able to
								reach over 50k viewers and convert ~30% of them. This strategy
								produced over 100K in profit for the studio.</p></div>`),Be=t("<!> <!>",1),je=t("<!> <!>",1),Fe=t('<h2 class="mt-0">Quantic MBA</h2>'),Ue=t(`<p>Having gone from a technical education to a role at the intersection of
					technology and business, I felt that my business side knowledge wasn't
					where I wanted it to be. I chose Quantic because of their flexible
					scheduling and focus on education outcomes. My MBA began towards the end
					of my tenure at Microsoft, and I graduated with honors and a breadth of
					understanding about business a year later.</p>`),Ee=t('<h2 class="mt-0">Ikigai Technologies</h2>'),qe=t(`<p>I wanted to try working at a smaller company, and Ikigai was a
					pre-product startup that presented a perfect opportunity for me to be
					more hands-on building a new product. My work was primarily focused on
					building an on-chain NFT auction platform that became <a href="https://grabbit.market" target="_blank">grabbit.market</a>. During my time at Ikigai, the company was also working on developing
					a data infrastructure solution and two game products.</p>`),Ne=t('<h3 class="mt-0">Senior Software Engineer</h3>'),Je=t(`<div><p>Worked with React, NextJS, and MaterialUI in TypeScript to build out
							a fine art NFT auction house concept. I worked closely with our
							designer and smart contract engineer to build out the end-to-end
							auctioning experience.</p><p>For the fine art niche, there was a ritzy aesthetic we wanted to
							deliver on. Working in MaterialUI made this difficult, as it's a
							strongly opinionated UI framework that made matching our designs
							laborious. Coupled with some other technical decisions, progress was
							excruciatingly slow.</p></div>`),Re=t('<h3 class="mt-0">Software Engineering Manager</h3>'),Xe=t(`<div><p>During a three day hackathon, I teamed up with our smart contract
							engineer to see how far we could get with a rewrite using SvelteKit
							and Tailwind. We demonstrated enough progress & velocity that we
							decided to adopt this stack for the main product. We ended up
							shipping features about 5x faster after this change.</p> <p>One of my responsibilities in this role was to hire and onboard new
							engineers. I created an efficient process for interviewing
							candidates that enabled us to rapidly fill roles as quickly as 1
							week from open req to start date. My team grew to be responsible for
							the entire auction product as well as DevOps and smart contracts
							across all 4 products.</p> <p>Our code review process was slow and manual. I set up Vercel to
							build and deploy all PR branches. This made it possible to get
							asynchronous design reviews and build confidence in the deployment
							among engineers. The lower cognitive load of reviewing helped us
							accelerate average PR reviews from 3 days to &lt;1 day. It also
							helped us catch design issues before they hit prod.</p></div>`),He=t('<h3 class="mt-0">Head of Engineering & Product</h3>'),Le=t(`<div><p>In this role my responsibilities expanded broadly to work across the
							company to ensure the Grabbit marketplace is successful. Some of my
							initiatives were:</p> <ul><li>Partnering with BizDev to create a community accelerator program
								to help artist partners launch collections on Grabbit</li> <li>Fostering a more collaborative culture to improve the product,
								such as through cross-discipline pairing sessions</li> <li>Driving for excellence in engineering practices and rituals that
								led to 100% of releases having no major issues</li></ul> <p>The company ran out of money, and I saw the opportunity to take
							what I'd learned and try my hand at building software independently.</p></div>`),Oe=t("<!> <!> <!>",1),Ke=t('<h2 class="mt-0">Doc Duck</h2>'),Ye=t(`<div><p>It was a meandering path, but I found my way to the niche of docs
						feedback with <a href="https://docduck.dev/">Doc Duck</a>. Some of the
						more interesting technical problems include:</p> <ul><li>Creating a frontend-agnostic widget for collecting documentation
							feedback</li> <li>Developing a custom auth system with the security of session-based
							auth and the flexibility to mint JWTs that enable an asymmetric doc
							experience</li></ul> <p>As a solo founder, I've also conducted all the discovery calls, built
						the landing page, admin dashboard, APIs, etc.</p></div>`),Ve=t('<h2 class="mt-0">SeattleJS Community Organizer</h2>'),Ze=t(`<div><p>Being a solo founder has been very lonely, and I was fortunate to
						find the SeattleJS community. It's been an opportunity to share
						learnings, mentor new developers, and build a community I'm thrilled
						to be part of. Recently, I've become an organizer and had some great
						early wins:</p> <ul><li>Doubled YoY attendance at the first meetup I organized</li> <li>Improved my leadership skills through coaching</li> <li>Currently organizing an event in collaboration with TC39</li></ul></div>`),Qe=t("<!> <!> <!> <!> <!> <!>",1),et=t('<div class="prose mx-auto"><!></div>');function st(F){var f=et();L(P=>{H.title="Career History - Allan Deutsch"});var M=q(f);s(M,{heading:_=>{var T=V();e(_,T)},content:_=>{var T=Z();e(_,T)},children:(_,T)=>{var z=Qe(),W=w(z);s(W,{heading:a=>{var n=Q();e(a,n)},content:a=>{var n=ee();e(a,n)},children:(a,n)=>{var y=ve(),b=w(y);s(b,{heading:o=>{var i=te();e(o,i)},content:o=>{var i=ae();e(o,i)},children:(o,i)=>{var x=se(),C=w(x);s(C,{heading:d=>{var $=oe();e(d,$)},content:d=>{var $=ne();e(d,$)},$$slots:{heading:!0,content:!0}});var p=c(C,2);s(p,{heading:d=>{var $=re();e(d,$)},content:d=>{var $=ie();e(d,$)},$$slots:{heading:!0,content:!0}}),e(o,x)},$$slots:{heading:!0,content:!0,default:!0}});var k=c(b,2);s(k,{heading:o=>{var i=de();e(o,i)},content:o=>{var i=he();e(o,i)},$$slots:{heading:!0,content:!0}});var S=c(k,2);s(S,{heading:o=>{var i=ce();e(o,i)},content:o=>{var i=le();e(o,i)},$$slots:{heading:!0,content:!0}});var I=c(S,2);s(I,{heading:o=>{var i=ue();e(o,i)},content:o=>{var i=ge();e(o,i)},$$slots:{heading:!0,content:!0}});var g=c(I,2);s(g,{heading:o=>{var i=pe();e(o,i)},content:o=>{var i=me();e(o,i)},$$slots:{heading:!0,content:!0}}),e(a,y)},$$slots:{heading:!0,content:!0,default:!0}});var B=c(W,2);s(B,{heading:a=>{var n=fe();e(a,n)},content:a=>{var n=we();e(a,n)},children:(a,n)=>{var y=je(),b=w(y);s(b,{heading:g=>{var r=ye();e(g,r)},content:g=>{var r=be();e(g,r)},children:(g,r)=>{var h=Me(),o=w(h);s(o,{heading:l=>{var d=_e();e(l,d)},content:l=>{var d=ke();e(l,d)},$$slots:{heading:!0,content:!0}});var i=c(o,2);s(i,{heading:l=>{var d=Ie();e(l,d)},content:l=>{var d=xe();e(l,d)},$$slots:{heading:!0,content:!0}});var x=c(i,2);s(x,{heading:l=>{var d=$e();e(l,d)},content:l=>{var d=Te();e(l,d)},$$slots:{heading:!0,content:!0}});var C=c(x,2);s(C,{heading:l=>{var d=Se();e(l,d)},content:l=>{var d=Ce();e(l,d)},$$slots:{heading:!0,content:!0}}),e(g,h)},$$slots:{heading:!0,content:!0,default:!0}});var k=c(b,2);s(k,{heading:g=>{var r=Pe();e(g,r)},content:g=>{var r=Ae();e(g,r)},children:(g,r)=>{var h=Be(),o=w(h);s(o,{heading:p=>{var m=Ge();e(p,m)},content:p=>{var m=De();e(p,m)},$$slots:{heading:!0,content:!0}});var i=c(o,2);s(i,{heading:p=>{var m=ze();e(p,m)},content:p=>{var m=We();e(p,m)},$$slots:{heading:!0,content:!0}}),e(g,h)},$$slots:{heading:!0,content:!0,default:!0}}),e(a,y)},$$slots:{heading:!0,content:!0,default:!0}});var j=c(B,2);s(j,{heading:a=>{var n=Fe();e(a,n)},content:a=>{var n=Ue();e(a,n)},$$slots:{heading:!0,content:!0}});var u=c(j,2);s(u,{heading:a=>{var n=Ee();e(a,n)},content:a=>{var n=qe();e(a,n)},children:(a,n)=>{var y=Oe(),b=w(y);s(b,{heading:r=>{var h=Ne();e(r,h)},content:r=>{var h=Je();e(r,h)},$$slots:{heading:!0,content:!0}});var k=c(b,2);s(k,{heading:r=>{var h=Re();e(r,h)},content:r=>{var h=Xe();e(r,h)},$$slots:{heading:!0,content:!0}});var S=c(k,2);s(S,{heading:r=>{var h=He();e(r,h)},content:r=>{var h=Le();e(r,h)},$$slots:{heading:!0,content:!0}}),e(a,y)},$$slots:{heading:!0,content:!0,default:!0}});var v=c(u,2);s(v,{heading:a=>{var n=Ke();e(a,n)},content:a=>{var n=Ye();e(a,n)},$$slots:{heading:!0,content:!0}});var A=c(v,2);s(A,{heading:a=>{var n=Ve();e(a,n)},content:a=>{var n=Ze();e(a,n)},$$slots:{heading:!0,content:!0}}),e(_,z)}}),N(f),e(F,f)}export{st as component};
