var $=t=>{throw TypeError(t)};var m=(t,e,s)=>e.has(t)||$("Cannot "+s);var n=(t,e,s)=>(m(t,e,"read from private field"),s?s.call(t):e.get(t)),h=(t,e,s)=>e.has(t)?$("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),_=(t,e,s,c)=>(m(t,e,"write to private field"),c?c.call(t,s):e.set(t,s),s);import{a6 as d,l as g,b,P as v,a7 as x,a8 as R,M as y,a9 as P,aa as k,R as C,K as Y,ab as M,ac as O,ad as j,ae as w}from"./_9pnLWT9.js";import{h as A,m as B,u as D}from"./CHUXHOPN.js";function G(t){return class extends E{constructor(e){super({component:t,...e})}}}var i,u;class E{constructor(e){h(this,i);h(this,u);var l;var s=new Map,c=(r,a)=>{var o=C(a);return s.set(r,o),o};const f=new Proxy({...e.props||{},$$events:{}},{get(r,a){return y(s.get(a)??c(a,Reflect.get(r,a)))},has(r,a){return a===R?!0:(y(s.get(a)??c(a,Reflect.get(r,a))),Reflect.has(r,a))},set(r,a,o){return x(s.get(a)??c(a,o),o),Reflect.set(r,a,o)}});_(this,u,(e.hydrate?A:B)(e.component,{target:e.target,anchor:e.anchor,props:f,context:e.context,intro:e.intro??!1,recover:e.recover})),(!((l=e==null?void 0:e.props)!=null&&l.$$host)||e.sync===!1)&&P(),_(this,i,f.$$events);for(const r of Object.keys(n(this,u)))r==="$set"||r==="$destroy"||r==="$on"||k(this,r,{get(){return n(this,u)[r]},set(a){n(this,u)[r]=a},enumerable:!0});n(this,u).$set=r=>{Object.assign(f,r)},n(this,u).$destroy=()=>{D(n(this,u))}}$set(e){n(this,u).$set(e)}$on(e,s){n(this,i)[e]=n(this,i)[e]||[];const c=(...f)=>s.call(this,...f);return n(this,i)[e].push(c),()=>{n(this,i)[e]=n(this,i)[e].filter(f=>f!==c)}}$destroy(){n(this,u).$destroy()}}i=new WeakMap,u=new WeakMap;function K(t){d(()=>{t();var e=Y;(e.f&M)!==0&&(O(),j(e,w))})}function L(){const t=b;return t===null&&g(),e=>s=>{var f;const c=(f=t.s.$$events)==null?void 0:f[e];if(c){const l=v(c)?c.slice():[c];for(const r of l)r.call(t.x,s);return!s.defaultPrevented}return!0}}export{G as a,L as c,K as r};
