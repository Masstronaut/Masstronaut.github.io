import{H as re}from"../chunks/control.f5b05b5f.js";import{L as Jt,a as Yt,N as ie}from"../chunks/LoadNote.b1a7277a.js";import{s as ue,q as xt,f as i,a as w,l as N,I as ce,g as u,u as it,d as r,c as $,h as k,m as L,j as t,K as me,M as Et,v as a,i as I,n as te,H as de,A as le}from"../chunks/scheduler.95003110.js";import{S as pe,i as fe,b as Vt,d as oe,m as zt,t as ut,c as ee,a as nt,e as Bt,g as ae}from"../chunks/index.46e80ea9.js";import{p as he}from"../chunks/stores.9fe1577d.js";import"../chunks/paths.54b3aadb.js";function Pt(s,l){return new re(s,l)}new TextEncoder;const _e=async({params:s})=>{let l=await Jt({slug:s.slug});if(!l.success){const o=Yt.find(g=>g.slug===s.slug);if(!o||!o.filename||!o.filename.endsWith(".md"))throw Pt(404,`Could not find the requested note: '${s.slug}'`);const m=await Jt({slug:o.filename.slice(0,-3)});if(!m.success)throw Pt(500,`Could not load note '${s.slug}' with filename '${o.filename}'`);l=m}const d={content:l.content,meta:l.metadata,linkedNotes:[]};if(!l.success)throw Pt(500,`Failed to load note '${s.slug}'.`);if(l.metadata.internalLinks.length===0)return d;const c=l.metadata.internalLinks.map(o=>o.slice(7,-1));return d.linkedNotes=Yt.filter(o=>c.includes(o.slug)),d},Ie=Object.freeze(Object.defineProperty({__proto__:null,load:_e},Symbol.toStringTag,{value:"Module"}));function ne(s){let l,d,c,o;return{c(){l=i("br"),d=N("Last tended "),c=N(s[3]),o=N(".")},l(m){l=u(m,"BR",{}),d=L(m,"Last tended "),c=L(m,s[3]),o=L(m,".")},m(m,g){I(m,l,g),I(m,d,g),I(m,c,g),I(m,o,g)},p:le,d(m){m&&(r(l),r(d),r(c),r(o))}}}function ve(s){let l,d=`${ye} minute read ⏱`,c;return{c(){l=i("div"),c=N(d)},l(o){l=u(o,"DIV",{});var m=k(l);c=L(m,d),m.forEach(r)},m(o,m){I(o,l,m),a(l,c)},p:le,d(o){o&&r(l)}}}function se(s){let l,d;return l=new ie({props:{notes:s[0].linkedNotes,title:"Linked notes",showFilters:!1}}),{c(){Vt(l.$$.fragment)},l(c){oe(l.$$.fragment,c)},m(c,o){zt(l,c,o),d=!0},p(c,o){const m={};o&1&&(m.notes=c[0].linkedNotes),l.$set(m)},i(c){d||(nt(l.$$.fragment,c),d=!0)},o(c){ut(l.$$.fragment,c),d=!1},d(c){Bt(l,c)}}}function ge(s){var Gt;let l,d,c,o,m,g,T,C,V,ct,Q,U,G,z,mt,B,dt,X,Z,R,pt,h,Rt="",qt,ft,y,j,J,st=s[0].meta.title+"",ht,kt,F,A,q,Kt="🌱",At,Dt,It,Tt,S,K,lt=`${s[0].meta.status} ${s[0].meta.statusIcon??""}`,_t,vt,Ct,Mt,Nt,p,gt,ot,Lt,b,O,Ot="Feedback",jt,Y,Wt=`Thanks for reading this, I hope it has helped you in some way. I'd love it
			if you would share your feedback with my by using one of the buttons
			below. It only takes a second, and whether you love it or hate it, the
			feedback helps me write better content in the future!`,Ft,H,yt,St,x,Qt=`If you're feeling extra generous, you can show your support by buying me a
			coffee with the button in the bottom right corner of the page.`,Ht,rt,bt,tt,P,_;document.title=l=s[0].meta.title+" - Allan Deutsch";let v=s[0].meta.lastmod&&s[0].meta.lastmod!==s[0].meta.date&&ne(s),M=ve();var et=s[0].content;function Ut(e,n){return{}}et&&(p=xt(et,Ut()));let f=((Gt=s[0].linkedNotes)==null?void 0:Gt.length)&&se(s);return{c(){d=i("meta"),o=i("meta"),g=i("meta"),T=i("meta"),V=i("meta"),Q=i("meta"),U=i("meta"),G=i("meta"),z=i("meta"),B=i("meta"),X=i("meta"),Z=i("meta"),R=i("link"),h=i("script"),h.innerHTML=Rt,ft=w(),y=i("article"),j=i("header"),J=i("h1"),ht=N(st),kt=w(),F=i("div"),A=i("div"),q=i("span"),q.textContent=Kt,At=N("Planted "),Dt=N(s[2]),It=N(`.
				`),v&&v.c(),Tt=w(),S=i("div"),K=i("div"),_t=N(lt),Ct=w(),M&&M.c(),Mt=w(),Nt=w(),p&&Vt(p.$$.fragment),gt=w(),ot=i("div"),Lt=w(),b=i("aside"),O=i("h2"),O.textContent=Ot,jt=w(),Y=i("p"),Y.textContent=Wt,Ft=w(),H=i("pi-thumb"),St=w(),x=i("p"),x.textContent=Qt,Ht=w(),rt=i("div"),bt=w(),f&&f.c(),tt=w(),P=i("link"),this.h()},l(e){const n=ce("svelte-n5ip0u",document.head);d=u(n,"META",{name:!0,content:!0}),o=u(n,"META",{property:!0,content:!0}),g=u(n,"META",{property:!0,content:!0}),T=u(n,"META",{property:!0,content:!0}),V=u(n,"META",{property:!0,content:!0}),Q=u(n,"META",{property:!0,content:!0}),U=u(n,"META",{property:!0,content:!0}),G=u(n,"META",{property:!0,content:!0}),z=u(n,"META",{property:!0,content:!0}),B=u(n,"META",{property:!0,content:!0}),X=u(n,"META",{property:!0,content:!0}),Z=u(n,"META",{property:!0,content:!0}),R=u(n,"LINK",{rel:!0,href:!0}),h=u(n,"SCRIPT",{"data-name":!0,"data-cfasync":!0,src:!0,"data-id":!0,"data-description":!0,"data-message":!0,"data-color":!0,"data-position":!0,"data-x_margin":!0,"data-y_margin":!0,["data-svelte-h"]:!0}),it(h)!=="svelte-bv2cpr"&&(h.innerHTML=Rt),n.forEach(r),ft=$(e),y=u(e,"ARTICLE",{class:!0});var E=k(y);j=u(E,"HEADER",{class:!0});var W=k(j);J=u(W,"H1",{class:!0});var Xt=k(J);ht=L(Xt,st),Xt.forEach(r),kt=$(W),F=u(W,"DIV",{class:!0});var wt=k(F);A=u(wt,"DIV",{});var at=k(A);q=u(at,"SPAN",{class:!0,["data-svelte-h"]:!0}),it(q)!=="svelte-114jejz"&&(q.textContent=Kt),At=L(at,"Planted "),Dt=L(at,s[2]),It=L(at,`.
				`),v&&v.l(at),at.forEach(r),Tt=$(wt),S=u(wt,"DIV",{class:!0});var $t=k(S);K=u($t,"DIV",{class:!0});var Zt=k(K);_t=L(Zt,lt),Zt.forEach(r),Ct=$($t),M&&M.l($t),$t.forEach(r),wt.forEach(r),W.forEach(r),Mt=$(E),Nt=$(E),p&&oe(p.$$.fragment,E),gt=$(E),ot=u(E,"DIV",{class:!0}),k(ot).forEach(r),Lt=$(E),b=u(E,"ASIDE",{class:!0});var D=k(b);O=u(D,"H2",{class:!0,["data-svelte-h"]:!0}),it(O)!=="svelte-128y7pj"&&(O.textContent=Ot),jt=$(D),Y=u(D,"P",{["data-svelte-h"]:!0}),it(Y)!=="svelte-171xzz7"&&(Y.textContent=Wt),Ft=$(D),H=u(D,"PI-THUMB",{user:!0,path:!0,team:!0}),k(H).forEach(r),St=$(D),x=u(D,"P",{["data-svelte-h"]:!0}),it(x)!=="svelte-s9yh0w"&&(x.textContent=Qt),Ht=$(D),rt=u(D,"DIV",{class:!0}),k(rt).forEach(r),D.forEach(r),E.forEach(r),bt=$(e),f&&f.l(e),tt=$(e),P=u(e,"LINK",{rel:!0,href:!0,integrity:!0,crossorigin:!0}),this.h()},h(){t(d,"name","description"),t(d,"content",c=s[0].meta.description),t(o,"property","og:title"),t(o,"content",m=s[0].meta.title),t(g,"property","og:type"),t(g,"content","article"),t(T,"property","og:url"),t(T,"content",C=`https://allandeutsch.com/notes/${s[1].params.slug}`),t(V,"property","og:description"),t(V,"content",ct=s[0].meta.description),t(Q,"property","og:locale"),t(Q,"content","en_US"),t(U,"property","twitter:card"),t(U,"content","summary"),t(G,"property","twitter:url"),t(G,"content","https://allandeutsch.com"),t(z,"property","twitter:title"),t(z,"content",mt=s[0].meta.title),t(B,"property","twitter:description"),t(B,"content",dt=s[0].meta.description),t(X,"property","twitter:site"),t(X,"content","@AllanDeutsch"),t(Z,"property","twitter:creator"),t(Z,"content","@AllanDeutsch"),t(R,"rel","canonical"),t(R,"href",pt=`https://allandeutsch.com/notes/${s[1].params.slug}`),t(h,"data-name","BMC-Widget"),t(h,"data-cfasync","false"),me(h.src,qt="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js")||t(h,"src",qt),t(h,"data-id","AllanDeutsch"),t(h,"data-description","Support me on Buy me a coffee!"),t(h,"data-message",""),t(h,"data-color","#5F7FFF"),t(h,"data-position","Right"),t(h,"data-x_margin","18"),t(h,"data-y_margin","18"),t(J,"class","mb-8 text-left text-4xl font-bold"),t(q,"class","pr-2"),t(K,"class",vt="note__status "+s[0].meta.status+" svelte-5s1sz1"),t(S,"class","flex flex-col items-end"),t(F,"class","mb-12 mt-4 flex justify-between border-t border-t-neutral border-opacity-20 pt-1 text-xl text-base-content"),t(j,"class","w-full max-w-3xl self-center"),t(ot,"class","divider"),t(O,"class","prose-h2:text-lg"),Et(H,"user","(anonymous)"),Et(H,"path",yt=`notes/${s[1].params.slug}`),Et(H,"team","d6101342-650f-443e-893a-0bcb31bd8da9"),t(rt,"class","divider"),t(b,"class","prose"),t(y,"class","prose mx-auto"),t(P,"rel","stylesheet"),t(P,"href","https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/katex.min.css"),t(P,"integrity","sha384-KiWOvVjnN8qwAZbuQyWDIbfCLFhLXNETzBQjA/92pIowpC0d2O3nppDGQVgwd2nB"),t(P,"crossorigin","anonymous")},m(e,n){a(document.head,d),a(document.head,o),a(document.head,g),a(document.head,T),a(document.head,V),a(document.head,Q),a(document.head,U),a(document.head,G),a(document.head,z),a(document.head,B),a(document.head,X),a(document.head,Z),a(document.head,R),a(document.head,h),I(e,ft,n),I(e,y,n),a(y,j),a(j,J),a(J,ht),a(j,kt),a(j,F),a(F,A),a(A,q),a(A,At),a(A,Dt),a(A,It),v&&v.m(A,null),a(F,Tt),a(F,S),a(S,K),a(K,_t),a(S,Ct),M&&M.m(S,null),a(y,Mt),a(y,Nt),p&&zt(p,y,null),a(y,gt),a(y,ot),a(y,Lt),a(y,b),a(b,O),a(b,jt),a(b,Y),a(b,Ft),a(b,H),a(b,St),a(b,x),a(b,Ht),a(b,rt),I(e,bt,n),f&&f.m(e,n),I(e,tt,n),I(e,P,n),_=!0},p(e,[n]){var E;if((!_||n&1)&&l!==(l=e[0].meta.title+" - Allan Deutsch")&&(document.title=l),(!_||n&1&&c!==(c=e[0].meta.description))&&t(d,"content",c),(!_||n&1&&m!==(m=e[0].meta.title))&&t(o,"content",m),(!_||n&2&&C!==(C=`https://allandeutsch.com/notes/${e[1].params.slug}`))&&t(T,"content",C),(!_||n&1&&ct!==(ct=e[0].meta.description))&&t(V,"content",ct),(!_||n&1&&mt!==(mt=e[0].meta.title))&&t(z,"content",mt),(!_||n&1&&dt!==(dt=e[0].meta.description))&&t(B,"content",dt),(!_||n&2&&pt!==(pt=`https://allandeutsch.com/notes/${e[1].params.slug}`))&&t(R,"href",pt),(!_||n&1)&&st!==(st=e[0].meta.title+"")&&te(ht,st),e[0].meta.lastmod&&e[0].meta.lastmod!==e[0].meta.date?v?v.p(e,n):(v=ne(e),v.c(),v.m(A,null)):v&&(v.d(1),v=null),(!_||n&1)&&lt!==(lt=`${e[0].meta.status} ${e[0].meta.statusIcon??""}`)&&te(_t,lt),(!_||n&1&&vt!==(vt="note__status "+e[0].meta.status+" svelte-5s1sz1"))&&t(K,"class",vt),M.p(e,n),n&1&&et!==(et=e[0].content)){if(p){ae();const W=p;ut(W.$$.fragment,1,0,()=>{Bt(W,1)}),ee()}et?(p=xt(et,Ut()),Vt(p.$$.fragment),nt(p.$$.fragment,1),zt(p,y,gt)):p=null}(!_||n&2&&yt!==(yt=`notes/${e[1].params.slug}`))&&Et(H,"path",yt),(E=e[0].linkedNotes)!=null&&E.length?f?(f.p(e,n),n&1&&nt(f,1)):(f=se(e),f.c(),nt(f,1),f.m(tt.parentNode,tt)):f&&(ae(),ut(f,1,1,()=>{f=null}),ee())},i(e){_||(p&&nt(p.$$.fragment,e),nt(f),_=!0)},o(e){p&&ut(p.$$.fragment,e),ut(f),_=!1},d(e){e&&(r(ft),r(y),r(bt),r(tt),r(P)),r(d),r(o),r(g),r(T),r(V),r(Q),r(U),r(G),r(z),r(B),r(X),r(Z),r(R),r(h),v&&v.d(),M&&M.d(),p&&Bt(p),f&&f.d(e)}}}const ye=1;function be(s,l,d){let c;de(s,he,C=>d(1,c=C));let{data:o}=l;const m=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric"}),g=m.format(new Date(Date.parse(o.meta.date))),T=m.format(new Date(Date.parse(o.meta.lastmod)));return s.$$set=C=>{"data"in C&&d(0,o=C.data)},[o,c,g,T]}class Te extends pe{constructor(l){super(),fe(this,l,be,ge,ue,{data:0})}}export{Te as component,Ie as universal};