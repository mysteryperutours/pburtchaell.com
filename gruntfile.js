module.exports = function (grunt) {

  'use strict';
  
  var hljs = require('highlight.js');

  var options = {
    src: './src',
    dest: './dest/',
    plugins: './templates/plugins',
    tpl: './templates',
    pages: './templates/pages',
    posts:  './templates/posts',
    projects: './templates/projects',
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
        data: ['./data/*.{json,yml}', 'package.json'],
        plugins: [
          'assemble-contrib-permalinks'
        ],
        helpers: [
          'handlebars-helpers',
          'handlebars-helper-compose',
          'handlebars-helper-moment',
          'handlebars-helper-inarray',
          './templates/helpers/*.js'
        ],
        assets: './dest/public',
        partials: [
        './templates/partials/*.hbs', 
        './templates/components/*.hbs'
        ],
        layoutdir: './templates/layouts/',
        layout: 'default.hbs',
        collections: [{
          name: 'post',
          sortby: 'date',
          sortorder: 'descending',
          pages: ['./templates/posts']
        }],
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
            src: './templates/pages/*.{hbs,md}',
            dest: './tmp/'
          }
        ]
      },

      posts: {
        options: {
          layout: 'article.hbs',
          permalinks: {
            structure: ':year/:basename/index.html'
          },
          rss: {
            format: true,
            author: 'Patrick Burtchaell',
            url: 'http://pburtchaell.com'
          }
        },
        files: [
          {
            src: './templates/posts/**/*.{hbs,md}',
            dest: './tmp/'
          },
          {
            src: './templates/posts/index.hbs',
            dest: './tmp/posts/index.html'
          }
        ]
      }
    },

    watch: {
      assemble: {
        files: ['./templates/pages/**/*', './templates/posts/**/*', './templates/**/*'],
        tasks: ['assemble'],
        options: {
          spawn: false
        }
      }
    },

    htmlmin: { 
      options: {                                
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeOptionalTags: true,
        minifyJS: true
      },                  
      dist: {                            
        files: [{                                  
          expand: true,
          cwd: 'tmp/',                             
          src: '**/*.html',                       
          dest: 'dest/'                            
        }]
      },
    }


  });

  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-htmlmin')

  grunt.registerTask('default', ['assemble','htmlmin','watch']);

}
