import{S as L,i as O,s as Q,e as a,k as P,t as $,x as U,P as V,c as s,d as o,m as j,a as k,h as x,y as X,b as t,J as e,g as J,z as Y,r as Z,p as tt,C as et}from"../../chunks/index-60c6c23d.js";import{N as nt}from"../../chunks/NoteGrid-de868da7.js";function ot(f){let l,u,p,i,_,A,w,E,v,T,b,D,c,g,q,C,M,H,S,m,z,h,F,G,I,y,W;return y=new nt({props:{notes:f[0],title:"Notes",showFilters:!0}}),{c(){l=a("meta"),u=a("meta"),p=a("meta"),i=a("meta"),_=a("meta"),A=a("meta"),w=a("meta"),E=a("meta"),v=a("meta"),T=a("meta"),b=a("meta"),D=P(),c=a("header"),g=a("h1"),q=$("Allan's notes"),C=P(),M=a("p"),H=$(`These are my notes. I use them to think and learn in public. What if it were possible to upload
		and download knowledge?`),S=P(),m=a("p"),z=$(`Want to discuss them with me? I'd love to hear from you
		`),h=a("a"),F=$("@AllanDeutsch"),G=$("."),I=P(),U(y.$$.fragment),this.h()},l(n){const r=V('[data-svelte="svelte-16xbawl"]',document.head);l=s(r,"META",{property:!0,content:!0}),u=s(r,"META",{property:!0,content:!0}),p=s(r,"META",{property:!0,content:!0}),i=s(r,"META",{property:!0,content:!0}),_=s(r,"META",{property:!0,content:!0}),A=s(r,"META",{property:!0,content:!0}),w=s(r,"META",{property:!0,content:!0}),E=s(r,"META",{property:!0,content:!0}),v=s(r,"META",{property:!0,content:!0}),T=s(r,"META",{property:!0,content:!0}),b=s(r,"META",{property:!0,content:!0}),r.forEach(o),D=j(n),c=s(n,"HEADER",{class:!0});var d=k(c);g=s(d,"H1",{class:!0});var R=k(g);q=x(R,"Allan's notes"),R.forEach(o),C=j(d),M=s(d,"P",{class:!0});var B=k(M);H=x(B,`These are my notes. I use them to think and learn in public. What if it were possible to upload
		and download knowledge?`),B.forEach(o),S=j(d),m=s(d,"P",{class:!0});var N=k(m);z=x(N,`Want to discuss them with me? I'd love to hear from you
		`),h=s(N,"A",{href:!0,alt:!0,class:!0});var K=k(h);F=x(K,"@AllanDeutsch"),K.forEach(o),G=x(N,"."),N.forEach(o),d.forEach(o),I=j(n),X(y.$$.fragment,n),this.h()},h(){document.title="Allan's notes",t(l,"property","description"),t(l,"content",`These are my notes. I use them to think and learn in public. What if it were possible to upload
		and download knowledge?`),t(u,"property","og:type"),t(u,"content","article"),t(p,"property","og:url"),t(p,"content","https://allandeutsch.com"),t(i,"property","og:title"),t(i,"content","Allan's notes"),t(_,"property","og:description"),t(_,"content","A collection of my public notes."),t(A,"property","twitter:card"),t(A,"content","summary"),t(w,"property","twitter:url"),t(w,"content","https://allandeutsch.com"),t(E,"property","twitter:title"),t(E,"content","Allan's notes"),t(v,"property","twitter:description"),t(v,"content","A collection of my public notes."),t(T,"property","twitter:site"),t(T,"content","@AllanDeutsch"),t(b,"property","twitter:creator"),t(b,"content","@AllanDeutsch"),t(g,"class","svelte-18d2l47"),t(M,"class","about svelte-18d2l47"),t(h,"href","https://twitter.com/AllanDeutsch"),t(h,"alt","Allan Deutsch on Twitter"),t(h,"class","svelte-18d2l47"),t(m,"class","about svelte-18d2l47"),t(c,"class","svelte-18d2l47")},m(n,r){e(document.head,l),e(document.head,u),e(document.head,p),e(document.head,i),e(document.head,_),e(document.head,A),e(document.head,w),e(document.head,E),e(document.head,v),e(document.head,T),e(document.head,b),J(n,D,r),J(n,c,r),e(c,g),e(g,q),e(c,C),e(c,M),e(M,H),e(c,S),e(c,m),e(m,z),e(m,h),e(h,F),e(m,G),J(n,I,r),Y(y,n,r),W=!0},p(n,[r]){const d={};r&1&&(d.notes=n[0]),y.$set(d)},i(n){W||(Z(y.$$.fragment,n),W=!0)},o(n){tt(y.$$.fragment,n),W=!1},d(n){o(l),o(u),o(p),o(i),o(_),o(A),o(w),o(E),o(v),o(T),o(b),n&&o(D),n&&o(c),n&&o(I),et(y,n)}}}const lt=!0;async function ct({fetch:f}){return{props:{notes:await f("/notes/notes.json").then(u=>u.json())}}}function rt(f,l,u){let{notes:p}=l;return f.$$set=i=>{"notes"in i&&u(0,p=i.notes)},[p]}class ut extends L{constructor(l){super(),O(this,l,rt,ot,Q,{notes:0})}}export{ut as default,ct as load,lt as prerender};
