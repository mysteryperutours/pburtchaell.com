window.addEventListener('DOMContentLoaded', function () {
  
  'use strict';
  
  Echo.init({ offset: 100, throttle: 250 });
  
  /*
   * Select an element or multiple elements from the DOM.
   * @namespace $
   * @param {string} 'selector'
   */
  var $ = function(selector) {
    return document.querySelector(selector);
  };
  
  /* 
   * Configure fit.js.
   * @module fitConfigModule
   
   var fitConfigModule = {   
    init: function() {
      var cover = $('.portfolio-item--cover'),
          coverImg = $('.portfolio-item--cover img');
      fit(coverImg,cover).init;
    }
  };
  fitConfigModule.init();*/
  
  /*  
   * Find out what the current URL is and add an .active class.
   * @module currentLinkModule
   */
  var currentLinkModule = {
  
    options: {
      className: 'active',
      debug: false
    },
    
    init: function() { 
      
      var option = this.options;
      
      var URL = window.location.pathname.toString();
      console.log('Page: ' + URL);
        
      var addClass = function(a) {
        var b = option.className;
        var c = option.debug;
        if (a.classlist/*.contains(b) === true*/) {
          if (c === true) { 
            console.log(link + ' already has' + b + ' class.');
          }
        } else {
          if (c === true) {
            console.log('Adding ' + b + ' class to ' + link +'.');
          }
          a.classList.add(b); 
          a.className += ' ' + b;
        } 
      }
                        
      if (URL = '/work/') {
        var link = $('.nav-item a#work')
        addClass(link);
      } else if (URL = '/about/') {
        var link = $('.nav-item a#about')
        addClass(link);
      } else if (URL = '/writing/') {
        var link = $('.nav-item a#writing')
        addClass(link);
      }

    }
  };
  currentLinkModule.init();
  
  /*
   * Initialize Skrollr.
   */
  var s = skrollr.init({
    forceHeight: false,
    render: function (data) { 
      //console.log(data.curTop);  // log the current viewport position
    },
    beforerender: function(data) { 
      return data.curTop > data.lastTop; // only animate when scrolling down
    }
  });
  skrollr.menu.init(s, {
    animate: true,
    easing: 'sqrt',
    scale: 2,
    duration: function (currentTop, targetTop) {
      return 400
    }
  });
  
}); 
