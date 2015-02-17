import browser from 'utils/browser';

/**
 * Cut the mustard and test for browser support:
 * http://responsivenews.co.uk/post/18948466399/cutting-the-mustard
 */
if (!!window.addEventListener && !!document.querySelectorAll) {

  document.addEventListener('DOMContentLoaded', function () {

    browser('supported', function (error) {
      if (error && development) {
        console.warn('Browser support:', error);
        return;
      } else if (development) {
        console.log('Browser support:', true);
        return true;
      }
    });

  }, false);

} else {

  browser('unsupported', function (error) {
    if (error && development) {
      console.warn('Browser support:', error);
      return;
    } else if (development) {
      console.log('Browser support:', false);
      return false;
    }
  });

};
