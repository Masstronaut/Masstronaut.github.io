import{n as f,p as q,r as w,s as m,q as x}from"./scheduler.x9KQS67X.js";const a=[];function z(e,i){return{subscribe:A(e,i).subscribe}}function A(e,i=f){let n;const r=new Set;function u(t){if(m(e,t)&&(e=t,n)){const o=!a.length;for(const s of r)s[1](),a.push(s,e);if(o){for(let s=0;s<a.length;s+=2)a[s][0](a[s+1]);a.length=0}}}function l(t){u(t(e))}function b(t,o=f){const s=[t,o];return r.add(s),r.size===1&&(n=i(u,l)||f),t(e),()=>{r.delete(s),r.size===0&&n&&(n(),n=null)}}return{set:u,update:l,subscribe:b}}function E(e,i,n){const r=!Array.isArray(e),u=r?[e]:e;if(!u.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const l=i.length<2;return z(n,(b,t)=>{let o=!1;const s=[];let p=0,d=f;const h=()=>{if(p)return;d();const c=i(r?s[0]:s,b,t);l?b(c):d=x(c)?c:f},y=u.map((c,g)=>q(c,_=>{s[g]=_,p&=~(1<<g),o&&h()},()=>{p|=1<<g}));return o=!0,h(),function(){w(y),d(),o=!1}})}export{E as d,z as r,A as w};
