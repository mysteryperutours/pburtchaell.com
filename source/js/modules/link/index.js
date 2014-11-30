/**
 * @module link
 * @description Highligh the link of the currently active page based of URL path.
 */
module.exports =  function () {

  switch (window.location.pathname.toString()) {
    case '/work/':
      var link = '.nav-item#work';
      break;
    case '/about/':
      var link = '.nav-item#about';
      break;
    case '/':
      var link = false;
      break;
    default:
      var link = '.nav-item#writing';
      break;
  }

  if (link != false) {
    document.querySelector(link).classList.add('active');
    return true;
  }

};
