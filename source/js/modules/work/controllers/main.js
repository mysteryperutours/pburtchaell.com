/**
 * 
 */

var scrollr = require('animated-scrollto');

module.exports = function () {

  function scroll () {
    var button = document.querySelectorAll('#trigger-work')[0];
    
    button.addEventListener('click', function () {
      scrollr(
        document.body, // element to scroll with (most of times you want to scroll with whole <body>)
        100, // target scrollY (0 means top of the page)
        10000, // duration in ms
        function () { // callback function that runs after the animation (optional)
          console.log('Scroll is done');
        }
      );
    });
  }

  scroll();
};
