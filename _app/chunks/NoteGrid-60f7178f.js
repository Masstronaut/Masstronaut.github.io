import{S as R,i as L,s as J,e as k,t as w,c as b,a as E,h as C,d as _,b as v,g as F,J as h,j as z,k as S,m as V,n as A,Q as $,I as ee,R as de,T as P,l as q,U as me,x as Q,y as K,z as M,r as T,p as D,C as W,o as H,q as O,A as fe,B as ue,D as _e}from"./index-60c6c23d.js";function te(c){let e,n;return{c(){e=k("p"),n=w(c[4]),this.h()},l(t){e=b(t,"P",{class:!0});var l=E(e);n=C(l,c[4]),l.forEach(_),this.h()},h(){v(e,"class","svelte-jemp66")},m(t,l){F(t,e,l),h(e,n)},p(t,l){l&16&&z(n,t[4])},d(t){t&&_(e)}}}function ve(c){let e,n,t,l,a,s,i,r,f,o,I,g,y,u=`${c[1]} ${c[2]}`,d,N,m=c[4]&&te(c);return{c(){e=k("a"),n=k("article"),t=k("section"),l=k("header"),a=k("h1"),s=w(c[0]),i=S(),m&&m.c(),r=S(),f=k("section"),o=k("div"),I=w(c[5]),g=S(),y=k("div"),d=w(u),this.h()},l(p){e=b(p,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var j=E(e);n=b(j,"ARTICLE",{class:!0});var G=E(n);t=b(G,"SECTION",{class:!0});var U=E(t);l=b(U,"HEADER",{class:!0});var X=E(l);a=b(X,"H1",{class:!0});var Y=E(a);s=C(Y,c[0]),Y.forEach(_),X.forEach(_),i=V(U),m&&m.l(U),U.forEach(_),r=V(G),f=b(G,"SECTION",{class:!0});var B=E(f);o=b(B,"DIV",{class:!0});var Z=E(o);I=C(Z,c[5]),Z.forEach(_),g=V(B),y=b(B,"DIV",{class:!0});var x=E(y);d=C(x,u),x.forEach(_),B.forEach(_),G.forEach(_),j.forEach(_),this.h()},h(){v(a,"class","svelte-jemp66"),v(l,"class","svelte-jemp66"),v(t,"class","notecontent"),v(o,"class","date svelte-jemp66"),v(y,"class",N="status "+c[1]+" svelte-jemp66"),v(f,"class","notemetadata svelte-jemp66"),v(n,"class","svelte-jemp66"),v(e,"sveltekit:prefetch",""),v(e,"href",c[3]),v(e,"class","svelte-jemp66")},m(p,j){F(p,e,j),h(e,n),h(n,t),h(t,l),h(l,a),h(a,s),h(t,i),m&&m.m(t,null),h(n,r),h(n,f),h(f,o),h(o,I),h(f,g),h(f,y),h(y,d)},p(p,[j]){j&1&&z(s,p[0]),p[4]?m?m.p(p,j):(m=te(p),m.c(),m.m(t,null)):m&&(m.d(1),m=null),j&6&&u!==(u=`${p[1]} ${p[2]}`)&&z(d,u),j&2&&N!==(N="status "+p[1]+" svelte-jemp66")&&v(y,"class",N),j&8&&v(e,"href",p[3])},i:A,o:A,d(p){p&&_(e),m&&m.d()}}}function ge(c,e,n){let{title:t="Untitled note"}=e,{lastmod:l}=e,{status:a}=e,{statusIcon:s}=e,{href:i}=e,{description:r}=e;const f=new Date(Date.parse(l)).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"});return c.$$set=o=>{"title"in o&&n(0,t=o.title),"lastmod"in o&&n(6,l=o.lastmod),"status"in o&&n(1,a=o.status),"statusIcon"in o&&n(2,s=o.statusIcon),"href"in o&&n(3,i=o.href),"description"in o&&n(4,r=o.description)},[t,a,s,i,r,f,l]}class he extends R{constructor(e){super(),L(this,e,ge,ve,J,{title:0,lastmod:6,status:1,statusIcon:2,href:3,description:4})}}function le(c,e,n){const t=c.slice();return t[5]=e[n],t}function se(c){let e,n=c[0],t=[];for(let l=0;l<n.length;l+=1)t[l]=ne(le(c,n,l));return{c(){e=k("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=b(l,"DIV",{class:!0});var a=E(e);for(let s=0;s<t.length;s+=1)t[s].l(a);a.forEach(_),this.h()},h(){v(e,"class","filter_container svelte-1ttyqt8")},m(l,a){F(l,e,a);for(let s=0;s<t.length;s+=1)t[s].m(e,null)},p(l,a){if(a&7){n=l[0];let s;for(s=0;s<n.length;s+=1){const i=le(l,n,s);t[s]?t[s].p(i,a):(t[s]=ne(i),t[s].c(),t[s].m(e,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=n.length}},d(l){l&&_(e),P(t,l)}}}function ne(c){let e,n=c[5].displayText+"",t,l,a,s,i;function r(){return c[3](c[5])}return{c(){e=k("div"),t=w(n),l=S(),this.h()},l(f){e=b(f,"DIV",{class:!0});var o=E(e);t=C(o,n),l=V(o),o.forEach(_),this.h()},h(){v(e,"class",a=$(`filter ${c[5].filterText}`)+" svelte-1ttyqt8"),ee(e,"active",c[1].includes(c[5].filterText))},m(f,o){F(f,e,o),h(e,t),h(e,l),s||(i=de(e,"click",r),s=!0)},p(f,o){c=f,o&1&&n!==(n=c[5].displayText+"")&&z(t,n),o&1&&a!==(a=$(`filter ${c[5].filterText}`)+" svelte-1ttyqt8")&&v(e,"class",a),o&3&&ee(e,"active",c[1].includes(c[5].filterText))},d(f){f&&_(e),s=!1,i()}}}function pe(c){let e,n=c[0]&&se(c);return{c(){n&&n.c(),e=q()},l(t){n&&n.l(t),e=q()},m(t,l){n&&n.m(t,l),F(t,e,l)},p(t,[l]){t[0]?n?n.p(t,l):(n=se(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:A,o:A,d(t){n&&n.d(t),t&&_(e)}}}function ke(c,e,n){let t,{statuses:l}=e;const a=me(),s=r=>{t.includes(r.filterText)?n(1,t=t.filter(f=>f!==r.filterText)):n(1,t=[...t,r.filterText]),a("update",{status:t})},i=r=>s(r);return c.$$set=r=>{"statuses"in r&&n(0,l=r.statuses)},n(1,t=[]),[l,t,s,i]}class be extends R{constructor(e){super(),L(this,e,ke,pe,J,{statuses:0})}}function re(c,e,n){const t=c.slice();return t[7]=e[n],t}function ie(c,e,n){const t=c.slice();return t[7]=e[n],t}function ae(c){let e,n;return e=new be({props:{statuses:c[4]}}),e.$on("update",c[5]),{c(){Q(e.$$.fragment)},l(t){K(e.$$.fragment,t)},m(t,l){M(e,t,l),n=!0},p:A,i(t){n||(T(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function Ee(c){let e,n,t=c[0],l=[];for(let s=0;s<t.length;s+=1)l[s]=oe(re(c,t,s));const a=s=>D(l[s],1,1,()=>{l[s]=null});return{c(){for(let s=0;s<l.length;s+=1)l[s].c();e=q()},l(s){for(let i=0;i<l.length;i+=1)l[i].l(s);e=q()},m(s,i){for(let r=0;r<l.length;r+=1)l[r].m(s,i);F(s,e,i),n=!0},p(s,i){if(i&1){t=s[0];let r;for(r=0;r<t.length;r+=1){const f=re(s,t,r);l[r]?(l[r].p(f,i),T(l[r],1)):(l[r]=oe(f),l[r].c(),T(l[r],1),l[r].m(e.parentNode,e))}for(H(),r=t.length;r<l.length;r+=1)a(r);O()}},i(s){if(!n){for(let i=0;i<t.length;i+=1)T(l[i]);n=!0}},o(s){l=l.filter(Boolean);for(let i=0;i<l.length;i+=1)D(l[i]);n=!1},d(s){P(l,s),s&&_(e)}}}function Te(c){let e,n,t=c[3],l=[];for(let s=0;s<t.length;s+=1)l[s]=ce(ie(c,t,s));const a=s=>D(l[s],1,1,()=>{l[s]=null});return{c(){for(let s=0;s<l.length;s+=1)l[s].c();e=q()},l(s){for(let i=0;i<l.length;i+=1)l[i].l(s);e=q()},m(s,i){for(let r=0;r<l.length;r+=1)l[r].m(s,i);F(s,e,i),n=!0},p(s,i){if(i&8){t=s[3];let r;for(r=0;r<t.length;r+=1){const f=ie(s,t,r);l[r]?(l[r].p(f,i),T(l[r],1)):(l[r]=ce(f),l[r].c(),T(l[r],1),l[r].m(e.parentNode,e))}for(H(),r=t.length;r<l.length;r+=1)a(r);O()}},i(s){if(!n){for(let i=0;i<t.length;i+=1)T(l[i]);n=!0}},o(s){l=l.filter(Boolean);for(let i=0;i<l.length;i+=1)D(l[i]);n=!1},d(s){P(l,s),s&&_(e)}}}function oe(c){let e,n;const t=[c[7]];let l={};for(let a=0;a<t.length;a+=1)l=_e(l,t[a]);return e=new he({props:l}),{c(){Q(e.$$.fragment)},l(a){K(e.$$.fragment,a)},m(a,s){M(e,a,s),n=!0},p(a,s){const i=s&1?fe(t,[ue(a[7])]):{};e.$set(i)},i(a){n||(T(e.$$.fragment,a),n=!0)},o(a){D(e.$$.fragment,a),n=!1},d(a){W(e,a)}}}function ce(c){let e,n;const t=[c[7]];let l={};for(let a=0;a<t.length;a+=1)l=_e(l,t[a]);return e=new he({props:l}),{c(){Q(e.$$.fragment)},l(a){K(e.$$.fragment,a)},m(a,s){M(e,a,s),n=!0},p(a,s){const i=s&8?fe(t,[ue(a[7])]):{};e.$set(i)},i(a){n||(T(e.$$.fragment,a),n=!0)},o(a){D(e.$$.fragment,a),n=!1},d(a){W(e,a)}}}function Ie(c){let e,n,t,l,a,s,i,r,f,o=c[2]&&ae(c);const I=[Te,Ee],g=[];function y(u,d){return u[2]?0:1}return i=y(c),r=g[i]=I[i](c),{c(){e=k("div"),n=k("h2"),t=w(c[1]),l=S(),o&&o.c(),a=S(),s=k("div"),r.c(),this.h()},l(u){e=b(u,"DIV",{class:!0});var d=E(e);n=b(d,"H2",{class:!0});var N=E(n);t=C(N,c[1]),N.forEach(_),l=V(d),o&&o.l(d),a=V(d),s=b(d,"DIV",{class:!0});var m=E(s);r.l(m),m.forEach(_),d.forEach(_),this.h()},h(){v(n,"class","svelte-13p5zmt"),v(s,"class","note__grid svelte-13p5zmt"),v(e,"class","note__container svelte-13p5zmt")},m(u,d){F(u,e,d),h(e,n),h(n,t),h(e,l),o&&o.m(e,null),h(e,a),h(e,s),g[i].m(s,null),f=!0},p(u,[d]){(!f||d&2)&&z(t,u[1]),u[2]?o?(o.p(u,d),d&4&&T(o,1)):(o=ae(u),o.c(),T(o,1),o.m(e,a)):o&&(H(),D(o,1,1,()=>{o=null}),O());let N=i;i=y(u),i===N?g[i].p(u,d):(H(),D(g[N],1,1,()=>{g[N]=null}),O(),r=g[i],r?r.p(u,d):(r=g[i]=I[i](u),r.c()),T(r,1),r.m(s,null))},i(u){f||(T(o),T(r),f=!0)},o(u){D(o),D(r),f=!1},d(u){u&&_(e),o&&o.d(),g[i].d()}}}function Ne(c,e,n){let{notes:t}=e,{title:l="Notes"}=e,{showFilters:a=!1}=e,s=t.map(o=>({filterText:o.status,displayText:`${o.status} ${o.statusIcon}`})).reduce((o,I)=>o.find(g=>I.filterText===g.filterText)?o:[...o,I],[]),i=[],r=t;const f=o=>{i=o.detail.status,a&&(i.length?n(3,r=t.filter(I=>i.includes(I.status))):n(3,r=t))};return c.$$set=o=>{"notes"in o&&n(0,t=o.notes),"title"in o&&n(1,l=o.title),"showFilters"in o&&n(2,a=o.showFilters)},[t,l,a,r,s,f]}class ye extends R{constructor(e){super(),L(this,e,Ne,Ie,J,{notes:0,title:1,showFilters:2})}}export{ye as N};