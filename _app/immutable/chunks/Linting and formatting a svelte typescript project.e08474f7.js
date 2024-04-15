import{s as Va,C as Pe,a5 as Fa,f as l,a as t,I as d,e as k,g as o,u as p,c as i,K as E,j as C,i as a,A as Ga,d as n}from"./scheduler.73a07135.js";import{S as Wa,i as Ua,b as Ya,d as Ja,m as Ka,a as Qa,t as Za,e as Xa}from"./index.ba10b74b.js";import{g as sn,a as _a}from"./spread.8a54911c.js";import{M as en}from"./MDSveXNoteLayout.ed883042.js";function an(cs){let r,m='I’m a big fan of automated dev tools and pipelines. I’ve found them invaluable on solo projects like this blog and <a href="https://penguinsight.com" rel="nofollow">Penguinsight</a>. It’s nice to know that my code is getting reviewed by another set of eyes, even if those eyes are my own which previously had the foresight to set up tools and automated testing.',f,y,c='Around a month ago I was reviewing my editor choices and ended up switching to <a href="https://zed.dev" rel="nofollow">zed</a> as my main daily-driver. Absent the plugin ecosystem of VS Code, I tried to get prettier &amp; eslint working and temporarily gave up. After about a month without it, I was reminded of how great they are while working on Kent C. Dodd’s <a href="https://epicweb.dev/" rel="nofollow">Epic Web Dev course</a> and that was the final straw. Time to get the tools working again!',h,u,je="This ended up being a bigger project than I expected for a few reasons:",Bs,H,Ie='<li>ESLint upgraded to a new <a href="https://eslint.org/docs/latest/extend/plugin-migration-flat-config" rel="nofollow">flat config</a> format which I adopted</li> <li><a href="https://github.com/typescript-eslint/typescript-eslint/issues/8211" rel="nofollow">typescript-eslint doesn’t support the latest eslint 9.0.0 yet</a>, which naturally I discovered after trying to use the latest eslint 😅</li> <li>There is a new <a href="https://sveltejs.github.io/eslint-plugin-svelte/migration/" rel="nofollow">eslint-plugin-svelte</a> which replaced <code>eslint-plugin-svelte3</code></li> <li>I needed to integrate <code>prettier-plugin-svelte</code> since I’m no longer getting it via the VS Code plugin</li>',Vs,g,Se='<a aria-hidden="true" tabindex="-1" href="#setting-up-prettier"><span class="icon icon-link"></span></a><a href="#setting-up-prettier" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Setting up prettier',Gs,L,qe="Prettier handles file formatting. I prefer to have things formatted consistently. I also configure my editor to automatically format files on save so that I can focus on writing code rather than formatting it.",Ws,v,ze='<a aria-hidden="true" tabindex="-1" href="#installing-prettier-packages"><span class="icon icon-link"></span></a><a href="#installing-prettier-packages" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Installing prettier packages',Us,M,Oe="From the top, here’s the setup. First, install all the dependencies for formatting (I’ve specified version I know work together). Since these are dev tools not needed for prod, I can use <code>--save-dev</code>.",Ys,ds,Ta=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#DCDCAA">npm</span><span style="color:#032F62;--shiki-dark:#CE9178"> i</span><span style="color:#005CC5;--shiki-dark:#CE9178"> --save-dev</span><span style="color:#032F62;--shiki-dark:#CE9178"> prettier@3.2.5</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#DCDCAA">npm</span><span style="color:#032F62;--shiki-dark:#CE9178"> i</span><span style="color:#005CC5;--shiki-dark:#CE9178"> --save-dev</span><span style="color:#032F62;--shiki-dark:#CE9178"> prettier-plugin-organize-imports@3.2.4</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#DCDCAA">npm</span><span style="color:#032F62;--shiki-dark:#CE9178"> i</span><span style="color:#005CC5;--shiki-dark:#CE9178"> --save-dev</span><span style="color:#032F62;--shiki-dark:#CE9178"> prettier-plugin-svelte@3.2.2</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#DCDCAA">npm</span><span style="color:#032F62;--shiki-dark:#CE9178"> i</span><span style="color:#005CC5;--shiki-dark:#CE9178"> --save-dev</span><span style="color:#032F62;--shiki-dark:#CE9178"> prettier-plugin-tailwindcss@0.5.13</span></span></code></pre>`,ks,Es,Aa=`<pre class="code-copy-target hidden">npm i --save-dev prettier@3.2.5
npm i --save-dev prettier-plugin-organize-imports@3.2.4
npm i --save-dev prettier-plugin-svelte@3.2.2
npm i --save-dev prettier-plugin-tailwindcss@0.5.13</pre>`,hs,P,$e="I use svelte and tailwind, so those plugins are pretty self-explanatory. I like <code>prettier-plugin-organize-imports</code> because most of the time import order is irrelevant, using the plugin to order them minimizes changes for cleaner PR diffs.",Js,D,Ne='<a aria-hidden="true" tabindex="-1" href="#configuring-prettier"><span class="icon icon-link"></span></a><a href="#configuring-prettier" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Configuring prettier',Ks,j,Re="With the dependencies all installed, it’s time to get prettier setup! There are a few options for the prettier config file, but I prefer <code>prettier.config.js</code> for a couple reasons:",Qs,I,Be="<li>I can import JSDoc typings to get intellisense, which helps me fill out my config options</li> <li>It’s more convenient if all the tooling config files are <code>*.config.js</code> for matching patterns</li>",Zs,S,Ve="Here’s my <code>prettier.config.js</code> file contents:",Xs,ys,Ha=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0" js twoslash><code><span class="line"><span style="color:#6A737D;--shiki-dark:#6A9955">/** </span><span style="color:#D73A49;--shiki-dark:#569CD6">@type</span><span style="color:#6F42C1;--shiki-dark:#4EC9B0"> &#123;import("prettier").Config&#125;</span><span style="color:#6A737D;--shiki-dark:#6A9955"> */</span></span>
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
<span class="line"></span></code></pre>`,fs,us,La=`<pre class="code-copy-target hidden">/** @type &#123;import("prettier").Config&#125; */
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
</pre>`,Cs,q,Ge="My reasoning for these preferences:",se,z,We="<li>tabs are less characters than the equivalent spaces, and can be customized to render differently for people who prefer more spaces/indentation</li> <li>Single quotes add less visual noise than double quotes</li> <li>Less trailing commas means less syntax on screen, particularly syntax which does nothing</li> <li>Brackets on the same line means more code on screen and looks cleaner</li>",ee,O,Ue="The <code>overrides</code> is necessary for svelte files to be parsed correctly. It overrides the default parser with the <code>svelte</code> parser for files with the <code>.svelte</code> extension.",ae,b,Ye='<a aria-hidden="true" tabindex="-1" href="#prettier-ignore-file"><span class="icon icon-link"></span></a><a href="#prettier-ignore-file" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Prettier ignore file',ne,$,Je="I have a number of files which I <strong>don’t</strong> want to format. Those are defined in a <code>.prettierignore</code> file. My list denotes files that are generated programmatically or which are not maintained by me, such as the <code>node_modules</code>. Here’s the list:",te,ms,Ma=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0"><code><span class="line"><span>node_modules/**</span></span>
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
<span class="line"><span>yarn.lock</span></span></code></pre>`,gs,vs,Pa=`<pre class="code-copy-target hidden">node_modules/**
build/**
.svelte-kit/**
.env
.env.*
.vscode/**
static/**

# Ignore files for PNPM, NPM and YARN
pnpm-lock.yaml
package-lock.json
yarn.lock</pre>`,Ds,w,Ke='<a aria-hidden="true" tabindex="-1" href="#running-prettier-via-npm-scripts"><span class="icon icon-link"></span></a><a href="#running-prettier-via-npm-scripts" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Running prettier via npm scripts',ie,N,Qe="At this point, prettier is configured and ready to run. I like to add npm scripts for a couple actions - linting and formatting - for convenience. In <code>package.json</code> add the <code>&quot;lint&quot;</code> and <code>&quot;format&quot;</code> commands:",le,bs,ja=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">&#123;</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#9CDCFE">	"scripts"</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> : &#123;</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#9CDCFE">		"lint"</span><span style="color:#24292E;--shiki-dark:#E6E6E6">: </span><span style="color:#032F62;--shiki-dark:#CE9178">"prettier --check '&#123;src,tests&#125;/**/*.&#123;js,ts,svelte&#125;'"</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#9CDCFE">		"format"</span><span style="color:#24292E;--shiki-dark:#E6E6E6">: </span><span style="color:#032F62;--shiki-dark:#CE9178">"prettier --write '&#123;src,tests&#125;/**/*.&#123;js,ts,svelte&#125;'"</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">	&#125;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">&#125;</span></span></code></pre>`,ws,Fs,Ia=`<pre class="code-copy-target hidden">&#123;
	"scripts" : &#123;
		"lint": "prettier --check '&#123;src,tests&#125;/**/*.&#123;js,ts,svelte&#125;'",
		"format": "prettier --write '&#123;src,tests&#125;/**/*.&#123;js,ts,svelte&#125;'",
	&#125;
&#125;</pre>`,_s,R,Ze=`I specify the glob patterns in quotes so that the shell doesn’t expand them. This way it’s left to prettier to expand, which will work consistently across OSes and shell environments. The glob will match all files with a <code>js</code>, <code>ts</code>, or <code>svelte</code> extension that are in the <code>src</code>
or <code>tests</code> folders. These can be customized per project.`,oe,B,Xe="<code>npm run lint</code> will run prettier to <em>check</em> all the matched files in the project and report if any have incorrect styling. I find this most helpful in CICD workflows where code won’t be changed; I want to fail the build early if it doesn’t match the style convention.",pe,V,sa="<code>npm run format</code> uses prettier to <em>format</em> all the project files. This will change them on disk. I use it as a final check after making changes or if my editor isn’t configured to format on edit or save.",re,G,ea="Speaking of configuring an editor to format on save…",ce,F,aa='<a aria-hidden="true" tabindex="-1" href="#configuring-zed-to-format-on-save-using-prettier"><span class="icon icon-link"></span></a><a href="#configuring-zed-to-format-on-save-using-prettier" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Configuring zed to format on save using prettier',de,W,na='If you install <a href="https://zed.dev/" rel="nofollow">zed</a> now, this will be configured by default. If you have had zed installed since before ~April 2024, you’ll want to make one small change to zed settings.',ke,U,ta="from zed, you can do <code>cmd+shift+p</code> to open the command palette and select <code>zed: open settings</code>, or you can directly open the settings file at <code>~/.config/zed/settings.json</code>:",Ee,xs,Sa=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">&#123;</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#9CDCFE">  "formatter"</span><span style="color:#24292E;--shiki-dark:#E6E6E6">: </span><span style="color:#032F62;--shiki-dark:#CE9178">"auto"</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">&#125;</span></span></code></pre>`,Ts,As,qa=`<pre class="code-copy-target hidden">&#123;
  "formatter": "auto",
&#125;</pre>`,Hs,Y,ia="Now <code>&quot;auto&quot;</code> is the default setting in zed, so for new installs this isn’t relevant.",he,_,la='<a aria-hidden="true" tabindex="-1" href="#static-code-analysis-for-svelte--typescript-using-eslint"><span class="icon icon-link"></span></a><a href="#static-code-analysis-for-svelte--typescript-using-eslint" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Static code analysis for svelte &amp; typescript using eslint',ye,J,oa='I absolutely love static code analysis tooling. When I was a C++ developer working in games, I found the <a href="https://pvs-studio.com/en/blog/posts/cpp/0249/" rel="nofollow">PVS Studio blog post about unreal engine</a> impactful, and read many other articles from them. Their blog sold me on the value of static analysis, but I wasn’t the only one! Shortly after the unreal blog post was published, Epic Games hired them for a full audit of Unreal Engine’s source code which at the time had recently released its source code.',fe,K,pa="Now that I do web development, the tech stack and tools are different but my love of static code analysis remains strong as ever. I use typescript over javascript wherever possible, and eslint is the gold standard for static code analysis for both TS and JS.",ue,x,ra='<a aria-hidden="true" tabindex="-1" href="#installing-eslint-and-plugins"><span class="icon icon-link"></span></a><a href="#installing-eslint-and-plugins" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Installing eslint and plugins',Ce,Q,ca="As of this writing (April 2024), the latest version of eslint (9.0.0) isn’t supported by the <code>typescript-eslint</code> plugin, so I use the latest compatible version. As with prettier, the linting tools are only for development so I use <code>--save-dev</code> (or <code>-D</code> for short). Here’s the commands to install eslint and the plugins I use for typescript &amp; svelte projects:",me,Ls,za=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#DCDCAA">npm</span><span style="color:#032F62;--shiki-dark:#CE9178"> i</span><span style="color:#005CC5;--shiki-dark:#CE9178"> --save-dev</span><span style="color:#032F62;--shiki-dark:#CE9178"> eslint@8.56.0</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#DCDCAA">npm</span><span style="color:#032F62;--shiki-dark:#CE9178"> i</span><span style="color:#005CC5;--shiki-dark:#CE9178"> --save-dev</span><span style="color:#032F62;--shiki-dark:#CE9178"> eslint-config-prettier@8.10.0</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#DCDCAA">npm</span><span style="color:#032F62;--shiki-dark:#CE9178"> i</span><span style="color:#005CC5;--shiki-dark:#CE9178"> --save-dev</span><span style="color:#032F62;--shiki-dark:#CE9178"> eslint-plugin-prettier@5.1.3</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#DCDCAA">npm</span><span style="color:#032F62;--shiki-dark:#CE9178"> i</span><span style="color:#005CC5;--shiki-dark:#CE9178"> --save-dev</span><span style="color:#032F62;--shiki-dark:#CE9178"> eslint-plugin-svelte@2.37.0</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#DCDCAA">npm</span><span style="color:#032F62;--shiki-dark:#CE9178"> i</span><span style="color:#005CC5;--shiki-dark:#CE9178"> --save-dev</span><span style="color:#032F62;--shiki-dark:#CE9178"> typescript-eslint@7.6.0</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#DCDCAA">npm</span><span style="color:#032F62;--shiki-dark:#CE9178"> i</span><span style="color:#005CC5;--shiki-dark:#CE9178"> --save-dev</span><span style="color:#032F62;--shiki-dark:#CE9178"> globals</span></span></code></pre>`,Ms,Ps,Oa=`<pre class="code-copy-target hidden">npm i --save-dev eslint@8.56.0
npm i --save-dev eslint-config-prettier@8.10.0
npm i --save-dev eslint-plugin-prettier@5.1.3
npm i --save-dev eslint-plugin-svelte@2.37.0
npm i --save-dev typescript-eslint@7.6.0
npm i --save-dev globals</pre>`,js,T,da='<a aria-hidden="true" tabindex="-1" href="#configuring-eslint"><span class="icon icon-link"></span></a><a href="#configuring-eslint" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Configuring eslint',ge,Z,ka="Switching to the flat config was a rough adjustment. Some nuances and tricks I found helpful to know about are:",ve,X,Ea='<li>The configuration objects cascade, and if multiple config objects match a file the later ones override the early ones</li> <li><code>typescript-eslint</code> exports a <code>config</code> function whose parameters are typed eslint config objects. Super helpful!</li> <li><a href="https://eslint.org/docs/latest/use/configure/configuration-files#globally-ignoring-files-with-ignores" rel="nofollow">Globally ignore files</a> by adding a config object with only the <code>ignores</code> key set. This replaces the <code>.eslintignore</code> file of old.</li> <li><code>globals</code> has the global type definitions for a bunch of environments. This is needed for <a href="https://typescript-eslint.io/getting-started/typed-linting" rel="nofollow">linting with type information</a></li>',De,ss,ha="Here’s how I’ve gotten all the plugins to work together, plus a couple overrides I’m using in my <code>eslint.config.js</code>:",be,Is,$a=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0" js twoslash><code><span class="line"><span style="color:#D73A49;--shiki-dark:#C586C0">import</span><span style="color:#24292E;--shiki-dark:#9CDCFE"> js</span><span style="color:#D73A49;--shiki-dark:#C586C0"> from</span><span style="color:#032F62;--shiki-dark:#CE9178"> '@eslint/js'</span><span style="color:#24292E;--shiki-dark:#E6E6E6">;</span></span>
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
<span class="line"></span></code></pre>`,Ss,qs,Na=`<pre class="code-copy-target hidden">import js from '@eslint/js';
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
</pre>`,zs,es,ya="It was a bit tedious figuring out which config presets are provided as a single config object (<code>eslintConfigPrettier</code> and <code>js.configs.recommended</code>) and which provided multiple config objects and needed to be spread into the <code>tsEslint.config()</code> call.",we,as,fa='The <code>&#39;@typescript-eslint/no-unused-vars</code> override for <code>.svelte</code> files is because of a pattern used in <a href="https://www.shadcn-svelte.com/" rel="nofollow">shadcn-svelte</a> to type component props.',Fe,ns,ua="The config for svelte files is the most tricky one. The parser needs to be set to the svelte parser. The svelte parser needs to be passed <code>parserOptions</code> which include a parser to use for the <code>&lt;script&gt;</code> blocks in svelte components. I use typescript in them, so it needs the <code>tsEslint.parser</code>, which in turn needs the <code>tsconfig</code> files and the root directory. I found it was necessary to provide both the root <code>tsconfig.json</code> as well as the one in <code>.svelte-kit/</code>.",_e,ts,Ca="Most of the config I think is pretty straightforward once you see it, but getting it all working was a tedious exercise. I’d suggest copy + pasting it and modifying to suit your needs.",xe,is,ma="One notable <em>omission</em> from the config is the prettier plugin. I previously used it, but opted to use prettier separately instead. Formatting and linting are separate concepts, and the general consensus among software engineers trends towards handling them separately. This decision results in faster eslint runs because it doesn’t need to parse every file a second time with prettier to check formatting. It also means less dependencies and avoids the need for another integration.",Te,A,ga='<a aria-hidden="true" tabindex="-1" href="#adding-a-lint-command-to-packagejson"><span class="icon icon-link"></span></a><a href="#adding-a-lint-command-to-packagejson" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Adding a lint command to <code>package.json</code>',Ae,ls,va="With everything configured, the last steps are to add a command to run the linter and fire it up!",He,os,Da="Crack open the <code>package.json</code> file and add a couple commands to the <code>&quot;scripts&quot;</code> config:",Le,Os,Ra=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">&#123;</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#9CDCFE">	"scripts"</span><span style="color:#24292E;--shiki-dark:#E6E6E6">: &#123;</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#9CDCFE">		"lint"</span><span style="color:#24292E;--shiki-dark:#E6E6E6">: </span><span style="color:#032F62;--shiki-dark:#CE9178">"eslint . --report-unused-disable-directives"</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#9CDCFE">		"lint:fix"</span><span style="color:#24292E;--shiki-dark:#E6E6E6">: </span><span style="color:#032F62;--shiki-dark:#CE9178">"eslint . --fix"</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A9955">		// Add this one if you want to always run prettier before linting</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#9CDCFE">		"prelint"</span><span style="color:#24292E;--shiki-dark:#E6E6E6">: </span><span style="color:#032F62;--shiki-dark:#CE9178">"npm run format"</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A9955">		// other scripts...</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">	&#125;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">&#125;</span></span></code></pre>`,$s,Ns,Ba=`<pre class="code-copy-target hidden">&#123;
	"scripts": &#123;
		"lint": "eslint . --report-unused-disable-directives",
		"lint:fix": "eslint . --fix",
		// Add this one if you want to always run prettier before linting
		"prelint": "npm run format",
		// other scripts...
	&#125;
&#125;</pre>`,Rs,ps,ba="The <code>&quot;prelint&quot;</code> script, if provided, will always be run before the <code>&quot;lint&quot;</code> and <code>&quot;lint:fix&quot;</code> commands. It’s a super convenient way to ensure prettier runs before eslint. I also like that It reuses my existing <code>&quot;format&quot;</code> script rather than rewriting it in a second place. DRY code and all that.",Me,rs,wa="Now that everything is set up, crack open your CLI of choice and run <code>npm run lint</code> to get a bunch of automated feedback on your code. Happy hacking!";return{c(){r=l("p"),r.innerHTML=m,f=t(),y=l("p"),y.innerHTML=c,h=t(),u=l("p"),u.textContent=je,Bs=t(),H=l("ul"),H.innerHTML=Ie,Vs=t(),g=l("h2"),g.innerHTML=Se,Gs=t(),L=l("p"),L.textContent=qe,Ws=t(),v=l("h3"),v.innerHTML=ze,Us=t(),M=l("p"),M.innerHTML=Oe,Ys=t(),ds=new d(!1),ks=k(),Es=new d(!1),hs=t(),P=l("p"),P.innerHTML=$e,Js=t(),D=l("h3"),D.innerHTML=Ne,Ks=t(),j=l("p"),j.innerHTML=Re,Qs=t(),I=l("ol"),I.innerHTML=Be,Zs=t(),S=l("p"),S.innerHTML=Ve,Xs=t(),ys=new d(!1),fs=k(),us=new d(!1),Cs=t(),q=l("p"),q.textContent=Ge,se=t(),z=l("ul"),z.innerHTML=We,ee=t(),O=l("p"),O.innerHTML=Ue,ae=t(),b=l("h3"),b.innerHTML=Ye,ne=t(),$=l("p"),$.innerHTML=Je,te=t(),ms=new d(!1),gs=k(),vs=new d(!1),Ds=t(),w=l("h3"),w.innerHTML=Ke,ie=t(),N=l("p"),N.innerHTML=Qe,le=t(),bs=new d(!1),ws=k(),Fs=new d(!1),_s=t(),R=l("p"),R.innerHTML=Ze,oe=t(),B=l("p"),B.innerHTML=Xe,pe=t(),V=l("p"),V.innerHTML=sa,re=t(),G=l("p"),G.textContent=ea,ce=t(),F=l("h3"),F.innerHTML=aa,de=t(),W=l("p"),W.innerHTML=na,ke=t(),U=l("p"),U.innerHTML=ta,Ee=t(),xs=new d(!1),Ts=k(),As=new d(!1),Hs=t(),Y=l("p"),Y.innerHTML=ia,he=t(),_=l("h2"),_.innerHTML=la,ye=t(),J=l("p"),J.innerHTML=oa,fe=t(),K=l("p"),K.textContent=pa,ue=t(),x=l("h3"),x.innerHTML=ra,Ce=t(),Q=l("p"),Q.innerHTML=ca,me=t(),Ls=new d(!1),Ms=k(),Ps=new d(!1),js=t(),T=l("h3"),T.innerHTML=da,ge=t(),Z=l("p"),Z.textContent=ka,ve=t(),X=l("ol"),X.innerHTML=Ea,De=t(),ss=l("p"),ss.innerHTML=ha,be=t(),Is=new d(!1),Ss=k(),qs=new d(!1),zs=t(),es=l("p"),es.innerHTML=ya,we=t(),as=l("p"),as.innerHTML=fa,Fe=t(),ns=l("p"),ns.innerHTML=ua,_e=t(),ts=l("p"),ts.textContent=Ca,xe=t(),is=l("p"),is.innerHTML=ma,Te=t(),A=l("h3"),A.innerHTML=ga,Ae=t(),ls=l("p"),ls.textContent=va,He=t(),os=l("p"),os.innerHTML=Da,Le=t(),Os=new d(!1),$s=k(),Ns=new d(!1),Rs=t(),ps=l("p"),ps.innerHTML=ba,Me=t(),rs=l("p"),rs.innerHTML=wa,this.h()},l(s){r=o(s,"P",{["data-svelte-h"]:!0}),p(r)!=="svelte-1shthb7"&&(r.innerHTML=m),f=i(s),y=o(s,"P",{["data-svelte-h"]:!0}),p(y)!=="svelte-10sfsyg"&&(y.innerHTML=c),h=i(s),u=o(s,"P",{["data-svelte-h"]:!0}),p(u)!=="svelte-103q6e1"&&(u.textContent=je),Bs=i(s),H=o(s,"UL",{["data-svelte-h"]:!0}),p(H)!=="svelte-oprkpr"&&(H.innerHTML=Ie),Vs=i(s),g=o(s,"H2",{id:!0,["data-svelte-h"]:!0}),p(g)!=="svelte-4xfkqc"&&(g.innerHTML=Se),Gs=i(s),L=o(s,"P",{["data-svelte-h"]:!0}),p(L)!=="svelte-1wdaf5d"&&(L.textContent=qe),Ws=i(s),v=o(s,"H3",{id:!0,["data-svelte-h"]:!0}),p(v)!=="svelte-1dpq7w0"&&(v.innerHTML=ze),Us=i(s),M=o(s,"P",{["data-svelte-h"]:!0}),p(M)!=="svelte-mjoeia"&&(M.innerHTML=Oe),Ys=i(s),ds=E(s,!1),ks=k(),Es=E(s,!1),hs=i(s),P=o(s,"P",{["data-svelte-h"]:!0}),p(P)!=="svelte-19x8frn"&&(P.innerHTML=$e),Js=i(s),D=o(s,"H3",{id:!0,["data-svelte-h"]:!0}),p(D)!=="svelte-1gwxumn"&&(D.innerHTML=Ne),Ks=i(s),j=o(s,"P",{["data-svelte-h"]:!0}),p(j)!=="svelte-aovl55"&&(j.innerHTML=Re),Qs=i(s),I=o(s,"OL",{["data-svelte-h"]:!0}),p(I)!=="svelte-volqe7"&&(I.innerHTML=Be),Zs=i(s),S=o(s,"P",{["data-svelte-h"]:!0}),p(S)!=="svelte-2v77kd"&&(S.innerHTML=Ve),Xs=i(s),ys=E(s,!1),fs=k(),us=E(s,!1),Cs=i(s),q=o(s,"P",{["data-svelte-h"]:!0}),p(q)!=="svelte-w9a446"&&(q.textContent=Ge),se=i(s),z=o(s,"UL",{["data-svelte-h"]:!0}),p(z)!=="svelte-1s995mp"&&(z.innerHTML=We),ee=i(s),O=o(s,"P",{["data-svelte-h"]:!0}),p(O)!=="svelte-1wrrzwo"&&(O.innerHTML=Ue),ae=i(s),b=o(s,"H3",{id:!0,["data-svelte-h"]:!0}),p(b)!=="svelte-1gv59yo"&&(b.innerHTML=Ye),ne=i(s),$=o(s,"P",{["data-svelte-h"]:!0}),p($)!=="svelte-110zqo9"&&($.innerHTML=Je),te=i(s),ms=E(s,!1),gs=k(),vs=E(s,!1),Ds=i(s),w=o(s,"H3",{id:!0,["data-svelte-h"]:!0}),p(w)!=="svelte-18knu64"&&(w.innerHTML=Ke),ie=i(s),N=o(s,"P",{["data-svelte-h"]:!0}),p(N)!=="svelte-1yogda2"&&(N.innerHTML=Qe),le=i(s),bs=E(s,!1),ws=k(),Fs=E(s,!1),_s=i(s),R=o(s,"P",{["data-svelte-h"]:!0}),p(R)!=="svelte-13eid77"&&(R.innerHTML=Ze),oe=i(s),B=o(s,"P",{["data-svelte-h"]:!0}),p(B)!=="svelte-bj6mdb"&&(B.innerHTML=Xe),pe=i(s),V=o(s,"P",{["data-svelte-h"]:!0}),p(V)!=="svelte-1os89jn"&&(V.innerHTML=sa),re=i(s),G=o(s,"P",{["data-svelte-h"]:!0}),p(G)!=="svelte-1p5zcp8"&&(G.textContent=ea),ce=i(s),F=o(s,"H3",{id:!0,["data-svelte-h"]:!0}),p(F)!=="svelte-n7ws53"&&(F.innerHTML=aa),de=i(s),W=o(s,"P",{["data-svelte-h"]:!0}),p(W)!=="svelte-j7r4fg"&&(W.innerHTML=na),ke=i(s),U=o(s,"P",{["data-svelte-h"]:!0}),p(U)!=="svelte-12ek43x"&&(U.innerHTML=ta),Ee=i(s),xs=E(s,!1),Ts=k(),As=E(s,!1),Hs=i(s),Y=o(s,"P",{["data-svelte-h"]:!0}),p(Y)!=="svelte-qxxwsp"&&(Y.innerHTML=ia),he=i(s),_=o(s,"H2",{id:!0,["data-svelte-h"]:!0}),p(_)!=="svelte-1yp82k2"&&(_.innerHTML=la),ye=i(s),J=o(s,"P",{["data-svelte-h"]:!0}),p(J)!=="svelte-13jc2pd"&&(J.innerHTML=oa),fe=i(s),K=o(s,"P",{["data-svelte-h"]:!0}),p(K)!=="svelte-1dqgyon"&&(K.textContent=pa),ue=i(s),x=o(s,"H3",{id:!0,["data-svelte-h"]:!0}),p(x)!=="svelte-1rxrh2j"&&(x.innerHTML=ra),Ce=i(s),Q=o(s,"P",{["data-svelte-h"]:!0}),p(Q)!=="svelte-1jy7x7i"&&(Q.innerHTML=ca),me=i(s),Ls=E(s,!1),Ms=k(),Ps=E(s,!1),js=i(s),T=o(s,"H3",{id:!0,["data-svelte-h"]:!0}),p(T)!=="svelte-1uday53"&&(T.innerHTML=da),ge=i(s),Z=o(s,"P",{["data-svelte-h"]:!0}),p(Z)!=="svelte-1d3xafx"&&(Z.textContent=ka),ve=i(s),X=o(s,"OL",{["data-svelte-h"]:!0}),p(X)!=="svelte-18dbg18"&&(X.innerHTML=Ea),De=i(s),ss=o(s,"P",{["data-svelte-h"]:!0}),p(ss)!=="svelte-uraean"&&(ss.innerHTML=ha),be=i(s),Is=E(s,!1),Ss=k(),qs=E(s,!1),zs=i(s),es=o(s,"P",{["data-svelte-h"]:!0}),p(es)!=="svelte-ka0m9m"&&(es.innerHTML=ya),we=i(s),as=o(s,"P",{["data-svelte-h"]:!0}),p(as)!=="svelte-1d643sl"&&(as.innerHTML=fa),Fe=i(s),ns=o(s,"P",{["data-svelte-h"]:!0}),p(ns)!=="svelte-1q8phol"&&(ns.innerHTML=ua),_e=i(s),ts=o(s,"P",{["data-svelte-h"]:!0}),p(ts)!=="svelte-c26n3y"&&(ts.textContent=Ca),xe=i(s),is=o(s,"P",{["data-svelte-h"]:!0}),p(is)!=="svelte-1l2j2ko"&&(is.innerHTML=ma),Te=i(s),A=o(s,"H3",{id:!0,["data-svelte-h"]:!0}),p(A)!=="svelte-fockc6"&&(A.innerHTML=ga),Ae=i(s),ls=o(s,"P",{["data-svelte-h"]:!0}),p(ls)!=="svelte-1hso8ru"&&(ls.textContent=va),He=i(s),os=o(s,"P",{["data-svelte-h"]:!0}),p(os)!=="svelte-tt1l48"&&(os.innerHTML=Da),Le=i(s),Os=E(s,!1),$s=k(),Ns=E(s,!1),Rs=i(s),ps=o(s,"P",{["data-svelte-h"]:!0}),p(ps)!=="svelte-iif4k4"&&(ps.innerHTML=ba),Me=i(s),rs=o(s,"P",{["data-svelte-h"]:!0}),p(rs)!=="svelte-1bw5zzv"&&(rs.innerHTML=wa),this.h()},h(){C(g,"id","setting-up-prettier"),C(v,"id","installing-prettier-packages"),ds.a=ks,Es.a=hs,C(D,"id","configuring-prettier"),ys.a=fs,us.a=Cs,C(b,"id","prettier-ignore-file"),ms.a=gs,vs.a=Ds,C(w,"id","running-prettier-via-npm-scripts"),bs.a=ws,Fs.a=_s,C(F,"id","configuring-zed-to-format-on-save-using-prettier"),xs.a=Ts,As.a=Hs,C(_,"id","static-code-analysis-for-svelte--typescript-using-eslint"),C(x,"id","installing-eslint-and-plugins"),Ls.a=Ms,Ps.a=js,C(T,"id","configuring-eslint"),Is.a=Ss,qs.a=zs,C(A,"id","adding-a-lint-command-to-packagejson"),Os.a=$s,Ns.a=Rs},m(s,e){a(s,r,e),a(s,f,e),a(s,y,e),a(s,h,e),a(s,u,e),a(s,Bs,e),a(s,H,e),a(s,Vs,e),a(s,g,e),a(s,Gs,e),a(s,L,e),a(s,Ws,e),a(s,v,e),a(s,Us,e),a(s,M,e),a(s,Ys,e),ds.m(Ta,s,e),a(s,ks,e),Es.m(Aa,s,e),a(s,hs,e),a(s,P,e),a(s,Js,e),a(s,D,e),a(s,Ks,e),a(s,j,e),a(s,Qs,e),a(s,I,e),a(s,Zs,e),a(s,S,e),a(s,Xs,e),ys.m(Ha,s,e),a(s,fs,e),us.m(La,s,e),a(s,Cs,e),a(s,q,e),a(s,se,e),a(s,z,e),a(s,ee,e),a(s,O,e),a(s,ae,e),a(s,b,e),a(s,ne,e),a(s,$,e),a(s,te,e),ms.m(Ma,s,e),a(s,gs,e),vs.m(Pa,s,e),a(s,Ds,e),a(s,w,e),a(s,ie,e),a(s,N,e),a(s,le,e),bs.m(ja,s,e),a(s,ws,e),Fs.m(Ia,s,e),a(s,_s,e),a(s,R,e),a(s,oe,e),a(s,B,e),a(s,pe,e),a(s,V,e),a(s,re,e),a(s,G,e),a(s,ce,e),a(s,F,e),a(s,de,e),a(s,W,e),a(s,ke,e),a(s,U,e),a(s,Ee,e),xs.m(Sa,s,e),a(s,Ts,e),As.m(qa,s,e),a(s,Hs,e),a(s,Y,e),a(s,he,e),a(s,_,e),a(s,ye,e),a(s,J,e),a(s,fe,e),a(s,K,e),a(s,ue,e),a(s,x,e),a(s,Ce,e),a(s,Q,e),a(s,me,e),Ls.m(za,s,e),a(s,Ms,e),Ps.m(Oa,s,e),a(s,js,e),a(s,T,e),a(s,ge,e),a(s,Z,e),a(s,ve,e),a(s,X,e),a(s,De,e),a(s,ss,e),a(s,be,e),Is.m($a,s,e),a(s,Ss,e),qs.m(Na,s,e),a(s,zs,e),a(s,es,e),a(s,we,e),a(s,as,e),a(s,Fe,e),a(s,ns,e),a(s,_e,e),a(s,ts,e),a(s,xe,e),a(s,is,e),a(s,Te,e),a(s,A,e),a(s,Ae,e),a(s,ls,e),a(s,He,e),a(s,os,e),a(s,Le,e),Os.m(Ra,s,e),a(s,$s,e),Ns.m(Ba,s,e),a(s,Rs,e),a(s,ps,e),a(s,Me,e),a(s,rs,e)},p:Ga,d(s){s&&(n(r),n(f),n(y),n(h),n(u),n(Bs),n(H),n(Vs),n(g),n(Gs),n(L),n(Ws),n(v),n(Us),n(M),n(Ys),n(ks),ds.d(),Es.d(),n(hs),n(P),n(Js),n(D),n(Ks),n(j),n(Qs),n(I),n(Zs),n(S),n(Xs),n(fs),ys.d(),us.d(),n(Cs),n(q),n(se),n(z),n(ee),n(O),n(ae),n(b),n(ne),n($),n(te),n(gs),ms.d(),vs.d(),n(Ds),n(w),n(ie),n(N),n(le),n(ws),bs.d(),Fs.d(),n(_s),n(R),n(oe),n(B),n(pe),n(V),n(re),n(G),n(ce),n(F),n(de),n(W),n(ke),n(U),n(Ee),n(Ts),xs.d(),As.d(),n(Hs),n(Y),n(he),n(_),n(ye),n(J),n(fe),n(K),n(ue),n(x),n(Ce),n(Q),n(me),n(Ms),Ls.d(),Ps.d(),n(js),n(T),n(ge),n(Z),n(ve),n(X),n(De),n(ss),n(be),n(Ss),Is.d(),qs.d(),n(zs),n(es),n(we),n(as),n(Fe),n(ns),n(_e),n(ts),n(xe),n(is),n(Te),n(A),n(Ae),n(ls),n(He),n(os),n(Le),n($s),Os.d(),Ns.d(),n(Rs),n(ps),n(Me),n(rs))}}}function nn(cs){let r,m;const f=[cs[0],xa];let y={$$slots:{default:[an]},$$scope:{ctx:cs}};for(let c=0;c<f.length;c+=1)y=Pe(y,f[c]);return r=new en({props:y}),{c(){Ya(r.$$.fragment)},l(c){Ja(r.$$.fragment,c)},m(c,h){Ka(r,c,h),m=!0},p(c,[h]){const u=h&1?sn(f,[h&1&&_a(c[0]),h&0&&_a(xa)]):{};h&2&&(u.$$scope={dirty:h,ctx:c}),r.$set(u)},i(c){m||(Qa(r.$$.fragment,c),m=!0)},o(c){Za(r.$$.fragment,c),m=!1},d(c){Xa(r,c)}}}const xa={title:"Linting and formatting a svelte project",description:"Pulling together a bunch of language tools can be a bother, but I find automated formatting & code review tools are worth the hassle.",slug:"lint-format-svelte",publish:!0,lastmod:"2024-04-15T00:00:00.000Z",date:"2024-04-13T00:00:00.000Z",aliases:null,tags:["status/budding","topic/webdev"],timeToRead:9,internalLinks:[],flashcards:[]};function tn(cs,r,m){return cs.$$set=f=>{m(0,r=Pe(Pe({},r),Fa(f)))},r=Fa(r),[r]}class cn extends Wa{constructor(r){super(),Ua(this,r,tn,nn,Va,{})}}export{cn as default,xa as metadata};
