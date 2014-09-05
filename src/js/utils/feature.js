/** 
 * @module feature
 * @description Cut the mustard and test for browser support (IE9+ required)...
 * - http://responsivenews.co.uk/post/18948466399/cutting-the-mustard
 * - http://www.phrases.org.uk/meanings/cut-the-mustard.html
 */
module.exports = {
  addEventListener : !!window.addEventListener,
  querySelectorAll : !!document.querySelectorAll
};
