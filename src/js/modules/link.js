/**
 * @module link
 * @description Client-side JS that will highligh the currently active page
 * based of the current path.
 */

module.exports =  function () {

  var options = {
    cls: 'active', // Classname to add to the active link
    debug: false // Log the name of the page to the console
  };

  /**
   * @function init
   */
  var init = function () {
    var path = window.location.pathname.toString();
    var cls = options.cls;

    if (options.debug !== false) console.log('Page: ' + path);
    
    // The link
    var link = '';

    // @TODO: use a switch instead
    if (path === '/work/') {
      link = document.querySelector('.nav-item#work');
      link.classList.add(cls);
    } else if (path === '/about/') {
      link = document.querySelector('.nav-item#about');
      link.classList.add(cls);
    } else if (path === '/') {
      // Do nothing
    } else {
      link = document.querySelector('.nav-item#writing');
      link.classList.add(cls);
    }
  };

  init();
};
