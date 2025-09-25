const t=`---
title: Setting up a SvelteKit project with Storybook
description: Setting up Storybook on a SvelteKit project doesn't work out of the box using the config tool. This guide walks you through a few extra steps needed to get SvelteKit and Storybook running.
slug: notes/sveltekit-storybook-setup
publish: true
lastmod: 2022-04-19
date: 2022-04-19
aliases:
- Set up SvelteKit with Storybook
- Sveltekit Storybook setup
tags:
- status/seedling
- topic/webdev
- taxonomy/reference
---

This will walk you through the steps to set up a new *SvelteKit* project with *StorybookJS*. It will also configure Storybook to use *ViteJS*. Using Vite gets the local storybook server up and running around ~50x faster.

 > 
 > Note: I've opted to use TypeScript in this guide, but it works just as well for JavaScript. As of April 2022, Storybook supports svelte components implemented in TS, but does **not** support *stories* written in TypeScript yet.

Initialize a *SvelteKit* project:

\`\`\`\`bash
npm init svelte@next my-sveltekit-app
\`\`\`\`

Confirm that it can install \`create-svelte@next\` then continue to the SvelteKit config options. My preferred config is as follows:

|Option|Selection|
|------|---------|
|Which Svelte app template?|Skeleton project|
|Add type checking?|TypeScript|
|Add ESLint for code linting?|Yes|
|Add Prettier for code formatting?|Yes|
|Add Playwright for browser testing?|No|
|Add Vitest for unit testing?|Yes|

With *SvelteKit* configured, we can start setting up *StorybookJS*:

\`\`\`\`bash
cd my-sveltekit-app
npx sb init --builder @storybook/builder-vite
\`\`\`\`

The automated *StorybookJS* configuration tool will run and set things up for a Svelte project. It'll ask you if you want to set up the storybook linter plugin:

|Option|Selection|
|------|---------|
|Do you want to run the 'eslintPlugin' fix on your project?|Yes|

Once the setup is done, there are a couple manual config steps we need to go through.

First we need to tell Storybook to use *CommonJS*. Create the file \`.storybook/package.json\` and add the following to it:

\`\`\`\`json
// .storybook/package.json
{
  "type": "commonjs"
}
\`\`\`\`

Then we need to remove Storybook's preprocessing config and tell *ViteJS* how to find and preprocess our svelte files:

1. Remove \`"preprocess": require( "../svelte.config.js" ).preprocess\`
1. Import the svelte preprocessor: \`const preprocess = require('svelte-preprocess');\`
1. Import the \`path\` package to help with include paths: \`const path = require('path');\`
1. Set the *ViteJS* config to use the svelte preprocessor and include paths (see the \`async viteFinal(config, {configType}) {...}\` below)

The final \`.storybook/main.js\` file should look like this:

\`\`\`\`js
// .storybook/main.js
const preprocess = require('svelte-preprocess');
const path = require('path');
module.exports = {
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
  "core": {
    "builder": "@storybook/builder-vite"
  },
  async viteFinal(config, { configType }) {
    config.preprocess = preprocess({});
    config.resolve.alias = {
	  // alias: path
	  $components: path.resolve('./src/components'),
	  $routes: path.resolve('./src/routes'),
	  $lib: path.resolve('./src/lib'),
	  // The $styles alias is used to setup tailwindcss 
	  $styles: path.resolve('./src/styles'),
	};
    return config;
  },
}
\`\`\`\`

 > 
 > Note: if you have different include path aliases, you'll want to make sure that the ones in \`.storybook/main.js\` match your \`svelte.config.js\` aliases

Voila! You should be all set.

## Bonus: Tailwindcss support

If you *also* want to use *tailwindcss* with both *SvelteJS*/*SvelteKit* and *StorybookJS*, that config has a couple of gotchas as well. Here's the steps to get it up and running.

First, install *tailwindcss* in your *SvelteKit* project (per [the official tailwind docs](https://tailwindcss.com/docs/guides/sveltekit)):

\`\`\`\`zsh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init tailwind.config.cjs -p
mv postcss.config.js postcss.config.cjs
\`\`\`\`

Then update the \`tailwind.config.cjs\` so it knows where to find your components:

\`\`\`\`js
// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  plugins: []
};
\`\`\`\`

Create a \`src/styles/tailwind.css\` file that sets up *tailwindcss* for your components:

\`\`\`\`css
@tailwind base;
@tailwind components;
@tailwind utilities;
\`\`\`\`

Finally, create a \`src/routes/__layout.svelte\` file that includes *tailwindcss* for your sveltekit project:

\`\`\`\`svelte
<script>
  import "$styles/tailwind.css";
<\/script>

<slot />
\`\`\`\`

At this point *tailwindcss* should be working in your *SvelteKit* project. It won't be working in the *StorybookJS* view of your components though; storybook still needs to be configured to use *tailwindcss*. To do that add the following line to the top of \`.storybook/preview.js\`:

\`\`\`\`js
// .storybook/preview.js
import '$styles/tailwind.css';

// No need to touch the rest of it, which for me looks like this:
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
\`\`\`\`

 > 
 > !Note: the \`.storybook/main.js\` file needs to have the alias \`$styles: path.resolve('./src/styles')\` set in vite's \`config.resolve.alias\` object for the \`import '$styles/tailwind.css'\` to work.

That's it! You should have the following correctly set up now:

* *SvelteKit* using *TypeScript*, styleable with *tailwindcss*, all using *ViteJS*
* A complementary *StorybookJS* also using *ViteJS* and *tailwindcss* for your *TypeScript* components.

Sadly as of now (May 2022) your stories still need to be authored in *JavaScript*.
`;export{t as default};
