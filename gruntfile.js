module.exports = function (grunt) {

  'use strict';
  
  var hljs = require('highlight.js');

  var options = {
    src: './src',
    dest: './dist/development',
    plugins: './src/plugins',
    tpl: './tpl',
    pages: './pages',
    posts:  './posts',
    projects: './projects',
    vendor: './bower_components',
    expand: true
  };

  var opt = options;

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    opt: options,

    assemble: {
      options: {
        flatten: true,
        data: ['./src/data/*.{json,yml}', 'package.json'],
        plugins: [
          'assemble-contrib-permalinks'
          //'assemble-contrib-anchors',
          //'assemble-contrib-wordcount'
        ],
        helpers: [
          'handlebars-helper-compose',
          'handlebars-helper-moment',
          'handlebars-helper-inarray',
          './tpl/helpers/*.js'
        ],
        assets: './dest/assets',
        partials: ['./tpl/partials/**/*.{hbs,md}', './tpl/snippets/**/*.{hbs,md}'],
        layoutdir: './tpl/layouts',
        layout: 'default.hbs',
        collections: [
          {
            name: 'post',
            sortby: 'date',
            sortorder: 'descending',
            pages: [ './posts' ]
          }
        ],
        marked: {
          highlight: function (code, lang) {
            if (lang === undefined) lang = 'bash';
            if (lang === 'html') lang = 'xml';
            if (lang === 'js') lang = 'javascript';
            return hljs.highlight(lang, code).value;
          }
        },
        sitemap: {
          homepage: '<%= pkg.url %>',
          changefreq: 'daily',
          priority: '0.8',
          robot: true
        },
        permalinks: {
          structure: ':basename/index.html'
        },
        compose: {
          cwd: '<%= opt.posts %>'
        }
      },

      pages: {
        files: [
          {
            src: './pages/*.{hbs,md}',
            dest: './dest/'
          }
        ]
      },

      posts: {
        options: {
          plugins: [
            'assemble-contrib-permalinks'
            //'assemble-middleware-rss'
          ],
          layout: 'layout-blog.hbs',
          permalinks: {
            structure: ':year/:basename/index.html'
          },
          wordcount: { selector: '.article-content' },
          rss: {
            format: true,
            author: 'Patrick Burtchaell',
            url: 'http://pburtchaell.com'
          }
        },
        files: [
          {
            src: './posts/**/*.{hbs,md}',
            dest: './dest/'
          },
          {
            src: './pages/index.hbs',
            dest: './dest/index.html'
          }
        ]
      }
    },

    watch: {
      assemble: {
        files: ['./pages/**/*', './posts/**/*', './tpl/**/*'],
        tasks: ['assemble'],
        options: {
          spawn: false
        }
      }
    }
  });

  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['assemble', 'watch']);

}
