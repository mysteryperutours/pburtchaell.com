/**
 * @function getElementsByClassName
 * @private
 * @description Gets DOM nodes by classname in IE6-IE8.
 */
let getElementsByClassName = function (search) {

  var d = document, elements, pattern, i, results = [];

  // IE8
  if (d.querySelectorAll) {
    return d.querySelectorAll('.' + search);
  }

  // IE6, IE7
  if (d.evaluate) {
    pattern = ".//*[contains(concat(' ', @class, ' '), ' " + search + " ')]";
    elements = d.evaluate(pattern, d, null, 0, null);
    while ((i = elements.iterateNext())) {
      results.push(i);
    }
  } else {
    elements = d.getElementsByTagName('*');
    pattern = new RegExp('(^|\\s)' + search + '(\\s|$)');
    for (i = 0; i < elements.length; i++) {
      if ( pattern.test(elements[i].className) ) {
        results.push(elements[i]);
      }
    }
  }

  return results;
};

/**
 * @function insertBrowserSupportMessage
 * @private
 * @description Insert the browser support message into the DOM.
 */
let insertBrowserSupportMessage = function (cls) {
  var string = '<div style="text-align:center;height:auto;width:100%;min-height:32px;position:relaztive;background:#efefcb;color:#bfbfa6;z-index:10;padding:25px;">Your browser is not supported. <a href=http://outdatedbrowser.com/>Please upgrade</a>.</div>';
  var el = getElementsByClassName(cls)[0];
  el.innerHTML = string;
  return true;
};

/**
 * @function status
 * @description
 * @param {string} status
 * @param {function} callback
 * @returns {boolean}
 */
let status = function (status, callback) {
  if (status === 'supported') {
    if (callback) {
      callback(null);
    }
    return true;
  } else if (status === 'unsupported') {
    insertBrowserSupportMessage('page-support-status');
    if (callback) {
      callback(null);
    }
    return true;
  } else {
    if (callback) {
      callback('Status unknown.');
    }
    return false;
  }
};

export default status;