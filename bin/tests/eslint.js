var gulp = require('gulp');
var eslint = require('gulp-eslint');

module.exports = function () {

  var config = {
    rules: {
      'quotes': 0, // Allows use of single quotes on strings: http://eslint.org/docs/rules/quotes.html
      'strict': 0, // Doesn't require you to use strict mode: http://eslint.org/docs/rules/strict.html
      'no-console': 0,
      'comma-spacing': 0
    },
    globals: {
      'process': true,
      'require': true,
      'module': true,
      'window': true,
      'document': true,
      'console': true,
      'development': true
    }
  };

  var src = [
    gulp.cache.opt.src + '/**/*.js',
    gulp.cache.opt.tests + '/**/*.js',
    'gulpfile.js',
    'webpack.config.js'
  ];

  return gulp.src(src)
    .pipe(eslint(config))
    .pipe(eslint.format())
    .pipe(eslint.failOnError());

};
