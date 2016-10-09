// @flow
import path from 'path';
import webpack from 'webpack';
import getConfig from './config';
import pathToApp from './pathToApp';

const DEBUG: boolean = process.argv.includes('--debug');
const VERBOSE: boolean = process.argv.includes('--verbose');

export default getConfig({
  extends: {
    devtool: 'cheap-module-source-map',
    entry: {
      app: [
        'babel-polyfill',
        'isomorphic-fetch',
        pathToApp('client')
      ]
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.BROWSER': true,
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ]
});
