const e=`---
title: Linting and formatting a svelte project
description: Pulling together a bunch of language tools can be a bother, but I find automated formatting & code review tools are worth the hassle.
slug: notes/lint-format-svelte
publish: true
lastmod: 2024-04-24
date: 2024-04-13
aliases: null
tags:
- status/budding
- topic/webdev
---

Lately I've been working on [Penguinsight](https://penguinsight.com). It's a tool that helps teams building products for developers get precise & actionable feedback on their docs from the people who have to use them. I've been building Penguinsight solo, and it's freeing to build everything myself and understand how it all works. I get a huge boost in *personal* productivity, but it's not without downsides.

Often the downsides of working solo aren't a big issue for me. I understand *the importance of craftsmanship* in software development, and usually write great code. On rare occasion, I am even struck with divine inspiration; my body becomes a mere vessel used by the incomprehensible powers of the universe to transcribe code until 3 in the morning. There is no greater sensation; it is a [peak experience](https://en.wikipedia.org/wiki/Peak_experience).

After waking up exhausted for the third time last week only to discover some asshole merged poorly formatted code with bugs into staging at 3am, it was time to act... I got up and walked to a coffee shop. With blood flowing and bean juice in hand, I was resolved to reign in that maniac by any means necessary. Tests weren't cutting it, so it was time to introduce some static analysis tools: a [formatter](https://prettier.io) and [linter](https://eslint.org/).

This ended up being a bigger project than I expected for a few reasons:

* I needed to integrate \`prettier-plugin-svelte\` since started using [zed](https://zed.dev) and no longer gett it via VS Code plugin
* ESLint upgraded to a new [flat config](https://eslint.org/docs/latest/extend/plugin-migration-flat-config) format which I needed to learn
* [typescript-eslint doesn't support the latest eslint 9.0.0 yet](https://github.com/typescript-eslint/typescript-eslint/issues/8211), which naturally I discovered after trying to use the eslint 9 😅
* There is a new [eslint-plugin-svelte](https://sveltejs.github.io/eslint-plugin-svelte/migration/) which replaced \`eslint-plugin-svelte3\`

Here's how I got it all up and running!

## Setting up prettier

Prettier handles file formatting. I prefer to have things formatted consistently and I don't want to think about it, so I configure my editor to format files on save. This has the added benefit of also saving my files when I use \`cmd+s\` as a "format code" hotkey. Nifty!

### Installing prettier packages

From the top, here's the setup. First, install all the dependencies for formatting (I've specified version I know work together). Since these are dev tools, using \`-D\` ensures they don't get bundled into application code.

\`\`\`\`sh
npm i -D prettier@3.2.5
npm i -D prettier-plugin-organize-imports@3.2.4
npm i -D prettier-plugin-svelte@3.2.2
npm i -D prettier-plugin-tailwindcss@0.5.13
\`\`\`\`

I use svelte and tailwind, so their respective plugins are self-explanatory. I like \`prettier-plugin-organize-imports\` because most of the time import order is irrelevant, using the plugin to order them minimizes changes for cleaner PR diffs.

### Configuring prettier

With the dependencies all installed, it's time to get prettier setup! There are a few options for the prettier config file, but I prefer \`prettier.config.js\` for a couple reasons:

1. I can import JSDoc typings to get intellisense, which helps me fill out my config options
1. It's more convenient if all the tooling config files are \`*.config.js\` for matching patterns

Here's my \`prettier.config.js\` file contents:

\`\`\`\`js twoslash filename="prettier.config.js"
/** @type {import("prettier").Config} */
const config = {
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
		{
			files: '*.svelte',
			options: { parser: 'svelte' }
		}
	]
};
export default config;

\`\`\`\`

My reasoning for these preferences:

* tabs are less characters than the equivalent spaces, and can be customized to render differently for people who prefer more spaces/indentation
* Single quotes add less visual noise than double quotes
* Less trailing commas means less syntax on screen, particularly syntax which does nothing
* Brackets on the same line means more code on screen and looks cleaner

The \`overrides\` is necessary for svelte files to be parsed correctly. It overrides the default parser with the \`svelte\` parser for files with the \`.svelte\` extension.

### Prettier ignore file

I have a number of files which I **don't** want to format. Those are defined in a \`.prettierignore\` file. My list denotes files that are generated programmatically or which are not maintained by me, such as the \`node_modules\`. Here's the list:

\`\`\`\`text filename=".prettierignore"
node_modules/**
build/**
.svelte-kit/**
.env
.env.*
.vscode/**
static/**

# Ignore files for PNPM, NPM and YARN
pnpm-lock.yaml
package-lock.json
yarn.lock
\`\`\`\`

### Running prettier via npm scripts

At this point, prettier is configured and ready to run. I like to add npm scripts for a couple actions - linting and formatting - for convenience. In \`package.json\` add the \`"lint"\` and \`"format"\` commands:

\`\`\`\`json filename="package.json"
{
	"scripts" : {
		"lint": "prettier --check '{src,tests}/**/*.{js,ts,svelte}'",
		"format": "prettier --write '{src,tests}/**/*.{js,ts,svelte}'",
	}
}
\`\`\`\`

I specify the glob patterns in quotes so that the shell doesn't expand them. This way it's left to prettier to expand, which will work consistently across OSes and shell environments. The glob will match all files with a \`js\`, \`ts\`, or \`svelte\` extension that are in the \`src\`
or \`tests\` folders. These can be customized per project.

\`npm run lint\` will run prettier to *check* all the matched files in the project and report if any have incorrect styling. I find this most helpful in CICD workflows where code won't be changed; I want to fail the build early if it doesn't match the style convention.

\`npm run format\` uses prettier to *format* all the project files. This will change them on disk. I use it as a final check after making changes or if my editor isn't configured to format on edit or save.

Speaking of configuring an editor to format on save...

### Configuring zed to format on save using prettier

If you install [zed](https://zed.dev/) now, this will be configured by default. If you have had zed installed since before ~April 2024, you'll want to make one small change to zed settings.

from zed, you can do \`cmd+shift+p\` to open the command palette and select \`zed: open settings\`, or you can directly open the settings file at \`~/.config/zed/settings.json\`:

\`\`\`\`json filename="settings.json"
{
  "formatter": "auto",
}
\`\`\`\`

Now \`"auto"\` is the default setting in zed, so for new installs this isn't relevant.

## Static code analysis for svelte & typescript using eslint

I absolutely love static code analysis tooling. When I was a C++ developer working in games, I found the [PVS Studio blog post about unreal engine](https://pvs-studio.com/en/blog/posts/cpp/0249/) impactful, and read many other articles from them. Their blog sold me on the value of static analysis, but I wasn't the only one! Shortly after the unreal blog post was published, Epic Games hired them for a full audit of Unreal Engine's source code which at the time had recently released its source code.

Now that I do web development, the tech stack and tools are different but my love of static code analysis remains strong as ever. I use typescript over javascript wherever possible, and eslint is the gold standard for static code analysis for both TS and JS.

### Installing eslint and plugins

As of this writing (April 2024), the latest version of eslint (9.0.0) isn't supported by the \`typescript-eslint\` plugin, so I use the latest compatible version. As with prettier, the linting tools are only for development so I use \`--save-dev\` (or \`-D\` for short). Here's the commands to install eslint and the plugins I use for typescript & svelte projects:

\`\`\`\`sh
npm i --save-dev eslint@8.56.0
npm i --save-dev eslint-config-prettier@8.10.0
npm i --save-dev eslint-plugin-prettier@5.1.3
npm i --save-dev eslint-plugin-svelte@2.37.0
npm i --save-dev typescript-eslint@7.6.0
npm i --save-dev globals
\`\`\`\`

### Configuring eslint

Switching to the flat config was a rough adjustment. Some nuances and tricks I found helpful to know about are:

1. The configuration objects cascade, and if multiple config objects match a file the later ones override the early ones
1. \`typescript-eslint\` exports a \`config\` function whose parameters are typed eslint config objects. Super helpful!
1. [Globally ignore files](https://eslint.org/docs/latest/use/configure/configuration-files#globally-ignoring-files-with-ignores) by adding a config object with only the \`ignores\` key set. This replaces the \`.eslintignore\` file of old.
1. \`globals\` has the global type definitions for a bunch of environments. This is needed for [linting with type information](https://typescript-eslint.io/getting-started/typed-linting)

Here's how I've gotten all the plugins to work together, plus a couple overrides I'm using:

\`\`\`\`js twoslash filename="eslint.config.js"
import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginSvelte from 'eslint-plugin-svelte';
import globals from 'globals';
import svelteParser from 'svelte-eslint-parser';
import tsEslint from 'typescript-eslint';

export default tsEslint.config(
	js.configs.recommended,
	...tsEslint.configs.recommendedTypeChecked,
	{
		// configure the ts parser for ts files
		files: ['**/*.ts'],
		languageOptions: {
			parser: tsEslint.parser,
			parserOptions: {
				project: true,
				tsconfigRootDir: import.meta.dirname
			}
		}
	},
	{
		files: ['*.js', '*.config.ts'],
		...tsEslint.configs.disableTypeChecked
	},
	...eslintPluginSvelte.configs['flat/recommended'],
	...eslintPluginSvelte.configs['flat/prettier'],
	{
		// dev tools and server logic run in node environments
		files: ['**/*.server.ts', '*.config.ts', '*.config.js'],
		languageOptions: {
			globals: {
				...globals.node
			}
		}
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			// mounted svelte components run in the browser
			globals: {
				...globals.browser
			},
			ecmaVersion: 2022,
			sourceType: 'module',
			// setup the svelte parser and give it the ts parser config
			parser: svelteParser,
			parserOptions: {
				parser: tsEslint.parser,
				// needed so ts parser won't skip svelte files
				extraFileExtensions: ['.svelte'],
				// svelte files need both \`tsconfig\`s
				project: ['tsconfig.json', '.svelte-kit/tsconfig.json'],
				tsconfigRootDir: import.meta.dirname
			}
		},
		rules: {
			// ignore the $$Props types in shadcn-svelte
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					varsIgnorePattern: '^\\\\$\\\\$(Props|Events|Slots|Generic)'
				}
			]
		}
	},
	{
		files: ['tests/**/*.ts'],
		rules: {
			'no-empty-pattern': [
				'error',
				{
					// I use \`{}\` when defining vitest fixtures
					allowObjectPatternsAsParameters: true
				}
			]
		}
	},
	{
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
	},
	// this only disables rules; it goes last to win the cascade
	eslintConfigPrettier
);

\`\`\`\`

It was a bit tedious figuring out which config presets are provided as a single config object (\`eslintConfigPrettier\` and \`js.configs.recommended\`) and which provided multiple config objects and needed to be spread into the \`tsEslint.config()\` call.

The \`'@typescript-eslint/no-unused-vars\` override for \`.svelte\` files is because of a pattern used in [shadcn-svelte](https://www.shadcn-svelte.com/) to type component props.

The config for svelte files is the most tricky one. The parser needs to be set to the svelte parser. The svelte parser needs to be passed \`parserOptions\` which include a parser to use for the \`<script>\` blocks in svelte components. I use typescript in them, so it needs the \`tsEslint.parser\`, which in turn needs the \`tsconfig\` files and the root directory. I found it was necessary to provide both the root \`tsconfig.json\` as well as the one in \`.svelte-kit/\`.

Most of the config I think is pretty straightforward once you see it, but getting it all working was a tedious exercise. I'd suggest copy + pasting it and modifying to suit your needs.

One notable *omission* from the config is the prettier plugin. I previously used it, but opted to use prettier separately instead. Formatting and linting are separate concepts, and the general consensus among software engineers trends towards handling them separately. This decision results in faster eslint runs because it doesn't need to parse every file a second time with prettier to check formatting. It also means less dependencies and avoids the need for another integration.

### Adding a lint command to \`package.json\`

With everything configured, the last steps are to add a command to run the linter and fire it up!

Crack open the \`package.json\` file and add a couple commands to the \`"scripts"\` config:

\`\`\`\`json filename="package.json"
{
	"scripts": {
		"lint": "eslint . --report-unused-disable-directives",
		"lint:fix": "eslint . --fix",
		// Add this one if you want to always run prettier before linting
		"prelint": "npm run format",
		// other scripts...
	}
}
\`\`\`\`

The \`"prelint"\` script, if specified, will always be run before the \`"lint"\` and \`"lint:fix"\` commands. It's a super convenient way to ensure prettier runs before eslint. I also like that It reuses the existing \`"format"\` script rather than rewriting it in a second place with something like \`"prettier --write . && eslint ."\`. DRY code and all that.

Personally, I don't use the \`"prelint"\` script in my own projects. I often run the formatter once, but I run the linter multiple times as I work through my linter issues and want to recheck the code. The \`"prelint"\` script takes a little while to run, and I'd rather not wait for it each time.

## eslint in action

Now that everything is set up, it's time to crack open the CLI and \`npm run lint\` to get a bunch of automated feedback on my code. Here's an interesting example of a bug the linter helped me catch.

I'm building a [Penguinsight](https://penguinsight.com/) github integration to automatically open issues for new documentation feedback. Github provides a nice way of interacting with their APIs via \`@octokit/request\`, \`@octokit/auth-app\`, and other libraries. I've never used them before, but the documentation seemed pretty straightforward. I have some code that creates an authenticated app client (ie it signs into github as Penguinsight) that can be used to make requests to the github API. I then use the following code to create an issue and return its URL.

\`\`\`\`ts filename="github.ts"
const ghResponse = await authenticatedRequest(
	\`POST /repos/\${repo.owner}/\${repo.name}/issues\`,
	{
		owner: repo.owner,
		repo: repo.name,
		title: \`\${feedbackToEmoji(
			feedback.feedback
		)} User feedback received on \${feedback.document.path}\`,
		body: formatFeedbackIssueBody(feedback)
	}
);

return {
	success: true,
	issue: {
		url: ghResponse.data.html_url
	}
};
\`\`\`\`

The \`ghResponse\` here is typed as \`OctokitResponse<any, number>\`, and so accessing the \`.html_url\` results in a linting error:

\`\`\`\`sh
~/Documents/penguinsight/src/lib/server/github.ts
104:10  error  Unsafe assignment of an \`any\` value     @typescript-eslint/no-unsafe-assignment
\`\`\`\`

I thought it was strange that GitHub would provide an untyped response, and upon further investigation realized I was specifying the endpoint incorrectly. Instead of the template string I was providing with the repo owner and name values, I am supposed to place placeholders. More concretely:

\`\`\`\`ts {5} filename="github.ts"
const ghResponse = await authenticatedRequest(
	// incorrect
	// \`POST /repos/\${repo.owner}/\${repo.name}/issues\`,
	// this is the correct way to use the API
	\`POST /repos/{owner}/{repo}/issues\`,
	{
		owner: repo.owner,
		repo: repo.name,
		title: \`\${feedbackToEmoji(
			feedback.feedback
		)} User feedback received on \${feedback.document.path}\`,
		body: formatFeedbackIssueBody(feedback)
	}
);
\`\`\`\`

After making this change, the response is fully typed. Instead of an unsafe any assignment from using the API correctly, I now have a type safe response object and am using the API correctly. This bug had been in the codebase for over a month and I only caught it because I configured the linter to do type checking. Awesome!

I've found formatting and linting to be especially valuable on solo projects like this blog and [Penguinsight](https://penguinsight.com). It's nice to know that my code is getting reviewed by another set of eyes, even if those eyes belong to a robot in a GitHub Action workflow.

Hopefully this helps you get formatting & linting set up on your own projects, whether solo or with a team. Happy hacking!
`;export{e as default};
