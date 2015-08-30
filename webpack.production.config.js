var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * Webpack configuration file for production.
 */
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
        exclude: /node_modules/,
        loader: 'babel?stage=0'
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
  plugins: [
    new webpack.DefinePlugin({
      PARSE_APPLICATION_ID: JSON.stringify(process.env.PARSE_APPLICATION_ID),
      PARSE_REST_API_KEY: JSON.stringify(process.env.PARSE_REST_API_KEY),
      PARSE_URL: JSON.stringify(process.env.PARSE_URL),
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      DEV_TOOLS: false
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      template: 'app/template.html'
    })
  ],
  eslint: {
    configFile: '.eslintrc'
  },
  resolve: {
    extensions: ['', '.js', '.less', '.woff', '.woff2', '.png', '.jpg'],
    modulesDirectories: ['node_modules', 'app']
  }
};
