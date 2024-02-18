import{H as ie}from"../chunks/control.f5b05b5f.js";import{L as Yt,a as xt,N as ue}from"../chunks/LoadNote.affca68f.js";import{s as ce,q as te,f as i,a as w,l as H,I as me,g as u,u as st,d as r,c as $,h as k,m as P,j as t,K as de,M as kt,v as a,i as D,n as ee,H as pe,A as oe}from"../chunks/scheduler.95003110.js";import{S as fe,i as he,b as Vt,d as re,m as Bt,t as ct,c as ae,a as lt,e as zt,g as ne}from"../chunks/index.46e80ea9.js";import{p as _e}from"../chunks/stores.eb2b808a.js";import"../chunks/paths.80065c7e.js";function Pt(s,l){return new ie(s,l)}new TextEncoder;const ve=async({params:s})=>{let l=await Yt({slug:s.slug});if(!l.success){const o=xt.find(g=>g.slug===s.slug);if(!o||!o.filename||!o.filename.endsWith(".md"))throw Pt(404,`Could not find the requested note: '${s.slug}'`);const m=await Yt({slug:o.filename.slice(0,-3)});if(!m.success)throw Pt(500,`Could not load note '${s.slug}' with filename '${o.filename}'`);l=m}const d={content:l.content,meta:l.metadata,linkedNotes:[]};if(!l.success)throw Pt(500,`Failed to load note '${s.slug}'.`);if(l.metadata.internalLinks.length===0)return d;const c=l.metadata.internalLinks.map(o=>o.slice(7,-1));return d.linkedNotes=xt.filter(o=>c.includes(o.slug)),d},Ie=Object.freeze(Object.defineProperty({__proto__:null,load:ve},Symbol.toStringTag,{value:"Module"}));function se(s){let l,d,c,o;return{c(){l=i("br"),d=H("Last tended "),c=H(s[3]),o=H(".")},l(m){l=u(m,"BR",{}),d=P(m,"Last tended "),c=P(m,s[3]),o=P(m,".")},m(m,g){D(m,l,g),D(m,d,g),D(m,c,g),D(m,o,g)},p:oe,d(m){m&&(r(l),r(d),r(c),r(o))}}}function ge(s){let l,d=`${be} minute read ⏱`,c;return{c(){l=i("div"),c=H(d)},l(o){l=u(o,"DIV",{});var m=k(l);c=P(m,d),m.forEach(r)},m(o,m){D(o,l,m),a(l,c)},p:oe,d(o){o&&r(l)}}}function le(s){let l,d;return l=new ue({props:{notes:s[0].linkedNotes,title:"Linked notes",showFilters:!1}}),{c(){Vt(l.$$.fragment)},l(c){re(l.$$.fragment,c)},m(c,o){Bt(l,c,o),d=!0},p(c,o){const m={};o&1&&(m.notes=c[0].linkedNotes),l.$set(m)},i(c){d||(lt(l.$$.fragment,c),d=!0)},o(c){ct(l.$$.fragment,c),d=!1},d(c){zt(l,c)}}}function ye(s){var Xt;let l,d,c,o,m,g,I,T,V,mt,U,G,X,B,dt,z,pt,Z,J,R,ft,h,Rt="",qt,ht,y,N,Y,ot=s[0].meta.title+"",_t,At,j,A,q,Kt="🌱",K,Ot=`Planted
				`,Ct,Dt,It,L,O,rt=`${s[0].meta.status} ${s[0].meta.statusIcon??""}`,vt,gt,Tt,Mt,Nt,p,yt,it,jt,b,W,Wt="Feedback",Lt,x,Qt=`Thanks for reading this, I hope it has helped you in some way. I'd love it
			if you would share your feedback with my by using one of the buttons
			below. It only takes a second, and whether you love it or hate it, the
			feedback helps me write better content in the future!`,Ft,F,bt,St,tt,Ut=`If you're feeling extra generous, you can show your support by buying me a
			coffee with the button in the bottom right corner of the page.`,Ht,ut,wt,et,S,_;document.title=l=s[0].meta.title+" - Allan Deutsch";let v=s[0].meta.lastmod&&s[0].meta.lastmod!==s[0].meta.date&&se(s),M=ge();var at=s[0].content;function Gt(e,n){return{}}at&&(p=te(at,Gt()));let f=((Xt=s[0].linkedNotes)==null?void 0:Xt.length)&&le(s);return{c(){d=i("meta"),o=i("meta"),g=i("meta"),I=i("meta"),V=i("meta"),U=i("meta"),G=i("meta"),X=i("meta"),B=i("meta"),z=i("meta"),Z=i("meta"),J=i("meta"),R=i("link"),h=i("script"),h.innerHTML=Rt,ht=w(),y=i("article"),N=i("header"),Y=i("h1"),_t=H(ot),At=w(),j=i("div"),A=i("div"),q=i("span"),q.textContent=Kt,K=i("span"),K.textContent=Ot,Ct=H(s[2]),Dt=H(`.
				`),v&&v.c(),It=w(),L=i("div"),O=i("div"),vt=H(rt),Tt=w(),M&&M.c(),Mt=w(),Nt=w(),p&&Vt(p.$$.fragment),yt=w(),it=i("div"),jt=w(),b=i("aside"),W=i("h2"),W.textContent=Wt,Lt=w(),x=i("p"),x.textContent=Qt,Ft=w(),F=i("pi-thumb"),St=w(),tt=i("p"),tt.textContent=Ut,Ht=w(),ut=i("div"),wt=w(),f&&f.c(),et=w(),S=i("link"),this.h()},l(e){const n=me("svelte-n5ip0u",document.head);d=u(n,"META",{name:!0,content:!0}),o=u(n,"META",{property:!0,content:!0}),g=u(n,"META",{property:!0,content:!0}),I=u(n,"META",{property:!0,content:!0}),V=u(n,"META",{property:!0,content:!0}),U=u(n,"META",{property:!0,content:!0}),G=u(n,"META",{property:!0,content:!0}),X=u(n,"META",{property:!0,content:!0}),B=u(n,"META",{property:!0,content:!0}),z=u(n,"META",{property:!0,content:!0}),Z=u(n,"META",{property:!0,content:!0}),J=u(n,"META",{property:!0,content:!0}),R=u(n,"LINK",{rel:!0,href:!0}),h=u(n,"SCRIPT",{"data-name":!0,"data-cfasync":!0,src:!0,"data-id":!0,"data-description":!0,"data-message":!0,"data-color":!0,"data-position":!0,"data-x_margin":!0,"data-y_margin":!0,["data-svelte-h"]:!0}),st(h)!=="svelte-bv2cpr"&&(h.innerHTML=Rt),n.forEach(r),ht=$(e),y=u(e,"ARTICLE",{class:!0});var E=k(y);N=u(E,"HEADER",{class:!0});var Q=k(N);Y=u(Q,"H1",{class:!0});var Zt=k(Y);_t=P(Zt,ot),Zt.forEach(r),At=$(Q),j=u(Q,"DIV",{class:!0});var $t=k(j);A=u($t,"DIV",{});var nt=k(A);q=u(nt,"SPAN",{class:!0,["data-svelte-h"]:!0}),st(q)!=="svelte-114jejz"&&(q.textContent=Kt),K=u(nt,"SPAN",{class:!0,["data-svelte-h"]:!0}),st(K)!=="svelte-1psjisz"&&(K.textContent=Ot),Ct=P(nt,s[2]),Dt=P(nt,`.
				`),v&&v.l(nt),nt.forEach(r),It=$($t),L=u($t,"DIV",{class:!0});var Et=k(L);O=u(Et,"DIV",{class:!0});var Jt=k(O);vt=P(Jt,rt),Jt.forEach(r),Tt=$(Et),M&&M.l(Et),Et.forEach(r),$t.forEach(r),Q.forEach(r),Mt=$(E),Nt=$(E),p&&re(p.$$.fragment,E),yt=$(E),it=u(E,"DIV",{class:!0}),k(it).forEach(r),jt=$(E),b=u(E,"ASIDE",{class:!0});var C=k(b);W=u(C,"H2",{class:!0,["data-svelte-h"]:!0}),st(W)!=="svelte-128y7pj"&&(W.textContent=Wt),Lt=$(C),x=u(C,"P",{["data-svelte-h"]:!0}),st(x)!=="svelte-171xzz7"&&(x.textContent=Qt),Ft=$(C),F=u(C,"PI-THUMB",{user:!0,path:!0,team:!0}),k(F).forEach(r),St=$(C),tt=u(C,"P",{["data-svelte-h"]:!0}),st(tt)!=="svelte-s9yh0w"&&(tt.textContent=Ut),Ht=$(C),ut=u(C,"DIV",{class:!0}),k(ut).forEach(r),C.forEach(r),E.forEach(r),wt=$(e),f&&f.l(e),et=$(e),S=u(e,"LINK",{rel:!0,href:!0,integrity:!0,crossorigin:!0}),this.h()},h(){t(d,"name","description"),t(d,"content",c=s[0].meta.description),t(o,"property","og:title"),t(o,"content",m=s[0].meta.title),t(g,"property","og:type"),t(g,"content","article"),t(I,"property","og:url"),t(I,"content",T=`https://allandeutsch.com/notes/${s[1].params.slug}`),t(V,"property","og:description"),t(V,"content",mt=s[0].meta.description),t(U,"property","og:locale"),t(U,"content","en_US"),t(G,"property","twitter:card"),t(G,"content","summary"),t(X,"property","twitter:url"),t(X,"content","https://allandeutsch.com"),t(B,"property","twitter:title"),t(B,"content",dt=s[0].meta.title),t(z,"property","twitter:description"),t(z,"content",pt=s[0].meta.description),t(Z,"property","twitter:site"),t(Z,"content","@AllanDeutsch"),t(J,"property","twitter:creator"),t(J,"content","@AllanDeutsch"),t(R,"rel","canonical"),t(R,"href",ft=`https://allandeutsch.com/notes/${s[1].params.slug}`),t(h,"data-name","BMC-Widget"),t(h,"data-cfasync","false"),de(h.src,qt="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js")||t(h,"src",qt),t(h,"data-id","AllanDeutsch"),t(h,"data-description","Support me on Buy me a coffee!"),t(h,"data-message",""),t(h,"data-color","#5F7FFF"),t(h,"data-position","Right"),t(h,"data-x_margin","18"),t(h,"data-y_margin","18"),t(Y,"class","mb-8 text-left text-4xl font-bold"),t(q,"class","pr-2"),t(K,"class","hidden sm:inline"),t(O,"class",gt="note__status "+s[0].meta.status+" svelte-564mcj"),t(L,"class","flex flex-col items-end"),t(j,"class","text-md mb-12 mt-4 flex justify-between border-t border-t-neutral border-opacity-20 pt-1 text-base-content"),t(N,"class","w-full max-w-3xl self-center"),t(it,"class","divider"),t(W,"class","prose-h2:text-lg"),kt(F,"user","(anonymous)"),kt(F,"path",bt=`notes/${s[1].params.slug}`),kt(F,"team","d6101342-650f-443e-893a-0bcb31bd8da9"),t(ut,"class","divider"),t(b,"class","prose"),t(y,"class","note-container prose mb-8 max-w-full svelte-564mcj"),t(S,"rel","stylesheet"),t(S,"href","https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/katex.min.css"),t(S,"integrity","sha384-KiWOvVjnN8qwAZbuQyWDIbfCLFhLXNETzBQjA/92pIowpC0d2O3nppDGQVgwd2nB"),t(S,"crossorigin","anonymous")},m(e,n){a(document.head,d),a(document.head,o),a(document.head,g),a(document.head,I),a(document.head,V),a(document.head,U),a(document.head,G),a(document.head,X),a(document.head,B),a(document.head,z),a(document.head,Z),a(document.head,J),a(document.head,R),a(document.head,h),D(e,ht,n),D(e,y,n),a(y,N),a(N,Y),a(Y,_t),a(N,At),a(N,j),a(j,A),a(A,q),a(A,K),a(A,Ct),a(A,Dt),v&&v.m(A,null),a(j,It),a(j,L),a(L,O),a(O,vt),a(L,Tt),M&&M.m(L,null),a(y,Mt),a(y,Nt),p&&Bt(p,y,null),a(y,yt),a(y,it),a(y,jt),a(y,b),a(b,W),a(b,Lt),a(b,x),a(b,Ft),a(b,F),a(b,St),a(b,tt),a(b,Ht),a(b,ut),D(e,wt,n),f&&f.m(e,n),D(e,et,n),D(e,S,n),_=!0},p(e,[n]){var E;if((!_||n&1)&&l!==(l=e[0].meta.title+" - Allan Deutsch")&&(document.title=l),(!_||n&1&&c!==(c=e[0].meta.description))&&t(d,"content",c),(!_||n&1&&m!==(m=e[0].meta.title))&&t(o,"content",m),(!_||n&2&&T!==(T=`https://allandeutsch.com/notes/${e[1].params.slug}`))&&t(I,"content",T),(!_||n&1&&mt!==(mt=e[0].meta.description))&&t(V,"content",mt),(!_||n&1&&dt!==(dt=e[0].meta.title))&&t(B,"content",dt),(!_||n&1&&pt!==(pt=e[0].meta.description))&&t(z,"content",pt),(!_||n&2&&ft!==(ft=`https://allandeutsch.com/notes/${e[1].params.slug}`))&&t(R,"href",ft),(!_||n&1)&&ot!==(ot=e[0].meta.title+"")&&ee(_t,ot),e[0].meta.lastmod&&e[0].meta.lastmod!==e[0].meta.date?v?v.p(e,n):(v=se(e),v.c(),v.m(A,null)):v&&(v.d(1),v=null),(!_||n&1)&&rt!==(rt=`${e[0].meta.status} ${e[0].meta.statusIcon??""}`)&&ee(vt,rt),(!_||n&1&&gt!==(gt="note__status "+e[0].meta.status+" svelte-564mcj"))&&t(O,"class",gt),M.p(e,n),n&1&&at!==(at=e[0].content)){if(p){ne();const Q=p;ct(Q.$$.fragment,1,0,()=>{zt(Q,1)}),ae()}at?(p=te(at,Gt()),Vt(p.$$.fragment),lt(p.$$.fragment,1),Bt(p,y,yt)):p=null}(!_||n&2&&bt!==(bt=`notes/${e[1].params.slug}`))&&kt(F,"path",bt),(E=e[0].linkedNotes)!=null&&E.length?f?(f.p(e,n),n&1&&lt(f,1)):(f=le(e),f.c(),lt(f,1),f.m(et.parentNode,et)):f&&(ne(),ct(f,1,1,()=>{f=null}),ae())},i(e){_||(p&&lt(p.$$.fragment,e),lt(f),_=!0)},o(e){p&&ct(p.$$.fragment,e),ct(f),_=!1},d(e){e&&(r(ht),r(y),r(wt),r(et),r(S)),r(d),r(o),r(g),r(I),r(V),r(U),r(G),r(X),r(B),r(z),r(Z),r(J),r(R),r(h),v&&v.d(),M&&M.d(),p&&zt(p),f&&f.d(e)}}}const be=1;function we(s,l,d){let c;pe(s,_e,T=>d(1,c=T));let{data:o}=l;const m=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric"}),g=m.format(new Date(Date.parse(o.meta.date))),I=m.format(new Date(Date.parse(o.meta.lastmod)));return s.$$set=T=>{"data"in T&&d(0,o=T.data)},[o,c,g,I]}class Te extends fe{constructor(l){super(),he(this,l,we,ye,ce,{data:0})}}export{Te as component,Ie as universal};