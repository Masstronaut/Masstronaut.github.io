var t=Object.defineProperty,e=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,l=(e,s,a)=>s in e?t(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a,o=(t,e)=>{for(var s in e||(e={}))n.call(e,s)&&l(t,s,e[s]);if(a)for(var s of a(e))r.call(e,s)&&l(t,s,e[s]);return t};import{S as c,i,s as m,e as d,t as u,c as h,g as p,f,I as v,d as g,Q as $,b,j as D,m as y,o as j,x as k,u as I,v as E,k as w,O,n as _,a as L,H as N,h as P,w as S,r as H}from"../../chunks/vendor-5e7a9b09.js";import{N as V}from"../../chunks/NoteGrid-12459187.js";function x(t){let e,s,a,n;return{c(){e=d("br"),s=u("Last tended on "),a=u(t[9]),n=u(".")},l(r){e=h(r,"BR",{}),s=p(r,"Last tended on "),a=p(r,t[9]),n=p(r,".")},m(t,r){f(t,e,r),f(t,s,r),f(t,a,r),f(t,n,r)},p:v,d(t){t&&g(e),t&&g(s),t&&g(a),t&&g(n)}}}function A(t){let e,s;return{c(){e=d("img"),this.h()},l(t){e=h(t,"IMG",{src:!0,class:!0,alt:!0}),this.h()},h(){$(e.src,s=`/blog/${t[3]}`)||b(e,"src",s),b(e,"class","full-bleed"),b(e,"alt","Banner")},m(t,s){f(t,e,s)},p(t,a){8&a&&!$(e.src,s=`/blog/${t[3]}`)&&b(e,"src",s)},d(t){t&&g(e)}}}function M(t){let e,s;return e=new V({props:{notes:t[7],title:"Linked notes"}}),{c(){D(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,a){j(e,t,a),s=!0},p(t,s){const a={};128&s&&(a.notes=t[7]),e.$set(a)},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){I(e.$$.fragment,t),s=!1},d(t){E(e,t)}}}function B(t){let e,s,a,n,r,l,o,c,i,m,v,$,D,y,j,E,V,B,G,R,T,U=`${t[5]} ${t[6]}`;document.title=e=t[0]+" - Allan Deutsch";let q=t[2]&&t[2]!==t[1]&&x(t),Q=t[3]&&A(t),z=t[7].length&&M(t);return{c(){s=w(),a=d("div"),n=d("header"),r=d("h1"),l=u(t[0]),o=w(),c=d("div"),i=d("div"),m=u("🌱 Planted on "),v=u(t[8]),$=u(".\n\t\t\t\t"),q&&q.c(),D=w(),y=d("div"),j=u(U),V=w(),Q&&Q.c(),B=w(),G=d("div"),R=w(),z&&z.c(),this.h()},l(e){O('[data-svelte="svelte-1kysq9p"]',document.head).forEach(g),s=_(e),a=h(e,"DIV",{class:!0});var d=L(a);n=h(d,"HEADER",{class:!0});var u=L(n);r=h(u,"H1",{class:!0});var f=L(r);l=p(f,t[0]),f.forEach(g),o=_(u),c=h(u,"DIV",{class:!0});var b=L(c);i=h(b,"DIV",{class:!0});var k=L(i);m=p(k,"🌱 Planted on "),v=p(k,t[8]),$=p(k,".\n\t\t\t\t"),q&&q.l(k),k.forEach(g),D=_(b),y=h(b,"DIV",{class:!0});var I=L(y);j=p(I,U),I.forEach(g),b.forEach(g),u.forEach(g),V=_(d),Q&&Q.l(d),B=_(d),G=h(d,"DIV",{class:!0}),L(G).forEach(g),R=_(d),z&&z.l(d),d.forEach(g),this.h()},h(){b(r,"class","title svelte-nm7rr"),b(i,"class","date svelte-nm7rr"),b(y,"class",E="note__status "+t[5]+" svelte-nm7rr"),b(c,"class","note__metadata svelte-nm7rr"),b(n,"class","svelte-nm7rr"),b(G,"class","note__content svelte-nm7rr"),b(a,"class","note__container svelte-nm7rr")},m(e,d){f(e,s,d),f(e,a,d),N(a,n),N(n,r),N(r,l),N(n,o),N(n,c),N(c,i),N(i,m),N(i,v),N(i,$),q&&q.m(i,null),N(c,D),N(c,y),N(y,j),N(a,V),Q&&Q.m(a,null),N(a,B),N(a,G),G.innerHTML=t[4],N(a,R),z&&z.m(a,null),T=!0},p(t,[s]){(!T||1&s)&&e!==(e=t[0]+" - Allan Deutsch")&&(document.title=e),(!T||1&s)&&P(l,t[0]),t[2]&&t[2]!==t[1]?q?q.p(t,s):(q=x(t),q.c(),q.m(i,null)):q&&(q.d(1),q=null),(!T||96&s)&&U!==(U=`${t[5]} ${t[6]}`)&&P(j,U),(!T||32&s&&E!==(E="note__status "+t[5]+" svelte-nm7rr"))&&b(y,"class",E),t[3]?Q?Q.p(t,s):(Q=A(t),Q.c(),Q.m(a,B)):Q&&(Q.d(1),Q=null),(!T||16&s)&&(G.innerHTML=t[4]),t[7].length?z?(z.p(t,s),128&s&&k(z,1)):(z=M(t),z.c(),k(z,1),z.m(a,null)):z&&(H(),I(z,1,1,(()=>{z=null})),S())},i(t){T||(k(z),T=!0)},o(t){I(z),T=!1},d(t){t&&g(s),t&&g(a),q&&q.d(),Q&&Q.d(),z&&z.d()}}}async function G({fetch:t,page:a}){const n=await t(`/notes/${a.params.slug}.json`).then((t=>t.json())),r=[];for(const e in n.internalLinks){const s=await t(`${n.internalLinks[e]}-card.json`).then((t=>t.json()));r.push(s)}return{props:(l=o({},n),c={linkedNotes:r},e(l,s(c)))};var l,c}function R(t,e,s){let{title:a}=e,{date:n}=e,{lastmod:r}=e,{image:l}=e,{html:o}=e,{status:c}=e,{statusIcon:i}=e,{linkedNotes:m}=e,d=new Date(Date.parse(n)).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});const u=new Date(Date.parse(r)).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return t.$$set=t=>{"title"in t&&s(0,a=t.title),"date"in t&&s(1,n=t.date),"lastmod"in t&&s(2,r=t.lastmod),"image"in t&&s(3,l=t.image),"html"in t&&s(4,o=t.html),"status"in t&&s(5,c=t.status),"statusIcon"in t&&s(6,i=t.statusIcon),"linkedNotes"in t&&s(7,m=t.linkedNotes)},[a,n,r,l,o,c,i,m,d,u]}class T extends c{constructor(t){super(),i(this,t,R,B,m,{title:0,date:1,lastmod:2,image:3,html:4,status:5,statusIcon:6,linkedNotes:7})}}export{T as default,G as load};
