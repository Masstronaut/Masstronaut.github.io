import{s as T,f as B,g as M,h as x,d as C,j as b,i as A,F as D,C as $,a5 as w,r as X,w as q,x as F,y as I,o as L}from"./scheduler.73a07135.js";import{S as E,i as S,g as N,t as d,c as j,a as m,b as g,d as p,m as h,e as k}from"./index.ba10b74b.js";import"./paths.2a579a86.js";import{I as y,X as O,b as U,c as z}from"./index.b63ab426.js";/* empty css                                                           */function G(s){let t,r;return t=new y({props:{src:O,class:"w-6 stroke-error/75 group-hover/button:stroke-error"}}),{c(){g(t.$$.fragment)},l(e){p(t.$$.fragment,e)},m(e,o){h(t,e,o),r=!0},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){k(t,e)}}}function H(s){let t,r;return t=new y({props:{src:U,class:"w-6 stroke-success/75 transition-colors group-hover/button:stroke-success"}}),{c(){g(t.$$.fragment)},l(e){p(t.$$.fragment,e)},m(e,o){h(t,e,o),r=!0},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){k(t,e)}}}function J(s){let t,r;return t=new y({props:{src:z,class:"w-6 stroke-neutral/50 transition-colors group-hover/button:stroke-neutral"}}),{c(){g(t.$$.fragment)},l(e){p(t.$$.fragment,e)},m(e,o){h(t,e,o),r=!0},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),r=!1},d(e){k(t,e)}}}function K(s){let t,r,e,o,l,n,i;const f=[J,H,G],a=[];function v(c,u){return c[0]==="copy"?0:c[0]==="success"?1:2}return r=v(s),e=a[r]=f[r](s),{c(){t=B("button"),e.c(),this.h()},l(c){t=M(c,"BUTTON",{type:!0,class:!0});var u=x(t);e.l(u),u.forEach(C),this.h()},h(){b(t,"type","button"),b(t,"class",o=`group/button flex items-center rounded-lg border-2 ${s[0]==="success"?"border-success/75 hover:border-success":s[0]==="error"?"border-error/75 hover:border-error":"border-neutral-content/75 hover:border-neutral"} px-3 py-2 transition-all  ${s[2].class}`)},m(c,u){A(c,t,u),a[r].m(t,null),l=!0,n||(i=D(t,"click",s[1]),n=!0)},p(c,[u]){let _=r;r=v(c),r!==_&&(N(),d(a[_],1,1,()=>{a[_]=null}),j(),e=a[r],e||(e=a[r]=f[r](c),e.c()),m(e,1),e.m(t,null)),(!l||u&5&&o!==(o=`group/button flex items-center rounded-lg border-2 ${c[0]==="success"?"border-success/75 hover:border-success":c[0]==="error"?"border-error/75 hover:border-error":"border-neutral-content/75 hover:border-neutral"} px-3 py-2 transition-all  ${c[2].class}`))&&b(t,"class",o)},i(c){l||(m(e),l=!0)},o(c){d(e),l=!1},d(c){c&&C(t),a[r].d(),n=!1,i()}}}function P(s,t,r){let{target:e}=t,{state:o="copy"}=t;function l(){if(!e){console.error("no target provided.");return}navigator.clipboard.writeText(e.textContent??"").then(()=>{r(0,o="success"),console.log("success"),setTimeout(()=>r(0,o="copy"),2e3)}).catch(n=>{r(0,o="error"),console.error("Failed to copy text: ",n)})}return s.$$set=n=>{r(2,t=$($({},t),w(n))),"target"in n&&r(3,e=n.target),"state"in n&&r(0,o=n.state)},t=w(t),[o,l,t,e]}class Q extends E{constructor(t){super(),S(this,t,P,K,T,{target:3,state:0})}}function R(s){let t;const r=s[1].default,e=X(r,s,s[0],null);return{c(){e&&e.c()},l(o){e&&e.l(o)},m(o,l){e&&e.m(o,l),t=!0},p(o,[l]){e&&e.p&&(!t||l&1)&&q(e,r,o,o[0],t?I(r,o[0],l,null):F(o[0]),null)},i(o){t||(m(e,o),t=!0)},o(o){d(e,o),t=!1},d(o){e&&e.d(o)}}}function V(s,t,r){let{$$slots:e={},$$scope:o}=t;function l(){console.log("Adding copy button to code blocks!");const n=document.querySelectorAll("pre.shiki");Array.from(n).forEach(i=>{const f=i.nextElementSibling;if(!f||f.classList.contains("code-copy-target")===!1)return;const a=i.firstElementChild;a&&new Q({target:i,anchor:a,props:{target:f,class:"absolute top-2 right-2"}})})}return L(l),s.$$set=n=>{"$$scope"in n&&r(0,o=n.$$scope)},[o,e]}class re extends E{constructor(t){super(),S(this,t,V,R,T,{})}}export{re as M};