module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{css,rar,ico,png,svg,jpg,html,js,json,txt}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'dist/service-worker.js'
};