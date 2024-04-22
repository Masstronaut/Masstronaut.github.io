import{s as $,C as y,N as w,f as _,a as g,g as p,u as h,c as v,i as c,A as k,d as f}from"./scheduler.e9e6880c.js";import{S as L,i as M,b as B,d as H,m as W,a as P,t as S,e as j}from"./index.ebf47752.js";import{g as A,a as T}from"./spread.8a54911c.js";import{M as N}from"./MDSveXNoteLayout.236652f2.js";function Z(m){let t,l="When starting something new, it can be tempting to build infrastructure and supporting pieces early on. That infrastructure - once built - can reduce the friction of the activity. There are a few problems with doing so too early though:",s,i,e="<li>Building infrastructure for an activity is time taken away from actually <em>doing</em> the activity</li> <li>Without some experience doing the activity, it’s hard to determine what infrastructure is truly valuable</li> <li>Building infrastructure isn’t progress, whereas doing the activity is</li> <li>The activity may not be continued long term, and the infrastructure is unlikely to be a worthwhile investment in the short term</li>",n,r,b="When lack of infrastructure becomes painful, it creates clarity about what problems the infrastructure needs to solve.",d,o,x="Once it becomes clear than an activity is going to continue, <em>Automation unlocks progressively more meaningful problems</em>.";return{c(){t=_("p"),t.textContent=l,s=g(),i=_("ul"),i.innerHTML=e,n=g(),r=_("p"),r.textContent=b,d=g(),o=_("p"),o.innerHTML=x},l(a){t=p(a,"P",{["data-svelte-h"]:!0}),h(t)!=="svelte-gcu0n6"&&(t.textContent=l),s=v(a),i=p(a,"UL",{["data-svelte-h"]:!0}),h(i)!=="svelte-16rulgd"&&(i.innerHTML=e),n=v(a),r=p(a,"P",{["data-svelte-h"]:!0}),h(r)!=="svelte-1agja4r"&&(r.textContent=b),d=v(a),o=p(a,"P",{["data-svelte-h"]:!0}),h(o)!=="svelte-go18a"&&(o.innerHTML=x)},m(a,u){c(a,t,u),c(a,s,u),c(a,i,u),c(a,n,u),c(a,r,u),c(a,d,u),c(a,o,u)},p:k,d(a){a&&(f(t),f(s),f(i),f(n),f(r),f(d),f(o))}}}function q(m){let t,l;const s=[m[0],C];let i={$$slots:{default:[Z]},$$scope:{ctx:m}};for(let e=0;e<s.length;e+=1)i=y(i,s[e]);return t=new N({props:i}),{c(){B(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,n){W(t,e,n),l=!0},p(e,[n]){const r=n&1?A(s,[n&1&&T(e[0]),n&0&&T(C)]):{};n&2&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){l||(P(t.$$.fragment,e),l=!0)},o(e){S(t.$$.fragment,e),l=!1},d(e){j(t,e)}}}const C={title:"Build infrastructure after not having it becomes painful",description:"The pain caused by a lack of infrastructure proves the infrastructure is necessary.",slug:"build-infrastructure-after-pain",publish:!0,lastmod:"2021-08-16T00:00:00.000Z",date:"2021-07-02T00:00:00.000Z",aliases:["Build infrastructure after not having it becomes painful"],tags:["status/seedling","flashcards/ideas","taxonomy/idea"],timeToRead:1,internalLinks:[],flashcards:[{prompt:"When lack of infrastructure becomes painful, it creates clarity about __________?",answer:"what problems the infrastructure needs to solve.  "}]};function D(m,t,l){return m.$$set=s=>{l(0,t=y(y({},t),w(s)))},t=w(t),[t]}class z extends L{constructor(t){super(),M(this,t,D,q,$,{})}}export{z as default,C as metadata};
