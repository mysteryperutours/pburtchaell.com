/**
 * @module link
 * @description Highligh the link of the currently active page based of URL path.
 */
let link = function () {

  let link;

  switch (window.location.pathname.toString()) {
    case '/work/':
      link = '.nav-item#work';
      break;
    case '/about/':
      link = '.nav-item#about';
      break;
    case '/':
      link = false;
      break;
    default:
      link = '.nav-item#writing';
      break;
  }

  if (link !== false) {
    document.querySelector(link).classList.add('active');
    return true;
  }

};

export default link;
