import{t as d,a as h}from"./Bj2ZHtgv.js";import"./DBHxkW5N.js";import{s,f as y,R as D}from"./fxLts69-.js";import{h as a}from"./RJ7APweJ.js";import{l as B,s as A}from"./BMf7CqPI.js";import{M as u}from"./CPF9sV-6.js";const i={title:"Add a demo link to TypeScript code blocks",description:"Seeing example code with syntax highlighting is great, but sometimes you've just gotta run the code and see what happens...",slug:"notes/code-block-tsplay-demo-link",publish:!0,lastmod:"2024-05-09T00:00:00.000Z",date:"2024-05-09T00:00:00.000Z",aliases:null,tags:["status/seedling"],readTime:3,internalLinks:["/notes/dynamic-ts-playground-links","/notes/make-example-code-interactive","/notes/branded-types"],flashcards:[]},{title:S,description:E,slug:x,publish:F,lastmod:I,date:_,aliases:$,tags:P,readTime:O,internalLinks:M,flashcards:q}=i;var g=d('<p>TypeScript Playground is an online tool to interactive with TypeScript. It’s a great way to test out small snippets, share repros, and experiment with the language as it is portable and requires no setup. Recently, I learned about another amazing feature - it’s possible to <a href="/notes/dynamic-ts-playground-links">Dynamically generate TypeScript Playground links</a> for any TypeScript code! Technical writing should <a href="/notes/make-example-code-interactive">Make example code interactive</a>, and this is an excellent way to do it.</p> <p>Once I’ve got my TS playground link generated, all that’s left is to put the link on the page. Easy!</p> <p>I already built a copy button for my  code blocks, which makes this even easier. I modified that code to render TS playground links instead of copy buttons. This Svelte component renders a link as a small square button:</p> <!><!> <p>Great! But I still need to find the <code>&lt;pre&gt;</code> tags with a <code>data-tsplay</code> attribute and use my new component with them. I only need this to happen on pages based on markdown and rendered using MDSveX, so I put the logic in my mdsvex layout component.</p> <p>For these links to show up on my code blocks, I need to:</p> <ol><li>Find all the code block elements (<code>&lt;pre&gt;</code> tags) with a <code>data-tsplay</code> attribute</li> <li>Grab the TS playground link from the <code>data-tsplay</code> attribute</li> <li>Instantiate a <code>TSPlaygroundButton</code> with the link and put it on the code block</li></ol> <p>1 & 2 are pretty straightforward with basic browser APIs. I’m using svelte, so I did number 3 with the <a href="https://svelte.dev/docs/client-side-component-api#creating-a-component" rel="nofollow">Svelte client-side component API</a>. It should be pretty similar in other frameworks.</p> <!><!> <p>Adding these interactive links is how I <a href="/notes/make-example-code-interactive">Make example code interactive</a> on my blog. I built it for a SeattleJS presentation on <a href="/notes/branded-types">Branded Types</a> that I ran out of that very blog post! It turned out to be a valuable tool for quick demos when I wanted to do live coding or show runtime outputs.</p>',1);function L(p,r){const t=B(r,["children","$$slots","$$events","$$legacy"]);u(p,A(()=>t,i,{children:(k,m)=>{var n=g(),l=s(y(n),6);a(l,()=>`<pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee" tabindex="0" svelte filename="TSPlaygroundButton.svelte"><code><span class="line"><span style="color:#999999;--shiki-dark:#666666">&#x3C;</span><span style="color:#1E754F;--shiki-dark:#4D9375">script</span><span style="color:#B07D48;--shiki-dark:#BD976A"> lang</span><span style="color:#999999;--shiki-dark:#666666">=</span><span style="color:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="color:#B56959;--shiki-dark:#C98A7D">ts</span><span style="color:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="color:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="color:#1E754F;--shiki-dark:#4D9375">	import</span><span style="color:#999999;--shiki-dark:#666666"> &#123;</span><span style="color:#B07D48;--shiki-dark:#BD976A"> Icon</span><span style="color:#999999;--shiki-dark:#666666"> &#125;</span><span style="color:#1E754F;--shiki-dark:#4D9375"> from</span><span style="color:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="color:#B56959;--shiki-dark:#C98A7D">@steeze-ui/svelte-icon</span><span style="color:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="color:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="color:#1E754F;--shiki-dark:#4D9375">	import</span><span style="color:#999999;--shiki-dark:#666666"> &#123;</span><span style="color:#B07D48;--shiki-dark:#BD976A"> ArrowTopRightOnSquare</span><span style="color:#999999;--shiki-dark:#666666"> &#125;</span><span style="color:#1E754F;--shiki-dark:#4D9375"> from</span><span style="color:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="color:#B56959;--shiki-dark:#C98A7D">@steeze-ui/heroicons</span><span style="color:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="color:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;--shiki-dark:#4D9375">	export</span><span style="color:#AB5959;--shiki-dark:#CB7676"> let </span><span style="color:#B07D48;--shiki-dark:#BD976A">href</span><span style="color:#999999;--shiki-dark:#666666">: </span><span style="color:#2E8F82;--shiki-dark:#5DA994">string</span><span style="color:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;--shiki-dark:#CB7676">	const </span><span style="color:#B07D48;--shiki-dark:#BD976A">tailwindClasses</span><span style="color:#999999;--shiki-dark:#666666"> =</span><span style="color:#AB5959;--shiki-dark:#CB7676"> </span></span>
<span class="line"><span style="color:#B5695977;--shiki-dark:#C98A7D77">		"</span><span style="color:#B56959;--shiki-dark:#C98A7D">group flex items-center rounded-lg border </span><span style="color:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="color:#AB5959;--shiki-dark:#CB7676"> +</span></span>
<span class="line"><span style="color:#B5695977;--shiki-dark:#C98A7D77">		"</span><span style="color:#B56959;--shiki-dark:#C98A7D">border-base-content/50 px-3 py-2 </span><span style="color:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="color:#AB5959;--shiki-dark:#CB7676"> +</span></span>
<span class="line"><span style="color:#B5695977;--shiki-dark:#C98A7D77">		"</span><span style="color:#B56959;--shiki-dark:#C98A7D">hover:border-base-content transition-all </span><span style="color:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="color:#393A34;--shiki-dark:#DBD7CAEE">	</span></span>
<span class="line"><span style="color:#A0ADA0;--shiki-dark:#758575DD">	// Reactively add any classes passed to the component</span></span>
<span class="line"><span style="color:#A0ADA0;--shiki-dark:#758575DD">	// This allows component consumers to style the link</span></span>
<span class="line"><span style="color:#59873A;--shiki-dark:#80A665">	$</span><span style="color:#999999;--shiki-dark:#666666">:</span><span style="color:#B07D48;--shiki-dark:#BD976A"> classes</span><span style="color:#999999;--shiki-dark:#666666"> =</span><span style="color:#B07D48;--shiki-dark:#BD976A"> tailwindClasses</span><span style="color:#AB5959;--shiki-dark:#CB7676"> +</span><span style="color:#999999;--shiki-dark:#666666"> $$</span><span style="color:#B07D48;--shiki-dark:#BD976A">props</span><span style="color:#999999;--shiki-dark:#666666">.</span><span style="color:#B07D48;--shiki-dark:#BD976A">class</span></span>
<span class="line"><span style="color:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="color:#1E754F;--shiki-dark:#4D9375">script</span><span style="color:#999999;--shiki-dark:#666666">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#999999;--shiki-dark:#666666">&#x3C;</span><span style="color:#1E754F;--shiki-dark:#4D9375">a</span></span>
<span class="line"><span style="color:#B07D48;--shiki-dark:#BD976A">	class</span><span style="color:#999999;--shiki-dark:#666666">=&#123;</span><span style="color:#B07D48;--shiki-dark:#BD976A">classes</span><span style="color:#999999;--shiki-dark:#666666">&#125;</span></span>
<span class="line"><span style="color:#B07D48;--shiki-dark:#BD976A">	title</span><span style="color:#999999;--shiki-dark:#666666">=</span><span style="color:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="color:#B56959;--shiki-dark:#C98A7D">Open in TypeScript playground</span><span style="color:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="color:#B07D48;--shiki-dark:#BD976A">	target</span><span style="color:#999999;--shiki-dark:#666666">=</span><span style="color:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="color:#B56959;--shiki-dark:#C98A7D">_blank</span><span style="color:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="color:#B07D48;--shiki-dark:#BD976A">	&#123;href&#125;</span><span style="color:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="color:#999999;--shiki-dark:#666666">	&#x3C;</span><span style="color:#998418;--shiki-dark:#B8A965">Icon</span></span>
<span class="line"><span style="color:#B07D48;--shiki-dark:#BD976A">		src</span><span style="color:#999999;--shiki-dark:#666666">=&#123;</span><span style="color:#B07D48;--shiki-dark:#BD976A">ArrowTopRightOnSquare</span><span style="color:#999999;--shiki-dark:#666666">&#125;</span></span>
<span class="line"><span style="color:#B07D48;--shiki-dark:#BD976A">		class</span><span style="color:#999999;--shiki-dark:#666666">=</span><span style="color:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="color:#B56959;--shiki-dark:#C98A7D">w-6 stroke-base-content/50 transition-colors group-hover:stroke-base-content</span><span style="color:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="color:#999999;--shiki-dark:#666666"> /></span></span>
<span class="line"><span style="color:#999999;--shiki-dark:#666666">	&#x3C;</span><span style="color:#1E754F;--shiki-dark:#4D9375">span</span><span style="color:#B07D48;--shiki-dark:#BD976A"> class</span><span style="color:#999999;--shiki-dark:#666666">=</span><span style="color:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="color:#B56959;--shiki-dark:#C98A7D">sr-only</span><span style="color:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="color:#999999;--shiki-dark:#666666">></span><span style="color:#393A34;--shiki-dark:#DBD7CAEE">Open this code snippet on typescript playground</span><span style="color:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="color:#1E754F;--shiki-dark:#4D9375">span</span><span style="color:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="color:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="color:#1E754F;--shiki-dark:#4D9375">a</span><span style="color:#999999;--shiki-dark:#666666">></span></span></code></pre>`);var o=s(l);a(o,()=>`<pre class="code-copy-target hidden">&lt;script lang="ts"&gt;
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
&lt;/a&gt;</pre>`);var e=s(o,10);a(e,()=>`<pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee" tabindex="0" svelte filename="MDSVexLayout.svelte"><code><span class="line"><span style="color:#999999;--shiki-dark:#666666">&#x3C;</span><span style="color:#1E754F;--shiki-dark:#4D9375">script</span><span style="color:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="color:#1E754F;--shiki-dark:#4D9375">	import</span><span style="color:#999999;--shiki-dark:#666666"> &#123;</span><span style="color:#B07D48;--shiki-dark:#BD976A"> onMount</span><span style="color:#999999;--shiki-dark:#666666"> &#125;</span><span style="color:#1E754F;--shiki-dark:#4D9375"> from</span><span style="color:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="color:#B56959;--shiki-dark:#C98A7D">svelte</span><span style="color:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="color:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="color:#1E754F;--shiki-dark:#4D9375">	import</span><span style="color:#999999;--shiki-dark:#666666"> &#123;</span><span style="color:#1E754F;--shiki-dark:#4D9375"> default</span><span style="color:#1E754F;--shiki-dark:#4D9375"> as</span><span style="color:#B07D48;--shiki-dark:#BD976A"> TSPlaygroundButton</span><span style="color:#999999;--shiki-dark:#666666"> &#125;</span><span style="color:#1E754F;--shiki-dark:#4D9375"> from</span><span style="color:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="color:#B56959;--shiki-dark:#C98A7D">$lib/components/TSPlaygroundButton.svelte</span><span style="color:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="color:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;--shiki-dark:#CB7676">	function</span><span style="color:#59873A;--shiki-dark:#80A665"> addTSPlaygroundLinkToCodeBlocks</span><span style="color:#999999;--shiki-dark:#666666">()</span><span style="color:#999999;--shiki-dark:#666666"> &#123;</span></span>
<span class="line"><span style="color:#A0ADA0;--shiki-dark:#758575DD">		// 1. Find all the code block elements with a playground link</span></span>
<span class="line"><span style="color:#AB5959;--shiki-dark:#CB7676">		const</span><span style="color:#B07D48;--shiki-dark:#BD976A"> codeblocks</span><span style="color:#999999;--shiki-dark:#666666"> =</span><span style="color:#B07D48;--shiki-dark:#BD976A"> document</span><span style="color:#999999;--shiki-dark:#666666">.</span><span style="color:#59873A;--shiki-dark:#80A665">querySelectorAll</span><span style="color:#999999;--shiki-dark:#666666">(</span></span>
<span class="line"><span style="color:#B5695977;--shiki-dark:#C98A7D77">			'</span><span style="color:#B56959;--shiki-dark:#C98A7D">pre.shiki[data-tsplay^="https://typescriptlang.org/play/#code/"]</span><span style="color:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"><span style="color:#999999;--shiki-dark:#666666">		);</span></span>
<span class="line"><span style="color:#B07D48;--shiki-dark:#BD976A">		Array</span><span style="color:#999999;--shiki-dark:#666666">.</span><span style="color:#59873A;--shiki-dark:#80A665">from</span><span style="color:#999999;--shiki-dark:#666666">(</span><span style="color:#B07D48;--shiki-dark:#BD976A">codeblocks</span><span style="color:#999999;--shiki-dark:#666666">).</span><span style="color:#59873A;--shiki-dark:#80A665">forEach</span><span style="color:#999999;--shiki-dark:#666666">((</span><span style="color:#B07D48;--shiki-dark:#BD976A">element</span><span style="color:#999999;--shiki-dark:#666666">)</span><span style="color:#999999;--shiki-dark:#666666"> =></span><span style="color:#999999;--shiki-dark:#666666"> &#123;</span></span>
<span class="line"><span style="color:#A0ADA0;--shiki-dark:#758575DD">			// 2. grab the playground link</span></span>
<span class="line"><span style="color:#AB5959;--shiki-dark:#CB7676">			const</span><span style="color:#B07D48;--shiki-dark:#BD976A"> tsplaylink</span><span style="color:#999999;--shiki-dark:#666666"> =</span><span style="color:#B07D48;--shiki-dark:#BD976A"> element</span><span style="color:#999999;--shiki-dark:#666666">.</span><span style="color:#59873A;--shiki-dark:#80A665">getAttribute</span><span style="color:#999999;--shiki-dark:#666666">(</span><span style="color:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="color:#B56959;--shiki-dark:#C98A7D">data-tsplay</span><span style="color:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="color:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="color:#1E754F;--shiki-dark:#4D9375">			if</span><span style="color:#999999;--shiki-dark:#666666"> (</span><span style="color:#AB5959;--shiki-dark:#CB7676">!</span><span style="color:#B07D48;--shiki-dark:#BD976A">tsplaylink</span><span style="color:#999999;--shiki-dark:#666666">)</span><span style="color:#999999;--shiki-dark:#666666"> &#123;</span><span style="color:#1E754F;--shiki-dark:#4D9375"> return</span><span style="color:#999999;--shiki-dark:#666666">;</span><span style="color:#999999;--shiki-dark:#666666"> &#125;</span></span>
<span class="line"><span style="color:#AB5959;--shiki-dark:#CB7676">			const</span><span style="color:#B07D48;--shiki-dark:#BD976A"> anchor</span><span style="color:#999999;--shiki-dark:#666666"> =</span><span style="color:#B07D48;--shiki-dark:#BD976A"> element</span><span style="color:#999999;--shiki-dark:#666666">.</span><span style="color:#B07D48;--shiki-dark:#BD976A">firstElementChild</span><span style="color:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="color:#1E754F;--shiki-dark:#4D9375">			if</span><span style="color:#999999;--shiki-dark:#666666"> (</span><span style="color:#AB5959;--shiki-dark:#CB7676">!</span><span style="color:#B07D48;--shiki-dark:#BD976A">anchor</span><span style="color:#999999;--shiki-dark:#666666">)</span><span style="color:#1E754F;--shiki-dark:#4D9375"> return</span><span style="color:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="color:#A0ADA0;--shiki-dark:#758575DD">			// 3. instantiate the button using the </span></span>
<span class="line"><span style="color:#AB5959;--shiki-dark:#CB7676">			new</span><span style="color:#59873A;--shiki-dark:#80A665"> TSPlaygroundButton</span><span style="color:#999999;--shiki-dark:#666666">(&#123;</span></span>
<span class="line"><span style="color:#998418;--shiki-dark:#B8A965">				target</span><span style="color:#999999;--shiki-dark:#666666">:</span><span style="color:#B07D48;--shiki-dark:#BD976A"> element</span><span style="color:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="color:#B07D48;--shiki-dark:#BD976A">				anchor</span><span style="color:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="color:#998418;--shiki-dark:#B8A965">				props</span><span style="color:#999999;--shiki-dark:#666666">:</span><span style="color:#999999;--shiki-dark:#666666"> &#123;</span></span>
<span class="line"><span style="color:#998418;--shiki-dark:#B8A965">					href</span><span style="color:#999999;--shiki-dark:#666666">:</span><span style="color:#B07D48;--shiki-dark:#BD976A"> tsplaylink</span><span style="color:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="color:#A0ADA0;--shiki-dark:#758575DD">					// This positions the link left of the copy button</span></span>
<span class="line"><span style="color:#998418;--shiki-dark:#B8A965">					class</span><span style="color:#999999;--shiki-dark:#666666">:</span><span style="color:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="color:#B56959;--shiki-dark:#C98A7D">absolute top-2 right-16</span><span style="color:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"><span style="color:#999999;--shiki-dark:#666666">				&#125;</span></span>
<span class="line"><span style="color:#999999;--shiki-dark:#666666">			&#125;);</span></span>
<span class="line"><span style="color:#999999;--shiki-dark:#666666">		&#125;);</span></span>
<span class="line"><span style="color:#999999;--shiki-dark:#666666">	&#125;</span></span>
<span class="line"><span style="color:#A0ADA0;--shiki-dark:#758575DD">	// Once the page is mounted add the TS playground links</span></span>
<span class="line"><span style="color:#59873A;--shiki-dark:#80A665">	onMount</span><span style="color:#999999;--shiki-dark:#666666">(()</span><span style="color:#999999;--shiki-dark:#666666"> =></span><span style="color:#999999;--shiki-dark:#666666"> &#123;</span></span>
<span class="line"><span style="color:#59873A;--shiki-dark:#80A665">		addTSPlaygroundLinkToCodeBlocks</span><span style="color:#999999;--shiki-dark:#666666">();</span></span>
<span class="line"><span style="color:#999999;--shiki-dark:#666666">	&#125;);</span></span>
<span class="line"><span style="color:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="color:#1E754F;--shiki-dark:#4D9375">script</span><span style="color:#999999;--shiki-dark:#666666">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#999999;--shiki-dark:#666666">&#x3C;</span><span style="color:#1E754F;--shiki-dark:#4D9375">slot</span><span style="color:#999999;--shiki-dark:#666666"> /></span></span></code></pre>`);var c=s(e);a(c,()=>`<pre class="code-copy-target hidden">&lt;script&gt;
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

&lt;slot /&gt;</pre>`),D(2),h(k,n)},$$slots:{default:!0}}))}export{L as default,i as metadata};
