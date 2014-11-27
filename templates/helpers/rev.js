/**
 * @function {{rev}} 
 * @param {string} path 
 * @param {string} file
 */
var fs = require('fs');
var _ = require('underscore');

module.exports.register = function (Handlebars, options) {
  Handlebars.registerHelper('rev', function (path, file) {
    
    /**
     * The manifest files are created by the gulp-rev plugin as a part of the
     * build system.
     */
    var manifest = {
      css: JSON.parse(fs.readFileSync('./tpl/helpers/rev/css/rev-manifest.json','utf8')),
      js: JSON.parse(fs.readFileSync('./tpl/helpers/rev/js/rev-manifest.json','utf8'))
    }

    var data = _.extend(manifest.css, manifest.js);

    console.log(data);

    return ['/assets', path, data[file]].join('/');
  });
};
