var browser = require('./lib/browser');

/** 
 * Cut the mustard and test for browser support (IE9+ required):
 *   - http://responsivenews.co.uk/post/18948466399/cutting-the-mustard
 *   - http://www.phrases.org.uk/meanings/cut-the-mustard.html
 *
 * If these features are supported, then the application will initialize, 
 * if the features are not supported, then the application will not.
 */
if (!!window.addEventListener && !!document.querySelectorAll) {
  document.addEventListener('DOMContentLoaded', function () {
    
    browser('supported', function (error) {
      if (error && development) console.warn(error);
    });

    require.ensure(['./lib/link','./lib/images'], function () { 
      var link = require('./lib/link');
      var images = require('./lib/images');
    });

    if (window.post === true) {
      /*require.ensure(['./lib/post'], function () { 
        require('./lib/post');
      });*/
    }

  }, false);
} else {
  browser('unsupported', function (error) {
    if (error && development) console.warn(error);
  });
}