var browser = {
  
  getElementsByClassName: function(search) {
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
  },
    
  init: function () {
    var string = '<div style="text-align:center;height:100%;width:100%;position:fixed;background: #fff;z-index:10;padding-top:100px;">Your browser is not supported. <a href=http://outdatedbrowser.com/>Please upgrade</a>.</div>';
    var el = this.getElementsByClassName('not-supported')[0];
    
    el.innerHTML = string;
  }

};


if (feature.addEventListener && feature.querySelectorAll) {
  
} else {
  noSupport.init();
};
