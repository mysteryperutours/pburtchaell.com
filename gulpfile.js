require('dotenv').load();

var gulp = require('gulp');
var s3 = require('gulp-s3-upload')({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

gulp.task('deploy:staging', function () {
  gulp.src('./dist/**')
    .pipe(s3({
      Bucket: 'staging.pburtchaell.com',
      ACL: 'public-read'
    }));
});

gulp.task('deploy:production', function () {
  gulp.src('./dist/**')
    .pipe(s3({
      Bucket: 'pburtchaell.com',
      ACL: 'public-read'
    }));
});
