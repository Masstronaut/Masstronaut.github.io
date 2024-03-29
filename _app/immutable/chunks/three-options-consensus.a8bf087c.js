import{s as S,C as $,a3 as L,f as u,a as g,g as h,u as m,c as b,j as q,i as p,d,A as D}from"./scheduler.5beeadad.js";import{S as P,i as j,b as H,d as M,m as k,a as C,t as W,e as A}from"./index.bfd99307.js";import{g as O,a as x}from"./spread.8a54911c.js";import{M as R}from"./MDSveXNoteLayout.2a006cba.js";import{T as Z}from"./Table.8240123f.js";function z(c){let e,r="<tr><th>Source</th> <th>Creator</th></tr>",o,i,n='<tr><td><a href="https://en.wikipedia.org/wiki/List_of_cognitive_biases" rel="nofollow">List of cognitive biases - Wikipedia</a></td> <td>Wikipedia</td></tr>';return{c(){e=u("thead"),e.innerHTML=r,o=g(),i=u("tbody"),i.innerHTML=n},l(s){e=h(s,"THEAD",{["data-svelte-h"]:!0}),m(e)!=="svelte-bnko0q"&&(e.innerHTML=r),o=b(s),i=h(s,"TBODY",{["data-svelte-h"]:!0}),m(i)!=="svelte-1g27tg5"&&(i.innerHTML=n)},m(s,a){p(s,e,a),p(s,o,a),p(s,i,a)},p:D,d(s){s&&(d(e),d(o),d(i))}}}function B(c){let e,r='If only a single option is presented, people are unlikely to make a decision due to the <a href="/notes/single-option-aversion-bias/">single-option aversion bias</a>. When two options are presented in sequence, people perceive the pros and cons of the second option to be more significant than reality. This is called the <em>Contrast effect bias</em>. When presented with a third option which is inferior to the second option in every way and inferior to the first option in several ways, preference for the second option is increased dramatically. When trying to drive consensus on an option, present three options:',o,i,n="<li>A good option</li> <li>The recommended/best option</li> <li>An option that was considered but deemed not worthwhile</li>",s,a,T='<a aria-hidden="true" tabindex="-1" href="#references"><span class="icon icon-link"></span></a><a href="#references" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>References',_,f,v;return f=new Z({props:{$$slots:{default:[z]},$$scope:{ctx:c}}}),{c(){e=u("p"),e.innerHTML=r,o=g(),i=u("ol"),i.innerHTML=n,s=g(),a=u("h2"),a.innerHTML=T,_=g(),H(f.$$.fragment),this.h()},l(t){e=h(t,"P",{["data-svelte-h"]:!0}),m(e)!=="svelte-1othw2r"&&(e.innerHTML=r),o=b(t),i=h(t,"OL",{["data-svelte-h"]:!0}),m(i)!=="svelte-7g5snt"&&(i.innerHTML=n),s=b(t),a=h(t,"H2",{id:!0,["data-svelte-h"]:!0}),m(a)!=="svelte-1p9zib8"&&(a.innerHTML=T),_=b(t),M(f.$$.fragment,t),this.h()},h(){q(a,"id","references")},m(t,l){p(t,e,l),p(t,o,l),p(t,i,l),p(t,s,l),p(t,a,l),p(t,_,l),k(f,t,l),v=!0},p(t,l){const w={};l&2&&(w.$$scope={dirty:l,ctx:t}),f.$set(w)},i(t){v||(C(f.$$.fragment,t),v=!0)},o(t){W(f.$$.fragment,t),v=!1},d(t){t&&(d(e),d(o),d(i),d(s),d(a),d(_)),A(f,t)}}}function E(c){let e,r;const o=[c[0],y];let i={$$slots:{default:[B]},$$scope:{ctx:c}};for(let n=0;n<o.length;n+=1)i=$(i,o[n]);return e=new R({props:i}),{c(){H(e.$$.fragment)},l(n){M(e.$$.fragment,n)},m(n,s){k(e,n,s),r=!0},p(n,[s]){const a=s&1?O(o,[s&1&&x(n[0]),s&0&&x(y)]):{};s&2&&(a.$$scope={dirty:s,ctx:n}),e.$set(a)},i(n){r||(C(e.$$.fragment,n),r=!0)},o(n){W(e.$$.fragment,n),r=!1},d(n){A(e,n)}}}const y={title:"Present three options to build consensus",description:"Cognitive biases lead people to evaluate options in context. There are strong biases that impact decision making when there are one or two options.",slug:"three-options-consensus",publish:!0,lastmod:"2022-04-13T00:00:00.000Z",date:"2021-04-07T00:00:00.000Z",aliases:["Present three options when driving consensus"],tags:["status/budding"],timeToRead:1,internalLinks:["/notes/single-option-aversion-bias/"],flashcards:[]};function I(c,e,r){return c.$$set=o=>{r(0,e=$($({},e),L(o)))},e=L(e),[e]}class J extends P{constructor(e){super(),j(this,e,I,E,S,{})}}export{J as default,y as metadata};
