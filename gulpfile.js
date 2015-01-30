var gulp = require('gulp-help')(require('gulp'));
var tasks = require('./bin/tasks');
var tests = require('./bin/tests');
var utils = require('./bin/utils');

gulp.cache = {};
gulp.cache.opt = {
  src: './source',
  dest: './dest',
  tests: './bin/tests/'
};

gulp.task('bundle', false, tasks.bundle);
gulp.task('build', 'Bundle Javascript modules.', ['bundle']);
gulp.task('test', 'Lint code.', tests.eslint);
gulp.task('clean', 'Delete the build folder.', utils.clean);
gulp.task('deploy','Deploy the build to S3.', utils.deploy);
gulp.task('serve', 'Run a development server.', utils.server);
gulp.task('default', false, ['build']);
