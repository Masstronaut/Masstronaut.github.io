import{s as Ua,C as je,a5 as Ta,f as l,a as t,I as d,e as k,g as o,u as p,c as i,K as E,j as C,i as a,A as Ya,d as n}from"./scheduler.73a07135.js";import{S as Ja,i as Ka,b as Qa,d as Za,m as Xa,a as sn,t as en,e as an}from"./index.ba10b74b.js";import{g as nn,a as Ha}from"./spread.8a54911c.js";import{M as tn}from"./MDSveXNoteLayout.e2e037c4.js";function ln(ds){let r,m='I’m a big fan of automated dev tools and pipelines. I’ve found them invaluable on solo projects like this blog and <a href="https://penguinsight.com" rel="nofollow">Penguinsight</a>. It’s nice to know that my code is getting reviewed by another set of eyes, even if those eyes are my own which previously had the foresight to set up tools and automated testing.',f,y,c='Around a month ago I was reviewing my editor choices and ended up switching to <a href="https://zed.dev" rel="nofollow">zed</a> as my main daily-driver. Absent the plugin ecosystem of VS Code, I tried to get prettier &amp; eslint working and temporarily gave up. After about a month without it, I was reminded of how great they are while working on Kent C. Dodd’s <a href="https://epicweb.dev/" rel="nofollow">Epic Web Dev course</a> and that was the final straw. Time to get the tools working again!',h,u,qe="This ended up being a bigger project than I expected for a few reasons:",Vs,A,Se='<li>ESLint upgraded to a new <a href="https://eslint.org/docs/latest/extend/plugin-migration-flat-config" rel="nofollow">flat config</a> format which I adopted</li> <li><a href="https://github.com/typescript-eslint/typescript-eslint/issues/8211" rel="nofollow">typescript-eslint doesn’t support the latest eslint 9.0.0 yet</a>, which naturally I discovered after trying to use the latest eslint 😅</li> <li>There is a new <a href="https://sveltejs.github.io/eslint-plugin-svelte/migration/" rel="nofollow">eslint-plugin-svelte</a> which replaced <code>eslint-plugin-svelte3</code></li> <li>I needed to integrate <code>prettier-plugin-svelte</code> since I’m no longer getting it via the VS Code plugin</li>',Gs,v,ze='<a aria-hidden="true" tabindex="-1" href="#setting-up-prettier"><span class="icon icon-link"></span></a><a href="#setting-up-prettier" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Setting up prettier',Ws,L,Oe="Prettier handles file formatting. I prefer to have things formatted consistently. I also configure my editor to automatically format files on save so that I can focus on writing code rather than formatting it.",Us,g,$e='<a aria-hidden="true" tabindex="-1" href="#installing-prettier-packages"><span class="icon icon-link"></span></a><a href="#installing-prettier-packages" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Installing prettier packages',Ys,M,Ne="From the top, here’s the setup. First, install all the dependencies for formatting (I’ve specified version I know work together). Since these are dev tools not needed for prod, I can use <code>--save-dev</code>.",Js,ks,La=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#DCDCAA">npm</span><span style="color:#032F62;--shiki-dark:#CE9178"> i</span><span style="color:#005CC5;--shiki-dark:#CE9178"> --save-dev</span><span style="color:#032F62;--shiki-dark:#CE9178"> prettier@3.2.5</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#DCDCAA">npm</span><span style="color:#032F62;--shiki-dark:#CE9178"> i</span><span style="color:#005CC5;--shiki-dark:#CE9178"> --save-dev</span><span style="color:#032F62;--shiki-dark:#CE9178"> prettier-plugin-organize-imports@3.2.4</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#DCDCAA">npm</span><span style="color:#032F62;--shiki-dark:#CE9178"> i</span><span style="color:#005CC5;--shiki-dark:#CE9178"> --save-dev</span><span style="color:#032F62;--shiki-dark:#CE9178"> prettier-plugin-svelte@3.2.2</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#DCDCAA">npm</span><span style="color:#032F62;--shiki-dark:#CE9178"> i</span><span style="color:#005CC5;--shiki-dark:#CE9178"> --save-dev</span><span style="color:#032F62;--shiki-dark:#CE9178"> prettier-plugin-tailwindcss@0.5.13</span></span></code></pre>`,Es,hs,Ma=`<pre class="code-copy-target hidden">npm i --save-dev prettier@3.2.5
npm i --save-dev prettier-plugin-organize-imports@3.2.4
npm i --save-dev prettier-plugin-svelte@3.2.2
npm i --save-dev prettier-plugin-tailwindcss@0.5.13</pre>`,ys,I,Re="I use svelte and tailwind, so those plugins are pretty self-explanatory. I like <code>prettier-plugin-organize-imports</code> because most of the time import order is irrelevant, using the plugin to order them minimizes changes for cleaner PR diffs.",Ks,D,Be='<a aria-hidden="true" tabindex="-1" href="#configuring-prettier"><span class="icon icon-link"></span></a><a href="#configuring-prettier" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Configuring prettier',Qs,P,Ve="With the dependencies all installed, it’s time to get prettier setup! There are a few options for the prettier config file, but I prefer <code>prettier.config.js</code> for a couple reasons:",Zs,j,Ge="<li>I can import JSDoc typings to get intellisense, which helps me fill out my config options</li> <li>It’s more convenient if all the tooling config files are <code>*.config.js</code> for matching patterns</li>",Xs,q,We="Here’s my <code>prettier.config.js</code> file contents:",se,fs,Ia=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0" js twoslash><code><span class="line"><span style="color:#6A737D;--shiki-dark:#6A9955">/** </span><span style="color:#D73A49;--shiki-dark:#569CD6">@type</span><span style="color:#6F42C1;--shiki-dark:#4EC9B0"> &#123;import("prettier").Config&#125;</span><span style="color:#6A737D;--shiki-dark:#6A9955"> */</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#569CD6">const</span><span style="color:#005CC5;--shiki-dark:#9CDCFE"> config</span><span style="color:#D73A49;--shiki-dark:#D4D4D4"> =</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> &#123;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">	useTabs:</span><span style="color:#005CC5;--shiki-dark:#569CD6"> true</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">	singleQuote:</span><span style="color:#005CC5;--shiki-dark:#569CD6"> true</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">	trailingComma:</span><span style="color:#032F62;--shiki-dark:#CE9178"> 'none'</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">	bracketSameLine:</span><span style="color:#005CC5;--shiki-dark:#569CD6"> true</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">	plugins:</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> [</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#CE9178">		'prettier-plugin-svelte'</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#CE9178">		'prettier-plugin-tailwindcss'</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#CE9178">		'prettier-plugin-organize-imports'</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">	],</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A9955">	// This tells prettier to handle svelte files separately</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">	overrides:</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> [</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">		&#123;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">			files:</span><span style="color:#032F62;--shiki-dark:#CE9178"> '*.svelte'</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">			options:</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> &#123; </span><span style="color:#24292E;--shiki-dark:#9CDCFE">parser:</span><span style="color:#032F62;--shiki-dark:#CE9178"> 'svelte'</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> &#125;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">		&#125;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">	]</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">&#125;;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C586C0">export</span><span style="color:#D73A49;--shiki-dark:#C586C0"> default</span><span style="color:#24292E;--shiki-dark:#9CDCFE"> config</span><span style="color:#24292E;--shiki-dark:#E6E6E6">;</span></span>
<span class="line"></span></code></pre>`,us,Cs,Pa=`<pre class="code-copy-target hidden">/** @type &#123;import("prettier").Config&#125; */
const config = &#123;
	useTabs: true,
	singleQuote: true,
	trailingComma: 'none',
	bracketSameLine: true,
	plugins: [
		'prettier-plugin-svelte',
		'prettier-plugin-tailwindcss',
		'prettier-plugin-organize-imports'
	],
	// This tells prettier to handle svelte files separately
	overrides: [
		&#123;
			files: '*.svelte',
			options: &#123; parser: 'svelte' &#125;
		&#125;
	]
&#125;;
export default config;
</pre>`,ms,S,Ue="My reasoning for these preferences:",ee,z,Ye="<li>tabs are less characters than the equivalent spaces, and can be customized to render differently for people who prefer more spaces/indentation</li> <li>Single quotes add less visual noise than double quotes</li> <li>Less trailing commas means less syntax on screen, particularly syntax which does nothing</li> <li>Brackets on the same line means more code on screen and looks cleaner</li>",ae,O,Je="The <code>overrides</code> is necessary for svelte files to be parsed correctly. It overrides the default parser with the <code>svelte</code> parser for files with the <code>.svelte</code> extension.",ne,w,Ke='<a aria-hidden="true" tabindex="-1" href="#prettier-ignore-file"><span class="icon icon-link"></span></a><a href="#prettier-ignore-file" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Prettier ignore file',te,$,Qe="I have a number of files which I <strong>don’t</strong> want to format. Those are defined in a <code>.prettierignore</code> file. My list denotes files that are generated programmatically or which are not maintained by me, such as the <code>node_modules</code>. Here’s the list:",ie,vs,ja=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0"><code><span class="line"><span>node_modules/**</span></span>
<span class="line"><span>build/**</span></span>
<span class="line"><span>.svelte-kit/**</span></span>
<span class="line"><span>.env</span></span>
<span class="line"><span>.env.*</span></span>
<span class="line"><span>.vscode/**</span></span>
<span class="line"><span>static/**</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Ignore files for PNPM, NPM and YARN</span></span>
<span class="line"><span>pnpm-lock.yaml</span></span>
<span class="line"><span>package-lock.json</span></span>
<span class="line"><span>yarn.lock</span></span></code></pre>`,gs,Ds,qa=`<pre class="code-copy-target hidden">node_modules/**
build/**
.svelte-kit/**
.env
.env.*
.vscode/**
static/**

# Ignore files for PNPM, NPM and YARN
pnpm-lock.yaml
package-lock.json
yarn.lock</pre>`,ws,b,Ze='<a aria-hidden="true" tabindex="-1" href="#running-prettier-via-npm-scripts"><span class="icon icon-link"></span></a><a href="#running-prettier-via-npm-scripts" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Running prettier via npm scripts',le,N,Xe="At this point, prettier is configured and ready to run. I like to add npm scripts for a couple actions - linting and formatting - for convenience. In <code>package.json</code> add the <code>&quot;lint&quot;</code> and <code>&quot;format&quot;</code> commands:",oe,bs,Sa=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">&#123;</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#9CDCFE">	"scripts"</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> : &#123;</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#9CDCFE">		"lint"</span><span style="color:#24292E;--shiki-dark:#E6E6E6">: </span><span style="color:#032F62;--shiki-dark:#CE9178">"prettier --check '&#123;src,tests&#125;/**/*.&#123;js,ts,svelte&#125;'"</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#9CDCFE">		"format"</span><span style="color:#24292E;--shiki-dark:#E6E6E6">: </span><span style="color:#032F62;--shiki-dark:#CE9178">"prettier --write '&#123;src,tests&#125;/**/*.&#123;js,ts,svelte&#125;'"</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">	&#125;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">&#125;</span></span></code></pre>`,Fs,_s,za=`<pre class="code-copy-target hidden">&#123;
	"scripts" : &#123;
		"lint": "prettier --check '&#123;src,tests&#125;/**/*.&#123;js,ts,svelte&#125;'",
		"format": "prettier --write '&#123;src,tests&#125;/**/*.&#123;js,ts,svelte&#125;'",
	&#125;
&#125;</pre>`,xs,R,sa=`I specify the glob patterns in quotes so that the shell doesn’t expand them. This way it’s left to prettier to expand, which will work consistently across OSes and shell environments. The glob will match all files with a <code>js</code>, <code>ts</code>, or <code>svelte</code> extension that are in the <code>src</code>
or <code>tests</code> folders. These can be customized per project.`,pe,B,ea="<code>npm run lint</code> will run prettier to <em>check</em> all the matched files in the project and report if any have incorrect styling. I find this most helpful in CICD workflows where code won’t be changed; I want to fail the build early if it doesn’t match the style convention.",re,V,aa="<code>npm run format</code> uses prettier to <em>format</em> all the project files. This will change them on disk. I use it as a final check after making changes or if my editor isn’t configured to format on edit or save.",ce,G,na="Speaking of configuring an editor to format on save…",de,F,ta='<a aria-hidden="true" tabindex="-1" href="#configuring-zed-to-format-on-save-using-prettier"><span class="icon icon-link"></span></a><a href="#configuring-zed-to-format-on-save-using-prettier" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Configuring zed to format on save using prettier',ke,W,ia='If you install <a href="https://zed.dev/" rel="nofollow">zed</a> now, this will be configured by default. If you have had zed installed since before ~April 2024, you’ll want to make one small change to zed settings.',Ee,U,la="from zed, you can do <code>cmd+shift+p</code> to open the command palette and select <code>zed: open settings</code>, or you can directly open the settings file at <code>~/.config/zed/settings.json</code>:",he,Ts,Oa=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">&#123;</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#9CDCFE">  "formatter"</span><span style="color:#24292E;--shiki-dark:#E6E6E6">: </span><span style="color:#032F62;--shiki-dark:#CE9178">"auto"</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">&#125;</span></span></code></pre>`,Hs,As,$a=`<pre class="code-copy-target hidden">&#123;
  "formatter": "auto",
&#125;</pre>`,Ls,Y,oa="Now <code>&quot;auto&quot;</code> is the default setting in zed, so for new installs this isn’t relevant.",ye,_,pa='<a aria-hidden="true" tabindex="-1" href="#static-code-analysis-for-svelte--typescript-using-eslint"><span class="icon icon-link"></span></a><a href="#static-code-analysis-for-svelte--typescript-using-eslint" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Static code analysis for svelte &amp; typescript using eslint',fe,J,ra='I absolutely love static code analysis tooling. When I was a C++ developer working in games, I found the <a href="https://pvs-studio.com/en/blog/posts/cpp/0249/" rel="nofollow">PVS Studio blog post about unreal engine</a> impactful, and read many other articles from them. Their blog sold me on the value of static analysis, but I wasn’t the only one! Shortly after the unreal blog post was published, Epic Games hired them for a full audit of Unreal Engine’s source code which at the time had recently released its source code.',ue,K,ca="Now that I do web development, the tech stack and tools are different but my love of static code analysis remains strong as ever. I use typescript over javascript wherever possible, and eslint is the gold standard for static code analysis for both TS and JS.",Ce,x,da='<a aria-hidden="true" tabindex="-1" href="#installing-eslint-and-plugins"><span class="icon icon-link"></span></a><a href="#installing-eslint-and-plugins" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Installing eslint and plugins',me,Q,ka="As of this writing (April 2024), the latest version of eslint (9.0.0) isn’t supported by the <code>typescript-eslint</code> plugin, so I use the latest compatible version. As with prettier, the linting tools are only for development so I use <code>--save-dev</code> (or <code>-D</code> for short). Here’s the commands to install eslint and the plugins I use for typescript &amp; svelte projects:",ve,Ms,Na=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#DCDCAA">npm</span><span style="color:#032F62;--shiki-dark:#CE9178"> i</span><span style="color:#005CC5;--shiki-dark:#CE9178"> --save-dev</span><span style="color:#032F62;--shiki-dark:#CE9178"> eslint@8.56.0</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#DCDCAA">npm</span><span style="color:#032F62;--shiki-dark:#CE9178"> i</span><span style="color:#005CC5;--shiki-dark:#CE9178"> --save-dev</span><span style="color:#032F62;--shiki-dark:#CE9178"> eslint-config-prettier@8.10.0</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#DCDCAA">npm</span><span style="color:#032F62;--shiki-dark:#CE9178"> i</span><span style="color:#005CC5;--shiki-dark:#CE9178"> --save-dev</span><span style="color:#032F62;--shiki-dark:#CE9178"> eslint-plugin-prettier@5.1.3</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#DCDCAA">npm</span><span style="color:#032F62;--shiki-dark:#CE9178"> i</span><span style="color:#005CC5;--shiki-dark:#CE9178"> --save-dev</span><span style="color:#032F62;--shiki-dark:#CE9178"> eslint-plugin-svelte@2.37.0</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#DCDCAA">npm</span><span style="color:#032F62;--shiki-dark:#CE9178"> i</span><span style="color:#005CC5;--shiki-dark:#CE9178"> --save-dev</span><span style="color:#032F62;--shiki-dark:#CE9178"> typescript-eslint@7.6.0</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#DCDCAA">npm</span><span style="color:#032F62;--shiki-dark:#CE9178"> i</span><span style="color:#005CC5;--shiki-dark:#CE9178"> --save-dev</span><span style="color:#032F62;--shiki-dark:#CE9178"> globals</span></span></code></pre>`,Is,Ps,Ra=`<pre class="code-copy-target hidden">npm i --save-dev eslint@8.56.0
npm i --save-dev eslint-config-prettier@8.10.0
npm i --save-dev eslint-plugin-prettier@5.1.3
npm i --save-dev eslint-plugin-svelte@2.37.0
npm i --save-dev typescript-eslint@7.6.0
npm i --save-dev globals</pre>`,js,T,Ea='<a aria-hidden="true" tabindex="-1" href="#configuring-eslint"><span class="icon icon-link"></span></a><a href="#configuring-eslint" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Configuring eslint',ge,Z,ha="Switching to the flat config was a rough adjustment. Some nuances and tricks I found helpful to know about are:",De,X,ya='<li>The configuration objects cascade, and if multiple config objects match a file the later ones override the early ones</li> <li><code>typescript-eslint</code> exports a <code>config</code> function whose parameters are typed eslint config objects. Super helpful!</li> <li><a href="https://eslint.org/docs/latest/use/configure/configuration-files#globally-ignoring-files-with-ignores" rel="nofollow">Globally ignore files</a> by adding a config object with only the <code>ignores</code> key set. This replaces the <code>.eslintignore</code> file of old.</li> <li><code>globals</code> has the global type definitions for a bunch of environments. This is needed for <a href="https://typescript-eslint.io/getting-started/typed-linting" rel="nofollow">linting with type information</a></li>',we,ss,fa="Here’s how I’ve gotten all the plugins to work together, plus a couple overrides I’m using in my <code>eslint.config.js</code>:",be,qs,Ba=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0" js twoslash><code><span class="line"><span style="color:#D73A49;--shiki-dark:#C586C0">import</span><span style="color:#24292E;--shiki-dark:#9CDCFE"> js</span><span style="color:#D73A49;--shiki-dark:#C586C0"> from</span><span style="color:#032F62;--shiki-dark:#CE9178"> '@eslint/js'</span><span style="color:#24292E;--shiki-dark:#E6E6E6">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C586C0">import</span><span style="color:#24292E;--shiki-dark:#9CDCFE"> eslintConfigPrettier</span><span style="color:#D73A49;--shiki-dark:#C586C0"> from</span><span style="color:#032F62;--shiki-dark:#CE9178"> 'eslint-config-prettier'</span><span style="color:#24292E;--shiki-dark:#E6E6E6">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C586C0">import</span><span style="color:#24292E;--shiki-dark:#9CDCFE"> eslintPluginSvelte</span><span style="color:#D73A49;--shiki-dark:#C586C0"> from</span><span style="color:#032F62;--shiki-dark:#CE9178"> 'eslint-plugin-svelte'</span><span style="color:#24292E;--shiki-dark:#E6E6E6">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C586C0">import</span><span style="color:#24292E;--shiki-dark:#9CDCFE"> globals</span><span style="color:#D73A49;--shiki-dark:#C586C0"> from</span><span style="color:#032F62;--shiki-dark:#CE9178"> 'globals'</span><span style="color:#24292E;--shiki-dark:#E6E6E6">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C586C0">import</span><span style="color:#24292E;--shiki-dark:#9CDCFE"> svelteParser</span><span style="color:#D73A49;--shiki-dark:#C586C0"> from</span><span style="color:#032F62;--shiki-dark:#CE9178"> 'svelte-eslint-parser'</span><span style="color:#24292E;--shiki-dark:#E6E6E6">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C586C0">import</span><span style="color:#24292E;--shiki-dark:#9CDCFE"> tsEslint</span><span style="color:#D73A49;--shiki-dark:#C586C0"> from</span><span style="color:#032F62;--shiki-dark:#CE9178"> 'typescript-eslint'</span><span style="color:#24292E;--shiki-dark:#E6E6E6">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C586C0">export</span><span style="color:#D73A49;--shiki-dark:#C586C0"> default</span><span style="color:#24292E;--shiki-dark:#9CDCFE"> tsEslint</span><span style="color:#24292E;--shiki-dark:#E6E6E6">.</span><span style="color:#6F42C1;--shiki-dark:#DCDCAA">config</span><span style="color:#24292E;--shiki-dark:#E6E6E6">(</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">	js</span><span style="color:#24292E;--shiki-dark:#E6E6E6">.</span><span style="color:#24292E;--shiki-dark:#9CDCFE">configs</span><span style="color:#24292E;--shiki-dark:#E6E6E6">.</span><span style="color:#24292E;--shiki-dark:#9CDCFE">recommended</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#D4D4D4">	...</span><span style="color:#24292E;--shiki-dark:#9CDCFE">tsEslint</span><span style="color:#24292E;--shiki-dark:#E6E6E6">.</span><span style="color:#24292E;--shiki-dark:#9CDCFE">configs</span><span style="color:#24292E;--shiki-dark:#E6E6E6">.</span><span style="color:#24292E;--shiki-dark:#9CDCFE">recommendedTypeChecked</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">	&#123;</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A9955">		// configure the ts parser for ts files</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">		files:</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> [</span><span style="color:#032F62;--shiki-dark:#CE9178">'**/*.ts'</span><span style="color:#24292E;--shiki-dark:#E6E6E6">],</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">		languageOptions:</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> &#123;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">			parser:</span><span style="color:#24292E;--shiki-dark:#9CDCFE"> tsEslint</span><span style="color:#24292E;--shiki-dark:#E6E6E6">.</span><span style="color:#24292E;--shiki-dark:#9CDCFE">parser</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">			parserOptions:</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> &#123;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">				project:</span><span style="color:#005CC5;--shiki-dark:#569CD6"> true</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">				tsconfigRootDir:</span><span style="color:#D73A49;--shiki-dark:#C586C0"> import</span><span style="color:#24292E;--shiki-dark:#E6E6E6">.</span><span style="color:#005CC5;--shiki-dark:#9CDCFE">meta</span><span style="color:#24292E;--shiki-dark:#E6E6E6">.</span><span style="color:#24292E;--shiki-dark:#9CDCFE">dirname</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">			&#125;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">		&#125;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">	&#125;,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">	&#123;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">		files:</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> [</span><span style="color:#032F62;--shiki-dark:#CE9178">'*.js'</span><span style="color:#24292E;--shiki-dark:#E6E6E6">, </span><span style="color:#032F62;--shiki-dark:#CE9178">'*.config.ts'</span><span style="color:#24292E;--shiki-dark:#E6E6E6">],</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#D4D4D4">		...</span><span style="color:#24292E;--shiki-dark:#9CDCFE">tsEslint</span><span style="color:#24292E;--shiki-dark:#E6E6E6">.</span><span style="color:#24292E;--shiki-dark:#9CDCFE">configs</span><span style="color:#24292E;--shiki-dark:#E6E6E6">.</span><span style="color:#24292E;--shiki-dark:#9CDCFE">disableTypeChecked</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">	&#125;,</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#D4D4D4">	...</span><span style="color:#24292E;--shiki-dark:#9CDCFE">eslintPluginSvelte</span><span style="color:#24292E;--shiki-dark:#E6E6E6">.</span><span style="color:#24292E;--shiki-dark:#9CDCFE">configs</span><span style="color:#24292E;--shiki-dark:#E6E6E6">[</span><span style="color:#032F62;--shiki-dark:#CE9178">'flat/recommended'</span><span style="color:#24292E;--shiki-dark:#E6E6E6">],</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#D4D4D4">	...</span><span style="color:#24292E;--shiki-dark:#9CDCFE">eslintPluginSvelte</span><span style="color:#24292E;--shiki-dark:#E6E6E6">.</span><span style="color:#24292E;--shiki-dark:#9CDCFE">configs</span><span style="color:#24292E;--shiki-dark:#E6E6E6">[</span><span style="color:#032F62;--shiki-dark:#CE9178">'flat/prettier'</span><span style="color:#24292E;--shiki-dark:#E6E6E6">],</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">	&#123;</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A9955">		// dev tools and server logic run in node environments</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">		files:</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> [</span><span style="color:#032F62;--shiki-dark:#CE9178">'**/*.server.ts'</span><span style="color:#24292E;--shiki-dark:#E6E6E6">, </span><span style="color:#032F62;--shiki-dark:#CE9178">'*.config.ts'</span><span style="color:#24292E;--shiki-dark:#E6E6E6">, </span><span style="color:#032F62;--shiki-dark:#CE9178">'*.config.js'</span><span style="color:#24292E;--shiki-dark:#E6E6E6">],</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">		languageOptions:</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> &#123;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">			globals:</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> &#123;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#D4D4D4">				...</span><span style="color:#24292E;--shiki-dark:#9CDCFE">globals</span><span style="color:#24292E;--shiki-dark:#E6E6E6">.</span><span style="color:#24292E;--shiki-dark:#9CDCFE">node</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">			&#125;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">		&#125;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">	&#125;,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">	&#123;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">		files:</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> [</span><span style="color:#032F62;--shiki-dark:#CE9178">'**/*.svelte'</span><span style="color:#24292E;--shiki-dark:#E6E6E6">],</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">		languageOptions:</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> &#123;</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A9955">			// mounted svelte components run in the browser</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">			globals:</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> &#123;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#D4D4D4">				...</span><span style="color:#24292E;--shiki-dark:#9CDCFE">globals</span><span style="color:#24292E;--shiki-dark:#E6E6E6">.</span><span style="color:#24292E;--shiki-dark:#9CDCFE">browser</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">			&#125;,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">			ecmaVersion:</span><span style="color:#005CC5;--shiki-dark:#B5CEA8"> 2022</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">			sourceType:</span><span style="color:#032F62;--shiki-dark:#CE9178"> 'module'</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A9955">			// setup the svelte parser and give it the ts parser config</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">			parser:</span><span style="color:#24292E;--shiki-dark:#9CDCFE"> svelteParser</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">			parserOptions:</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> &#123;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">				parser:</span><span style="color:#24292E;--shiki-dark:#9CDCFE"> tsEslint</span><span style="color:#24292E;--shiki-dark:#E6E6E6">.</span><span style="color:#24292E;--shiki-dark:#9CDCFE">parser</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A9955">				// needed so ts parser won't skip svelte files</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">				extraFileExtensions:</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> [</span><span style="color:#032F62;--shiki-dark:#CE9178">'.svelte'</span><span style="color:#24292E;--shiki-dark:#E6E6E6">],</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A9955">				// svelte files need both &#96;tsconfig&#96;s</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">				project:</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> [</span><span style="color:#032F62;--shiki-dark:#CE9178">'tsconfig.json'</span><span style="color:#24292E;--shiki-dark:#E6E6E6">, </span><span style="color:#032F62;--shiki-dark:#CE9178">'.svelte-kit/tsconfig.json'</span><span style="color:#24292E;--shiki-dark:#E6E6E6">],</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">				tsconfigRootDir:</span><span style="color:#D73A49;--shiki-dark:#C586C0"> import</span><span style="color:#24292E;--shiki-dark:#E6E6E6">.</span><span style="color:#005CC5;--shiki-dark:#9CDCFE">meta</span><span style="color:#24292E;--shiki-dark:#E6E6E6">.</span><span style="color:#24292E;--shiki-dark:#9CDCFE">dirname</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">			&#125;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">		&#125;,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">		rules:</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> &#123;</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A9955">			// ignore the $$Props types in shadcn-svelte</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#CE9178">			'@typescript-eslint/no-unused-vars'</span><span style="color:#24292E;--shiki-dark:#9CDCFE">:</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> [</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#CE9178">				'error'</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">				&#123;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">					varsIgnorePattern:</span><span style="color:#032F62;--shiki-dark:#CE9178"> '^</span><span style="color:#005CC5;--shiki-dark:#D7BA7D">\\</span><span style="color:#032F62;--shiki-dark:#CE9178">$</span><span style="color:#005CC5;--shiki-dark:#D7BA7D">\\</span><span style="color:#032F62;--shiki-dark:#CE9178">$(Props|Events|Slots|Generic)'</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">				&#125;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">			]</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">		&#125;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">	&#125;,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">	&#123;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">		files:</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> [</span><span style="color:#032F62;--shiki-dark:#CE9178">'tests/**/*.ts'</span><span style="color:#24292E;--shiki-dark:#E6E6E6">],</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">		rules:</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> &#123;</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#CE9178">			'no-empty-pattern'</span><span style="color:#24292E;--shiki-dark:#9CDCFE">:</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> [</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#CE9178">				'error'</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">				&#123;</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A9955">					// I use &#96;&#123;&#125;&#96; when defining vitest fixtures</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">					allowObjectPatternsAsParameters:</span><span style="color:#005CC5;--shiki-dark:#569CD6"> true</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">				&#125;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">			]</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">		&#125;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">	&#125;,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">	&#123;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">		ignores:</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> [</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#CE9178">			'.svelte-kit'</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#CE9178">			'.vercel'</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#CE9178">			'.github'</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#CE9178">			'.storybook'</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#CE9178">			'.vscode'</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#CE9178">			'build'</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#CE9178">			'static'</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#CE9178">			'package'</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#CE9178">			'coverage'</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#CE9178">			'node_modules'</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">		]</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">	&#125;,</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A9955">	// this only disables rules; it goes last to win the cascade</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#9CDCFE">	eslintConfigPrettier</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">);</span></span>
<span class="line"></span></code></pre>`,Ss,zs,Va=`<pre class="code-copy-target hidden">import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginSvelte from 'eslint-plugin-svelte';
import globals from 'globals';
import svelteParser from 'svelte-eslint-parser';
import tsEslint from 'typescript-eslint';

export default tsEslint.config(
	js.configs.recommended,
	...tsEslint.configs.recommendedTypeChecked,
	&#123;
		// configure the ts parser for ts files
		files: ['**/*.ts'],
		languageOptions: &#123;
			parser: tsEslint.parser,
			parserOptions: &#123;
				project: true,
				tsconfigRootDir: import.meta.dirname
			&#125;
		&#125;
	&#125;,
	&#123;
		files: ['*.js', '*.config.ts'],
		...tsEslint.configs.disableTypeChecked
	&#125;,
	...eslintPluginSvelte.configs['flat/recommended'],
	...eslintPluginSvelte.configs['flat/prettier'],
	&#123;
		// dev tools and server logic run in node environments
		files: ['**/*.server.ts', '*.config.ts', '*.config.js'],
		languageOptions: &#123;
			globals: &#123;
				...globals.node
			&#125;
		&#125;
	&#125;,
	&#123;
		files: ['**/*.svelte'],
		languageOptions: &#123;
			// mounted svelte components run in the browser
			globals: &#123;
				...globals.browser
			&#125;,
			ecmaVersion: 2022,
			sourceType: 'module',
			// setup the svelte parser and give it the ts parser config
			parser: svelteParser,
			parserOptions: &#123;
				parser: tsEslint.parser,
				// needed so ts parser won't skip svelte files
				extraFileExtensions: ['.svelte'],
				// svelte files need both &#96;tsconfig&#96;s
				project: ['tsconfig.json', '.svelte-kit/tsconfig.json'],
				tsconfigRootDir: import.meta.dirname
			&#125;
		&#125;,
		rules: &#123;
			// ignore the $$Props types in shadcn-svelte
			'@typescript-eslint/no-unused-vars': [
				'error',
				&#123;
					varsIgnorePattern: '^\\$\\$(Props|Events|Slots|Generic)'
				&#125;
			]
		&#125;
	&#125;,
	&#123;
		files: ['tests/**/*.ts'],
		rules: &#123;
			'no-empty-pattern': [
				'error',
				&#123;
					// I use &#96;&#123;&#125;&#96; when defining vitest fixtures
					allowObjectPatternsAsParameters: true
				&#125;
			]
		&#125;
	&#125;,
	&#123;
		ignores: [
			'.svelte-kit',
			'.vercel',
			'.github',
			'.storybook',
			'.vscode',
			'build',
			'static',
			'package',
			'coverage',
			'node_modules'
		]
	&#125;,
	// this only disables rules; it goes last to win the cascade
	eslintConfigPrettier
);
</pre>`,Os,es,ua="It was a bit tedious figuring out which config presets are provided as a single config object (<code>eslintConfigPrettier</code> and <code>js.configs.recommended</code>) and which provided multiple config objects and needed to be spread into the <code>tsEslint.config()</code> call.",Fe,as,Ca='The <code>&#39;@typescript-eslint/no-unused-vars</code> override for <code>.svelte</code> files is because of a pattern used in <a href="https://www.shadcn-svelte.com/" rel="nofollow">shadcn-svelte</a> to type component props.',_e,ns,ma="The config for svelte files is the most tricky one. The parser needs to be set to the svelte parser. The svelte parser needs to be passed <code>parserOptions</code> which include a parser to use for the <code>&lt;script&gt;</code> blocks in svelte components. I use typescript in them, so it needs the <code>tsEslint.parser</code>, which in turn needs the <code>tsconfig</code> files and the root directory. I found it was necessary to provide both the root <code>tsconfig.json</code> as well as the one in <code>.svelte-kit/</code>.",xe,ts,va="Most of the config I think is pretty straightforward once you see it, but getting it all working was a tedious exercise. I’d suggest copy + pasting it and modifying to suit your needs.",Te,is,ga="One notable <em>omission</em> from the config is the prettier plugin. I previously used it, but opted to use prettier separately instead. Formatting and linting are separate concepts, and the general consensus among software engineers trends towards handling them separately. This decision results in faster eslint runs because it doesn’t need to parse every file a second time with prettier to check formatting. It also means less dependencies and avoids the need for another integration.",He,H,Da='<a aria-hidden="true" tabindex="-1" href="#adding-a-lint-command-to-packagejson"><span class="icon icon-link"></span></a><a href="#adding-a-lint-command-to-packagejson" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Adding a lint command to <code>package.json</code>',Ae,ls,wa="With everything configured, the last steps are to add a command to run the linter and fire it up!",Le,os,ba="Crack open the <code>package.json</code> file and add a couple commands to the <code>&quot;scripts&quot;</code> config:",Me,$s,Ga=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">&#123;</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#9CDCFE">	"scripts"</span><span style="color:#24292E;--shiki-dark:#E6E6E6">: &#123;</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#9CDCFE">		"lint"</span><span style="color:#24292E;--shiki-dark:#E6E6E6">: </span><span style="color:#032F62;--shiki-dark:#CE9178">"eslint . --report-unused-disable-directives"</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#9CDCFE">		"lint:fix"</span><span style="color:#24292E;--shiki-dark:#E6E6E6">: </span><span style="color:#032F62;--shiki-dark:#CE9178">"eslint . --fix"</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A9955">		// Add this one if you want to always run prettier before linting</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#9CDCFE">		"prelint"</span><span style="color:#24292E;--shiki-dark:#E6E6E6">: </span><span style="color:#032F62;--shiki-dark:#CE9178">"npm run format"</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A9955">		// other scripts...</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">	&#125;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">&#125;</span></span></code></pre>`,Ns,Rs,Wa=`<pre class="code-copy-target hidden">&#123;
	"scripts": &#123;
		"lint": "eslint . --report-unused-disable-directives",
		"lint:fix": "eslint . --fix",
		// Add this one if you want to always run prettier before linting
		"prelint": "npm run format",
		// other scripts...
	&#125;
&#125;</pre>`,Bs,ps,Fa="The <code>&quot;prelint&quot;</code> script, if specified, will always be run before the <code>&quot;lint&quot;</code> and <code>&quot;lint:fix&quot;</code> commands. It’s a super convenient way to ensure prettier runs before eslint. I also like that It reuses the existing <code>&quot;format&quot;</code> script rather than rewriting it in a second place with something like <code>&quot;prettier --write . &amp;&amp; eslint .&quot;</code>. DRY code and all that.",Ie,rs,_a="Personally, I don’t use the <code>&quot;prelint&quot;</code> script in my own projects. I often run the formatter once, but I run the linter multiple times as I work through my linter issues and want to recheck the code. The <code>&quot;prelint&quot;</code> script takes a little while to run, and I’d rather not wait for it each time.",Pe,cs,xa="Now that everything is set up, crack open your CLI of choice and run <code>npm run lint</code> to get a bunch of automated feedback on your code. Happy hacking!";return{c(){r=l("p"),r.innerHTML=m,f=t(),y=l("p"),y.innerHTML=c,h=t(),u=l("p"),u.textContent=qe,Vs=t(),A=l("ul"),A.innerHTML=Se,Gs=t(),v=l("h2"),v.innerHTML=ze,Ws=t(),L=l("p"),L.textContent=Oe,Us=t(),g=l("h3"),g.innerHTML=$e,Ys=t(),M=l("p"),M.innerHTML=Ne,Js=t(),ks=new d(!1),Es=k(),hs=new d(!1),ys=t(),I=l("p"),I.innerHTML=Re,Ks=t(),D=l("h3"),D.innerHTML=Be,Qs=t(),P=l("p"),P.innerHTML=Ve,Zs=t(),j=l("ol"),j.innerHTML=Ge,Xs=t(),q=l("p"),q.innerHTML=We,se=t(),fs=new d(!1),us=k(),Cs=new d(!1),ms=t(),S=l("p"),S.textContent=Ue,ee=t(),z=l("ul"),z.innerHTML=Ye,ae=t(),O=l("p"),O.innerHTML=Je,ne=t(),w=l("h3"),w.innerHTML=Ke,te=t(),$=l("p"),$.innerHTML=Qe,ie=t(),vs=new d(!1),gs=k(),Ds=new d(!1),ws=t(),b=l("h3"),b.innerHTML=Ze,le=t(),N=l("p"),N.innerHTML=Xe,oe=t(),bs=new d(!1),Fs=k(),_s=new d(!1),xs=t(),R=l("p"),R.innerHTML=sa,pe=t(),B=l("p"),B.innerHTML=ea,re=t(),V=l("p"),V.innerHTML=aa,ce=t(),G=l("p"),G.textContent=na,de=t(),F=l("h3"),F.innerHTML=ta,ke=t(),W=l("p"),W.innerHTML=ia,Ee=t(),U=l("p"),U.innerHTML=la,he=t(),Ts=new d(!1),Hs=k(),As=new d(!1),Ls=t(),Y=l("p"),Y.innerHTML=oa,ye=t(),_=l("h2"),_.innerHTML=pa,fe=t(),J=l("p"),J.innerHTML=ra,ue=t(),K=l("p"),K.textContent=ca,Ce=t(),x=l("h3"),x.innerHTML=da,me=t(),Q=l("p"),Q.innerHTML=ka,ve=t(),Ms=new d(!1),Is=k(),Ps=new d(!1),js=t(),T=l("h3"),T.innerHTML=Ea,ge=t(),Z=l("p"),Z.textContent=ha,De=t(),X=l("ol"),X.innerHTML=ya,we=t(),ss=l("p"),ss.innerHTML=fa,be=t(),qs=new d(!1),Ss=k(),zs=new d(!1),Os=t(),es=l("p"),es.innerHTML=ua,Fe=t(),as=l("p"),as.innerHTML=Ca,_e=t(),ns=l("p"),ns.innerHTML=ma,xe=t(),ts=l("p"),ts.textContent=va,Te=t(),is=l("p"),is.innerHTML=ga,He=t(),H=l("h3"),H.innerHTML=Da,Ae=t(),ls=l("p"),ls.textContent=wa,Le=t(),os=l("p"),os.innerHTML=ba,Me=t(),$s=new d(!1),Ns=k(),Rs=new d(!1),Bs=t(),ps=l("p"),ps.innerHTML=Fa,Ie=t(),rs=l("p"),rs.innerHTML=_a,Pe=t(),cs=l("p"),cs.innerHTML=xa,this.h()},l(s){r=o(s,"P",{["data-svelte-h"]:!0}),p(r)!=="svelte-1shthb7"&&(r.innerHTML=m),f=i(s),y=o(s,"P",{["data-svelte-h"]:!0}),p(y)!=="svelte-10sfsyg"&&(y.innerHTML=c),h=i(s),u=o(s,"P",{["data-svelte-h"]:!0}),p(u)!=="svelte-103q6e1"&&(u.textContent=qe),Vs=i(s),A=o(s,"UL",{["data-svelte-h"]:!0}),p(A)!=="svelte-oprkpr"&&(A.innerHTML=Se),Gs=i(s),v=o(s,"H2",{id:!0,["data-svelte-h"]:!0}),p(v)!=="svelte-4xfkqc"&&(v.innerHTML=ze),Ws=i(s),L=o(s,"P",{["data-svelte-h"]:!0}),p(L)!=="svelte-1wdaf5d"&&(L.textContent=Oe),Us=i(s),g=o(s,"H3",{id:!0,["data-svelte-h"]:!0}),p(g)!=="svelte-1dpq7w0"&&(g.innerHTML=$e),Ys=i(s),M=o(s,"P",{["data-svelte-h"]:!0}),p(M)!=="svelte-mjoeia"&&(M.innerHTML=Ne),Js=i(s),ks=E(s,!1),Es=k(),hs=E(s,!1),ys=i(s),I=o(s,"P",{["data-svelte-h"]:!0}),p(I)!=="svelte-19x8frn"&&(I.innerHTML=Re),Ks=i(s),D=o(s,"H3",{id:!0,["data-svelte-h"]:!0}),p(D)!=="svelte-1gwxumn"&&(D.innerHTML=Be),Qs=i(s),P=o(s,"P",{["data-svelte-h"]:!0}),p(P)!=="svelte-aovl55"&&(P.innerHTML=Ve),Zs=i(s),j=o(s,"OL",{["data-svelte-h"]:!0}),p(j)!=="svelte-volqe7"&&(j.innerHTML=Ge),Xs=i(s),q=o(s,"P",{["data-svelte-h"]:!0}),p(q)!=="svelte-2v77kd"&&(q.innerHTML=We),se=i(s),fs=E(s,!1),us=k(),Cs=E(s,!1),ms=i(s),S=o(s,"P",{["data-svelte-h"]:!0}),p(S)!=="svelte-w9a446"&&(S.textContent=Ue),ee=i(s),z=o(s,"UL",{["data-svelte-h"]:!0}),p(z)!=="svelte-1s995mp"&&(z.innerHTML=Ye),ae=i(s),O=o(s,"P",{["data-svelte-h"]:!0}),p(O)!=="svelte-1wrrzwo"&&(O.innerHTML=Je),ne=i(s),w=o(s,"H3",{id:!0,["data-svelte-h"]:!0}),p(w)!=="svelte-1gv59yo"&&(w.innerHTML=Ke),te=i(s),$=o(s,"P",{["data-svelte-h"]:!0}),p($)!=="svelte-110zqo9"&&($.innerHTML=Qe),ie=i(s),vs=E(s,!1),gs=k(),Ds=E(s,!1),ws=i(s),b=o(s,"H3",{id:!0,["data-svelte-h"]:!0}),p(b)!=="svelte-18knu64"&&(b.innerHTML=Ze),le=i(s),N=o(s,"P",{["data-svelte-h"]:!0}),p(N)!=="svelte-1yogda2"&&(N.innerHTML=Xe),oe=i(s),bs=E(s,!1),Fs=k(),_s=E(s,!1),xs=i(s),R=o(s,"P",{["data-svelte-h"]:!0}),p(R)!=="svelte-13eid77"&&(R.innerHTML=sa),pe=i(s),B=o(s,"P",{["data-svelte-h"]:!0}),p(B)!=="svelte-bj6mdb"&&(B.innerHTML=ea),re=i(s),V=o(s,"P",{["data-svelte-h"]:!0}),p(V)!=="svelte-1os89jn"&&(V.innerHTML=aa),ce=i(s),G=o(s,"P",{["data-svelte-h"]:!0}),p(G)!=="svelte-1p5zcp8"&&(G.textContent=na),de=i(s),F=o(s,"H3",{id:!0,["data-svelte-h"]:!0}),p(F)!=="svelte-n7ws53"&&(F.innerHTML=ta),ke=i(s),W=o(s,"P",{["data-svelte-h"]:!0}),p(W)!=="svelte-j7r4fg"&&(W.innerHTML=ia),Ee=i(s),U=o(s,"P",{["data-svelte-h"]:!0}),p(U)!=="svelte-12ek43x"&&(U.innerHTML=la),he=i(s),Ts=E(s,!1),Hs=k(),As=E(s,!1),Ls=i(s),Y=o(s,"P",{["data-svelte-h"]:!0}),p(Y)!=="svelte-qxxwsp"&&(Y.innerHTML=oa),ye=i(s),_=o(s,"H2",{id:!0,["data-svelte-h"]:!0}),p(_)!=="svelte-1yp82k2"&&(_.innerHTML=pa),fe=i(s),J=o(s,"P",{["data-svelte-h"]:!0}),p(J)!=="svelte-13jc2pd"&&(J.innerHTML=ra),ue=i(s),K=o(s,"P",{["data-svelte-h"]:!0}),p(K)!=="svelte-1dqgyon"&&(K.textContent=ca),Ce=i(s),x=o(s,"H3",{id:!0,["data-svelte-h"]:!0}),p(x)!=="svelte-1rxrh2j"&&(x.innerHTML=da),me=i(s),Q=o(s,"P",{["data-svelte-h"]:!0}),p(Q)!=="svelte-1jy7x7i"&&(Q.innerHTML=ka),ve=i(s),Ms=E(s,!1),Is=k(),Ps=E(s,!1),js=i(s),T=o(s,"H3",{id:!0,["data-svelte-h"]:!0}),p(T)!=="svelte-1uday53"&&(T.innerHTML=Ea),ge=i(s),Z=o(s,"P",{["data-svelte-h"]:!0}),p(Z)!=="svelte-1d3xafx"&&(Z.textContent=ha),De=i(s),X=o(s,"OL",{["data-svelte-h"]:!0}),p(X)!=="svelte-18dbg18"&&(X.innerHTML=ya),we=i(s),ss=o(s,"P",{["data-svelte-h"]:!0}),p(ss)!=="svelte-uraean"&&(ss.innerHTML=fa),be=i(s),qs=E(s,!1),Ss=k(),zs=E(s,!1),Os=i(s),es=o(s,"P",{["data-svelte-h"]:!0}),p(es)!=="svelte-ka0m9m"&&(es.innerHTML=ua),Fe=i(s),as=o(s,"P",{["data-svelte-h"]:!0}),p(as)!=="svelte-1d643sl"&&(as.innerHTML=Ca),_e=i(s),ns=o(s,"P",{["data-svelte-h"]:!0}),p(ns)!=="svelte-1q8phol"&&(ns.innerHTML=ma),xe=i(s),ts=o(s,"P",{["data-svelte-h"]:!0}),p(ts)!=="svelte-c26n3y"&&(ts.textContent=va),Te=i(s),is=o(s,"P",{["data-svelte-h"]:!0}),p(is)!=="svelte-1l2j2ko"&&(is.innerHTML=ga),He=i(s),H=o(s,"H3",{id:!0,["data-svelte-h"]:!0}),p(H)!=="svelte-fockc6"&&(H.innerHTML=Da),Ae=i(s),ls=o(s,"P",{["data-svelte-h"]:!0}),p(ls)!=="svelte-1hso8ru"&&(ls.textContent=wa),Le=i(s),os=o(s,"P",{["data-svelte-h"]:!0}),p(os)!=="svelte-tt1l48"&&(os.innerHTML=ba),Me=i(s),$s=E(s,!1),Ns=k(),Rs=E(s,!1),Bs=i(s),ps=o(s,"P",{["data-svelte-h"]:!0}),p(ps)!=="svelte-1s2v09t"&&(ps.innerHTML=Fa),Ie=i(s),rs=o(s,"P",{["data-svelte-h"]:!0}),p(rs)!=="svelte-1piesm5"&&(rs.innerHTML=_a),Pe=i(s),cs=o(s,"P",{["data-svelte-h"]:!0}),p(cs)!=="svelte-1bw5zzv"&&(cs.innerHTML=xa),this.h()},h(){C(v,"id","setting-up-prettier"),C(g,"id","installing-prettier-packages"),ks.a=Es,hs.a=ys,C(D,"id","configuring-prettier"),fs.a=us,Cs.a=ms,C(w,"id","prettier-ignore-file"),vs.a=gs,Ds.a=ws,C(b,"id","running-prettier-via-npm-scripts"),bs.a=Fs,_s.a=xs,C(F,"id","configuring-zed-to-format-on-save-using-prettier"),Ts.a=Hs,As.a=Ls,C(_,"id","static-code-analysis-for-svelte--typescript-using-eslint"),C(x,"id","installing-eslint-and-plugins"),Ms.a=Is,Ps.a=js,C(T,"id","configuring-eslint"),qs.a=Ss,zs.a=Os,C(H,"id","adding-a-lint-command-to-packagejson"),$s.a=Ns,Rs.a=Bs},m(s,e){a(s,r,e),a(s,f,e),a(s,y,e),a(s,h,e),a(s,u,e),a(s,Vs,e),a(s,A,e),a(s,Gs,e),a(s,v,e),a(s,Ws,e),a(s,L,e),a(s,Us,e),a(s,g,e),a(s,Ys,e),a(s,M,e),a(s,Js,e),ks.m(La,s,e),a(s,Es,e),hs.m(Ma,s,e),a(s,ys,e),a(s,I,e),a(s,Ks,e),a(s,D,e),a(s,Qs,e),a(s,P,e),a(s,Zs,e),a(s,j,e),a(s,Xs,e),a(s,q,e),a(s,se,e),fs.m(Ia,s,e),a(s,us,e),Cs.m(Pa,s,e),a(s,ms,e),a(s,S,e),a(s,ee,e),a(s,z,e),a(s,ae,e),a(s,O,e),a(s,ne,e),a(s,w,e),a(s,te,e),a(s,$,e),a(s,ie,e),vs.m(ja,s,e),a(s,gs,e),Ds.m(qa,s,e),a(s,ws,e),a(s,b,e),a(s,le,e),a(s,N,e),a(s,oe,e),bs.m(Sa,s,e),a(s,Fs,e),_s.m(za,s,e),a(s,xs,e),a(s,R,e),a(s,pe,e),a(s,B,e),a(s,re,e),a(s,V,e),a(s,ce,e),a(s,G,e),a(s,de,e),a(s,F,e),a(s,ke,e),a(s,W,e),a(s,Ee,e),a(s,U,e),a(s,he,e),Ts.m(Oa,s,e),a(s,Hs,e),As.m($a,s,e),a(s,Ls,e),a(s,Y,e),a(s,ye,e),a(s,_,e),a(s,fe,e),a(s,J,e),a(s,ue,e),a(s,K,e),a(s,Ce,e),a(s,x,e),a(s,me,e),a(s,Q,e),a(s,ve,e),Ms.m(Na,s,e),a(s,Is,e),Ps.m(Ra,s,e),a(s,js,e),a(s,T,e),a(s,ge,e),a(s,Z,e),a(s,De,e),a(s,X,e),a(s,we,e),a(s,ss,e),a(s,be,e),qs.m(Ba,s,e),a(s,Ss,e),zs.m(Va,s,e),a(s,Os,e),a(s,es,e),a(s,Fe,e),a(s,as,e),a(s,_e,e),a(s,ns,e),a(s,xe,e),a(s,ts,e),a(s,Te,e),a(s,is,e),a(s,He,e),a(s,H,e),a(s,Ae,e),a(s,ls,e),a(s,Le,e),a(s,os,e),a(s,Me,e),$s.m(Ga,s,e),a(s,Ns,e),Rs.m(Wa,s,e),a(s,Bs,e),a(s,ps,e),a(s,Ie,e),a(s,rs,e),a(s,Pe,e),a(s,cs,e)},p:Ya,d(s){s&&(n(r),n(f),n(y),n(h),n(u),n(Vs),n(A),n(Gs),n(v),n(Ws),n(L),n(Us),n(g),n(Ys),n(M),n(Js),n(Es),ks.d(),hs.d(),n(ys),n(I),n(Ks),n(D),n(Qs),n(P),n(Zs),n(j),n(Xs),n(q),n(se),n(us),fs.d(),Cs.d(),n(ms),n(S),n(ee),n(z),n(ae),n(O),n(ne),n(w),n(te),n($),n(ie),n(gs),vs.d(),Ds.d(),n(ws),n(b),n(le),n(N),n(oe),n(Fs),bs.d(),_s.d(),n(xs),n(R),n(pe),n(B),n(re),n(V),n(ce),n(G),n(de),n(F),n(ke),n(W),n(Ee),n(U),n(he),n(Hs),Ts.d(),As.d(),n(Ls),n(Y),n(ye),n(_),n(fe),n(J),n(ue),n(K),n(Ce),n(x),n(me),n(Q),n(ve),n(Is),Ms.d(),Ps.d(),n(js),n(T),n(ge),n(Z),n(De),n(X),n(we),n(ss),n(be),n(Ss),qs.d(),zs.d(),n(Os),n(es),n(Fe),n(as),n(_e),n(ns),n(xe),n(ts),n(Te),n(is),n(He),n(H),n(Ae),n(ls),n(Le),n(os),n(Me),n(Ns),$s.d(),Rs.d(),n(Bs),n(ps),n(Ie),n(rs),n(Pe),n(cs))}}}function on(ds){let r,m;const f=[ds[0],Aa];let y={$$slots:{default:[ln]},$$scope:{ctx:ds}};for(let c=0;c<f.length;c+=1)y=je(y,f[c]);return r=new tn({props:y}),{c(){Qa(r.$$.fragment)},l(c){Za(r.$$.fragment,c)},m(c,h){Xa(r,c,h),m=!0},p(c,[h]){const u=h&1?nn(f,[h&1&&Ha(c[0]),h&0&&Ha(Aa)]):{};h&2&&(u.$$scope={dirty:h,ctx:c}),r.$set(u)},i(c){m||(sn(r.$$.fragment,c),m=!0)},o(c){en(r.$$.fragment,c),m=!1},d(c){an(r,c)}}}const Aa={title:"Linting and formatting a svelte project",description:"Pulling together a bunch of language tools can be a bother, but I find automated formatting & code review tools are worth the hassle.",slug:"lint-format-svelte",publish:!0,lastmod:"2024-04-15T00:00:00.000Z",date:"2024-04-13T00:00:00.000Z",aliases:null,tags:["status/budding","topic/webdev"],timeToRead:9,internalLinks:[],flashcards:[]};function pn(ds,r,m){return ds.$$set=f=>{m(0,r=je(je({},r),Ta(f)))},r=Ta(r),[r]}class En extends Ja{constructor(r){super(),Ka(this,r,pn,on,Ua,{})}}export{En as default,Aa as metadata};
