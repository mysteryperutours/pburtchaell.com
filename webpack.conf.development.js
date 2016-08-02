var path = require('path');
var webpack = require('webpack');

module.exports = require('./webpack.conf')({
  entry: [
    'webpack-hot-middleware/client'
  ],
  overrides: {
    devtool: '#eval-source-map'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  externals: {
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  }
});
