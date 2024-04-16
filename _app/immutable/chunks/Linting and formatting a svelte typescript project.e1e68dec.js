import{s as Xa,C as Oe,a5 as Ia,f as l,a as t,I as d,e as k,g as o,u as p,c as i,K as E,j as C,i as a,A as sn,d as n}from"./scheduler.73a07135.js";import{S as en,i as an,b as nn,d as tn,m as ln,a as on,t as pn,e as rn}from"./index.ba10b74b.js";import{g as cn,a as ja}from"./spread.8a54911c.js";import{M as dn}from"./MDSveXNoteLayout.78f7429c.js";function kn(Es){let r,m="Unfortunately, I was not born a Vulcan. As a result, I can’t do a mind-meld with my coworkers. This means that working with other devs comes at a cost; it takes time to share the details of how each piece of code works.",f,y,c="On solo projects, it’s freeing to build everything and understand how it all works. I get a huge boost in <em>personal</em> productivity, but it’s not without downsides. With no coworkers, there is nobody else to review my code and catch the bugs that inevitably crawl in when I’m inspired to code until 3am. I can’t be the only one with this problem, right?",h,u,$e="After waking up feeling like crap",Us,A,Ne='I’ve found them invaluable on solo projects like this blog and <a href="https://penguinsight.com" rel="nofollow">Penguinsight</a>. It’s nice to know that my code is getting reviewed by another set of eyes, even if those eyes are my own which previously had the foresight to set up tools and automated testing.',Ws,L,Re="This ended up being a bigger project than I expected for a few reasons:",Ys,M,Be='<li>ESLint upgraded to a new <a href="https://eslint.org/docs/latest/extend/plugin-migration-flat-config" rel="nofollow">flat config</a> format which I adopted</li> <li><a href="https://github.com/typescript-eslint/typescript-eslint/issues/8211" rel="nofollow">typescript-eslint doesn’t support the latest eslint 9.0.0 yet</a>, which naturally I discovered after trying to use the latest eslint 😅</li> <li>There is a new <a href="https://sveltejs.github.io/eslint-plugin-svelte/migration/" rel="nofollow">eslint-plugin-svelte</a> which replaced <code>eslint-plugin-svelte3</code></li> <li>I needed to integrate <code>prettier-plugin-svelte</code> since I’m no longer getting it via the VS Code plugin</li>',Js,v,Ve='<a aria-hidden="true" tabindex="-1" href="#setting-up-prettier"><span class="icon icon-link"></span></a><a href="#setting-up-prettier" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Setting up prettier',Qs,P,Ge="Prettier handles file formatting. I prefer to have things formatted consistently. I also configure my editor to automatically format files on save so that I can focus on writing code rather than formatting it.",Zs,g,Ue='<a aria-hidden="true" tabindex="-1" href="#installing-prettier-packages"><span class="icon icon-link"></span></a><a href="#installing-prettier-packages" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Installing prettier packages',Ks,I,We="From the top, here’s the setup. First, install all the dependencies for formatting (I’ve specified version I know work together). Since these are dev tools not needed for prod, I can use <code>--save-dev</code>.",Xs,hs,Sa=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#DCDCAA">npm</span><span style="color:#032F62;--shiki-dark:#CE9178"> i</span><span style="color:#005CC5;--shiki-dark:#CE9178"> --save-dev</span><span style="color:#032F62;--shiki-dark:#CE9178"> prettier@3.2.5</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#DCDCAA">npm</span><span style="color:#032F62;--shiki-dark:#CE9178"> i</span><span style="color:#005CC5;--shiki-dark:#CE9178"> --save-dev</span><span style="color:#032F62;--shiki-dark:#CE9178"> prettier-plugin-organize-imports@3.2.4</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#DCDCAA">npm</span><span style="color:#032F62;--shiki-dark:#CE9178"> i</span><span style="color:#005CC5;--shiki-dark:#CE9178"> --save-dev</span><span style="color:#032F62;--shiki-dark:#CE9178"> prettier-plugin-svelte@3.2.2</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#DCDCAA">npm</span><span style="color:#032F62;--shiki-dark:#CE9178"> i</span><span style="color:#005CC5;--shiki-dark:#CE9178"> --save-dev</span><span style="color:#032F62;--shiki-dark:#CE9178"> prettier-plugin-tailwindcss@0.5.13</span></span></code></pre>`,ys,fs,za=`<pre class="code-copy-target hidden">npm i --save-dev prettier@3.2.5
npm i --save-dev prettier-plugin-organize-imports@3.2.4
npm i --save-dev prettier-plugin-svelte@3.2.2
npm i --save-dev prettier-plugin-tailwindcss@0.5.13</pre>`,us,j,Ye="I use svelte and tailwind, so those plugins are pretty self-explanatory. I like <code>prettier-plugin-organize-imports</code> because most of the time import order is irrelevant, using the plugin to order them minimizes changes for cleaner PR diffs.",se,w,Je='<a aria-hidden="true" tabindex="-1" href="#configuring-prettier"><span class="icon icon-link"></span></a><a href="#configuring-prettier" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Configuring prettier',ee,q,Qe="With the dependencies all installed, it’s time to get prettier setup! There are a few options for the prettier config file, but I prefer <code>prettier.config.js</code> for a couple reasons:",ae,S,Ze="<li>I can import JSDoc typings to get intellisense, which helps me fill out my config options</li> <li>It’s more convenient if all the tooling config files are <code>*.config.js</code> for matching patterns</li>",ne,z,Ke="Here’s my <code>prettier.config.js</code> file contents:",te,Cs,Oa=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0" js twoslash><code><span class="line"><span style="color:#6A737D;--shiki-dark:#6A9955">/** </span><span style="color:#D73A49;--shiki-dark:#569CD6">@type</span><span style="color:#6F42C1;--shiki-dark:#4EC9B0"> &#123;import("prettier").Config&#125;</span><span style="color:#6A737D;--shiki-dark:#6A9955"> */</span></span>
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
<span class="line"></span></code></pre>`,ms,vs,$a=`<pre class="code-copy-target hidden">/** @type &#123;import("prettier").Config&#125; */
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
</pre>`,gs,O,Xe="My reasoning for these preferences:",ie,$,sa="<li>tabs are less characters than the equivalent spaces, and can be customized to render differently for people who prefer more spaces/indentation</li> <li>Single quotes add less visual noise than double quotes</li> <li>Less trailing commas means less syntax on screen, particularly syntax which does nothing</li> <li>Brackets on the same line means more code on screen and looks cleaner</li>",le,N,ea="The <code>overrides</code> is necessary for svelte files to be parsed correctly. It overrides the default parser with the <code>svelte</code> parser for files with the <code>.svelte</code> extension.",oe,D,aa='<a aria-hidden="true" tabindex="-1" href="#prettier-ignore-file"><span class="icon icon-link"></span></a><a href="#prettier-ignore-file" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Prettier ignore file',pe,R,na="I have a number of files which I <strong>don’t</strong> want to format. Those are defined in a <code>.prettierignore</code> file. My list denotes files that are generated programmatically or which are not maintained by me, such as the <code>node_modules</code>. Here’s the list:",re,ws,Na=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0"><code><span class="line"><span>node_modules/**</span></span>
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
<span class="line"><span>yarn.lock</span></span></code></pre>`,Ds,bs,Ra=`<pre class="code-copy-target hidden">node_modules/**
build/**
.svelte-kit/**
.env
.env.*
.vscode/**
static/**

# Ignore files for PNPM, NPM and YARN
pnpm-lock.yaml
package-lock.json
yarn.lock</pre>`,Fs,b,ta='<a aria-hidden="true" tabindex="-1" href="#running-prettier-via-npm-scripts"><span class="icon icon-link"></span></a><a href="#running-prettier-via-npm-scripts" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Running prettier via npm scripts',ce,B,ia="At this point, prettier is configured and ready to run. I like to add npm scripts for a couple actions - linting and formatting - for convenience. In <code>package.json</code> add the <code>&quot;lint&quot;</code> and <code>&quot;format&quot;</code> commands:",de,_s,Ba=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">&#123;</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#9CDCFE">	"scripts"</span><span style="color:#24292E;--shiki-dark:#E6E6E6"> : &#123;</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#9CDCFE">		"lint"</span><span style="color:#24292E;--shiki-dark:#E6E6E6">: </span><span style="color:#032F62;--shiki-dark:#CE9178">"prettier --check '&#123;src,tests&#125;/**/*.&#123;js,ts,svelte&#125;'"</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#9CDCFE">		"format"</span><span style="color:#24292E;--shiki-dark:#E6E6E6">: </span><span style="color:#032F62;--shiki-dark:#CE9178">"prettier --write '&#123;src,tests&#125;/**/*.&#123;js,ts,svelte&#125;'"</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">	&#125;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">&#125;</span></span></code></pre>`,xs,Ts,Va=`<pre class="code-copy-target hidden">&#123;
	"scripts" : &#123;
		"lint": "prettier --check '&#123;src,tests&#125;/**/*.&#123;js,ts,svelte&#125;'",
		"format": "prettier --write '&#123;src,tests&#125;/**/*.&#123;js,ts,svelte&#125;'",
	&#125;
&#125;</pre>`,Hs,V,la=`I specify the glob patterns in quotes so that the shell doesn’t expand them. This way it’s left to prettier to expand, which will work consistently across OSes and shell environments. The glob will match all files with a <code>js</code>, <code>ts</code>, or <code>svelte</code> extension that are in the <code>src</code>
or <code>tests</code> folders. These can be customized per project.`,ke,G,oa="<code>npm run lint</code> will run prettier to <em>check</em> all the matched files in the project and report if any have incorrect styling. I find this most helpful in CICD workflows where code won’t be changed; I want to fail the build early if it doesn’t match the style convention.",Ee,U,pa="<code>npm run format</code> uses prettier to <em>format</em> all the project files. This will change them on disk. I use it as a final check after making changes or if my editor isn’t configured to format on edit or save.",he,W,ra="Speaking of configuring an editor to format on save…",ye,F,ca='<a aria-hidden="true" tabindex="-1" href="#configuring-zed-to-format-on-save-using-prettier"><span class="icon icon-link"></span></a><a href="#configuring-zed-to-format-on-save-using-prettier" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Configuring zed to format on save using prettier',fe,Y,da='If you install <a href="https://zed.dev/" rel="nofollow">zed</a> now, this will be configured by default. If you have had zed installed since before ~April 2024, you’ll want to make one small change to zed settings.',ue,J,ka="from zed, you can do <code>cmd+shift+p</code> to open the command palette and select <code>zed: open settings</code>, or you can directly open the settings file at <code>~/.config/zed/settings.json</code>:",Ce,As,Ga=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">&#123;</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#9CDCFE">  "formatter"</span><span style="color:#24292E;--shiki-dark:#E6E6E6">: </span><span style="color:#032F62;--shiki-dark:#CE9178">"auto"</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">&#125;</span></span></code></pre>`,Ls,Ms,Ua=`<pre class="code-copy-target hidden">&#123;
  "formatter": "auto",
&#125;</pre>`,Ps,Q,Ea="Now <code>&quot;auto&quot;</code> is the default setting in zed, so for new installs this isn’t relevant.",me,_,ha='<a aria-hidden="true" tabindex="-1" href="#static-code-analysis-for-svelte--typescript-using-eslint"><span class="icon icon-link"></span></a><a href="#static-code-analysis-for-svelte--typescript-using-eslint" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Static code analysis for svelte &amp; typescript using eslint',ve,Z,ya='I absolutely love static code analysis tooling. When I was a C++ developer working in games, I found the <a href="https://pvs-studio.com/en/blog/posts/cpp/0249/" rel="nofollow">PVS Studio blog post about unreal engine</a> impactful, and read many other articles from them. Their blog sold me on the value of static analysis, but I wasn’t the only one! Shortly after the unreal blog post was published, Epic Games hired them for a full audit of Unreal Engine’s source code which at the time had recently released its source code.',ge,K,fa="Now that I do web development, the tech stack and tools are different but my love of static code analysis remains strong as ever. I use typescript over javascript wherever possible, and eslint is the gold standard for static code analysis for both TS and JS.",we,x,ua='<a aria-hidden="true" tabindex="-1" href="#installing-eslint-and-plugins"><span class="icon icon-link"></span></a><a href="#installing-eslint-and-plugins" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Installing eslint and plugins',De,X,Ca="As of this writing (April 2024), the latest version of eslint (9.0.0) isn’t supported by the <code>typescript-eslint</code> plugin, so I use the latest compatible version. As with prettier, the linting tools are only for development so I use <code>--save-dev</code> (or <code>-D</code> for short). Here’s the commands to install eslint and the plugins I use for typescript &amp; svelte projects:",be,Is,Wa=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#DCDCAA">npm</span><span style="color:#032F62;--shiki-dark:#CE9178"> i</span><span style="color:#005CC5;--shiki-dark:#CE9178"> --save-dev</span><span style="color:#032F62;--shiki-dark:#CE9178"> eslint@8.56.0</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#DCDCAA">npm</span><span style="color:#032F62;--shiki-dark:#CE9178"> i</span><span style="color:#005CC5;--shiki-dark:#CE9178"> --save-dev</span><span style="color:#032F62;--shiki-dark:#CE9178"> eslint-config-prettier@8.10.0</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#DCDCAA">npm</span><span style="color:#032F62;--shiki-dark:#CE9178"> i</span><span style="color:#005CC5;--shiki-dark:#CE9178"> --save-dev</span><span style="color:#032F62;--shiki-dark:#CE9178"> eslint-plugin-prettier@5.1.3</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#DCDCAA">npm</span><span style="color:#032F62;--shiki-dark:#CE9178"> i</span><span style="color:#005CC5;--shiki-dark:#CE9178"> --save-dev</span><span style="color:#032F62;--shiki-dark:#CE9178"> eslint-plugin-svelte@2.37.0</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#DCDCAA">npm</span><span style="color:#032F62;--shiki-dark:#CE9178"> i</span><span style="color:#005CC5;--shiki-dark:#CE9178"> --save-dev</span><span style="color:#032F62;--shiki-dark:#CE9178"> typescript-eslint@7.6.0</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#DCDCAA">npm</span><span style="color:#032F62;--shiki-dark:#CE9178"> i</span><span style="color:#005CC5;--shiki-dark:#CE9178"> --save-dev</span><span style="color:#032F62;--shiki-dark:#CE9178"> globals</span></span></code></pre>`,js,qs,Ya=`<pre class="code-copy-target hidden">npm i --save-dev eslint@8.56.0
npm i --save-dev eslint-config-prettier@8.10.0
npm i --save-dev eslint-plugin-prettier@5.1.3
npm i --save-dev eslint-plugin-svelte@2.37.0
npm i --save-dev typescript-eslint@7.6.0
npm i --save-dev globals</pre>`,Ss,T,ma='<a aria-hidden="true" tabindex="-1" href="#configuring-eslint"><span class="icon icon-link"></span></a><a href="#configuring-eslint" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Configuring eslint',Fe,ss,va="Switching to the flat config was a rough adjustment. Some nuances and tricks I found helpful to know about are:",_e,es,ga='<li>The configuration objects cascade, and if multiple config objects match a file the later ones override the early ones</li> <li><code>typescript-eslint</code> exports a <code>config</code> function whose parameters are typed eslint config objects. Super helpful!</li> <li><a href="https://eslint.org/docs/latest/use/configure/configuration-files#globally-ignoring-files-with-ignores" rel="nofollow">Globally ignore files</a> by adding a config object with only the <code>ignores</code> key set. This replaces the <code>.eslintignore</code> file of old.</li> <li><code>globals</code> has the global type definitions for a bunch of environments. This is needed for <a href="https://typescript-eslint.io/getting-started/typed-linting" rel="nofollow">linting with type information</a></li>',xe,as,wa="Here’s how I’ve gotten all the plugins to work together, plus a couple overrides I’m using in my <code>eslint.config.js</code>:",Te,zs,Ja=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0" js twoslash><code><span class="line"><span style="color:#D73A49;--shiki-dark:#C586C0">import</span><span style="color:#24292E;--shiki-dark:#9CDCFE"> js</span><span style="color:#D73A49;--shiki-dark:#C586C0"> from</span><span style="color:#032F62;--shiki-dark:#CE9178"> '@eslint/js'</span><span style="color:#24292E;--shiki-dark:#E6E6E6">;</span></span>
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
<span class="line"></span></code></pre>`,Os,$s,Qa=`<pre class="code-copy-target hidden">import js from '@eslint/js';
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
</pre>`,Ns,ns,Da="It was a bit tedious figuring out which config presets are provided as a single config object (<code>eslintConfigPrettier</code> and <code>js.configs.recommended</code>) and which provided multiple config objects and needed to be spread into the <code>tsEslint.config()</code> call.",He,ts,ba='The <code>&#39;@typescript-eslint/no-unused-vars</code> override for <code>.svelte</code> files is because of a pattern used in <a href="https://www.shadcn-svelte.com/" rel="nofollow">shadcn-svelte</a> to type component props.',Ae,is,Fa="The config for svelte files is the most tricky one. The parser needs to be set to the svelte parser. The svelte parser needs to be passed <code>parserOptions</code> which include a parser to use for the <code>&lt;script&gt;</code> blocks in svelte components. I use typescript in them, so it needs the <code>tsEslint.parser</code>, which in turn needs the <code>tsconfig</code> files and the root directory. I found it was necessary to provide both the root <code>tsconfig.json</code> as well as the one in <code>.svelte-kit/</code>.",Le,ls,_a="Most of the config I think is pretty straightforward once you see it, but getting it all working was a tedious exercise. I’d suggest copy + pasting it and modifying to suit your needs.",Me,os,xa="One notable <em>omission</em> from the config is the prettier plugin. I previously used it, but opted to use prettier separately instead. Formatting and linting are separate concepts, and the general consensus among software engineers trends towards handling them separately. This decision results in faster eslint runs because it doesn’t need to parse every file a second time with prettier to check formatting. It also means less dependencies and avoids the need for another integration.",Pe,H,Ta='<a aria-hidden="true" tabindex="-1" href="#adding-a-lint-command-to-packagejson"><span class="icon icon-link"></span></a><a href="#adding-a-lint-command-to-packagejson" aria-hidden="true" tabindex="-1"><span class="icon icon-link"></span></a>Adding a lint command to <code>package.json</code>',Ie,ps,Ha="With everything configured, the last steps are to add a command to run the linter and fire it up!",je,rs,Aa="Crack open the <code>package.json</code> file and add a couple commands to the <code>&quot;scripts&quot;</code> config:",qe,Rs,Za=`<pre class="shiki shiki-themes github-light slack-dark" style="background-color:#fff;--shiki-dark-bg:#222222;color:#24292e;--shiki-dark:#E6E6E6" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">&#123;</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#9CDCFE">	"scripts"</span><span style="color:#24292E;--shiki-dark:#E6E6E6">: &#123;</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#9CDCFE">		"lint"</span><span style="color:#24292E;--shiki-dark:#E6E6E6">: </span><span style="color:#032F62;--shiki-dark:#CE9178">"eslint . --report-unused-disable-directives"</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#9CDCFE">		"lint:fix"</span><span style="color:#24292E;--shiki-dark:#E6E6E6">: </span><span style="color:#032F62;--shiki-dark:#CE9178">"eslint . --fix"</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A9955">		// Add this one if you want to always run prettier before linting</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#9CDCFE">		"prelint"</span><span style="color:#24292E;--shiki-dark:#E6E6E6">: </span><span style="color:#032F62;--shiki-dark:#CE9178">"npm run format"</span><span style="color:#24292E;--shiki-dark:#E6E6E6">,</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#6A9955">		// other scripts...</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">	&#125;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E6E6E6">&#125;</span></span></code></pre>`,Bs,Vs,Ka=`<pre class="code-copy-target hidden">&#123;
	"scripts": &#123;
		"lint": "eslint . --report-unused-disable-directives",
		"lint:fix": "eslint . --fix",
		// Add this one if you want to always run prettier before linting
		"prelint": "npm run format",
		// other scripts...
	&#125;
&#125;</pre>`,Gs,cs,La="The <code>&quot;prelint&quot;</code> script, if specified, will always be run before the <code>&quot;lint&quot;</code> and <code>&quot;lint:fix&quot;</code> commands. It’s a super convenient way to ensure prettier runs before eslint. I also like that It reuses the existing <code>&quot;format&quot;</code> script rather than rewriting it in a second place with something like <code>&quot;prettier --write . &amp;&amp; eslint .&quot;</code>. DRY code and all that.",Se,ds,Ma="Personally, I don’t use the <code>&quot;prelint&quot;</code> script in my own projects. I often run the formatter once, but I run the linter multiple times as I work through my linter issues and want to recheck the code. The <code>&quot;prelint&quot;</code> script takes a little while to run, and I’d rather not wait for it each time.",ze,ks,Pa="Now that everything is set up, crack open your CLI of choice and run <code>npm run lint</code> to get a bunch of automated feedback on your code. Happy hacking!";return{c(){r=l("p"),r.textContent=m,f=t(),y=l("p"),y.innerHTML=c,h=t(),u=l("p"),u.textContent=$e,Us=t(),A=l("p"),A.innerHTML=Ne,Ws=t(),L=l("p"),L.textContent=Re,Ys=t(),M=l("ul"),M.innerHTML=Be,Js=t(),v=l("h2"),v.innerHTML=Ve,Qs=t(),P=l("p"),P.textContent=Ge,Zs=t(),g=l("h3"),g.innerHTML=Ue,Ks=t(),I=l("p"),I.innerHTML=We,Xs=t(),hs=new d(!1),ys=k(),fs=new d(!1),us=t(),j=l("p"),j.innerHTML=Ye,se=t(),w=l("h3"),w.innerHTML=Je,ee=t(),q=l("p"),q.innerHTML=Qe,ae=t(),S=l("ol"),S.innerHTML=Ze,ne=t(),z=l("p"),z.innerHTML=Ke,te=t(),Cs=new d(!1),ms=k(),vs=new d(!1),gs=t(),O=l("p"),O.textContent=Xe,ie=t(),$=l("ul"),$.innerHTML=sa,le=t(),N=l("p"),N.innerHTML=ea,oe=t(),D=l("h3"),D.innerHTML=aa,pe=t(),R=l("p"),R.innerHTML=na,re=t(),ws=new d(!1),Ds=k(),bs=new d(!1),Fs=t(),b=l("h3"),b.innerHTML=ta,ce=t(),B=l("p"),B.innerHTML=ia,de=t(),_s=new d(!1),xs=k(),Ts=new d(!1),Hs=t(),V=l("p"),V.innerHTML=la,ke=t(),G=l("p"),G.innerHTML=oa,Ee=t(),U=l("p"),U.innerHTML=pa,he=t(),W=l("p"),W.textContent=ra,ye=t(),F=l("h3"),F.innerHTML=ca,fe=t(),Y=l("p"),Y.innerHTML=da,ue=t(),J=l("p"),J.innerHTML=ka,Ce=t(),As=new d(!1),Ls=k(),Ms=new d(!1),Ps=t(),Q=l("p"),Q.innerHTML=Ea,me=t(),_=l("h2"),_.innerHTML=ha,ve=t(),Z=l("p"),Z.innerHTML=ya,ge=t(),K=l("p"),K.textContent=fa,we=t(),x=l("h3"),x.innerHTML=ua,De=t(),X=l("p"),X.innerHTML=Ca,be=t(),Is=new d(!1),js=k(),qs=new d(!1),Ss=t(),T=l("h3"),T.innerHTML=ma,Fe=t(),ss=l("p"),ss.textContent=va,_e=t(),es=l("ol"),es.innerHTML=ga,xe=t(),as=l("p"),as.innerHTML=wa,Te=t(),zs=new d(!1),Os=k(),$s=new d(!1),Ns=t(),ns=l("p"),ns.innerHTML=Da,He=t(),ts=l("p"),ts.innerHTML=ba,Ae=t(),is=l("p"),is.innerHTML=Fa,Le=t(),ls=l("p"),ls.textContent=_a,Me=t(),os=l("p"),os.innerHTML=xa,Pe=t(),H=l("h3"),H.innerHTML=Ta,Ie=t(),ps=l("p"),ps.textContent=Ha,je=t(),rs=l("p"),rs.innerHTML=Aa,qe=t(),Rs=new d(!1),Bs=k(),Vs=new d(!1),Gs=t(),cs=l("p"),cs.innerHTML=La,Se=t(),ds=l("p"),ds.innerHTML=Ma,ze=t(),ks=l("p"),ks.innerHTML=Pa,this.h()},l(s){r=o(s,"P",{["data-svelte-h"]:!0}),p(r)!=="svelte-twmn4e"&&(r.textContent=m),f=i(s),y=o(s,"P",{["data-svelte-h"]:!0}),p(y)!=="svelte-1oywwz3"&&(y.innerHTML=c),h=i(s),u=o(s,"P",{["data-svelte-h"]:!0}),p(u)!=="svelte-1zkdfj"&&(u.textContent=$e),Us=i(s),A=o(s,"P",{["data-svelte-h"]:!0}),p(A)!=="svelte-1lbek0b"&&(A.innerHTML=Ne),Ws=i(s),L=o(s,"P",{["data-svelte-h"]:!0}),p(L)!=="svelte-103q6e1"&&(L.textContent=Re),Ys=i(s),M=o(s,"UL",{["data-svelte-h"]:!0}),p(M)!=="svelte-oprkpr"&&(M.innerHTML=Be),Js=i(s),v=o(s,"H2",{id:!0,["data-svelte-h"]:!0}),p(v)!=="svelte-4xfkqc"&&(v.innerHTML=Ve),Qs=i(s),P=o(s,"P",{["data-svelte-h"]:!0}),p(P)!=="svelte-1wdaf5d"&&(P.textContent=Ge),Zs=i(s),g=o(s,"H3",{id:!0,["data-svelte-h"]:!0}),p(g)!=="svelte-1dpq7w0"&&(g.innerHTML=Ue),Ks=i(s),I=o(s,"P",{["data-svelte-h"]:!0}),p(I)!=="svelte-mjoeia"&&(I.innerHTML=We),Xs=i(s),hs=E(s,!1),ys=k(),fs=E(s,!1),us=i(s),j=o(s,"P",{["data-svelte-h"]:!0}),p(j)!=="svelte-19x8frn"&&(j.innerHTML=Ye),se=i(s),w=o(s,"H3",{id:!0,["data-svelte-h"]:!0}),p(w)!=="svelte-1gwxumn"&&(w.innerHTML=Je),ee=i(s),q=o(s,"P",{["data-svelte-h"]:!0}),p(q)!=="svelte-aovl55"&&(q.innerHTML=Qe),ae=i(s),S=o(s,"OL",{["data-svelte-h"]:!0}),p(S)!=="svelte-volqe7"&&(S.innerHTML=Ze),ne=i(s),z=o(s,"P",{["data-svelte-h"]:!0}),p(z)!=="svelte-2v77kd"&&(z.innerHTML=Ke),te=i(s),Cs=E(s,!1),ms=k(),vs=E(s,!1),gs=i(s),O=o(s,"P",{["data-svelte-h"]:!0}),p(O)!=="svelte-w9a446"&&(O.textContent=Xe),ie=i(s),$=o(s,"UL",{["data-svelte-h"]:!0}),p($)!=="svelte-1s995mp"&&($.innerHTML=sa),le=i(s),N=o(s,"P",{["data-svelte-h"]:!0}),p(N)!=="svelte-1wrrzwo"&&(N.innerHTML=ea),oe=i(s),D=o(s,"H3",{id:!0,["data-svelte-h"]:!0}),p(D)!=="svelte-1gv59yo"&&(D.innerHTML=aa),pe=i(s),R=o(s,"P",{["data-svelte-h"]:!0}),p(R)!=="svelte-110zqo9"&&(R.innerHTML=na),re=i(s),ws=E(s,!1),Ds=k(),bs=E(s,!1),Fs=i(s),b=o(s,"H3",{id:!0,["data-svelte-h"]:!0}),p(b)!=="svelte-18knu64"&&(b.innerHTML=ta),ce=i(s),B=o(s,"P",{["data-svelte-h"]:!0}),p(B)!=="svelte-1yogda2"&&(B.innerHTML=ia),de=i(s),_s=E(s,!1),xs=k(),Ts=E(s,!1),Hs=i(s),V=o(s,"P",{["data-svelte-h"]:!0}),p(V)!=="svelte-13eid77"&&(V.innerHTML=la),ke=i(s),G=o(s,"P",{["data-svelte-h"]:!0}),p(G)!=="svelte-bj6mdb"&&(G.innerHTML=oa),Ee=i(s),U=o(s,"P",{["data-svelte-h"]:!0}),p(U)!=="svelte-1os89jn"&&(U.innerHTML=pa),he=i(s),W=o(s,"P",{["data-svelte-h"]:!0}),p(W)!=="svelte-1p5zcp8"&&(W.textContent=ra),ye=i(s),F=o(s,"H3",{id:!0,["data-svelte-h"]:!0}),p(F)!=="svelte-n7ws53"&&(F.innerHTML=ca),fe=i(s),Y=o(s,"P",{["data-svelte-h"]:!0}),p(Y)!=="svelte-j7r4fg"&&(Y.innerHTML=da),ue=i(s),J=o(s,"P",{["data-svelte-h"]:!0}),p(J)!=="svelte-12ek43x"&&(J.innerHTML=ka),Ce=i(s),As=E(s,!1),Ls=k(),Ms=E(s,!1),Ps=i(s),Q=o(s,"P",{["data-svelte-h"]:!0}),p(Q)!=="svelte-qxxwsp"&&(Q.innerHTML=Ea),me=i(s),_=o(s,"H2",{id:!0,["data-svelte-h"]:!0}),p(_)!=="svelte-1yp82k2"&&(_.innerHTML=ha),ve=i(s),Z=o(s,"P",{["data-svelte-h"]:!0}),p(Z)!=="svelte-13jc2pd"&&(Z.innerHTML=ya),ge=i(s),K=o(s,"P",{["data-svelte-h"]:!0}),p(K)!=="svelte-1dqgyon"&&(K.textContent=fa),we=i(s),x=o(s,"H3",{id:!0,["data-svelte-h"]:!0}),p(x)!=="svelte-1rxrh2j"&&(x.innerHTML=ua),De=i(s),X=o(s,"P",{["data-svelte-h"]:!0}),p(X)!=="svelte-1jy7x7i"&&(X.innerHTML=Ca),be=i(s),Is=E(s,!1),js=k(),qs=E(s,!1),Ss=i(s),T=o(s,"H3",{id:!0,["data-svelte-h"]:!0}),p(T)!=="svelte-1uday53"&&(T.innerHTML=ma),Fe=i(s),ss=o(s,"P",{["data-svelte-h"]:!0}),p(ss)!=="svelte-1d3xafx"&&(ss.textContent=va),_e=i(s),es=o(s,"OL",{["data-svelte-h"]:!0}),p(es)!=="svelte-18dbg18"&&(es.innerHTML=ga),xe=i(s),as=o(s,"P",{["data-svelte-h"]:!0}),p(as)!=="svelte-uraean"&&(as.innerHTML=wa),Te=i(s),zs=E(s,!1),Os=k(),$s=E(s,!1),Ns=i(s),ns=o(s,"P",{["data-svelte-h"]:!0}),p(ns)!=="svelte-ka0m9m"&&(ns.innerHTML=Da),He=i(s),ts=o(s,"P",{["data-svelte-h"]:!0}),p(ts)!=="svelte-1d643sl"&&(ts.innerHTML=ba),Ae=i(s),is=o(s,"P",{["data-svelte-h"]:!0}),p(is)!=="svelte-1q8phol"&&(is.innerHTML=Fa),Le=i(s),ls=o(s,"P",{["data-svelte-h"]:!0}),p(ls)!=="svelte-c26n3y"&&(ls.textContent=_a),Me=i(s),os=o(s,"P",{["data-svelte-h"]:!0}),p(os)!=="svelte-1l2j2ko"&&(os.innerHTML=xa),Pe=i(s),H=o(s,"H3",{id:!0,["data-svelte-h"]:!0}),p(H)!=="svelte-fockc6"&&(H.innerHTML=Ta),Ie=i(s),ps=o(s,"P",{["data-svelte-h"]:!0}),p(ps)!=="svelte-1hso8ru"&&(ps.textContent=Ha),je=i(s),rs=o(s,"P",{["data-svelte-h"]:!0}),p(rs)!=="svelte-tt1l48"&&(rs.innerHTML=Aa),qe=i(s),Rs=E(s,!1),Bs=k(),Vs=E(s,!1),Gs=i(s),cs=o(s,"P",{["data-svelte-h"]:!0}),p(cs)!=="svelte-1s2v09t"&&(cs.innerHTML=La),Se=i(s),ds=o(s,"P",{["data-svelte-h"]:!0}),p(ds)!=="svelte-1piesm5"&&(ds.innerHTML=Ma),ze=i(s),ks=o(s,"P",{["data-svelte-h"]:!0}),p(ks)!=="svelte-1bw5zzv"&&(ks.innerHTML=Pa),this.h()},h(){C(v,"id","setting-up-prettier"),C(g,"id","installing-prettier-packages"),hs.a=ys,fs.a=us,C(w,"id","configuring-prettier"),Cs.a=ms,vs.a=gs,C(D,"id","prettier-ignore-file"),ws.a=Ds,bs.a=Fs,C(b,"id","running-prettier-via-npm-scripts"),_s.a=xs,Ts.a=Hs,C(F,"id","configuring-zed-to-format-on-save-using-prettier"),As.a=Ls,Ms.a=Ps,C(_,"id","static-code-analysis-for-svelte--typescript-using-eslint"),C(x,"id","installing-eslint-and-plugins"),Is.a=js,qs.a=Ss,C(T,"id","configuring-eslint"),zs.a=Os,$s.a=Ns,C(H,"id","adding-a-lint-command-to-packagejson"),Rs.a=Bs,Vs.a=Gs},m(s,e){a(s,r,e),a(s,f,e),a(s,y,e),a(s,h,e),a(s,u,e),a(s,Us,e),a(s,A,e),a(s,Ws,e),a(s,L,e),a(s,Ys,e),a(s,M,e),a(s,Js,e),a(s,v,e),a(s,Qs,e),a(s,P,e),a(s,Zs,e),a(s,g,e),a(s,Ks,e),a(s,I,e),a(s,Xs,e),hs.m(Sa,s,e),a(s,ys,e),fs.m(za,s,e),a(s,us,e),a(s,j,e),a(s,se,e),a(s,w,e),a(s,ee,e),a(s,q,e),a(s,ae,e),a(s,S,e),a(s,ne,e),a(s,z,e),a(s,te,e),Cs.m(Oa,s,e),a(s,ms,e),vs.m($a,s,e),a(s,gs,e),a(s,O,e),a(s,ie,e),a(s,$,e),a(s,le,e),a(s,N,e),a(s,oe,e),a(s,D,e),a(s,pe,e),a(s,R,e),a(s,re,e),ws.m(Na,s,e),a(s,Ds,e),bs.m(Ra,s,e),a(s,Fs,e),a(s,b,e),a(s,ce,e),a(s,B,e),a(s,de,e),_s.m(Ba,s,e),a(s,xs,e),Ts.m(Va,s,e),a(s,Hs,e),a(s,V,e),a(s,ke,e),a(s,G,e),a(s,Ee,e),a(s,U,e),a(s,he,e),a(s,W,e),a(s,ye,e),a(s,F,e),a(s,fe,e),a(s,Y,e),a(s,ue,e),a(s,J,e),a(s,Ce,e),As.m(Ga,s,e),a(s,Ls,e),Ms.m(Ua,s,e),a(s,Ps,e),a(s,Q,e),a(s,me,e),a(s,_,e),a(s,ve,e),a(s,Z,e),a(s,ge,e),a(s,K,e),a(s,we,e),a(s,x,e),a(s,De,e),a(s,X,e),a(s,be,e),Is.m(Wa,s,e),a(s,js,e),qs.m(Ya,s,e),a(s,Ss,e),a(s,T,e),a(s,Fe,e),a(s,ss,e),a(s,_e,e),a(s,es,e),a(s,xe,e),a(s,as,e),a(s,Te,e),zs.m(Ja,s,e),a(s,Os,e),$s.m(Qa,s,e),a(s,Ns,e),a(s,ns,e),a(s,He,e),a(s,ts,e),a(s,Ae,e),a(s,is,e),a(s,Le,e),a(s,ls,e),a(s,Me,e),a(s,os,e),a(s,Pe,e),a(s,H,e),a(s,Ie,e),a(s,ps,e),a(s,je,e),a(s,rs,e),a(s,qe,e),Rs.m(Za,s,e),a(s,Bs,e),Vs.m(Ka,s,e),a(s,Gs,e),a(s,cs,e),a(s,Se,e),a(s,ds,e),a(s,ze,e),a(s,ks,e)},p:sn,d(s){s&&(n(r),n(f),n(y),n(h),n(u),n(Us),n(A),n(Ws),n(L),n(Ys),n(M),n(Js),n(v),n(Qs),n(P),n(Zs),n(g),n(Ks),n(I),n(Xs),n(ys),hs.d(),fs.d(),n(us),n(j),n(se),n(w),n(ee),n(q),n(ae),n(S),n(ne),n(z),n(te),n(ms),Cs.d(),vs.d(),n(gs),n(O),n(ie),n($),n(le),n(N),n(oe),n(D),n(pe),n(R),n(re),n(Ds),ws.d(),bs.d(),n(Fs),n(b),n(ce),n(B),n(de),n(xs),_s.d(),Ts.d(),n(Hs),n(V),n(ke),n(G),n(Ee),n(U),n(he),n(W),n(ye),n(F),n(fe),n(Y),n(ue),n(J),n(Ce),n(Ls),As.d(),Ms.d(),n(Ps),n(Q),n(me),n(_),n(ve),n(Z),n(ge),n(K),n(we),n(x),n(De),n(X),n(be),n(js),Is.d(),qs.d(),n(Ss),n(T),n(Fe),n(ss),n(_e),n(es),n(xe),n(as),n(Te),n(Os),zs.d(),$s.d(),n(Ns),n(ns),n(He),n(ts),n(Ae),n(is),n(Le),n(ls),n(Me),n(os),n(Pe),n(H),n(Ie),n(ps),n(je),n(rs),n(qe),n(Bs),Rs.d(),Vs.d(),n(Gs),n(cs),n(Se),n(ds),n(ze),n(ks))}}}function En(Es){let r,m;const f=[Es[0],qa];let y={$$slots:{default:[kn]},$$scope:{ctx:Es}};for(let c=0;c<f.length;c+=1)y=Oe(y,f[c]);return r=new dn({props:y}),{c(){nn(r.$$.fragment)},l(c){tn(r.$$.fragment,c)},m(c,h){ln(r,c,h),m=!0},p(c,[h]){const u=h&1?cn(f,[h&1&&ja(c[0]),h&0&&ja(qa)]):{};h&2&&(u.$$scope={dirty:h,ctx:c}),r.$set(u)},i(c){m||(on(r.$$.fragment,c),m=!0)},o(c){pn(r.$$.fragment,c),m=!1},d(c){rn(r,c)}}}const qa={title:"Linting and formatting a svelte project",description:"Pulling together a bunch of language tools can be a bother, but I find automated formatting & code review tools are worth the hassle.",slug:"lint-format-svelte",publish:!0,lastmod:"2024-04-15T00:00:00.000Z",date:"2024-04-13T00:00:00.000Z",aliases:null,tags:["status/budding","topic/webdev"],timeToRead:9,internalLinks:[],flashcards:[]};function hn(Es,r,m){return Es.$$set=f=>{m(0,r=Oe(Oe({},r),Ia(f)))},r=Ia(r),[r]}class mn extends en{constructor(r){super(),an(this,r,hn,En,Xa,{})}}export{mn as default,qa as metadata};
