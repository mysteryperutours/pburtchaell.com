/* eslint-disable no-var, import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');
const AnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const ENTRY = {
  app: [
    './app/styles/index.css',
    './app/index.js'
  ]
};

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
  new webpack.NoEmitOnErrorsPlugin()
];

/**
 * Production Plugins
 * The following plugins will be used for production.
 */
const PRODUCTION_PLUGINS = [
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      screw_ie8: true,
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
const config = {
  cache: true,
  bail: true,
  entry: ENTRY,
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
        use: 'babel-loader',
        include: [
          getAbsolutePathtoAlias()
        ],
        exclude: [
          getAbsolutePathtoModule()
        ]
      },
      {
        test: /\.css?$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader'],
          fallback: 'style-loader'
        }),
        include: [
          getAbsolutePathtoAlias(),
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: 'file-loader'
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
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: path.join(__dirname, 'app/index.ejs'),
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
    new ExtractTextPlugin('style.css'),
    new webpack.optimize.OccurrenceOrderPlugin(), // Optimize chunk id length
    ...(DEVELOPMENT ? DEVELOPMENT_PLUGINS : PRODUCTION_PLUGINS)
  ]
};

if (!DEVELOPMENT) {
  config.resolve.alias = Object.assign(config.resolve.alias, {
    react: getAbsolutePathtoModule([
      'react/dist/react.min.js'
    ]),
    'react-dom': getAbsolutePathtoModule([
      'react-dom/dist/react-dom.min.js'
    ]),
    'react-router': getAbsolutePathtoModule([
      'react-router/umd/react-router.min.js'
    ]),
    'react-router-dom': getAbsolutePathtoModule([
      'react-router-dom/umd/react-router-dom.min.js'
    ])
  });
}

module.exports = config;
