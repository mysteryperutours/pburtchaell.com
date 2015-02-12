var gulp = require('gulp');
var awspublish = require('gulp-awspublish');
var yaml = require('js-yaml');
var fs = require('fs');

module.exports = function () {

  var config = yaml.safeLoad(fs.readFileSync(__dirname + '/../../.aws.yml', 'utf8'));

  var headers = {
    'Cache-Control': 'max-age=315360000, no-transform, public'
  };

  var get = {
    config: function (property) {
      if (property === 'bucket') {
        if (process.env.AWS === 'staging') {
          return config.staging.bucket;
        } else if (process.env.AWS === 'master') {
          return config.master.bucket;
        }
      } else if (property === 'region') {
        if (process.env.AWS === 'staging') {
          return config.staging.region;
        } else if (process.env.AWS === 'master') {
          return config.master.region;
        }
      }

    }
  };

  var publisher = awspublish.create({
    key: config.key,
    secret: config.secret,
    bucket: get.config('bucket') || config.staging.bucket,
    region: get.config('region') || config.staging.region,
    style: 'path'
  });

  return gulp.src(gulp.cache.opt.dest + '/**/*')
    .pipe(awspublish.gzip({ext:''}))
    .pipe(publisher.publish(headers))
    .pipe(publisher.cache())
    .pipe(awspublish.reporter());

};