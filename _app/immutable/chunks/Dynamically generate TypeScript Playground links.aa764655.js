import{s as N,C as P,N as U,f as c,a as k,I as Z,e as j,g as y,u as h,c as u,K as F,i as t,A as K,d as l}from"./scheduler.e9e6880c.js";import{S as O,i as W,b as X,d as Q,m as V,a as Y,t as ss,e as as}from"./index.ebf47752.js";import{g as es,a as q}from"./spread.8a54911c.js";import{M as ns}from"./MDSveXNoteLayout.b5fd5d5b.js";function ts(D){let a,d='Recently I was presenting a talk at SeattleJS on <a href="/notes/Branded%20Types/">Branded Types</a> using my blog post as the visual content. I wanted to do some live coding, so I decided to add TypeScript playground links to my code snippets.',p,i,e='Fun fact: it’s possible to <a href="https://www.typescriptlang.org/play/?#handbook-9" rel="nofollow">dynamically generate TypeScript playground links</a>!',o,r,I="The process is fairly simple:",b,m,H="<li>Use <code>lz-string</code> to base64 encode and zip the source code and URI encode the result (use <code>LZString.compressToEncodedURIComponent()</code>, an easy one-liner)</li> <li>Append the encoded string to a playground URL</li> <li>Put the link on the code block</li>",L,f,M="I love this solution because it generates an updated link every time I build my site. I’m guaranteed to have up-to-date playground links and don’t have to do anything after the initial setup. Awesome!",S,g,$='I followed <a href="https://www.typescriptlang.org/play/?#handbook-9" rel="nofollow">the TS playground docs</a> to write the code that generates TS playground links. I updated my code highlighter function to generate the TS playground links and add them to a <code>data-tsplay</code> attribute on the containing <code>&lt;pre&gt;</code> tag for each TS code block. Check it out:',x,_,G=`<pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee" tabindex="0" js filename="mdsvex.config.js"><code><span class="line"><span style="color:#AB5959;--shiki-dark:#CB7676">async</span><span style="color:#AB5959;--shiki-dark:#CB7676"> function</span><span style="color:#59873A;--shiki-dark:#80A665"> ShikiTwoslashHighlighter</span><span style="color:#999999;--shiki-dark:#666666">(</span><span style="color:#B07D48;--shiki-dark:#BD976A">code</span><span style="color:#999999;--shiki-dark:#666666">,</span><span style="color:#B07D48;--shiki-dark:#BD976A"> lang</span><span style="color:#999999;--shiki-dark:#666666">,</span><span style="color:#B07D48;--shiki-dark:#BD976A"> meta</span><span style="color:#999999;--shiki-dark:#666666">)</span><span style="color:#999999;--shiki-dark:#666666"> &#123;</span></span>
<span class="line"><span style="color:#AB5959;--shiki-dark:#CB7676">	let</span><span style="color:#B07D48;--shiki-dark:#BD976A"> tsPlaygroundLink</span><span style="color:#999999;--shiki-dark:#666666"> =</span><span style="color:#AB5959;--shiki-dark:#CB7676"> undefined</span><span style="color:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="color:#1E754F;--shiki-dark:#4D9375">		if</span><span style="color:#999999;--shiki-dark:#666666"> (</span><span style="color:#B07D48;--shiki-dark:#BD976A">lang</span><span style="color:#AB5959;--shiki-dark:#CB7676"> ===</span><span style="color:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="color:#B56959;--shiki-dark:#C98A7D">ts</span><span style="color:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="color:#999999;--shiki-dark:#666666">)</span><span style="color:#999999;--shiki-dark:#666666"> &#123;</span></span>
<span class="line"><span style="color:#A0ADA0;--shiki-dark:#758575DD">			// Generate a TS Playground link</span></span>
<span class="line"><span style="color:#B07D48;--shiki-dark:#BD976A">			tsPlaygroundLink</span><span style="color:#999999;--shiki-dark:#666666"> =</span><span style="color:#B5695999;--shiki-dark:#C98A7D99"> &#96;</span><span style="color:#B56959;--shiki-dark:#C98A7D">https://typescriptlang.org/play/#code/</span><span style="color:#999999;--shiki-dark:#666666">$&#123;</span></span>
<span class="line"><span style="color:#B56959;--shiki-dark:#C98A7D">				LZString</span><span style="color:#999999;--shiki-dark:#666666">.</span><span style="color:#59873A;--shiki-dark:#80A665">compressToEncodedURIComponent</span><span style="color:#999999;--shiki-dark:#666666">(</span><span style="color:#B56959;--shiki-dark:#C98A7D">code</span><span style="color:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="color:#999999;--shiki-dark:#666666">			&#125;</span><span style="color:#B5695999;--shiki-dark:#C98A7D99">&#96;</span><span style="color:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="color:#999999;--shiki-dark:#666666">		&#125;</span></span>
<span class="line"><span style="color:#AB5959;--shiki-dark:#CB7676">	const</span><span style="color:#B07D48;--shiki-dark:#BD976A"> html</span><span style="color:#999999;--shiki-dark:#666666"> =</span><span style="color:#1E754F;--shiki-dark:#4D9375"> await</span><span style="color:#59873A;--shiki-dark:#80A665"> codeToHtml</span><span style="color:#999999;--shiki-dark:#666666">(</span><span style="color:#B07D48;--shiki-dark:#BD976A">code</span><span style="color:#999999;--shiki-dark:#666666">,</span><span style="color:#999999;--shiki-dark:#666666"> &#123;</span></span>
<span class="line"><span style="color:#998418;--shiki-dark:#B8A965">		transformers</span><span style="color:#999999;--shiki-dark:#666666">:</span><span style="color:#999999;--shiki-dark:#666666"> [</span></span>
<span class="line"><span style="color:#A0ADA0;--shiki-dark:#758575DD">			// This custom transformer adds the data-tsplay attribute</span></span>
<span class="line"><span style="color:#999999;--shiki-dark:#666666">			&#123;</span></span>
<span class="line"><span style="color:#998418;--shiki-dark:#B8A965">				name</span><span style="color:#999999;--shiki-dark:#666666">:</span><span style="color:#B5695999;--shiki-dark:#C98A7D99"> '</span><span style="color:#B56959;--shiki-dark:#C98A7D">TSPlaygroundLinkInserter</span><span style="color:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="color:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="color:#59873A;--shiki-dark:#80A665">				pre</span><span style="color:#999999;--shiki-dark:#666666">(</span><span style="color:#B07D48;--shiki-dark:#BD976A">el</span><span style="color:#999999;--shiki-dark:#666666">)</span><span style="color:#999999;--shiki-dark:#666666"> &#123;</span></span>
<span class="line"><span style="color:#1E754F;--shiki-dark:#4D9375">					if</span><span style="color:#999999;--shiki-dark:#666666"> (</span><span style="color:#B07D48;--shiki-dark:#BD976A">tsPlaygroundLink</span><span style="color:#AB5959;--shiki-dark:#CB7676"> !==</span><span style="color:#AB5959;--shiki-dark:#CB7676"> undefined</span><span style="color:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="color:#B07D48;--shiki-dark:#BD976A">						el</span><span style="color:#999999;--shiki-dark:#666666">.</span><span style="color:#B07D48;--shiki-dark:#BD976A">properties</span><span style="color:#999999;--shiki-dark:#666666">[</span><span style="color:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="color:#B56959;--shiki-dark:#C98A7D">data-tsplay</span><span style="color:#B5695999;--shiki-dark:#C98A7D99">'</span><span style="color:#999999;--shiki-dark:#666666">]</span><span style="color:#999999;--shiki-dark:#666666"> =</span><span style="color:#B07D48;--shiki-dark:#BD976A"> tsPlaygroundLink</span><span style="color:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="color:#999999;--shiki-dark:#666666">				&#125;</span></span>
<span class="line"><span style="color:#999999;--shiki-dark:#666666">			&#125;,</span></span>
<span class="line"><span style="color:#A0ADA0;--shiki-dark:#758575DD">			// other transformers...</span></span>
<span class="line"><span style="color:#999999;--shiki-dark:#666666">		],</span></span>
<span class="line"><span style="color:#A0ADA0;--shiki-dark:#758575DD">		// other config options...</span></span>
<span class="line"><span style="color:#999999;--shiki-dark:#666666">	&#125;);</span></span>
<span class="line"><span style="color:#393A34;--shiki-dark:#DBD7CAEE">	</span></span></code></pre>`,v,T,J=`<pre class="code-copy-target hidden">async function ShikiTwoslashHighlighter(code, lang, meta) &#123;
	let tsPlaygroundLink = undefined;
		if (lang === 'ts') &#123;
			// Generate a TS Playground link
			tsPlaygroundLink = &#96;https://typescriptlang.org/play/#code/$&#123;
				LZString.compressToEncodedURIComponent(code)
			&#125;&#96;;
		&#125;
	const html = await codeToHtml(code, &#123;
		transformers: [
			// This custom transformer adds the data-tsplay attribute
			&#123;
				name: 'TSPlaygroundLinkInserter',
				pre(el) &#123;
					if (tsPlaygroundLink !== undefined)
						el.properties['data-tsplay'] = tsPlaygroundLink;
				&#125;
			&#125;,
			// other transformers...
		],
		// other config options...
	&#125;);
	</pre>`,C,A,E='With that I have playground links available in my output HTML. The last step I have to <a href="/notes/Make%20example%20code%20interactive/">Make example code interactive</a> on my blog is to <a href="/notes/Add%20a%20demo%20link%20to%20TypeScript%20code%20blocks/">Add a demo link to TypeScript code blocks</a>.',w,B,R="I’m so glad I ended up doing this. Being able to quickly pop open a live editor to make changes and show runtime values made my Seattle JS talk much better!";return{c(){a=c("p"),a.innerHTML=d,p=k(),i=c("p"),i.innerHTML=e,o=k(),r=c("p"),r.textContent=I,b=k(),m=c("ol"),m.innerHTML=H,L=k(),f=c("p"),f.textContent=M,S=k(),g=c("p"),g.innerHTML=$,x=k(),_=new Z(!1),v=j(),T=new Z(!1),C=k(),A=c("p"),A.innerHTML=E,w=k(),B=c("p"),B.textContent=R,this.h()},l(s){a=y(s,"P",{["data-svelte-h"]:!0}),h(a)!=="svelte-7lp34h"&&(a.innerHTML=d),p=u(s),i=y(s,"P",{["data-svelte-h"]:!0}),h(i)!=="svelte-8sm578"&&(i.innerHTML=e),o=u(s),r=y(s,"P",{["data-svelte-h"]:!0}),h(r)!=="svelte-f06i2j"&&(r.textContent=I),b=u(s),m=y(s,"OL",{["data-svelte-h"]:!0}),h(m)!=="svelte-19piibu"&&(m.innerHTML=H),L=u(s),f=y(s,"P",{["data-svelte-h"]:!0}),h(f)!=="svelte-4sy04y"&&(f.textContent=M),S=u(s),g=y(s,"P",{["data-svelte-h"]:!0}),h(g)!=="svelte-rtpeqb"&&(g.innerHTML=$),x=u(s),_=F(s,!1),v=j(),T=F(s,!1),C=u(s),A=y(s,"P",{["data-svelte-h"]:!0}),h(A)!=="svelte-vcousv"&&(A.innerHTML=E),w=u(s),B=y(s,"P",{["data-svelte-h"]:!0}),h(B)!=="svelte-1abnvd7"&&(B.textContent=R),this.h()},h(){_.a=v,T.a=C},m(s,n){t(s,a,n),t(s,p,n),t(s,i,n),t(s,o,n),t(s,r,n),t(s,b,n),t(s,m,n),t(s,L,n),t(s,f,n),t(s,S,n),t(s,g,n),t(s,x,n),_.m(G,s,n),t(s,v,n),T.m(J,s,n),t(s,C,n),t(s,A,n),t(s,w,n),t(s,B,n)},p:K,d(s){s&&(l(a),l(p),l(i),l(o),l(r),l(b),l(m),l(L),l(f),l(S),l(g),l(x),l(v),_.d(),T.d(),l(C),l(A),l(w),l(B))}}}function ls(D){let a,d;const p=[D[0],z];let i={$$slots:{default:[ts]},$$scope:{ctx:D}};for(let e=0;e<p.length;e+=1)i=P(i,p[e]);return a=new ns({props:i}),{c(){X(a.$$.fragment)},l(e){Q(a.$$.fragment,e)},m(e,o){V(a,e,o),d=!0},p(e,[o]){const r=o&1?es(p,[o&1&&q(e[0]),o&0&&q(z)]):{};o&2&&(r.$$scope={dirty:o,ctx:e}),a.$set(r)},i(e){d||(Y(a.$$.fragment,e),d=!0)},o(e){ss(a.$$.fragment,e),d=!1},d(e){as(a,e)}}}const z={title:"Dynamically generate TypeScript Playground links",description:"TypeScript playground has a URL param to specify the code content. This makes it possible to always have up-to-date playground links for example code!",slug:"dynamic-ts-playground-links",publish:!0,lastmod:"2024-05-11T00:00:00.000Z",date:"2024-05-09T00:00:00.000Z",aliases:null,tags:["status/budding"],timeToRead:2,internalLinks:["/notes/Branded%20Types/","/notes/Make%20example%20code%20interactive/","/notes/Add%20a%20demo%20link%20to%20TypeScript%20code%20blocks/"],flashcards:[]};function os(D,a,d){return D.$$set=p=>{d(0,a=P(P({},a),U(p)))},a=U(a),[a]}class cs extends O{constructor(a){super(),W(this,a,os,ls,N,{})}}export{cs as default,z as metadata};
