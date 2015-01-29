var path = require('path');
var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var server = require('webpack-dev-server');
var config = require('../../webpack.config');

module.exports = function (callback) {

  var port = process.env.port || 3000;

  new server(webpack(config), {
    contentBase: gulp.cache.opt.dest,
    publicPath: config.output.publicPath,
    path: '/dest',
    hot: true,
    quiet: false,
    noInfo: false,
    lazy: true,
    watchDelay: 300
  }).listen(port, 'localhost', function (error, result) {
    if (error) {
      new gutil.PluginError('server', error)
    } else {
      gutil.log('Listening to http://localhost:' + port);
    }
  });

  callback();

};
