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
  },
  opt = options;

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    assemble: {
      options: {
        flatten: true,
        data: ['<%= opt.src %>/data/*.{json,yml}', 'package.json'],
        plugins: [
          'assemble-contrib-permalinks'
          //'assemble-contrib-anchors',
          //'assemble-contrib-wordcount'
        ],
        helpers: [
          'handlebars-helper-compose',
          'handlebars-helper-moment',
          'handlebars-helper-inarray',
          './tpl/helpers/*.js' // Custom helpers
        ],
        assets: '<%= opt.dest %>/assets',
        partials: [opt.tpl + '/partials/**/*.{hbs,md}', opt.tpl + '/snippets/**/*.{hbs,md}'],
        layoutdir: opt.tpl + '/layouts',
        layout: 'default.hbs',
        collections: [
          {
            name: 'post',
            sortby: 'date',
            sortorder: 'descending',
            pages: [opt.posts]
          }
        ],
        marked: {
          highlight: function (code, lang) {
            if (lang === undefined) lang = 'bash';
            if (lang === 'js') lang = 'javascript';
            if (lang === 'less') lang = 'scss';
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
            src: '<%= opt.pages %>/*.{hbs,md}',
            dest: '<%= opt.dest %>/'
          }
        ]
      },

      posts: {
        options: {
          plugins: [
            'assemble-contrib-permalinks',
            'assemble-middleware-rss'
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
            src: '<%= opt.posts %>/**/*.{hbs,md}',
            dest: '<%= opt.dest %>/'
          },
          {
            src: '<%= opt.posts %>/index.hbs',
            dest: '<%= opt.dest %>/index.html'
          }
        ]
      },

      projects: {
        permalinks: {
          structure: ':year/:basename/index.html'
        },
        files: [
          {
            src: opt.projects + '/*.{hbs,md}',
            dest: opt.dev + '/'
          }
        ]
      },

      downbeat: {
        files: [
          {
            src: opt.src + '/js/modules/downbeat/views/*.hbs',
            dest: opt.dev + '/downbeat/'
          }
        ]
      }

    }

  });

  grunt.loadNpmTasks('assemble');
  grunt.registerTask('default', ['assemble']);

}
