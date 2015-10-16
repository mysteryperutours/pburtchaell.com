import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const pathToReact = '/node_modules/react/react.js';
const pathToReactRouter = '/node_modules/react-router/lib/index.js';
const pathToHistory = '/node_modules/react-router/lib/BrowserHistory.js';
const pathToRedux = '/node_modules/redux/lib/index.js';
const pathToReduxReact = '/node_modules/react-redux/lib/index.js';
const pathToBabel = '/node_modules/babel/polyfill.js';

const PORT = process.env.npm_package_config_DEV_SERVER_PORT;
const ADDRESS = process.env.npm_package_config_DEV_SERVER_ADDRESS;

require('dotenv').load();

/**
 * This is the Webpack configuration file for local development. It contains
 * local-specific configuration such as the React Hot Loader, as well as:
 * - The entry point of the application
 * - Where the output file should be
 * - Which loaders to use on what files to properly transpile the source
 * For more information, see: http://webpack.github.io/docs/configuration.html
 */
export default {

  // Efficiently evaluate modules with source maps
  devtool: 'eval',

  // Cache the build
  cache: true,

  entry: {
    app: [
      `webpack-dev-server/client?http://${ADDRESS}:${PORT}`,
      'webpack/hot/only-dev-server',
      './app/client'
    ]
  },

  /**
   * Instead of making Webpack go through React and all its dependencies,
   * you can override the behavior in development.
   */
  resolve: {
    extensions: ['', '.js', '.less', '.woff', '.woff2', '.png', '.jpg'],
    modulesDirectories: ['node_modules', 'app'],
    alias: {
      'react-router/lib/BrowserHistory': path.join(__dirname, pathToHistory),
      'react-router': path.join(__dirname, pathToReactRouter),
      'redux': path.join(__dirname, pathToRedux),
      'redux-react': path.join(__dirname, pathToReduxReact),
      'babel/polyfill': path.join(__dirname, pathToBabel)
    }
  },

  /**
   * This will not actually create a bundle.js file in ./dist.
   * It is used by the dev server for dynamic hot loading.
   */
  output: {
    publicPath: '/',
    path: path.join(__dirname, '/dist'),
    filename: '[name].js'
  },

  plugins: [
    new webpack.DefinePlugin({
      PARSE_APPLICATION_ID: JSON.stringify(process.env.PARSE_APPLICATION_ID),
      PARSE_REST_API_KEY: JSON.stringify(process.env.PARSE_REST_API_KEY),
      PARSE_URL: JSON.stringify(process.env.PARSE_URL),
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      DEV_TOOLS: process.env.NODE_ENV === 'production' ? false : false
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'app/template.html'
    }),

    /**
     * An optional plugin that tells the reloader to not reload if there is a
     * syntax error in your code. The error is simply printed in the console,
     * and the component will reload when you fix the error.
     */
    new webpack.NoErrorsPlugin()
  ],

  /**
   * Transform JS source code using Babel configured to Stage 0, transform CSS
   * source code using PostCSS and require binary files with file-loader.
   */
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'app'),
        exclude: /node_modules/,
        loader: 'react-hot!babel?stage=0&loose[]=es6.modules'
      },
      {
        test: /\.less$/,
        include: path.join(__dirname, 'app'),
        exclude: /node_modules/,
        loader: 'style!css!autoprefixer!less'
      },
      {
        test: /\.woff$|\.woff2$|\.png$|\.jpg$|\.jpeg$/,
        include: path.join(__dirname, 'app'),
        exclude: /node_modules/,
        loader: 'file'
      },
      {
        test: /\.md$/,
        loader: 'html!highlight!markdown'
      }
    ],
    noParse: [
      pathToReact,
      pathToReactRouter,
      pathToRedux,
      pathToReduxReact,
      pathToBabel
    ]
  }
};
