// INIT
import { vitePreprocess } from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

// ADAPTER
import staticAdapter from '@sveltejs/adapter-static';
import nodeAdapter from '@sveltejs/adapter-node';
import netlifyAdapter from '@sveltejs/adapter-netlify';
import vercelAdapter from '@sveltejs/adapter-vercel';

// CONFIG
import mdsvexConfig from './mdsvex.config.js';

// import { resolve } from 'path';
// import { dirname } from 'path';
// import { fileURLToPath } from 'url';
// import { createRequire } from 'module';

// Custom require function as replacement for the require from the commonJS in ES Module
// const customRequire = createRequire(import.meta.url); // jshint ignore:line

// Custom __dirname as replacement for the __dirname from the commonJS in ES Module
// const __dirname = dirname(fileURLToPath(import.meta.url)); // jshint ignore:line
// const pkg = customRequire('./package.json');

// command env properties
const hasAdapter = process.env.ADAPTER;
const adapt = hasAdapter ? hasAdapter : 'node';

const getOption = (adapt) => {
	switch (adapt) {
		case 'static':
			return {};
		case 'netlify':
		case 'vercel':
		case 'node':
		default:
			return JSON.stringify(process.env.OPTIONS) || {};
	}
};

const getAdapters = (adapt) => {
	switch (adapt) {
		case 'static':
			return staticAdapter;
		case 'netlify':
			return netlifyAdapter;
		case 'vercel':
			return vercelAdapter;
		case 'node':
		default:
			return nodeAdapter;
	}
};

const options = getOption(adapt);
const adapter = getAdapters(adapt);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	// syntax: 'postcss-scss', // bingung ini ditaro svelte.config atau postcss.config
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [
		preprocess({
			// defaults: { style: 'postcss' }, //Deprecation notice: using the "defaults" option is no longer recommended. Instead, define the language being used explicitly via the lang attribute.
			preserve: ['ld+json'],
			postcss: true, // to read postcss.config.cjs or you can configure inline here
			scss: {
				prependData: '@use "src/variables.scss" as *;',
			},
		}),
		vitePreprocess(),
		mdsvex(mdsvexConfig),
	],

	// 	preprocess({
	// 		postcss: {
	// 			plugins: [
	// 				tailwind,
	// 				autoprefixer
	// 			]
	// 		},
	// 		,
	// 		scss: {
	// 			prependData: "@import '$styles/styles.scss';",
	// 			// 	prependData: '@use "src/variables.scss" as *;',
	// 		},
	// 	}),

	kit: {
		adapter: adapter(options),
		alias: {
			$data: 'src/lib/data',
			$environment: 'src/environment',
			$layouts: 'src/lib/layouts',
			$models: 'src/lib/models',
			$shared: 'src/lib/shared',
			$stores: 'src/lib/stores',
			$styles: 'src/lib/styles',
			$types: 'src/types',
			$utils: 'src/lib/utils',
		},
	},
};

export default config;
