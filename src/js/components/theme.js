'use strict';

var opts = {
  el: document.body 
};

function save (param,value) {
  localStorage.setItem(param,value);
};

function toggle () {
  var el = opts.el;
  el.classList.toggle('theme-dark');
  el.classList.toggle('theme-light');
  save('theme','dark'); 
};

module.exports = function () {
  var el = opts.el;
  var theme = localStorage.getItem('theme');

  /**!
   * If the theme is saved in localStorage as 'dark'
   * toggle the theme to dark. Otherwise, the theme is 
   * light. 
   */
  if (theme === 'dark') {
    this.toggle(); 
  } else {
    el.classList.toggle('theme-light');
  };
};

module.exports.toggle = function () {
  toggle();
};
