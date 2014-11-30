var gulp = require('gulp');
var browserify = require('browserify');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');
var rev = require('gulp-rev');
var buffer = require('gulp-buffer');
var source = require('vinyl-source-stream');
var opt = require('../options.json');

module.exports = function () {
  browserify(opt.src + '/js/app.js')
    .bundle()
    .pipe(plumber())
    .on('error', gutil.log)
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest(opt.dest + '/public/js/'))
};
