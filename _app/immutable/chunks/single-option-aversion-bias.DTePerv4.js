import{s as R,p as w,q as I,e as u,a as v,c as f,u as m,g as $,o as Y,i as r,f as l,n as N}from"./scheduler.DG9R8YhD.js";import{S as Z,i as G,c as H,a as D,m as k,t as L,b as P,d as S}from"./index.DXoakw9j.js";import{g as U,a as j}from"./spread.CgU5AtxT.js";import{M as X}from"./MDSveXNoteLayout.jyYVGmCw.js";import{T as B}from"./Table.BdsM86ou.js";function z(c){let e,p="<tr><th>Group</th> <th>Experiment</th> <th>Result</th></tr>",i,s,a="<tr><td>1</td> <td>Presented a Sony DVD player</td> <td>9% interested in purchasing</td></tr> <tr><td>2</td> <td>Presented a Philips DVD player</td> <td>10% interested in purchasing</td></tr> <tr><td>3</td> <td>Presented both DVD players</td> <td>32% chose Sony, 34% chose Philips</td></tr>";return{c(){e=u("thead"),e.innerHTML=p,i=v(),s=u("tbody"),s.innerHTML=a},l(n){e=f(n,"THEAD",{"data-svelte-h":!0}),m(e)!=="svelte-vk1b9p"&&(e.innerHTML=p),i=$(n),s=f(n,"TBODY",{"data-svelte-h":!0}),m(s)!=="svelte-jvo2w1"&&(s.innerHTML=a)},m(n,d){r(n,e,d),r(n,i,d),r(n,s,d)},p:N,d(n){n&&(l(e),l(i),l(s))}}}function J(c){let e,p="<tr><th>Source</th> <th>Creator</th></tr>",i,s,a='<tr><td><a href="http://web.missouri.edu/~segerti/capstone/SingleOptionAversion.pdf" rel="nofollow">Single-Option Aversion (missouri.edu)</a></td> <td><em>@Daniel Mochon</em>, Assistant professor of Marketing at Tulane.</td></tr> <tr><td><a href="https://foundr.com/increase-conversions" rel="nofollow">How the Perfect Number of Choices Can Increase Conversions - Foundr</a></td> <td><a href="https://foundr.com" rel="nofollow">Foundr</a></td></tr>';return{c(){e=u("thead"),e.innerHTML=p,i=v(),s=u("tbody"),s.innerHTML=a},l(n){e=f(n,"THEAD",{"data-svelte-h":!0}),m(e)!=="svelte-bnko0q"&&(e.innerHTML=p),i=$(n),s=f(n,"TBODY",{"data-svelte-h":!0}),m(s)!=="svelte-1yokqvt"&&(s.innerHTML=a)},m(n,d){r(n,e,d),r(n,i,d),r(n,s,d)},p:N,d(n){n&&(l(e),l(i),l(s))}}}function K(c){let e,p="In a study by Daniel Mochon at University of Missouri, participants were split into three groups and asked to purchase DVD players.",i,s,a,n,d="Participants that were presented a second choice were 6.5x more likely to exhibit an intent to buy.",x,b,A="The single-option aversion bias can be overcome by providing a second option which is clearly worse. The presence of the worse option makes it clear that the primary option isn’t as bad, and the audience feels like they have a choice in making the decision.",T,g,q='In addition to single-option aversion, <em>Contrast effect bias</em> and <em>Extreme aversion bias</em> can also influence decision making. As a general rule, <a href="/notes/three-options-consensus">present three options when driving consensus</a>',y,h,E='<a aria-hidden="true" tabindex="-1" href="#references"><span class="icon icon-link"></span></a><a href="#references" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>References',C,_,M;return s=new B({props:{$$slots:{default:[z]},$$scope:{ctx:c}}}),_=new B({props:{$$slots:{default:[J]},$$scope:{ctx:c}}}),{c(){e=u("p"),e.textContent=p,i=v(),H(s.$$.fragment),a=v(),n=u("p"),n.textContent=d,x=v(),b=u("p"),b.textContent=A,T=v(),g=u("p"),g.innerHTML=q,y=v(),h=u("h3"),h.innerHTML=E,C=v(),H(_.$$.fragment),this.h()},l(t){e=f(t,"P",{"data-svelte-h":!0}),m(e)!=="svelte-1cei116"&&(e.textContent=p),i=$(t),D(s.$$.fragment,t),a=$(t),n=f(t,"P",{"data-svelte-h":!0}),m(n)!=="svelte-ttyb03"&&(n.textContent=d),x=$(t),b=f(t,"P",{"data-svelte-h":!0}),m(b)!=="svelte-1vl4plg"&&(b.textContent=A),T=$(t),g=f(t,"P",{"data-svelte-h":!0}),m(g)!=="svelte-1tanyp0"&&(g.innerHTML=q),y=$(t),h=f(t,"H3",{id:!0,"data-svelte-h":!0}),m(h)!=="svelte-uim3hg"&&(h.innerHTML=E),C=$(t),D(_.$$.fragment,t),this.h()},h(){Y(h,"id","references")},m(t,o){r(t,e,o),r(t,i,o),k(s,t,o),r(t,a,o),r(t,n,o),r(t,x,o),r(t,b,o),r(t,T,o),r(t,g,o),r(t,y,o),r(t,h,o),r(t,C,o),k(_,t,o),M=!0},p(t,o){const O={};o&2&&(O.$$scope={dirty:o,ctx:t}),s.$set(O);const V={};o&2&&(V.$$scope={dirty:o,ctx:t}),_.$set(V)},i(t){M||(L(s.$$.fragment,t),L(_.$$.fragment,t),M=!0)},o(t){P(s.$$.fragment,t),P(_.$$.fragment,t),M=!1},d(t){t&&(l(e),l(i),l(a),l(n),l(x),l(b),l(T),l(g),l(y),l(h),l(C)),S(s,t),S(_,t)}}}function Q(c){let e,p;const i=[c[0],F];let s={$$slots:{default:[K]},$$scope:{ctx:c}};for(let a=0;a<i.length;a+=1)s=w(s,i[a]);return e=new X({props:s}),{c(){H(e.$$.fragment)},l(a){D(e.$$.fragment,a)},m(a,n){k(e,a,n),p=!0},p(a,[n]){const d=n&1?U(i,[n&1&&j(a[0]),n&0&&j(F)]):{};n&2&&(d.$$scope={dirty:n,ctx:a}),e.$set(d)},i(a){p||(L(e.$$.fragment,a),p=!0)},o(a){P(e.$$.fragment,a),p=!1},d(a){S(e,a)}}}const F={title:"Single-option aversion bias",description:"People are biased against deciding on a single option. Multiple options enable people to compare and make informed decisions.",slug:"notes/single-option-aversion-bias",publish:!0,lastmod:"2022-04-12T00:00:00.000Z",date:"2021-03-26T00:00:00.000Z",aliases:["Single-option aversion bias","single-option aversion bias"],tags:["status/evergreen","topic/social"],readTime:2,internalLinks:["/notes/three-options-consensus"],flashcards:[]};function W(c,e,p){return c.$$set=i=>{p(0,e=w(w({},e),I(i)))},e=I(e),[e]}class ie extends Z{constructor(e){super(),G(this,e,W,Q,R,{})}}export{ie as default,F as metadata};
