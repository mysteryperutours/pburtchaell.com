var gulp = require('gulp');
var tasks = require('./gulp/tasks');
var tests = require('./gulp/tests');
var utils = require('./gulp/utils');

/** 
 * Tasks
 */
gulp.task('styles', tasks.styles);
gulp.task('scripts', tasks.scripts);
gulp.task('copy', tasks.copy);
gulp.task('build',['styles','scripts','copy']);

/** 
 * Tests
 */
gulp.task('jshint', tests.jshint);
gulp.task('recess', tests.recess);
gulp.task('test', ['recess','jshint']);

/**
 * Utilities
 */
gulp.task('clean', utils.clean);
gulp.task('deploy', utils.deploy);
gulp.task('watch', utils.watch);

/**
 * Default
 */
gulp.task('default', ['build']);
