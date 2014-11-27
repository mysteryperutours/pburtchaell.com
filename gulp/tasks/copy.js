var gulp = require('gulp');
var opt = require('../options.json');

module.exports = function (callback) {
  gulp.src(opt.src + '/less/fonts/**')
   .pipe(gulp.dest(opt.dest + '/fonts/'));
  gulp.src(opt.src + '/img/**')
   .pipe(gulp.dest(opt.dest + '/img/'));
  callback();
};