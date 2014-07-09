var gulp = require('gulp');
var less = require('gulp-less');
var prefix = require('gulp-autoprefixer');
var recess = require('gulp-recess');
var minify = require('gulp-minify-css');

gulp.task('styles', 'Generate CSS stylesheets from LESS source code.', function () {
  dest = dest + '/assets/css';
  src = src + '/less/styles.less';
  gulp.src(src)
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ] 
    }))
    .pipe(prefix('last 2 version','safari 5','ie 8','ie 9','opera 12.1'))
    .pipe(minify())
    .pipe(header(createHeader('Primary stylesheet'),{pkg:pkg}))
    .pipe(gulp.dest(dest));
});

/*gulp.task('styles:all', 'Generate CSS stylesheets from LESS source code.', function () {
  
  var stylesheets = require('./src/less/config.json');
  
  var compile = function (stylesheet) {
    src = src + '/less/' + stylesheet.source;
    dest = dest + '/assets/css';
        
    gulp.src(src)
      .pipe(less({paths: [ path.join(__dirname, 'less', 'includes') ] }))
      .pipe(prefix('last 2 version','safari 5','opera 12.1'))
      .pipe(minify())
      .pipe(header(createHeader(stylesheet.description),{pkg:pkg}))
      .pipe(gulp.dest(dest));
  };
        
  for (var i in stylesheets) {
    var stylesheet = stylesheets[i];
    compile(stylesheet);
  };
  
});*/
