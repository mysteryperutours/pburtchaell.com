'use strict';

var gulp = require('gulp');
var path = require('path');
var jshint = require('gulp-jshint');
var gutil = require('gulp-util');
var opt = require('../options.json');

module.exports = function () {
  var src = opt.src + '/**/*.js';
  var dest = { }; //

  gulp.src(src)
    .pipe(jshint( {
      undef: true,
      unused: true,
      node: true,
      browser: true,
      predef: [
        "angular"
      ]
    }))
    .pipe(jshint.reporter('default'))
    .pipe(gulp.dest());

};
