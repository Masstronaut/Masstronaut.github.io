import{s as ue,C as G,a3 as oe,f as p,a as o,a4 as X,g as i,u as d,c as r,a5 as B,j as ye,i as t,A as ve,d as l}from"./scheduler.5beeadad.js";import{S as he,i as me,b as fe,d as ge,m as Fe,a as Ce,t as we,e as Re}from"./index.bfd99307.js";import{g as be,a as re}from"./spread.8a54911c.js";import{M as Ee}from"./MDSveXNoteLayout.b620d765.js";function Te(P){let a,h="Web browsers try to protect the security of their users. One way they do this is by prohibiting scripts on one domain from interacting with resources on another domain by default. Sometimes as a developer, I <em>want</em> users to be able to interact with resources on my site from somewhere else:",y,u,n="<li>Embedded media</li> <li>A widget or badge showing their data on another site</li> <li>Calling a public APIs from their browser (client-side)</li> <li>Sending analytics data to a 3rd-party analytics server</li>",c,v,V='Requesting a resource on one site from another is called a “cross-origin resource sharing” (CORS) request. While building <a href="https://penguinsight.com" rel="nofollow">Penguinsight</a> (it’s a tool that enables developers to provide feedback on developer documentation) I had just such a need. Imagine this scenario:',L,f,Z="<p>a developer is reading the documentation on using an API from one of my customers. One of the steps doesn’t work, and they want to use the Penguinsight widget on the page to provide feedback. That feedback gets sent to the Penguinsight server, which is on a <em>different</em> domain than the documentation site.</p>",M,g,z="The user is requesting to access a resource (my API) <em>cross-origin</em>. Their browser makes a request to the Penguinsight server, but it’s not the <code>POST /api/feedback</code> request made by my tool. Before that happens, the browser needs to make a “preflight request” to make sure the server allows the actual request. This is done by requesting <code>OPTIONS /api/feedback</code>. The browser will only make the <code>POST</code> request if the server tells it that the request is allowed.",I,q,ie=`<pre class="shiki" style="background-color: #ffffff; color: #24292f" ts="true"><div class="language-id">ts</div><div class='code-container'><code><div class='line'><span style="color: #CF222E">const</span><span style="color: #24292F"> </span><span style="color: #0550AE">corsHeaders</span><span style="color: #24292F"> </span><span style="color: #CF222E">=</span><span style="color: #24292F"> &#123;</span></div><div class='line'><span style="color: #24292F">  </span><span style="color: #0A3069">'Access-Control-Allow-Origin'</span><span style="color: #24292F">: </span><span style="color: #0A3069">'*'</span><span style="color: #24292F">,</span></div><div class='line'><span style="color: #24292F">  </span><span style="color: #0A3069">'Access-Control-Allow-Methods'</span><span style="color: #24292F">: </span><span style="color: #0A3069">'OPTIONS,POST'</span><span style="color: #24292F">,</span></div><div class='line'><span style="color: #24292F">&#125;;</span></div></code></div></pre>`,O,F,Q='<code>&#39;Access-Control-Allow-Origin&#39;</code> specifies which domains are allowed to <em>originate</em> requests for the resource. The wildcard, <code>&#39;*&#39;</code>, is used to denote that any site can request it. For a public API like on <a href="https://penguinsight.com" rel="nofollow">Penguinsight</a>, this is the right option.',x,C,Y="<code>&#39;Access-Control-Allow-Methods&#39;</code> gives the browser a comma-separated list of the allowed HTTP method verbs. <code>OPTIONS</code> is needed for the preflight request, and I also needed <code>POST</code> for the <code>/api/feedback</code> endpoint. You can add other HTTP methods here such as <code>GET</code>, <code>PUT</code>, or <code>PATCH</code>, but I didn’t need them for Penguinsight.",j,w,J='To make sure my SvelteKit backend responds to CORS requests correctly, I wrote a <a href="https://kit.svelte.dev/docs/hooks#server-hooks" rel="nofollow">SvelteKit server hook</a> to add them. SvelteKit hooks can be used to run code on all incoming requests before handing them off to the SvelteKit router.',U,_,de=`<pre class="shiki twoslash lsp" style="background-color: #ffffff; color: #24292f" ts="true"><div class="language-id">ts</div><div class='code-container'><code><div class='line dim'><span style="color: #CF222E">import</span><span style="color: #24292F"> </span><span style="color: #CF222E">type</span><span style="color: #24292F"> &#123; <data-lsp lsp='(alias) type Handle = (input: &#123;&#10;    event: RequestEvent;&#10;    resolve(event: RequestEvent, opts?: ResolveOptions): MaybePromise&lt;Response>;&#10;&#125;) => MaybePromise&lt;Response>&#10;import Handle' >Handle</data-lsp> &#125; </span><span style="color: #CF222E">from</span><span style="color: #24292F"> </span><span style="color: #0A3069">"@sveltejs/kit"</span><span style="color: #24292F">;</span></div><div class='line dim'>&nbsp;</div><div class='line dim'><span style="color: #CF222E">export</span><span style="color: #24292F"> </span><span style="color: #CF222E">const</span><span style="color: #24292F"> </span><span style="color: #0550AE"><data-lsp lsp='const allowCORS: (&#123; event, resolve &#125;: &#123;&#10;    event: RequestEvent&lt;Partial&lt;Record&lt;string, string>>, string | null>;&#10;    resolve(event: RequestEvent&lt;Partial&lt;Record&lt;string, string>>, string | null>, opts?: ResolveOptions | undefined): MaybePromise&lt;...>;&#10;&#125;) => Promise&lt;...>' >allowCORS</data-lsp></span><span style="color: #24292F"> </span><span style="color: #CF222E">=</span><span style="color: #24292F"> (</span><span style="color: #CF222E">async</span><span style="color: #24292F"> (&#123; </span><span style="color: #953800"><data-lsp lsp='(parameter) event: RequestEvent&lt;Partial&lt;Record&lt;string, string>>, string | null>' >event</data-lsp></span><span style="color: #24292F">, </span><span style="color: #953800"><data-lsp lsp='(parameter) resolve: (event: RequestEvent&lt;Partial&lt;Record&lt;string, string>>, string | null>, opts?: ResolveOptions | undefined) => MaybePromise&lt;Response>' >resolve</data-lsp></span><span style="color: #24292F"> &#125;) </span><span style="color: #CF222E">=&gt;</span><span style="color: #24292F"> &#123;</span></div><div class='line dim'><span style="color: #24292F">  </span><span style="color: #6E7781">// 1. If the request isn&apos;t for a public API, don&apos;t add CORS headers</span></div><div class='line dim'><span style="color: #24292F">  </span><span style="color: #CF222E">const</span><span style="color: #24292F"> </span><span style="color: #0550AE"><data-lsp lsp='const url: URL' >url</data-lsp></span><span style="color: #24292F"> </span><span style="color: #CF222E">=</span><span style="color: #24292F"> </span><span style="color: #CF222E">new</span><span style="color: #24292F"> </span><span style="color: #8250DF"><data-lsp lsp='var URL: new (url: string | URL, base?: string | URL | undefined) => URL' >URL</data-lsp></span><span style="color: #24292F">(<data-lsp lsp='(parameter) event: RequestEvent&lt;Partial&lt;Record&lt;string, string>>, string | null>' >event</data-lsp>.<data-lsp lsp='(property) RequestEvent&lt;Partial&lt;Record&lt;string, string>>, string | null>.request: Request' >request</data-lsp>.<data-lsp lsp='(property) Request.url: string' >url</data-lsp>);</span></div><div class='line dim'><span style="color: #24292F">  </span><span style="color: #CF222E">if</span><span style="color: #24292F"> (</span><span style="color: #CF222E">!</span><span style="color: #24292F"><data-lsp lsp='const url: URL' >url</data-lsp>.<data-lsp lsp='(property) URL.pathname: string' >pathname</data-lsp>.</span><span style="color: #8250DF"><data-lsp lsp='(method) String.startsWith(searchString: string, position?: number | undefined): boolean' >startsWith</data-lsp></span><span style="color: #24292F">(</span><span style="color: #0A3069">&apos;/api&apos;</span><span style="color: #24292F">))</span></div><div class='line dim'><span style="color: #24292F">    </span><span style="color: #CF222E">return</span><span style="color: #24292F"> </span><span style="color: #CF222E">await</span><span style="color: #24292F"> </span><span style="color: #8250DF"><data-lsp lsp='(parameter) resolve: (event: RequestEvent&lt;Partial&lt;Record&lt;string, string>>, string | null>, opts?: ResolveOptions | undefined) => MaybePromise&lt;Response>' >resolve</data-lsp></span><span style="color: #24292F">(<data-lsp lsp='(parameter) event: RequestEvent&lt;Partial&lt;Record&lt;string, string>>, string | null>' >event</data-lsp>);</span></div><div class='line dim'>&nbsp;</div><div class='line dim'><span style="color: #24292F">  </span><span style="color: #6E7781">// 2. for options requests, just return the cors headers immediately.</span></div><div class='line dim'><span style="color: #24292F">  </span><span style="color: #6E7781">// Calling &#96;resolve(event)&#96; without an OPTIONS handler will throw an error.</span></div><div class='line highlight'><span style="color: #24292F">  </span><span style="color: #6E7781">// If that error isn&apos;t handled, the CORS headers won&apos;t be added.</span></div><div class='line highlight'><span style="color: #24292F">  </span><span style="color: #CF222E">if</span><span style="color: #24292F"> (<data-lsp lsp='(parameter) event: RequestEvent&lt;Partial&lt;Record&lt;string, string>>, string | null>' >event</data-lsp>.<data-lsp lsp='(property) RequestEvent&lt;Partial&lt;Record&lt;string, string>>, string | null>.request: Request' >request</data-lsp>.<data-lsp lsp='(property) Request.method: string' >method</data-lsp> </span><span style="color: #CF222E">===</span><span style="color: #24292F"> </span><span style="color: #0A3069">&apos;OPTIONS&apos;</span><span style="color: #24292F">) &#123;</span></div><div class='line highlight'><span style="color: #24292F">    </span><span style="color: #CF222E">return</span><span style="color: #24292F"> </span><span style="color: #CF222E">new</span><span style="color: #24292F"> </span><span style="color: #8250DF"><data-lsp lsp='var Response: new (body?: BodyInit | null | undefined, init?: ResponseInit | undefined) => Response' >Response</data-lsp></span><span style="color: #24292F">(</span><span style="color: #0550AE">null</span><span style="color: #24292F">, &#123; <data-lsp lsp='(property) ResponseInit.headers?: HeadersInit | undefined' >headers</data-lsp>: <data-lsp lsp='const corsHeaders: &#123;&#10;    &apos;Access-Control-Allow-Origin&apos;: string;&#10;    &apos;Access-Control-Allow-Methods&apos;: string;&#10;&#125;' >corsHeaders</data-lsp> &#125;);</span></div><div class='line dim'><span style="color: #24292F">  &#125;</span></div><div class='line dim'>&nbsp;</div><div class='line dim'><span style="color: #24292F">  </span><span style="color: #6E7781">// 3. For other request methods, let the sveltekit router resolve it, then add the CORS headers</span></div><div class='line dim'><span style="color: #24292F">  </span><span style="color: #CF222E">const</span><span style="color: #24292F"> </span><span style="color: #0550AE"><data-lsp lsp='const response: Response' >response</data-lsp></span><span style="color: #24292F"> </span><span style="color: #CF222E">=</span><span style="color: #24292F"> </span><span style="color: #CF222E">await</span><span style="color: #24292F"> </span><span style="color: #8250DF"><data-lsp lsp='(parameter) resolve: (event: RequestEvent&lt;Partial&lt;Record&lt;string, string>>, string | null>, opts?: ResolveOptions | undefined) => MaybePromise&lt;Response>' >resolve</data-lsp></span><span style="color: #24292F">(<data-lsp lsp='(parameter) event: RequestEvent&lt;Partial&lt;Record&lt;string, string>>, string | null>' >event</data-lsp>);</span></div><div class='line dim'><span style="color: #24292F">  </span><span style="color: #CF222E">for</span><span style="color: #24292F"> (</span><span style="color: #CF222E">const</span><span style="color: #24292F"> [</span><span style="color: #0550AE"><data-lsp lsp='const key: string' >key</data-lsp></span><span style="color: #24292F">, </span><span style="color: #0550AE"><data-lsp lsp='const value: string' >value</data-lsp></span><span style="color: #24292F">] </span><span style="color: #CF222E">of</span><span style="color: #24292F"> </span><span style="color: #0550AE"><data-lsp lsp='var Object: ObjectConstructor' >Object</data-lsp></span><span style="color: #24292F">.</span><span style="color: #8250DF"><data-lsp lsp='(method) ObjectConstructor.entries&lt;string>(o: &#123;&#10;    [s: string]: string;&#10;&#125; | ArrayLike&lt;string>): [string, string][] (+1 overload)' >entries</data-lsp></span><span style="color: #24292F">(<data-lsp lsp='const corsHeaders: &#123;&#10;    &apos;Access-Control-Allow-Origin&apos;: string;&#10;    &apos;Access-Control-Allow-Methods&apos;: string;&#10;&#125;' >corsHeaders</data-lsp>)) &#123;</span></div><div class='line dim'><span style="color: #24292F">    <data-lsp lsp='const response: Response' >response</data-lsp>.<data-lsp lsp='(property) Response.headers: Headers' >headers</data-lsp>.</span><span style="color: #8250DF"><data-lsp lsp='(method) Headers.set(name: string, value: string): void' >set</data-lsp></span><span style="color: #24292F">(<data-lsp lsp='const key: string' >key</data-lsp>, <data-lsp lsp='const value: string' >value</data-lsp>);</span></div><div class='line dim'><span style="color: #24292F">  &#125;</span></div><div class='line dim'><span style="color: #24292F">  </span><span style="color: #CF222E">return</span><span style="color: #24292F"> <data-lsp lsp='const response: Response' >response</data-lsp>;</span></div><div class='line dim'><span style="color: #24292F">&#125;) satisfies <data-lsp lsp='(alias) type Handle = (input: &#123;&#10;    event: RequestEvent;&#10;    resolve(event: RequestEvent, opts?: ResolveOptions): MaybePromise&lt;Response>;&#10;&#125;) => MaybePromise&lt;Response>&#10;import Handle' >Handle</data-lsp>;</span></div></code></div></pre>`,k,R,ee="This hook has 3 pieces:",D,b,se="<li>It checks if the requested path is under <code>/api</code>, the only Penguinsight resource I want to allow CORS access for. If not, it does nothing.</li> <li>If the request is a preflight <code>OPTIONS</code> request, it immediately returns success response with the headers specifying which types of requests allow CORS. I intentionally avoid any further sveltekit handling by returning without calling <code>resolve(event)</code></li> <li>For all other requests, I let SvelteKit route the request to a handler with <code>resolve(event)</code>, then add the CORS headers to the response that resulted from it before sending it back to the client.</li>",N,E,te="I’ve run into CORS issues a few times and it always takes me hours to figure out what’s wrong. None of the resources I’ve found did a good job explaining <em>why</em> CORS exists, how it works, or the relevant nuances of the framework in question. I’ve tried to provide just enough detail on all of those that it makes sense. After finally narrowing it down to the smallest working solution, I wrote this note to document it for my future self and anyone else who needs to support CORS requests.",$,m,le='<a aria-hidden="true" tabindex="-1" href="#addendum"><span class="icon icon-link"></span></a><a href="#addendum" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Addendum',K,T,ae="If you need to support authenticated requests, requests with specific <code>Content-Type</code>, or other header information, there are some additional CORS headers you can add to allow them. Here’s an example of a more permissive set of CORS headers:",W,H,ce=`<pre class="shiki" style="background-color: #ffffff; color: #24292f" ts="true"><div class="language-id">ts</div><div class='code-container'><code><div class='line'><span style="color: #CF222E">export</span><span style="color: #24292F"> </span><span style="color: #CF222E">const</span><span style="color: #24292F"> </span><span style="color: #0550AE">corsHeaders</span><span style="color: #24292F"> </span><span style="color: #CF222E">=</span><span style="color: #24292F"> &#123;</span></div><div class='line'><span style="color: #24292F">  </span><span style="color: #0A3069">'Access-Control-Allow-Credentials'</span><span style="color: #24292F">: </span><span style="color: #0A3069">'true'</span><span style="color: #24292F">,</span></div><div class='line'><span style="color: #24292F">  </span><span style="color: #0A3069">'Access-Control-Allow-Origin'</span><span style="color: #24292F">: </span><span style="color: #0A3069">'*'</span><span style="color: #24292F">,</span></div><div class='line'><span style="color: #24292F">  </span><span style="color: #0A3069">'Access-Control-Allow-Methods'</span><span style="color: #24292F">: </span><span style="color: #0A3069">'OPTIONS,POST,GET,PUT,PATCH,DELETE'</span><span style="color: #24292F">,</span></div><div class='line'><span style="color: #24292F">  </span><span style="color: #0A3069">'Access-Control-Allow-Headers'</span><span style="color: #24292F">:</span></div><div class='line'><span style="color: #24292F">    </span><span style="color: #0A3069">'authorization, x-client-info, apikey, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'</span></div><div class='line'><span style="color: #24292F">&#125;;</span></div></code></div></pre>`,S,A,ne="If any of those are not <em>needed</em> for your use case, I suggest not allowing them. Essentially these headers should be shrunk to the minimal set that works for your use case.";return{c(){a=p("p"),a.innerHTML=h,y=o(),u=p("ul"),u.innerHTML=n,c=o(),v=p("p"),v.innerHTML=V,L=o(),f=p("blockquote"),f.innerHTML=Z,M=o(),g=p("p"),g.innerHTML=z,I=o(),q=new X(!1),O=o(),F=p("p"),F.innerHTML=Q,x=o(),C=p("p"),C.innerHTML=Y,j=o(),w=p("p"),w.innerHTML=J,U=o(),_=new X(!1),k=o(),R=p("p"),R.textContent=ee,D=o(),b=p("ol"),b.innerHTML=se,N=o(),E=p("p"),E.innerHTML=te,$=o(),m=p("h2"),m.innerHTML=le,K=o(),T=p("p"),T.innerHTML=ae,W=o(),H=new X(!1),S=o(),A=p("p"),A.innerHTML=ne,this.h()},l(e){a=i(e,"P",{["data-svelte-h"]:!0}),d(a)!=="svelte-1ilhl73"&&(a.innerHTML=h),y=r(e),u=i(e,"UL",{["data-svelte-h"]:!0}),d(u)!=="svelte-1hb2jnl"&&(u.innerHTML=n),c=r(e),v=i(e,"P",{["data-svelte-h"]:!0}),d(v)!=="svelte-1ac58jh"&&(v.innerHTML=V),L=r(e),f=i(e,"BLOCKQUOTE",{["data-svelte-h"]:!0}),d(f)!=="svelte-18t1161"&&(f.innerHTML=Z),M=r(e),g=i(e,"P",{["data-svelte-h"]:!0}),d(g)!=="svelte-1c2exvb"&&(g.innerHTML=z),I=r(e),q=B(e,!1),O=r(e),F=i(e,"P",{["data-svelte-h"]:!0}),d(F)!=="svelte-wfclag"&&(F.innerHTML=Q),x=r(e),C=i(e,"P",{["data-svelte-h"]:!0}),d(C)!=="svelte-13165be"&&(C.innerHTML=Y),j=r(e),w=i(e,"P",{["data-svelte-h"]:!0}),d(w)!=="svelte-385ig1"&&(w.innerHTML=J),U=r(e),_=B(e,!1),k=r(e),R=i(e,"P",{["data-svelte-h"]:!0}),d(R)!=="svelte-ian9k9"&&(R.textContent=ee),D=r(e),b=i(e,"OL",{["data-svelte-h"]:!0}),d(b)!=="svelte-aq7ddu"&&(b.innerHTML=se),N=r(e),E=i(e,"P",{["data-svelte-h"]:!0}),d(E)!=="svelte-48ht6v"&&(E.innerHTML=te),$=r(e),m=i(e,"H2",{id:!0,["data-svelte-h"]:!0}),d(m)!=="svelte-1u4m6r4"&&(m.innerHTML=le),K=r(e),T=i(e,"P",{["data-svelte-h"]:!0}),d(T)!=="svelte-1ge03i1"&&(T.innerHTML=ae),W=r(e),H=B(e,!1),S=r(e),A=i(e,"P",{["data-svelte-h"]:!0}),d(A)!=="svelte-1uww94u"&&(A.innerHTML=ne),this.h()},h(){q.a=O,_.a=k,ye(m,"id","addendum"),H.a=S},m(e,s){t(e,a,s),t(e,y,s),t(e,u,s),t(e,c,s),t(e,v,s),t(e,L,s),t(e,f,s),t(e,M,s),t(e,g,s),t(e,I,s),q.m(ie,e,s),t(e,O,s),t(e,F,s),t(e,x,s),t(e,C,s),t(e,j,s),t(e,w,s),t(e,U,s),_.m(de,e,s),t(e,k,s),t(e,R,s),t(e,D,s),t(e,b,s),t(e,N,s),t(e,E,s),t(e,$,s),t(e,m,s),t(e,K,s),t(e,T,s),t(e,W,s),H.m(ce,e,s),t(e,S,s),t(e,A,s)},p:ve,d(e){e&&(l(a),l(y),l(u),l(c),l(v),l(L),l(f),l(M),l(g),l(I),q.d(),l(O),l(F),l(x),l(C),l(j),l(w),l(U),_.d(),l(k),l(R),l(D),l(b),l(N),l(E),l($),l(m),l(K),l(T),l(W),H.d(),l(S),l(A))}}}function Ae(P){let a,h;const y=[P[0],pe];let u={$$slots:{default:[Te]},$$scope:{ctx:P}};for(let n=0;n<y.length;n+=1)u=G(u,y[n]);return a=new Ee({props:u}),{c(){fe(a.$$.fragment)},l(n){ge(a.$$.fragment,n)},m(n,c){Fe(a,n,c),h=!0},p(n,[c]){const v=c&1?be(y,[c&1&&re(n[0]),c&0&&re(pe)]):{};c&2&&(v.$$scope={dirty:c,ctx:n}),a.$set(v)},i(n){h||(Ce(a.$$.fragment,n),h=!0)},o(n){we(a.$$.fragment,n),h=!1},d(n){Re(a,n)}}}const pe={title:"Resolving CORS errors in SvelteKit",description:"Cross-origin resource sharing requests let a user access resources on one site from another, but only if the server performs the secret CORS handshake with the browser.",slug:"sveltekit-cors",publish:!0,lastmod:"2024-03-30T00:00:00.000Z",date:"2024-03-27T00:00:00.000Z",aliases:null,tags:["status/budding"],timeToRead:4,internalLinks:[],flashcards:[]};function Pe(P,a,h){return P.$$set=y=>{h(0,a=G(G({},a),oe(y)))},a=oe(a),[a]}class He extends he{constructor(a){super(),me(this,a,Pe,Ae,ue,{})}}export{He as default,pe as metadata};
