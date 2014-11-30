var Q = require('q');
var browser = require('./modules/browser');
var link = require('./modules/link');
var theme = require('./modules/theme');

window.App = (function () {

  'use strict';

  var initialize = function () {
    Q.fcall()
      .then(link())
      .then(theme.check());
    return true;
  };

  return {
    initialize: initialize
  }

})(this, document);

/**
 * When the DOM is loaded, initialize the application.
 */
document.addEventListener('DOMContentLoaded', function () {

  /** 
   * Cut the mustard and test for browser support (IE9+ required)...
   * - http://responsivenews.co.uk/post/18948466399/cutting-the-mustard
   * - http://www.phrases.org.uk/meanings/cut-the-mustard.html
   * If these features are supported, then the application will initialize, 
   * if the features are not supported, then the 
   */
  if (!!window.addEventListener && !!document.querySelectorAll) {
    
    Q.fcall()
      .then(browser.status('supported'))
      .then(window.App.initialize());

  } else {
    browser.status('unsupported');
  }

}, false);
