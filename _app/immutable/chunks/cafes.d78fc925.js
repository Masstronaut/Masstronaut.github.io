import{s as K,C,N as k,f as c,a as g,g as h,u as _,c as v,i as d,d as m,A as N}from"./scheduler.e9e6880c.js";import{S as U,i as q,b as P,d as H,m as M,a as A,t as B,e as E}from"./index.ebf47752.js";import{g as D,a as L}from"./spread.8a54911c.js";import{M as j}from"./MDSveXNoteLayout.236652f2.js";import{T as G}from"./Table.7508c68b.js";function Q(f){let t,i="<tr><th>Venue</th> <th>City/neighborhood</th> <th>Notes</th></tr>",l,n,a='<tr><td>Ada’s Cafe</td> <td>Capital Hill</td> <td>Technical bookstore with nice indoor/outdoor seating and good tea.</td></tr> <tr><td><a href="https://goo.gl/maps/aPTQZhqAiAC7FCHJ9" rel="nofollow">Cedar &amp; Spokes</a></td> <td>Belltown</td> <td>Quiet, excellent coffee, and lovely ambiance.</td></tr> <tr><td>Don’t yell at me</td> <td>Kirkland</td> <td>Clean, modern space. Best bbt in town. UW location is too busy.</td></tr> <tr><td>Happy Lemon SLU</td> <td>South Lake Union</td> <td>Beautiful outdoor urban area with benches and greenery.</td></tr> <tr><td><a href="https://goo.gl/maps/scrPEj6hh1QfRAbN9" rel="nofollow">Vita at KEXP</a></td> <td>Seattle Center</td> <td>Strong menu variety and great community space at KEXP public radio station.</td></tr> <tr><td>Lizzy Kate</td> <td>Kirkland</td> <td>Great tea shop with indoor &amp; outdoor seating. Limited snack options.</td></tr> <tr><td>Miro Tea</td> <td>Ballard</td> <td>large tea selection, including ceremonial matchas.</td></tr> <tr><td>Mercury Coffee Co.</td> <td>Bellevue</td> <td>good variety of food &amp; seating options</td></tr> <tr><td>Nana’s Green Tea</td> <td>South Lake Union</td> <td>Tea, sweets, and a few casual Japanese dishes. Great matcha &amp; hojicha</td></tr> <tr><td>Storyville Coffee</td> <td>Pike Place</td> <td>Atmosphere is like a study w/ great seating and windows.</td></tr> <tr><td><a href="https://goo.gl/maps/xrhxY9NHQK5hF4kB7" rel="nofollow">Temple Pastries</a></td> <td>Leschi / Central</td> <td>Excellent pastries, 100mbps wifi, lots of seating. Try the mushroom quiche!</td></tr> <tr><td>Tea Republik</td> <td>University district</td> <td>nice selection of teas, cheap &amp; quiet. Good cheap food nearby.</td></tr> <tr><td><a href="https://maps.app.goo.gl/JKNoBA4VSgEkEP1W9" rel="nofollow">The Shop by Porter</a></td> <td>Downtown</td> <td>Beautifully designed hybrid cowork &amp; cafe space</td></tr> <tr><td>URL</td> <td>First Hill</td> <td>~30-45Mbps wifi, good matcha &amp; lattes, big tables</td></tr>';return{c(){t=c("thead"),t.innerHTML=i,l=g(),n=c("tbody"),n.innerHTML=a},l(o){t=h(o,"THEAD",{["data-svelte-h"]:!0}),_(t)!=="svelte-180p0ew"&&(t.innerHTML=i),l=v(o),n=h(o,"TBODY",{["data-svelte-h"]:!0}),_(n)!=="svelte-7f1hms"&&(n.innerHTML=a)},m(o,s){d(o,t,s),d(o,l,s),d(o,n,s)},p:N,d(o){o&&(m(t),m(l),m(n))}}}function R(f){let t,i="Sometimes while working from home I want to mix things up from the normal work environment at home. Cafes have many perks:",l,n,a="<li>drinks and small bites</li> <li>They smell fantastic</li> <li>People watching</li> <li>A change of atmosphere/vibe</li> <li>Moving to another location is an easy way to rebuild momentum</li>",o,s,x="These are some of my favorite cafés in the Seattle area.",w,u,y,p,T=`To try:
Semicolon Bellevue`,b;return u=new G({props:{$$slots:{default:[Q]},$$scope:{ctx:f}}}),{c(){t=c("p"),t.textContent=i,l=g(),n=c("ul"),n.innerHTML=a,o=g(),s=c("p"),s.textContent=x,w=g(),P(u.$$.fragment),y=g(),p=c("p"),p.textContent=T},l(e){t=h(e,"P",{["data-svelte-h"]:!0}),_(t)!=="svelte-1tcaka7"&&(t.textContent=i),l=v(e),n=h(e,"UL",{["data-svelte-h"]:!0}),_(n)!=="svelte-1ngqv11"&&(n.innerHTML=a),o=v(e),s=h(e,"P",{["data-svelte-h"]:!0}),_(s)!=="svelte-1nxjuwf"&&(s.textContent=x),w=v(e),H(u.$$.fragment,e),y=v(e),p=h(e,"P",{["data-svelte-h"]:!0}),_(p)!=="svelte-13iw9sl"&&(p.textContent=T)},m(e,r){d(e,t,r),d(e,l,r),d(e,n,r),d(e,o,r),d(e,s,r),d(e,w,r),M(u,e,r),d(e,y,r),d(e,p,r),b=!0},p(e,r){const $={};r&2&&($.$$scope={dirty:r,ctx:e}),u.$set($)},i(e){b||(A(u.$$.fragment,e),b=!0)},o(e){B(u.$$.fragment,e),b=!1},d(e){e&&(m(t),m(l),m(n),m(o),m(s),m(w),m(y),m(p)),E(u,e)}}}function F(f){let t,i;const l=[f[0],S];let n={$$slots:{default:[R]},$$scope:{ctx:f}};for(let a=0;a<l.length;a+=1)n=C(n,l[a]);return t=new j({props:n}),{c(){P(t.$$.fragment)},l(a){H(t.$$.fragment,a)},m(a,o){M(t,a,o),i=!0},p(a,[o]){const s=o&1?D(l,[o&1&&L(a[0]),o&0&&L(S)]):{};o&2&&(s.$$scope={dirty:o,ctx:a}),t.$set(s)},i(a){i||(A(t.$$.fragment,a),i=!0)},o(a){B(t.$$.fragment,a),i=!1},d(a){E(t,a)}}}const S={title:"Seattle area cafés I like",description:"A curated list of my favorite Seattle area cafes to sit, sip, and relax or work.",slug:"seattle-cafes",publish:!0,lastmod:"2023-09-14T00:00:00.000Z",date:"2021-08-28T00:00:00.000Z",aliases:null,tags:["status/seedling"],timeToRead:2,internalLinks:[],flashcards:[]};function J(f,t,i){return f.$$set=l=>{i(0,t=C(C({},t),k(l)))},t=k(t),[t]}class W extends U{constructor(t){super(),q(this,t,J,F,K,{})}}export{W as default,S as metadata};
