'use strict';

var express = require('express');
var compression = require('compression');
var error = require('express-err');
var gutil = require('gulp-util');
var chalk = require('chalk');
var lr = require('tiny-lr')();

/**
 * @desc Start the server
 * @param {object} 'config'
 */
exports.init = function (config, callback) {
  var config = config || {};
  var app = express();
  
  function startup (callback) {
    gutil.log('Starting the connect webserver...')
    app.use(require('connect-livereload')());
    app.use(compression());
    app.use(express.static(config.root + '/'));
    app.listen(config.port);
    app.use(error.httpError(404));
    
    callback();
  };

  startup(function() {
    gutil.log('Listening at ' + chalk.magenta('http://localhost:' + config.port));
  });
  
  callback();
};

/**
 * @desc Listen to the server for changes.
 */
exports.listen = function () {
  lr.listen(35729);
};

/**
 * @desc Refresh the server.
 */
exports.refresh = function (event) {
  /** 
   * `gulp.watch()` events provide an absolute path
   * so we need to make it relative to the server root.
   */
  var file = require('path').relative(__dirname, event.path);
  
  lr.changed({
    body: {
      files: [file]
    }
  });
};
