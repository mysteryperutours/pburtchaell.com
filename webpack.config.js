var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  debug: true,
  entry: {
    common: [
      'webpack-dev-server/client?http://127.0.0.1:8000',
      'webpack/hot/only-dev-server',
      './source/js/common'
    ],
    works: './source/js/lib/works/app',
    work: [
      //'webpack-dev-server/client?http://127.0.0.1:8000',
      //'webpack/hot/only-dev-server',
      './source/js/work'
    ]
  },
  output: {
    publicPath: '/public/js/bundles/',
    path: path.join(__dirname, '/dest/public/js/bundles/'),
    filename: '[name].js'
  },
  resolveLoader: {
    modulesDirectories: [
      'node_modules'
    ]
  },
  resolve: {
    extensions: ['','.css','.js','.jsx','.json']
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
      development: JSON.stringify(JSON.parse(process.env.DEVELOPMENT || 'true')),
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
        test: /\.jsx$/,
        loaders: ['react-hot', 'jsx-loader?harmony'], // ?harmony enables ES6
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loaders: ['react-hot', '6to5'] // ?harmony enables ES6
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=8192' // inline base64 URLs for <=8k images, direct URLs for the rest
      }
    ]
  }
};
