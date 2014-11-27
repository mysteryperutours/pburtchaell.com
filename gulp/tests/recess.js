var gulp = require('gulp');
var recess = require('gulp-recess');
var opt = require('../options.json');

module.exports = function (callback) {
  return gulp.src(opt.src + '/less/**/*.less')
    .pipe(recess())
    .pipe(recess.reporter());
};
