var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: path.resolve(__dirname, './app/client'),
  },
  output: {
    publicPath: '/',
    path: path.join(__dirname, '/dist'),
    filename: '[name].[hash].js',
    sourceMapFilename: '[file].map'
  },
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
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      chunks: ['app'],
      template: 'app/template.ejs',
      inject: 'body',
      version: require('./package.json').version
    })
  ],
  resolve: {
    extensions: ['', '.js', '.less', '.woff', '.woff2', '.png', '.jpg'],
    modulesDirectories: ['node_modules', 'app']
  },
  postcss: function () {
    return [autoprefixer];
  }
};
