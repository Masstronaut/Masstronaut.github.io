import{s as c,e as m,c as l,b as f,f as i,o as d,i as u}from"../chunks/scheduler.ewBkyc9q.js";import{S as p,i as _,c as h,a as g,m as $,t as v,b as y,d as b}from"../chunks/index.DpmaPz1F.js";import"../chunks/entry.DT5pBbIT.js";import"../chunks/NoteGridStatusFilter.svelte_svelte_type_style_lang.ujj1qoQH.js";import{N as w}from"../chunks/NoteGrid.CfLqeLLg.js";function x(o){let e,n,a;return n=new w({props:{notes:o[0].notes,title:"My notes"}}),{c(){e=m("div"),h(n.$$.fragment),this.h()},l(t){e=l(t,"DIV",{class:!0});var s=f(e);g(n.$$.fragment,s),s.forEach(i),this.h()},h(){d(e,"class","w-full")},m(t,s){u(t,e,s),$(n,e,null),a=!0},p(t,[s]){const r={};s&1&&(r.notes=t[0].notes),n.$set(r)},i(t){a||(v(n.$$.fragment,t),a=!0)},o(t){y(n.$$.fragment,t),a=!1},d(t){t&&i(e),b(n)}}}function N(o,e,n){let{data:a}=e;return o.$$set=t=>{"data"in t&&n(0,a=t.data)},[a]}class G extends p{constructor(e){super(),_(this,e,N,x,c,{data:0})}}export{G as component};