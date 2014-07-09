var gulp = require('gulp');
var del = require('del');

gulp.task('clean', 'Delete all contents of the app/public directory.', function (cb) {
  del(['./dist'],cb);
});
