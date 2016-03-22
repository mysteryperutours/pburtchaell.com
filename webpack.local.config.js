var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

var pathToReact = '/node_modules/react/react.js';
var pathToReactRouter = '/node_modules/react-router/lib/index.js';

/**
 * This is the Webpack configuration file for local development. It contains
 * local-specific configuration such as the React Hot Loader, as well as:
 * - The entry point of the application
 * - Where the output file should be
 * - Which loaders to use on what files to properly transpile the source
 * For more information, see: http://webpack.github.io/docs/configuration.html
 */
module.exports = {

  // Efficiently evaluate modules with source maps
  devtool: 'eval',

  cache: true,

  entry: {
    app: [
      'webpack-hot-middleware/client',
      path.resolve(__dirname, './app/client')
    ]
  },

  resolve: {
    extensions: ['', '.js', '.less', '.woff', '.woff2', '.png', '.jpg'],
    modulesDirectories: ['node_modules', 'app'],
    alias: {
      'react-router': path.join(__dirname, pathToReactRouter)
    }
  },

  output: {
    publicPath: '/',
    path: path.join(__dirname, '/dist'),
    filename: '[name].js'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new webpack.HotModuleReplacementPlugin(),
    /**
     * An optional plugin that tells the reloader to not reload if there is a
     * syntax error in your code. The error is simply printed in the console,
     * and the component will reload when you fix the error.
     */
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'app'),
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.less$/,
        include: path.join(__dirname, 'app'),
        exclude: /node_modules/,
        loader: 'style!css!postcss!less'
      },
      {
        test: /\.woff$|\.woff2$|\.eot$|\.ttf$|\.png$|\.svg$|\.jpeg$/,
        include: path.join(__dirname, 'app'),
        exclude: /node_modules/,
        loader: 'file'
      },
      {
        test: /\.md$/,
        loader: 'html!highlight!markdown'
      }
    ],
    noParse: [
      pathToReact,
      pathToReactRouter
    ]
  },

  postcss: function () {
    return [autoprefixer];
  }
};
