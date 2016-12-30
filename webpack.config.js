/* eslint-disable no-var, import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');
const AnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

// The environment Node is running, which defaults to development
const NODE_ENV = process.env.NODE_ENV || 'development';

// Is this a development environment?
const DEVELOPMENT = NODE_ENV === 'development';

/**
 * @function getAbsolutePathtoAlias
 * @description Get the absolute path to a file/folder in the application
 * @param {string} relativePathToAlias The relative path to the alias
 * @returns {string} The absolute path to the alias
 */
const getAbsolutePathtoAlias = (relativePathToAlias = '') =>
  path.join(__dirname, 'app', relativePathToAlias);

/**
 * @function getAbsolutePathtoModule
 * @description Get the absolute path to a file in node_modules
 * @param {string} relativePathToModule The releative path
 * @returns {string} The absolute path
 */
const getAbsolutePathtoModule = (relativePathToModule = '') => {
  const paths = [__dirname, 'node_modules'].concat(relativePathToModule);
  return path.join.apply(null, paths);
};

/**
 * Development Plugins
 * The following plugins will be used for development.
 */
const DEVELOPMENT_PLUGINS = [
  // @TODO: new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  /*new AnalyzerPlugin({
    openAnalyzer: false, // Do not automatically open browser
    logLevel: 'silent' // Do not log information
  })*/
];

/**
 * Production Plugins
 * The following plugins will be used for production.
 */
const PRODUCTION_PLUGINS = [
  new webpack.optimize.CommonsChunkPlugin('common'),
  new webpack.optimize.UglifyJsPlugin({
    // sourceMap: true,
    compress: {
      sequences: true,
      dead_code: true,
      unused: true
    },
    output: {
      comments: false
    }
  }),
  new CompressionPlugin({
    asset: '[path].gz[query]',
    algorithm: 'gzip',
    threshold: 10240,
    minRatio: 0.8
  }),
  new AnalyzerPlugin({
    analyzerMode: 'static', // Generate a single report file
    openAnalyzer: true, // Automatically open browser
    logLevel: 'silent' // Do not log information
  })
];

/**
 * Export the WebPack configuration, which will change depending
 * on the environment.
 */
module.exports = {
  cache: true,
  bail: true,
  entry: {
    app: [
      // For development environment, include MHR client
      // @TODO: ...(DEVELOPMENT ? ['webpack-hot-middleware/client'] : []),

      // For all environments, include the Babel polyfill and normalize.css
      'babel-polyfill', // ES2016+ polyfill
      'whatwg-fetch', // Fetch API polyfill
      './app/fonts/fonts',
      'normalize',
      './app/index.js'
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    pathinfo: true,
    filename: '[name].[hash:8].js',
    chunkFilename: '[name].[hash:8].chunk.js'
  },
  target: 'web',
  devtool: DEVELOPMENT ? 'eval' : 'cheap-module-source-map',
  stats: 'none',
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        include: [
          getAbsolutePathtoAlias()
        ],
        exclude: [
          getAbsolutePathtoModule()
        ],
        query: {
          babelrc: true
        }
      },
      {
        test: /\.css?$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loaders: 'css-loader?modules-true&importLoaders-1&camelCase!postcss-loader?sourceMap-inline'

          /**
           * @TODO see webpack/extract-text-webpack-plugin #322
           * [{
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: 'inline'
            }
          }]*/
        }),
        include: [
          getAbsolutePathtoAlias(),
          getAbsolutePathtoModule([
            'normalize.css', 'normalize.css'
          ])
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff)(\?.*)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.(woff2)(\?.*)?$/,
        loader: 'url-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.css'],
    modules: [
      getAbsolutePathtoModule(),
      getAbsolutePathtoAlias()
    ],
    alias: {
      // React aliases for components, routes and the router
      'app-components': getAbsolutePathtoAlias('components'),
      'app-routes': getAbsolutePathtoAlias('routes'),
      'app-router': getAbsolutePathtoAlias('router'),

      // Redux aliases for actions, constans, reducers and the store
      'app-actions': getAbsolutePathtoAlias('actions'),
      'app-constants': getAbsolutePathtoAlias('constants'),
      'app-reducers': getAbsolutePathtoAlias('reducers'),
      'app-store': getAbsolutePathtoAlias('store'),

      // misc. + node_module aliases
      normalize: getAbsolutePathtoModule([
        'normalize.css', 'normalize.css'
      ])
    }
  },
  performance: {
    hints: DEVELOPMENT ? false : 'warning', // Ignore performance in development
    maxEntrypointSize: 400000 // 4000 bytes === 400 kilobytes
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
      DATABASE_URL: JSON.stringify('folkloric-house-95904.firebaseio.com')
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: path.join(__dirname, 'app/index.ejs'),
      // @TODO: favicon: path.join(__dirname, 'public/favicon.ico'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.OccurrenceOrderPlugin(), // Optimize chunk id length
    ...(DEVELOPMENT ? DEVELOPMENT_PLUGINS : PRODUCTION_PLUGINS)
  ]
};
