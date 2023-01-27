/* jshint esversion: 9 */

module.exports = {
	'*.{js,ts,json,svelte}': ['npm run banners', 'git add ./static/images/blogs/**/banner.jpg'],
	'*.{js,ts,json,svelte}': ['npm run format', 'git add'],
	'./src/**/*.{svelte,ts,test}': ['npm run format', 'npm run lint:fix', 'git add'],
	'./.{ts,cjs,js}': ['npm run lint:fix', 'git add'],
	// '*.{jpg,jpeg,gif,png}': ['npm run optimize:image', 'git add'],
};
