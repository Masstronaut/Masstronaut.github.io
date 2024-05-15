import{s as A,C,a5 as k,f as p,a as g,g as _,u as h,c as v,j as D,i as c,d as u,A as P}from"./scheduler.7131e7f1.js";import{S as R,i as V,b as y,d as S,m as j,a as U,t as q,e as z}from"./index.9e889c2d.js";import{g as B,a as H}from"./spread.8a54911c.js";import{M as I}from"./MDSveXNoteLayout.8313d040.js";import{T as Z}from"./Table.1c12ddb2.js";function E(d){let t,i="<tr><th>Source</th> <th>Creator</th></tr>",o,s,n='<tr><td><a href="https://www.refactoringui.com/book" rel="nofollow">Refactoring UI</a></td> <td><a href="https://twitter.com/steveschoger" rel="nofollow">@Steve Schoger</a></td></tr>';return{c(){t=p("thead"),t.innerHTML=i,o=g(),s=p("tbody"),s.innerHTML=n},l(a){t=_(a,"THEAD",{"data-svelte-h":!0}),h(t)!=="svelte-bnko0q"&&(t.innerHTML=i),o=v(a),s=_(a,"TBODY",{"data-svelte-h":!0}),h(s)!=="svelte-qz1jk0"&&(s.innerHTML=n)},m(a,r){c(a,t,r),c(a,o,r),c(a,s,r)},p:P,d(a){a&&(u(t),u(o),u(s))}}}function N(d){let t,i="Visual contrast attracts focus. Borders create contrast between content and its container. Content within a border lacks contrast. Attention is drawn to the edges.",o,s,n="Minimize the contrast of content that isn’t a focus. Align contrast levels with the prominence of the content. Important content should contrast its surroundings. Reduce emphasis on less critical content with lower contrast.",a,r,w="Contrast can be changed using size, color, spacing, lines, and images. <em>Visual contrast</em> is a relative measure. Making something red doesn’t necessarily make it high contrast. What if the background is also red? <em>Change contrast in context</em>.",$,f,T='<a aria-hidden="true" tabindex="-1" href="#references"><span class="icon icon-link"></span></a><a href="#references" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>References',x,m,b;return m=new Z({props:{$$slots:{default:[E]},$$scope:{ctx:d}}}),{c(){t=p("p"),t.textContent=i,o=g(),s=p("p"),s.textContent=n,a=g(),r=p("p"),r.innerHTML=w,$=g(),f=p("h2"),f.innerHTML=T,x=g(),y(m.$$.fragment),this.h()},l(e){t=_(e,"P",{"data-svelte-h":!0}),h(t)!=="svelte-15uqbej"&&(t.textContent=i),o=v(e),s=_(e,"P",{"data-svelte-h":!0}),h(s)!=="svelte-dax4ji"&&(s.textContent=n),a=v(e),r=_(e,"P",{"data-svelte-h":!0}),h(r)!=="svelte-1hi71sd"&&(r.innerHTML=w),$=v(e),f=_(e,"H2",{id:!0,"data-svelte-h":!0}),h(f)!=="svelte-1p9zib8"&&(f.innerHTML=T),x=v(e),S(m.$$.fragment,e),this.h()},h(){D(f,"id","references")},m(e,l){c(e,t,l),c(e,o,l),c(e,s,l),c(e,a,l),c(e,r,l),c(e,$,l),c(e,f,l),c(e,x,l),j(m,e,l),b=!0},p(e,l){const M={};l&2&&(M.$$scope={dirty:l,ctx:e}),m.$set(M)},i(e){b||(U(m.$$.fragment,e),b=!0)},o(e){q(m.$$.fragment,e),b=!1},d(e){e&&(u(t),u(o),u(s),u(a),u(r),u($),u(f),u(x)),z(m,e)}}}function O(d){let t,i;const o=[d[0],L];let s={$$slots:{default:[N]},$$scope:{ctx:d}};for(let n=0;n<o.length;n+=1)s=C(s,o[n]);return t=new I({props:s}),{c(){y(t.$$.fragment)},l(n){S(t.$$.fragment,n)},m(n,a){j(t,n,a),i=!0},p(n,[a]){const r=a&1?B(o,[a&1&&H(n[0]),a&0&&H(L)]):{};a&2&&(r.$$scope={dirty:a,ctx:n}),t.$set(r)},i(n){i||(U(t.$$.fragment,n),i=!0)},o(n){q(t.$$.fragment,n),i=!1},d(n){z(t,n)}}}const L={title:"Use contrast to direct attention",description:"Visual focus is naturally drawn to contrast. Use contrast in design to direct attention.",slug:"notes/use-contrast-direct-attention",publish:!0,lastmod:"2021-10-11T00:00:00.000Z",date:"2021-03-25T00:00:00.000Z",aliases:["Use contrast to direct attention"],tags:["status/evergreen","taxonomy/idea"],readTime:1,internalLinks:[],flashcards:[]};function W(d,t,i){return d.$$set=o=>{i(0,t=C(C({},t),k(o)))},t=k(t),[t]}class K extends R{constructor(t){super(),V(this,t,W,O,A,{})}}export{K as default,L as metadata};
