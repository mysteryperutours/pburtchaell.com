var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = require('./webpack.conf')({
  entry: [],
  overrides: {
    devtool: 'cheap-module-source-map',
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    //new ExtractTextPlugin('[name].[hash].css')
  ]
});
