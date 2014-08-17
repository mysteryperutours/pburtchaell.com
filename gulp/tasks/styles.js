var gulp = require('gulp');
var path = require('path');
var less = require('gulp-less');
var gutil = require('gulp-util');
var prefix = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');
var plumber = require('gulp-plumber');
var opt = require('../options.json');
var header = require('../utils/header');

module.exports = function () {
  'use strict';

  var stylesheets = require(path.join(__dirname,'../../src/less/config.json'));

  /**
   * compile();
   * @desc Compiles a LESS source file to CSS using gulp
   * @param {string} 'stylesheet'
   */
  var compile = function (stylesheet) {
    var lessSrc = opt.src + '/less/' + stylesheet.source;
    var cssDest = opt.dest + '/assets/css';

    // Print the I/O to terminal.
    var chalk = require('chalk');
    gutil.log( 
      'Compiling ' + 
      chalk.cyan(opt.src + '/' + stylesheet.source) + ' to ' + 
      chalk.magenta(opt.dest + '/css/assets/' + stylesheet.filename) + '.'
    );

    // Use gulp to compile.
    gulp.src(lessSrc)
      .pipe(plumber())
      .pipe(less({paths: [ path.join(__dirname, 'less', 'includes') ] }))
      .pipe(prefix('last 2 version','safari 5','opera 12.1'))
      .pipe(header(stylesheet.description))
      .pipe(minify())
      .pipe(gulp.dest(cssDest));    
  };

  for (var i in stylesheets) {
    var stylesheet = stylesheets[i];
    compile(stylesheet);
  };  
};
