bin = ./node_modules/.bin

# Use io.js harmony flags to enable ES6 features
node_flags = --harmony --harmony_modules --harmony_arrow_functions
node =node $(node_flags)

# Use the relative path to WebPack so it doesn't have to be installed globally
webpack_flags = --config
webpack = $(bin)/webpack $(webpack_flags)

# Production build task
# This task will build HTML and bundle assets in a production environment
# which will result in smaller file sizes, but a longer build.
build:
	rm -rf ./dist
	NODE_ENV=production $(webpack) webpack.production.config.js


# Start (Development build task)
# This task will build HTML, bundle assets with source maps, and serve
# files. When source files change, the build will run again. Generally,
# this build is faster than the production build, but the files are larger.
#
# Also, as a note, this could have been left in package.json instead of
# adding a task in the Makefile, but I feel that it is neater to keep
# all tasks here.
start:
	rm -rf ./dist
	NODE_ENV=development $(node) webpack.local.server.js
