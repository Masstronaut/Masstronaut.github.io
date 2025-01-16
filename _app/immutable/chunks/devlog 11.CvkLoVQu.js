import{s as O,p as M,q as $,e as p,a as w,c as h,m as c,g as b,o as D,i,n as G,f as s}from"./scheduler.ewBkyc9q.js";import{S as q,i as R,c as J,a as Q,m as U,t as Z,b as B,d as E}from"./index.DpmaPz1F.js";import{g as K,a as P}from"./spread.CgU5AtxT.js";import{M as X}from"./MDSveXNoteLayout.DNNeItI1.js";function Y(y){let t,u='<a aria-hidden="true" tabindex="-1" href="#building-an-ai-improv-skit-generator"><span class="icon icon-link"></span></a><a href="#building-an-ai-improv-skit-generator" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Building an AI improv skit generator',r,l,n="I find that over time I encounter a number of technologies I’m interested in trying out. Often, it’s not easy to do so in an existing project because something else is already in use that fills a similar role. A couple recent examples for me are:",o,d,H='<li><a href="https://deno.land" rel="nofollow">Deno</a>, a <em>JavaScript</em>/<em>TypeScript</em> runtime and package manager</li> <li><a href="https://orm.drizzle.team/docs/overview" rel="nofollow">Drizzle ORM</a>, a <em>TypeScript</em> Object-Relational Mapping (ORM) tool with great performance that has syntax similar to SQL</li>',x,f,C='Additionally, I learned about <a href="https://www.langchain.com/" rel="nofollow">LangChain and LangGraph</a> recently at <a href="https://cascadiajs.com/2024/" rel="nofollow">CascadiaJS</a> and was pretty excited to try my hand at building something with it. I had no need for it in my existing projects, though. Time to start a new project!',L,v,S="I decided to use LangGraph to build an AI agent that orchestrates an AI-powered improv show. It runs on a Deno server that exposes a single endpoint that allows users to provide a skit topic, and then generates a few rounds of banter between some AI comedians on the topic. As the agent completes steps in its task, the progress is saved as a <code>Checkpoint</code> which I save in a database using Drizzle.",T,g,j='The project isn’t deployed anywhere, but you can check out the code <a href="https://github.com/Masstronaut/langchain-endpoint" rel="nofollow">on my GitHub</a>. If you want a little improv skit of your own, the repo has some setup instructions in the readme.',k,m,z='<a aria-hidden="true" tabindex="-1" href="#learning-neovim"><span class="icon icon-link"></span></a><a href="#learning-neovim" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Learning Neovim',I,_,A='On Sunday I was still in the learning mood, but didn’t feel like doing any serious programming work. So instead I decided to cave to some peer pressure (and YouTube algorithm recommendations) and <a href="https://www.youtube.com/playlist?list=PLsz00TDipIffreIaUNk64KxTIkQaGguqn" rel="nofollow">learn how to setup Neovim as an IDE</a>. The experience brought back fond memories of my time as an Arch Linux user, and now <a href="/notes/use-neovim">I use Neovim btw</a>. I was surprised to find that getting to a similar level of productivity with vim vs without takes very little time, and the rest is upside. Plus, editing text is <em>substantially</em> more fun using vim. As someone who spends most of the day typing, I believe it’s worth learning just to make the day more fun!';return{c(){t=p("h2"),t.innerHTML=u,r=w(),l=p("p"),l.textContent=n,o=w(),d=p("ul"),d.innerHTML=H,x=w(),f=p("p"),f.innerHTML=C,L=w(),v=p("p"),v.innerHTML=S,T=w(),g=p("p"),g.innerHTML=j,k=w(),m=p("h2"),m.innerHTML=z,I=w(),_=p("p"),_.innerHTML=A,this.h()},l(e){t=h(e,"H2",{id:!0,"data-svelte-h":!0}),c(t)!=="svelte-o4z8dd"&&(t.innerHTML=u),r=b(e),l=h(e,"P",{"data-svelte-h":!0}),c(l)!=="svelte-1mhghrr"&&(l.textContent=n),o=b(e),d=h(e,"UL",{"data-svelte-h":!0}),c(d)!=="svelte-pg8fi0"&&(d.innerHTML=H),x=b(e),f=h(e,"P",{"data-svelte-h":!0}),c(f)!=="svelte-u0shbn"&&(f.innerHTML=C),L=b(e),v=h(e,"P",{"data-svelte-h":!0}),c(v)!=="svelte-ef3ivj"&&(v.innerHTML=S),T=b(e),g=h(e,"P",{"data-svelte-h":!0}),c(g)!=="svelte-hsw5ku"&&(g.innerHTML=j),k=b(e),m=h(e,"H2",{id:!0,"data-svelte-h":!0}),c(m)!=="svelte-1b7444x"&&(m.innerHTML=z),I=b(e),_=h(e,"P",{"data-svelte-h":!0}),c(_)!=="svelte-1wnzpgl"&&(_.innerHTML=A),this.h()},h(){D(t,"id","building-an-ai-improv-skit-generator"),D(m,"id","learning-neovim")},m(e,a){i(e,t,a),i(e,r,a),i(e,l,a),i(e,o,a),i(e,d,a),i(e,x,a),i(e,f,a),i(e,L,a),i(e,v,a),i(e,T,a),i(e,g,a),i(e,k,a),i(e,m,a),i(e,I,a),i(e,_,a)},p:G,d(e){e&&(s(t),s(r),s(l),s(o),s(d),s(x),s(f),s(L),s(v),s(T),s(g),s(k),s(m),s(I),s(_))}}}function F(y){let t,u;const r=[y[0],N];let l={$$slots:{default:[Y]},$$scope:{ctx:y}};for(let n=0;n<r.length;n+=1)l=M(l,r[n]);return t=new X({props:l}),{c(){J(t.$$.fragment)},l(n){Q(t.$$.fragment,n)},m(n,o){U(t,n,o),u=!0},p(n,[o]){const d=o&1?K(r,[o&1&&P(n[0]),o&0&&P(N)]):{};o&2&&(d.$$scope={dirty:o,ctx:n}),t.$set(d)},i(n){u||(Z(t.$$.fragment,n),u=!0)},o(n){B(t.$$.fragment,n),u=!1},d(n){E(t,n)}}}const N={title:"devlog 11",description:"Learning new technologies, vim, and neovim!",slug:"devlog/11",publish:!0,lastmod:"2024-07-09T00:00:00.000Z",date:"2024-07-28T00:00:00.000Z",aliases:null,tags:["status/seedling"],readTime:3,internalLinks:["/notes/use-neovim"],flashcards:[]};function V(y,t,u){return y.$$set=r=>{u(0,t=M(M({},t),$(r)))},t=$(t),[t]}class ae extends q{constructor(t){super(),R(this,t,V,F,O,{})}}export{ae as default,N as metadata};