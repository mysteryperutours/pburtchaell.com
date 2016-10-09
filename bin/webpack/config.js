// @flow
import path from 'path';
import _ from 'lodash';
import webpack from 'webpack';
import pathToApp from './pathToApp';
import * as loaders from './loaders';

const DEBUG: boolean = process.argv.includes('--debug');
const VERBOSE: boolean = process.argv.includes('--verbose');

/**
 * @function getConfig
 */
const getConfig: Function = (options: Object) => {
  return _.merge({}, {
    cache: DEBUG,
    debug: DEBUG,

    context: pathToApp(),

    output: {
      path: path.resolve(__dirname, '../../../build/public'),
      publicPath: '/',
      sourcePrefix: ''
    },

    resolve: {
      root: pathToApp(),
      modulesDirectories: ['node_modules'],
      extensions: ['', '.js', '.json']
    },

    stats: {
      colors: false,
      reasons: DEBUG,
      hash: VERBOSE,
      version: VERBOSE,
      timings: false,
      chunks: VERBOSE,
      chunkModules: VERBOSE,
      cached: VERBOSE,
      cachedAssets: VERBOSE,
    },

    postcss(bundler) {
      return {
        default: [
          require('postcss-import')(),
          require('postcss-custom-properties')(),
          require('postcss-custom-selectors')(),
          require('postcss-calc')(),
          require('postcss-nesting')(),
          require('postcss-flexbugs-fixes')(),
          require('autoprefixer')({
            browsers: [
              'Android 2.3',
              'Android >= 4',
              'Chrome >= 35',
              'Firefox >= 31',
              'Explorer >= 9',
              'iOS >= 7',
              'Opera >= 12',
              'Safari >= 7.1'
            ]
          })
        ]
      };
    }
  }, options.extends, {
    module: {
      loaders: _.union([
        loaders.JS,
        loaders.CSS,
        loaders.JSON
      ], options.loaders)
    },
    plugins: _.union([
      new webpack.optimize.OccurrenceOrderPlugin(true)
    ], options.plugins)
  });
}

export default getConfig;
