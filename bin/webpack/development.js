// @flow
import path from 'path';
import webpack from 'webpack';
import getConfig from './config';
import pathToApp from './pathToApp';

const DEBUG: boolean = process.argv.includes('--debug');
const VERBOSE: boolean = process.argv.includes('--verbose');

export default getConfig({
  extends: {
    entry: {
      app: [
        'webpack-hot-middleware/client',
        'babel-polyfill',
        'isomorphic-fetch',
        pathToApp('client')
      ]
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.BROWSER': true
    })
  ]
});
