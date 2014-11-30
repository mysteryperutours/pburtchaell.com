var gulp = require('gulp');
var minimist = require('minimist');
var opt = require('../options.json');

module.exports = function (callback) {

  var argv = minimist(process.argv.slice(2));

  if (argv.serve) {
    if (typeof argv.serve === 'number') { // If a port number is specified, use it instead of the default
      opt.port = argv.serve;
      if (opt.port.toString().length != 4) {
        throw new Error('Server port must be a 4 digit number');
      }
    };

    var server = require('./server');

    server.init({
      port: opt.port || 8000,
      root: opt.dest
    }, server.listen);

    gulp.watch(opt.dest + '/**/*.html', server.refresh);
  };

  gulp.task('scripts', require('../tasks/scripts.js'));
  
  gulp.watch(opt.src + '/js/**/*.js', ['scripts']);
  
};
