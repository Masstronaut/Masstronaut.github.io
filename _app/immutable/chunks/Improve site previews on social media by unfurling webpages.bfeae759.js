import{s as me,C as J,N as pe,f as r,a as l,I as Z,e as K,g as p,u as c,c as n,K as X,j as fe,i as t,A as De,d as a}from"./scheduler.e9e6880c.js";import{S as Be,i as Ce,b as ge,d as Ae,m as ve,a as we,t as be,e as _e}from"./index.ebf47752.js";import{g as xe,a as ce}from"./spread.8a54911c.js";import{M as Te}from"./MDSveXNoteLayout.b5fd5d5b.js";function Le(x){let i,u='<a aria-hidden="true" tabindex="-1" href="#use-opengraph-meta-tags-to-provide-page-previews-on-social-media"><span class="icon icon-link"></span></a><a href="#use-opengraph-meta-tags-to-provide-page-previews-on-social-media" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Use OpenGraph meta tags to provide page previews on social media',h,k,o="You built a website to share something valuable with people. If other people find it valuable, they will share it too, on:",d,y,Q="<li>Facebook</li> <li>Twitter</li> <li>Slack</li> <li>LinkedIn</li>",O,m,V="…and other platforms!",$,f,W='To maximize your click-through rates for social media shares, give social media users a great first impression. To help social media platforms present your content to their users, you need to help them <em>unfurl</em> your pages. This is done using 2 simple APIs: <a href="https://developers.facebook.com/docs/sharing/webmasters#markup" rel="nofollow">Facebook Open Graph HTML Markup</a> and <a href="https://developer.twitter.com/docs/twitter-for-websites/cards/overview/about-cards" rel="nofollow">Twitter Cards</a>.',N,D,ee="Most platforms use the Open Graph API. It has 5 properties you need to know about:",S,B,se="<li><code>og:type</code> specifies what type of content is the focus of a page. There are 6 options: <ul><li><code>website</code> - this is also the default option if no type is specified</li> <li><code>article</code></li> <li><code>profile</code></li> <li><code>video</code></li> <li><code>music</code></li> <li><code>book</code></li></ul></li> <li><code>og:url</code> specifies your website’s Canonical URL. Think of this as the address for your front door.</li> <li><code>og:title</code> is the title <em>page</em> title. This should be contextual and specific to each page. Think <em>article</em> title, not site title.</li> <li><code>og:description</code> is a brief description of the <em>page</em> content. Use it to help people make a quick decision about if they are interested in the content. It’s a great place for a hook.</li> <li><code>og:image</code> is used to specify a preview/thumbnail image for the page. This could be as simple as the header graphic for the page.</li>",q,C,te='I wrote this note while adding unfurling content to <a href="https://allandeutsch.com" rel="nofollow">allandeutsch.com</a>. Here’s the Open Graph code I added to the <code>&lt;head&gt;</code> of my homepage:',G,T,ke=`<pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#999999;--shiki-dark:#666666">&#x3C;</span><span style="color:#1E754F;--shiki-dark:#4D9375">meta</span><span style="color:#B07D48;--shiki-dark:#BD976A"> property</span><span style="color:#999999;--shiki-dark:#666666">=</span><span style="color:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="color:#B56959;--shiki-dark:#C98A7D">og:type</span><span style="color:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="color:#B07D48;--shiki-dark:#BD976A"> content</span><span style="color:#999999;--shiki-dark:#666666">=</span><span style="color:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="color:#B56959;--shiki-dark:#C98A7D">website</span><span style="color:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="color:#999999;--shiki-dark:#666666">/></span></span>
<span class="line"><span style="color:#999999;--shiki-dark:#666666">&#x3C;</span><span style="color:#1E754F;--shiki-dark:#4D9375">meta</span><span style="color:#B07D48;--shiki-dark:#BD976A"> property</span><span style="color:#999999;--shiki-dark:#666666">=</span><span style="color:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="color:#B56959;--shiki-dark:#C98A7D">og:url</span><span style="color:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="color:#B07D48;--shiki-dark:#BD976A"> content</span><span style="color:#999999;--shiki-dark:#666666">=</span><span style="color:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="color:#B56959;--shiki-dark:#C98A7D">https://allandeutsch.com</span><span style="color:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="color:#999999;--shiki-dark:#666666"> /></span></span>
<span class="line"><span style="color:#999999;--shiki-dark:#666666">&#x3C;</span><span style="color:#1E754F;--shiki-dark:#4D9375">meta</span><span style="color:#B07D48;--shiki-dark:#BD976A"> property</span><span style="color:#999999;--shiki-dark:#666666">=</span><span style="color:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="color:#B56959;--shiki-dark:#C98A7D">og:title</span><span style="color:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="color:#B07D48;--shiki-dark:#BD976A"> content</span><span style="color:#999999;--shiki-dark:#666666">=</span><span style="color:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="color:#B56959;--shiki-dark:#C98A7D">Allan Deutsch</span><span style="color:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="color:#999999;--shiki-dark:#666666"> /></span></span>
<span class="line"><span style="color:#999999;--shiki-dark:#666666">&#x3C;</span><span style="color:#1E754F;--shiki-dark:#4D9375">meta</span><span style="color:#B07D48;--shiki-dark:#BD976A"> property</span><span style="color:#999999;--shiki-dark:#666666">=</span><span style="color:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="color:#B56959;--shiki-dark:#C98A7D">og:description</span><span style="color:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="color:#B07D48;--shiki-dark:#BD976A"> content</span><span style="color:#999999;--shiki-dark:#666666">=</span><span style="color:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="color:#B56959;--shiki-dark:#C98A7D">Learning, thinking, and building in public. Notes on product, technology, and business.</span><span style="color:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="color:#999999;--shiki-dark:#666666"> /></span></span></code></pre>`,L,H,he=`<pre class="code-copy-target hidden">&lt;meta property="og:type" content="website"/&gt;
&lt;meta property="og:url" content="https://allandeutsch.com" /&gt;
&lt;meta property="og:title" content="Allan Deutsch" /&gt;
&lt;meta property="og:description" content="Learning, thinking, and building in public. Notes on product, technology, and business." /&gt;</pre>`,M,g,ae="The Twitter Cards API is pretty similar. <code>twitter:url</code>, <code>twitter:title</code>, <code>twitter:description</code>, and <code>twitter:image</code> serve the same purpose as their <code>og:</code> counterparts. Instead of a <code>type</code> property, Twitter uses <code>twitter:card</code> which specifies a card type. There are  four options:",j,A,ie="<li><code>summary</code> is used for most types of content, like blog posts, articles, websites, etc. It should provide a preview of the page content  prior to a click-through. Including an image is optional.</li> <li><code>summary_large_image</code> is similar to to <code>summary</code>, but with a focus on visual content.</li> <li><code>app</code> is used for driving conversions on a mobile app.</li> <li><code>player</code> is used to provide a media player for audio or video content.</li>",z,v,oe="Twitter has two other additional fields that are broadly applicable:",U,w,le="<li><code>twitter:site</code> is used for the twitter account associated with the site - for example a link to a YouTube video would use <code>@YouTube</code>.</li> <li><code>twitter:creator</code> is for the author/creator of the content on the page. This would be the YouTuber who made the video, or the author of a specific article or blog post.</li>",Y,b,ne='On <a href="https://allandeutsch.com" rel="nofollow">allandeutsch.com</a> I use this code in my <code>&lt;head&gt;</code> tag:',R,I,ye=`<pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee" tabindex="0"><code><span class="line"><span style="color:#999999;--shiki-dark:#666666">&#x3C;</span><span style="color:#1E754F;--shiki-dark:#4D9375">meta</span><span style="color:#B07D48;--shiki-dark:#BD976A"> property</span><span style="color:#999999;--shiki-dark:#666666">=</span><span style="color:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="color:#B56959;--shiki-dark:#C98A7D">twitter:card</span><span style="color:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="color:#B07D48;--shiki-dark:#BD976A"> content</span><span style="color:#999999;--shiki-dark:#666666">=</span><span style="color:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="color:#B56959;--shiki-dark:#C98A7D">summary</span><span style="color:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="color:#999999;--shiki-dark:#666666">/></span></span>
<span class="line"><span style="color:#999999;--shiki-dark:#666666">&#x3C;</span><span style="color:#1E754F;--shiki-dark:#4D9375">meta</span><span style="color:#B07D48;--shiki-dark:#BD976A"> property</span><span style="color:#999999;--shiki-dark:#666666">=</span><span style="color:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="color:#B56959;--shiki-dark:#C98A7D">twitter:url</span><span style="color:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="color:#B07D48;--shiki-dark:#BD976A"> content</span><span style="color:#999999;--shiki-dark:#666666">=</span><span style="color:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="color:#B56959;--shiki-dark:#C98A7D">https://allandeutsch.com</span><span style="color:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="color:#999999;--shiki-dark:#666666"> /></span></span>
<span class="line"><span style="color:#999999;--shiki-dark:#666666">&#x3C;</span><span style="color:#1E754F;--shiki-dark:#4D9375">meta</span><span style="color:#B07D48;--shiki-dark:#BD976A"> property</span><span style="color:#999999;--shiki-dark:#666666">=</span><span style="color:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="color:#B56959;--shiki-dark:#C98A7D">twitter:title</span><span style="color:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="color:#B07D48;--shiki-dark:#BD976A"> content</span><span style="color:#999999;--shiki-dark:#666666">=</span><span style="color:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="color:#B56959;--shiki-dark:#C98A7D">Allan Deutsch</span><span style="color:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="color:#999999;--shiki-dark:#666666"> /></span></span>
<span class="line"><span style="color:#999999;--shiki-dark:#666666">&#x3C;</span><span style="color:#1E754F;--shiki-dark:#4D9375">meta</span><span style="color:#B07D48;--shiki-dark:#BD976A"> property</span><span style="color:#999999;--shiki-dark:#666666">=</span><span style="color:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="color:#B56959;--shiki-dark:#C98A7D">twitter:description</span><span style="color:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="color:#B07D48;--shiki-dark:#BD976A"> content</span><span style="color:#999999;--shiki-dark:#666666">=</span><span style="color:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="color:#B56959;--shiki-dark:#C98A7D">Learning, thinking, and building in public. Notes on product, technology, and business.</span><span style="color:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="color:#999999;--shiki-dark:#666666"> /></span></span>
<span class="line"><span style="color:#999999;--shiki-dark:#666666">&#x3C;</span><span style="color:#1E754F;--shiki-dark:#4D9375">meta</span><span style="color:#B07D48;--shiki-dark:#BD976A"> property</span><span style="color:#999999;--shiki-dark:#666666">=</span><span style="color:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="color:#B56959;--shiki-dark:#C98A7D">twitter:site</span><span style="color:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="color:#B07D48;--shiki-dark:#BD976A"> content</span><span style="color:#999999;--shiki-dark:#666666">=</span><span style="color:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="color:#B56959;--shiki-dark:#C98A7D">@AllanDeutsch</span><span style="color:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="color:#999999;--shiki-dark:#666666"> /></span></span>
<span class="line"><span style="color:#999999;--shiki-dark:#666666">&#x3C;</span><span style="color:#1E754F;--shiki-dark:#4D9375">meta</span><span style="color:#B07D48;--shiki-dark:#BD976A"> property</span><span style="color:#999999;--shiki-dark:#666666">=</span><span style="color:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="color:#B56959;--shiki-dark:#C98A7D">twitter:creator</span><span style="color:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="color:#B07D48;--shiki-dark:#BD976A"> content</span><span style="color:#999999;--shiki-dark:#666666">=</span><span style="color:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="color:#B56959;--shiki-dark:#C98A7D">@AllanDeutsch</span><span style="color:#B5695999;--shiki-dark:#C98A7D99">"</span><span style="color:#999999;--shiki-dark:#666666"> /></span></span></code></pre>`,P,F,ue=`<pre class="code-copy-target hidden">&lt;meta property="twitter:card" content="summary"/&gt;
&lt;meta property="twitter:url" content="https://allandeutsch.com" /&gt;
&lt;meta property="twitter:title" content="Allan Deutsch" /&gt;
&lt;meta property="twitter:description" content="Learning, thinking, and building in public. Notes on product, technology, and business." /&gt;
&lt;meta property="twitter:site" content="@AllanDeutsch" /&gt;
&lt;meta property="twitter:creator" content="@AllanDeutsch" /&gt;</pre>`,E,_,re="Setting up Open Graph and Twitter Cards for a site improves the experience for existing users and helps reach new ones.";return{c(){i=r("h1"),i.innerHTML=u,h=l(),k=r("p"),k.textContent=o,d=l(),y=r("ul"),y.innerHTML=Q,O=l(),m=r("p"),m.textContent=V,$=l(),f=r("p"),f.innerHTML=W,N=l(),D=r("p"),D.textContent=ee,S=l(),B=r("ol"),B.innerHTML=se,q=l(),C=r("p"),C.innerHTML=te,G=l(),T=new Z(!1),L=K(),H=new Z(!1),M=l(),g=r("p"),g.innerHTML=ae,j=l(),A=r("ol"),A.innerHTML=ie,z=l(),v=r("p"),v.textContent=oe,U=l(),w=r("ol"),w.innerHTML=le,Y=l(),b=r("p"),b.innerHTML=ne,R=l(),I=new Z(!1),P=K(),F=new Z(!1),E=l(),_=r("p"),_.textContent=re,this.h()},l(e){i=p(e,"H1",{id:!0,["data-svelte-h"]:!0}),c(i)!=="svelte-nr780w"&&(i.innerHTML=u),h=n(e),k=p(e,"P",{["data-svelte-h"]:!0}),c(k)!=="svelte-cuzckp"&&(k.textContent=o),d=n(e),y=p(e,"UL",{["data-svelte-h"]:!0}),c(y)!=="svelte-yv7ynn"&&(y.innerHTML=Q),O=n(e),m=p(e,"P",{["data-svelte-h"]:!0}),c(m)!=="svelte-11t02gg"&&(m.textContent=V),$=n(e),f=p(e,"P",{["data-svelte-h"]:!0}),c(f)!=="svelte-19ej0ck"&&(f.innerHTML=W),N=n(e),D=p(e,"P",{["data-svelte-h"]:!0}),c(D)!=="svelte-ba94bs"&&(D.textContent=ee),S=n(e),B=p(e,"OL",{["data-svelte-h"]:!0}),c(B)!=="svelte-zqkk4o"&&(B.innerHTML=se),q=n(e),C=p(e,"P",{["data-svelte-h"]:!0}),c(C)!=="svelte-1pvzq2e"&&(C.innerHTML=te),G=n(e),T=X(e,!1),L=K(),H=X(e,!1),M=n(e),g=p(e,"P",{["data-svelte-h"]:!0}),c(g)!=="svelte-3ga1iy"&&(g.innerHTML=ae),j=n(e),A=p(e,"OL",{["data-svelte-h"]:!0}),c(A)!=="svelte-1df5sk0"&&(A.innerHTML=ie),z=n(e),v=p(e,"P",{["data-svelte-h"]:!0}),c(v)!=="svelte-1u8nowa"&&(v.textContent=oe),U=n(e),w=p(e,"OL",{["data-svelte-h"]:!0}),c(w)!=="svelte-1d167v8"&&(w.innerHTML=le),Y=n(e),b=p(e,"P",{["data-svelte-h"]:!0}),c(b)!=="svelte-lmq6dj"&&(b.innerHTML=ne),R=n(e),I=X(e,!1),P=K(),F=X(e,!1),E=n(e),_=p(e,"P",{["data-svelte-h"]:!0}),c(_)!=="svelte-619mfc"&&(_.textContent=re),this.h()},h(){fe(i,"id","use-opengraph-meta-tags-to-provide-page-previews-on-social-media"),T.a=L,H.a=M,I.a=P,F.a=E},m(e,s){t(e,i,s),t(e,h,s),t(e,k,s),t(e,d,s),t(e,y,s),t(e,O,s),t(e,m,s),t(e,$,s),t(e,f,s),t(e,N,s),t(e,D,s),t(e,S,s),t(e,B,s),t(e,q,s),t(e,C,s),t(e,G,s),T.m(ke,e,s),t(e,L,s),H.m(he,e,s),t(e,M,s),t(e,g,s),t(e,j,s),t(e,A,s),t(e,z,s),t(e,v,s),t(e,U,s),t(e,w,s),t(e,Y,s),t(e,b,s),t(e,R,s),I.m(ye,e,s),t(e,P,s),F.m(ue,e,s),t(e,E,s),t(e,_,s)},p:De,d(e){e&&(a(i),a(h),a(k),a(d),a(y),a(O),a(m),a($),a(f),a(N),a(D),a(S),a(B),a(q),a(C),a(G),a(L),T.d(),H.d(),a(M),a(g),a(j),a(A),a(z),a(v),a(U),a(w),a(Y),a(b),a(R),a(P),I.d(),F.d(),a(E),a(_))}}}function He(x){let i,u;const h=[x[0],de];let k={$$slots:{default:[Le]},$$scope:{ctx:x}};for(let o=0;o<h.length;o+=1)k=J(k,h[o]);return i=new Te({props:k}),{c(){ge(i.$$.fragment)},l(o){Ae(i.$$.fragment,o)},m(o,d){ve(i,o,d),u=!0},p(o,[d]){const y=d&1?xe(h,[d&1&&ce(o[0]),d&0&&ce(de)]):{};d&2&&(y.$$scope={dirty:d,ctx:o}),i.$set(y)},i(o){u||(we(i.$$.fragment,o),u=!0)},o(o){be(i.$$.fragment,o),u=!1},d(o){_e(i,o)}}}const de={title:"Improve site previews on social media by unfurling webpages",description:"Some webpages have nice previews when shared on social media. These can be specified in the page HTML. Previews make the site user-friendly before users even visit it!",slug:"site-unfurling",publish:!0,lastmod:"2021-10-31T00:00:00.000Z",date:"2021-10-31T00:00:00.000Z",aliases:["site unfurling","Improve site previews on social media by unfurling webpages"],tags:["status/seedling","taxonomy/reference"],timeToRead:3,internalLinks:[],flashcards:[]};function Me(x,i,u){return x.$$set=h=>{u(0,i=J(J({},i),pe(h)))},i=pe(i),[i]}class Oe extends Be{constructor(i){super(),Ce(this,i,Me,He,me,{})}}export{Oe as default,de as metadata};
