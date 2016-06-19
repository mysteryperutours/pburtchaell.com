var path = require('path');
var webpack = require('webpack');

module.exports = require('./webpack.conf')({
  overrides: {
    devtool: '#eval-source-map',
    entry: {
      app: [
        'webpack-hot-middleware/client',
        'babel-polyfill',
        path.resolve(__dirname, './app/client')
      ]
    },
    output: {
      publicPath: '/',
      path: path.join(__dirname, '/__webpack'),
      filename: '[name].[hash].js'
    },
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
