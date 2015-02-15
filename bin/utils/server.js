var path = require('path');
var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var server = require('webpack-dev-server');
var config = require('../../webpack.config');

module.exports = function (callback) {

  var port = process.env.port || 8000;

  new server(webpack(config), {
    contentBase: gulp.cache.opt.dest,
    publicPath: config.output.publicPath,
    path: '/dest',
    hot: true,
    noInfo: true,
    watchDelay: 300
  }).listen(port, '127.0.0.1', function (error, result) {
    if (error) {
      new gutil.PluginError('server', error)
    } else {
      gutil.log('Listening to http://127.0.0.1:' + port);
    }
  });

  callback();

};
