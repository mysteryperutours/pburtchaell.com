build:
	rm -rf ./dist
	@NODE_ENV=production `npm bin`/webpack --config webpack.production.config.js
