var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = require('./webpack.conf')({
  overrides: {
    devtool: 'cheap-module-source-map',
    entry: {
      app: [
        'babel-polyfill',
        path.resolve(__dirname, './app/client')
      ]
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
          loader: ExtractTextPlugin.extract('style', 'css!postcss!less')
        },
        {
          test: /\.css$/,
          loader: 'style!css!postcss'
        },
        {
          test: /\.woff$|\.woff2$|\.eot$|\.ttf$|\.png$|\.svg$|\.jpg$/,
          include: path.join(__dirname, 'app'),
          exclude: /node_modules/,
          loader: 'file'
        }
      ]
    }
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('[name].[hash].css')
  ]
});
