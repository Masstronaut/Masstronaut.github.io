import{s as Ze,C as Zs,N as ge,f as p,a as i,I as y,e as u,g as r,u as c,c as n,K as C,j as Qe,i as t,d as a,A as Se}from"./scheduler.e9e6880c.js";import{S as We,i as Xe,b as Qs,d as Ws,m as Xs,a as Gs,t as se,e as ee}from"./index.ebf47752.js";import{g as Ge,a as Ae}from"./spread.8a54911c.js";import{M as st}from"./MDSveXNoteLayout.def1b126.js";import{T as xe}from"./Table.7d082083.js";function et(f){let l,m="<tr><th>Option</th> <th>Selection</th></tr>",E,k,d="<tr><td>Which Svelte app template?</td> <td>Skeleton project</td></tr> <tr><td>Add type checking?</td> <td>TypeScript</td></tr> <tr><td>Add ESLint for code linting?</td> <td>Yes</td></tr> <tr><td>Add Prettier for code formatting?</td> <td>Yes</td></tr> <tr><td>Add Playwright for browser testing?</td> <td>No</td></tr> <tr><td>Add Vitest for unit testing?</td> <td>Yes</td></tr>";return{c(){l=p("thead"),l.innerHTML=m,E=i(),k=p("tbody"),k.innerHTML=d},l(o){l=r(o,"THEAD",{["data-svelte-h"]:!0}),c(l)!=="svelte-w5vgos"&&(l.innerHTML=m),E=n(o),k=r(o,"TBODY",{["data-svelte-h"]:!0}),c(k)!=="svelte-1etve8r"&&(k.innerHTML=d)},m(o,h){t(o,l,h),t(o,E,h),t(o,k,h)},p:Se,d(o){o&&(a(l),a(E),a(k))}}}function tt(f){let l,m="<tr><th>Option</th> <th>Selection</th></tr>",E,k,d="<tr><td>Do you want to run the ‘eslintPlugin’ fix on your project?</td> <td>Yes</td></tr>";return{c(){l=p("thead"),l.innerHTML=m,E=i(),k=p("tbody"),k.innerHTML=d},l(o){l=r(o,"THEAD",{["data-svelte-h"]:!0}),c(l)!=="svelte-w5vgos"&&(l.innerHTML=m),E=n(o),k=r(o,"TBODY",{["data-svelte-h"]:!0}),c(k)!=="svelte-1nmx80b"&&(k.innerHTML=d)},m(o,h){t(o,l,h),t(o,E,h),t(o,k,h)},p:Se,d(o){o&&(a(l),a(E),a(k))}}}function at(f){let l,m="This will walk you through the steps to set up a new <em>SvelteKit</em> project with <em>StorybookJS</em>. It will also configure Storybook to use <em>ViteJS</em>. Using Vite gets the local storybook server up and running around ~50x faster.",E,k,d="<p>Note: I’ve opted to use TypeScript in this guide, but it works just as well for JavaScript. As of April 2022, Storybook supports svelte components implemented in TS, but does <strong>not</strong> support <em>stories</em> written in TypeScript yet.</p>",o,h,te="Initialize a <em>SvelteKit</em> project:",Fs,z,$e='<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#DCDCAA">npm</span><span style="color:#032F62;--shiki-dark:#CE9178"> init</span><span style="color:#032F62;--shiki-dark:#CE9178"> svelte@next</span><span style="color:#032F62;--shiki-dark:#CE9178"> my-sveltekit-app</span></span></code></pre>',N,V,Le='<pre class="code-copy-target hidden">npm init svelte@next my-sveltekit-app</pre>',Y,b,ae="Confirm that it can install <code>create-svelte@next</code> then continue to the SvelteKit config options. My preferred config is as follows:",gs,v,As,w,le="With <em>SvelteKit</em> configured, we can start setting up <em>StorybookJS</em>:",xs,U,He=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0"><code><span class="line"><span style="color:#005CC5;--shiki-dark:#DCDCAA">cd</span><span style="color:#032F62;--shiki-dark:#CE9178"> my-sveltekit-app</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#DCDCAA">npx</span><span style="color:#032F62;--shiki-dark:#CE9178"> sb</span><span style="color:#032F62;--shiki-dark:#CE9178"> init</span><span style="color:#005CC5;--shiki-dark:#CE9178"> --builder</span><span style="color:#032F62;--shiki-dark:#CE9178"> @storybook/builder-vite</span></span></code></pre>`,R,Z,Me=`<pre class="code-copy-target hidden">cd my-sveltekit-app
npx sb init --builder @storybook/builder-vite</pre>`,Q,F,ie="The automated <em>StorybookJS</em> configuration tool will run and set things up for a Svelte project. It’ll ask you if you want to set up the storybook linter plugin:",Ts,D,Ss,g,ne="Once the setup is done, there are a couple manual config steps we need to go through.",$s,A,oe="First we need to tell Storybook to use <em>CommonJS</em>. Create the file <code>.storybook/package.json</code> and add the following to it:",Ls,W,je=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0"><code><span class="line"><span style="color:#6A737D;--shiki-dark:#6A9955">// .storybook/package.json</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">&#123;</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#9CDCFE">  "type"</span><span style="color:#24292E;--shiki-dark:#E6E6E6">: </span><span style="color:#032F62;--shiki-dark:#CE9178">"commonjs"</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">&#125;</span></span></code></pre>`,X,G,qe=`<pre class="code-copy-target hidden">// .storybook/package.json
&#123;
  "type": "commonjs"
&#125;</pre>`,ss,x,pe="Then we need to remove Storybook’s preprocessing config and tell <em>ViteJS</em> how to find and preprocess our svelte files:",Hs,T,re="<li>Remove <code>&quot;preprocess&quot;: require( &quot;../svelte.config.js&quot; ).preprocess</code></li> <li>Import the svelte preprocessor: <code>const preprocess = require(&#39;svelte-preprocess&#39;);</code></li> <li>Import the <code>path</code> package to help with include paths: <code>const path = require(&#39;path&#39;);</code></li> <li>Set the <em>ViteJS</em> config to use the svelte preprocessor and include paths (see the <code>async viteFinal(config, {configType}) {...}</code> below)</li>",Ms,S,ce="The final <code>.storybook/main.js</code> file should look like this:",js,es,Pe=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0"><code><span class="line"><span style="color:#6A737D;--shiki-dark:#6A9955">// .storybook/main.js</span></span>
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
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">&#125;</span></span></code></pre>`,ts,as,Ke=`<pre class="code-copy-target hidden">// .storybook/main.js
const preprocess = require('svelte-preprocess');
const path = require('path');
module.exports = &#123;
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-svelte-csf"
  ],
  "framework": "@storybook/svelte",
  "core": &#123;
    "builder": "@storybook/builder-vite"
  &#125;,
  async viteFinal(config, &#123; configType &#125;) &#123;
    config.preprocess = preprocess(&#123;&#125;);
    config.resolve.alias = &#123;
	  // alias: path
	  $components: path.resolve('./src/components'),
	  $routes: path.resolve('./src/routes'),
	  $lib: path.resolve('./src/lib'),
	  // The $styles alias is used to setup tailwindcss 
	  $styles: path.resolve('./src/styles'),
	&#125;;
    return config;
  &#125;,
&#125;</pre>`,ls,$,ke="<p>Note: if you have different include path aliases, you’ll want to make sure that the ones in <code>.storybook/main.js</code> match your <code>svelte.config.js</code> aliases</p>",qs,L,de="Voila! You should be all set.",Ps,_,Ee='<a aria-hidden="true" tabindex="-1" href="#bonus-tailwindcss-support"><span class="icon icon-link"></span></a><a href="#bonus-tailwindcss-support" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Bonus: Tailwindcss support',Ks,H,he="If you <em>also</em> want to use <em>tailwindcss</em> with both <em>SvelteJS</em>/<em>SvelteKit</em> and <em>StorybookJS</em>, that config has a couple of gotchas as well. Here’s the steps to get it up and running.",Js,M,ye='First, install <em>tailwindcss</em> in your <em>SvelteKit</em> project (per <a href="https://tailwindcss.com/docs/guides/sveltekit" rel="nofollow">the official tailwind docs</a>):',Os,is,Je=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#DCDCAA">npm</span><span style="color:#032F62;--shiki-dark:#CE9178"> install</span><span style="color:#005CC5;--shiki-dark:#CE9178"> -D</span><span style="color:#032F62;--shiki-dark:#CE9178"> tailwindcss</span><span style="color:#032F62;--shiki-dark:#CE9178"> postcss</span><span style="color:#032F62;--shiki-dark:#CE9178"> autoprefixer</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#DCDCAA">npx</span><span style="color:#032F62;--shiki-dark:#CE9178"> tailwindcss</span><span style="color:#032F62;--shiki-dark:#CE9178"> init</span><span style="color:#032F62;--shiki-dark:#CE9178"> tailwind.config.cjs</span><span style="color:#005CC5;--shiki-dark:#CE9178"> -p</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#DCDCAA">mv</span><span style="color:#032F62;--shiki-dark:#CE9178"> postcss.config.js</span><span style="color:#032F62;--shiki-dark:#CE9178"> postcss.config.cjs</span></span></code></pre>`,ns,os,Oe=`<pre class="code-copy-target hidden">npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init tailwind.config.cjs -p
mv postcss.config.js postcss.config.cjs</pre>`,ps,j,ue="Then update the <code>tailwind.config.cjs</code> so it knows where to find your components:",Bs,rs,Be=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0"><code><span class="line"><span style="color:#6A737D;--shiki-dark:#6A9955">// tailwind.config.cjs</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A9955">/** </span><span style="color:#D73A49;--shiki-dark:#569CD6">@type</span><span style="color:#6F42C1;--shiki-dark:#4EC9B0"> &#123;import('tailwindcss').Config&#125;</span><span style="color:#6A737D;--shiki-dark:#6A9955"> */</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#4EC9B0">module</span><span style="color:#24292E;--shiki-dark:#E6E6E6">.</span><span style="color:#005CC5;--shiki-dark:#4EC9B0">exports</span><span style="color:#D73A49;--shiki-dark:#D4D4D4"> =</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> &#123;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">  content:</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> [</span><span style="color:#032F62;--shiki-dark:#CE9178">'./src/**/*.&#123;html,js,svelte,ts&#125;'</span><span style="color:#24292E;--shiki-dark:#E6E6E6">],</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">  theme:</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> &#123;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">    extend:</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> &#123;&#125;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">  &#125;,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">  plugins:</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> []</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">&#125;;</span></span></code></pre>`,cs,ks,Ie=`<pre class="code-copy-target hidden">// tailwind.config.cjs
/** @type &#123;import('tailwindcss').Config&#125; */
module.exports = &#123;
  content: ['./src/**/*.&#123;html,js,svelte,ts&#125;'],
  theme: &#123;
    extend: &#123;&#125;
  &#125;,
  plugins: []
&#125;;</pre>`,ds,q,Ce="Create a <code>src/styles/tailwind.css</code> file that sets up <em>tailwindcss</em> for your components:",Is,Es,ze=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#C586C0">@tailwind</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> base;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C586C0">@tailwind</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> components;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C586C0">@tailwind</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> utilities;</span></span></code></pre>`,hs,ys,Ne=`<pre class="code-copy-target hidden">@tailwind base;
@tailwind components;
@tailwind utilities;</pre>`,us,P,me="Finally, create a <code>src/routes/__layout.svelte</code> file that includes <em>tailwindcss</em> for your sveltekit project:",zs,Cs,Ve=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#808080">&#x3C;</span><span style="color:#22863A;--shiki-dark:#569CD6">script</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C586C0">  import</span><span style="color:#032F62;--shiki-dark:#CE9178"> "$styles/tailwind.css"</span><span style="color:#24292E;--shiki-dark:#D4D4D4">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">&#x3C;/</span><span style="color:#22863A;--shiki-dark:#569CD6">script</span><span style="color:#24292E;--shiki-dark:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#808080">&#x3C;</span><span style="color:#D73A49;--shiki-dark:#C586C0">slot</span><span style="color:#24292E;--shiki-dark:#808080"> /></span></span></code></pre>`,ms,fs,Ye=`<pre class="code-copy-target hidden">&lt;script&gt;
  import "$styles/tailwind.css";
&lt;/script&gt;

&lt;slot /&gt;</pre>`,vs,K,fe="At this point <em>tailwindcss</em> should be working in your <em>SvelteKit</em> project. It won’t be working in the <em>StorybookJS</em> view of your components though; storybook still needs to be configured to use <em>tailwindcss</em>. To do that add the following line to the top of <code>.storybook/preview.js</code>:",Ns,Ds,Ue=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0"><code><span class="line"><span style="color:#6A737D;--shiki-dark:#6A9955">// .storybook/preview.js</span></span>
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
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">&#125;</span></span></code></pre>`,_s,bs,Re=`<pre class="code-copy-target hidden">// .storybook/preview.js
import '$styles/tailwind.css';

// No need to touch the rest of it, which for me looks like this:
export const parameters = &#123;
  actions: &#123; argTypesRegex: "^on[A-Z].*" &#125;,
  controls: &#123;
    matchers: &#123;
      color: /(background|color)$/i,
      date: /Date$/,
    &#125;,
  &#125;,
&#125;</pre>`,ws,J,ve="<p>!Note: the <code>.storybook/main.js</code> file needs to have the alias <code>$styles: path.resolve(&#39;./src/styles&#39;)</code> set in vite’s <code>config.resolve.alias</code> object for the <code>import &#39;$styles/tailwind.css&#39;</code> to work.</p>",Vs,O,De="That’s it! You should have the following correctly set up now:",Ys,B,_e="<li><em>SvelteKit</em> using <em>TypeScript</em>, styleable with <em>tailwindcss</em>, all using <em>ViteJS</em></li> <li>A complementary <em>StorybookJS</em> also using <em>ViteJS</em> and <em>tailwindcss</em> for your <em>TypeScript</em> components.</li>",Us,I,be="Sadly as of now (May 2022) your stories still need to be authored in <em>JavaScript</em>.",Rs;return v=new xe({props:{$$slots:{default:[et]},$$scope:{ctx:f}}}),D=new xe({props:{$$slots:{default:[tt]},$$scope:{ctx:f}}}),{c(){l=p("p"),l.innerHTML=m,E=i(),k=p("blockquote"),k.innerHTML=d,o=i(),h=p("p"),h.innerHTML=te,Fs=i(),z=new y(!1),N=u(),V=new y(!1),Y=i(),b=p("p"),b.innerHTML=ae,gs=i(),Qs(v.$$.fragment),As=i(),w=p("p"),w.innerHTML=le,xs=i(),U=new y(!1),R=u(),Z=new y(!1),Q=i(),F=p("p"),F.innerHTML=ie,Ts=i(),Qs(D.$$.fragment),Ss=i(),g=p("p"),g.textContent=ne,$s=i(),A=p("p"),A.innerHTML=oe,Ls=i(),W=new y(!1),X=u(),G=new y(!1),ss=i(),x=p("p"),x.innerHTML=pe,Hs=i(),T=p("ol"),T.innerHTML=re,Ms=i(),S=p("p"),S.innerHTML=ce,js=i(),es=new y(!1),ts=u(),as=new y(!1),ls=i(),$=p("blockquote"),$.innerHTML=ke,qs=i(),L=p("p"),L.textContent=de,Ps=i(),_=p("h2"),_.innerHTML=Ee,Ks=i(),H=p("p"),H.innerHTML=he,Js=i(),M=p("p"),M.innerHTML=ye,Os=i(),is=new y(!1),ns=u(),os=new y(!1),ps=i(),j=p("p"),j.innerHTML=ue,Bs=i(),rs=new y(!1),cs=u(),ks=new y(!1),ds=i(),q=p("p"),q.innerHTML=Ce,Is=i(),Es=new y(!1),hs=u(),ys=new y(!1),us=i(),P=p("p"),P.innerHTML=me,zs=i(),Cs=new y(!1),ms=u(),fs=new y(!1),vs=i(),K=p("p"),K.innerHTML=fe,Ns=i(),Ds=new y(!1),_s=u(),bs=new y(!1),ws=i(),J=p("blockquote"),J.innerHTML=ve,Vs=i(),O=p("p"),O.textContent=De,Ys=i(),B=p("ul"),B.innerHTML=_e,Us=i(),I=p("p"),I.innerHTML=be,this.h()},l(s){l=r(s,"P",{["data-svelte-h"]:!0}),c(l)!=="svelte-1fqd0a1"&&(l.innerHTML=m),E=n(s),k=r(s,"BLOCKQUOTE",{["data-svelte-h"]:!0}),c(k)!=="svelte-1evrzvi"&&(k.innerHTML=d),o=n(s),h=r(s,"P",{["data-svelte-h"]:!0}),c(h)!=="svelte-1psveak"&&(h.innerHTML=te),Fs=n(s),z=C(s,!1),N=u(),V=C(s,!1),Y=n(s),b=r(s,"P",{["data-svelte-h"]:!0}),c(b)!=="svelte-1cxk78z"&&(b.innerHTML=ae),gs=n(s),Ws(v.$$.fragment,s),As=n(s),w=r(s,"P",{["data-svelte-h"]:!0}),c(w)!=="svelte-bmm9ef"&&(w.innerHTML=le),xs=n(s),U=C(s,!1),R=u(),Z=C(s,!1),Q=n(s),F=r(s,"P",{["data-svelte-h"]:!0}),c(F)!=="svelte-1rrjf4j"&&(F.innerHTML=ie),Ts=n(s),Ws(D.$$.fragment,s),Ss=n(s),g=r(s,"P",{["data-svelte-h"]:!0}),c(g)!=="svelte-eja9k9"&&(g.textContent=ne),$s=n(s),A=r(s,"P",{["data-svelte-h"]:!0}),c(A)!=="svelte-7yz4u"&&(A.innerHTML=oe),Ls=n(s),W=C(s,!1),X=u(),G=C(s,!1),ss=n(s),x=r(s,"P",{["data-svelte-h"]:!0}),c(x)!=="svelte-1v6c7v7"&&(x.innerHTML=pe),Hs=n(s),T=r(s,"OL",{["data-svelte-h"]:!0}),c(T)!=="svelte-14e1i9t"&&(T.innerHTML=re),Ms=n(s),S=r(s,"P",{["data-svelte-h"]:!0}),c(S)!=="svelte-w6nmvq"&&(S.innerHTML=ce),js=n(s),es=C(s,!1),ts=u(),as=C(s,!1),ls=n(s),$=r(s,"BLOCKQUOTE",{["data-svelte-h"]:!0}),c($)!=="svelte-8iupgo"&&($.innerHTML=ke),qs=n(s),L=r(s,"P",{["data-svelte-h"]:!0}),c(L)!=="svelte-1mbqj2"&&(L.textContent=de),Ps=n(s),_=r(s,"H2",{id:!0,["data-svelte-h"]:!0}),c(_)!=="svelte-1u7hna6"&&(_.innerHTML=Ee),Ks=n(s),H=r(s,"P",{["data-svelte-h"]:!0}),c(H)!=="svelte-1lnjsgv"&&(H.innerHTML=he),Js=n(s),M=r(s,"P",{["data-svelte-h"]:!0}),c(M)!=="svelte-rqx5iv"&&(M.innerHTML=ye),Os=n(s),is=C(s,!1),ns=u(),os=C(s,!1),ps=n(s),j=r(s,"P",{["data-svelte-h"]:!0}),c(j)!=="svelte-180102b"&&(j.innerHTML=ue),Bs=n(s),rs=C(s,!1),cs=u(),ks=C(s,!1),ds=n(s),q=r(s,"P",{["data-svelte-h"]:!0}),c(q)!=="svelte-4mbbig"&&(q.innerHTML=Ce),Is=n(s),Es=C(s,!1),hs=u(),ys=C(s,!1),us=n(s),P=r(s,"P",{["data-svelte-h"]:!0}),c(P)!=="svelte-1dmnoz6"&&(P.innerHTML=me),zs=n(s),Cs=C(s,!1),ms=u(),fs=C(s,!1),vs=n(s),K=r(s,"P",{["data-svelte-h"]:!0}),c(K)!=="svelte-1dhusc0"&&(K.innerHTML=fe),Ns=n(s),Ds=C(s,!1),_s=u(),bs=C(s,!1),ws=n(s),J=r(s,"BLOCKQUOTE",{["data-svelte-h"]:!0}),c(J)!=="svelte-n40q9u"&&(J.innerHTML=ve),Vs=n(s),O=r(s,"P",{["data-svelte-h"]:!0}),c(O)!=="svelte-fqsdpz"&&(O.textContent=De),Ys=n(s),B=r(s,"UL",{["data-svelte-h"]:!0}),c(B)!=="svelte-lw6etz"&&(B.innerHTML=_e),Us=n(s),I=r(s,"P",{["data-svelte-h"]:!0}),c(I)!=="svelte-60xzsf"&&(I.innerHTML=be),this.h()},h(){z.a=N,V.a=Y,U.a=R,Z.a=Q,W.a=X,G.a=ss,es.a=ts,as.a=ls,Qe(_,"id","bonus-tailwindcss-support"),is.a=ns,os.a=ps,rs.a=cs,ks.a=ds,Es.a=hs,ys.a=us,Cs.a=ms,fs.a=vs,Ds.a=_s,bs.a=ws},m(s,e){t(s,l,e),t(s,E,e),t(s,k,e),t(s,o,e),t(s,h,e),t(s,Fs,e),z.m($e,s,e),t(s,N,e),V.m(Le,s,e),t(s,Y,e),t(s,b,e),t(s,gs,e),Xs(v,s,e),t(s,As,e),t(s,w,e),t(s,xs,e),U.m(He,s,e),t(s,R,e),Z.m(Me,s,e),t(s,Q,e),t(s,F,e),t(s,Ts,e),Xs(D,s,e),t(s,Ss,e),t(s,g,e),t(s,$s,e),t(s,A,e),t(s,Ls,e),W.m(je,s,e),t(s,X,e),G.m(qe,s,e),t(s,ss,e),t(s,x,e),t(s,Hs,e),t(s,T,e),t(s,Ms,e),t(s,S,e),t(s,js,e),es.m(Pe,s,e),t(s,ts,e),as.m(Ke,s,e),t(s,ls,e),t(s,$,e),t(s,qs,e),t(s,L,e),t(s,Ps,e),t(s,_,e),t(s,Ks,e),t(s,H,e),t(s,Js,e),t(s,M,e),t(s,Os,e),is.m(Je,s,e),t(s,ns,e),os.m(Oe,s,e),t(s,ps,e),t(s,j,e),t(s,Bs,e),rs.m(Be,s,e),t(s,cs,e),ks.m(Ie,s,e),t(s,ds,e),t(s,q,e),t(s,Is,e),Es.m(ze,s,e),t(s,hs,e),ys.m(Ne,s,e),t(s,us,e),t(s,P,e),t(s,zs,e),Cs.m(Ve,s,e),t(s,ms,e),fs.m(Ye,s,e),t(s,vs,e),t(s,K,e),t(s,Ns,e),Ds.m(Ue,s,e),t(s,_s,e),bs.m(Re,s,e),t(s,ws,e),t(s,J,e),t(s,Vs,e),t(s,O,e),t(s,Ys,e),t(s,B,e),t(s,Us,e),t(s,I,e),Rs=!0},p(s,e){const we={};e&2&&(we.$$scope={dirty:e,ctx:s}),v.$set(we);const Fe={};e&2&&(Fe.$$scope={dirty:e,ctx:s}),D.$set(Fe)},i(s){Rs||(Gs(v.$$.fragment,s),Gs(D.$$.fragment,s),Rs=!0)},o(s){se(v.$$.fragment,s),se(D.$$.fragment,s),Rs=!1},d(s){s&&(a(l),a(E),a(k),a(o),a(h),a(Fs),a(N),z.d(),V.d(),a(Y),a(b),a(gs),a(As),a(w),a(xs),a(R),U.d(),Z.d(),a(Q),a(F),a(Ts),a(Ss),a(g),a($s),a(A),a(Ls),a(X),W.d(),G.d(),a(ss),a(x),a(Hs),a(T),a(Ms),a(S),a(js),a(ts),es.d(),as.d(),a(ls),a($),a(qs),a(L),a(Ps),a(_),a(Ks),a(H),a(Js),a(M),a(Os),a(ns),is.d(),os.d(),a(ps),a(j),a(Bs),a(cs),rs.d(),ks.d(),a(ds),a(q),a(Is),a(hs),Es.d(),ys.d(),a(us),a(P),a(zs),a(ms),Cs.d(),fs.d(),a(vs),a(K),a(Ns),a(_s),Ds.d(),bs.d(),a(ws),a(J),a(Vs),a(O),a(Ys),a(B),a(Us),a(I)),ee(v,s),ee(D,s)}}}function lt(f){let l,m;const E=[f[0],Te];let k={$$slots:{default:[at]},$$scope:{ctx:f}};for(let d=0;d<E.length;d+=1)k=Zs(k,E[d]);return l=new st({props:k}),{c(){Qs(l.$$.fragment)},l(d){Ws(l.$$.fragment,d)},m(d,o){Xs(l,d,o),m=!0},p(d,[o]){const h=o&1?Ge(E,[o&1&&Ae(d[0]),o&0&&Ae(Te)]):{};o&2&&(h.$$scope={dirty:o,ctx:d}),l.$set(h)},i(d){m||(Gs(l.$$.fragment,d),m=!0)},o(d){se(l.$$.fragment,d),m=!1},d(d){ee(l,d)}}}const Te={title:"Setting up a SvelteKit project with Storybook",description:"Setting up Storybook on a SvelteKit project doesn't work out of the box using the config tool. This guide walks you through a few extra steps needed to get SvelteKit and Storybook running.",slug:"sveltekit-storybook-setup",publish:!0,lastmod:"2022-04-19T00:00:00.000Z",date:"2022-04-19T00:00:00.000Z",aliases:["Set up SvelteKit with Storybook","Sveltekit Storybook setup"],tags:["status/seedling","topic/webdev","taxonomy/reference"],timeToRead:3,internalLinks:[],flashcards:[]};function it(f,l,m){return f.$$set=E=>{m(0,l=Zs(Zs({},l),ge(E)))},l=ge(l),[l]}class kt extends We{constructor(l){super(),Xe(this,l,it,lt,Ze,{})}}export{kt as default,Te as metadata};