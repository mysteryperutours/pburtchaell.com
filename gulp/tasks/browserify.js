var gulp = require('gulp');
var browserify = require('browserify');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');
var rev = require('gulp-rev');
var buffer = require('gulp-buffer');
var source = require('vinyl-source-stream');
var opt = require('../options.json');

module.exports = function () {
  browserify(opt.src + '/js/modules/work/app.js')
    .bundle()
    .pipe(plumber())
    .on('error', gutil.log)
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(rev())
    .pipe(gulp.dest(opt.dest + '/assets/js/apps/work/'))
    .pipe(rev.manifest())  
    .pipe(gulp.dest(opt.rev.js));  
};
