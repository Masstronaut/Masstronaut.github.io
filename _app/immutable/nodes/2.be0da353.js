import{s as S,r as U,f as b,a as w,g as v,h as y,d as h,c as k,j as g,i as j,v as p,w as z,x as L,y as N,z as O,H as P,l as W,m as q}from"../chunks/scheduler.7dca22b3.js";import{S as A,i as B,a as d,c as C,t as $,b as D,d as M,m as T,e as V,g as F}from"../chunks/index.4240f835.js";import{e as E}from"../chunks/each.2ab70194.js";import{p as G}from"../chunks/stores.fcee9fc4.js";import{I as J,H as K,U as Q,N as R}from"../chunks/index.f98022c6.js";const X=!1,oe=Object.freeze(Object.defineProperty({__proto__:null,prerender:X},Symbol.toStringTag,{value:"Module"}));function H(r,l,o){const n=r.slice();return n[4]=l[o],n}function I(r){var i;let l,o,n,u,c=r[4].name+"",s,f,_;return n=new J({props:{class:"h-5 w-5 stroke-2",src:r[4].icon,theme:(i=r[0].route.id)!=null&&i.endsWith(r[4].path)?"solid":"outline"}}),{c(){l=b("li"),o=b("a"),D(n.$$.fragment),u=w(),s=W(c),f=w(),this.h()},l(e){l=v(e,"LI",{});var a=y(l);o=v(a,"A",{href:!0,class:!0,"data-tip":!0});var t=y(o);M(n.$$.fragment,t),u=k(t),s=q(t,c),t.forEach(h),f=k(a),a.forEach(h),this.h()},h(){g(o,"href",r[4].path),g(o,"class","tooltip flex flex-row items-center align-middle text-lg font-medium"),g(o,"data-tip",r[4].name)},m(e,a){j(e,l,a),p(l,o),T(n,o,null),p(o,u),p(o,s),p(l,f),_=!0},p(e,a){var m;const t={};a&1&&(t.theme=(m=e[0].route.id)!=null&&m.endsWith(e[4].path)?"solid":"outline"),n.$set(t)},i(e){_||(d(n.$$.fragment,e),_=!0)},o(e){$(n.$$.fragment,e),_=!1},d(e){e&&h(l),V(n)}}}function Y(r){let l,o,n,u,c=E(r[1]),s=[];for(let e=0;e<c.length;e+=1)s[e]=I(H(r,c,e));const f=e=>$(s[e],1,1,()=>{s[e]=null}),_=r[3].default,i=U(_,r,r[2],null);return{c(){l=b("div"),o=b("ul");for(let e=0;e<s.length;e+=1)s[e].c();n=w(),i&&i.c(),this.h()},l(e){l=v(e,"DIV",{class:!0});var a=y(l);o=v(a,"UL",{class:!0});var t=y(o);for(let m=0;m<s.length;m+=1)s[m].l(t);t.forEach(h),a.forEach(h),n=k(e),i&&i.l(e),this.h()},h(){g(o,"class","menu rounded-box menu-horizontal mt-6 bg-base-200"),g(l,"class","flex w-full items-center justify-center")},m(e,a){j(e,l,a),p(l,o);for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(o,null);j(e,n,a),i&&i.m(e,a),u=!0},p(e,[a]){if(a&3){c=E(e[1]);let t;for(t=0;t<c.length;t+=1){const m=H(e,c,t);s[t]?(s[t].p(m,a),d(s[t],1)):(s[t]=I(m),s[t].c(),d(s[t],1),s[t].m(o,null))}for(F(),t=c.length;t<s.length;t+=1)f(t);C()}i&&i.p&&(!u||a&4)&&z(i,_,e,e[2],u?N(_,e[2],a,null):L(e[2]),null)},i(e){if(!u){for(let a=0;a<c.length;a+=1)d(s[a]);d(i,e),u=!0}},o(e){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)$(s[a]);$(i,e),u=!1},d(e){e&&(h(l),h(n)),O(s,e),i&&i.d(e)}}}function Z(r,l,o){let n;P(r,G,f=>o(0,n=f));let{$$slots:u={},$$scope:c}=l;const s=[{name:"Home",path:"/admin",icon:K},{name:"Users",path:"/admin/users",icon:Q},{name:"Posts",path:"/admin/posts",icon:R}];return r.$$set=f=>{"$$scope"in f&&o(2,c=f.$$scope)},[n,s,c,u]}class le extends A{constructor(l){super(),B(this,l,Z,Y,S,{})}}export{le as component,oe as universal};
