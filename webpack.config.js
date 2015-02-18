var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  debug: true,
  entry: {
    common: './web_modules/common/index',
    liker: './web_modules/liker/index',
    works: './web_modules/works/app',
    work: './web_modules/work/app'
  },
  output: {
    publicPath: '/public/js/bundles/',
    path: path.join(__dirname, '/dest/public/js/bundles/'),
    filename: '[name].js'
  },
  resolveLoader: {
    modulesDirectories: [
      'node_modules',
      'web_modules'
    ]
  },
  resolve: {
    extensions: ['','.css','.js','.json']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      ENV_DEVELOPMENT: JSON.stringify(JSON.parse(process.env.DEVELOPMENT || 'true')),
      staging: JSON.stringify(JSON.parse(process.env.STAGING || 'false'))
    })
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.js$/,
        loaders: ['6to5']
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=8192' // inline base64 URLs for <=8k images, direct URLs for the rest
      }
    ]
  }
};
