import{a as N}from"../chunks/LoadNote.f56969d4.js";import{s as S,f as y,a as u,e as P,J as j,g as C,d as n,c as p,u as $,j as d,v as L,i as l}from"../chunks/scheduler.7131e7f1.js";import{S as z,i as D,b as E,d as F,m as O,a as k,t as A,e as G}from"../chunks/index.9e889c2d.js";import"../chunks/paths.9c6002a8.js";import{N as X}from"../chunks/NoteGrid.95cdc426.js";const q=async()=>({notes:(await N).slice(0,12)}),V=Object.freeze(Object.defineProperty({__proto__:null,load:q},Symbol.toStringTag,{value:"Module"}));function J(f){let s,c,a,m="Allan Deutsch",_,o,T=`Learning to think & build in public. Excited about tools for thinking and
	augmenting human capabilities.`,h,i,w='Currently head of product &amp; engineering <a href="https://twitter.com/grabbitNFT" target="_blank">@GrabbitNFT</a>. Previously product at Microsoft PlayFab, Xbox Live, and Xbox.',b,r,x,g,v;r=new X({props:{notes:f[0].notes,title:"Recent notes"}});let H=R;return{c(){s=y("meta"),c=u(),a=y("h1"),a.textContent=m,_=u(),o=y("p"),o.textContent=T,h=u(),i=y("p"),i.innerHTML=w,b=u(),E(r.$$.fragment),x=u(),g=P(),this.h()},l(t){const e=j("svelte-w3zm17",document.head);s=C(e,"META",{name:!0,content:!0}),e.forEach(n),c=p(t),a=C(t,"H1",{class:!0,"data-svelte-h":!0}),$(a)!=="svelte-tg5fa3"&&(a.textContent=m),_=p(t),o=C(t,"P",{class:!0,"data-svelte-h":!0}),$(o)!=="svelte-ch9s9b"&&(o.textContent=T),h=p(t),i=C(t,"P",{class:!0,"data-svelte-h":!0}),$(i)!=="svelte-3z9fej"&&(i.innerHTML=w),b=p(t),F(r.$$.fragment,t),x=p(t),g=P(),this.h()},h(){document.title="Allan Deutsch | Homepage",d(s,"name","description"),d(s,"content","Allan Deutsch"),d(a,"class","my-6 text-8xl font-bold"),d(o,"class","max-w-[45ch] pt-7 text-4xl leading-normal"),d(i,"class","max-w-[45ch] pt-7 text-4xl leading-normal")},m(t,e){L(document.head,s),l(t,c,e),l(t,a,e),l(t,_,e),l(t,o,e),l(t,h,e),l(t,i,e),l(t,b,e),O(r,t,e),l(t,x,e),l(t,g,e),v=!0},p(t,[e]){const M={};e&1&&(M.notes=t[0].notes),r.$set(M)},i(t){v||(k(r.$$.fragment,t),k(H),v=!0)},o(t){A(r.$$.fragment,t),A(H),v=!1},d(t){t&&(n(c),n(a),n(_),n(o),n(h),n(i),n(b),n(x),n(g)),n(s),G(r,t)}}}const R=!1;function U(f,s,c){let{data:a}=s;return f.$$set=m=>{"data"in m&&c(0,a=m.data)},[a]}class Y extends z{constructor(s){super(),D(this,s,U,J,S,{data:0})}}export{Y as component,V as universal};