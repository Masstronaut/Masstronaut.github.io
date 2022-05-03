import{S as V,i as B,s as F,e as r,k as $,t as q,x as K,P as O,c as s,d as n,m as S,a as M,h as H,y as Q,b as t,J as o,g as P,z as U,r as W,p as X,C as Y}from"../chunks/index-60c6c23d.js";import{N as Z}from"../chunks/NoteGrid-de868da7.js";function tt(f){let i,c,u,p,y,g,_,b,v,E,k,l,A,L,C,w,N,I,x,j,T,h,m,D;return m=new Z({props:{notes:f[0].slice(0,10),title:"Latest notes"}}),{c(){i=r("meta"),c=r("meta"),u=r("meta"),p=r("meta"),y=r("meta"),g=r("meta"),_=r("meta"),b=r("meta"),v=r("meta"),E=r("meta"),k=$(),l=r("header"),A=r("h1"),L=q("Allan Deutsch"),C=$(),w=r("p"),N=q(`Learning to think & build in public. Excited about tools for thinking and augmenting human
		capabilities.`),I=$(),x=r("p"),j=q(`Currently building something new in the web3 space @Ikigaitech. Previously product @Microsoft
		building SaaS and PaaS solutions for game developers.`),T=$(),h=r("div"),K(m.$$.fragment),this.h()},l(e){const a=O('[data-svelte="svelte-164dhkf"]',document.head);i=s(a,"META",{property:!0,content:!0}),c=s(a,"META",{property:!0,content:!0}),u=s(a,"META",{property:!0,content:!0}),p=s(a,"META",{property:!0,content:!0}),y=s(a,"META",{property:!0,content:!0}),g=s(a,"META",{property:!0,content:!0}),_=s(a,"META",{property:!0,content:!0}),b=s(a,"META",{property:!0,content:!0}),v=s(a,"META",{property:!0,content:!0}),E=s(a,"META",{property:!0,content:!0}),a.forEach(n),k=S(e),l=s(e,"HEADER",{class:!0});var d=M(l);A=s(d,"H1",{class:!0});var R=M(A);L=H(R,"Allan Deutsch"),R.forEach(n),C=S(d),w=s(d,"P",{class:!0});var z=M(w);N=H(z,`Learning to think & build in public. Excited about tools for thinking and augmenting human
		capabilities.`),z.forEach(n),I=S(d),x=s(d,"P",{class:!0});var G=M(x);j=H(G,`Currently building something new in the web3 space @Ikigaitech. Previously product @Microsoft
		building SaaS and PaaS solutions for game developers.`),G.forEach(n),d.forEach(n),T=S(e),h=s(e,"DIV",{class:!0});var J=M(h);Q(m.$$.fragment,J),J.forEach(n),this.h()},h(){document.title="Allan Deutsch",t(i,"property","og:type"),t(i,"content","website"),t(c,"property","og:url"),t(c,"content","https://allandeutsch.com"),t(u,"property","og:title"),t(u,"content","Allan Deutsch"),t(p,"property","og:description"),t(p,"content","Learning, thinking, and building in public. Notes on product, technology, and business."),t(y,"property","twitter:card"),t(y,"content","summary"),t(g,"property","twitter:url"),t(g,"content","https://allandeutsch.com"),t(_,"property","twitter:title"),t(_,"content","Allan Deutsch"),t(b,"property","twitter:description"),t(b,"content","Learning, thinking, and building in public. Notes on product, technology, and business."),t(v,"property","twitter:site"),t(v,"content","@AllanDeutsch"),t(E,"property","twitter:creator"),t(E,"content","@AllanDeutsch"),t(A,"class","svelte-fxnacm"),t(w,"class","about svelte-fxnacm"),t(x,"class","about svelte-fxnacm"),t(l,"class","svelte-fxnacm"),t(h,"class","garden")},m(e,a){o(document.head,i),o(document.head,c),o(document.head,u),o(document.head,p),o(document.head,y),o(document.head,g),o(document.head,_),o(document.head,b),o(document.head,v),o(document.head,E),P(e,k,a),P(e,l,a),o(l,A),o(A,L),o(l,C),o(l,w),o(w,N),o(l,I),o(l,x),o(x,j),P(e,T,a),P(e,h,a),U(m,h,null),D=!0},p(e,[a]){const d={};a&1&&(d.notes=e[0].slice(0,10)),m.$set(d)},i(e){D||(W(m.$$.fragment,e),D=!0)},o(e){X(m.$$.fragment,e),D=!1},d(e){n(i),n(c),n(u),n(p),n(y),n(g),n(_),n(b),n(v),n(E),e&&n(k),e&&n(l),e&&n(T),e&&n(h),Y(m)}}}const ot=!0;async function rt({fetch:f}){return{props:{notes:await f("/notes/notes.json").then(c=>c.json())}}}function et(f,i,c){let{notes:u}=i;return f.$$set=p=>{"notes"in p&&c(0,u=p.notes)},[u]}class st extends V{constructor(i){super(),B(this,i,et,tt,F,{notes:0})}}export{st as default,rt as load,ot as prerender};
