import{s as U,f as v,l as N,a as D,g as b,h as k,m as I,d as u,c as F,j as g,R as B,k as Z,i as $,v as d,A as S,e as q,S as ue,z,E as ee,F as he,n as ce}from"./scheduler.7131e7f1.js";import{S as G,i as L,a as w,g as H,t as y,c as R,b as P,d as J,m as K,e as M}from"./index.9e889c2d.js";import{e as A}from"./each.49c20442.js";/* empty css                                                           */function de(i){let t,s;return{c(){t=v("p"),s=N(i[5]),this.h()},l(e){t=b(e,"P",{class:!0});var l=k(t);s=I(l,i[5]),l.forEach(u),this.h()},h(){g(t,"class","mt-3 line-clamp-3 h-[4.5em] leading-[1.5em] transition-all duration-200")},m(e,l){$(e,t,l),d(t,s)},p:S,d(e){e&&u(t)}}}function _e(i){let t,s,e,l,c,r,n,a,f,o,E,m,T,h=`${i[2]??""} ${i[3]??""}`,_,p=i[5]&&de(i);return{c(){t=v("a"),s=v("article"),e=v("section"),l=v("header"),c=v("h1"),r=N(i[1]),n=D(),p&&p.c(),a=D(),f=v("section"),o=v("div"),E=N(i[6]),m=D(),T=v("div"),_=N(h),this.h()},l(x){t=b(x,"A",{href:!0,class:!0});var C=k(t);s=b(C,"ARTICLE",{class:!0});var j=k(s);e=b(j,"SECTION",{class:!0});var V=k(e);l=b(V,"HEADER",{class:!0});var Q=k(l);c=b(Q,"H1",{class:!0});var W=k(c);r=I(W,i[1]),W.forEach(u),Q.forEach(u),n=F(V),p&&p.l(V),V.forEach(u),a=F(j),f=b(j,"SECTION",{class:!0});var O=k(f);o=b(O,"DIV",{class:!0});var X=k(o);E=I(X,i[6]),X.forEach(u),m=F(O),T=b(O,"DIV",{class:!0});var Y=k(T);_=I(Y,h),Y.forEach(u),O.forEach(u),j.forEach(u),C.forEach(u),this.h()},h(){g(c,"class","line-clamp-2 h-16 text-lg leading-[175%] svelte-1xtqadk"),g(l,"class","svelte-1xtqadk"),g(e,"class","notecontent"),g(o,"class","date min-w-[12ch] text-opacity-50 svelte-1xtqadk"),g(T,"class",B("min-w-[12ch] capitalize text-[hsl(var(--statusColor))]")+" svelte-1xtqadk"),g(f,"class","notemetadata border-t border-t-neutral-content border-opacity-60 pt-1 text-right text-sm svelte-1xtqadk"),g(s,"class",B("group flex h-64 w-full flex-col justify-between border border-solid border-base-300 bg-base-100 px-10 py-8 text-base-content text-opacity-80 transition-all duration-200 hover:border-[hsl(var(--statusColor))] hover:text-opacity-100 hover:shadow-xl hover:shadow-[hsla(var(--statusColor),.25)] active:-translate-y-1 active:scale-[1.01] active:shadow-md ")+" svelte-1xtqadk"),g(t,"href",i[4]),g(t,"class","m-4 flex w-full min-w-[300px] max-w-[450px] flex-1 basis-80 text-inherit no-underline"),Z(t,"--statusColor",i[0])},m(x,C){$(x,t,C),d(t,s),d(s,e),d(e,l),d(l,c),d(c,r),d(e,n),p&&p.m(e,null),d(s,a),d(s,f),d(f,o),d(o,E),d(f,m),d(f,T),d(T,_)},p(x,[C]){x[5]&&p.p(x,C),C&1&&Z(t,"--statusColor",x[0])},i:S,o:S,d(x){x&&u(t),p&&p.d()}}}function me(i,t,s){let e,{metadata:l}=t;const{title:c,lastmod:r,status:n,statusIcon:a,href:f,description:o}=l,E=new Date(Date.parse(r)).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"});return i.$$set=m=>{"metadata"in m&&s(7,l=m.metadata)},s(0,e=(()=>{switch(n){case"seedling":return"85, 40%, 55%";case"budding":return"92, 50%, 40%";case"evergreen":return"95, 60%, 30%";default:return null}})()),[e,c,n,a,f,o,E,l]}class fe extends G{constructor(t){super(),L(this,t,me,_e,U,{metadata:7})}}function te(i,t,s){const e=i.slice();return e[5]=t[s],e}function le(i){let t,s=A(i[0]),e=[];for(let l=0;l<s.length;l+=1)e[l]=se(te(i,s,l));return{c(){t=v("div");for(let l=0;l<e.length;l+=1)e[l].c();this.h()},l(l){t=b(l,"DIV",{class:!0});var c=k(t);for(let r=0;r<e.length;r+=1)e[r].l(c);c.forEach(u),this.h()},h(){g(t,"class","flex items-center")},m(l,c){$(l,t,c);for(let r=0;r<e.length;r+=1)e[r]&&e[r].m(t,null)},p(l,c){if(c&7){s=A(l[0]);let r;for(r=0;r<s.length;r+=1){const n=te(l,s,r);e[r]?e[r].p(n,c):(e[r]=se(n),e[r].c(),e[r].m(t,null))}for(;r<e.length;r+=1)e[r].d(1);e.length=s.length}},d(l){l&&u(t),z(e,l)}}}function se(i){let t,s=i[5].displayText+"",e,l,c,r,n;function a(){return i[3](i[5])}return{c(){t=v("button"),e=N(s),l=D(),this.h()},l(f){t=b(f,"BUTTON",{class:!0});var o=k(t);e=I(o,s),l=F(o),o.forEach(u),this.h()},h(){g(t,"class",c=B(`filter ${i[5].filterText} m-3 p-2`)+" svelte-rk0j1p"),ee(t,"active",i[1].includes(i[5].filterText))},m(f,o){$(f,t,o),d(t,e),d(t,l),r||(n=he(t,"click",a),r=!0)},p(f,o){i=f,o&1&&s!==(s=i[5].displayText+"")&&ce(e,s),o&1&&c!==(c=B(`filter ${i[5].filterText} m-3 p-2`)+" svelte-rk0j1p")&&g(t,"class",c),o&3&&ee(t,"active",i[1].includes(i[5].filterText))},d(f){f&&u(t),r=!1,n()}}}function pe(i){let t,s=i[0]&&le(i);return{c(){s&&s.c(),t=q()},l(e){s&&s.l(e),t=q()},m(e,l){s&&s.m(e,l),$(e,t,l)},p(e,[l]){e[0]?s?s.p(e,l):(s=le(e),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null)},i:S,o:S,d(e){e&&u(t),s&&s.d(e)}}}function ge(i,t,s){let e,{statuses:l}=t;const c=ue(),r=a=>{e.includes(a.filterText)?s(1,e=e.filter(f=>f!==a.filterText)):s(1,e=[...e,a.filterText]),c("update",{status:e})},n=a=>r(a);return i.$$set=a=>{"statuses"in a&&s(0,l=a.statuses)},s(1,e=new Array),[l,e,r,n]}class ve extends G{constructor(t){super(),L(this,t,ge,pe,U,{statuses:0})}}function re(i,t,s){const e=i.slice();return e[7]=t[s],e}function ae(i,t,s){const e=i.slice();return e[7]=t[s],e}function ne(i){let t,s;return t=new ve({props:{statuses:i[4]}}),t.$on("update",i[5]),{c(){P(t.$$.fragment)},l(e){J(t.$$.fragment,e)},m(e,l){K(t,e,l),s=!0},p:S,i(e){s||(w(t.$$.fragment,e),s=!0)},o(e){y(t.$$.fragment,e),s=!1},d(e){M(t,e)}}}function be(i){let t,s,e=A(i[0]),l=[];for(let r=0;r<e.length;r+=1)l[r]=ie(re(i,e,r));const c=r=>y(l[r],1,1,()=>{l[r]=null});return{c(){for(let r=0;r<l.length;r+=1)l[r].c();t=q()},l(r){for(let n=0;n<l.length;n+=1)l[n].l(r);t=q()},m(r,n){for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(r,n);$(r,t,n),s=!0},p(r,n){if(n&1){e=A(r[0]);let a;for(a=0;a<e.length;a+=1){const f=re(r,e,a);l[a]?(l[a].p(f,n),w(l[a],1)):(l[a]=ie(f),l[a].c(),w(l[a],1),l[a].m(t.parentNode,t))}for(H(),a=e.length;a<l.length;a+=1)c(a);R()}},i(r){if(!s){for(let n=0;n<e.length;n+=1)w(l[n]);s=!0}},o(r){l=l.filter(Boolean);for(let n=0;n<l.length;n+=1)y(l[n]);s=!1},d(r){r&&u(t),z(l,r)}}}function ke(i){let t,s,e=A(i[3]),l=[];for(let r=0;r<e.length;r+=1)l[r]=oe(ae(i,e,r));const c=r=>y(l[r],1,1,()=>{l[r]=null});return{c(){for(let r=0;r<l.length;r+=1)l[r].c();t=q()},l(r){for(let n=0;n<l.length;n+=1)l[n].l(r);t=q()},m(r,n){for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(r,n);$(r,t,n),s=!0},p(r,n){if(n&8){e=A(r[3]);let a;for(a=0;a<e.length;a+=1){const f=ae(r,e,a);l[a]?(l[a].p(f,n),w(l[a],1)):(l[a]=oe(f),l[a].c(),w(l[a],1),l[a].m(t.parentNode,t))}for(H(),a=e.length;a<l.length;a+=1)c(a);R()}},i(r){if(!s){for(let n=0;n<e.length;n+=1)w(l[n]);s=!0}},o(r){l=l.filter(Boolean);for(let n=0;n<l.length;n+=1)y(l[n]);s=!1},d(r){r&&u(t),z(l,r)}}}function ie(i){let t,s;return t=new fe({props:{metadata:i[7]}}),{c(){P(t.$$.fragment)},l(e){J(t.$$.fragment,e)},m(e,l){K(t,e,l),s=!0},p(e,l){const c={};l&1&&(c.metadata=e[7]),t.$set(c)},i(e){s||(w(t.$$.fragment,e),s=!0)},o(e){y(t.$$.fragment,e),s=!1},d(e){M(t,e)}}}function oe(i){let t,s;return t=new fe({props:{metadata:i[7]}}),{c(){P(t.$$.fragment)},l(e){J(t.$$.fragment,e)},m(e,l){K(t,e,l),s=!0},p(e,l){const c={};l&8&&(c.metadata=e[7]),t.$set(c)},i(e){s||(w(t.$$.fragment,e),s=!0)},o(e){y(t.$$.fragment,e),s=!1},d(e){M(t,e)}}}function we(i){let t,s,e,l,c,r,n,a,f,o=i[2]&&ne(i);const E=[ke,be],m=[];function T(h,_){return h[2]?0:1}return n=T(i),a=m[n]=E[n](i),{c(){t=v("div"),s=v("h2"),e=N(i[1]),l=D(),o&&o.c(),c=D(),r=v("div"),a.c(),this.h()},l(h){t=b(h,"DIV",{class:!0});var _=k(t);s=b(_,"H2",{class:!0});var p=k(s);e=I(p,i[1]),p.forEach(u),l=F(_),o&&o.l(_),c=F(_),r=b(_,"DIV",{class:!0});var x=k(r);a.l(x),x.forEach(u),_.forEach(u),this.h()},h(){g(s,"class","my-6 self-center text-5xl text-base-content"),g(r,"class","col-auto grid w-full grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] justify-items-center gap-3"),g(t,"class","flex w-full flex-col items-center")},m(h,_){$(h,t,_),d(t,s),d(s,e),d(t,l),o&&o.m(t,null),d(t,c),d(t,r),m[n].m(r,null),f=!0},p(h,[_]){(!f||_&2)&&ce(e,h[1]),h[2]?o?(o.p(h,_),_&4&&w(o,1)):(o=ne(h),o.c(),w(o,1),o.m(t,c)):o&&(H(),y(o,1,1,()=>{o=null}),R());let p=n;n=T(h),n===p?m[n].p(h,_):(H(),y(m[p],1,1,()=>{m[p]=null}),R(),a=m[n],a?a.p(h,_):(a=m[n]=E[n](h),a.c()),w(a,1),a.m(r,null))},i(h){f||(w(o),w(a),f=!0)},o(h){y(o),y(a),f=!1},d(h){h&&u(t),o&&o.d(),m[n].d()}}}function Ee(i,t,s){let{notes:e}=t,{title:l="Notes"}=t,{showFilters:c=!0}=t,r=e.map(o=>({filterText:o.status??"",displayText:`${o.status} ${o.statusIcon}`})).reduce((o,E)=>o.find(m=>E.filterText===m.filterText)?o:[...o,E],new Array),n=[],a=e;const f=o=>{n=o.detail.status,c&&(n.length?s(3,a=e.filter(E=>n.includes(E.status??""))):s(3,a=e))};return i.$$set=o=>{"notes"in o&&s(0,e=o.notes),"title"in o&&s(1,l=o.title),"showFilters"in o&&s(2,c=o.showFilters)},[e,l,c,a,r,f]}class Ce extends G{constructor(t){super(),L(this,t,Ee,we,U,{notes:0,title:1,showFilters:2})}}export{Ce as N};