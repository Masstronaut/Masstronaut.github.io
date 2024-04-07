import{s as ve,C as Ss,a5 as oe,f as p,a as i,I as u,g as r,u as k,c as n,K as f,j as be,i as a,d as t,A as ce}from"./scheduler.73a07135.js";import{S as _e,i as we,b as Ls,d as Hs,m as Ms,a as $s,t as js,e as qs}from"./index.ba10b74b.js";import{g as Fe,a as pe}from"./spread.8a54911c.js";import{M as Ae}from"./MDSveXNoteLayout.91826859.js";import{T as re}from"./Table.85f8c55a.js";function Te(C){let l,y="<tr><th>Option</th> <th>Selection</th></tr>",E,c,d="<tr><td>Which Svelte app template?</td> <td>Skeleton project</td></tr> <tr><td>Add type checking?</td> <td>TypeScript</td></tr> <tr><td>Add ESLint for code linting?</td> <td>Yes</td></tr> <tr><td>Add Prettier for code formatting?</td> <td>Yes</td></tr> <tr><td>Add Playwright for browser testing?</td> <td>No</td></tr> <tr><td>Add Vitest for unit testing?</td> <td>Yes</td></tr>";return{c(){l=p("thead"),l.innerHTML=y,E=i(),c=p("tbody"),c.innerHTML=d},l(o){l=r(o,"THEAD",{["data-svelte-h"]:!0}),k(l)!=="svelte-w5vgos"&&(l.innerHTML=y),E=n(o),c=r(o,"TBODY",{["data-svelte-h"]:!0}),k(c)!=="svelte-1etve8r"&&(c.innerHTML=d)},m(o,h){a(o,l,h),a(o,E,h),a(o,c,h)},p:ce,d(o){o&&(t(l),t(E),t(c))}}}function ge(C){let l,y="<tr><th>Option</th> <th>Selection</th></tr>",E,c,d="<tr><td>Do you want to run the ‘eslintPlugin’ fix on your project?</td> <td>Yes</td></tr>";return{c(){l=p("thead"),l.innerHTML=y,E=i(),c=p("tbody"),c.innerHTML=d},l(o){l=r(o,"THEAD",{["data-svelte-h"]:!0}),k(l)!=="svelte-w5vgos"&&(l.innerHTML=y),E=n(o),c=r(o,"TBODY",{["data-svelte-h"]:!0}),k(c)!=="svelte-1nmx80b"&&(c.innerHTML=d)},m(o,h){a(o,l,h),a(o,E,h),a(o,c,h)},p:ce,d(o){o&&(t(l),t(E),t(c))}}}function xe(C){let l,y="This will walk you through the steps to set up a new <em>SvelteKit</em> project with <em>StorybookJS</em>. It will also configure Storybook to use <em>ViteJS</em>. Using Vite gets the local storybook server up and running around ~50x faster.",E,c,d="<p>Note: I’ve opted to use TypeScript in this guide, but it works just as well for JavaScript. As of April 2022, Storybook supports svelte components implemented in TS, but does <strong>not</strong> support <em>stories</em> written in TypeScript yet.</p>",o,h,Ps="Initialize a <em>SvelteKit</em> project:",ns,I,de='<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#DCDCAA">npm</span><span style="color:#032F62;--shiki-dark:#CE9178"> init</span><span style="color:#032F62;--shiki-dark:#CE9178"> svelte@next</span><span style="color:#032F62;--shiki-dark:#CE9178"> my-sveltekit-app</span></span></code></pre>',z,b,Ks="Confirm that it can install <code>create-svelte@next</code> then continue to the SvelteKit config options. My preferred config is as follows:",os,m,ps,_,Js="With <em>SvelteKit</em> configured, we can start setting up <em>StorybookJS</em>:",rs,V,Ee=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0"><code><span class="line"><span style="color:#005CC5;--shiki-dark:#DCDCAA">cd</span><span style="color:#032F62;--shiki-dark:#CE9178"> my-sveltekit-app</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#DCDCAA">npx</span><span style="color:#032F62;--shiki-dark:#CE9178"> sb</span><span style="color:#032F62;--shiki-dark:#CE9178"> init</span><span style="color:#005CC5;--shiki-dark:#CE9178"> --builder</span><span style="color:#032F62;--shiki-dark:#CE9178"> @storybook/builder-vite</span></span></code></pre>`,Y,w,Os="The automated <em>StorybookJS</em> configuration tool will run and set things up for a Svelte project. It’ll ask you if you want to set up the storybook linter plugin:",ks,D,cs,F,Bs="Once the setup is done, there are a couple manual config steps we need to go through.",ds,A,Is="First we need to tell Storybook to use <em>CommonJS</em>. Create the file <code>.storybook/package.json</code> and add the following to it:",Es,N,he=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0"><code><span class="line"><span style="color:#6A737D;--shiki-dark:#6A9955">// .storybook/package.json</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">&#123;</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#9CDCFE">  "type"</span><span style="color:#24292E;--shiki-dark:#E6E6E6">: </span><span style="color:#032F62;--shiki-dark:#CE9178">"commonjs"</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">&#125;</span></span></code></pre>`,U,T,zs="Then we need to remove Storybook’s preprocessing config and tell <em>ViteJS</em> how to find and preprocess our svelte files:",hs,g,Vs="<li>Remove <code>&quot;preprocess&quot;: require( &quot;../svelte.config.js&quot; ).preprocess</code></li> <li>Import the svelte preprocessor: <code>const preprocess = require(&#39;svelte-preprocess&#39;);</code></li> <li>Import the <code>path</code> package to help with include paths: <code>const path = require(&#39;path&#39;);</code></li> <li>Set the <em>ViteJS</em> config to use the svelte preprocessor and include paths (see the <code>async viteFinal(config, {configType}) {...}</code> below)</li>",ys,x,Ys="The final <code>.storybook/main.js</code> file should look like this:",Cs,Q,ye=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0"><code><span class="line"><span style="color:#6A737D;--shiki-dark:#6A9955">// .storybook/main.js</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#569CD6">const</span><span style="color:#005CC5;--shiki-dark:#9CDCFE"> preprocess</span><span style="color:#D73A49;--shiki-dark:#D4D4D4"> =</span><span style="color:#6F42C1;--shiki-dark:#DCDCAA"> require</span><span style="color:#24292E;--shiki-dark:#E6E6E6">(</span><span style="color:#032F62;--shiki-dark:#CE9178">'svelte-preprocess'</span><span style="color:#24292E;--shiki-dark:#E6E6E6">);</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#569CD6">const</span><span style="color:#005CC5;--shiki-dark:#9CDCFE"> path</span><span style="color:#D73A49;--shiki-dark:#D4D4D4"> =</span><span style="color:#6F42C1;--shiki-dark:#DCDCAA"> require</span><span style="color:#24292E;--shiki-dark:#E6E6E6">(</span><span style="color:#032F62;--shiki-dark:#CE9178">'path'</span><span style="color:#24292E;--shiki-dark:#E6E6E6">);</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#4EC9B0">module</span><span style="color:#24292E;--shiki-dark:#E6E6E6">.</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">exports</span><span style="color:#D73A49;--shiki-dark:#D4D4D4"> =</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> &#123;</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#CE9178">  "stories"</span><span style="color:#24292E;--shiki-dark:#9CDCFE">:</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> [</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#CE9178">    "../src/**/*.stories.mdx"</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#CE9178">    "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">  ],</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#CE9178">  "addons"</span><span style="color:#24292E;--shiki-dark:#9CDCFE">:</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> [</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#CE9178">    "@storybook/addon-links"</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#CE9178">    "@storybook/addon-essentials"</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#CE9178">    "@storybook/addon-svelte-csf"</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">  ],</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#CE9178">  "framework"</span><span style="color:#24292E;--shiki-dark:#9CDCFE">:</span><span style="color:#032F62;--shiki-dark:#CE9178"> "@storybook/svelte"</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#CE9178">  "core"</span><span style="color:#24292E;--shiki-dark:#9CDCFE">:</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> &#123;</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#CE9178">    "builder"</span><span style="color:#24292E;--shiki-dark:#9CDCFE">:</span><span style="color:#032F62;--shiki-dark:#CE9178"> "@storybook/builder-vite"</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">  &#125;,</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#569CD6">  async</span><span style="color:#6F42C1;--shiki-dark:#DCDCAA"> viteFinal</span><span style="color:#24292E;--shiki-dark:#E6E6E6">(</span><span style="color:#E36209;--shiki-dark:#9CDCFE">config</span><span style="color:#24292E;--shiki-dark:#E6E6E6">, &#123; </span><span style="color:#E36209;--shiki-dark:#9CDCFE">configType</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> &#125;) &#123;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">    config</span><span style="color:#24292E;--shiki-dark:#E6E6E6">.</span><span style="color:#24292E;--shiki-dark:#9CDCFE">preprocess</span><span style="color:#D73A49;--shiki-dark:#D4D4D4"> =</span><span style="color:#6F42C1;--shiki-dark:#DCDCAA"> preprocess</span><span style="color:#24292E;--shiki-dark:#E6E6E6">(&#123;&#125;);</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">    config</span><span style="color:#24292E;--shiki-dark:#E6E6E6">.</span><span style="color:#24292E;--shiki-dark:#9CDCFE">resolve</span><span style="color:#24292E;--shiki-dark:#E6E6E6">.</span><span style="color:#24292E;--shiki-dark:#9CDCFE">alias</span><span style="color:#D73A49;--shiki-dark:#D4D4D4"> =</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> &#123;</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A9955">	  // alias: path</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">	  $components:</span><span style="color:#24292E;--shiki-dark:#9CDCFE"> path</span><span style="color:#24292E;--shiki-dark:#E6E6E6">.</span><span style="color:#6F42C1;--shiki-dark:#DCDCAA">resolve</span><span style="color:#24292E;--shiki-dark:#E6E6E6">(</span><span style="color:#032F62;--shiki-dark:#CE9178">'./src/components'</span><span style="color:#24292E;--shiki-dark:#E6E6E6">),</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">	  $routes:</span><span style="color:#24292E;--shiki-dark:#9CDCFE"> path</span><span style="color:#24292E;--shiki-dark:#E6E6E6">.</span><span style="color:#6F42C1;--shiki-dark:#DCDCAA">resolve</span><span style="color:#24292E;--shiki-dark:#E6E6E6">(</span><span style="color:#032F62;--shiki-dark:#CE9178">'./src/routes'</span><span style="color:#24292E;--shiki-dark:#E6E6E6">),</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">	  $lib:</span><span style="color:#24292E;--shiki-dark:#9CDCFE"> path</span><span style="color:#24292E;--shiki-dark:#E6E6E6">.</span><span style="color:#6F42C1;--shiki-dark:#DCDCAA">resolve</span><span style="color:#24292E;--shiki-dark:#E6E6E6">(</span><span style="color:#032F62;--shiki-dark:#CE9178">'./src/lib'</span><span style="color:#24292E;--shiki-dark:#E6E6E6">),</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A9955">	  // The $styles alias is used to setup tailwindcss </span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">	  $styles:</span><span style="color:#24292E;--shiki-dark:#9CDCFE"> path</span><span style="color:#24292E;--shiki-dark:#E6E6E6">.</span><span style="color:#6F42C1;--shiki-dark:#DCDCAA">resolve</span><span style="color:#24292E;--shiki-dark:#E6E6E6">(</span><span style="color:#032F62;--shiki-dark:#CE9178">'./src/styles'</span><span style="color:#24292E;--shiki-dark:#E6E6E6">),</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">	&#125;;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C586C0">    return</span><span style="color:#24292E;--shiki-dark:#9CDCFE"> config</span><span style="color:#24292E;--shiki-dark:#E6E6E6">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">  &#125;,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">&#125;</span></span></code></pre>`,R,S,Ns="<p>Note: if you have different include path aliases, you’ll want to make sure that the ones in <code>.storybook/main.js</code> match your <code>svelte.config.js</code> aliases</p>",us,L,Us="Voila! You should be all set.",fs,v,Qs='<a aria-hidden="true" tabindex="-1" href="#bonus-tailwindcss-support"><span class="icon icon-link"></span></a><a href="#bonus-tailwindcss-support" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Bonus: Tailwindcss support',ms,H,Rs="If you <em>also</em> want to use <em>tailwindcss</em> with both <em>SvelteJS</em>/<em>SvelteKit</em> and <em>StorybookJS</em>, that config has a couple of gotchas as well. Here’s the steps to get it up and running.",Ds,M,Zs='First, install <em>tailwindcss</em> in your <em>SvelteKit</em> project (per <a href="https://tailwindcss.com/docs/guides/sveltekit" rel="nofollow">the official tailwind docs</a>):',vs,Z,Ce=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#DCDCAA">npm</span><span style="color:#032F62;--shiki-dark:#CE9178"> install</span><span style="color:#005CC5;--shiki-dark:#CE9178"> -D</span><span style="color:#032F62;--shiki-dark:#CE9178"> tailwindcss</span><span style="color:#032F62;--shiki-dark:#CE9178"> postcss</span><span style="color:#032F62;--shiki-dark:#CE9178"> autoprefixer</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#DCDCAA">npx</span><span style="color:#032F62;--shiki-dark:#CE9178"> tailwindcss</span><span style="color:#032F62;--shiki-dark:#CE9178"> init</span><span style="color:#032F62;--shiki-dark:#CE9178"> tailwind.config.cjs</span><span style="color:#005CC5;--shiki-dark:#CE9178"> -p</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#DCDCAA">mv</span><span style="color:#032F62;--shiki-dark:#CE9178"> postcss.config.js</span><span style="color:#032F62;--shiki-dark:#CE9178"> postcss.config.cjs</span></span></code></pre>`,W,$,Ws="Then update the <code>tailwind.config.cjs</code> so it knows where to find your components:",bs,X,ue=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0"><code><span class="line"><span style="color:#6A737D;--shiki-dark:#6A9955">// tailwind.config.cjs</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A9955">/** </span><span style="color:#D73A49;--shiki-dark:#569CD6">@type</span><span style="color:#6F42C1;--shiki-dark:#4EC9B0"> &#123;import('tailwindcss').Config&#125;</span><span style="color:#6A737D;--shiki-dark:#6A9955"> */</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#4EC9B0">module</span><span style="color:#24292E;--shiki-dark:#E6E6E6">.</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">exports</span><span style="color:#D73A49;--shiki-dark:#D4D4D4"> =</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> &#123;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">  content:</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> [</span><span style="color:#032F62;--shiki-dark:#CE9178">'./src/**/*.&#123;html,js,svelte,ts&#125;'</span><span style="color:#24292E;--shiki-dark:#E6E6E6">],</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">  theme:</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> &#123;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">    extend:</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> &#123;&#125;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">  &#125;,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">  plugins:</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> []</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">&#125;;</span></span></code></pre>`,G,j,Xs="Create a <code>src/styles/tailwind.css</code> file that sets up <em>tailwindcss</em> for your components:",_s,ss,fe=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#C586C0">@tailwind</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> base;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C586C0">@tailwind</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> components;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C586C0">@tailwind</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> utilities;</span></span></code></pre>`,es,q,Gs="Finally, create a <code>src/routes/__layout.svelte</code> file that includes <em>tailwindcss</em> for your sveltekit project:",ws,as,me=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#808080">&#x3C;</span><span style="color:#22863A;--shiki-dark:#569CD6">script</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C586C0">  import</span><span style="color:#032F62;--shiki-dark:#CE9178"> "$styles/tailwind.css"</span><span style="color:#24292E;--shiki-dark:#D4D4D4">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#569CD6">script</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">&#x3C;</span><span style="color:#D73A49;--shiki-dark:#C586C0">slot</span><span style="color:#24292E;--shiki-dark:#808080"> /></span></span></code></pre>`,ts,P,se="At this point <em>tailwindcss</em> should be working in your <em>SvelteKit</em> project. It won’t be working in the <em>StorybookJS</em> view of your components though; storybook still needs to be configured to use <em>tailwindcss</em>. To do that add the following line to the top of <code>.storybook/preview.js</code>:",Fs,ls,De=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0"><code><span class="line"><span style="color:#6A737D;--shiki-dark:#6A9955">// .storybook/preview.js</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C586C0">import</span><span style="color:#032F62;--shiki-dark:#CE9178"> '$styles/tailwind.css'</span><span style="color:#24292E;--shiki-dark:#E6E6E6">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A9955">// No need to touch the rest of it, which for me looks like this:</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C586C0">export</span><span style="color:#D73A49;--shiki-dark:#569CD6"> const</span><span style="color:#005CC5;--shiki-dark:#9CDCFE"> parameters</span><span style="color:#D73A49;--shiki-dark:#D4D4D4"> =</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> &#123;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">  actions:</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> &#123; </span><span style="color:#24292E;--shiki-dark:#9CDCFE">argTypesRegex:</span><span style="color:#032F62;--shiki-dark:#CE9178"> "^on[A-Z].*"</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> &#125;,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">  controls:</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> &#123;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">    matchers:</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> &#123;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">      color:</span><span style="color:#032F62;--shiki-dark:#D16969"> /</span><span style="color:#032F62;--shiki-dark:#CE9178">(</span><span style="color:#032F62;--shiki-dark:#D16969">background</span><span style="color:#D73A49;--shiki-dark:#DCDCAA">|</span><span style="color:#032F62;--shiki-dark:#D16969">color</span><span style="color:#032F62;--shiki-dark:#CE9178">)</span><span style="color:#D73A49;--shiki-dark:#DCDCAA">$</span><span style="color:#032F62;--shiki-dark:#D16969">/</span><span style="color:#D73A49;--shiki-dark:#569CD6">i</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">      date:</span><span style="color:#032F62;--shiki-dark:#D16969"> /Date</span><span style="color:#D73A49;--shiki-dark:#DCDCAA">$</span><span style="color:#032F62;--shiki-dark:#D16969">/</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">    &#125;,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">  &#125;,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">&#125;</span></span></code></pre>`,is,K,ee="<p>!Note: the <code>.storybook/main.js</code> file needs to have the alias <code>$styles: path.resolve(&#39;./src/styles&#39;)</code> set in vite’s <code>config.resolve.alias</code> object for the <code>import &#39;$styles/tailwind.css&#39;</code> to work.</p>",As,J,ae="That’s it! You should have the following correctly set up now:",Ts,O,te="<li><em>SvelteKit</em> using <em>TypeScript</em>, styleable with <em>tailwindcss</em>, all using <em>ViteJS</em></li> <li>A complementary <em>StorybookJS</em> also using <em>ViteJS</em> and <em>tailwindcss</em> for your <em>TypeScript</em> components.</li>",gs,B,le="Sadly as of now (May 2022) your stories still need to be authored in <em>JavaScript</em>.",xs;return m=new re({props:{$$slots:{default:[Te]},$$scope:{ctx:C}}}),D=new re({props:{$$slots:{default:[ge]},$$scope:{ctx:C}}}),{c(){l=p("p"),l.innerHTML=y,E=i(),c=p("blockquote"),c.innerHTML=d,o=i(),h=p("p"),h.innerHTML=Ps,ns=i(),I=new u(!1),z=i(),b=p("p"),b.innerHTML=Ks,os=i(),Ls(m.$$.fragment),ps=i(),_=p("p"),_.innerHTML=Js,rs=i(),V=new u(!1),Y=i(),w=p("p"),w.innerHTML=Os,ks=i(),Ls(D.$$.fragment),cs=i(),F=p("p"),F.textContent=Bs,ds=i(),A=p("p"),A.innerHTML=Is,Es=i(),N=new u(!1),U=i(),T=p("p"),T.innerHTML=zs,hs=i(),g=p("ol"),g.innerHTML=Vs,ys=i(),x=p("p"),x.innerHTML=Ys,Cs=i(),Q=new u(!1),R=i(),S=p("blockquote"),S.innerHTML=Ns,us=i(),L=p("p"),L.textContent=Us,fs=i(),v=p("h2"),v.innerHTML=Qs,ms=i(),H=p("p"),H.innerHTML=Rs,Ds=i(),M=p("p"),M.innerHTML=Zs,vs=i(),Z=new u(!1),W=i(),$=p("p"),$.innerHTML=Ws,bs=i(),X=new u(!1),G=i(),j=p("p"),j.innerHTML=Xs,_s=i(),ss=new u(!1),es=i(),q=p("p"),q.innerHTML=Gs,ws=i(),as=new u(!1),ts=i(),P=p("p"),P.innerHTML=se,Fs=i(),ls=new u(!1),is=i(),K=p("blockquote"),K.innerHTML=ee,As=i(),J=p("p"),J.textContent=ae,Ts=i(),O=p("ul"),O.innerHTML=te,gs=i(),B=p("p"),B.innerHTML=le,this.h()},l(s){l=r(s,"P",{["data-svelte-h"]:!0}),k(l)!=="svelte-1fqd0a1"&&(l.innerHTML=y),E=n(s),c=r(s,"BLOCKQUOTE",{["data-svelte-h"]:!0}),k(c)!=="svelte-1evrzvi"&&(c.innerHTML=d),o=n(s),h=r(s,"P",{["data-svelte-h"]:!0}),k(h)!=="svelte-1psveak"&&(h.innerHTML=Ps),ns=n(s),I=f(s,!1),z=n(s),b=r(s,"P",{["data-svelte-h"]:!0}),k(b)!=="svelte-1cxk78z"&&(b.innerHTML=Ks),os=n(s),Hs(m.$$.fragment,s),ps=n(s),_=r(s,"P",{["data-svelte-h"]:!0}),k(_)!=="svelte-bmm9ef"&&(_.innerHTML=Js),rs=n(s),V=f(s,!1),Y=n(s),w=r(s,"P",{["data-svelte-h"]:!0}),k(w)!=="svelte-1rrjf4j"&&(w.innerHTML=Os),ks=n(s),Hs(D.$$.fragment,s),cs=n(s),F=r(s,"P",{["data-svelte-h"]:!0}),k(F)!=="svelte-eja9k9"&&(F.textContent=Bs),ds=n(s),A=r(s,"P",{["data-svelte-h"]:!0}),k(A)!=="svelte-7yz4u"&&(A.innerHTML=Is),Es=n(s),N=f(s,!1),U=n(s),T=r(s,"P",{["data-svelte-h"]:!0}),k(T)!=="svelte-1v6c7v7"&&(T.innerHTML=zs),hs=n(s),g=r(s,"OL",{["data-svelte-h"]:!0}),k(g)!=="svelte-14e1i9t"&&(g.innerHTML=Vs),ys=n(s),x=r(s,"P",{["data-svelte-h"]:!0}),k(x)!=="svelte-w6nmvq"&&(x.innerHTML=Ys),Cs=n(s),Q=f(s,!1),R=n(s),S=r(s,"BLOCKQUOTE",{["data-svelte-h"]:!0}),k(S)!=="svelte-8iupgo"&&(S.innerHTML=Ns),us=n(s),L=r(s,"P",{["data-svelte-h"]:!0}),k(L)!=="svelte-1mbqj2"&&(L.textContent=Us),fs=n(s),v=r(s,"H2",{id:!0,["data-svelte-h"]:!0}),k(v)!=="svelte-1u7hna6"&&(v.innerHTML=Qs),ms=n(s),H=r(s,"P",{["data-svelte-h"]:!0}),k(H)!=="svelte-1lnjsgv"&&(H.innerHTML=Rs),Ds=n(s),M=r(s,"P",{["data-svelte-h"]:!0}),k(M)!=="svelte-rqx5iv"&&(M.innerHTML=Zs),vs=n(s),Z=f(s,!1),W=n(s),$=r(s,"P",{["data-svelte-h"]:!0}),k($)!=="svelte-180102b"&&($.innerHTML=Ws),bs=n(s),X=f(s,!1),G=n(s),j=r(s,"P",{["data-svelte-h"]:!0}),k(j)!=="svelte-4mbbig"&&(j.innerHTML=Xs),_s=n(s),ss=f(s,!1),es=n(s),q=r(s,"P",{["data-svelte-h"]:!0}),k(q)!=="svelte-1dmnoz6"&&(q.innerHTML=Gs),ws=n(s),as=f(s,!1),ts=n(s),P=r(s,"P",{["data-svelte-h"]:!0}),k(P)!=="svelte-1dhusc0"&&(P.innerHTML=se),Fs=n(s),ls=f(s,!1),is=n(s),K=r(s,"BLOCKQUOTE",{["data-svelte-h"]:!0}),k(K)!=="svelte-n40q9u"&&(K.innerHTML=ee),As=n(s),J=r(s,"P",{["data-svelte-h"]:!0}),k(J)!=="svelte-fqsdpz"&&(J.textContent=ae),Ts=n(s),O=r(s,"UL",{["data-svelte-h"]:!0}),k(O)!=="svelte-lw6etz"&&(O.innerHTML=te),gs=n(s),B=r(s,"P",{["data-svelte-h"]:!0}),k(B)!=="svelte-60xzsf"&&(B.innerHTML=le),this.h()},h(){I.a=z,V.a=Y,N.a=U,Q.a=R,be(v,"id","bonus-tailwindcss-support"),Z.a=W,X.a=G,ss.a=es,as.a=ts,ls.a=is},m(s,e){a(s,l,e),a(s,E,e),a(s,c,e),a(s,o,e),a(s,h,e),a(s,ns,e),I.m(de,s,e),a(s,z,e),a(s,b,e),a(s,os,e),Ms(m,s,e),a(s,ps,e),a(s,_,e),a(s,rs,e),V.m(Ee,s,e),a(s,Y,e),a(s,w,e),a(s,ks,e),Ms(D,s,e),a(s,cs,e),a(s,F,e),a(s,ds,e),a(s,A,e),a(s,Es,e),N.m(he,s,e),a(s,U,e),a(s,T,e),a(s,hs,e),a(s,g,e),a(s,ys,e),a(s,x,e),a(s,Cs,e),Q.m(ye,s,e),a(s,R,e),a(s,S,e),a(s,us,e),a(s,L,e),a(s,fs,e),a(s,v,e),a(s,ms,e),a(s,H,e),a(s,Ds,e),a(s,M,e),a(s,vs,e),Z.m(Ce,s,e),a(s,W,e),a(s,$,e),a(s,bs,e),X.m(ue,s,e),a(s,G,e),a(s,j,e),a(s,_s,e),ss.m(fe,s,e),a(s,es,e),a(s,q,e),a(s,ws,e),as.m(me,s,e),a(s,ts,e),a(s,P,e),a(s,Fs,e),ls.m(De,s,e),a(s,is,e),a(s,K,e),a(s,As,e),a(s,J,e),a(s,Ts,e),a(s,O,e),a(s,gs,e),a(s,B,e),xs=!0},p(s,e){const ie={};e&2&&(ie.$$scope={dirty:e,ctx:s}),m.$set(ie);const ne={};e&2&&(ne.$$scope={dirty:e,ctx:s}),D.$set(ne)},i(s){xs||($s(m.$$.fragment,s),$s(D.$$.fragment,s),xs=!0)},o(s){js(m.$$.fragment,s),js(D.$$.fragment,s),xs=!1},d(s){s&&(t(l),t(E),t(c),t(o),t(h),t(ns),I.d(),t(z),t(b),t(os),t(ps),t(_),t(rs),V.d(),t(Y),t(w),t(ks),t(cs),t(F),t(ds),t(A),t(Es),N.d(),t(U),t(T),t(hs),t(g),t(ys),t(x),t(Cs),Q.d(),t(R),t(S),t(us),t(L),t(fs),t(v),t(ms),t(H),t(Ds),t(M),t(vs),Z.d(),t(W),t($),t(bs),X.d(),t(G),t(j),t(_s),ss.d(),t(es),t(q),t(ws),as.d(),t(ts),t(P),t(Fs),ls.d(),t(is),t(K),t(As),t(J),t(Ts),t(O),t(gs),t(B)),qs(m,s),qs(D,s)}}}function Se(C){let l,y;const E=[C[0],ke];let c={$$slots:{default:[xe]},$$scope:{ctx:C}};for(let d=0;d<E.length;d+=1)c=Ss(c,E[d]);return l=new Ae({props:c}),{c(){Ls(l.$$.fragment)},l(d){Hs(l.$$.fragment,d)},m(d,o){Ms(l,d,o),y=!0},p(d,[o]){const h=o&1?Fe(E,[o&1&&pe(d[0]),o&0&&pe(ke)]):{};o&2&&(h.$$scope={dirty:o,ctx:d}),l.$set(h)},i(d){y||($s(l.$$.fragment,d),y=!0)},o(d){js(l.$$.fragment,d),y=!1},d(d){qs(l,d)}}}const ke={title:"Setting up a SvelteKit project with Storybook",description:"Setting up Storybook on a SvelteKit project doesn't work out of the box using the config tool. This guide walks you through a few extra steps needed to get SvelteKit and Storybook running.",slug:"sveltekit-storybook-setup",publish:!0,lastmod:"2022-04-19T00:00:00.000Z",date:"2022-04-19T00:00:00.000Z",aliases:["Set up SvelteKit with Storybook","Sveltekit Storybook setup"],tags:["status/seedling","topic/webdev","taxonomy/reference"],timeToRead:3,internalLinks:[],flashcards:[]};function Le(C,l,y){return C.$$set=E=>{y(0,l=Ss(Ss({},l),oe(E)))},l=oe(l),[l]}class Pe extends _e{constructor(l){super(),we(this,l,Le,Se,ve,{})}}export{Pe as default,ke as metadata};