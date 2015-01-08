var gulp = require('gulp');
var path = require('path');
var jshint = require('gulp-jshint');
var gutil = require('gulp-util');

module.exports = function (callback) {

  return gulp.src(gulp.cache.opt.src + '/**/*.js')
    .pipe(jshint( {
      undef: true,
      unused: true,
      node: true,
      browser: true
    }))
    .pipe(jshint.reporter('default'));

  callback();

};
