const config = {
	syntax: 'postcss-scss', //This module does not compile SCSS. It simply parses mixins as custom at-rules & variables as properties, so that PostCSS plugins can then transform SCSS source code alongside CSS
	plugins: {
		'postcss-import': {},
		'tailwindcss/nesting': 'postcss-nesting',
		tailwindcss: {},
		autoprefixer: {},
		...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}), // is --minify in tailwindcss
	},
};

module.exports = config;
