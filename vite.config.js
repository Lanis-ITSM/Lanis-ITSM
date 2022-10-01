import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'
import postcss from './postcss.config.js';

// https://vitejs.dev/config/
export default defineConfig({
	css: {
		postcss,
	},
	plugins: [svelte({
		preprocess: [sveltePreprocess({ typescript: true })]
	})]
})