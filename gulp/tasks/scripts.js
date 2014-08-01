var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var header = require('../utils/header.js');
var opt = require('../options.json');

module.exports = function () {
  return function () {
    'use strict';

    var dest = opt.dest + '/assets/js/';
    var src;

    /**
     * components.js
     */
    src = [
      './bower_components/fastclick/lib/fastclick.js',
      './bower_components/headroom.js/dist/headroom.js',
      './src/js/vendor/echo.js'
    ];
    gulp.src(src)
      .pipe(concat('components.js'))
      .pipe(uglify())
      .pipe(header('Primary JavaScript'))
      .pipe(gulp.dest(dest));

    src = [
      './bower_components/jquery/dist/jquery.js',
      './bower_components//ajaxchimp/jquery.ajaxchimp.js'
    ];
    gulp.src(src)
      .pipe(concat('components.js'))
      .pipe(uglify())
      .pipe(header('Primary JavaScript'))
      .pipe(gulp.dest(dest + '/static/'));

    /**
     * ie.js
     * @desc Provide support to IE 8-9
     */
    src = [
      './bower_components/html5shiv/dist/html5shiv.js',
      './bower_components/respond/dest/respond.min.js',
      './bower_components/placeholder/dist/placeholder.min.js',
      './bower_components/REM-unit-polyfill/js/rem.js'
    ];
    gulp.src(src)
      .pipe(concat('ie.js'))
      .pipe(uglify())
      .pipe(header('Provides basic IE 8 - 9 support'))
      .pipe(gulp.dest(dest))

    /**
     * work.js
     */
    src = [
      './bower_components/fit.js/fit.js',
      './bower_components/pace/pace.js'
    ];
    gulp.src(src)
      .pipe(concat('work.js'))
      .pipe(uglify())
      .pipe(header('Primary JavaScript'))
      .pipe(gulp.dest(dest));

    /**
     * angular.js
     */
    src = [
      './bower_components/angular/angular.js',
      './bower_components/angular-animate/angular-animate.js',
      './bower_components/angular-route/angular-route.js'
    ];
    gulp.src(src)
      .pipe(concat('angular.js'))
      .pipe(uglify())
      .pipe(header('Primary JavaScript'))
      .pipe(gulp.dest(dest));

    src = [ './src/js/modules/downbeat/app.js'];
    gulp.src(src)
      .pipe(concat('downbeat-app.js'))
      .pipe(uglify({ mangle: false }))
      .pipe(header('Primary JavaScript'))
      .pipe(gulp.dest(dest));
  }
};
