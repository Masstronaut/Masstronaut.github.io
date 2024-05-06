import{L as Wt,a as zt,N as te}from"../chunks/LoadNote.cba3bf95.js";import{H as ee}from"../chunks/control.f5b05b5f.js";import{s as ae,q as Kt,f as u,a as b,l as S,J as ne,g as m,u as lt,d as l,c as E,h as A,m as H,j as t,M as Qt,P as se,v as r,i as $,n as Gt,H as le,o as oe,A as Yt}from"../chunks/scheduler.e9e6880c.js";import{S as re,i as ie,b as It,d as xt,m as Lt,t as ot,c as Ut,a as et,e as Ct,g as Xt}from"../chunks/index.ebf47752.js";import{p as ce}from"../chunks/stores.aef57924.js";import"../chunks/paths.207d1dbb.js";function Dt(n,s){return new ee(n,s)}new TextEncoder;const ue=async({params:n})=>{console.log(`Rendering page ${n.slug}`);let s=await Wt({slug:n.slug});if(!s.success){const o=(await zt).find(v=>v.slug===n.slug);if(!o||!o.filename||!o.filename.endsWith(".md"))throw Dt(404,`Could not find the requested note: '${n.slug}'`);const c=await Wt({slug:o.filename.slice(0,-3)});if(!c.success)throw Dt(500,`Could not load note '${n.slug}' with filename '${o.filename}'`);s=c}const d={content:s.content,meta:s.metadata,linkedNotes:[]};if(!s.success)throw Dt(500,`Failed to load note '${n.slug}'.`);if(s.metadata.internalLinks.length===0)return d;const i=s.metadata.internalLinks.map(o=>o.slice(7,-1));return d.linkedNotes=(await zt).filter(o=>i.includes(o.slug)),d},$e=Object.freeze(Object.defineProperty({__proto__:null,load:ue},Symbol.toStringTag,{value:"Module"}));function Jt(n){let s,d,i,o;return{c(){s=u("br"),d=S("Last tended "),i=S(n[3]),o=S(".")},l(c){s=m(c,"BR",{}),d=H(c,"Last tended "),i=H(c,n[3]),o=H(c,".")},m(c,v){$(c,s,v),$(c,d,v),$(c,i,v),$(c,o,v)},p:Yt,d(c){c&&(l(s),l(d),l(i),l(o))}}}function me(n){let s,d=`${fe} minute read ⏱`,i;return{c(){s=u("div"),i=S(d)},l(o){s=m(o,"DIV",{});var c=A(s);i=H(c,d),c.forEach(l)},m(o,c){$(o,s,c),r(s,i)},p:Yt,d(o){o&&l(s)}}}function Zt(n){let s,d;return s=new te({props:{notes:n[0].linkedNotes,title:"Linked notes",showFilters:!1}}),{c(){It(s.$$.fragment)},l(i){xt(s.$$.fragment,i)},m(i,o){Lt(s,i,o),d=!0},p(i,o){const c={};o&1&&(c.notes=i[0].linkedNotes),s.$set(c)},i(i){d||(et(s.$$.fragment,i),d=!0)},o(i){ot(s.$$.fragment,i),d=!1},d(i){Ct(s,i)}}}function de(n){var Bt;let s,d,i,o,c,v,M,D,F,rt,K,Q,G,P,it,R,ct,U,X,V,ut,T,Nt="",jt,_,St="",Ht,mt,J,dt,g,L,Z,at=n[0].meta.title+"",ft,wt,C,k,B,Ft="🌱",O,Pt=`Planted
				`,$t,bt,Et,N,q,nt=`${n[0].meta.status} ${n[0].meta.statusIcon??""}`,pt,_t,Tt,kt,At,f,ht,st,Mt,W,Rt=`<p>If you&#39;re feeling extra generous, you can show your support by buying me a
			coffee with the button in the bottom right corner of the page.</p> <div class="divider"></div>`,vt,Y,j,y;document.title=s=n[0].meta.title+" - Allan Deutsch";let h=n[0].meta.lastmod&&n[0].meta.lastmod!==n[0].meta.date&&Jt(n),I=me();var x=n[0].content;function Vt(e,a){return{}}x&&(f=Kt(x,Vt()));let p=((Bt=n[0].linkedNotes)==null?void 0:Bt.length)&&Zt(n);return{c(){d=u("meta"),o=u("meta"),v=u("meta"),M=u("meta"),F=u("meta"),K=u("meta"),Q=u("meta"),G=u("meta"),P=u("meta"),R=u("meta"),U=u("meta"),X=u("meta"),V=u("link"),T=u("script"),T.innerHTML=Nt,_=u("script"),_.innerHTML=St,mt=b(),J=u("pi-select"),dt=b(),g=u("article"),L=u("header"),Z=u("h1"),ft=S(at),wt=b(),C=u("div"),k=u("div"),B=u("span"),B.textContent=Ft,O=u("span"),O.textContent=Pt,$t=S(n[2]),bt=S(`.
				`),h&&h.c(),Et=b(),N=u("div"),q=u("div"),pt=S(nt),Tt=b(),I&&I.c(),kt=b(),At=b(),f&&It(f.$$.fragment),ht=b(),st=u("div"),Mt=b(),W=u("aside"),W.innerHTML=Rt,vt=b(),p&&p.c(),Y=b(),j=u("link"),this.h()},l(e){const a=ne("svelte-16jvx7r",document.head);d=m(a,"META",{name:!0,content:!0}),o=m(a,"META",{property:!0,content:!0}),v=m(a,"META",{property:!0,content:!0}),M=m(a,"META",{property:!0,content:!0}),F=m(a,"META",{property:!0,content:!0}),K=m(a,"META",{property:!0,content:!0}),Q=m(a,"META",{property:!0,content:!0}),G=m(a,"META",{property:!0,content:!0}),P=m(a,"META",{property:!0,content:!0}),R=m(a,"META",{property:!0,content:!0}),U=m(a,"META",{property:!0,content:!0}),X=m(a,"META",{property:!0,content:!0}),V=m(a,"LINK",{rel:!0,href:!0}),T=m(a,"SCRIPT",{type:!0,src:!0,["data-svelte-h"]:!0}),lt(T)!=="svelte-46kiv1"&&(T.innerHTML=Nt),_=m(a,"SCRIPT",{"data-name":!0,"data-cfasync":!0,src:!0,"data-id":!0,"data-description":!0,"data-message":!0,"data-color":!0,"data-position":!0,"data-x_margin":!0,"data-y_margin":!0,["data-svelte-h"]:!0}),lt(_)!=="svelte-bv2cpr"&&(_.innerHTML=St),a.forEach(l),mt=E(e),J=m(e,"PI-SELECT",{team:!0}),A(J).forEach(l),dt=E(e),g=m(e,"ARTICLE",{class:!0});var w=A(g);L=m(w,"HEADER",{class:!0});var z=A(L);Z=m(z,"H1",{class:!0});var Ot=A(Z);ft=H(Ot,at),Ot.forEach(l),wt=E(z),C=m(z,"DIV",{class:!0});var gt=A(C);k=m(gt,"DIV",{});var tt=A(k);B=m(tt,"SPAN",{class:!0,["data-svelte-h"]:!0}),lt(B)!=="svelte-114jejz"&&(B.textContent=Ft),O=m(tt,"SPAN",{class:!0,["data-svelte-h"]:!0}),lt(O)!=="svelte-1psjisz"&&(O.textContent=Pt),$t=H(tt,n[2]),bt=H(tt,`.
				`),h&&h.l(tt),tt.forEach(l),Et=E(gt),N=m(gt,"DIV",{class:!0});var yt=A(N);q=m(yt,"DIV",{class:!0});var qt=A(q);pt=H(qt,nt),qt.forEach(l),Tt=E(yt),I&&I.l(yt),yt.forEach(l),gt.forEach(l),z.forEach(l),kt=E(w),At=E(w),f&&xt(f.$$.fragment,w),ht=E(w),st=m(w,"DIV",{class:!0}),A(st).forEach(l),Mt=E(w),W=m(w,"ASIDE",{class:!0,["data-svelte-h"]:!0}),lt(W)!=="svelte-1w3uusp"&&(W.innerHTML=Rt),w.forEach(l),vt=E(e),p&&p.l(e),Y=E(e),j=m(e,"LINK",{rel:!0,href:!0,integrity:!0,crossorigin:!0}),this.h()},h(){t(d,"name","description"),t(d,"content",i=n[0].meta.description),t(o,"property","og:title"),t(o,"content",c=n[0].meta.title),t(v,"property","og:type"),t(v,"content","article"),t(M,"property","og:url"),t(M,"content",D=`https://allandeutsch.com/notes/${n[1].params.slug}`),t(F,"property","og:description"),t(F,"content",rt=n[0].meta.description),t(K,"property","og:locale"),t(K,"content","en_US"),t(Q,"property","twitter:card"),t(Q,"content","summary"),t(G,"property","twitter:url"),t(G,"content","https://allandeutsch.com"),t(P,"property","twitter:title"),t(P,"content",it=n[0].meta.title),t(R,"property","twitter:description"),t(R,"content",ct=n[0].meta.description),t(U,"property","twitter:site"),t(U,"content","@AllanDeutsch"),t(X,"property","twitter:creator"),t(X,"content","@AllanDeutsch"),t(V,"rel","canonical"),t(V,"href",ut=`https://allandeutsch.com/notes/${n[1].params.slug}`),t(T,"type","module"),Qt(T.src,jt="http://localhost:5173/selection.js")||t(T,"src",jt),t(_,"data-name","BMC-Widget"),t(_,"data-cfasync","false"),Qt(_.src,Ht="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js")||t(_,"src",Ht),t(_,"data-id","AllanDeutsch"),t(_,"data-description","Support me on Buy me a coffee!"),t(_,"data-message",""),t(_,"data-color","#5F7FFF"),t(_,"data-position","Right"),t(_,"data-x_margin","18"),t(_,"data-y_margin","18"),se(J,"team","TKxfdiO22xOXIrW0c0Pfi"),t(Z,"class","mb-8 text-left text-4xl font-bold"),t(B,"class","pr-2"),t(O,"class","hidden sm:inline"),t(q,"class",_t="note__status "+n[0].meta.status+" svelte-w9emf5"),t(N,"class","flex flex-col items-end"),t(C,"class","text-md mb-12 mt-4 flex justify-between border-t border-t-neutral border-opacity-20 pt-1 text-base-content"),t(L,"class","w-full max-w-3xl self-center"),t(st,"class","divider"),t(W,"class","prose"),t(g,"class","note-container prose mb-8 max-w-full px-2 svelte-w9emf5"),t(j,"rel","stylesheet"),t(j,"href","https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/katex.min.css"),t(j,"integrity","sha384-KiWOvVjnN8qwAZbuQyWDIbfCLFhLXNETzBQjA/92pIowpC0d2O3nppDGQVgwd2nB"),t(j,"crossorigin","anonymous")},m(e,a){r(document.head,d),r(document.head,o),r(document.head,v),r(document.head,M),r(document.head,F),r(document.head,K),r(document.head,Q),r(document.head,G),r(document.head,P),r(document.head,R),r(document.head,U),r(document.head,X),r(document.head,V),r(document.head,T),r(document.head,_),$(e,mt,a),$(e,J,a),$(e,dt,a),$(e,g,a),r(g,L),r(L,Z),r(Z,ft),r(L,wt),r(L,C),r(C,k),r(k,B),r(k,O),r(k,$t),r(k,bt),h&&h.m(k,null),r(C,Et),r(C,N),r(N,q),r(q,pt),r(N,Tt),I&&I.m(N,null),r(g,kt),r(g,At),f&&Lt(f,g,null),r(g,ht),r(g,st),r(g,Mt),r(g,W),$(e,vt,a),p&&p.m(e,a),$(e,Y,a),$(e,j,a),y=!0},p(e,[a]){var w;if((!y||a&1)&&s!==(s=e[0].meta.title+" - Allan Deutsch")&&(document.title=s),(!y||a&1&&i!==(i=e[0].meta.description))&&t(d,"content",i),(!y||a&1&&c!==(c=e[0].meta.title))&&t(o,"content",c),(!y||a&2&&D!==(D=`https://allandeutsch.com/notes/${e[1].params.slug}`))&&t(M,"content",D),(!y||a&1&&rt!==(rt=e[0].meta.description))&&t(F,"content",rt),(!y||a&1&&it!==(it=e[0].meta.title))&&t(P,"content",it),(!y||a&1&&ct!==(ct=e[0].meta.description))&&t(R,"content",ct),(!y||a&2&&ut!==(ut=`https://allandeutsch.com/notes/${e[1].params.slug}`))&&t(V,"href",ut),(!y||a&1)&&at!==(at=e[0].meta.title+"")&&Gt(ft,at),e[0].meta.lastmod&&e[0].meta.lastmod!==e[0].meta.date?h?h.p(e,a):(h=Jt(e),h.c(),h.m(k,null)):h&&(h.d(1),h=null),(!y||a&1)&&nt!==(nt=`${e[0].meta.status} ${e[0].meta.statusIcon??""}`)&&Gt(pt,nt),(!y||a&1&&_t!==(_t="note__status "+e[0].meta.status+" svelte-w9emf5"))&&t(q,"class",_t),I.p(e,a),a&1&&x!==(x=e[0].content)){if(f){Xt();const z=f;ot(z.$$.fragment,1,0,()=>{Ct(z,1)}),Ut()}x?(f=Kt(x,Vt()),It(f.$$.fragment),et(f.$$.fragment,1),Lt(f,g,ht)):f=null}(w=e[0].linkedNotes)!=null&&w.length?p?(p.p(e,a),a&1&&et(p,1)):(p=Zt(e),p.c(),et(p,1),p.m(Y.parentNode,Y)):p&&(Xt(),ot(p,1,1,()=>{p=null}),Ut())},i(e){y||(f&&et(f.$$.fragment,e),et(p),y=!0)},o(e){f&&ot(f.$$.fragment,e),ot(p),y=!1},d(e){e&&(l(mt),l(J),l(dt),l(g),l(vt),l(Y),l(j)),l(d),l(o),l(v),l(M),l(F),l(K),l(Q),l(G),l(P),l(R),l(U),l(X),l(V),l(T),l(_),h&&h.d(),I&&I.d(),f&&Ct(f),p&&p.d(e)}}}const fe=1;function pe(n,s,d){let i;le(n,ce,D=>d(1,i=D));let{data:o}=s;const c=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric"}),v=c.format(new Date(Date.parse(o.meta.date))),M=c.format(new Date(Date.parse(o.meta.lastmod)));return oe(()=>!0),n.$$set=D=>{"data"in D&&d(0,o=D.data)},[o,i,v,M]}class be extends re{constructor(s){super(),ie(this,s,pe,de,ae,{data:0})}}export{be as component,$e as universal};
