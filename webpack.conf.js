try { require('dotenv').load(); } catch (e) { }
var _ = require('lodash');
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// Post CSS modules
var autoprefixer = require('autoprefixer');

/**
 * @function appPathTo
 * @description Get the path to a folder within the application.
 * @returns {string} path
 */
var appPathTo = _.partial(function () {
  return path.join(__dirname, path.join.apply(path, arguments));
}, 'app');

module.exports = function (options) {
  var config = _.merge({}, {
    entry: {
      app: _.union([
        'babel-polyfill',
        path.resolve(__dirname, './app/styles'),
        path.resolve(__dirname, './app/client')
      ], options.entry)
    },
    output: {
      publicPath: '/',
      path: path.join(__dirname, '/dist'),
      filename: '[name].js'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }),
      new HtmlWebpackPlugin({
        chunks: ['app'],
        template: 'app/template.ejs',
        inject: true,
        minify: {
          collapseWhitespace: true
        },
        version: require('./package.json').version
      })
    ],
    resolve: {
      extensions: [
        '', '.js', '.less', '.woff', '.woff2', '.png', '.jpg', '.jpeg'
      ],
      modulesDirectories: ['node_modules', 'app'],
      alias: {
        'app-core': appPathTo('components')
      }
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
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
          test: /\.woff$|\.woff2$|\.eot$|\.ttf$|\.png$|\.svg$|\.jpg$|\.jpeg$/,
          include: path.join(__dirname, 'app'),
          exclude: /node_modules/,
          loader: 'file'
        }
      ]
    },
    resolveLoader: {
      root: path.join(__dirname, 'node_modules')
    },
    postcss: function () {
      return [
        autoprefixer
      ];
    }
  }, options.overrides);

  config.module.loaders = _.union(config.module.loaders, options.loaders);
  config.plugins = _.union(config.plugins, options.plugins);

  return config;
};
