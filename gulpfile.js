var gulp = require('gulp');
var opt = require('./gulp/options.json');

/**
 * @object task
 * @desc Contains the modules for each task.
 */
var task = {
  styles: require('./gulp/tasks/styles'),
  scripts: require('./gulp/tasks/scripts'),
  browserify: require('./gulp/tasks/browserify'),
  assemble: require('./gulp/tasks/assemble'),
  utils: require('./gulp/utils'),
  server: require('./gulp/tasks/server')
};

// Asset pipeline
gulp.task('styles', task.styles);
gulp.task('scripts', task.scripts);
gulp.task('browserify', task.browserify);

// Utility scripts
gulp.task('clean', task.utils.clean);
gulp.task('copy', task.utils.copy);
gulp.task('watch', task.utils.watch);

// Build the site
gulp.task('assemble', task.assemble);

// Launch a web server
gulp.task('serve', function () {
  var server = task.server;
  server.init({
    port: 8000,
    root: opt.dest
  }, server.listen);
  gulp.watch('*.html', server.refresh);
});

// Default task
gulp.task('default', ['styles', 'scripts', 'browserify', 'copy', 'assemble']);

// Development task
gulp.task('development', function (cb) {
  var argv = require('minimist')(process.argv.slice(2));
  if (argv.serve) {

    if (typeof argv.serve === 'number') { // If a port number is specified, use it instead of the default
      opt.port = argv.serve;
      if (opt.port.toString().length != 4) {
        throw new Error('Server port must be a 4 digit number');
      }
    };
    
    var server = task.server;
    server.init({
      port: opt.port || 8000,
      root: opt.dest
    }, server.listen);

    gulp.watch('*.html', server.refresh);
  };
  task.utils.watch(); // Watch files for changes
});

