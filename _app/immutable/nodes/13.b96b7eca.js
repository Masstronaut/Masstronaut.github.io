import{L as Kt,a as Wt,N as te}from"../chunks/LoadNote.2edbdc54.js";import{H as ee}from"../chunks/control.f5b05b5f.js";import{s as ae,q as zt,f as u,a as b,l as S,I as ne,g as m,u as lt,d as l,c as E,h as A,m as H,j as t,K as Qt,M as se,v as r,i as $,n as Gt,H as le,o as oe,A as Yt}from"../chunks/scheduler.5beeadad.js";import{S as re,i as ie,b as It,d as xt,m as Lt,t as ot,c as Ut,a as et,e as Ct,g as Xt}from"../chunks/index.bfd99307.js";import{p as ce}from"../chunks/stores.74de3579.js";import"../chunks/paths.bfc941d2.js";function Dt(n,s){return new ee(n,s)}new TextEncoder;const ue=async({params:n})=>{console.log(`Rendering page ${n.slug}`);let s=await Kt({slug:n.slug});if(!s.success){const o=(await Wt).find(v=>v.slug===n.slug);if(!o||!o.filename||!o.filename.endsWith(".md"))throw Dt(404,`Could not find the requested note: '${n.slug}'`);const c=await Kt({slug:o.filename.slice(0,-3)});if(!c.success)throw Dt(500,`Could not load note '${n.slug}' with filename '${o.filename}'`);s=c}const d={content:s.content,meta:s.metadata,linkedNotes:[]};if(!s.success)throw Dt(500,`Failed to load note '${n.slug}'.`);if(s.metadata.internalLinks.length===0)return d;const i=s.metadata.internalLinks.map(o=>o.slice(7,-1));return d.linkedNotes=(await Wt).filter(o=>i.includes(o.slug)),d},$e=Object.freeze(Object.defineProperty({__proto__:null,load:ue},Symbol.toStringTag,{value:"Module"}));function Zt(n){let s,d,i,o;return{c(){s=u("br"),d=S("Last tended "),i=S(n[3]),o=S(".")},l(c){s=m(c,"BR",{}),d=H(c,"Last tended "),i=H(c,n[3]),o=H(c,".")},m(c,v){$(c,s,v),$(c,d,v),$(c,i,v),$(c,o,v)},p:Yt,d(c){c&&(l(s),l(d),l(i),l(o))}}}function me(n){let s,d=`${pe} minute read ⏱`,i;return{c(){s=u("div"),i=S(d)},l(o){s=m(o,"DIV",{});var c=A(s);i=H(c,d),c.forEach(l)},m(o,c){$(o,s,c),r(s,i)},p:Yt,d(o){o&&l(s)}}}function Jt(n){let s,d;return s=new te({props:{notes:n[0].linkedNotes,title:"Linked notes",showFilters:!1}}),{c(){It(s.$$.fragment)},l(i){xt(s.$$.fragment,i)},m(i,o){Lt(s,i,o),d=!0},p(i,o){const c={};o&1&&(c.notes=i[0].linkedNotes),s.$set(c)},i(i){d||(et(s.$$.fragment,i),d=!0)},o(i){ot(s.$$.fragment,i),d=!1},d(i){Ct(s,i)}}}function de(n){var qt;let s,d,i,o,c,v,M,D,F,rt,z,Q,G,P,it,R,ct,U,X,V,ut,T,Nt="",jt,_,St="",Ht,mt,Z,dt,g,L,J,at=n[0].meta.title+"",pt,wt,C,k,q,Ft="🌱",B,Pt=`Planted
				`,$t,bt,Et,N,O,nt=`${n[0].meta.status} ${n[0].meta.statusIcon??""}`,ft,_t,Tt,kt,At,p,ht,st,Mt,K,Rt=`<p>If you&#39;re feeling extra generous, you can show your support by buying me a
			coffee with the button in the bottom right corner of the page.</p> <div class="divider"></div>`,vt,Y,j,y;document.title=s=n[0].meta.title+" - Allan Deutsch";let h=n[0].meta.lastmod&&n[0].meta.lastmod!==n[0].meta.date&&Zt(n),I=me();var x=n[0].content;function Vt(e,a){return{}}x&&(p=zt(x,Vt()));let f=((qt=n[0].linkedNotes)==null?void 0:qt.length)&&Jt(n);return{c(){d=u("meta"),o=u("meta"),v=u("meta"),M=u("meta"),F=u("meta"),z=u("meta"),Q=u("meta"),G=u("meta"),P=u("meta"),R=u("meta"),U=u("meta"),X=u("meta"),V=u("link"),T=u("script"),T.innerHTML=Nt,_=u("script"),_.innerHTML=St,mt=b(),Z=u("pi-select"),dt=b(),g=u("article"),L=u("header"),J=u("h1"),pt=S(at),wt=b(),C=u("div"),k=u("div"),q=u("span"),q.textContent=Ft,B=u("span"),B.textContent=Pt,$t=S(n[2]),bt=S(`.
				`),h&&h.c(),Et=b(),N=u("div"),O=u("div"),ft=S(nt),Tt=b(),I&&I.c(),kt=b(),At=b(),p&&It(p.$$.fragment),ht=b(),st=u("div"),Mt=b(),K=u("aside"),K.innerHTML=Rt,vt=b(),f&&f.c(),Y=b(),j=u("link"),this.h()},l(e){const a=ne("svelte-1jpu5mq",document.head);d=m(a,"META",{name:!0,content:!0}),o=m(a,"META",{property:!0,content:!0}),v=m(a,"META",{property:!0,content:!0}),M=m(a,"META",{property:!0,content:!0}),F=m(a,"META",{property:!0,content:!0}),z=m(a,"META",{property:!0,content:!0}),Q=m(a,"META",{property:!0,content:!0}),G=m(a,"META",{property:!0,content:!0}),P=m(a,"META",{property:!0,content:!0}),R=m(a,"META",{property:!0,content:!0}),U=m(a,"META",{property:!0,content:!0}),X=m(a,"META",{property:!0,content:!0}),V=m(a,"LINK",{rel:!0,href:!0}),T=m(a,"SCRIPT",{type:!0,src:!0,["data-svelte-h"]:!0}),lt(T)!=="svelte-1q73puk"&&(T.innerHTML=Nt),_=m(a,"SCRIPT",{"data-name":!0,"data-cfasync":!0,src:!0,"data-id":!0,"data-description":!0,"data-message":!0,"data-color":!0,"data-position":!0,"data-x_margin":!0,"data-y_margin":!0,["data-svelte-h"]:!0}),lt(_)!=="svelte-bv2cpr"&&(_.innerHTML=St),a.forEach(l),mt=E(e),Z=m(e,"PI-SELECT",{team:!0}),A(Z).forEach(l),dt=E(e),g=m(e,"ARTICLE",{class:!0});var w=A(g);L=m(w,"HEADER",{class:!0});var W=A(L);J=m(W,"H1",{class:!0});var Bt=A(J);pt=H(Bt,at),Bt.forEach(l),wt=E(W),C=m(W,"DIV",{class:!0});var gt=A(C);k=m(gt,"DIV",{});var tt=A(k);q=m(tt,"SPAN",{class:!0,["data-svelte-h"]:!0}),lt(q)!=="svelte-114jejz"&&(q.textContent=Ft),B=m(tt,"SPAN",{class:!0,["data-svelte-h"]:!0}),lt(B)!=="svelte-1psjisz"&&(B.textContent=Pt),$t=H(tt,n[2]),bt=H(tt,`.
				`),h&&h.l(tt),tt.forEach(l),Et=E(gt),N=m(gt,"DIV",{class:!0});var yt=A(N);O=m(yt,"DIV",{class:!0});var Ot=A(O);ft=H(Ot,nt),Ot.forEach(l),Tt=E(yt),I&&I.l(yt),yt.forEach(l),gt.forEach(l),W.forEach(l),kt=E(w),At=E(w),p&&xt(p.$$.fragment,w),ht=E(w),st=m(w,"DIV",{class:!0}),A(st).forEach(l),Mt=E(w),K=m(w,"ASIDE",{class:!0,["data-svelte-h"]:!0}),lt(K)!=="svelte-1w3uusp"&&(K.innerHTML=Rt),w.forEach(l),vt=E(e),f&&f.l(e),Y=E(e),j=m(e,"LINK",{rel:!0,href:!0,integrity:!0,crossorigin:!0}),this.h()},h(){t(d,"name","description"),t(d,"content",i=n[0].meta.description),t(o,"property","og:title"),t(o,"content",c=n[0].meta.title),t(v,"property","og:type"),t(v,"content","article"),t(M,"property","og:url"),t(M,"content",D=`https://allandeutsch.com/notes/${n[1].params.slug}`),t(F,"property","og:description"),t(F,"content",rt=n[0].meta.description),t(z,"property","og:locale"),t(z,"content","en_US"),t(Q,"property","twitter:card"),t(Q,"content","summary"),t(G,"property","twitter:url"),t(G,"content","https://allandeutsch.com"),t(P,"property","twitter:title"),t(P,"content",it=n[0].meta.title),t(R,"property","twitter:description"),t(R,"content",ct=n[0].meta.description),t(U,"property","twitter:site"),t(U,"content","@AllanDeutsch"),t(X,"property","twitter:creator"),t(X,"content","@AllanDeutsch"),t(V,"rel","canonical"),t(V,"href",ut=`https://allandeutsch.com/notes/${n[1].params.slug}`),t(T,"type","module"),Qt(T.src,jt="https://www.penguinsight.com/selection.js")||t(T,"src",jt),t(_,"data-name","BMC-Widget"),t(_,"data-cfasync","false"),Qt(_.src,Ht="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js")||t(_,"src",Ht),t(_,"data-id","AllanDeutsch"),t(_,"data-description","Support me on Buy me a coffee!"),t(_,"data-message",""),t(_,"data-color","#5F7FFF"),t(_,"data-position","Right"),t(_,"data-x_margin","18"),t(_,"data-y_margin","18"),se(Z,"team","TKxfdiO22xOXIrW0c0Pfi"),t(J,"class","mb-8 text-left text-4xl font-bold"),t(q,"class","pr-2"),t(B,"class","hidden sm:inline"),t(O,"class",_t="note__status "+n[0].meta.status+" svelte-564mcj"),t(N,"class","flex flex-col items-end"),t(C,"class","text-md mb-12 mt-4 flex justify-between border-t border-t-neutral border-opacity-20 pt-1 text-base-content"),t(L,"class","w-full max-w-3xl self-center"),t(st,"class","divider"),t(K,"class","prose"),t(g,"class","note-container prose mb-8 max-w-full svelte-564mcj"),t(j,"rel","stylesheet"),t(j,"href","https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/katex.min.css"),t(j,"integrity","sha384-KiWOvVjnN8qwAZbuQyWDIbfCLFhLXNETzBQjA/92pIowpC0d2O3nppDGQVgwd2nB"),t(j,"crossorigin","anonymous")},m(e,a){r(document.head,d),r(document.head,o),r(document.head,v),r(document.head,M),r(document.head,F),r(document.head,z),r(document.head,Q),r(document.head,G),r(document.head,P),r(document.head,R),r(document.head,U),r(document.head,X),r(document.head,V),r(document.head,T),r(document.head,_),$(e,mt,a),$(e,Z,a),$(e,dt,a),$(e,g,a),r(g,L),r(L,J),r(J,pt),r(L,wt),r(L,C),r(C,k),r(k,q),r(k,B),r(k,$t),r(k,bt),h&&h.m(k,null),r(C,Et),r(C,N),r(N,O),r(O,ft),r(N,Tt),I&&I.m(N,null),r(g,kt),r(g,At),p&&Lt(p,g,null),r(g,ht),r(g,st),r(g,Mt),r(g,K),$(e,vt,a),f&&f.m(e,a),$(e,Y,a),$(e,j,a),y=!0},p(e,[a]){var w;if((!y||a&1)&&s!==(s=e[0].meta.title+" - Allan Deutsch")&&(document.title=s),(!y||a&1&&i!==(i=e[0].meta.description))&&t(d,"content",i),(!y||a&1&&c!==(c=e[0].meta.title))&&t(o,"content",c),(!y||a&2&&D!==(D=`https://allandeutsch.com/notes/${e[1].params.slug}`))&&t(M,"content",D),(!y||a&1&&rt!==(rt=e[0].meta.description))&&t(F,"content",rt),(!y||a&1&&it!==(it=e[0].meta.title))&&t(P,"content",it),(!y||a&1&&ct!==(ct=e[0].meta.description))&&t(R,"content",ct),(!y||a&2&&ut!==(ut=`https://allandeutsch.com/notes/${e[1].params.slug}`))&&t(V,"href",ut),(!y||a&1)&&at!==(at=e[0].meta.title+"")&&Gt(pt,at),e[0].meta.lastmod&&e[0].meta.lastmod!==e[0].meta.date?h?h.p(e,a):(h=Zt(e),h.c(),h.m(k,null)):h&&(h.d(1),h=null),(!y||a&1)&&nt!==(nt=`${e[0].meta.status} ${e[0].meta.statusIcon??""}`)&&Gt(ft,nt),(!y||a&1&&_t!==(_t="note__status "+e[0].meta.status+" svelte-564mcj"))&&t(O,"class",_t),I.p(e,a),a&1&&x!==(x=e[0].content)){if(p){Xt();const W=p;ot(W.$$.fragment,1,0,()=>{Ct(W,1)}),Ut()}x?(p=zt(x,Vt()),It(p.$$.fragment),et(p.$$.fragment,1),Lt(p,g,ht)):p=null}(w=e[0].linkedNotes)!=null&&w.length?f?(f.p(e,a),a&1&&et(f,1)):(f=Jt(e),f.c(),et(f,1),f.m(Y.parentNode,Y)):f&&(Xt(),ot(f,1,1,()=>{f=null}),Ut())},i(e){y||(p&&et(p.$$.fragment,e),et(f),y=!0)},o(e){p&&ot(p.$$.fragment,e),ot(f),y=!1},d(e){e&&(l(mt),l(Z),l(dt),l(g),l(vt),l(Y),l(j)),l(d),l(o),l(v),l(M),l(F),l(z),l(Q),l(G),l(P),l(R),l(U),l(X),l(V),l(T),l(_),h&&h.d(),I&&I.d(),p&&Ct(p),f&&f.d(e)}}}const pe=1;function fe(n,s,d){let i;le(n,ce,D=>d(1,i=D));let{data:o}=s;const c=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric"}),v=c.format(new Date(Date.parse(o.meta.date))),M=c.format(new Date(Date.parse(o.meta.lastmod)));return oe(()=>!0),n.$$set=D=>{"data"in D&&d(0,o=D.data)},[o,i,v,M]}class be extends re{constructor(s){super(),ie(this,s,fe,de,ae,{data:0})}}export{be as component,$e as universal};
