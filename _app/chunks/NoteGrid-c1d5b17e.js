import{S as t,i as e,s,e as l,t as n,c as r,a,g as c,d as o,b as i,f,H as u,h,k as d,n as m,I as v,P as p,G as g,Q as $,R as z,l as x,T as E,j as w,m as T,o as I,x as D,u as N,v as V,r as j,w as y,p as S,q,B as F}from"./vendor-9d51a93a.js";function H(t){let e,s;return{c(){e=l("p"),s=n(t[4]),this.h()},l(l){e=r(l,"P",{class:!0});var n=a(e);s=c(n,t[4]),n.forEach(o),this.h()},h(){i(e,"class","svelte-wz8zu6")},m(t,l){f(t,e,l),u(e,s)},p(t,e){16&e&&h(s,t[4])},d(t){t&&o(e)}}}function A(t){let e,s,p,g,$,z,x,E,w,T,I,D,N,V,j,y=`${t[1]} ${t[2]}`,S=t[4]&&H(t);return{c(){e=l("a"),s=l("article"),p=l("section"),g=l("header"),$=l("h1"),z=n(t[0]),x=d(),S&&S.c(),E=d(),w=l("section"),T=l("div"),I=n(t[5]),D=d(),N=l("div"),V=n(y),this.h()},l(l){e=r(l,"A",{href:!0,class:!0});var n=a(e);s=r(n,"ARTICLE",{class:!0});var i=a(s);p=r(i,"SECTION",{class:!0});var f=a(p);g=r(f,"HEADER",{class:!0});var u=a(g);$=r(u,"H1",{class:!0});var h=a($);z=c(h,t[0]),h.forEach(o),u.forEach(o),x=m(f),S&&S.l(f),f.forEach(o),E=m(i),w=r(i,"SECTION",{class:!0});var d=a(w);T=r(d,"DIV",{class:!0});var v=a(T);I=c(v,t[5]),v.forEach(o),D=m(d),N=r(d,"DIV",{class:!0});var j=a(N);V=c(j,y),j.forEach(o),d.forEach(o),i.forEach(o),n.forEach(o),this.h()},h(){i($,"class","svelte-wz8zu6"),i(g,"class","svelte-wz8zu6"),i(p,"class","notecontent"),i(T,"class","date svelte-wz8zu6"),i(N,"class",j="status "+t[1]+" svelte-wz8zu6"),i(w,"class","notemetadata svelte-wz8zu6"),i(s,"class","svelte-wz8zu6"),i(e,"href",t[3]),i(e,"class","svelte-wz8zu6")},m(t,l){f(t,e,l),u(e,s),u(s,p),u(p,g),u(g,$),u($,z),u(p,x),S&&S.m(p,null),u(s,E),u(s,w),u(w,T),u(T,I),u(w,D),u(w,N),u(N,V)},p(t,[s]){1&s&&h(z,t[0]),t[4]?S?S.p(t,s):(S=H(t),S.c(),S.m(p,null)):S&&(S.d(1),S=null),6&s&&y!==(y=`${t[1]} ${t[2]}`)&&h(V,y),2&s&&j!==(j="status "+t[1]+" svelte-wz8zu6")&&i(N,"class",j),8&s&&i(e,"href",t[3])},i:v,o:v,d(t){t&&o(e),S&&S.d()}}}function B(t,e,s){let{title:l="Untitled note"}=e,{lastmod:n}=e,{status:r}=e,{statusIcon:a}=e,{href:c}=e,{description:o}=e;const i=new Date(Date.parse(n)).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"});return t.$$set=t=>{"title"in t&&s(0,l=t.title),"lastmod"in t&&s(6,n=t.lastmod),"status"in t&&s(1,r=t.status),"statusIcon"in t&&s(2,a=t.statusIcon),"href"in t&&s(3,c=t.href),"description"in t&&s(4,o=t.description)},[l,r,a,c,o,i,n]}class C extends t{constructor(t){super(),e(this,t,B,A,s,{title:0,lastmod:6,status:1,statusIcon:2,href:3,description:4})}}function R(t,e,s){const l=t.slice();return l[5]=e[s],l}function _(t){let e,s=t[0],n=[];for(let l=0;l<s.length;l+=1)n[l]=k(R(t,s,l));return{c(){e=l("div");for(let t=0;t<n.length;t+=1)n[t].c();this.h()},l(t){e=r(t,"DIV",{class:!0});var s=a(e);for(let e=0;e<n.length;e+=1)n[e].l(s);s.forEach(o),this.h()},h(){i(e,"class","filter_container svelte-1xvzvjv")},m(t,s){f(t,e,s);for(let l=0;l<n.length;l+=1)n[l].m(e,null)},p(t,l){if(7&l){let r;for(s=t[0],r=0;r<s.length;r+=1){const a=R(t,s,r);n[r]?n[r].p(a,l):(n[r]=k(a),n[r].c(),n[r].m(e,null))}for(;r<n.length;r+=1)n[r].d(1);n.length=s.length}},d(t){t&&o(e),z(n,t)}}}function k(t){let e,s,v,z,x,E,w=t[5].displayText+"";function T(){return t[3](t[5])}return{c(){e=l("div"),s=n(w),v=d(),this.h()},l(t){e=r(t,"DIV",{class:!0});var l=a(e);s=c(l,w),v=m(l),l.forEach(o),this.h()},h(){i(e,"class",z=p(`filter ${t[5].filterText}`)+" svelte-1xvzvjv"),g(e,"active",t[1].includes(t[5].filterText))},m(t,l){f(t,e,l),u(e,s),u(e,v),x||(E=$(e,"click",T),x=!0)},p(l,n){t=l,1&n&&w!==(w=t[5].displayText+"")&&h(s,w),1&n&&z!==(z=p(`filter ${t[5].filterText}`)+" svelte-1xvzvjv")&&i(e,"class",z),3&n&&g(e,"active",t[1].includes(t[5].filterText))},d(t){t&&o(e),x=!1,E()}}}function L(t){let e,s=t[0]&&_(t);return{c(){s&&s.c(),e=x()},l(t){s&&s.l(t),e=x()},m(t,l){s&&s.m(t,l),f(t,e,l)},p(t,[l]){t[0]?s?s.p(t,l):(s=_(t),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null)},i:v,o:v,d(t){s&&s.d(t),t&&o(e)}}}function O(t,e,s){let l,{statuses:n}=e;const r=E(),a=t=>{l.includes(t.filterText)?s(1,l=l.filter((e=>e!==t.filterText))):s(1,l=[...l,t.filterText]),r("update",{status:l})};return t.$$set=t=>{"statuses"in t&&s(0,n=t.statuses)},s(1,l=[]),[n,l,a,t=>a(t)]}class P extends t{constructor(t){super(),e(this,t,O,L,s,{statuses:0})}}function U(t,e,s){const l=t.slice();return l[7]=e[s],l}function b(t,e,s){const l=t.slice();return l[7]=e[s],l}function G(t){let e,s;return e=new P({props:{statuses:t[4]}}),e.$on("update",t[5]),{c(){w(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,l){I(e,t,l),s=!0},p:v,i(t){s||(D(e.$$.fragment,t),s=!0)},o(t){N(e.$$.fragment,t),s=!1},d(t){V(e,t)}}}function Q(t){let e,s,l=t[0],n=[];for(let a=0;a<l.length;a+=1)n[a]=K(U(t,l,a));const r=t=>N(n[t],1,1,(()=>{n[t]=null}));return{c(){for(let t=0;t<n.length;t+=1)n[t].c();e=x()},l(t){for(let e=0;e<n.length;e+=1)n[e].l(t);e=x()},m(t,l){for(let e=0;e<n.length;e+=1)n[e].m(t,l);f(t,e,l),s=!0},p(t,s){if(1&s){let a;for(l=t[0],a=0;a<l.length;a+=1){const r=U(t,l,a);n[a]?(n[a].p(r,s),D(n[a],1)):(n[a]=K(r),n[a].c(),D(n[a],1),n[a].m(e.parentNode,e))}for(j(),a=l.length;a<n.length;a+=1)r(a);y()}},i(t){if(!s){for(let t=0;t<l.length;t+=1)D(n[t]);s=!0}},o(t){n=n.filter(Boolean);for(let e=0;e<n.length;e+=1)N(n[e]);s=!1},d(t){z(n,t),t&&o(e)}}}function J(t){let e,s,l=t[3],n=[];for(let a=0;a<l.length;a+=1)n[a]=M(b(t,l,a));const r=t=>N(n[t],1,1,(()=>{n[t]=null}));return{c(){for(let t=0;t<n.length;t+=1)n[t].c();e=x()},l(t){for(let e=0;e<n.length;e+=1)n[e].l(t);e=x()},m(t,l){for(let e=0;e<n.length;e+=1)n[e].m(t,l);f(t,e,l),s=!0},p(t,s){if(8&s){let a;for(l=t[3],a=0;a<l.length;a+=1){const r=b(t,l,a);n[a]?(n[a].p(r,s),D(n[a],1)):(n[a]=M(r),n[a].c(),D(n[a],1),n[a].m(e.parentNode,e))}for(j(),a=l.length;a<n.length;a+=1)r(a);y()}},i(t){if(!s){for(let t=0;t<l.length;t+=1)D(n[t]);s=!0}},o(t){n=n.filter(Boolean);for(let e=0;e<n.length;e+=1)N(n[e]);s=!1},d(t){z(n,t),t&&o(e)}}}function K(t){let e,s;const l=[t[7]];let n={};for(let r=0;r<l.length;r+=1)n=F(n,l[r]);return e=new C({props:n}),{c(){w(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,l){I(e,t,l),s=!0},p(t,s){const n=1&s?S(l,[q(t[7])]):{};e.$set(n)},i(t){s||(D(e.$$.fragment,t),s=!0)},o(t){N(e.$$.fragment,t),s=!1},d(t){V(e,t)}}}function M(t){let e,s;const l=[t[7]];let n={};for(let r=0;r<l.length;r+=1)n=F(n,l[r]);return e=new C({props:n}),{c(){w(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,l){I(e,t,l),s=!0},p(t,s){const n=8&s?S(l,[q(t[7])]):{};e.$set(n)},i(t){s||(D(e.$$.fragment,t),s=!0)},o(t){N(e.$$.fragment,t),s=!1},d(t){V(e,t)}}}function W(t){let e,s,v,p,g,$,z,x,E,w=t[2]&&G(t);const T=[J,Q],I=[];function V(t,e){return t[2]?0:1}return z=V(t),x=I[z]=T[z](t),{c(){e=l("div"),s=l("h2"),v=n(t[1]),p=d(),w&&w.c(),g=d(),$=l("div"),x.c(),this.h()},l(l){e=r(l,"DIV",{class:!0});var n=a(e);s=r(n,"H2",{class:!0});var i=a(s);v=c(i,t[1]),i.forEach(o),p=m(n),w&&w.l(n),g=m(n),$=r(n,"DIV",{class:!0});var f=a($);x.l(f),f.forEach(o),n.forEach(o),this.h()},h(){i(s,"class","svelte-qzrlmc"),i($,"class","notegrid svelte-qzrlmc"),i(e,"class","note__container svelte-qzrlmc")},m(t,l){f(t,e,l),u(e,s),u(s,v),u(e,p),w&&w.m(e,null),u(e,g),u(e,$),I[z].m($,null),E=!0},p(t,[s]){(!E||2&s)&&h(v,t[1]),t[2]?w?(w.p(t,s),4&s&&D(w,1)):(w=G(t),w.c(),D(w,1),w.m(e,g)):w&&(j(),N(w,1,1,(()=>{w=null})),y());let l=z;z=V(t),z===l?I[z].p(t,s):(j(),N(I[l],1,1,(()=>{I[l]=null})),y(),x=I[z],x?x.p(t,s):(x=I[z]=T[z](t),x.c()),D(x,1),x.m($,null))},i(t){E||(D(w),D(x),E=!0)},o(t){N(w),N(x),E=!1},d(t){t&&o(e),w&&w.d(),I[z].d()}}}function X(t,e,s){let{notes:l}=e,{title:n="Notes"}=e,{showFilters:r=!1}=e,a=l.map((t=>({filterText:t.status,displayText:`${t.status} ${t.statusIcon}`}))).reduce(((t,e)=>t.find((t=>e.filterText===t.filterText))?t:[...t,e]),[]),c=[],o=l;return t.$$set=t=>{"notes"in t&&s(0,l=t.notes),"title"in t&&s(1,n=t.title),"showFilters"in t&&s(2,r=t.showFilters)},[l,n,r,o,a,t=>{c=t.detail.status,r&&(c.length?s(3,o=l.filter((t=>c.includes(t.status)))):s(3,o=l))}]}class Y extends t{constructor(t){super(),e(this,t,X,W,s,{notes:0,title:1,showFilters:2})}}export{Y as N};
