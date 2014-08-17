var assemble = require('gulp-assemble');
var plumber = require('gulp-plumber');
var rte = require('gulp-rte')
var gulp = require('gulp');

module.exports = function () {
  
  'use strict';

  var src = [
    './pages/*.hbs'
  ];

  var options = {
    data: './src/data/*.{json,yml}',
    partials: './tpl/partials/*.hbs',
    layoutdir: './tpl/layouts/'
  };

  gulp.src('./pages/*.{hbs,md}')
  .pipe(plumber())
  .pipe(assemble(options))
  .pipe(rte(':basename/index:ext'))
  .pipe(gulp.dest('./dest')); 

  gulp.src('./src/js/modules/work/views/*.hbs')
  .pipe(plumber())
  .pipe(assemble(options))
  .pipe(gulp.dest('./dest/assets/js/work/views')); 

  // DONT FORGET TO UPDAT PROJECTS.HBS CODE with PROJECTS.HTML
 
};