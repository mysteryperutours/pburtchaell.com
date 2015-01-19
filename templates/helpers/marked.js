/**
 * @function {{marked}} 
 * @description Convert markdown to HTML
 */

var marked = require('marked');
var hljs = require('highlight.js');

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function (code, lang) {
    if (lang === undefined) lang = 'bash';
    if (lang === 'html') lang = 'xml';
    if (lang === 'js') lang = 'javascript';
    return hljs.highlight(lang, code).value;
  }
});

module.exports.register = function(Handlebars, options) {
  Handlebars.registerHelper('marked', function (context) {
    var html = marked(context.fn());
    return html;
  });
};
