import{s as X,C as M,a5 as q,f as h,a as v,g as p,u as c,c as y,j as D,i as r,d as l,A as Y}from"./scheduler.7131e7f1.js";import{S as F,i as I,b as B,d as E,m as G,a as N,t as O,e as U}from"./index.9e889c2d.js";import{g as J,a as z}from"./spread.8a54911c.js";import{M as K}from"./MDSveXNoteLayout.846afafb.js";import{T as Q}from"./Table.65c06635.js";function R(u){let t,m='<tr><th align="right"></th> <th>Principal</th> <th>Agent</th></tr>',o,i,a='<tr><td align="right">1</td> <td>Win</td> <td>Win</td></tr> <tr><td align="right">2</td> <td>Win</td> <td>Lose</td></tr> <tr><td align="right">3</td> <td>Lose</td> <td>Win</td></tr> <tr><td align="right">4</td> <td>Lose</td> <td>Lose</td></tr>';return{c(){t=h("thead"),t.innerHTML=m,o=v(),i=h("tbody"),i.innerHTML=a},l(n){t=p(n,"THEAD",{"data-svelte-h":!0}),c(t)!=="svelte-1jey1x9"&&(t.innerHTML=m),o=y(n),i=p(n,"TBODY",{"data-svelte-h":!0}),c(i)!=="svelte-19kbv8c"&&(i.innerHTML=a)},m(n,d){r(n,t,d),r(n,o,d),r(n,i,d)},p:Y,d(n){n&&(l(t),l(o),l(i))}}}function V(u){let t,m="Collaboration runs smoothly when the the involved parties trust each other. As Harari discusses in <em>Sapiens</em>, humans have invented many systems of shared values to establish this trust between people who lack a direct relationship - religion, government, companies, etc.",o,i,a="Another issue with trust is the alignment of incentives. Taleb discusses this in <em>Skin in the Game</em> as <em>risk asymmetry</em>. The principal-agent problem is when the party that is making decisions (the agent) and the party of those decisions are made for (the principal) have asymmetric exposure to the risks and rewards of those decisions.",n,d,C="A simplistic view is that each party has 2 possible outcomes; they can win or lose. There are 4 possible outcomes:",x,f,w,_,A='<a aria-hidden="true" tabindex="-1" href="#asymmetry-of-risk-and-reward"><span class="icon icon-link"></span></a><a href="#asymmetry-of-risk-and-reward" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Asymmetry of risk and reward',k,b,P="When the agent isn’t exposed to the risks of their decisions, they may not have the best interests of the principal in mind. This asymmetry of risk can lead to undesirable outcomes. The agent could take advantage of the Principal and still gain a reward, producing a <em>lose-win</em> outcome. Some examples:",L,T,S="<li>A financial advisor who gets paid the same whether the investors they are advising make or lose money</li> <li>Corporate strategists who get paid a bonus on quarterly cadence but make decisions on a 3-year time horizon</li> <li>Legislators who write laws that don’t impact them</li>",$,g,W='<a aria-hidden="true" tabindex="-1" href="#alignment-of-risk-and-reward"><span class="icon icon-link"></span></a><a href="#alignment-of-risk-and-reward" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Alignment of risk and reward',H;return f=new Q({props:{$$slots:{default:[R]},$$scope:{ctx:u}}}),{c(){t=h("p"),t.innerHTML=m,o=v(),i=h("p"),i.innerHTML=a,n=v(),d=h("p"),d.textContent=C,x=v(),B(f.$$.fragment),w=v(),_=h("h2"),_.innerHTML=A,k=v(),b=h("p"),b.innerHTML=P,L=v(),T=h("ul"),T.innerHTML=S,$=v(),g=h("h2"),g.innerHTML=W,this.h()},l(e){t=p(e,"P",{"data-svelte-h":!0}),c(t)!=="svelte-1o896po"&&(t.innerHTML=m),o=y(e),i=p(e,"P",{"data-svelte-h":!0}),c(i)!=="svelte-1q946x2"&&(i.innerHTML=a),n=y(e),d=p(e,"P",{"data-svelte-h":!0}),c(d)!=="svelte-1ukwcxo"&&(d.textContent=C),x=y(e),E(f.$$.fragment,e),w=y(e),_=p(e,"H2",{id:!0,"data-svelte-h":!0}),c(_)!=="svelte-90yems"&&(_.innerHTML=A),k=y(e),b=p(e,"P",{"data-svelte-h":!0}),c(b)!=="svelte-glvl66"&&(b.innerHTML=P),L=y(e),T=p(e,"UL",{"data-svelte-h":!0}),c(T)!=="svelte-1ldk1yt"&&(T.innerHTML=S),$=y(e),g=p(e,"H2",{id:!0,"data-svelte-h":!0}),c(g)!=="svelte-17y5eck"&&(g.innerHTML=W),this.h()},h(){D(_,"id","asymmetry-of-risk-and-reward"),D(g,"id","alignment-of-risk-and-reward")},m(e,s){r(e,t,s),r(e,o,s),r(e,i,s),r(e,n,s),r(e,d,s),r(e,x,s),G(f,e,s),r(e,w,s),r(e,_,s),r(e,k,s),r(e,b,s),r(e,L,s),r(e,T,s),r(e,$,s),r(e,g,s),H=!0},p(e,s){const j={};s&2&&(j.$$scope={dirty:s,ctx:e}),f.$set(j)},i(e){H||(N(f.$$.fragment,e),H=!0)},o(e){O(f.$$.fragment,e),H=!1},d(e){e&&(l(t),l(o),l(i),l(n),l(d),l(x),l(w),l(_),l(k),l(b),l(L),l(T),l($),l(g)),U(f,e)}}}function ee(u){let t,m;const o=[u[0],Z];let i={$$slots:{default:[V]},$$scope:{ctx:u}};for(let a=0;a<o.length;a+=1)i=M(i,o[a]);return t=new K({props:i}),{c(){B(t.$$.fragment)},l(a){E(t.$$.fragment,a)},m(a,n){G(t,a,n),m=!0},p(a,[n]){const d=n&1?J(o,[n&1&&z(a[0]),n&0&&z(Z)]):{};n&2&&(d.$$scope={dirty:n,ctx:a}),t.$set(d)},i(a){m||(N(t.$$.fragment,a),m=!0)},o(a){O(t.$$.fragment,a),m=!1},d(a){U(t,a)}}}const Z={title:"The principal-agent problem",description:"When there is a conflict in priorities between one party (the principal) and another party (the agent) that executions on their behalf.",slug:"notes/principal-agent-problem",publish:!0,lastmod:"2021-11-29T00:00:00.000Z",date:"2021-11-29T00:00:00.000Z",aliases:["The principal-agent problem","principal-agent problem","moral hazard"],tags:["status/seedling","taxonomy/reference"],readTime:2,internalLinks:[],flashcards:[]};function te(u,t,m){return u.$$set=o=>{m(0,t=M(M({},t),q(o)))},t=q(t),[t]}class le extends F{constructor(t){super(),I(this,t,te,ee,X,{})}}export{le as default,Z as metadata};