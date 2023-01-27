// // REMARK
import remarkGfm from 'remark-gfm';
import remarkAbbr from 'remark-abbr';
import remarkGithub from 'remark-github';
// // REHYPE
import toc from '@jsdevtools/rehype-toc';
import rehypeSlug from 'rehype-slug';
import rehypePrism from 'rehype-prism-plus';
import rehypeHighlight from 'rehype-highlight';
import rehypeCodeTitles from 'rehype-code-titles';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/** @type {import('mdsvex).MdsvexOptions} */
const config = {
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool',
	},
	remarkPlugins: [
		remarkGfm,
		remarkAbbr,
		[
			remarkGithub,
			{
				repository: 'https://github.com/develapar/develapar.github.io.git',
			},
		],
	],
	rehypePlugins: [
		toc,
		rehypeSlug,
		rehypePrism,
		rehypeHighlight,
		rehypeCodeTitles,
		rehypeAccessibleEmojis,
		[
			rehypeAutolinkHeadings,
			{
				behavior: 'wrap',
				properties: {
					class: 'anchor',
				},
			},
		],
	],
	// 	layout: {
	// 		blog: './src/lib/layouts/BlogLayout.svelte',
	// 		snippet: './src/lib/layouts/SnippetsLayout.svelte',
	// 		newsletter: './src/lib/layouts/NewsLetterLayout.svelte',
	// 		_: './src/lib/layouts/BlogLayout.svelte',
	// 	},
};

export default config;
