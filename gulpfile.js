'use strict';

var pkg = require('./package.json');
var vnd = require('./bower.json');

var gulp = require('gulp');

var duration = require('gulp-duration');
var less = require('gulp-less');
var prefix = require('gulp-autoprefixer');
var recess = require('gulp-recess');
var uglify = require('gulp-uglify');
var help = require('gulp-help')(gulp);
var header = require('gulp-header');
var minify = require('gulp-minify-css');
var concat = require('gulp-concat');
var path = require('path');
var moment = require('moment');
var del = require('del');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

var options = {
  dest: './dist/development',
  src: './src'
};

var dest = options.dest;
var src = options.src;

gulp.task('browserify', function() {
  src = src + '/js/app.js';
  dest = dest + '/assets/js/';
  return browserify(src)
    .bundle()
    .pipe(source('components.js'))
    .pipe(gulp.dest(dest));
});

/**
 * @function - createHeader
 * @param - 'description' - string
 */
function createHeader (description) {
  var date = moment(new Date()).toDate(),
      version = ' - v<%=pkg.version%> - ', // get the version number from package.json
      name = '/*! <%=pkg.name%>'; // get the name from package.json
  if (description) {
    return name + ' - ' + description + version + date + '*/ ';
  } else {
    return name + version + date + '*/ ';
  }
};

/**
 * Gulp tasks
 * Run: `gulp help` for a complete list and descriptions.
 */
gulp.task('clean', 'Delete all contents of the app/public directory.', function (cb) {
  del(['./dist'],cb);
});

gulp.task('styles', 'Generate CSS stylesheets from LESS source code.', function () {
  var stylesheets = require('./src/less/config.json');
  
  /**
   * compile();
   * @desc Compiles a LESS source file to CSS using gulp
   * @param {string} 'stylesheet'
   */
  var compile = function (stylesheet) {
    var lessSrc = src + '/less/' + stylesheet.source;
    var cssDest = dest + '/assets/css';
    
    // Print the I/O to terminal.
    var chalk = require('chalk');
    console.log( 
      'Compiling ' + 
      chalk.green(src + '/' + stylesheet.source) + ' to ' + 
      chalk.blue(dest + '/' + stylesheet.filename)
    );
  
    // Use gulp to compile.
    gulp.src(lessSrc)
      .pipe(less({paths: [ path.join(__dirname, 'less', 'includes') ] }))
      .pipe(prefix('last 2 version','safari 5','opera 12.1'))
      .pipe(minify())
      .pipe(header(createHeader(stylesheet.description),{pkg:pkg}))
      .pipe(gulp.dest(cssDest));    
  };
        
  for (var i in stylesheets) {
    var stylesheet = stylesheets[i];
    compile(stylesheet);
  };
});

gulp.task('scripts', 'Concatenate and uglify script source code.', function () {
  dest = dest + '/assets/js';

  /**
   * components.js
   */
  src = [
    './src/js/components/link.js',
    //'./src/js/components/theme.js',
    './bower_components/fastclick/lib/fastclick.js',
    './bower_components/headroom.js/dist/headroom.js',
    './src/js/vendor/echo.js'
  ];
  gulp.src(src)
    .pipe(concat('components.js'))
    .pipe(uglify())
    .pipe(header(createHeader('Primary JavaScript'),{pkg:pkg}))
    .pipe(gulp.dest(dest));

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
    .pipe(header(createHeader('Provides basic IE 8 - 9 support'),{pkg:pkg}))
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
    .pipe(header(createHeader('Primary JavaScript'),{pkg:pkg}))
    .pipe(gulp.dest(dest));
  
  /**
   * work.js
   */
  src = [
    './bower_components/angular/angular.js',
    './bower_components/angular-animate/angular-animate.js',
    './bower_components/angular-route/angular-route.js'
  ];
  gulp.src(src)
    .pipe(concat('angular.js'))
    .pipe(uglify())
    .pipe(header(createHeader('Primary JavaScript'),{pkg:pkg}))
    .pipe(gulp.dest(dest));
    
    src = [
      './src/js/modules/downbeat/app.js'
    ];
  gulp.src(src)
    .pipe(concat('downbeat-app.js'))
    .pipe(uglify({
      mangle: false
    }))
    .pipe(header(createHeader('Primary JavaScript'),{pkg:pkg}))
    .pipe(gulp.dest(dest));
});

gulp.task('watch', 'Watch source files and run tasks when a file changes.', function () {
  gulp.watch(src + '/less/**/*.less', ['styles']);
  gulp.watch(src + '/js/**/*.js', ['browserify'])
});

gulp.task('test', 'Test LESS source code against the RECESS library.', function () {
  src = src + '**/*.{less}';
  return gulp.src(src)
    .pipe(recess())
    .pipe(notify("LESS source code successfully passed all tests"));
});

gulp.task('default', ['styles','scripts']);
