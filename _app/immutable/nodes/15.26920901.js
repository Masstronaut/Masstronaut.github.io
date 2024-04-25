import{s as De,C as re,N as je,f as a,a as o,g as s,u as r,c,j as m,M as ce,i,A as Fe,d as n}from"../chunks/scheduler.e9e6880c.js";import{S as Ae,i as Ge,b as ze,d as Ne,m as Ue,a as We,t as Be,e as Je}from"../chunks/index.ebf47752.js";import{g as Oe,a as Re}from"../chunks/spread.8a54911c.js";import{M as Ee}from"../chunks/MDSveXNoteLayout.002ec17f.js";function Xe(G){let l,v='<a aria-hidden="true" tabindex="-1" href="#epic-web-dev-course"><span class="icon icon-link"></span></a><a href="#epic-web-dev-course" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Epic web dev course',p,f,u="I spent Monday and Tuesday working on epicweb.dev with James. We finished the module on professional web forms! I got some inspiration for open source projects to build in the svelte ecosystem - honeypot & CSRF tools.",d,h,ue='<a aria-hidden="true" tabindex="-1" href="#honeypots"><span class="icon icon-link"></span></a><a href="#honeypots" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Honeypots',z,C,de="Malicious bots fill out forms for a variety of reasons, such as:",N,w,me="<li>Generate email spam using your mail server</li> <li>Post links to their own site</li> <li>Discover vulnerabilities to exploit later</li>",U,g,fe="A common way of dealing with this is using a technique called a “honeypot” to identify bot-submitted forms.",W,b,he='<a aria-hidden="true" tabindex="-1" href="#csrf-protection"><span class="icon icon-link"></span></a><a href="#csrf-protection" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>CSRF protection',B,y,pe="Cross-site request forgery is a type of attack where hackers trick users into performing an action like clicking a button on one site, which will cause them to submit a request to another site.",J,T,ve="The main way to protect from CSRF attacks is by setting a csrf cookie that contains a token for validation. The cookie gets set by the server as <code>httpOnly</code> so that malicious client-side JS can’t read its value. The server then also injects the CSRF token into any forms on the page that need to be protected. When the client submits the form, the request will contain the form data with the CSRF token as well as the request headers with the CSRF cookie. If the values in the cookie and token don’t match, the server disregards the request. Since the tokens don’t match, the server can’t verify that the request came from a user interacting with the page as intended.",O,H,be="Before setting a CSRF cookie, check the request to see if one already exists. If it’s set on each request, it would break old tabs for users who have multiple tabs of the site open.",E,x,xe='<a aria-hidden="true" tabindex="-1" href="#allandeutschcom"><span class="icon icon-link"></span></a><a href="#allandeutschcom" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Allandeutsch.com',X,M,ke="I added filename support to my code blocks! This might seem insignificant, but there are certain cases where the filename is very important. It’s very common in web development for libraries to have naming conventions. Sveltekit for example requires page components to be named <code>+page.svelte</code>, so knowing that is the filename conveys important meaning about the file. Some other examples:",K,L,_e='<li>The eslint config file must be named one of <a href="https://eslint.org/docs/latest/use/configure/configuration-files#configuration-file" rel="nofollow">a few options</a> such as <code>eslint.config.js</code></li> <li>Configuring svelte must be done in <code>svelte.config.js</code></li> <li>a <code>.gitignore</code> file tells git which directories and files should not be tracked</li>',Q,I,Ce="I updated a couple notes to showcase the codeblock file names:",V,S,we="<li>[[Beautifully render markdown code blocks in Svelte]]</li> <li>[[Linting and formatting a svelte typescript project]]</li>",Y,P,ge="Here’s an example of how it looks in light mode:",Z,q,ye,ee,j,Te="And dark mode:",te,R,He,ie,$,Me="On a related note, the light and dark mode versions are not rendered as code blocks, but as images! This is a new feature in my publishing pipeline, and I’m excited to start adding more images around here.",ne,D,Le='I use an obsidian plugin called <a href="https://github.com/jvsteiner/s3-image-uploader" rel="nofollow">s3-image-uploader</a> to automatically upload images I paste or drag into obsidian (the tool I use for writing notes) and insert the image embedding link into the markdown for my note. I use a cloudflare R2 bucket which is s3-compatible to host the images. The bucket contents are exposed on img.allandeutsch.com. Now when I publish a note with an embedded image, the image is linked on the internet and available on my site to viewers like you!',le,k,Ie='<a aria-hidden="true" tabindex="-1" href="#doc-duck"><span class="icon icon-link"></span></a><a href="#doc-duck" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Doc Duck',ae,_,Se='<a aria-hidden="true" tabindex="-1" href="#feedback-context-links"><span class="icon icon-link"></span></a><a href="#feedback-context-links" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Feedback context links',se,F,Pe="Doc Duck lets developers provide feedback on a specific <em>selection</em> of a document. When a Doc Duck customer is viewing that feedback, it’s helpful to see the selection in context <em>in the document</em>. So I did that:",oe,A,qe;return{c(){l=a("h2"),l.innerHTML=v,p=o(),f=a("p"),f.textContent=u,d=o(),h=a("h3"),h.innerHTML=ue,z=o(),C=a("p"),C.textContent=de,N=o(),w=a("ul"),w.innerHTML=me,U=o(),g=a("p"),g.textContent=fe,W=o(),b=a("h3"),b.innerHTML=he,B=o(),y=a("p"),y.textContent=pe,J=o(),T=a("p"),T.innerHTML=ve,O=o(),H=a("p"),H.textContent=be,E=o(),x=a("h2"),x.innerHTML=xe,X=o(),M=a("p"),M.innerHTML=ke,K=o(),L=a("ul"),L.innerHTML=_e,Q=o(),I=a("p"),I.textContent=Ce,V=o(),S=a("ul"),S.innerHTML=we,Y=o(),P=a("p"),P.textContent=ge,Z=o(),q=a("img"),ee=o(),j=a("p"),j.textContent=Te,te=o(),R=a("img"),ie=o(),$=a("p"),$.textContent=Me,ne=o(),D=a("p"),D.innerHTML=Le,le=o(),k=a("h2"),k.innerHTML=Ie,ae=o(),_=a("h3"),_.innerHTML=Se,se=o(),F=a("p"),F.innerHTML=Pe,oe=o(),A=a("img"),this.h()},l(e){l=s(e,"H2",{id:!0,["data-svelte-h"]:!0}),r(l)!=="svelte-1vakwq3"&&(l.innerHTML=v),p=c(e),f=s(e,"P",{["data-svelte-h"]:!0}),r(f)!=="svelte-1u88jh1"&&(f.textContent=u),d=c(e),h=s(e,"H3",{id:!0,["data-svelte-h"]:!0}),r(h)!=="svelte-1o2ivok"&&(h.innerHTML=ue),z=c(e),C=s(e,"P",{["data-svelte-h"]:!0}),r(C)!=="svelte-1gimx49"&&(C.textContent=de),N=c(e),w=s(e,"UL",{["data-svelte-h"]:!0}),r(w)!=="svelte-tiou9w"&&(w.innerHTML=me),U=c(e),g=s(e,"P",{["data-svelte-h"]:!0}),r(g)!=="svelte-12maith"&&(g.textContent=fe),W=c(e),b=s(e,"H3",{id:!0,["data-svelte-h"]:!0}),r(b)!=="svelte-16s7nt7"&&(b.innerHTML=he),B=c(e),y=s(e,"P",{["data-svelte-h"]:!0}),r(y)!=="svelte-c3xuxq"&&(y.textContent=pe),J=c(e),T=s(e,"P",{["data-svelte-h"]:!0}),r(T)!=="svelte-lrcpfj"&&(T.innerHTML=ve),O=c(e),H=s(e,"P",{["data-svelte-h"]:!0}),r(H)!=="svelte-1ivggtk"&&(H.textContent=be),E=c(e),x=s(e,"H2",{id:!0,["data-svelte-h"]:!0}),r(x)!=="svelte-1bdscsw"&&(x.innerHTML=xe),X=c(e),M=s(e,"P",{["data-svelte-h"]:!0}),r(M)!=="svelte-a4y18o"&&(M.innerHTML=ke),K=c(e),L=s(e,"UL",{["data-svelte-h"]:!0}),r(L)!=="svelte-17hmzfg"&&(L.innerHTML=_e),Q=c(e),I=s(e,"P",{["data-svelte-h"]:!0}),r(I)!=="svelte-uolr4d"&&(I.textContent=Ce),V=c(e),S=s(e,"UL",{["data-svelte-h"]:!0}),r(S)!=="svelte-3yy06z"&&(S.innerHTML=we),Y=c(e),P=s(e,"P",{["data-svelte-h"]:!0}),r(P)!=="svelte-4s62bj"&&(P.textContent=ge),Z=c(e),q=s(e,"IMG",{src:!0,alt:!0}),ee=c(e),j=s(e,"P",{["data-svelte-h"]:!0}),r(j)!=="svelte-yr2ly8"&&(j.textContent=Te),te=c(e),R=s(e,"IMG",{src:!0,alt:!0}),ie=c(e),$=s(e,"P",{["data-svelte-h"]:!0}),r($)!=="svelte-17yn54n"&&($.textContent=Me),ne=c(e),D=s(e,"P",{["data-svelte-h"]:!0}),r(D)!=="svelte-t8tpwr"&&(D.innerHTML=Le),le=c(e),k=s(e,"H2",{id:!0,["data-svelte-h"]:!0}),r(k)!=="svelte-12rebzx"&&(k.innerHTML=Ie),ae=c(e),_=s(e,"H3",{id:!0,["data-svelte-h"]:!0}),r(_)!=="svelte-1ibwufy"&&(_.innerHTML=Se),se=c(e),F=s(e,"P",{["data-svelte-h"]:!0}),r(F)!=="svelte-hdn10i"&&(F.innerHTML=Pe),oe=c(e),A=s(e,"IMG",{src:!0,alt:!0}),this.h()},h(){m(l,"id","epic-web-dev-course"),m(h,"id","honeypots"),m(b,"id","csrf-protection"),m(x,"id","allandeutschcom"),ce(q.src,ye="https://img.allandeutsch.com/allandeutschcom-note-images/79b94f9fcf9df49c037b6920bbfba95e.png")||m(q,"src",ye),m(q,"alt","image"),ce(R.src,He="https://img.allandeutsch.com/allandeutschcom-note-images/405bfdcf0bbab7a0a8034d1a416b0f09.png")||m(R,"src",He),m(R,"alt","image"),m(k,"id","doc-duck"),m(_,"id","feedback-context-links"),ce(A.src,qe="https://img.allandeutsch.com/allandeutschcom-note-images/922324c6c65793f85a6e6911f95dceb6.webp")||m(A,"src",qe),m(A,"alt","image")},m(e,t){i(e,l,t),i(e,p,t),i(e,f,t),i(e,d,t),i(e,h,t),i(e,z,t),i(e,C,t),i(e,N,t),i(e,w,t),i(e,U,t),i(e,g,t),i(e,W,t),i(e,b,t),i(e,B,t),i(e,y,t),i(e,J,t),i(e,T,t),i(e,O,t),i(e,H,t),i(e,E,t),i(e,x,t),i(e,X,t),i(e,M,t),i(e,K,t),i(e,L,t),i(e,Q,t),i(e,I,t),i(e,V,t),i(e,S,t),i(e,Y,t),i(e,P,t),i(e,Z,t),i(e,q,t),i(e,ee,t),i(e,j,t),i(e,te,t),i(e,R,t),i(e,ie,t),i(e,$,t),i(e,ne,t),i(e,D,t),i(e,le,t),i(e,k,t),i(e,ae,t),i(e,_,t),i(e,se,t),i(e,F,t),i(e,oe,t),i(e,A,t)},p:Fe,d(e){e&&(n(l),n(p),n(f),n(d),n(h),n(z),n(C),n(N),n(w),n(U),n(g),n(W),n(b),n(B),n(y),n(J),n(T),n(O),n(H),n(E),n(x),n(X),n(M),n(K),n(L),n(Q),n(I),n(V),n(S),n(Y),n(P),n(Z),n(q),n(ee),n(j),n(te),n(R),n(ie),n($),n(ne),n(D),n(le),n(k),n(ae),n(_),n(se),n(F),n(oe),n(A))}}}function Ke(G){let l,v;const p=[G[0],$e];let f={$$slots:{default:[Xe]},$$scope:{ctx:G}};for(let u=0;u<p.length;u+=1)f=re(f,p[u]);return l=new Ee({props:f}),{c(){ze(l.$$.fragment)},l(u){Ne(l.$$.fragment,u)},m(u,d){Ue(l,u,d),v=!0},p(u,[d]){const h=d&1?Oe(p,[d&1&&Re(u[0]),d&0&&Re($e)]):{};d&2&&(h.$$scope={dirty:d,ctx:u}),l.$set(h)},i(u){v||(We(l.$$.fragment,u),v=!0)},o(u){Be(l.$$.fragment,u),v=!1},d(u){Je(l,u)}}}const $e={title:"devlog 2",timeToRead:4,internalLinks:[],flashcards:[]};function Qe(G,l,v){return G.$$set=p=>{v(0,l=re(re({},l),je(p)))},l=je(l),[l]}class tt extends Ae{constructor(l){super(),Ge(this,l,Qe,Ke,De,{})}}export{tt as component};
