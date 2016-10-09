// @flow
import path from 'path';
import webpack from 'webpack';
import getConfig from './config';

const DEBUG: boolean = process.argv.includes('--debug');
const VERBOSE: boolean = process.argv.includes('--verbose');

export default getConfig({
  extends: {
    entry: path.join(__dirname, '../../app/server'),
    output: {
      path: path.resolve(__dirname, '../../build'),
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.BROWSER': true,
      'process.env.NODE_ENV': '"development"'
    })
  ]
});
