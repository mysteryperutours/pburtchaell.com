var gulp = require('gulp');
var browserify = require('browserify');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var opt = require('../options.json');

module.exports = function () {
  browserify(opt.src + '/js/modules/work/app.js')
  .bundle()
  .pipe(plumber())
  .on('error', gutil.log)
  .pipe(source('app.js'))
  .pipe(gulp.dest(opt.dest + '/assets/js/apps/work/'));
};
