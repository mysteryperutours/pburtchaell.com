var gulp = require('gulp');
var opt = require('./gulp/options.json');

var tasks = {
  styles: require('./gulp/tasks/styles.js'),
  scripts: require('./gulp/tasks/scripts.js'),
  browserify: require('./gulp/tasks/browserify.js'),
  utils: require('./gulp/utils/index.js')
}

// Asset pipeline
gulp.task('styles', tasks.styles());
gulp.task('scripts', tasks.scripts());
gulp.task('browserify', tasks.browserify());

// Utility scripts
gulp.task('clean', tasks.utils.clean());
gulp.task('copy', tasks.utils.copy());
gulp.task('watch', tasks.utils.watch());

gulp.task('default', ['styles', 'scripts', 'browserify', 'copy']);
