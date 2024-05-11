import{s as W,C as O,N as X,f as h,a as c,I as L,e as $,g as D,u as y,c as d,K as H,i as l,A as Y,d as t}from"./scheduler.e9e6880c.js";import{S as ss,i as as,b as ns,d as es,m as ls,a as ts,t as os,e as is}from"./index.ebf47752.js";import{g as ps,a as Z}from"./spread.8a54911c.js";import{M as rs}from"./MDSveXNoteLayout.816bac6a.js";function ks(f){let a,k='TypeScript Playground is an online tool to interactive with TypeScript. It’s a great way to test out small snippets, share repros, and experiment with the language as it is portable and requires no setup. Recently, I learned about another amazing feature - it’s possible to <a href="/notes/Dynamically%20generate%20TypeScript%20Playground%20links/">Dynamically generate TypeScript Playground links</a> for any TypeScript code! Technical writing should <a href="/notes/Make%20example%20code%20interactive/">Make example code interactive</a>, and this is an excellent way to do it.',p,i,e="Once I’ve got my TS playground link generated, all that’s left is to put the link on the page. Easy!",o,r,q="I already built a copy button for my  code blocks, which makes this even easier. I modified that code to render TS playground links instead of copy buttons. This Svelte component renders a link as a small square button:",S,A,K=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0" svelte filename="TSPlaygroundButton.svelte"><code><span class="line"><span style="color:#24292E;--shiki-dark:#808080">&#x3C;</span><span style="color:#22863A;--shiki-dark:#569CD6">script</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> lang</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"ts"</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C586C0">	import</span><span style="color:#24292E;--shiki-dark:#D4D4D4"> &#123; </span><span style="color:#24292E;--shiki-dark:#9CDCFE">Icon</span><span style="color:#24292E;--shiki-dark:#D4D4D4"> &#125; </span><span style="color:#D73A49;--shiki-dark:#C586C0">from</span><span style="color:#032F62;--shiki-dark:#CE9178"> '@steeze-ui/svelte-icon'</span><span style="color:#24292E;--shiki-dark:#D4D4D4">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C586C0">	import</span><span style="color:#24292E;--shiki-dark:#D4D4D4"> &#123; </span><span style="color:#24292E;--shiki-dark:#9CDCFE">ArrowTopRightOnSquare</span><span style="color:#24292E;--shiki-dark:#D4D4D4"> &#125; </span><span style="color:#D73A49;--shiki-dark:#C586C0">from</span><span style="color:#032F62;--shiki-dark:#CE9178"> '@steeze-ui/heroicons'</span><span style="color:#24292E;--shiki-dark:#D4D4D4">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C586C0">	export</span><span style="color:#D73A49;--shiki-dark:#569CD6"> let</span><span style="color:#24292E;--shiki-dark:#9CDCFE"> href</span><span style="color:#D73A49;--shiki-dark:#D4D4D4">:</span><span style="color:#005CC5;--shiki-dark:#4EC9B0"> string</span><span style="color:#24292E;--shiki-dark:#D4D4D4">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#569CD6">	const</span><span style="color:#005CC5;--shiki-dark:#9CDCFE"> tailwindClasses</span><span style="color:#D73A49;--shiki-dark:#D4D4D4"> =</span><span style="color:#24292E;--shiki-dark:#D4D4D4"> </span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#CE9178">		"group flex items-center rounded-lg border "</span><span style="color:#D73A49;--shiki-dark:#D4D4D4"> +</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#CE9178">		"border-base-content/50 px-3 py-2 "</span><span style="color:#D73A49;--shiki-dark:#D4D4D4"> +</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#CE9178">		"hover:border-base-content transition-all "</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#D4D4D4">	</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A9955">	// Reactively add any classes passed to the component</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A9955">	// This allows component consumers to style the link</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#D4D4D4">	$</span><span style="color:#24292E;--shiki-dark:#D4D4D4">: </span><span style="color:#24292E;--shiki-dark:#9CDCFE">classes</span><span style="color:#D73A49;--shiki-dark:#D4D4D4"> =</span><span style="color:#24292E;--shiki-dark:#9CDCFE"> tailwindClasses</span><span style="color:#D73A49;--shiki-dark:#D4D4D4"> +</span><span style="color:#24292E;--shiki-dark:#D4D4D4"> $$</span><span style="color:#24292E;--shiki-dark:#9CDCFE">props</span><span style="color:#24292E;--shiki-dark:#D4D4D4">.</span><span style="color:#24292E;--shiki-dark:#9CDCFE">class</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#569CD6">script</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">&#x3C;</span><span style="color:#22863A;--shiki-dark:#569CD6">a</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#9CDCFE">	class</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#24292E;--shiki-dark:#569CD6">&#123;</span><span style="color:#24292E;--shiki-dark:#9CDCFE">classes</span><span style="color:#24292E;--shiki-dark:#569CD6">&#125;</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#9CDCFE">	title</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"Open in TypeScript playground"</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#9CDCFE">	target</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"_blank"</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#9CDCFE">	&#123;</span><span style="color:#24292E;--shiki-dark:#9CDCFE">href</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE">&#125;</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">	&#x3C;</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">Icon</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#9CDCFE">		src</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#24292E;--shiki-dark:#569CD6">&#123;</span><span style="color:#24292E;--shiki-dark:#9CDCFE">ArrowTopRightOnSquare</span><span style="color:#24292E;--shiki-dark:#569CD6">&#125;</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#9CDCFE">		class</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"w-6 stroke-base-content/50 transition-colors group-hover:stroke-base-content"</span><span style="color:#24292E;--shiki-dark:#808080"> /></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">	&#x3C;</span><span style="color:#22863A;--shiki-dark:#569CD6">span</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> class</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"sr-only"</span><span style="color:#24292E;--shiki-dark:#808080">></span><span style="color:#24292E;--shiki-dark:#E6E6E6">Open this code snippet on typescript playground</span><span style="color:#24292E;--shiki-dark:#808080">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#569CD6">span</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#569CD6">a</span><span style="color:#24292E;--shiki-dark:#808080">></span></span></code></pre>`,F,b,V=`<pre class="code-copy-target hidden">&lt;script lang="ts"&gt;
	import &#123; Icon &#125; from '@steeze-ui/svelte-icon';
	import &#123; ArrowTopRightOnSquare &#125; from '@steeze-ui/heroicons';

	export let href: string;

	const tailwindClasses = 
		"group flex items-center rounded-lg border " +
		"border-base-content/50 px-3 py-2 " +
		"hover:border-base-content transition-all "
	
	// Reactively add any classes passed to the component
	// This allows component consumers to style the link
	$: classes = tailwindClasses + $$props.class
&lt;/script&gt;

&lt;a
	class=&#123;classes&#125;
	title="Open in TypeScript playground"
	target="_blank"
	&#123;href&#125;&gt;
	&lt;Icon
		src=&#123;ArrowTopRightOnSquare&#125;
		class="w-6 stroke-base-content/50 transition-colors group-hover:stroke-base-content" /&gt;
	&lt;span class="sr-only"&gt;Open this code snippet on typescript playground&lt;/span&gt;
&lt;/a&gt;</pre>`,v,C,R="Great! But I still need to find the <code>&lt;pre&gt;</code> tags with a <code>data-tsplay</code> attribute and use my new component with them. I only need this to happen on pages based on markdown and rendered using MDSveX, so I put the logic in my mdsvex layout component.",I,E,z="For these links to show up on my code blocks, I need to:",P,u,j="<li>Find all the code block elements (<code>&lt;pre&gt;</code> tags) with a <code>data-tsplay</code> attribute</li> <li>Grab the TS playground link from the <code>data-tsplay</code> attribute</li> <li>Instantiate a <code>TSPlaygroundButton</code> with the link and put it on the code block</li>",M,m,G='1 &amp; 2 are pretty straightforward with basic browser APIs. I’m using svelte, so I did number 3 with the <a href="https://svelte.dev/docs/client-side-component-api#creating-a-component" rel="nofollow">Svelte client-side component API</a>. It should be pretty similar in other frameworks.',B,_,Q=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0" svelte filename="MDSVexLayout.svelte"><code><span class="line"><span style="color:#24292E;--shiki-dark:#808080">&#x3C;</span><span style="color:#22863A;--shiki-dark:#569CD6">script</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C586C0">	import</span><span style="color:#24292E;--shiki-dark:#D4D4D4"> &#123; </span><span style="color:#24292E;--shiki-dark:#9CDCFE">onMount</span><span style="color:#24292E;--shiki-dark:#D4D4D4"> &#125; </span><span style="color:#D73A49;--shiki-dark:#C586C0">from</span><span style="color:#032F62;--shiki-dark:#CE9178"> 'svelte'</span><span style="color:#24292E;--shiki-dark:#D4D4D4">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C586C0">	import</span><span style="color:#24292E;--shiki-dark:#D4D4D4"> &#123; </span><span style="color:#D73A49;--shiki-dark:#C586C0">default</span><span style="color:#D73A49;--shiki-dark:#C586C0"> as</span><span style="color:#24292E;--shiki-dark:#9CDCFE"> TSPlaygroundButton</span><span style="color:#24292E;--shiki-dark:#D4D4D4"> &#125; </span><span style="color:#D73A49;--shiki-dark:#C586C0">from</span><span style="color:#032F62;--shiki-dark:#CE9178"> '$lib/components/TSPlaygroundButton.svelte'</span><span style="color:#24292E;--shiki-dark:#D4D4D4">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#569CD6">	function</span><span style="color:#6F42C1;--shiki-dark:#DCDCAA"> addTSPlaygroundLinkToCodeBlocks</span><span style="color:#24292E;--shiki-dark:#D4D4D4">() &#123;</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A9955">		// 1. Find all the code block elements with a playground link</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#569CD6">		const</span><span style="color:#005CC5;--shiki-dark:#9CDCFE"> codeblocks</span><span style="color:#D73A49;--shiki-dark:#D4D4D4"> =</span><span style="color:#24292E;--shiki-dark:#9CDCFE"> document</span><span style="color:#24292E;--shiki-dark:#D4D4D4">.</span><span style="color:#6F42C1;--shiki-dark:#DCDCAA">querySelectorAll</span><span style="color:#24292E;--shiki-dark:#D4D4D4">(</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#CE9178">			'pre.shiki[data-tsplay^="https://typescriptlang.org/play/#code/"]'</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#D4D4D4">		);</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">		Array</span><span style="color:#24292E;--shiki-dark:#D4D4D4">.</span><span style="color:#6F42C1;--shiki-dark:#DCDCAA">from</span><span style="color:#24292E;--shiki-dark:#D4D4D4">(</span><span style="color:#24292E;--shiki-dark:#9CDCFE">codeblocks</span><span style="color:#24292E;--shiki-dark:#D4D4D4">).</span><span style="color:#6F42C1;--shiki-dark:#DCDCAA">forEach</span><span style="color:#24292E;--shiki-dark:#D4D4D4">((</span><span style="color:#E36209;--shiki-dark:#9CDCFE">element</span><span style="color:#24292E;--shiki-dark:#D4D4D4">) </span><span style="color:#D73A49;--shiki-dark:#569CD6">=></span><span style="color:#24292E;--shiki-dark:#D4D4D4"> &#123;</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A9955">			// 2. grab the playground link</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#569CD6">			const</span><span style="color:#005CC5;--shiki-dark:#9CDCFE"> tsplaylink</span><span style="color:#D73A49;--shiki-dark:#D4D4D4"> =</span><span style="color:#24292E;--shiki-dark:#9CDCFE"> element</span><span style="color:#24292E;--shiki-dark:#D4D4D4">.</span><span style="color:#6F42C1;--shiki-dark:#DCDCAA">getAttribute</span><span style="color:#24292E;--shiki-dark:#D4D4D4">(</span><span style="color:#032F62;--shiki-dark:#CE9178">'data-tsplay'</span><span style="color:#24292E;--shiki-dark:#D4D4D4">);</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C586C0">			if</span><span style="color:#24292E;--shiki-dark:#D4D4D4"> (</span><span style="color:#D73A49;--shiki-dark:#D4D4D4">!</span><span style="color:#24292E;--shiki-dark:#9CDCFE">tsplaylink</span><span style="color:#24292E;--shiki-dark:#D4D4D4">) &#123; </span><span style="color:#D73A49;--shiki-dark:#C586C0">return</span><span style="color:#24292E;--shiki-dark:#D4D4D4">; &#125;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#569CD6">			const</span><span style="color:#005CC5;--shiki-dark:#9CDCFE"> anchor</span><span style="color:#D73A49;--shiki-dark:#D4D4D4"> =</span><span style="color:#24292E;--shiki-dark:#9CDCFE"> element</span><span style="color:#24292E;--shiki-dark:#D4D4D4">.</span><span style="color:#24292E;--shiki-dark:#9CDCFE">firstElementChild</span><span style="color:#24292E;--shiki-dark:#D4D4D4">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C586C0">			if</span><span style="color:#24292E;--shiki-dark:#D4D4D4"> (</span><span style="color:#D73A49;--shiki-dark:#D4D4D4">!</span><span style="color:#24292E;--shiki-dark:#9CDCFE">anchor</span><span style="color:#24292E;--shiki-dark:#D4D4D4">) </span><span style="color:#D73A49;--shiki-dark:#C586C0">return</span><span style="color:#24292E;--shiki-dark:#D4D4D4">;</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A9955">			// 3. instantiate the button using the </span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#569CD6">			new</span><span style="color:#6F42C1;--shiki-dark:#DCDCAA"> TSPlaygroundButton</span><span style="color:#24292E;--shiki-dark:#D4D4D4">(&#123;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">				target:</span><span style="color:#24292E;--shiki-dark:#9CDCFE"> element</span><span style="color:#24292E;--shiki-dark:#D4D4D4">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">				anchor</span><span style="color:#24292E;--shiki-dark:#D4D4D4">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">				props:</span><span style="color:#24292E;--shiki-dark:#D4D4D4"> &#123;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">					href:</span><span style="color:#24292E;--shiki-dark:#9CDCFE"> tsplaylink</span><span style="color:#24292E;--shiki-dark:#D4D4D4">,</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A9955">					// This positions the link left of the copy button</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">					class:</span><span style="color:#032F62;--shiki-dark:#CE9178"> 'absolute top-2 right-16'</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#D4D4D4">				&#125;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#D4D4D4">			&#125;);</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#D4D4D4">		&#125;);</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#D4D4D4">	&#125;</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A9955">	// Once the page is mounted add the TS playground links</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#DCDCAA">	onMount</span><span style="color:#24292E;--shiki-dark:#D4D4D4">(() </span><span style="color:#D73A49;--shiki-dark:#569CD6">=></span><span style="color:#24292E;--shiki-dark:#D4D4D4"> &#123;</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#DCDCAA">		addTSPlaygroundLinkToCodeBlocks</span><span style="color:#24292E;--shiki-dark:#D4D4D4">();</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#D4D4D4">	&#125;);</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#569CD6">script</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">&#x3C;</span><span style="color:#D73A49;--shiki-dark:#C586C0">slot</span><span style="color:#24292E;--shiki-dark:#808080"> /></span></span></code></pre>`,T,w,U=`<pre class="code-copy-target hidden">&lt;script&gt;
	import &#123; onMount &#125; from 'svelte';
	import &#123; default as TSPlaygroundButton &#125; from '$lib/components/TSPlaygroundButton.svelte';

	function addTSPlaygroundLinkToCodeBlocks() &#123;
		// 1. Find all the code block elements with a playground link
		const codeblocks = document.querySelectorAll(
			'pre.shiki[data-tsplay^="https://typescriptlang.org/play/#code/"]'
		);
		Array.from(codeblocks).forEach((element) =&gt; &#123;
			// 2. grab the playground link
			const tsplaylink = element.getAttribute('data-tsplay');
			if (!tsplaylink) &#123; return; &#125;
			const anchor = element.firstElementChild;
			if (!anchor) return;
			// 3. instantiate the button using the 
			new TSPlaygroundButton(&#123;
				target: element,
				anchor,
				props: &#123;
					href: tsplaylink,
					// This positions the link left of the copy button
					class: 'absolute top-2 right-16'
				&#125;
			&#125;);
		&#125;);
	&#125;
	// Once the page is mounted add the TS playground links
	onMount(() =&gt; &#123;
		addTSPlaygroundLinkToCodeBlocks();
	&#125;);
&lt;/script&gt;

&lt;slot /&gt;</pre>`,x,g,N='Adding these interactive links is how I <a href="/notes/Make%20example%20code%20interactive/">Make example code interactive</a> on my blog. I built it for a SeattleJS presentation on <a href="/notes/Branded%20Types/">Branded Types</a> that I ran out of that very blog post! It turned out to be a valuable tool for quick demos when I wanted to do live coding or show runtime outputs.';return{c(){a=h("p"),a.innerHTML=k,p=c(),i=h("p"),i.textContent=e,o=c(),r=h("p"),r.textContent=q,S=c(),A=new L(!1),F=$(),b=new L(!1),v=c(),C=h("p"),C.innerHTML=R,I=c(),E=h("p"),E.textContent=z,P=c(),u=h("ol"),u.innerHTML=j,M=c(),m=h("p"),m.innerHTML=G,B=c(),_=new L(!1),T=$(),w=new L(!1),x=c(),g=h("p"),g.innerHTML=N,this.h()},l(s){a=D(s,"P",{["data-svelte-h"]:!0}),y(a)!=="svelte-niohsw"&&(a.innerHTML=k),p=d(s),i=D(s,"P",{["data-svelte-h"]:!0}),y(i)!=="svelte-tpf3t9"&&(i.textContent=e),o=d(s),r=D(s,"P",{["data-svelte-h"]:!0}),y(r)!=="svelte-1gdki9i"&&(r.textContent=q),S=d(s),A=H(s,!1),F=$(),b=H(s,!1),v=d(s),C=D(s,"P",{["data-svelte-h"]:!0}),y(C)!=="svelte-23m2pj"&&(C.innerHTML=R),I=d(s),E=D(s,"P",{["data-svelte-h"]:!0}),y(E)!=="svelte-1w40amc"&&(E.textContent=z),P=d(s),u=D(s,"OL",{["data-svelte-h"]:!0}),y(u)!=="svelte-1ff3o2d"&&(u.innerHTML=j),M=d(s),m=D(s,"P",{["data-svelte-h"]:!0}),y(m)!=="svelte-5dolau"&&(m.innerHTML=G),B=d(s),_=H(s,!1),T=$(),w=H(s,!1),x=d(s),g=D(s,"P",{["data-svelte-h"]:!0}),y(g)!=="svelte-w9uyvt"&&(g.innerHTML=N),this.h()},h(){A.a=F,b.a=v,_.a=T,w.a=x},m(s,n){l(s,a,n),l(s,p,n),l(s,i,n),l(s,o,n),l(s,r,n),l(s,S,n),A.m(K,s,n),l(s,F,n),b.m(V,s,n),l(s,v,n),l(s,C,n),l(s,I,n),l(s,E,n),l(s,P,n),l(s,u,n),l(s,M,n),l(s,m,n),l(s,B,n),_.m(Q,s,n),l(s,T,n),w.m(U,s,n),l(s,x,n),l(s,g,n)},p:Y,d(s){s&&(t(a),t(p),t(i),t(o),t(r),t(S),t(F),A.d(),b.d(),t(v),t(C),t(I),t(E),t(P),t(u),t(M),t(m),t(B),t(T),_.d(),w.d(),t(x),t(g))}}}function cs(f){let a,k;const p=[f[0],J];let i={$$slots:{default:[ks]},$$scope:{ctx:f}};for(let e=0;e<p.length;e+=1)i=O(i,p[e]);return a=new rs({props:i}),{c(){ns(a.$$.fragment)},l(e){es(a.$$.fragment,e)},m(e,o){ls(a,e,o),k=!0},p(e,[o]){const r=o&1?ps(p,[o&1&&Z(e[0]),o&0&&Z(J)]):{};o&2&&(r.$$scope={dirty:o,ctx:e}),a.$set(r)},i(e){k||(ts(a.$$.fragment,e),k=!0)},o(e){os(a.$$.fragment,e),k=!1},d(e){is(a,e)}}}const J={title:"Add a demo link to TypeScript code blocks",description:"Seeing example code with syntax highlighting is great, but sometimes you've just gotta run the code and see what happens...",slug:"code-block-tsplay-demo-link",publish:!0,lastmod:"2024-05-09T00:00:00.000Z",date:"2024-05-09T00:00:00.000Z",aliases:null,tags:["status/seedling"],timeToRead:2,internalLinks:["/notes/Dynamically%20generate%20TypeScript%20Playground%20links/","/notes/Make%20example%20code%20interactive/","/notes/Branded%20Types/"],flashcards:[]};function ds(f,a,k){return f.$$set=p=>{k(0,a=O(O({},a),X(p)))},a=X(a),[a]}class Es extends ss{constructor(a){super(),as(this,a,ds,cs,W,{})}}export{Es as default,J as metadata};
