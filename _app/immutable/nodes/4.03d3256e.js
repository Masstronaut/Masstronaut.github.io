import{s as X,r as Y,f as i,a as W,l as H,g as c,h as m,c as C,d as u,m as N,j as n,i as Z,v as t,w as ee,x as te,y as se,H as ae}from"../chunks/scheduler.7dca22b3.js";import{S as oe,i as re,b as K,d as M,m as O,a as x,t as z,e as Q}from"../chunks/index.4240f835.js";import{I as R,a as ne,C as le}from"../chunks/index.f98022c6.js";import{p as ie}from"../chunks/stores.fcee9fc4.js";function ce(d){var F,G;let s,l,b,h,E,a,I,D,f,P,L,$,p,U,V,A,v,_,T,y;const j=d[2].default,o=Y(j,d,d[1],null);return p=new R({props:{src:ne,theme:(F=d[0].route.id)!=null&&F.endsWith("profile")?"solid":"outline",class:"w-5"}}),_=new R({props:{src:le,theme:(G=d[0].route.id)!=null&&G.endsWith("account")?"solid":"outline",class:"w-5"}}),{c(){s=i("div"),l=i("input"),b=W(),h=i("div"),o&&o.c(),E=W(),a=i("div"),I=i("label"),D=W(),f=i("ul"),P=H(`Settings
			`),L=i("li"),$=i("a"),K(p.$$.fragment),U=H("Profile"),V=W(),A=i("li"),v=i("a"),K(_.$$.fragment),T=H("Account"),this.h()},l(e){s=c(e,"DIV",{class:!0});var r=m(s);l=c(r,"INPUT",{id:!0,type:!0,class:!0}),b=C(r),h=c(r,"DIV",{class:!0});var k=m(h);o&&o.l(k),k.forEach(u),E=C(r),a=c(r,"DIV",{class:!0});var w=m(a);I=c(w,"LABEL",{for:!0,class:!0}),m(I).forEach(u),D=C(w),f=c(w,"UL",{class:!0});var g=m(f);P=N(g,`Settings
			`),L=c(g,"LI",{});var S=m(L);$=c(S,"A",{href:!0});var q=m($);M(p.$$.fragment,q),U=N(q,"Profile"),q.forEach(u),S.forEach(u),V=C(g),A=c(g,"LI",{});var J=m(A);v=c(J,"A",{href:!0});var B=m(v);M(_.$$.fragment,B),T=N(B,"Account"),B.forEach(u),J.forEach(u),g.forEach(u),w.forEach(u),r.forEach(u),this.h()},h(){n(l,"id","drawer-toggle-checkbox"),n(l,"type","checkbox"),l.checked=!0,n(l,"class","drawer-toggle"),n(h,"class","drawer-content"),n(I,"for","drawer-toggle-checkbox"),n(I,"class","drawer-overlay"),n($,"href","/settings/profile"),n(v,"href","/settings/account"),n(f,"class","menu w-40 bg-base-100 p-4 text-base-content"),n(a,"class","drawer-side"),n(s,"class","drawer-mobile drawer")},m(e,r){Z(e,s,r),t(s,l),t(s,b),t(s,h),o&&o.m(h,null),t(s,E),t(s,a),t(a,I),t(a,D),t(a,f),t(f,P),t(f,L),t(L,$),O(p,$,null),t($,U),t(f,V),t(f,A),t(A,v),O(_,v,null),t(v,T),y=!0},p(e,[r]){var g,S;o&&o.p&&(!y||r&2)&&ee(o,j,e,e[1],y?se(j,e[1],r,null):te(e[1]),null);const k={};r&1&&(k.theme=(g=e[0].route.id)!=null&&g.endsWith("profile")?"solid":"outline"),p.$set(k);const w={};r&1&&(w.theme=(S=e[0].route.id)!=null&&S.endsWith("account")?"solid":"outline"),_.$set(w)},i(e){y||(x(o,e),x(p.$$.fragment,e),x(_.$$.fragment,e),y=!0)},o(e){z(o,e),z(p.$$.fragment,e),z(_.$$.fragment,e),y=!1},d(e){e&&u(s),o&&o.d(e),Q(p),Q(_)}}}function ue(d,s,l){let b;ae(d,ie,a=>l(0,b=a));let{$$slots:h={},$$scope:E}=s;return d.$$set=a=>{"$$scope"in a&&l(1,E=a.$$scope)},[b,E,h]}class pe extends oe{constructor(s){super(),re(this,s,ue,ce,X,{})}}export{pe as component};
