import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import gutil from 'gulp-util';
import config from './webpack.local.config';

const PORT = process.env.npm_package_config_DEV_SERVER_PORT;
const ADDRESS = process.env.npm_package_config_DEV_SERVER_ADDRESS;

/**
 * Webpack development server
 * http://webpack.github.io/docs/webpack-dev-server.html
 */
new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  contentBase: `http://${ADDRESS}:${PORT}`,
  hot: true,
  quiet: false,
  inline: true,
  noInfo: true,
  historyApiFallback: true,

  // Remove console.log mess during watch.
  stats: {
    assets: false,
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false
  }
}).listen(PORT, ADDRESS, error => {
  if (error) {
    throw new gutil.PluginError('webpack-dev-server', error);
  } else {
    gutil.log('[webpack-dev-server]', `WebPack development server running at http://${ADDRESS}:${PORT}`);
  }
});
