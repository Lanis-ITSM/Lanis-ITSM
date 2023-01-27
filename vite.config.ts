/// <reference types="vitest" />
import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

// import svg from '@poppanator/sveltekit-svg';
// import { SvelteKitPWA } from '@vite-pwa/sveltekit';
// import postcssNesting from 'postcss-nesting';

const config: UserConfig = {
	plugins: [
		sveltekit(),
		// SvelteKitPWA(),
		// svg()
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
	},
	server: {
		port: 3000,
	},
	css: {
		// postcss: {
		// plugins: [
		// postcssNesting()
		// ],
		// },
		preprocessorOptions: {
			scss: {
				additionalData: '@use "src/variables.scss" as *;',
			},
		},
	},
};

export default config;
