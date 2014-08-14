var assemble = require('gulp-assemble');
var gulp = require('gulp');

module.exports = function () {
  
  'use strict';

  var src = [
    './pages/*.hbs'
  ];

  gulp.src('./pages/*.hbs')
  .pipe(assemble({
    data: './src/data/*.json',
    partials: './tpl/partials/*.hbs',
    layoutdir: './tpl/layouts/'
  }))
  .pipe(gulp.dest('./dest')); 
 
};