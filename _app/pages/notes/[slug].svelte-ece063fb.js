var t=Object.defineProperty,s=Object.defineProperties,e=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,r=(s,e,a)=>e in s?t(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a,c=(t,s)=>{for(var e in s||(s={}))n.call(s,e)&&r(t,e,s[e]);if(a)for(var e of a(s))l.call(s,e)&&r(t,e,s[e]);return t};import{S as o,i,s as d,K as h,e as u,c as m,a as f,d as p,b as $,f as v,L as g,M as b,N as y,x as D,u as E,t as I,g as j,I as k,H as _,h as w,U as O,j as z,m as N,o as V,v as L,k as P,O as S,n as x,V as R,w as T,W as A,l as H,X as U,r as B}from"../../chunks/vendor-9d51a93a.js";import{N as G}from"../../chunks/NoteGrid-c2446295.js";function M(t){let s,e;const a=t[1].default,n=h(a,t,t[0],null);return{c(){s=u("div"),n&&n.c(),this.h()},l(t){s=m(t,"DIV",{class:!0});var e=f(s);n&&n.l(e),e.forEach(p),this.h()},h(){$(s,"class","mdTypography svelte-10k7ug5")},m(t,a){v(t,s,a),n&&n.m(s,null),e=!0},p(t,[s]){n&&n.p&&(!e||1&s)&&g(n,a,t,t[0],e?y(a,t[0],s,null):b(t[0]),null)},i(t){e||(D(n,t),e=!0)},o(t){E(n,t),e=!1},d(t){t&&p(s),n&&n.d(t)}}}function q(t,s,e){let{$$slots:a={},$$scope:n}=s;return t.$$set=t=>{"$$scope"in t&&e(0,n=t.$$scope)},[n,a]}class K extends o{constructor(t){super(),i(this,t,q,M,d,{})}}function W(t){let s,e,a,n;return{c(){s=u("br"),e=I("Last tended "),a=I(t[12]),n=I(".")},l(l){s=m(l,"BR",{}),e=j(l,"Last tended "),a=j(l,t[12]),n=j(l,".")},m(t,l){v(t,s,l),v(t,e,l),v(t,a,l),v(t,n,l)},p:k,d(t){t&&p(s),t&&p(e),t&&p(a),t&&p(n)}}}function X(t){let s,e,a=`${t[10]} ${t[10]>1?"minutes":"minute"} to read. ⏱`;return{c(){s=u("div"),e=I(a),this.h()},l(t){s=m(t,"DIV",{class:!0});var n=f(s);e=j(n,a),n.forEach(p),this.h()},h(){$(s,"class","note__ttr")},m(t,a){v(t,s,a),_(s,e)},p(t,s){1024&s&&a!==(a=`${t[10]} ${t[10]>1?"minutes":"minute"} to read. ⏱`)&&w(e,a)},d(t){t&&p(s)}}}function C(t){let s,e;return{c(){s=u("img"),this.h()},l(t){s=m(t,"IMG",{src:!0,class:!0,alt:!0}),this.h()},h(){O(s.src,e=`/blog/${t[4]}`)||$(s,"src",e),$(s,"class","full-bleed"),$(s,"alt","Banner")},m(t,e){v(t,s,e)},p(t,a){16&a&&!O(s.src,e=`/blog/${t[4]}`)&&$(s,"src",e)},d(t){t&&p(s)}}}function F(t){let s,e;return{c(){s=new A,e=H(),this.h()},l(t){s=U(t),e=H(),this.h()},h(){s.a=e},m(a,n){s.m(t[5],a,n),v(a,e,n)},p(t,e){32&e&&s.p(t[5])},d(t){t&&p(e),t&&s.d()}}}function J(t){let s,e;return s=new G({props:{notes:t[8],title:"Linked notes"}}),{c(){z(s.$$.fragment)},l(t){N(s.$$.fragment,t)},m(t,a){V(s,t,a),e=!0},p(t,e){const a={};256&e&&(a.notes=t[8]),s.$set(a)},i(t){e||(D(s.$$.fragment,t),e=!0)},o(t){E(s.$$.fragment,t),e=!1},d(t){L(s,t)}}}function Q(t){let s,e,a,n,l,r,c,o,i,d,h,g,b,y,k,O,A,H,U,G,M,q,Q,Y,Z,tt,st,et=`${t[6]} ${t[7]}`;document.title=s=t[1]+" - Allan Deutsch";let at=t[3]&&t[3]!==t[2]&&W(t),nt=t[10]>0&&X(t),lt=t[4]&&C(t);Y=new K({props:{$$slots:{default:[F]},$$scope:{ctx:t}}});let rt=t[8].length&&J(t);return{c(){e=P(),a=u("div"),n=u("header"),l=u("h1"),r=I(t[1]),c=P(),o=u("div"),i=u("div"),d=u("span"),h=I("🌱"),g=I("Planted "),b=I(t[11]),y=I(".\n\t\t\t\t"),at&&at.c(),k=P(),O=u("div"),A=u("div"),H=I(et),G=P(),nt&&nt.c(),M=P(),lt&&lt.c(),q=P(),Q=u("div"),z(Y.$$.fragment),Z=P(),tt=P(),rt&&rt.c(),this.h()},l(s){S('[data-svelte="svelte-1kysq9p"]',document.head).forEach(p),e=x(s),a=m(s,"DIV",{class:!0});var u=f(a);n=m(u,"HEADER",{class:!0});var $=f(n);l=m($,"H1",{class:!0});var v=f(l);r=j(v,t[1]),v.forEach(p),c=x($),o=m($,"DIV",{class:!0});var D=f(o);i=m(D,"DIV",{class:!0});var E=f(i);d=m(E,"SPAN",{style:!0});var I=f(d);h=j(I,"🌱"),I.forEach(p),g=j(E,"Planted "),b=j(E,t[11]),y=j(E,".\n\t\t\t\t"),at&&at.l(E),E.forEach(p),k=x(D),O=m(D,"DIV",{class:!0});var _=f(O);A=m(_,"DIV",{class:!0});var w=f(A);H=j(w,et),w.forEach(p),G=x(_),nt&&nt.l(_),_.forEach(p),D.forEach(p),$.forEach(p),M=x(u),lt&&lt.l(u),q=x(u),Q=m(u,"DIV",{class:!0});var z=f(Q);N(Y.$$.fragment,z),z.forEach(p),Z=x(u),tt=x(u),rt&&rt.l(u),u.forEach(p),this.h()},h(){$(l,"class","title svelte-zh6cbr"),R(d,"padding-right","var(--spacing-2)"),$(i,"class","date svelte-zh6cbr"),$(A,"class",U="note__status "+t[6]+" svelte-zh6cbr"),$(O,"class","status_ttr svelte-zh6cbr"),$(o,"class","note__metadata svelte-zh6cbr"),$(n,"class","svelte-zh6cbr"),$(Q,"class","note__content svelte-zh6cbr"),$(a,"class","note__container svelte-zh6cbr")},m(t,s){v(t,e,s),v(t,a,s),_(a,n),_(n,l),_(l,r),_(n,c),_(n,o),_(o,i),_(i,d),_(d,h),_(i,g),_(i,b),_(i,y),at&&at.m(i,null),_(o,k),_(o,O),_(O,A),_(A,H),_(O,G),nt&&nt.m(O,null),_(a,M),lt&&lt.m(a,null),_(a,q),_(a,Q),V(Y,Q,null),_(a,Z),_(a,tt),rt&&rt.m(a,null),st=!0},p(t,[e]){(!st||2&e)&&s!==(s=t[1]+" - Allan Deutsch")&&(document.title=s),(!st||2&e)&&w(r,t[1]),t[3]&&t[3]!==t[2]?at?at.p(t,e):(at=W(t),at.c(),at.m(i,null)):at&&(at.d(1),at=null),(!st||192&e)&&et!==(et=`${t[6]} ${t[7]}`)&&w(H,et),(!st||64&e&&U!==(U="note__status "+t[6]+" svelte-zh6cbr"))&&$(A,"class",U),t[10]>0?nt?nt.p(t,e):(nt=X(t),nt.c(),nt.m(O,null)):nt&&(nt.d(1),nt=null),t[4]?lt?lt.p(t,e):(lt=C(t),lt.c(),lt.m(a,q)):lt&&(lt.d(1),lt=null);const n={};65568&e&&(n.$$scope={dirty:e,ctx:t}),Y.$set(n),t[8].length?rt?(rt.p(t,e),256&e&&D(rt,1)):(rt=J(t),rt.c(),D(rt,1),rt.m(a,null)):rt&&(B(),E(rt,1,1,(()=>{rt=null})),T())},i(t){st||(D(Y.$$.fragment,t),D(false),D(rt),st=!0)},o(t){E(Y.$$.fragment,t),E(false),E(rt),st=!1},d(t){t&&p(e),t&&p(a),at&&at.d(),nt&&nt.d(),lt&&lt.d(),L(Y),rt&&rt.d()}}}async function Y({fetch:t,page:a}){const n=await t(`/notes/${a.params.slug}.json`).then((t=>t.json())),l=[];for(const s in n.internalLinks){const e=await t(`${n.internalLinks[s]}-card.json`).then((t=>t.json()));l.push(e)}return{props:(r=c({},n),o={linkedNotes:l},s(r,e(o)))};var r,o}function Z(t,s,e){let{href:a}=s,{title:n}=s,{date:l}=s,{lastmod:r}=s,{image:c}=s,{html:o}=s,{status:i}=s,{statusIcon:d}=s,{linkedNotes:h}=s,{flashcards:u}=s,{timeToRead:m}=s,f=new Date(Date.parse(l)).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});const p=new Date(Date.parse(r)).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return t.$$set=t=>{"href"in t&&e(0,a=t.href),"title"in t&&e(1,n=t.title),"date"in t&&e(2,l=t.date),"lastmod"in t&&e(3,r=t.lastmod),"image"in t&&e(4,c=t.image),"html"in t&&e(5,o=t.html),"status"in t&&e(6,i=t.status),"statusIcon"in t&&e(7,d=t.statusIcon),"linkedNotes"in t&&e(8,h=t.linkedNotes),"flashcards"in t&&e(9,u=t.flashcards),"timeToRead"in t&&e(10,m=t.timeToRead)},[a,n,l,r,c,o,i,d,h,u,m,f,p]}class tt extends o{constructor(t){super(),i(this,t,Z,Q,d,{href:0,title:1,date:2,lastmod:3,image:4,html:5,status:6,statusIcon:7,linkedNotes:8,flashcards:9,timeToRead:10})}}export{tt as default,Y as load};
