import{s as me,C as J,a5 as pe,f as r,a as l,I as K,e as X,g as p,u as c,c as n,K as B,j as Ee,i as s,A as Ce,d as a}from"./scheduler.73a07135.js";import{S as fe,i as ge,b as ve,d as we,m as be,a as _e,t as Fe,e as xe}from"./index.ba10b74b.js";import{g as Te,a as ce}from"./spread.8a54911c.js";import{M as De}from"./MDSveXNoteLayout.fa60ba14.js";function Le(T){let i,y='<a aria-hidden="true" tabindex="-1" href="#use-opengraph-meta-tags-to-provide-page-previews-on-social-media"><span class="icon icon-link"></span></a><a href="#use-opengraph-meta-tags-to-provide-page-previews-on-social-media" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Use OpenGraph meta tags to provide page previews on social media',k,h,o="You built a website to share something valuable with people. If other people find it valuable, they will share it too, on:",d,u,Q="<li>Facebook</li> <li>Twitter</li> <li>Slack</li> <li>LinkedIn</li>",$,m,V="…and other platforms!",S,E,W='To maximize your click-through rates for social media shares, give social media users a great first impression. To help social media platforms present your content to their users, you need to help them <em>unfurl</em> your pages. This is done using 2 simple APIs: <a href="https://developers.facebook.com/docs/sharing/webmasters#markup" rel="nofollow">Facebook Open Graph HTML Markup</a> and <a href="https://developer.twitter.com/docs/twitter-for-websites/cards/overview/about-cards" rel="nofollow">Twitter Cards</a>.',q,C,ee="Most platforms use the Open Graph API. It has 5 properties you need to know about:",G,f,te="<li><code>og:type</code> specifies what type of content is the focus of a page. There are 6 options: <ul><li><code>website</code> - this is also the default option if no type is specified</li> <li><code>article</code></li> <li><code>profile</code></li> <li><code>video</code></li> <li><code>music</code></li> <li><code>book</code></li></ul></li> <li><code>og:url</code> specifies your website’s Canonical URL. Think of this as the address for your front door.</li> <li><code>og:title</code> is the title <em>page</em> title. This should be contextual and specific to each page. Think <em>article</em> title, not site title.</li> <li><code>og:description</code> is a brief description of the <em>page</em> content. Use it to help people make a quick decision about if they are interested in the content. It’s a great place for a hook.</li> <li><code>og:image</code> is used to specify a preview/thumbnail image for the page. This could be as simple as the header graphic for the page.</li>",N,g,se='I wrote this note while adding unfurling content to <a href="https://allandeutsch.com" rel="nofollow">allandeutsch.com</a>. Here’s the Open Graph code I added to the <code>&lt;head&gt;</code> of my homepage:',j,D,he=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#808080">&#x3C;</span><span style="color:#22863A;--shiki-dark:#569CD6">meta</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> property</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"og:type"</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> content</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"website"</span><span style="color:#24292E;--shiki-dark:#808080">/></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">&#x3C;</span><span style="color:#22863A;--shiki-dark:#569CD6">meta</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> property</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"og:url"</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> content</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"https://allandeutsch.com"</span><span style="color:#24292E;--shiki-dark:#808080"> /></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">&#x3C;</span><span style="color:#22863A;--shiki-dark:#569CD6">meta</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> property</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"og:title"</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> content</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"Allan Deutsch"</span><span style="color:#24292E;--shiki-dark:#808080"> /></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">&#x3C;</span><span style="color:#22863A;--shiki-dark:#569CD6">meta</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> property</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"og:description"</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> content</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"Learning, thinking, and building in public. Notes on product, technology, and business."</span><span style="color:#24292E;--shiki-dark:#808080"> /></span></span></code></pre>`,L,H,ke=`<pre class="code-copy-target hidden">&lt;meta property="og:type" content="website"/&gt;
&lt;meta property="og:url" content="https://allandeutsch.com" /&gt;
&lt;meta property="og:title" content="Allan Deutsch" /&gt;
&lt;meta property="og:description" content="Learning, thinking, and building in public. Notes on product, technology, and business." /&gt;</pre>`,M,v,ae="The Twitter Cards API is pretty similar. <code>twitter:url</code>, <code>twitter:title</code>, <code>twitter:description</code>, and <code>twitter:image</code> serve the same purpose as their <code>og:</code> counterparts. Instead of a <code>type</code> property, Twitter uses <code>twitter:card</code> which specifies a card type. There are  four options:",z,w,ie="<li><code>summary</code> is used for most types of content, like blog posts, articles, websites, etc. It should provide a preview of the page content  prior to a click-through. Including an image is optional.</li> <li><code>summary_large_image</code> is similar to to <code>summary</code>, but with a focus on visual content.</li> <li><code>app</code> is used for driving conversions on a mobile app.</li> <li><code>player</code> is used to provide a media player for audio or video content.</li>",U,b,oe="Twitter has two other additional fields that are broadly applicable:",Y,_,le="<li><code>twitter:site</code> is used for the twitter account associated with the site - for example a link to a YouTube video would use <code>@YouTube</code>.</li> <li><code>twitter:creator</code> is for the author/creator of the content on the page. This would be the YouTuber who made the video, or the author of a specific article or blog post.</li>",R,F,ne='On <a href="https://allandeutsch.com" rel="nofollow">allandeutsch.com</a> I use this code in my <code>&lt;head&gt;</code> tag:',Z,A,ue=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#808080">&#x3C;</span><span style="color:#22863A;--shiki-dark:#569CD6">meta</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> property</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"twitter:card"</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> content</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"summary"</span><span style="color:#24292E;--shiki-dark:#808080">/></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">&#x3C;</span><span style="color:#22863A;--shiki-dark:#569CD6">meta</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> property</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"twitter:url"</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> content</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"https://allandeutsch.com"</span><span style="color:#24292E;--shiki-dark:#808080"> /></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">&#x3C;</span><span style="color:#22863A;--shiki-dark:#569CD6">meta</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> property</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"twitter:title"</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> content</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"Allan Deutsch"</span><span style="color:#24292E;--shiki-dark:#808080"> /></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">&#x3C;</span><span style="color:#22863A;--shiki-dark:#569CD6">meta</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> property</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"twitter:description"</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> content</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"Learning, thinking, and building in public. Notes on product, technology, and business."</span><span style="color:#24292E;--shiki-dark:#808080"> /></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">&#x3C;</span><span style="color:#22863A;--shiki-dark:#569CD6">meta</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> property</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"twitter:site"</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> content</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"@AllanDeutsch"</span><span style="color:#24292E;--shiki-dark:#808080"> /></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">&#x3C;</span><span style="color:#22863A;--shiki-dark:#569CD6">meta</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> property</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"twitter:creator"</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> content</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"@AllanDeutsch"</span><span style="color:#24292E;--shiki-dark:#808080"> /></span></span></code></pre>`,I,P,ye=`<pre class="code-copy-target hidden">&lt;meta property="twitter:card" content="summary"/&gt;
&lt;meta property="twitter:url" content="https://allandeutsch.com" /&gt;
&lt;meta property="twitter:title" content="Allan Deutsch" /&gt;
&lt;meta property="twitter:description" content="Learning, thinking, and building in public. Notes on product, technology, and business." /&gt;
&lt;meta property="twitter:site" content="@AllanDeutsch" /&gt;
&lt;meta property="twitter:creator" content="@AllanDeutsch" /&gt;</pre>`,O,x,re="Setting up Open Graph and Twitter Cards for a site improves the experience for existing users and helps reach new ones.";return{c(){i=r("h1"),i.innerHTML=y,k=l(),h=r("p"),h.textContent=o,d=l(),u=r("ul"),u.innerHTML=Q,$=l(),m=r("p"),m.textContent=V,S=l(),E=r("p"),E.innerHTML=W,q=l(),C=r("p"),C.textContent=ee,G=l(),f=r("ol"),f.innerHTML=te,N=l(),g=r("p"),g.innerHTML=se,j=l(),D=new K(!1),L=X(),H=new K(!1),M=l(),v=r("p"),v.innerHTML=ae,z=l(),w=r("ol"),w.innerHTML=ie,U=l(),b=r("p"),b.textContent=oe,Y=l(),_=r("ol"),_.innerHTML=le,R=l(),F=r("p"),F.innerHTML=ne,Z=l(),A=new K(!1),I=X(),P=new K(!1),O=l(),x=r("p"),x.textContent=re,this.h()},l(e){i=p(e,"H1",{id:!0,["data-svelte-h"]:!0}),c(i)!=="svelte-nr780w"&&(i.innerHTML=y),k=n(e),h=p(e,"P",{["data-svelte-h"]:!0}),c(h)!=="svelte-cuzckp"&&(h.textContent=o),d=n(e),u=p(e,"UL",{["data-svelte-h"]:!0}),c(u)!=="svelte-yv7ynn"&&(u.innerHTML=Q),$=n(e),m=p(e,"P",{["data-svelte-h"]:!0}),c(m)!=="svelte-11t02gg"&&(m.textContent=V),S=n(e),E=p(e,"P",{["data-svelte-h"]:!0}),c(E)!=="svelte-19ej0ck"&&(E.innerHTML=W),q=n(e),C=p(e,"P",{["data-svelte-h"]:!0}),c(C)!=="svelte-ba94bs"&&(C.textContent=ee),G=n(e),f=p(e,"OL",{["data-svelte-h"]:!0}),c(f)!=="svelte-zqkk4o"&&(f.innerHTML=te),N=n(e),g=p(e,"P",{["data-svelte-h"]:!0}),c(g)!=="svelte-1pvzq2e"&&(g.innerHTML=se),j=n(e),D=B(e,!1),L=X(),H=B(e,!1),M=n(e),v=p(e,"P",{["data-svelte-h"]:!0}),c(v)!=="svelte-3ga1iy"&&(v.innerHTML=ae),z=n(e),w=p(e,"OL",{["data-svelte-h"]:!0}),c(w)!=="svelte-1df5sk0"&&(w.innerHTML=ie),U=n(e),b=p(e,"P",{["data-svelte-h"]:!0}),c(b)!=="svelte-1u8nowa"&&(b.textContent=oe),Y=n(e),_=p(e,"OL",{["data-svelte-h"]:!0}),c(_)!=="svelte-1d167v8"&&(_.innerHTML=le),R=n(e),F=p(e,"P",{["data-svelte-h"]:!0}),c(F)!=="svelte-lmq6dj"&&(F.innerHTML=ne),Z=n(e),A=B(e,!1),I=X(),P=B(e,!1),O=n(e),x=p(e,"P",{["data-svelte-h"]:!0}),c(x)!=="svelte-619mfc"&&(x.textContent=re),this.h()},h(){Ee(i,"id","use-opengraph-meta-tags-to-provide-page-previews-on-social-media"),D.a=L,H.a=M,A.a=I,P.a=O},m(e,t){s(e,i,t),s(e,k,t),s(e,h,t),s(e,d,t),s(e,u,t),s(e,$,t),s(e,m,t),s(e,S,t),s(e,E,t),s(e,q,t),s(e,C,t),s(e,G,t),s(e,f,t),s(e,N,t),s(e,g,t),s(e,j,t),D.m(he,e,t),s(e,L,t),H.m(ke,e,t),s(e,M,t),s(e,v,t),s(e,z,t),s(e,w,t),s(e,U,t),s(e,b,t),s(e,Y,t),s(e,_,t),s(e,R,t),s(e,F,t),s(e,Z,t),A.m(ue,e,t),s(e,I,t),P.m(ye,e,t),s(e,O,t),s(e,x,t)},p:Ce,d(e){e&&(a(i),a(k),a(h),a(d),a(u),a($),a(m),a(S),a(E),a(q),a(C),a(G),a(f),a(N),a(g),a(j),a(L),D.d(),H.d(),a(M),a(v),a(z),a(w),a(U),a(b),a(Y),a(_),a(R),a(F),a(Z),a(I),A.d(),P.d(),a(O),a(x))}}}function He(T){let i,y;const k=[T[0],de];let h={$$slots:{default:[Le]},$$scope:{ctx:T}};for(let o=0;o<k.length;o+=1)h=J(h,k[o]);return i=new De({props:h}),{c(){ve(i.$$.fragment)},l(o){we(i.$$.fragment,o)},m(o,d){be(i,o,d),y=!0},p(o,[d]){const u=d&1?Te(k,[d&1&&ce(o[0]),d&0&&ce(de)]):{};d&2&&(u.$$scope={dirty:d,ctx:o}),i.$set(u)},i(o){y||(_e(i.$$.fragment,o),y=!0)},o(o){Fe(i.$$.fragment,o),y=!1},d(o){xe(i,o)}}}const de={title:"Improve site previews on social media by unfurling webpages",description:"Some webpages have nice previews when shared on social media. These can be specified in the page HTML. Previews make the site user-friendly before users even visit it!",slug:"site-unfurling",publish:!0,lastmod:"2021-10-31T00:00:00.000Z",date:"2021-10-31T00:00:00.000Z",aliases:["site unfurling","Improve site previews on social media by unfurling webpages"],tags:["status/seedling","taxonomy/reference"],timeToRead:3,internalLinks:[],flashcards:[]};function Me(T,i,y){return T.$$set=k=>{y(0,i=J(J({},i),pe(k)))},i=pe(i),[i]}class $e extends fe{constructor(i){super(),ge(this,i,Me,He,me,{})}}export{$e as default,de as metadata};
