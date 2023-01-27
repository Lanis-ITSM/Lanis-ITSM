const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: 'class', // or 'media' or 'class'
	content: ['./src/**/*.{html,js,svelte,ts}'],
	plugins: [
		require('@tailwindcss/typography'),
		require("@tailwindcss/forms")({
			strategy: 'base', // only generate global styles
			// strategy: 'class', // only generate classes
		})
	],
	corePlugins: {
		preflight: false,
	},
	future: {
		purgeLayersByDefault: true,
	},
	theme: {
		extend: {
			colors: {
				gray: colors.neutral,
				green: colors.emerald,
				yellow: colors.amber,
				purple: colors.violet,
			},
		},
		container: {
			center: true,
		},
	},
	// separator: '_',
	// prefix: 'tw-', // vendor prefixing
	// darkMode: ['class', '[data-mode="dark"]'], // or 'media' or 'class'
	// content: {
	// 	mode: 'all', // trimming unused css
	// 	content: ['./src/**/*.{html,js,svelte,ts}'],
	// 	options: {
	// 		whitelistPatterns: [/svelte-/],
	// 		defaultExtractor: (content) =>
	// 			[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(
	// 				([_match, group, ..._rest]) => group,
	// 			),
	// 		keyframes: true,
	// 	},
	// },
};

module.exports = config;
