import{s as f,f as u,a as c,g as p,u as h,c as g,j as _,i as d,d as m}from"../chunks/scheduler.7131e7f1.js";import{S as v,i as w,b as y,d as $,m as I,a as k,t as x,e as b}from"../chunks/index.9e889c2d.js";/* empty css                                                                   */import{N as M}from"../chunks/NoteGrid.95cdc426.js";function j(o){let e,r=`<h1>My devlogs!</h1> <p>After embarking on the adventure of trying to launch a new product solo, I
		realized in the future I&#39;d want to revisit the journey. I decided to start
		making a weekly devlog detailing what I did during the week, both for my
		future self and for my current friends who want to stay in the loop.</p>`,n,a,i;return a=new M({props:{notes:o[0].notes,title:"Dev log entries",showFilters:!1}}),{c(){e=u("div"),e.innerHTML=r,n=c(),y(a.$$.fragment),this.h()},l(t){e=p(t,"DIV",{class:!0,"data-svelte-h":!0}),h(e)!=="svelte-dyv98d"&&(e.innerHTML=r),n=g(t),$(a.$$.fragment,t),this.h()},h(){_(e,"class","prose mx-auto w-full")},m(t,s){d(t,e,s),d(t,n,s),I(a,t,s),i=!0},p(t,[s]){const l={};s&1&&(l.notes=t[0].notes),a.$set(l)},i(t){i||(k(a.$$.fragment,t),i=!0)},o(t){x(a.$$.fragment,t),i=!1},d(t){t&&(m(e),m(n)),b(a,t)}}}function C(o,e,r){let{data:n}=e;return o.$$set=a=>{"data"in a&&r(0,n=a.data)},[n]}class S extends v{constructor(e){super(),w(this,e,C,j,f,{data:0})}}export{S as component};