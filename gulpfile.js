var gulp = require('gulp-help')(require('gulp'));
var tasks = require('./bin/tasks');
var utils = require('./bin/utils');

gulp.cache = {};
gulp.cache.opt = {
  src: './source',
  dest: './dest'
};

gulp.task('bundle', false, tasks.bundle);
gulp.task('build', 'Bundle scripts and compile the build.', ['bundle']);
gulp.task('clean', 'Delete the build folder.', utils.clean);
gulp.task('deploy','Deploy the build to S3.', utils.deploy);
gulp.task('watch', false, utils.watch);
gulp.task('default', false, ['build']);
