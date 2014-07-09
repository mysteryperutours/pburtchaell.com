module.exports = function(grunt) {

  'use strict';

  var banner = function (alt) {
    var grunt = '<%=grunt.template.today("yyyy-mm-dd")%>', // get the current date
      version = ' - v<%=pkg.version%> - ', // get the version number from package.json
      name = '/*<%=pkg.name%>'; // get the name from package.json
    if (alt) {
      return name + ' - ' + alt + version + grunt + '*/';
    } else {
      return name + version + grunt + '*/';
    }
  };

  var hljs = require('highlight.js');

  var options = {
    prod: './dist/production',
    dev: './dist/development',
    src: './src',
    plugins: './src/plugins',
    tpl: './tpl',
    pages: './pages',
    posts:  './posts',
    projects: './projects',
    vendor: './bower_components',
    expand: true,
    devPort: 8000,
    devHostname: 'localhost'
  },
  opt = options,
  devTarget = 'http://' + opt.devHostname + ':' + opt.devPort;    var site = grunt.config('site');

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    site: grunt.file.readYAML('src/data/site.yml'),
    vendor: grunt.file.readJSON('bower.json'),

    /*
    * Copy images and fonts to the build directories.
    */
    copy: {
      assets: {
        files: [
          {
            expand: opt.expand,
            cwd: opt.src + '/less/',
            src: ['fonts/**'],
            dest: opt.dev + '/assets/css'
          },
          {
            expand: opt.expand,
            cwd: opt.src + '/',
            src: ['img/**'],
            dest: opt.dev + '/assets/'
          },
          {
            expand: opt.expand,
            cwd: opt.src + '/',
            src: ['img/**'],
            dest: '<%=site.production%>/assets/'
          }
        ]
      }
    },

    /*
     * Compile LESS and lint using RECESS.
     */
    less: {
      options: {
        banner: banner(),
        compress: true,
        metadata: opt.src + '/less/data/*.{json,yml}'
      },
      assets: {
        files: {
          '<%=site.development%>/assets/css/projects.css' : opt.src + '/less/projects.less',
          '<%=site.development%>/assets/css/error.css' : opt.src + '/less/error.less',
          '<%=site.development%>/assets/css/downbeat.css' : opt.src + '/less/pages/downbeat.less'
        }
      },
      styles: {
        options: {
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapFilename: opt.dev + '/assets/css/styles.css.map',
          sourceMapURL: opt.devTarget + '/assets/css/styles.css.map',
          sourceMapRootpath: opt.devTarget
        },
        files: {
          '<%=site.development%>/assets/css/styles.css' : opt.src + '/less/styles.less'
        }
      }
    },

    /*
     * minify JS
     */
    uglify: {
      staticShortFilm: {
        files: {
          '<%=site.development%>/assets/js/static/components.js': [
            opt.vendor + '/jquery/dist/jquery.js',
            opt.vendor + '/ajaxchimp/jquery.ajaxchimp.js'
          ],
        }
      }
    },

    /*
     * compress files
     */
    compress: {
      options: {
        mode: 'gzip',
        level: 9
      },
      styles: {
        expand: true,
        cwd: '<%=site.development%>/assets/',
        dest: '<%=site.production%>/assets/',
        src: ['**/*.css'],
        ext: '.css'
      },
      scripts: {
        expand: true,
        cwd: '<%=site.development%>/assets/',
        dest: '<%=site.production%>/assets/',
        src: ['**/*.js'],
        ext: '.js'
      },
      content: {
        expand: true,
        cwd: '<%=site.development%>/',
        dest: '<%=site.production%>/',
        src: ['**/*.html'],
        ext: '.html'
      },
      fonts: {
        expand: true,
        cwd: '<%=site.development%>/',
        src: ['assets/css/fonts/**/*'],
        dest: '<%=site.production%>/'
      }
    },

    /*
     * Assemble the site.
     */
    assemble: {
      options: {
        flatten: true,
        data: ['<%=site.source%>/data/*.{json,yml}', 'package.json'],
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
        assets: '<%=site.development%>/assets',
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
          homepage: '<%=site.url%>',
          changefreq: 'daily',
          priority: '0.8',
          robot: true
        },
        permalinks: {
          structure: ':basename/index.html'
        },
        compose: {
          cwd: opt.posts
        }
      },

      pages: {
        files: [
          {
            src: opt.pages + '/*.{hbs,md}',
            dest: opt.dev + '/'
          }
        ]
      },

      posts: {
        options: {
          layout: 'layout-blog.hbs',
          permalinks: {
            structure: ':year/:basename/index.html'
          },
          feed: {
            debug: true,
            prettify: true,
            dest: 'rss.xml'
          },
          wordcount: { selector: '.article-content' }
        },
        files: [
          {
            src: opt.posts + '/**/*.{hbs,md}',
            dest: opt.dev + '/'
          },
          {
            src: opt.pages + '/index.hbs',
            dest: opt.dev + '/index.html'
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

    },

    /*
     * assemble sitemap, humans.txt, and robots.txt
     */
    sitemap: {
      production: {
        siteRoot: opt.prod,
        homepage: '<%=pkg.url%>'
      }
    },
    humans_txt: {
      options: {
        commentStyle: 'u', // # Unix style comments
        content: grunt.file.readJSON('humans.txt.json')
      },
      production: {
        dest: opt.prod + '/humans.txt'
      }
    },
    robotstxt: {
      production: {
        dest: opt.prod,
        policy: [
          { ua: 'googlebot', disallow: '/assets/' },
          { sitemap: ['<%=site.url%>/sitemap.xml'] },
          { crawldelay: 100 },
          { host: '<%=site.url%>' }
        ]
      }
    },

    /*
    * Watch files for changes
    */
    watch: {
      options: {
        spawn: false,
        interrupt: true,
        livereload: true
      },
      all: {
        files: [
          opt.src + '/**/*.{less,js,json,yml}',
          opt.tpl + '/**/*.{html,hbs,md}',
          opt.posts + '/**/*.{hbs,md}',
          opt.pages + '/**/*.{hbs,md}',
          opt.projects + '/**/*.{hbs,md}'
        ],
        tasks: ['styles','scripts','assemble']
      },
      styles: {
        files: [
          opt.src + '/**/*.{less,js,json,yml}',
          opt.tpl + '/**/*.{html,hbs,md}',
          opt.posts + '/**/*.{hbs,md}',
          opt.pages + '/**/*.{hbs,md}',
          opt.projects + '/**/*.{hbs,md}'
        ],
        tasks: ['styles']
      },
      content: {
         files: [
           './pages/**/*.{hbs,md}'
        ],
        tasks: ['assemble']
      }
    },

    /*
    * Start local server
    */
    connect: {
      dev: {
        options: {
          hostname: opt.devHostname,
          port: opt.devPort,
          open: {
            target: devTarget
          },
          base: opt.dev
        }
      }
    }

  });

  /*
   * I could use: https://www.npmjs.org/package/load-grunt-tasks,
   * but it slows down exectution on larger tasks where time is 
   * important.
   */ 
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('assemble-less');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-humans-txt');
  grunt.loadNpmTasks('grunt-robots-txt');
  grunt.loadNpmTasks('grunt-sitemap');
  
  /**
   * Grunt CLI Tasks:
   * 
   * test: Test LESS against Recess library
   * clean: delete all code compiled by Grunt
   * styles: Compile LESS to CSS and add vendor prefixes
   * scripts: Concatenate JS
   * content: Assemble HTML
   * assets: Copy images, fonts, etc. 
   *
   * dev:
   *   - dev:styles will watch only LESS source code
   *   - dev:scripts will watch only JS source code
   *   - dev:content will watch content source files and data, 
   *     e.g., hbs templates, Markdown, or JSON.
   *   - dev:all will watch all source code
   *   - If the "--serve" option is added, a connect 
   *     web server will run at localhost:8000
   */
  grunt.registerTask('default', ['build']);
  grunt.registerTask('test', ['recess']); 
  grunt.registerTask('styles', ['less']); 
  grunt.registerTask('scripts', ['uglify']);
  grunt.registerTask('content', ['assemble','humans_txt','robotstxt']);
  grunt.registerTask('assets', ['copy']);
  
  grunt.registerTask('dev', 'Grunt enters dev mode and watches source files for changes.', function(n) {
    
    /**
     * This task would be considered "dynamic".
     * Documentation: http://gruntjs.com/frequently-asked-questions#dynamic-alias-tasks
     */
    
    var option = {
      connect: grunt.option('serve') // http://gruntjs.com/frequently-asked-questions#options
    };
  
    if (n == null) {
      grunt.warn('Watch type must be specified, like watch:all or watch:styles.');
    } else if (n != null && option.connect == true) {
      grunt.task.run('connect','watch:' + n);
    } else {
      grunt.task.run('watch:' + n); 
    };
    
  });
  
  grunt.registerTask('build', ['content','styles','scripts','assets','compress']);

}
