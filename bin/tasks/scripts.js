var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
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
  browserify(opt.src + '/js/modules/liker/index.js')
    .transform(reactify) // Transform RSX
    .bundle()
    .pipe(plumber())
    .on('error', gutil.log)
    .pipe(source('liker.js'))
    .pipe(buffer())
    .pipe(gulp.dest(opt.dest + '/public/js/'))
};
