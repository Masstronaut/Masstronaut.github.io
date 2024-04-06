import{s as pe,C as Y,a5 as te,f as r,a as l,I as ae,g as p,u as c,c as n,K as ie,j as ce,i as t,A as de,d as a}from"./scheduler.73a07135.js";import{S as he,i as ke,b as ue,d as Ee,m as ye,a as me,t as Ce,e as fe}from"./index.ba10b74b.js";import{g as ve,a as oe}from"./spread.8a54911c.js";import{M as ge}from"./MDSveXNoteLayout.b28ae9b2.js";function we(T){let i,E='<a aria-hidden="true" tabindex="-1" href="#use-opengraph-meta-tags-to-provide-page-previews-on-social-media"><span class="icon icon-link"></span></a><a href="#use-opengraph-meta-tags-to-provide-page-previews-on-social-media" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Use OpenGraph meta tags to provide page previews on social media',k,h,o="You built a website to share something valuable with people. If other people find it valuable, they will share it too, on:",d,u,N="<li>Facebook</li> <li>Twitter</li> <li>Slack</li> <li>LinkedIn</li>",A,y,R="…and other platforms!",I,m,Z='To maximize your click-through rates for social media shares, give social media users a great first impression. To help social media platforms present your content to their users, you need to help them <em>unfurl</em> your pages. This is done using 2 simple APIs: <a href="https://developers.facebook.com/docs/sharing/webmasters#markup" rel="nofollow">Facebook Open Graph HTML Markup</a> and <a href="https://developer.twitter.com/docs/twitter-for-websites/cards/overview/about-cards" rel="nofollow">Twitter Cards</a>.',P,C,K="Most platforms use the Open Graph API. It has 5 properties you need to know about:",O,f,X="<li><code>og:type</code> specifies what type of content is the focus of a page. There are 6 options: <ul><li><code>website</code> - this is also the default option if no type is specified</li> <li><code>article</code></li> <li><code>profile</code></li> <li><code>video</code></li> <li><code>music</code></li> <li><code>book</code></li></ul></li> <li><code>og:url</code> specifies your website’s Canonical URL. Think of this as the address for your front door.</li> <li><code>og:title</code> is the title <em>page</em> title. This should be contextual and specific to each page. Think <em>article</em> title, not site title.</li> <li><code>og:description</code> is a brief description of the <em>page</em> content. Use it to help people make a quick decision about if they are interested in the content. It’s a great place for a hook.</li> <li><code>og:image</code> is used to specify a preview/thumbnail image for the page. This could be as simple as the header graphic for the page.</li>",$,v,B='I wrote this note while adding unfurling content to <a href="https://allandeutsch.com" rel="nofollow">allandeutsch.com</a>. Here’s the Open Graph code I added to the <code>&lt;head&gt;</code> of my homepage:',S,D,ne=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#808080">&#x3C;</span><span style="color:#22863A;--shiki-dark:#569CD6">meta</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> property</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"og:type"</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> content</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"website"</span><span style="color:#24292E;--shiki-dark:#808080">/></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">&#x3C;</span><span style="color:#22863A;--shiki-dark:#569CD6">meta</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> property</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"og:url"</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> content</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"https://allandeutsch.com"</span><span style="color:#24292E;--shiki-dark:#808080"> /></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">&#x3C;</span><span style="color:#22863A;--shiki-dark:#569CD6">meta</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> property</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"og:title"</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> content</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"Allan Deutsch"</span><span style="color:#24292E;--shiki-dark:#808080"> /></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">&#x3C;</span><span style="color:#22863A;--shiki-dark:#569CD6">meta</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> property</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"og:description"</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> content</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"Learning, thinking, and building in public. Notes on product, technology, and business."</span><span style="color:#24292E;--shiki-dark:#808080"> /></span></span></code></pre>`,L,g,J="The Twitter Cards API is pretty similar. <code>twitter:url</code>, <code>twitter:title</code>, <code>twitter:description</code>, and <code>twitter:image</code> serve the same purpose as their <code>og:</code> counterparts. Instead of a <code>type</code> property, Twitter uses <code>twitter:card</code> which specifies a card type. There are  four options:",q,w,Q="<li><code>summary</code> is used for most types of content, like blog posts, articles, websites, etc. It should provide a preview of the page content  prior to a click-through. Including an image is optional.</li> <li><code>summary_large_image</code> is similar to to <code>summary</code>, but with a focus on visual content.</li> <li><code>app</code> is used for driving conversions on a mobile app.</li> <li><code>player</code> is used to provide a media player for audio or video content.</li>",G,F,V="Twitter has two other additional fields that are broadly applicable:",j,b,W="<li><code>twitter:site</code> is used for the twitter account associated with the site - for example a link to a YouTube video would use <code>@YouTube</code>.</li> <li><code>twitter:creator</code> is for the author/creator of the content on the page. This would be the YouTuber who made the video, or the author of a specific article or blog post.</li>",z,_,ee='On <a href="https://allandeutsch.com" rel="nofollow">allandeutsch.com</a> I use this code in my <code>&lt;head&gt;</code> tag:',U,H,re=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#808080">&#x3C;</span><span style="color:#22863A;--shiki-dark:#569CD6">meta</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> property</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"twitter:card"</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> content</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"summary"</span><span style="color:#24292E;--shiki-dark:#808080">/></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">&#x3C;</span><span style="color:#22863A;--shiki-dark:#569CD6">meta</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> property</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"twitter:url"</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> content</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"https://allandeutsch.com"</span><span style="color:#24292E;--shiki-dark:#808080"> /></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">&#x3C;</span><span style="color:#22863A;--shiki-dark:#569CD6">meta</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> property</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"twitter:title"</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> content</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"Allan Deutsch"</span><span style="color:#24292E;--shiki-dark:#808080"> /></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">&#x3C;</span><span style="color:#22863A;--shiki-dark:#569CD6">meta</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> property</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"twitter:description"</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> content</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"Learning, thinking, and building in public. Notes on product, technology, and business."</span><span style="color:#24292E;--shiki-dark:#808080"> /></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">&#x3C;</span><span style="color:#22863A;--shiki-dark:#569CD6">meta</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> property</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"twitter:site"</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> content</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"@AllanDeutsch"</span><span style="color:#24292E;--shiki-dark:#808080"> /></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">&#x3C;</span><span style="color:#22863A;--shiki-dark:#569CD6">meta</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> property</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"twitter:creator"</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> content</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"@AllanDeutsch"</span><span style="color:#24292E;--shiki-dark:#808080"> /></span></span></code></pre>`,M,x,se="Setting up Open Graph and Twitter Cards for a site improves the experience for existing users and helps reach new ones.";return{c(){i=r("h1"),i.innerHTML=E,k=l(),h=r("p"),h.textContent=o,d=l(),u=r("ul"),u.innerHTML=N,A=l(),y=r("p"),y.textContent=R,I=l(),m=r("p"),m.innerHTML=Z,P=l(),C=r("p"),C.textContent=K,O=l(),f=r("ol"),f.innerHTML=X,$=l(),v=r("p"),v.innerHTML=B,S=l(),D=new ae(!1),L=l(),g=r("p"),g.innerHTML=J,q=l(),w=r("ol"),w.innerHTML=Q,G=l(),F=r("p"),F.textContent=V,j=l(),b=r("ol"),b.innerHTML=W,z=l(),_=r("p"),_.innerHTML=ee,U=l(),H=new ae(!1),M=l(),x=r("p"),x.textContent=se,this.h()},l(e){i=p(e,"H1",{id:!0,["data-svelte-h"]:!0}),c(i)!=="svelte-nr780w"&&(i.innerHTML=E),k=n(e),h=p(e,"P",{["data-svelte-h"]:!0}),c(h)!=="svelte-cuzckp"&&(h.textContent=o),d=n(e),u=p(e,"UL",{["data-svelte-h"]:!0}),c(u)!=="svelte-yv7ynn"&&(u.innerHTML=N),A=n(e),y=p(e,"P",{["data-svelte-h"]:!0}),c(y)!=="svelte-11t02gg"&&(y.textContent=R),I=n(e),m=p(e,"P",{["data-svelte-h"]:!0}),c(m)!=="svelte-19ej0ck"&&(m.innerHTML=Z),P=n(e),C=p(e,"P",{["data-svelte-h"]:!0}),c(C)!=="svelte-ba94bs"&&(C.textContent=K),O=n(e),f=p(e,"OL",{["data-svelte-h"]:!0}),c(f)!=="svelte-zqkk4o"&&(f.innerHTML=X),$=n(e),v=p(e,"P",{["data-svelte-h"]:!0}),c(v)!=="svelte-1pvzq2e"&&(v.innerHTML=B),S=n(e),D=ie(e,!1),L=n(e),g=p(e,"P",{["data-svelte-h"]:!0}),c(g)!=="svelte-3ga1iy"&&(g.innerHTML=J),q=n(e),w=p(e,"OL",{["data-svelte-h"]:!0}),c(w)!=="svelte-1df5sk0"&&(w.innerHTML=Q),G=n(e),F=p(e,"P",{["data-svelte-h"]:!0}),c(F)!=="svelte-1u8nowa"&&(F.textContent=V),j=n(e),b=p(e,"OL",{["data-svelte-h"]:!0}),c(b)!=="svelte-1d167v8"&&(b.innerHTML=W),z=n(e),_=p(e,"P",{["data-svelte-h"]:!0}),c(_)!=="svelte-lmq6dj"&&(_.innerHTML=ee),U=n(e),H=ie(e,!1),M=n(e),x=p(e,"P",{["data-svelte-h"]:!0}),c(x)!=="svelte-619mfc"&&(x.textContent=se),this.h()},h(){ce(i,"id","use-opengraph-meta-tags-to-provide-page-previews-on-social-media"),D.a=L,H.a=M},m(e,s){t(e,i,s),t(e,k,s),t(e,h,s),t(e,d,s),t(e,u,s),t(e,A,s),t(e,y,s),t(e,I,s),t(e,m,s),t(e,P,s),t(e,C,s),t(e,O,s),t(e,f,s),t(e,$,s),t(e,v,s),t(e,S,s),D.m(ne,e,s),t(e,L,s),t(e,g,s),t(e,q,s),t(e,w,s),t(e,G,s),t(e,F,s),t(e,j,s),t(e,b,s),t(e,z,s),t(e,_,s),t(e,U,s),H.m(re,e,s),t(e,M,s),t(e,x,s)},p:de,d(e){e&&(a(i),a(k),a(h),a(d),a(u),a(A),a(y),a(I),a(m),a(P),a(C),a(O),a(f),a($),a(v),a(S),D.d(),a(L),a(g),a(q),a(w),a(G),a(F),a(j),a(b),a(z),a(_),a(U),H.d(),a(M),a(x))}}}function Fe(T){let i,E;const k=[T[0],le];let h={$$slots:{default:[we]},$$scope:{ctx:T}};for(let o=0;o<k.length;o+=1)h=Y(h,k[o]);return i=new ge({props:h}),{c(){ue(i.$$.fragment)},l(o){Ee(i.$$.fragment,o)},m(o,d){ye(i,o,d),E=!0},p(o,[d]){const u=d&1?ve(k,[d&1&&oe(o[0]),d&0&&oe(le)]):{};d&2&&(u.$$scope={dirty:d,ctx:o}),i.$set(u)},i(o){E||(me(i.$$.fragment,o),E=!0)},o(o){Ce(i.$$.fragment,o),E=!1},d(o){fe(i,o)}}}const le={title:"Improve site previews on social media by unfurling webpages",description:"Some webpages have nice previews when shared on social media. These can be specified in the page HTML. Previews make the site user-friendly before users even visit it!",slug:"site-unfurling",publish:!0,lastmod:"2021-10-31T00:00:00.000Z",date:"2021-10-31T00:00:00.000Z",aliases:["site unfurling","Improve site previews on social media by unfurling webpages"],tags:["status/seedling","taxonomy/reference"],timeToRead:3,internalLinks:[],flashcards:[]};function be(T,i,E){return T.$$set=k=>{E(0,i=Y(Y({},i),te(k)))},i=te(i),[i]}class Le extends he{constructor(i){super(),ke(this,i,be,Fe,pe,{})}}export{Le as default,le as metadata};
