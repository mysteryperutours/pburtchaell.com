// @flow
import path from 'path';
import pathToApp from './pathToApp';

const DEBUG: boolean = process.argv.includes('--debug');
const VERBOSE: boolean = process.argv.includes('--verbose');

export const JS = {
  test: /\.js?$/,
  loader: 'babel-loader',
  include: [pathToApp()],
  exclude: /node_modules/,
  query: {
    cacheDirectory: DEBUG,
    babelrc: false,
    presets: [
      'react',
      'es2015',
      'stage-0',
    ],
    plugins: [
      'transform-runtime',
      'transform-flow-strip-types',
      ...(DEBUG ? [] : [
        'transform-react-remove-prop-types',
        'transform-react-constant-elements',
        'transform-react-inline-elements',
      ])
    ]
  }
};

/**
 * @global CSS
 */
export const CSS = {
  test: /\.css$/,
  include: [pathToApp()],
  exclude: /node_modules/,
  loaders: [
    'css-loader',
    'postcss-loader?pack=default'
  ]
};

export const JSON = {
  test: /\.json$/,
  loaders: [
    'json'
  ]
};
