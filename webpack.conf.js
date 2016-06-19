try { require('dotenv').load(); } catch (e) { }
var _ = require('lodash');
var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');

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
      // ...entry is included in development and production configs
    },
    output: {
      publicPath: '/',
      path: path.join(__dirname, '/dist'),
      filename: '[name].[hash].js'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'APP_API_HOSTNAME': JSON.stringify(process.env.APP_API_HOSTNAME),
        'APP_API_VERSION': JSON.stringify(process.env.APP_API_VERSION),
        'FACEBOOK_APP_ID': JSON.stringify(process.env.FACEBOOK_APP_ID),
        'ANALYTICS_API_KEY': JSON.stringify(process.env.ANALYTICS_API_KEY),
        'GOOGLE_MAPS_API_KEY': JSON.stringify(process.env.GOOGLE_MAPS_API_KEY),
        'FILEPICKER_API_KEY': JSON.stringify(process.env.FILEPICKER_API_KEY)
      }),
      new HtmlWebpackPlugin({
        chunks: ['app'],
        template: 'app/template.ejs',
        inject: true,
        version: require('./package.json').version
      })
    ],
    resolve: {
      extensions: [
        '', '.js', '.less', '.woff', '.woff2', '.png', '.jpg', '.jpeg'
      ],
      modulesDirectories: ['node_modules', 'app']
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
          test: /\.css$/,
          loader: 'style!css!postcss'
        },
        {
          test: /\.woff$|\.woff2$|\.eot$|\.ttf$|\.png$|\.svg$|\.jpg$|\.jpeg$/,
          include: path.join(__dirname, 'app'),
          exclude: /node_modules/,
          loader: 'file'
        },
        {
          test: /\.md$/,
          loader: 'html!highlight!markdown'
        }
      ]
    },
    resolveLoader: {
      root: path.join(__dirname, 'node_modules')
    },
    /*postcss: function () {
      return [autoprefixer];
    }*/
  }, options.overrides);

  config.module.loaders = _.union(config.module.loaders, options.loaders);
  config.plugins = _.union(config.plugins, options.plugins);

  return config;
};
