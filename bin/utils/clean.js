var gulp = require('gulp');
var del = require('del');
var opt = require('../options.json');

module.exports = function (callback) {
  del([opt.dest], callback);
};
