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
gulp.task('default', ['styles', 'scripts', 'browserify', 'copy']);

// Development task
gulp.task('development', ['default', 'serve', 'watch']);

