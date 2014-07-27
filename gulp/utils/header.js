var moment = require('moment');
var header = require('gulp-header');
var pkg = require('../../package.json');

/**
 * @param {string} - 'description'
 */
module.exports = function (description) {

    var generate = function (description) {
      var date = moment(new Date()).toDate();
      var version = ' - v<%=pkg.version%> - ';
      var name = '/*! <%=pkg.name%>';
      
      if (description) return name + ' - ' + description + version + date + '*/ ';
      else return name + version + date + '*/ ';
    };
  
    return header(generate(description), { pkg: pkg });
      
};
