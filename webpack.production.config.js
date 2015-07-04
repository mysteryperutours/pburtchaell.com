var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    work: './app/app',
  },
  output: {
    publicPath: '/',
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.WEB_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'app/template.html',
      hash: true,
      minify: true,
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel?stage=0'],
      },
      {
        test: /\.less$/,
        loader: 'style!css!autoprefixer!less'
      },
      {
        test: /\.woff$|\.woff2$|\.png$|\.jpg$/,
        loader: 'file'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.css', '.woff', '.woff2', '.png', '.jpg'],
    modulesDirectories: ['node_modules', 'app'],
  },
};
