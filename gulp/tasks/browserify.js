var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var opt = require('../options.json');

module.exports = function () {
  browserify(opt.src + '/js/app.js')
  .bundle()
  .pipe(source('components.js'))
  .pipe(gulp.dest(opt.dest + '/assets/js/'));
};

module.exports = function () {
  browserify(opt.src + '/js/modules/work/app.js')
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest(opt.dest + '/assets/js/apps/work/'));
};
