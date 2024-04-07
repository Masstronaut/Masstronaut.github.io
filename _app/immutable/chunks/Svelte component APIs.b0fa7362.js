import{s as Us,C as ds,a5 as Bs,f as p,a as o,I as rs,g as c,u as d,c as i,K as ps,j as cs,i as e,d as n,A as Ws}from"./scheduler.73a07135.js";import{S as Rs,i as Zs,b as Ls,d as Ps,m as $s,a as Ss,t as qs,e as zs}from"./index.ba10b74b.js";import{g as Gs,a as Hs}from"./spread.8a54911c.js";import{M as Ks}from"./MDSveXNoteLayout.91826859.js";import{T as Xs}from"./Table.85f8c55a.js";function Ys(C){let t,y="<tr><th>API characteristic</th> <th>Self-contained</th> <th>Slot</th> <th>Fragmented</th> <th>Nesting doll</th></tr>",h,k,l="<tr><td>Flexibility</td> <td>Very low</td> <td>Excellent</td> <td>Moderate+</td> <td>Moderate</td></tr> <tr><td>Opinionatedness</td> <td>High</td> <td>Very low</td> <td>Low</td> <td>Moderate</td></tr> <tr><td>Discoverability</td> <td>Excellent</td> <td>Poor</td> <td>Sufficient</td> <td>Very good</td></tr> <tr><td>Boilerplate</td> <td>Excellent</td> <td>Low</td> <td>Moderate</td> <td>Moderate</td></tr> <tr><td>Misusability</td> <td>Very low</td> <td>Very high</td> <td>Moderate+</td> <td>Low</td></tr> <tr><td>Error quality</td> <td>Excellent</td> <td>Poor</td> <td>Moderate</td> <td>Good</td></tr>";return{c(){t=p("thead"),t.innerHTML=y,h=o(),k=p("tbody"),k.innerHTML=l},l(r){t=c(r,"THEAD",{["data-svelte-h"]:!0}),d(t)!=="svelte-w2ngdb"&&(t.innerHTML=y),h=i(r),k=c(r,"TBODY",{["data-svelte-h"]:!0}),d(k)!=="svelte-3pjfc7"&&(k.innerHTML=l)},m(r,E){e(r,t,E),e(r,h,E),e(r,k,E)},p:Ws,d(r){r&&(n(t),n(h),n(k))}}}function Js(C){let t,y='There are a handful of possible approaches to designing the API for a svelte component. I document the ones I’ve encountered and my thoughts on them here. If there is a more widely-used name for any of them, or there is a design I’m missing, please <a href="https://twitter.com/AllanDeutsch" rel="nofollow">let me know</a>!',h,k,l="<li>Self-contained component</li> <li>Slot component</li> <li>Fragmented component</li> <li>Nesting doll component</li>",r,E,O,D,ks="In brief, I think of these API characteristics as follows:",U,A,hs='<li><strong>Flexibility</strong>: how well an API can adapt to a wide variety of uses not anticipated by the API author</li> <li><strong>Opinionatedness</strong>: whether the API imposes its opinions on the consumer or leaves room for the consumer’s opinions on how things should be done</li> <li><strong>Discoverability</strong>: how easy is it to “discover” what the API can do without reading its source code or documentation</li> <li><strong>Boilerplate</strong>: does the API require a lot of “copy-paste” code to interact with it, or can it be used without writing lots of code</li> <li><strong>Misusability</strong>: is it easy to use the API in an incorrect or sub-optimal way? <a href="/notes/Make%20API%20misuse%20hard/">Make API misuse hard</a>.</li> <li><strong>Error quality</strong>: when something is wrong, how helpful are the errors? How helpful can they be?</li>',W,m,Es='<a aria-hidden="true" tabindex="-1" href="#self-contained-component"><span class="icon icon-link"></span></a><a href="#self-contained-component" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Self-contained component',R,P,Ns=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#808080">&#x3C;</span><span style="color:#22863A;--shiki-dark:#569CD6">script</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> lang</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"ts"</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C586C0">	import</span><span style="color:#24292E;--shiki-dark:#D4D4D4"> &#123;</span><span style="color:#24292E;--shiki-dark:#9CDCFE">Accordion</span><span style="color:#24292E;--shiki-dark:#D4D4D4">&#125; </span><span style="color:#D73A49;--shiki-dark:#C586C0">from</span><span style="color:#032F62;--shiki-dark:#CE9178"> '$lib/components'</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#569CD6">	const</span><span style="color:#005CC5;--shiki-dark:#9CDCFE"> accordionData</span><span style="color:#D73A49;--shiki-dark:#D4D4D4"> =</span><span style="color:#24292E;--shiki-dark:#D4D4D4"> [&#123;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">			title:</span><span style="color:#032F62;--shiki-dark:#CE9178"> "Click to expand"</span><span style="color:#24292E;--shiki-dark:#D4D4D4">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">			content:</span><span style="color:#032F62;--shiki-dark:#CE9178"> "Hello, world"</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#D4D4D4">		&#125;, &#123; </span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">			title:</span><span style="color:#032F62;--shiki-dark:#CE9178"> "I expand too!"</span><span style="color:#24292E;--shiki-dark:#D4D4D4">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">			content:</span><span style="color:#032F62;--shiki-dark:#CE9178"> "Click me again to make me collapse"</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#D4D4D4">		&#125;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#D4D4D4">	]</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#569CD6">script</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">&#x3C;</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">Accordion</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> items</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#24292E;--shiki-dark:#569CD6">&#123;</span><span style="color:#24292E;--shiki-dark:#9CDCFE">accordionData</span><span style="color:#24292E;--shiki-dark:#569CD6">&#125;</span><span style="color:#24292E;--shiki-dark:#808080"> /></span></span></code></pre>`,$,b,ys="Self-contained components tend to have minimal APIs, typically defined in a single file. I’ve found them the easiest to read and understand within my own codebase. They also have great error messaging when used improperly: not providing <code>items</code> or providing <code>items</code> of the wrong type both result in typescript errors. However, the minimal API of self-contained components offers minimal flexibility to consumers. The consumer is unable to do any customization not explicitly supported by the API. Adding a button in the first accordion item (as was done with the Fragmented component API) can’t be done without changing the <code>Accordion</code> API, which also has no way to style nested elements like the accordion items. While it’s possible to work around this limitation, doing so would require a much less minimal API:",Z,v,Cs="<li>Optional styles for each item passed to <code>items</code></li> <li>Accepting a <code>SvelteComponent</code> as an option for the <code>items</code> prop (which would require each item be defined in a separate component file)</li> <li>Having a way to pass nested styles to the <code>Accordion</code> component</li>",G,g,ms="I find all of these are very unpleasant ways to customize a component, so I believe this API design is best for single-use components at the application layer that can afford to be stubbornly opinionated.",K,u,us='<a aria-hidden="true" tabindex="-1" href="#slot-component"><span class="icon icon-link"></span></a><a href="#slot-component" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Slot component',X,S,Vs=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#808080">&#x3C;</span><span style="color:#22863A;--shiki-dark:#569CD6">script</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> lang</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"ts"</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C586C0">	import</span><span style="color:#24292E;--shiki-dark:#D4D4D4"> &#123;</span><span style="color:#24292E;--shiki-dark:#9CDCFE">Accordion</span><span style="color:#24292E;--shiki-dark:#D4D4D4">, </span><span style="color:#24292E;--shiki-dark:#9CDCFE">AccordionItem</span><span style="color:#24292E;--shiki-dark:#D4D4D4">&#125; </span><span style="color:#D73A49;--shiki-dark:#C586C0">from</span><span style="color:#032F62;--shiki-dark:#CE9178"> '$lib/components'</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#569CD6">script</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">&#x3C;</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">Accordion</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">	&#x3C;</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">AccordionItem</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">		&#x3C;</span><span style="color:#22863A;--shiki-dark:#569CD6">h2</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> slot</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"title"</span><span style="color:#24292E;--shiki-dark:#808080">></span><span style="color:#24292E;--shiki-dark:#E6E6E6">Click to expand</span><span style="color:#24292E;--shiki-dark:#808080">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#569CD6">h2</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">		&#x3C;</span><span style="color:#D73A49;--shiki-dark:#C586C0">svelte</span><span style="color:#24292E;--shiki-dark:#E6E6E6">:</span><span style="color:#22863A;--shiki-dark:#569CD6">fragment</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> slot</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"content"</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">			&#x3C;</span><span style="color:#22863A;--shiki-dark:#569CD6">p</span><span style="color:#24292E;--shiki-dark:#808080">></span><span style="color:#24292E;--shiki-dark:#E6E6E6">Hello, world</span><span style="color:#24292E;--shiki-dark:#808080">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#569CD6">p</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">			&#x3C;</span><span style="color:#22863A;--shiki-dark:#569CD6">button</span><span style="color:#24292E;--shiki-dark:#808080">></span><span style="color:#24292E;--shiki-dark:#E6E6E6">Click me</span><span style="color:#24292E;--shiki-dark:#808080">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#569CD6">button</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">		&#x3C;/</span><span style="color:#D73A49;--shiki-dark:#C586C0">svelte</span><span style="color:#24292E;--shiki-dark:#E6E6E6">:</span><span style="color:#22863A;--shiki-dark:#569CD6">fragment</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">	&#x3C;/</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">AccordionItem</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">	&#x3C;</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">AccordionItem</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">		&#x3C;</span><span style="color:#22863A;--shiki-dark:#569CD6">h2</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> slot</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"title"</span><span style="color:#24292E;--shiki-dark:#808080">></span><span style="color:#24292E;--shiki-dark:#E6E6E6">I expand too!</span><span style="color:#24292E;--shiki-dark:#808080">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#569CD6">h2</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">			&#x3C;</span><span style="color:#22863A;--shiki-dark:#569CD6">p</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> slot</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"content"</span><span style="color:#24292E;--shiki-dark:#808080">></span><span style="color:#24292E;--shiki-dark:#E6E6E6">Click me again to make me collapse</span><span style="color:#24292E;--shiki-dark:#808080">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#569CD6">p</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">	&#x3C;/</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">AccordionItem</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">&#x3C;/</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">Accordion</span><span style="color:#24292E;--shiki-dark:#808080">></span></span></code></pre>`,q,w,fs='<a href="https://svelte.dev/docs/special-elements#slot" rel="nofollow">Svelte slots</a> are a great way to allow client code to specify nested content. Slot component APIs are a middle ground between strongly opinionated and unopinionated. They allow the client code to provide content of any structure they choose and style it as they see fit. The component maintains its intended structure because it can specify where the content of each slot goes. By only imposing some structure, I find slot components are able to retain the simpler data models and maintainability of self-contained components, while offering some of the flexibility of fragmented &amp; nested doll components.',Y,I,xs="Where I find the slot approach lacking is in the API discoverability. I haven’t found a way to coerce my text editor to suggest slots as <code>name=&quot;&quot;</code> attribute values. Similarly, TypeScript seems blissfully unaware of slots. This means I must either read the component code or documentation to know about its slots. I find neither approach as ergonomic as an in-editor IntelliSense suggestion.",J,_,Ds="The slot approach seems ideal for components which need a high-degree of customization for their content, while still wrapping that content in a well-defined design system or underlying functionality. Slots shine brightest in minimally reused layout components like a sidebar or header where the content can vary wildly but needs to remain on-brand. The poor API discoverability makes a slot API undesirable for frequently used or undocumented components.",Q,f,As='<a aria-hidden="true" tabindex="-1" href="#fragmented-component"><span class="icon icon-link"></span></a><a href="#fragmented-component" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Fragmented component',ss,z,js=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#808080">&#x3C;</span><span style="color:#22863A;--shiki-dark:#569CD6">script</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> lang</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"ts"</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C586C0">	import</span><span style="color:#24292E;--shiki-dark:#D4D4D4"> &#123;</span><span style="color:#24292E;--shiki-dark:#9CDCFE">Accordion</span><span style="color:#24292E;--shiki-dark:#D4D4D4">&#125; </span><span style="color:#D73A49;--shiki-dark:#C586C0">from</span><span style="color:#032F62;--shiki-dark:#CE9178"> '$lib/components'</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#569CD6">script</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">&#x3C;</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">Accordion</span><span style="color:#24292E;--shiki-dark:#E6E6E6">.</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">Root</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">	&#x3C;</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">Accordion</span><span style="color:#24292E;--shiki-dark:#E6E6E6">.</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">Item</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">		&#x3C;</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">Accordion</span><span style="color:#24292E;--shiki-dark:#E6E6E6">.</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">Title</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">			Click to expand</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">		&#x3C;/</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">Accordion</span><span style="color:#24292E;--shiki-dark:#E6E6E6">.</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">Title</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">		&#x3C;</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">Accordion</span><span style="color:#24292E;--shiki-dark:#E6E6E6">.</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">Content</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">			&#x3C;</span><span style="color:#22863A;--shiki-dark:#569CD6">p</span><span style="color:#24292E;--shiki-dark:#808080">></span><span style="color:#24292E;--shiki-dark:#E6E6E6">Hello, world</span><span style="color:#24292E;--shiki-dark:#808080">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#569CD6">p</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">			&#x3C;</span><span style="color:#22863A;--shiki-dark:#569CD6">button</span><span style="color:#24292E;--shiki-dark:#808080">></span><span style="color:#24292E;--shiki-dark:#E6E6E6">Click me</span><span style="color:#24292E;--shiki-dark:#808080">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#569CD6">button</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">		&#x3C;/</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">Accordion</span><span style="color:#24292E;--shiki-dark:#E6E6E6">.</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">Content</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">	&#x3C;/</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">Accordion</span><span style="color:#24292E;--shiki-dark:#E6E6E6">.</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">Item</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">	&#x3C;</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">Accordion</span><span style="color:#24292E;--shiki-dark:#E6E6E6">.</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">Item</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">		&#x3C;</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">Accordion</span><span style="color:#24292E;--shiki-dark:#E6E6E6">.</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">Title</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">			I expand too!</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">		&#x3C;/</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">Accordion</span><span style="color:#24292E;--shiki-dark:#E6E6E6">.</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">Title</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">		&#x3C;</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">Accordion</span><span style="color:#24292E;--shiki-dark:#E6E6E6">.</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">Content</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">			&#x3C;</span><span style="color:#22863A;--shiki-dark:#569CD6">p</span><span style="color:#24292E;--shiki-dark:#808080">></span><span style="color:#24292E;--shiki-dark:#E6E6E6">Click me again to make me collapse</span><span style="color:#24292E;--shiki-dark:#808080">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#569CD6">p</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">		&#x3C;/</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">Accordion</span><span style="color:#24292E;--shiki-dark:#E6E6E6">.</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">Content</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">	&#x3C;/</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">Accordion</span><span style="color:#24292E;--shiki-dark:#E6E6E6">.</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">Item</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">&#x3C;/</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">Accordion</span><span style="color:#24292E;--shiki-dark:#E6E6E6">.</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">Root</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"></span></code></pre>`,N,T,bs="Component fragments offer a clean API with great flexibility for the consumer to provide custom styling and child content. While this example makes the API appear highly verbose, in many cases the <code>Accordion.Item</code>s could be put in an <code>#each</code> block to minimize the boilerplate.",as,F,vs="Fragmented components are more error prone. Fragments can be used improperly, such as with the wrong nesting or by not including required children. I’m not aware of a way to provide good error messaging like <code>Accordion error: Content was not provided</code>, though Nesting doll components can enforce the correct nesting hierarchy. The design also makes components with non-trivial state more complicated. If I wanted the accordion to only allow 1 item to be expanded at a time, either the consuming code would need to wire a lot of props and values, or the Accordion components would need to use the context API to handle state since it’s not a Self-contained component.",es,B,gs="Due to the high level of customizability, I think this approach is best for lower-level uses like component libraries where a less opinionated approach is best. It offers a lot of flexibility to downstream consumers of the component.",ns,x,ws='<a aria-hidden="true" tabindex="-1" href="#nesting-doll-component"><span class="icon icon-link"></span></a><a href="#nesting-doll-component" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Nesting doll component',ts,V,Os=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#808080">&#x3C;</span><span style="color:#22863A;--shiki-dark:#569CD6">script</span><span style="color:#6F42C1;--shiki-dark:#9CDCFE"> lang</span><span style="color:#24292E;--shiki-dark:#E6E6E6">=</span><span style="color:#032F62;--shiki-dark:#CE9178">"ts"</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C586C0">	import</span><span style="color:#24292E;--shiki-dark:#D4D4D4"> &#123;</span><span style="color:#24292E;--shiki-dark:#9CDCFE">Accordion</span><span style="color:#24292E;--shiki-dark:#D4D4D4">&#125; </span><span style="color:#D73A49;--shiki-dark:#C586C0">from</span><span style="color:#032F62;--shiki-dark:#CE9178"> '$lib/components'</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#569CD6">script</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">&#x3C;</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">Accordion</span><span style="color:#D73A49;--shiki-dark:#569CD6"> let</span><span style="color:#24292E;--shiki-dark:#E6E6E6">:</span><span style="color:#E36209;--shiki-dark:#9CDCFE">Item</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">	&#x3C;</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">Item</span><span style="color:#D73A49;--shiki-dark:#569CD6"> let</span><span style="color:#24292E;--shiki-dark:#E6E6E6">:</span><span style="color:#E36209;--shiki-dark:#9CDCFE">Title</span><span style="color:#D73A49;--shiki-dark:#569CD6"> let</span><span style="color:#24292E;--shiki-dark:#E6E6E6">:</span><span style="color:#E36209;--shiki-dark:#9CDCFE">Content</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">		&#x3C;</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">Title</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">			Click to expand</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">		&#x3C;/</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">Title</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">		&#x3C;</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">Content</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">			&#x3C;</span><span style="color:#22863A;--shiki-dark:#569CD6">p</span><span style="color:#24292E;--shiki-dark:#808080">></span><span style="color:#24292E;--shiki-dark:#E6E6E6">Hello, world</span><span style="color:#24292E;--shiki-dark:#808080">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#569CD6">p</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">			&#x3C;</span><span style="color:#22863A;--shiki-dark:#569CD6">button</span><span style="color:#24292E;--shiki-dark:#808080">></span><span style="color:#24292E;--shiki-dark:#E6E6E6">Click me</span><span style="color:#24292E;--shiki-dark:#808080">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#569CD6">button</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">		&#x3C;/</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">Content</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">	&#x3C;/</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">Item</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">	&#x3C;</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">Item</span><span style="color:#D73A49;--shiki-dark:#569CD6"> let</span><span style="color:#24292E;--shiki-dark:#E6E6E6">:</span><span style="color:#E36209;--shiki-dark:#9CDCFE">Title</span><span style="color:#D73A49;--shiki-dark:#569CD6"> let</span><span style="color:#24292E;--shiki-dark:#E6E6E6">:</span><span style="color:#E36209;--shiki-dark:#9CDCFE">Content</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">		&#x3C;</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">Title</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">			I expand too!</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">		&#x3C;/</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">Title</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">		&#x3C;</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">Content</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">			&#x3C;</span><span style="color:#22863A;--shiki-dark:#569CD6">p</span><span style="color:#24292E;--shiki-dark:#808080">></span><span style="color:#24292E;--shiki-dark:#E6E6E6">Click me again to make me collapse</span><span style="color:#24292E;--shiki-dark:#808080">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#569CD6">p</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">		&#x3C;/</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">Content</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">	&#x3C;/</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">Item</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">&#x3C;/</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">Accordion</span><span style="color:#24292E;--shiki-dark:#808080">></span></span></code></pre>`,j,H,Is="This design has many of the benefits of Fragmented components, and in some cases a less verbose API (no more <code>Accordion.</code> for each child element). Where I think it truly outshines is how it reduces the opportunity for incorrect usage of nested child components. It’s impossible to put an Accordion <code>Item</code> outside of an <code>Accordion</code> component, because the only way to access the <code>Item</code> component is <em>inside</em> an <code>Accordion</code>. The same is true of the <code>Title</code> and <code>Content</code> of an <code>Item</code>. The Svelte Language Server also provides IntelliSense hints about nested components; the IDE can therefore tell you that <code>let:Item</code> is available on <code>Accordion</code>. This is the magic of nesting doll components!",os,M,_s="I’m not sure if this approach supports tree-shaking; if not, it may unnecessarily increase bundle size if not all of the nested components are used. It also shares most of the downsides of Fragmented components:",is,L,Ts="<li>Limited error messaging <ul><li>it’s possible to use them incorrectly without errors</li></ul></li> <li>Somewhat verbose API</li> <li>Increased complexity for components that use state across nested components</li>",ls;return E=new Xs({props:{$$slots:{default:[Ys]},$$scope:{ctx:C}}}),{c(){t=p("p"),t.innerHTML=y,h=o(),k=p("ul"),k.innerHTML=l,r=o(),Ls(E.$$.fragment),O=o(),D=p("p"),D.textContent=ks,U=o(),A=p("ul"),A.innerHTML=hs,W=o(),m=p("h2"),m.innerHTML=Es,R=o(),P=new rs(!1),$=o(),b=p("p"),b.innerHTML=ys,Z=o(),v=p("ul"),v.innerHTML=Cs,G=o(),g=p("p"),g.textContent=ms,K=o(),u=p("h2"),u.innerHTML=us,X=o(),S=new rs(!1),q=o(),w=p("p"),w.innerHTML=fs,Y=o(),I=p("p"),I.innerHTML=xs,J=o(),_=p("p"),_.textContent=Ds,Q=o(),f=p("h2"),f.innerHTML=As,ss=o(),z=new rs(!1),N=o(),T=p("p"),T.innerHTML=bs,as=o(),F=p("p"),F.innerHTML=vs,es=o(),B=p("p"),B.textContent=gs,ns=o(),x=p("h2"),x.innerHTML=ws,ts=o(),V=new rs(!1),j=o(),H=p("p"),H.innerHTML=Is,os=o(),M=p("p"),M.textContent=_s,is=o(),L=p("ul"),L.innerHTML=Ts,this.h()},l(s){t=c(s,"P",{["data-svelte-h"]:!0}),d(t)!=="svelte-1eh5o8t"&&(t.innerHTML=y),h=i(s),k=c(s,"UL",{["data-svelte-h"]:!0}),d(k)!=="svelte-7omskk"&&(k.innerHTML=l),r=i(s),Ps(E.$$.fragment,s),O=i(s),D=c(s,"P",{["data-svelte-h"]:!0}),d(D)!=="svelte-1iircgq"&&(D.textContent=ks),U=i(s),A=c(s,"UL",{["data-svelte-h"]:!0}),d(A)!=="svelte-ellrqo"&&(A.innerHTML=hs),W=i(s),m=c(s,"H2",{id:!0,["data-svelte-h"]:!0}),d(m)!=="svelte-1sfor7n"&&(m.innerHTML=Es),R=i(s),P=ps(s,!1),$=i(s),b=c(s,"P",{["data-svelte-h"]:!0}),d(b)!=="svelte-1vv895g"&&(b.innerHTML=ys),Z=i(s),v=c(s,"UL",{["data-svelte-h"]:!0}),d(v)!=="svelte-1z8ir4"&&(v.innerHTML=Cs),G=i(s),g=c(s,"P",{["data-svelte-h"]:!0}),d(g)!=="svelte-19mft4q"&&(g.textContent=ms),K=i(s),u=c(s,"H2",{id:!0,["data-svelte-h"]:!0}),d(u)!=="svelte-1bvaq8v"&&(u.innerHTML=us),X=i(s),S=ps(s,!1),q=i(s),w=c(s,"P",{["data-svelte-h"]:!0}),d(w)!=="svelte-ovlbix"&&(w.innerHTML=fs),Y=i(s),I=c(s,"P",{["data-svelte-h"]:!0}),d(I)!=="svelte-58xd93"&&(I.innerHTML=xs),J=i(s),_=c(s,"P",{["data-svelte-h"]:!0}),d(_)!=="svelte-9s8ezc"&&(_.textContent=Ds),Q=i(s),f=c(s,"H2",{id:!0,["data-svelte-h"]:!0}),d(f)!=="svelte-17yxhtp"&&(f.innerHTML=As),ss=i(s),z=ps(s,!1),N=i(s),T=c(s,"P",{["data-svelte-h"]:!0}),d(T)!=="svelte-ildss7"&&(T.innerHTML=bs),as=i(s),F=c(s,"P",{["data-svelte-h"]:!0}),d(F)!=="svelte-ko21iu"&&(F.innerHTML=vs),es=i(s),B=c(s,"P",{["data-svelte-h"]:!0}),d(B)!=="svelte-ymnjs0"&&(B.textContent=gs),ns=i(s),x=c(s,"H2",{id:!0,["data-svelte-h"]:!0}),d(x)!=="svelte-1s6xnwe"&&(x.innerHTML=ws),ts=i(s),V=ps(s,!1),j=i(s),H=c(s,"P",{["data-svelte-h"]:!0}),d(H)!=="svelte-7wo1u8"&&(H.innerHTML=Is),os=i(s),M=c(s,"P",{["data-svelte-h"]:!0}),d(M)!=="svelte-1pe22ht"&&(M.textContent=_s),is=i(s),L=c(s,"UL",{["data-svelte-h"]:!0}),d(L)!=="svelte-8r8wmc"&&(L.innerHTML=Ts),this.h()},h(){cs(m,"id","self-contained-component"),P.a=$,cs(u,"id","slot-component"),S.a=q,cs(f,"id","fragmented-component"),z.a=N,cs(x,"id","nesting-doll-component"),V.a=j},m(s,a){e(s,t,a),e(s,h,a),e(s,k,a),e(s,r,a),$s(E,s,a),e(s,O,a),e(s,D,a),e(s,U,a),e(s,A,a),e(s,W,a),e(s,m,a),e(s,R,a),P.m(Ns,s,a),e(s,$,a),e(s,b,a),e(s,Z,a),e(s,v,a),e(s,G,a),e(s,g,a),e(s,K,a),e(s,u,a),e(s,X,a),S.m(Vs,s,a),e(s,q,a),e(s,w,a),e(s,Y,a),e(s,I,a),e(s,J,a),e(s,_,a),e(s,Q,a),e(s,f,a),e(s,ss,a),z.m(js,s,a),e(s,N,a),e(s,T,a),e(s,as,a),e(s,F,a),e(s,es,a),e(s,B,a),e(s,ns,a),e(s,x,a),e(s,ts,a),V.m(Os,s,a),e(s,j,a),e(s,H,a),e(s,os,a),e(s,M,a),e(s,is,a),e(s,L,a),ls=!0},p(s,a){const Fs={};a&2&&(Fs.$$scope={dirty:a,ctx:s}),E.$set(Fs)},i(s){ls||(Ss(E.$$.fragment,s),ls=!0)},o(s){qs(E.$$.fragment,s),ls=!1},d(s){s&&(n(t),n(h),n(k),n(r),n(O),n(D),n(U),n(A),n(W),n(m),n(R),P.d(),n($),n(b),n(Z),n(v),n(G),n(g),n(K),n(u),n(X),S.d(),n(q),n(w),n(Y),n(I),n(J),n(_),n(Q),n(f),n(ss),z.d(),n(N),n(T),n(as),n(F),n(es),n(B),n(ns),n(x),n(ts),V.d(),n(j),n(H),n(os),n(M),n(is),n(L)),zs(E,s)}}}function Qs(C){let t,y;const h=[C[0],Ms];let k={$$slots:{default:[Js]},$$scope:{ctx:C}};for(let l=0;l<h.length;l+=1)k=ds(k,h[l]);return t=new Ks({props:k}),{c(){Ls(t.$$.fragment)},l(l){Ps(t.$$.fragment,l)},m(l,r){$s(t,l,r),y=!0},p(l,[r]){const E=r&1?Gs(h,[r&1&&Hs(l[0]),r&0&&Hs(Ms)]):{};r&2&&(E.$$scope={dirty:r,ctx:l}),t.$set(E)},i(l){y||(Ss(t.$$.fragment,l),y=!0)},o(l){qs(t.$$.fragment,l),y=!1},d(l){zs(t,l)}}}const Ms={title:"Svelte component APIs",description:"There are many ways to Svelte a component...",slug:"svelte-component-apis",publish:!0,lastmod:"2024-02-06T00:00:00.000Z",date:"2024-02-13T00:00:00.000Z",aliases:null,tags:["status/seedling","topic/webdev","topic/svelte"],timeToRead:6,internalLinks:["/notes/Make%20API%20misuse%20hard/"],flashcards:[]};function sa(C,t,y){return C.$$set=h=>{y(0,t=ds(ds({},t),Bs(h)))},t=Bs(t),[t]}class ia extends Rs{constructor(t){super(),Zs(this,t,sa,Qs,Us,{})}}export{ia as default,Ms as metadata};