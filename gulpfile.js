var gulp = require('gulp');
var opt = require('./gulp/options.json');

var tasks = {
  styles: require('./gulp/tasks/styles.js'),
  scripts: require('./gulp/tasks/scripts.js'),
  browserify: require('./gulp/tasks/browserify.js'),
  utils: require('./gulp/utils/index.js')
}
  server: require('./gulp/tasks/server')

// Asset pipeline
gulp.task('styles', tasks.styles());
gulp.task('scripts', tasks.scripts());
gulp.task('browserify', tasks.browserify());

// Utility scripts
gulp.task('clean', tasks.utils.clean());
gulp.task('copy', tasks.utils.copy());
gulp.task('watch', tasks.utils.watch());

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
