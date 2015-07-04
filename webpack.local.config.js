var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * This is the Webpack configuration file for local development. It contains
 * local-specific configuration including:
 * - The entry point of the application
 * - Where the output file should be
 * - Which loaders to use on what files to properly transpile the source
 * For more information, see: http://webpack.github.io/docs/configuration.html
 */
module.exports = {
  devtool: 'eval-source-map',
  entry: {
    app: [
      'webpack-dev-server/client?//localhost:8000',
      'webpack/hot/only-dev-server',
      './app/app',
    ]
  },
  output: {
    publicPath: '//localhost:8000/',
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.WEB_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.BASE_URL': 'http://localhost:8000/',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'app/template.html',
      hash: true,
    }),
    new webpack.NoErrorsPlugin(),
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
  devServer: {
    contentBase: './build',
    quiet: true,
    hot: true,
    inline: true,
  }
};
