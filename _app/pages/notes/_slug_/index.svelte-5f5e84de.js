var Ye=Object.defineProperty,Ze=Object.defineProperties;var Ge=Object.getOwnPropertyDescriptors;var Se=Object.getOwnPropertySymbols;var Qe=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable;var Le=(n,e,l)=>e in n?Ye(n,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):n[e]=l,Ae=(n,e)=>{for(var l in e||(e={}))Qe.call(e,l)&&Le(n,l,e[l]);if(Se)for(var l of Se(e))We.call(e,l)&&Le(n,l,e[l]);return n},Me=(n,e)=>Ze(n,Ge(e));import{S as _e,i as pe,s as ve,L as Ke,e as p,c as v,a as E,d as f,b as o,g as L,M as Je,N as $e,O as xe,r as z,p as U,k as H,t as P,m as O,h as C,I as Q,J as d,R as ze,j as te,n as de,V as et,U as tt,f as ce,o as ue,W as lt,q as he,l as me,x as ge,y as be,z as ke,A as st,B as at,C as ye,X as nt,D as rt,Y as Pe,P as it,Z as ot,_ as ft}from"../../../chunks/index-60c6c23d.js";import{N as ct}from"../../../chunks/NoteGrid-de868da7.js";function dt(n){let e,l;const t=n[1].default,s=Ke(t,n,n[0],null);return{c(){e=p("div"),s&&s.c(),this.h()},l(a){e=v(a,"DIV",{class:!0});var r=E(e);s&&s.l(r),r.forEach(f),this.h()},h(){o(e,"class","mdTypography svelte-ebaxaj")},m(a,r){L(a,e,r),s&&s.m(e,null),l=!0},p(a,[r]){s&&s.p&&(!l||r&1)&&Je(s,t,a,a[0],l?xe(t,a[0],r,null):$e(a[0]),null)},i(a){l||(z(s,a),l=!0)},o(a){U(s,a),l=!1},d(a){a&&f(e),s&&s.d(a)}}}function ut(n,e,l){let{$$slots:t={},$$scope:s}=e;return n.$$set=a=>{"$$scope"in a&&l(0,s=a.$$scope)},[s,t]}class ht extends _e{constructor(e){super(),pe(this,e,ut,dt,ve,{})}}function mt(n){let e;return{c(){e=p("p")},l(l){e=v(l,"P",{}),E(e).forEach(f)},m(l,t){L(l,e,t)},p:de,d(l){l&&f(e)}}}function _t(n){let e,l=n[0].title+"",t,s;return{c(){e=p("a"),t=P(l),this.h()},l(a){e=v(a,"A",{href:!0,class:!0});var r=E(e);t=C(r,l),r.forEach(f),this.h()},h(){o(e,"href",s=n[0].href),o(e,"class","svelte-198p2m7")},m(a,r){L(a,e,r),d(e,t)},p(a,r){r&1&&l!==(l=a[0].title+"")&&te(t,l),r&1&&s!==(s=a[0].href)&&o(e,"href",s)},d(a){a&&f(e)}}}function pt(n){let e,l,t,s,a,r,k,b,h,c,i,u,y,M,F;function w(D,V){return D[0]?_t:mt}let _=w(n),I=_(n);return{c(){e=p("aside"),l=p("section"),t=p("div"),I.c(),s=H(),a=p("p"),r=P(n[1]),k=H(),b=p("p"),h=H(),c=p("section"),i=p("div"),u=p("p"),y=P(n[2]),this.h()},l(D){e=v(D,"ASIDE",{class:!0});var V=E(e);l=v(V,"SECTION",{class:!0});var X=E(l);t=v(X,"DIV",{class:!0});var j=E(t);I.l(j),s=O(j),a=v(j,"P",{class:!0});var Y=E(a);r=C(Y,n[1]),Y.forEach(f),k=O(j),b=v(j,"P",{}),E(b).forEach(f),j.forEach(f),X.forEach(f),h=O(V),c=v(V,"SECTION",{class:!0});var K=E(c);i=v(K,"DIV",{class:!0});var J=E(i);u=v(J,"P",{class:!0});var $=E(u);y=C($,n[2]),$.forEach(f),J.forEach(f),K.forEach(f),V.forEach(f),this.h()},h(){o(a,"class","prompt svelte-198p2m7"),o(t,"class","card svelte-198p2m7"),o(l,"class","flashcard_side front svelte-198p2m7"),Q(l,"flipped",n[4]),o(u,"class","answer"),o(i,"class","card svelte-198p2m7"),o(c,"class","flashcard_side back svelte-198p2m7"),o(e,"class","flashcard svelte-198p2m7"),Q(e,"flipped",n[4]),Q(e,"disabled",n[3])},m(D,V){L(D,e,V),d(e,l),d(l,t),I.m(t,null),d(t,s),d(t,a),d(a,r),d(t,k),d(t,b),d(e,h),d(e,c),d(c,i),d(i,u),d(u,y),M||(F=[ze(l,"click",n[6]),ze(c,"click",n[7])],M=!0)},p(D,[V]){_===(_=w(D))&&I?I.p(D,V):(I.d(1),I=_(D),I&&(I.c(),I.m(t,s))),V&2&&te(r,D[1]),V&16&&Q(l,"flipped",D[4]),V&4&&te(y,D[2]),V&16&&Q(e,"flipped",D[4]),V&8&&Q(e,"disabled",D[3])},i:de,o:de,d(D){D&&f(e),I.d(),M=!1,et(F)}}}function vt(n,e,l){let{note:t}=e,{prompt:s}=e,{answer:a}=e,{disabled:r=!1}=e;const k=tt();let b=!1;const h=()=>{r||l(4,b=!b)},c=()=>k("flashcardReviewed");return n.$$set=i=>{"note"in i&&l(0,t=i.note),"prompt"in i&&l(1,s=i.prompt),"answer"in i&&l(2,a=i.answer),"disabled"in i&&l(3,r=i.disabled)},[t,s,a,r,b,k,h,c]}class gt extends _e{constructor(e){super(),pe(this,e,vt,pt,ve,{note:0,prompt:1,answer:2,disabled:3})}}function Ce(n,e,l){const t=n.slice();return t[6]=e[l],t[8]=l,t}function Fe(n){let e,l,t,s,a,r=[],k=new Map,b,h=n[0];const c=i=>i[6].index;for(let i=0;i<h.length;i+=1){let u=Ce(n,h,i),y=c(u);k.set(y,r[i]=qe(y,u))}return{c(){e=p("div"),l=p("h2"),t=P("Review"),s=H(),a=p("div");for(let i=0;i<r.length;i+=1)r[i].c();this.h()},l(i){e=v(i,"DIV",{class:!0,style:!0});var u=E(e);l=v(u,"H2",{class:!0});var y=E(l);t=C(y,"Review"),y.forEach(f),s=O(u),a=v(u,"DIV",{class:!0});var M=E(a);for(let F=0;F<r.length;F+=1)r[F].l(M);M.forEach(f),u.forEach(f),this.h()},h(){o(l,"class","svelte-1w4jii"),o(a,"class","cards svelte-1w4jii"),o(e,"class","flashcard_pile svelte-1w4jii"),ce(e,"--offsetX","0"),ce(e,"--offsetY","0"),ce(e,"--rotateZ","0")},m(i,u){L(i,e,u),d(e,l),d(l,t),d(e,s),d(e,a);for(let y=0;y<r.length;y+=1)r[y].m(a,null);b=!0},p(i,u){u&3&&(h=i[0],ue(),r=lt(r,u,c,1,i,h,k,a,nt,qe,null,Ce),he())},i(i){if(!b){for(let u=0;u<h.length;u+=1)z(r[u]);b=!0}},o(i){for(let u=0;u<r.length;u+=1)U(r[u]);b=!1},d(i){i&&f(e);for(let u=0;u<r.length;u+=1)r[u].d()}}}function qe(n,e){let l,t,s,a,r;const k=[{disabled:e[8]!==e[0].length-1},e[6]];function b(...c){return e[2](e[6],...c)}let h={};for(let c=0;c<k.length;c+=1)h=rt(h,k[c]);return t=new gt({props:h}),t.$on("flashcardReviewed",b),{key:n,first:null,c(){l=p("div"),ge(t.$$.fragment),s=H(),this.h()},l(c){l=v(c,"DIV",{class:!0,style:!0});var i=E(l);be(t.$$.fragment,i),s=O(i),i.forEach(f),this.h()},h(){o(l,"class","flashcard_holder svelte-1w4jii"),o(l,"style",a=e[6].transformValues),Q(l,"top",e[8]===e[0].length-1),this.first=l},m(c,i){L(c,l,i),ke(t,l,null),d(l,s),r=!0},p(c,i){e=c;const u=i&1?st(k,[{disabled:e[8]!==e[0].length-1},at(e[6])]):{};t.$set(u),(!r||i&1&&a!==(a=e[6].transformValues))&&o(l,"style",a),i&1&&Q(l,"top",e[8]===e[0].length-1)},i(c){r||(z(t.$$.fragment,c),r=!0)},o(c){U(t.$$.fragment,c),r=!1},d(c){c&&f(l),ye(t)}}}function bt(n){let e,l,t=n[0]&&n[0].length&&Fe(n);return{c(){t&&t.c(),e=me()},l(s){t&&t.l(s),e=me()},m(s,a){t&&t.m(s,a),L(s,e,a),l=!0},p(s,[a]){s[0]&&s[0].length?t?(t.p(s,a),a&1&&z(t,1)):(t=Fe(s),t.c(),z(t,1),t.m(e.parentNode,e)):t&&(ue(),U(t,1,1,()=>{t=null}),he())},i(s){l||(z(t),l=!0)},o(s){U(t),l=!1},d(s){t&&t.d(s),s&&f(e)}}}function kt(n,e,l){let{flashcards:t}=e;const s=h=>`
--offsetX: ${h!==t.length-1?Math.random()*4-2:0}rem; 
--offsetY: ${h!==t.length-1?Math.random()*4-2:0}rem;
--rotationZ: ${h!==t.length-1?(Math.random()-.5)*30:0}deg; 
				`,a=h=>{for(let c=h.length-1;c>0;c--){const i=Math.floor(Math.random()*(c+1)),u=h[c];h[c]=h[i],h[i]=u}},r=(h,c)=>{l(0,t=[...t.filter(i=>i.index!==c)])},k={prompt:"Great job! You reviewed everything.",answer:"",index:t.length,disabled:!0,transformValues:"--offsetX:0rem;--offsetY:0rem;--rotateZ:0rem;"};t&&t.length>0&&(a(t),t.forEach((h,c,i)=>{i[c].transformValues=s(c)}),t=[k,...t]);const b=(h,c)=>r(c,h.index);return n.$$set=h=>{"flashcards"in h&&l(0,t=h.flashcards)},[t,r,b]}class yt extends _e{constructor(e){super(),pe(this,e,kt,bt,ve,{flashcards:0})}}function Be(n){let e,l,t,s;return{c(){e=p("br"),l=P("Last tended "),t=P(n[12]),s=P(".")},l(a){e=v(a,"BR",{}),l=C(a,"Last tended "),t=C(a,n[12]),s=C(a,".")},m(a,r){L(a,e,r),L(a,l,r),L(a,t,r),L(a,s,r)},p:de,d(a){a&&f(e),a&&f(l),a&&f(t),a&&f(s)}}}function He(n){let e,l=`${n[10]} ${n[10]>1?"minutes":"minute"} to read. \u23F1`,t;return{c(){e=p("div"),t=P(l),this.h()},l(s){e=v(s,"DIV",{class:!0});var a=E(e);t=C(a,l),a.forEach(f),this.h()},h(){o(e,"class","note__ttr")},m(s,a){L(s,e,a),d(e,t)},p(s,a){a&1024&&l!==(l=`${s[10]} ${s[10]>1?"minutes":"minute"} to read. \u23F1`)&&te(t,l)},d(s){s&&f(e)}}}function Oe(n){let e,l;return{c(){e=p("img"),this.h()},l(t){e=v(t,"IMG",{src:!0,class:!0,alt:!0}),this.h()},h(){Pe(e.src,l=`/blog/${n[4]}`)||o(e,"src",l),o(e,"class","full-bleed"),o(e,"alt","Banner")},m(t,s){L(t,e,s)},p(t,s){s&16&&!Pe(e.src,l=`/blog/${t[4]}`)&&o(e,"src",l)},d(t){t&&f(e)}}}function Et(n){let e,l;return{c(){e=new ot(!1),l=me(),this.h()},l(t){e=ft(t,!1),l=me(),this.h()},h(){e.a=l},m(t,s){e.m(n[5],t,s),L(t,l,s)},p(t,s){s&32&&e.p(t[5])},d(t){t&&f(l),t&&e.d()}}}function Ue(n){let e,l;return e=new yt({props:{flashcards:n[9]}}),{c(){ge(e.$$.fragment)},l(t){be(e.$$.fragment,t)},m(t,s){ke(e,t,s),l=!0},p(t,s){const a={};s&512&&(a.flashcards=t[9]),e.$set(a)},i(t){l||(z(e.$$.fragment,t),l=!0)},o(t){U(e.$$.fragment,t),l=!1},d(t){ye(e,t)}}}function Xe(n){let e,l;return e=new ct({props:{notes:n[8],title:"Linked notes"}}),{c(){ge(e.$$.fragment)},l(t){be(e.$$.fragment,t)},m(t,s){ke(e,t,s),l=!0},p(t,s){const a={};s&256&&(a.notes=t[8]),e.$set(a)},i(t){l||(z(e.$$.fragment,t),l=!0)},o(t){U(e.$$.fragment,t),l=!1},d(t){ye(e,t)}}}function wt(n){let e,l,t,s,a,r,k,b,h,c,i,u,y,M,F,w,_,I,D,V,X,j,Y,K,J,$,Ee,we,Z,W,le=`${n[6]} ${n[7]}`,se,ae,De,Ie,ne,x,G,Te,re,q;document.title=e=n[0]+" - Allan Deutsch";let N=n[3]&&n[3]!==n[2]&&Be(n),R=n[10]>0&&He(n),S=n[4]&&Oe(n);G=new ht({props:{$$slots:{default:[Et]},$$scope:{ctx:n}}});let T=n[9]&&Ue(n),A=n[8].length&&Xe(n);return{c(){l=p("meta"),t=p("meta"),s=p("meta"),a=p("meta"),r=p("meta"),k=p("meta"),b=p("meta"),h=p("meta"),c=p("meta"),i=p("meta"),u=p("meta"),y=p("meta"),M=p("link"),F=H(),w=p("div"),_=p("header"),I=p("h1"),D=P(n[0]),V=H(),X=p("div"),j=p("div"),Y=p("span"),K=P("\u{1F331}"),J=P("Planted "),$=P(n[11]),Ee=P(`.
				`),N&&N.c(),we=H(),Z=p("div"),W=p("div"),se=P(le),De=H(),R&&R.c(),Ie=H(),S&&S.c(),ne=H(),x=p("div"),ge(G.$$.fragment),Te=H(),T&&T.c(),re=H(),A&&A.c(),this.h()},l(m){const g=it('[data-svelte="svelte-sq0hsb"]',document.head);l=v(g,"META",{property:!0,content:!0}),t=v(g,"META",{property:!0,content:!0}),s=v(g,"META",{property:!0,content:!0}),a=v(g,"META",{property:!0,content:!0}),r=v(g,"META",{property:!0,content:!0}),k=v(g,"META",{property:!0,content:!0}),b=v(g,"META",{property:!0,content:!0}),h=v(g,"META",{property:!0,content:!0}),c=v(g,"META",{property:!0,content:!0}),i=v(g,"META",{property:!0,content:!0}),u=v(g,"META",{property:!0,content:!0}),y=v(g,"META",{property:!0,content:!0}),M=v(g,"LINK",{rel:!0,href:!0,integrity:!0,crossorigin:!0}),g.forEach(f),F=O(m),w=v(m,"DIV",{class:!0});var B=E(w);_=v(B,"HEADER",{class:!0});var ie=E(_);I=v(ie,"H1",{class:!0});var Ve=E(I);D=C(Ve,n[0]),Ve.forEach(f),V=O(ie),X=v(ie,"DIV",{class:!0});var oe=E(X);j=v(oe,"DIV",{class:!0});var ee=E(j);Y=v(ee,"SPAN",{style:!0});var je=E(Y);K=C(je,"\u{1F331}"),je.forEach(f),J=C(ee,"Planted "),$=C(ee,n[11]),Ee=C(ee,`.
				`),N&&N.l(ee),ee.forEach(f),we=O(oe),Z=v(oe,"DIV",{class:!0});var fe=E(Z);W=v(fe,"DIV",{class:!0});var Ne=E(W);se=C(Ne,le),Ne.forEach(f),De=O(fe),R&&R.l(fe),fe.forEach(f),oe.forEach(f),ie.forEach(f),Ie=O(B),S&&S.l(B),ne=O(B),x=v(B,"DIV",{class:!0});var Re=E(x);be(G.$$.fragment,Re),Re.forEach(f),Te=O(B),T&&T.l(B),re=O(B),A&&A.l(B),B.forEach(f),this.h()},h(){o(l,"property","description"),o(l,"content",n[1]),o(t,"property","og:title"),o(t,"content",n[0]),o(s,"property","og:type"),o(s,"content","article"),o(a,"property","og:url"),o(a,"content","https://allandeutsch.com"),o(r,"property","og:description"),o(r,"content",n[1]),o(k,"property","og:locale"),o(k,"content","en_US"),o(b,"property","twitter:card"),o(b,"content","summary"),o(h,"property","twitter:url"),o(h,"content","https://allandeutsch.com"),o(c,"property","twitter:title"),o(c,"content",n[0]),o(i,"property","twitter:description"),o(i,"content",n[1]),o(u,"property","twitter:site"),o(u,"content","@AllanDeutsch"),o(y,"property","twitter:creator"),o(y,"content","@AllanDeutsch"),o(M,"rel","stylesheet"),o(M,"href","https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/katex.min.css"),o(M,"integrity","sha384-KiWOvVjnN8qwAZbuQyWDIbfCLFhLXNETzBQjA/92pIowpC0d2O3nppDGQVgwd2nB"),o(M,"crossorigin","anonymous"),o(I,"class","title svelte-zh6cbr"),ce(Y,"padding-right","var(--spacing-2)"),o(j,"class","date svelte-zh6cbr"),o(W,"class",ae="note__status "+n[6]+" svelte-zh6cbr"),o(Z,"class","status_ttr svelte-zh6cbr"),o(X,"class","note__metadata svelte-zh6cbr"),o(_,"class","svelte-zh6cbr"),o(x,"class","note__content svelte-zh6cbr"),o(w,"class","note__container svelte-zh6cbr")},m(m,g){d(document.head,l),d(document.head,t),d(document.head,s),d(document.head,a),d(document.head,r),d(document.head,k),d(document.head,b),d(document.head,h),d(document.head,c),d(document.head,i),d(document.head,u),d(document.head,y),d(document.head,M),L(m,F,g),L(m,w,g),d(w,_),d(_,I),d(I,D),d(_,V),d(_,X),d(X,j),d(j,Y),d(Y,K),d(j,J),d(j,$),d(j,Ee),N&&N.m(j,null),d(X,we),d(X,Z),d(Z,W),d(W,se),d(Z,De),R&&R.m(Z,null),d(w,Ie),S&&S.m(w,null),d(w,ne),d(w,x),ke(G,x,null),d(w,Te),T&&T.m(w,null),d(w,re),A&&A.m(w,null),q=!0},p(m,[g]){(!q||g&1)&&e!==(e=m[0]+" - Allan Deutsch")&&(document.title=e),(!q||g&2)&&o(l,"content",m[1]),(!q||g&1)&&o(t,"content",m[0]),(!q||g&2)&&o(r,"content",m[1]),(!q||g&1)&&o(c,"content",m[0]),(!q||g&2)&&o(i,"content",m[1]),(!q||g&1)&&te(D,m[0]),m[3]&&m[3]!==m[2]?N?N.p(m,g):(N=Be(m),N.c(),N.m(j,null)):N&&(N.d(1),N=null),(!q||g&192)&&le!==(le=`${m[6]} ${m[7]}`)&&te(se,le),(!q||g&64&&ae!==(ae="note__status "+m[6]+" svelte-zh6cbr"))&&o(W,"class",ae),m[10]>0?R?R.p(m,g):(R=He(m),R.c(),R.m(Z,null)):R&&(R.d(1),R=null),m[4]?S?S.p(m,g):(S=Oe(m),S.c(),S.m(w,ne)):S&&(S.d(1),S=null);const B={};g&16416&&(B.$$scope={dirty:g,ctx:m}),G.$set(B),m[9]?T?(T.p(m,g),g&512&&z(T,1)):(T=Ue(m),T.c(),z(T,1),T.m(w,re)):T&&(ue(),U(T,1,1,()=>{T=null}),he()),m[8].length?A?(A.p(m,g),g&256&&z(A,1)):(A=Xe(m),A.c(),z(A,1),A.m(w,null)):A&&(ue(),U(A,1,1,()=>{A=null}),he())},i(m){q||(z(G.$$.fragment,m),z(T),z(A),q=!0)},o(m){U(G.$$.fragment,m),U(T),U(A),q=!1},d(m){f(l),f(t),f(s),f(a),f(r),f(k),f(b),f(h),f(c),f(i),f(u),f(y),f(M),m&&f(F),m&&f(w),N&&N.d(),R&&R.d(),S&&S.d(),ye(G),T&&T.d(),A&&A.d()}}}async function Mt({fetch:n,params:e}){const l=await n(`/notes/${e.slug}.json`).then(s=>s.json()),t=[];for(const s in l.internalLinks){const a=await n(`${l.internalLinks[s]}/card.json`).then(r=>r.json());a?t.push(a):console.error(`Failed to load note preview data from linked note: ${l.internalLinks[s]}/card.json`)}return{props:Me(Ae({},l),{linkedNotes:t})}}function Dt(n,e,l){let{href:t}=e,{title:s}=e,{description:a}=e,{date:r}=e,{lastmod:k}=e,{image:b}=e,{html:h}=e,{status:c}=e,{statusIcon:i}=e,{linkedNotes:u}=e,{flashcards:y}=e,{timeToRead:M}=e;y&&y.forEach((_,I,D)=>{D[I]=Me(Ae({},_),{note:{href:t,title:s},index:I})});let F=new Date(Date.parse(r)).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});const w=new Date(Date.parse(k)).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return n.$$set=_=>{"href"in _&&l(13,t=_.href),"title"in _&&l(0,s=_.title),"description"in _&&l(1,a=_.description),"date"in _&&l(2,r=_.date),"lastmod"in _&&l(3,k=_.lastmod),"image"in _&&l(4,b=_.image),"html"in _&&l(5,h=_.html),"status"in _&&l(6,c=_.status),"statusIcon"in _&&l(7,i=_.statusIcon),"linkedNotes"in _&&l(8,u=_.linkedNotes),"flashcards"in _&&l(9,y=_.flashcards),"timeToRead"in _&&l(10,M=_.timeToRead)},[s,a,r,k,b,h,c,i,u,y,M,F,w,t]}class Vt extends _e{constructor(e){super(),pe(this,e,Dt,wt,ve,{href:13,title:0,description:1,date:2,lastmod:3,image:4,html:5,status:6,statusIcon:7,linkedNotes:8,flashcards:9,timeToRead:10})}}export{Vt as default,Mt as load};