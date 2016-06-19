var gulp = require('gulp');
var resize = require('gulp-image-resize');
var rename = require('gulp-rename');

gulp.task('images', function () {
  var format = 'png';

  // Make the retina sized images
  gulp.src('./images/**/*')
    .pipe(resize({
      width: 2400,
      format: format
    }))
    .pipe(rename(function (path) { path.basename += '@2x'; return path; }))
    .pipe(gulp.dest('./app/images'));

  // Make the regular sized images
  gulp.src('./images/**/*')
    .pipe(resize({
      width: 1200,
      format: format
    }))
    .pipe(rename(function (path) { path.basename += '-large'; return path; }))
    .pipe(gulp.dest('./app/images'));

  // Make smaller sized images
  gulp.src('./images/**/*')
    .pipe(resize({
      width: 400,
      format: 'jpeg' // Use JPEG for smaller sized images
    }))
    .pipe(rename(function (path) { path.basename += '-small'; return path; }))
    .pipe(gulp.dest('./app/images'));
});
