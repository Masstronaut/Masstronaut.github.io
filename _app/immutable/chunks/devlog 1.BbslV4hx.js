import{s as K,p as P,q as Z,e as p,a as g,c as h,u,g as w,o as C,i,n as N,f as o}from"./scheduler.DG9R8YhD.js";import{S as W,i as X,c as B,a as G,m as J,t as O,b as Q,d as R}from"./index.DXoakw9j.js";import{g as U,a as z}from"./spread.CgU5AtxT.js";import{M as V}from"./MDSveXNoteLayout.jyYVGmCw.js";function Y(_){let t,c='<a aria-hidden="true" tabindex="-1" href="#code-block-copy-button"><span class="icon icon-link"></span></a><a href="#code-block-copy-button" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Code block copy button',r,l,a='Code blocks on <a href="https://allandeutsch.com" rel="nofollow">allandeutsch.com</a> now have a copy code button!',s,d,$='I previously had copy code buttons, but I when I upgraded to using <a href="https://shiki.style/packages/twoslash" rel="nofollow">@shikijs/twoslash</a> it broke them in a couple ways. First, the output HTML changed and broke my query selectors - that was an easy fix. Slightly more interesting is that typescript code blocks that are augmented with type information by <a href="https://twoslash.netlify.app/" rel="nofollow">twoslash</a> processing. Previously I was selecting the <code>innerText</code> to grab only the code, but twoslash adds additional elements (and <code>innerText</code>) that contain the type information. I don’t want all of that on the clipboard when copying a code snippet! To fix this I put a <code>pre</code> element with the class <code>code-copy-target</code> after each code block rendered by shiki. I inject the raw code from my markdown code block into the <code>innerText</code> of that node. The copy button gets the text from that node instead of the pretty code block. I also set its display to hidden so it doesn’t disrupt the view of the page and won’t be read by screen readers. I also needed to escape a few characters like <code>&lt;</code> and <code>&gt;</code> with their HTML escape code equivalents so that code snippets with angle brackets don’t break the page HTML.',x,f,S='<a aria-hidden="true" tabindex="-1" href="#detailed-feedback-view-page"><span class="icon icon-link"></span></a><a href="#detailed-feedback-view-page" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Detailed feedback view page',T,b,q='<a href="https://penguinsight.com" rel="nofollow">Penguinsight</a> now has a page for viewing detailed information about feedback. Clicking the link to view the original document now highlights the section of the page that feedback was provided for. I’m really excited about this because it’s such useful context for reviewing feedback',L,m,D='<a aria-hidden="true" tabindex="-1" href="#automatic-linting--formatting-update"><span class="icon icon-link"></span></a><a href="#automatic-linting--formatting-update" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Automatic linting &amp; formatting update',H,v,j='My setup for Prettier and ESLint has been broken for about a month and the lack of auto-formatting has been driving me crazy. This week I’ve been working through Kent’s <a href="https://epicweb.dev" rel="nofollow">Epic Web Dev</a> course with a friend, and being reminded of how nice it is to have a working linter &amp; formatter was the final straw.',M,k,E='I finally got around to fixing the config for ESLint &amp; Prettier on Penguinsight. This was more work than I expected; ESLint switched to a new <a href="https://eslint.org/docs/latest/extend/plugin-migration-flat-config" rel="nofollow">flat config</a> format which I’ve now adopted. I wasn’t able to upgrade to the latest ESLint 9.0.0 because <a href="https://github.com/typescript-eslint/typescript-eslint/issues/8211" rel="nofollow">typescript-eslint doesn’t support it yet</a>, but I did manage to get <a href="https://typescript-eslint.io/getting-started/typed-linting" rel="nofollow">linting with type information</a> working which helped me catch a few potential bugs already.',I,y,F='For the full details, check out how I set up <a href="/notes/lint-format-svelte">Linting and formatting a svelte typescript project</a>.';return{c(){t=p("h2"),t.innerHTML=c,r=g(),l=p("p"),l.innerHTML=a,s=g(),d=p("p"),d.innerHTML=$,x=g(),f=p("h2"),f.innerHTML=S,T=g(),b=p("p"),b.innerHTML=q,L=g(),m=p("h2"),m.innerHTML=D,H=g(),v=p("p"),v.innerHTML=j,M=g(),k=p("p"),k.innerHTML=E,I=g(),y=p("p"),y.innerHTML=F,this.h()},l(e){t=h(e,"H2",{id:!0,"data-svelte-h":!0}),u(t)!=="svelte-n4yw7h"&&(t.innerHTML=c),r=w(e),l=h(e,"P",{"data-svelte-h":!0}),u(l)!=="svelte-19dvy7m"&&(l.innerHTML=a),s=w(e),d=h(e,"P",{"data-svelte-h":!0}),u(d)!=="svelte-1m4s4jw"&&(d.innerHTML=$),x=w(e),f=h(e,"H2",{id:!0,"data-svelte-h":!0}),u(f)!=="svelte-1abwant"&&(f.innerHTML=S),T=w(e),b=h(e,"P",{"data-svelte-h":!0}),u(b)!=="svelte-x90agy"&&(b.innerHTML=q),L=w(e),m=h(e,"H2",{id:!0,"data-svelte-h":!0}),u(m)!=="svelte-nqs6re"&&(m.innerHTML=D),H=w(e),v=h(e,"P",{"data-svelte-h":!0}),u(v)!=="svelte-11ll8pi"&&(v.innerHTML=j),M=w(e),k=h(e,"P",{"data-svelte-h":!0}),u(k)!=="svelte-1hkdi2"&&(k.innerHTML=E),I=w(e),y=h(e,"P",{"data-svelte-h":!0}),u(y)!=="svelte-1qt94pn"&&(y.innerHTML=F),this.h()},h(){C(t,"id","code-block-copy-button"),C(f,"id","detailed-feedback-view-page"),C(m,"id","automatic-linting--formatting-update")},m(e,n){i(e,t,n),i(e,r,n),i(e,l,n),i(e,s,n),i(e,d,n),i(e,x,n),i(e,f,n),i(e,T,n),i(e,b,n),i(e,L,n),i(e,m,n),i(e,H,n),i(e,v,n),i(e,M,n),i(e,k,n),i(e,I,n),i(e,y,n)},p:N,d(e){e&&(o(t),o(r),o(l),o(s),o(d),o(x),o(f),o(T),o(b),o(L),o(m),o(H),o(v),o(M),o(k),o(I),o(y))}}}function ee(_){let t,c;const r=[_[0],A];let l={$$slots:{default:[Y]},$$scope:{ctx:_}};for(let a=0;a<r.length;a+=1)l=P(l,r[a]);return t=new V({props:l}),{c(){B(t.$$.fragment)},l(a){G(t.$$.fragment,a)},m(a,s){J(t,a,s),c=!0},p(a,[s]){const d=s&1?U(r,[s&1&&z(a[0]),s&0&&z(A)]):{};s&2&&(d.$$scope={dirty:s,ctx:a}),t.$set(d)},i(a){c||(O(t.$$.fragment,a),c=!0)},o(a){Q(t.$$.fragment,a),c=!1},d(a){R(t,a)}}}const A={title:"devlog 1",description:"Code block updates on allandeutsch.com and detailed feedback on Doc Duck. Plus a new post!",slug:"devlog/1",publish:!0,lastmod:"2024-04-14T00:00:00.000Z",date:"2024-04-14T00:00:00.000Z",aliases:null,tags:["status/evergreen"],readTime:4,internalLinks:["/notes/lint-format-svelte"],flashcards:[]};function te(_,t,c){return _.$$set=r=>{c(0,t=P(P({},t),Z(r)))},t=Z(t),[t]}class se extends W{constructor(t){super(),X(this,t,te,ee,K,{})}}export{se as default,A as metadata};
