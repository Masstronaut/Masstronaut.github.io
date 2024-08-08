import{s as Ie,p as ee,q as be,e as i,a as s,c as l,u as r,g as d,B as Me,o as F,i as a,n as _e,f as o}from"./scheduler.DG9R8YhD.js";import{S as xe,i as Le,c as He,a as Se,m as Ce,t as Pe,b as Ae,d as Be}from"./index.DXoakw9j.js";import{g as De,a as ke}from"./spread.CgU5AtxT.js";import{M as Fe}from"./MDSveXNoteLayout.jyYVGmCw.js";function qe(D){let n,f='This week I had the thrilling opportunity to present at the Seattle JS meetup. I presented about a TypeScript technique called <a href="/notes/branded-types">Branded Types</a>. I presented out of the linked blog post, which worked surprisingly well!',u,c,p,h,m,te='The last time I presented a technical talk was at C++Now in May of 2018 on the topic of <a href="https://www.youtube.com/watch?v=W3ViIBnTTKA" rel="nofollow">Game Engine API Design</a>. Since my C++ era I’ve had two career changes, first to become a PM, and second to become a web developer. It was great to be back on stage sharing something I know, and the meetup group was super welcoming and friendly. A bunch of people came up to thank me for the talk afterwards and there seemed to be a lot of interest in how <a href="https://docduck.dev" rel="nofollow">Doc Duck</a> could improve documentation.',q,v,ae='I also had my interview with First Round capital for their Summer 2024 <a href="https://pmf.firstround.com/" rel="nofollow">Product Market Fit Method</a> program. I think it went well, but there were a couple questions that I didn’t answer as well as I would’ve liked. One was about raising capital, which I said I was planning to do in 2024H2, but in reality it’s something I want to do when <a href="https://docduck.dev" rel="nofollow">Doc Duck</a> is on pace to become capital constrained, rather than arbitrarily at some other time.',$,b,oe='It’s also been an eventful week for other reasons - both my Dad’s birthday and Mother’s day. I celebrated with my dad by taking him to our favorite Seattle thermal spa, <a href="https://maps.app.goo.gl/J2z1uKnFS85UoNWa9" rel="nofollow">Banya 5</a>, as well as a post-soak brunch at <a href="https://maps.app.goo.gl/uvcpNCNufjt5yWxQ7" rel="nofollow">Portage Bay Cafe</a>. He also gave Maya &amp; I a tour of the school he started working at recently, which has an awesome rooftop soccer field! 🤯 For Mother’s day Maya &amp; I are going down to Olympia to visit my mom and check out the <a href="https://maps.app.goo.gl/ppnZ4QwM1mymF6CU8" rel="nofollow">Mima Mounds</a> as well as try out a fancy new restaurant in Olympia with her.',j,w,ne='<a aria-hidden="true" tabindex="-1" href="#adding-interactive-code-to-allandeutschcom"><span class="icon icon-link"></span></a><a href="#adding-interactive-code-to-allandeutschcom" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Adding interactive code to AllanDeutsch.com',z,k,ie='For my <a href="/notes/branded-types">Branded Types</a> presentation at the SeattleJS meetup I tried a new presentation format: talk through my blog post. I’ve noticed a recent trend where tech streamers will livestream themselves reading blog posts and adding commentary. Riffing on that idea, I thought: why not read my own blog post and provide commentary?',W,T,le="I wanted to try this new (to me) format for this talk because:",O,I,se="<li>It’s a web development talk, so presenting from a website feels fitting</li> <li>Making slides is a lot of work and the talks aren’t recorded, so I’d rather put the effort into making a great blog post that remains valuable</li> <li>It’s a lightning talk (low stakes) at a free event (if I bomb nobody wasted money to see it). The risk is super low!</li>",R,M,re='Part of my talk involved showing how branded types can cause certain undesirable behavior to produce type errors. My blog could already <a href="/notes/svelte-shiki-twoslash">Beautifully render markdown code blocks in Svelte</a>, including TypeScript errors, which was a great fit for the talk.',J,_,de='For a couple examples, though, I wanted to make small changes to code or show runtime outputs. For now my blog doesn’t have interactive code snippets. I needed another way to <a href="/notes/make-example-code-interactive">Make example code interactive</a>.',N,x,pe='The obvious choice was to create the demos on the <a href="https://typescriptlang.org/play/" rel="nofollow">TypeScript playground</a>. The process seemed straightforward enough. For each snippet I’d have to:',U,L,he="<li>Create the playground with the code snippet</li> <li>Save the playground</li> <li>Generate a link to it</li> <li>Add the link to my post in the right spot</li>",G,H,ce='This would be super tedious though, especially if I ever want to make changes to the code (which I did at least 10 times the day of my presentation 😅). I knew there had to be a more automated way to do this. Fortunately, I found it quickly in <a href="https://www.typescriptlang.org/play/?#handbook-9" rel="nofollow">the playground docs on URL structure</a>. My solution to <a href="https://allandeutsch.com/notes/make-example-code-interactive/" rel="nofollow">Make example code interactive</a> was to <a href="/notes/dynamic-ts-playground-links">Dynamically generate TypeScript Playground links</a> and <a href="/notes/code-block-tsplay-demo-link">Add a demo link to TypeScript code blocks</a> on my blog. The results were great, and I got a ton of positive feedback on my presentation!',E,S,ue="I was also pretty prolific in my writing this week! In addition to this devlog, I published a handful of notes:",K,C,me='<li><a href="/notes/branded-types">Branded Types</a>, the article I presented at SeattleJS. It also inspired me to write about some of the technical details that powered it:</li> <li><a href="/notes/dynamic-ts-playground-links">Dynamically generate TypeScript Playground links</a> and</li> <li><a href="/notes/code-block-tsplay-demo-link">Add a demo link to TypeScript code blocks</a>. These inspired a more philosophical note about technical content in general:</li> <li><a href="/notes/make-example-code-interactive">Make example code interactive</a></li>',Q,y,fe='<a aria-hidden="true" tabindex="-1" href="#epic-web-dev"><span class="icon icon-link"></span></a><a href="#epic-web-dev" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Epic web dev',V,P,we='This Friday James &amp; I met up to learn about data modeling. A lot of it was review for me because I’ve already been using <a href="https://www.prisma.io/" rel="nofollow">prisma</a> to talk to my database, but I learned about an awesome feature I had no idea existed: <a href="https://www.prisma.io/docs/orm/prisma-client/observability-and-logging/logging#event-based-logging" rel="nofollow">logging events</a>! We also learned about a library called <a href="https://www.npmjs.com/package/chalk" rel="nofollow">chalk</a> to style the logging output. This can make slow queries stand out in my logs. Awesome!',X,g,ye='<a aria-hidden="true" tabindex="-1" href="#open-source"><span class="icon icon-link"></span></a><a href="#open-source" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Open source',Z,A,ge='I use a lot of open source, and one of the things I’ve been really excited about is the tech stack for <a href="/notes/svelte-shiki-twoslash">Beautifully render markdown code blocks in Svelte</a>. While I was working on my <a href="/notes/branded-types">Branded Types</a> presentation, I found a bug. A tool called “twoslash” runs my typescript snippets through the TS compiler to get extra metadata about the code and display it in the snippets. It also supports custom commands for things like user defined warnings and errors. I couldn’t get them to work, and I managed to debug it down to a problem with indentation. My editor auto-indents comments to line up with code, but twoslash only transforms custom commands that are not indented. I made a <a href="https://github.com/microsoft/TypeScript-Website/pull/3099" rel="nofollow">3 character PR to address this issue</a> and wrote a short essay explaining it.',Y,B,ve='There was another issue I had a while back where the behavior of TypeScript’s <a href="https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates" rel="nofollow">type predicates</a> and <a href="https://www.typescriptlang.org/docs/handbook/2/narrowing.html#assertion-functions" rel="nofollow">assertion functions</a> was unexpected. I <a href="https://github.com/microsoft/TypeScript/issues/57436" rel="nofollow">created an issue</a> about it. The issue was closed as “working as intended”, but I remain unconvinced that it is good and desirable behavior. In the interim, I’ve <a href="https://github.com/microsoft/TypeScript-Website/pull/3100" rel="nofollow">made a PR to update the TypeScript docs</a> to better convey the current behavior.';return{c(){n=i("p"),n.innerHTML=f,u=s(),c=i("img"),h=s(),m=i("p"),m.innerHTML=te,q=s(),v=i("p"),v.innerHTML=ae,$=s(),b=i("p"),b.innerHTML=oe,j=s(),w=i("h2"),w.innerHTML=ne,z=s(),k=i("p"),k.innerHTML=ie,W=s(),T=i("p"),T.textContent=le,O=s(),I=i("ol"),I.innerHTML=se,R=s(),M=i("p"),M.innerHTML=re,J=s(),_=i("p"),_.innerHTML=de,N=s(),x=i("p"),x.innerHTML=pe,U=s(),L=i("ol"),L.innerHTML=he,G=s(),H=i("p"),H.innerHTML=ce,E=s(),S=i("p"),S.textContent=ue,K=s(),C=i("ul"),C.innerHTML=me,Q=s(),y=i("h2"),y.innerHTML=fe,V=s(),P=i("p"),P.innerHTML=we,X=s(),g=i("h2"),g.innerHTML=ye,Z=s(),A=i("p"),A.innerHTML=ge,Y=s(),B=i("p"),B.innerHTML=ve,this.h()},l(e){n=l(e,"P",{"data-svelte-h":!0}),r(n)!=="svelte-tcqs17"&&(n.innerHTML=f),u=d(e),c=l(e,"IMG",{src:!0,alt:!0}),h=d(e),m=l(e,"P",{"data-svelte-h":!0}),r(m)!=="svelte-1cyqbbo"&&(m.innerHTML=te),q=d(e),v=l(e,"P",{"data-svelte-h":!0}),r(v)!=="svelte-1obfjgo"&&(v.innerHTML=ae),$=d(e),b=l(e,"P",{"data-svelte-h":!0}),r(b)!=="svelte-fy1fzs"&&(b.innerHTML=oe),j=d(e),w=l(e,"H2",{id:!0,"data-svelte-h":!0}),r(w)!=="svelte-hj60t8"&&(w.innerHTML=ne),z=d(e),k=l(e,"P",{"data-svelte-h":!0}),r(k)!=="svelte-odixel"&&(k.innerHTML=ie),W=d(e),T=l(e,"P",{"data-svelte-h":!0}),r(T)!=="svelte-1emz0lc"&&(T.textContent=le),O=d(e),I=l(e,"OL",{"data-svelte-h":!0}),r(I)!=="svelte-hemfcg"&&(I.innerHTML=se),R=d(e),M=l(e,"P",{"data-svelte-h":!0}),r(M)!=="svelte-14au3gx"&&(M.innerHTML=re),J=d(e),_=l(e,"P",{"data-svelte-h":!0}),r(_)!=="svelte-ieuimt"&&(_.innerHTML=de),N=d(e),x=l(e,"P",{"data-svelte-h":!0}),r(x)!=="svelte-15goo85"&&(x.innerHTML=pe),U=d(e),L=l(e,"OL",{"data-svelte-h":!0}),r(L)!=="svelte-1m2b6z7"&&(L.innerHTML=he),G=d(e),H=l(e,"P",{"data-svelte-h":!0}),r(H)!=="svelte-ilgjou"&&(H.innerHTML=ce),E=d(e),S=l(e,"P",{"data-svelte-h":!0}),r(S)!=="svelte-v5cgos"&&(S.textContent=ue),K=d(e),C=l(e,"UL",{"data-svelte-h":!0}),r(C)!=="svelte-1grvosz"&&(C.innerHTML=me),Q=d(e),y=l(e,"H2",{id:!0,"data-svelte-h":!0}),r(y)!=="svelte-tzupw4"&&(y.innerHTML=fe),V=d(e),P=l(e,"P",{"data-svelte-h":!0}),r(P)!=="svelte-94v969"&&(P.innerHTML=we),X=d(e),g=l(e,"H2",{id:!0,"data-svelte-h":!0}),r(g)!=="svelte-1kpwipn"&&(g.innerHTML=ye),Z=d(e),A=l(e,"P",{"data-svelte-h":!0}),r(A)!=="svelte-98zc17"&&(A.innerHTML=ge),Y=d(e),B=l(e,"P",{"data-svelte-h":!0}),r(B)!=="svelte-6gxojl"&&(B.innerHTML=ve),this.h()},h(){Me(c.src,p="https://img.allandeutsch.com/allandeutschcom-note-images/af829ed2cd26978869fef3a7e85ebaaa.jpeg")||F(c,"src",p),F(c,"alt","image"),F(w,"id","adding-interactive-code-to-allandeutschcom"),F(y,"id","epic-web-dev"),F(g,"id","open-source")},m(e,t){a(e,n,t),a(e,u,t),a(e,c,t),a(e,h,t),a(e,m,t),a(e,q,t),a(e,v,t),a(e,$,t),a(e,b,t),a(e,j,t),a(e,w,t),a(e,z,t),a(e,k,t),a(e,W,t),a(e,T,t),a(e,O,t),a(e,I,t),a(e,R,t),a(e,M,t),a(e,J,t),a(e,_,t),a(e,N,t),a(e,x,t),a(e,U,t),a(e,L,t),a(e,G,t),a(e,H,t),a(e,E,t),a(e,S,t),a(e,K,t),a(e,C,t),a(e,Q,t),a(e,y,t),a(e,V,t),a(e,P,t),a(e,X,t),a(e,g,t),a(e,Z,t),a(e,A,t),a(e,Y,t),a(e,B,t)},p:_e,d(e){e&&(o(n),o(u),o(c),o(h),o(m),o(q),o(v),o($),o(b),o(j),o(w),o(z),o(k),o(W),o(T),o(O),o(I),o(R),o(M),o(J),o(_),o(N),o(x),o(U),o(L),o(G),o(H),o(E),o(S),o(K),o(C),o(Q),o(y),o(V),o(P),o(X),o(g),o(Z),o(A),o(Y),o(B))}}}function $e(D){let n,f;const u=[D[0],Te];let c={$$slots:{default:[qe]},$$scope:{ctx:D}};for(let p=0;p<u.length;p+=1)c=ee(c,u[p]);return n=new Fe({props:c}),{c(){He(n.$$.fragment)},l(p){Se(n.$$.fragment,p)},m(p,h){Ce(n,p,h),f=!0},p(p,[h]){const m=h&1?De(u,[h&1&&ke(p[0]),h&0&&ke(Te)]):{};h&2&&(m.$$scope={dirty:h,ctx:p}),n.$set(m)},i(p){f||(Pe(n.$$.fragment,p),f=!0)},o(p){Ae(n.$$.fragment,p),f=!1},d(p){Be(n,p)}}}const Te={title:"devlog 5: back on stage!",description:"Back on stage, this time to present about TypeScript! I also made some PRs to TypeScript and added dynamic TS playground links.",slug:"devlog/5",publish:!0,lastmod:"2024-5-11",date:"2024-5-11",aliases:["devlog 5: back on stage!"],tags:["status/evergreen"],readTime:9,internalLinks:["/notes/branded-types","/notes/svelte-shiki-twoslash","/notes/make-example-code-interactive","/notes/dynamic-ts-playground-links","/notes/code-block-tsplay-demo-link"],flashcards:[]};function je(D,n,f){return D.$$set=u=>{f(0,n=ee(ee({},n),be(u)))},n=be(n),[n]}class Je extends xe{constructor(n){super(),Le(this,n,je,$e,Ie,{})}}export{Je as default,Te as metadata};
