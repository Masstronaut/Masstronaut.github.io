import{s as fe,C as E,a5 as ue,f as o,a as d,g as l,u as r,c as h,j,i as n,A as me,d as a}from"./scheduler.7131e7f1.js";import{S as we,i as ve,b as ye,d as be,m as ge,a as xe,t as Te,e as _e}from"./index.9e889c2d.js";import{g as ke,a as ce}from"./spread.8a54911c.js";import{M as Ie}from"./MDSveXNoteLayout.b999d29e.js";function He(P){let i,m='<a aria-hidden="true" tabindex="-1" href="#allandeutschcom"><span class="icon icon-link"></span></a><a href="#allandeutschcom" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Allandeutsch.com',p,u,s='<a aria-hidden="true" tabindex="-1" href="#improving-how-markdown-based-pages-are-loaded"><span class="icon icon-link"></span></a><a href="#improving-how-markdown-based-pages-are-loaded" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Improving how markdown-based pages are loaded',c,f,K='A design decision I made years ago has recently started to haunt me. The decision was to have every page from my notes served on the route <code>https://allandeutsch.com/notes/{slug}/</code>. For a long time this wasn’t an issue, but recently I started writing weekly <a href="https://allandeutsch.com/devlog/" rel="nofollow">dev logs</a> like the one you are reading now! Since my devlogs are a periodical publication, I wanted them to stand alone in a separate place - <code>/devlog/{id}</code>. That was incompatible with the existing approach to publishing where notes lived under <code>/notes/{slug}/</code>. For the first couple couple weeks I manually copied over the devlogs into my site repo and while that worked fine, it left things to be desired. I had to manually update all the links, and I ended up finding a variety of other workarounds were needed to use functionality I’d already built for notes. It was finally time to improve my publishing pipeline to support more configurable page routes!',D,b,X="Now I can set a note’s slug to a nested route, such as <code>devlog/6</code> (this page!) and it goes through the normal note publishing pipeline with all my shiny features and gets published on the right URL! I also cleaned up the server code for getting from the slug of a requested page to the markdown file with its content. What used to be a brittle and buggy process has been smooth and reliable since the change went live.  Before I was loading up all the notes when the server started. That caused me headaches in a number of ways:",$,g,G="<li>If I updated a note after launching the dev server, I had to restart the server to render the new content. ick!</li> <li>My CICD pipeline recently started to ran out of RAM eagerly loading all my notes. I switched to a more serial approach to loading which fixed this.</li>",A,x,Q='The new approach will reload notes on request/change, which has been a much nicer dev experience for me. This has been great as I’ve been playing with some more advanced <a href="https://shiki.style/packages/twoslash#rendererrich" rel="nofollow">twoslash</a> features, like in <a href="/notes/identity-functions#providing-type-hints-to-api-consumers">Identity functions &gt; Providing type hints to API consumers</a>, where I show intellisense completion suggestions.',F,T,Y="It took a couple days getting all my note routing changes up and running, but I’m thrilled I did. One giant leap towards open-sourcing the site code!",q,w,ee='<a aria-hidden="true" tabindex="-1" href="#flexbox-reference-sheet"><span class="icon icon-link"></span></a><a href="#flexbox-reference-sheet" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Flexbox reference sheet',J,_,te='James and I built our own versions of the <a href="https://flexbox.malven.co" rel="nofollow">malven flexbox reference</a>. I had fun making <a href="https://allandeutsch.com/projects/flex/" rel="nofollow">a Tailwind version</a> and it was refreshing to work on a small project that is done at the end of the day. It was also a great first project for James, who set up a new remix project, added Tailwind to it, and got a ton of practice in arranging boxes.',W,k,ne='A few years ago I started building my resume as a basic HTML web document and it’s been much better than a word doc. This week I moved it from a standalone project into my website, and now the web version of <a href="https://allandeutsch.com/resume/" rel="nofollow">my resume is on allandeutsch.com/resume</a>. I also updated the styles so it stays readable on mobile. Much easier to share a link to it now!',z,v,ae='<a aria-hidden="true" tabindex="-1" href="#total-typescript"><span class="icon icon-link"></span></a><a href="#total-typescript" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Total TypeScript',N,I,ie='This week I finished the unit on <a href="/notes/identity-functions">identity functions</a>. I find the way they are used to coerce the TypeScript compiler to infer more specific types is fascinating. The technique manifests in a variety of ways, and they are often behind the scenes of great TypeScript APIs.',O,H,se='I found <a href="/notes/total-typescript-notes#reverse-mapped-types">reverse mapped types</a> to be particularly fascinating.',R,y,oe='<a aria-hidden="true" tabindex="-1" href="#doc-duck"><span class="icon icon-link"></span></a><a href="#doc-duck" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Doc Duck',U,M,le="This week I found out that I wasn’t accepted to the PMF program with first round. While I was really excited about it and moving to SF for a few months, I slowly realized it was going to be pretty painful. I had something I <em>really</em> want to be in Seattle for every couple weeks for June through mid-July, which would’ve really detracted from my SF experience. Plus missing the Seattle Summer would’ve been a real bummer. I’ll set my sights on landing some customers on my own and shooting for an SF accelerator in Fall/Winter, which should line up well with when I need to extend my runway.",V,L,re="I also talked to my friend Vritant, who works on the VS Code education team. He made the excellent observation that Doc Duck would be very helpful for other types of web-based documents, not just <em>product</em> docs. He works on building an in-editor curriculum for teaching programming, and it would be helpful if students could send their feedback from right in the editor.",Z,C,de="Similarly, I think Doc Duck could be helpful for other courses. The web development courses I’ve done recently are all custom web software, which could be great candidates:",B,S,he='<li>Josh W Comeau’s <a href="">CSS for JS devs</a></li> <li>Kent C Dodd’s <a href="https://epicweb.dev" rel="nofollow">Epic Web Dev</a></li> <li>Matt Pocock’s <a href="https://www.totaltypescript.com/" rel="nofollow">Total TypeScript</a></li>';return{c(){i=o("h2"),i.innerHTML=m,p=d(),u=o("h3"),u.innerHTML=s,c=d(),f=o("p"),f.innerHTML=K,D=d(),b=o("p"),b.innerHTML=X,$=d(),g=o("ol"),g.innerHTML=G,A=d(),x=o("p"),x.innerHTML=Q,F=d(),T=o("p"),T.textContent=Y,q=d(),w=o("h3"),w.innerHTML=ee,J=d(),_=o("p"),_.innerHTML=te,W=d(),k=o("p"),k.innerHTML=ne,z=d(),v=o("h2"),v.innerHTML=ae,N=d(),I=o("p"),I.innerHTML=ie,O=d(),H=o("p"),H.innerHTML=se,R=d(),y=o("h2"),y.innerHTML=oe,U=d(),M=o("p"),M.innerHTML=le,V=d(),L=o("p"),L.innerHTML=re,Z=d(),C=o("p"),C.textContent=de,B=d(),S=o("ul"),S.innerHTML=he,this.h()},l(e){i=l(e,"H2",{id:!0,"data-svelte-h":!0}),r(i)!=="svelte-1bdscsw"&&(i.innerHTML=m),p=h(e),u=l(e,"H3",{id:!0,"data-svelte-h":!0}),r(u)!=="svelte-dl0qmp"&&(u.innerHTML=s),c=h(e),f=l(e,"P",{"data-svelte-h":!0}),r(f)!=="svelte-1gojoy0"&&(f.innerHTML=K),D=h(e),b=l(e,"P",{"data-svelte-h":!0}),r(b)!=="svelte-1od704r"&&(b.innerHTML=X),$=h(e),g=l(e,"OL",{"data-svelte-h":!0}),r(g)!=="svelte-14twctw"&&(g.innerHTML=G),A=h(e),x=l(e,"P",{"data-svelte-h":!0}),r(x)!=="svelte-1ezmckm"&&(x.innerHTML=Q),F=h(e),T=l(e,"P",{"data-svelte-h":!0}),r(T)!=="svelte-1iphfs7"&&(T.textContent=Y),q=h(e),w=l(e,"H3",{id:!0,"data-svelte-h":!0}),r(w)!=="svelte-j2hqsq"&&(w.innerHTML=ee),J=h(e),_=l(e,"P",{"data-svelte-h":!0}),r(_)!=="svelte-1pfvdrd"&&(_.innerHTML=te),W=h(e),k=l(e,"P",{"data-svelte-h":!0}),r(k)!=="svelte-gs0byk"&&(k.innerHTML=ne),z=h(e),v=l(e,"H2",{id:!0,"data-svelte-h":!0}),r(v)!=="svelte-1bwwahh"&&(v.innerHTML=ae),N=h(e),I=l(e,"P",{"data-svelte-h":!0}),r(I)!=="svelte-9f5k7b"&&(I.innerHTML=ie),O=h(e),H=l(e,"P",{"data-svelte-h":!0}),r(H)!=="svelte-1njo641"&&(H.innerHTML=se),R=h(e),y=l(e,"H2",{id:!0,"data-svelte-h":!0}),r(y)!=="svelte-12rebzx"&&(y.innerHTML=oe),U=h(e),M=l(e,"P",{"data-svelte-h":!0}),r(M)!=="svelte-6u5bk8"&&(M.innerHTML=le),V=h(e),L=l(e,"P",{"data-svelte-h":!0}),r(L)!=="svelte-u1ooib"&&(L.innerHTML=re),Z=h(e),C=l(e,"P",{"data-svelte-h":!0}),r(C)!=="svelte-ztmu4p"&&(C.textContent=de),B=h(e),S=l(e,"UL",{"data-svelte-h":!0}),r(S)!=="svelte-1m86m7b"&&(S.innerHTML=he),this.h()},h(){j(i,"id","allandeutschcom"),j(u,"id","improving-how-markdown-based-pages-are-loaded"),j(w,"id","flexbox-reference-sheet"),j(v,"id","total-typescript"),j(y,"id","doc-duck")},m(e,t){n(e,i,t),n(e,p,t),n(e,u,t),n(e,c,t),n(e,f,t),n(e,D,t),n(e,b,t),n(e,$,t),n(e,g,t),n(e,A,t),n(e,x,t),n(e,F,t),n(e,T,t),n(e,q,t),n(e,w,t),n(e,J,t),n(e,_,t),n(e,W,t),n(e,k,t),n(e,z,t),n(e,v,t),n(e,N,t),n(e,I,t),n(e,O,t),n(e,H,t),n(e,R,t),n(e,y,t),n(e,U,t),n(e,M,t),n(e,V,t),n(e,L,t),n(e,Z,t),n(e,C,t),n(e,B,t),n(e,S,t)},p:me,d(e){e&&(a(i),a(p),a(u),a(c),a(f),a(D),a(b),a($),a(g),a(A),a(x),a(F),a(T),a(q),a(w),a(J),a(_),a(W),a(k),a(z),a(v),a(N),a(I),a(O),a(H),a(R),a(y),a(U),a(M),a(V),a(L),a(Z),a(C),a(B),a(S))}}}function Me(P){let i,m;const p=[P[0],pe];let u={$$slots:{default:[He]},$$scope:{ctx:P}};for(let s=0;s<p.length;s+=1)u=E(u,p[s]);return i=new Ie({props:u}),{c(){ye(i.$$.fragment)},l(s){be(i.$$.fragment,s)},m(s,c){ge(i,s,c),m=!0},p(s,[c]){const f=c&1?ke(p,[c&1&&ce(s[0]),c&0&&ce(pe)]):{};c&2&&(f.$$scope={dirty:c,ctx:s}),i.$set(f)},i(s){m||(xe(i.$$.fragment,s),m=!0)},o(s){Te(i.$$.fragment,s),m=!1},d(s){_e(i,s)}}}const pe={title:"devlog 6: routing overhaul",description:"A major overhaul to routing on this site! Plus TS identity functions, reference sheets, and my resume!",slug:"devlog/6",publish:!0,lastmod:"2024-05-19T00:00:00.000Z",date:"2024-05-15T00:00:00.000Z",aliases:null,tags:["status/seedling"],readTime:7,internalLinks:["/notes/identity-functions#providing-type-hints-to-api-consumers","/notes/identity-functions","/notes/total-typescript-notes#reverse-mapped-types"],flashcards:[]};function Le(P,i,m){return P.$$set=p=>{m(0,i=E(E({},i),ue(p)))},i=ue(i),[i]}class De extends we{constructor(i){super(),ve(this,i,Le,Me,fe,{})}}export{De as default,pe as metadata};
