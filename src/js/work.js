'use strict';

window.onload = load;
function load() {
  
  /* 
   * Function to define all skrollr data-* attributes.
   * Usage:  
   * set_s($('element-name'), [[0,'css declaration], [1500, 'css delaration']]);
   * 
   * Using this function keeps all the attributes out of your HTML, leaving it nice and clean.
   * Moreoever, if JS is disabled, the attributes will never be added. This is good because if 
   * JS is disabled, the Skrollr plugin won't run anyway. 
   */
  var ss = function (el, data) {
    var px = new Array(),
        css = new Array();
    for  (var i = 0; i < data.length; i++) {
      px.push(data[i][0]); // the scroll position
      css.push(data[i][1]); // the css declaration
    }
    for (var x = 0; x < px.length; x++) {
      for (var u = 0; u < el.length; u++) {
        el[u].setAttribute('data-' + px[x], css[x]);
      }
    }
    console.log(el);
  };

  /* 
   * Set variables for common animations.
   */
  var fadeIn = [['bottom-center','opacity:1'],['center-center', 'opacity:0']],
      slideIn = [[0,''],[0,'']],
      parallax = [['bottom-center','background-position:0 100px'],['center-center', 'background-position: 0 0']];
  
  /* 
   * Call the ss function to set the attributes: ss(el, data)
   * 
   * Data is an array of values for data-* attribute: 
   * `[['position one','css declarations'],['position two','css declarations']]`
   * You can have as many position, CSS array-pairs as you would like.
   * Likewise, you can also include as many CSS declations as you would like.
   * 
   * min.js is used for element selectors
   */
  //ss($('.wrk-sct-divider'), parallax);
  ss($('.btn-green'), [['100-bottom','opacity: 0'],['-10-bottom','opacity: 1']]);
  ss($('.btn-blue'), [['100-bottom','opacity: 0'],['-10-bottom','opacity: 1']]);
  ss($('.fade-in.left'), [['100-bottom','opacity: 0'],['-10-bottom','opacity: 1']]);
  ss($('.fade-in.right'), [['100-bottom','opacity: 0'],['-10-bottom','opacity: 1']]);
  
  /*
   * Initialize Skrollr. <3
   */
  var s = skrollr.init({
    forceHeight: false,
    render: function (data) { console.log(data.curTop); }, // log the position
    beforerender: function(data) { return data.curTop > data.lastTop;} // only animate when scrolling down
  });
  skrollr.menu.init(s, { // Initialize skrollr.menu plugin
    animate: true,
    easing: 'sqrt',
    scale: 2.5,
    duration: function (currentTop, targetTop) { return 500; },
    handleLink: function (link) { return 400; }
  });
  
  /* 
   * Fit all the images into the conatiners.
   */
  var fit_config = function () {
    var options = {
          cover: true, 
          watch: 'on' // watch the DOM for resize
        },
        introContainer = $('.portfolio-item--cover'),
        introImage = $('.portfolio-item--cover img'),
        dividerContainer = $('.wrk-sct-divider'),
        dividerImage = $('.wrk-sct-divider img'),
        mapC = $('#connect'),
        map = $('#connect img');
    fit(introImage,introContainer,options); 
    fit(map,mapC,options); 
    //fit($('.wrk-sct-divider img'),dividerContainer,options);
  }
  
  fit_config();
  
}; 
