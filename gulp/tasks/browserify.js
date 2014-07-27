var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var opt = require('../options.json');

module.exports = function () {
  return function () {
    browserify(opt.src + '/js/app.js')
    .bundle()
    .pipe(source('components.js'))
    .pipe(gulp.dest(opt.dest + '/assets/js/'));
  }
};
