import{s as q,C as M,N as P,f as _,a as v,g as d,u as h,c as b,i as o,A as B,d as n}from"./scheduler.e9e6880c.js";import{S as D,i as S,b as G,d as I,m as N,a as Z,t as j,e as z}from"./index.ebf47752.js";import{g as A,a as k}from"./spread.8a54911c.js";import{M as R}from"./MDSveXNoteLayout.2d1afd0f.js";function U(g){let t,u=`Customer attributes are used to define <a href="/notes/customer-segment/">customer segment</a>. Broadly, there are 4 categories that customer attributes fall into:
:–:`,l,i,a="<li>Demographic</li> <li>Psychographic</li> <li>Geographic</li> <li>Behavioral</li>",s,c,x="<strong>Demographic</strong>: Tangible/physical characteristics of people, such as ethnicity, religion, age, income, or education level.",y,m,C="<strong>Psychographic</strong>: Intangible characteristics of how people think, such as their culture, attitude, personality, motivations, and lifestyle.",T,p,H="<strong>Geographic</strong>: Where people are. Includes specifics like the city, state, and country, as well as geographic characteristics like “urban” or “coastal” regions.",L,f,$="<strong>Behavioral</strong>: Purchase and decision history of what people actually do.";return{c(){t=_("p"),t.innerHTML=u,l=v(),i=_("ul"),i.innerHTML=a,s=v(),c=_("p"),c.innerHTML=x,y=v(),m=_("p"),m.innerHTML=C,T=v(),p=_("p"),p.innerHTML=H,L=v(),f=_("p"),f.innerHTML=$},l(e){t=d(e,"P",{["data-svelte-h"]:!0}),h(t)!=="svelte-1eedfbp"&&(t.innerHTML=u),l=b(e),i=d(e,"UL",{["data-svelte-h"]:!0}),h(i)!=="svelte-8tfriw"&&(i.innerHTML=a),s=b(e),c=d(e,"P",{["data-svelte-h"]:!0}),h(c)!=="svelte-cn4asq"&&(c.innerHTML=x),y=b(e),m=d(e,"P",{["data-svelte-h"]:!0}),h(m)!=="svelte-1miyu42"&&(m.innerHTML=C),T=b(e),p=d(e,"P",{["data-svelte-h"]:!0}),h(p)!=="svelte-1p9ezqg"&&(p.innerHTML=H),L=b(e),f=d(e,"P",{["data-svelte-h"]:!0}),h(f)!=="svelte-i14qli"&&(f.innerHTML=$)},m(e,r){o(e,t,r),o(e,l,r),o(e,i,r),o(e,s,r),o(e,c,r),o(e,y,r),o(e,m,r),o(e,T,r),o(e,p,r),o(e,L,r),o(e,f,r)},p:B,d(e){e&&(n(t),n(l),n(i),n(s),n(c),n(y),n(m),n(T),n(p),n(L),n(f))}}}function W(g){let t,u;const l=[g[0],w];let i={$$slots:{default:[U]},$$scope:{ctx:g}};for(let a=0;a<l.length;a+=1)i=M(i,l[a]);return t=new R({props:i}),{c(){G(t.$$.fragment)},l(a){I(t.$$.fragment,a)},m(a,s){N(t,a,s),u=!0},p(a,[s]){const c=s&1?A(l,[s&1&&k(a[0]),s&0&&k(w)]):{};s&2&&(c.$$scope={dirty:s,ctx:a}),t.$set(c)},i(a){u||(Z(t.$$.fragment,a),u=!0)},o(a){j(t.$$.fragment,a),u=!1},d(a){z(t,a)}}}const w={title:"Categories of customer attributes",description:"Customer attributes can be grouped as demographic, psychographic, geographic, or behavior.",slug:"customer-attribute-categories",publish:!0,lastmod:"2021-09-23T00:00:00.000Z",date:"2021-09-23T00:00:00.000Z",aliases:["Categories of customer attributes","categories of customer attributes","customer attribute categories","customer attributes"],tags:["status/seedling","course/marketing","topic/marketing","taxonomy/reference"],timeToRead:1,internalLinks:["/notes/customer-segment/"],flashcards:[]};function X(g,t,u){return g.$$set=l=>{u(0,t=M(M({},t),P(l)))},t=P(t),[t]}class O extends D{constructor(t){super(),S(this,t,X,W,q,{})}}export{O as default,w as metadata};