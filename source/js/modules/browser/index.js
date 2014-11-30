/**
 * @function getElementsByClassName
 * @description 
 */
var getElementsByClassName = function (search) {
  var d = document, elements, pattern, i, results = [];
  if (d.querySelectorAll) { // IE8
    return d.querySelectorAll('.' + search);
  }
  if (d.evaluate) { // IE6, IE7
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
 * @description 
 */
var insertBrowserSupportMessage = function () {
  var string = '<div style="text-align:center;height:auto;width:100%;min-height:32px;position:relaztive;background:#efefcb;color:#bfbfa6;z-index:10;padding:25px;">Your browser is not supported. <a href=http://outdatedbrowser.com/>Please upgrade</a>.</div>';
  var el = this.getElementsByClassName('not-supported')[0];
  el.innerHTML = string;
}
  
/**
 * @function status
 * @description 
 * @param {string} statusMessage
 * @returns {boolean}
 */
var status = function (statusMessage){

  if (statusMessage === 'supported') {

    console.log('browser supported');

    return true;

  } else if (statusMessage === 'unsupported') {
    
    insertBrowserSupportMessage();

    return true;

  } else if (undefined) {

    try {

    } catch (e) {
    
    }

  } else {

    try {

    } catch (e) {

    }

  }

};

exports.status = status;
