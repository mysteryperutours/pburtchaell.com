/* Patrick Burtchaell - User interface designer, videographer, & outdoorsman
 * http://www.pburtchaell.com/ - http://twitter.com/pburtchaell
 *
 *
 * Copyright (c) 2014 Patrick Burtchaell, http://pburtchaell.com/legal
 * Licensed under the MIT license, http://pb.mit-license.org/
 */

module.exports = function(grunt) {

  'use strict';
  
	grunt.initConfig({ 
 
		pkg:grunt.file.readJSON('package.json'),
    aws:grunt.file.readJSON('aws.json'),
		site:grunt.file.readYAML('src/data/site.yml'),
        
		
    /*
     * clean <% site.build %> & <% site.release %>
     * this will remove all old files before creating the new files
     */
    clean: {
      site: ['<%= site.production %>/**/*.html','<%= site.production %>/**']
    },
    
    /*
     * copy 
     */
    copy: {
      assets: {
        files: [
          {
            expand: true,
            cwd: '<%= site.source %>/less/',
            src: ['fonts/**'], 
            dest: '<%= site.production %>/assets/css/', 
          },
          {
            expand: true,
            cwd: '<%= site.source %>/',
            src: ['img/**'], 
            dest: '<%= site.production %>/assets/'
          }
        ]
      }
    },
        
		/*
		 * compile SCSS (LESS) to CSS
		 */
		less: {
			options: {
				banner: '/*<%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */',
				compress: true,
				metadata: '<%= site.source %>/less/data/*.{json,yml}'
			},
			assets: {
				files: {
					'<%= site.production %>/assets/css/styles.css' : '<%= site.source %>/less/styles.less',
					'<%= site.production %>/assets/css/ie8.min.css' : '<%= site.source %>/less/browsers/ie8.less', // IE8 Styles
					'<%= site.production %>/assets/css/ie9.min.css' : '<%= site.source %>/less/browsers/ie9.less'  // IE9 Styles		
				}
			}
		},
			
		/*
		 * spell check all published content on blog
		 */
		spell: {
      blog: {
		    src: ['<%= site.content %>/blog/published/*.{md,hbs}'],
        options: {
          lang: 'en',
          ignore: ['cliches', 'double negatives']
        }
			}
    },
		
		/*
		 * minify JS
		 */
		uglify: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
      },
			assets: {
				files: {
					'<%= site.production %>/assets/js/components.js' : ['bower_components/responsive-nav/client/dist/responsive-nav.js','bower_components/headroom.js/dist/headroom.js','bower_components/vendor/echo.js'],
          '<%= site.production %>/assets/js/post.js' : [],
					'<%= site.production %>/assets/js/highlight.min.js' : 'bower_components/vendor/highlight.pack.js'
				}
			}
		},
        
    /*
     * compress files
     */
    compress: {
      assets: {
        options: {
          mode: 'gzip',
          pretty: true,
        },
        expand: true,
        cwd: '<%= site.production %>/assets/',
        src: ['**/*'],
        dest: '<%= site.production %>/assets/'
      }
    },
		
		/* 
		 * assemble the site
		 */	
		assemble: {
		
			options: {
				flatten: true,
				data: ['<%= site.source %>/data/*.{json,yml}', 'package.json'],
				assets: '<%= site.production %>/assets',
				helpers: ['helper-compose','handlebars-helper-moment','<%= site.source %>/helpers/*.js'],
				partials: [
          '<%= site.templates %>/partials/**/*.{hbs,md}', // partials are always used on every page (i.e. header, footer, navigation, etc.)
          '<%= site.templates %>/snippets/**/*.{hbs,md}'  // snippets are only used occasionally (i.e. branding, social media links, etc.)
        ],
				plugins: ['assemble-contrib-permalinks','assemble-contrib-sitemap','assemble-related-pages'],
				layoutdir: '<%= site.templates %>/layouts',
				layout: 'default.hbs',
				ext: '<%= site.extension %>',
			},
			
			// assemble general pages
			site: {
        options: {	
          plugins: ['assemble-contrib-permalinks'],
          permalinks: {
            structure: ':shortName/index.html'
          },
          sitemap: {
            homepage: '<%= site.url %>',
            changefreq: 'weekly',
            priority: '0.8',
            robot: true
          },
          compose: { cwd: '<%= site.content %>/blog/', sep: '<!-- /article -->' },
				},
                
				files: [ 
					{
						src: ['<%= site.content %>/*.{hbs,md}'],
						dest: '<%= site.production %>/'
					}
				]
			},
			
			// assemble blog
			blog: {
				options: {	
          plugins: ['assemble-contrib-permalinks'],
          permalinks: { structure: ':pubYear/:shortName/index.html' },
          layout: 'layout-blog.hbs',
          compose: { cwd: '<%= site.content %>/blog/', sep: '<!-- /article -->' },
        },
				files: [ 
					{
          src: ['<%= site.content %>/blog/published/*.{hbs,md}'],
				  dest: '<%= site.production %>/blog/'
					},
					{
				  src: ['<%= site.content %>/blog/drafts/*.{hbs,md}'],
				  dest: '<%= site.production %>/blog/drafts/',
					},
          {
				  src: ['<%= site.content %>/blog/index.hbs'],
				  dest: '<%= site.production %>/blog/index.html'
					}
				]
			},
      
			// assemble portfolio
			portfolio: {   
        options: {
          //plugins: ['assemble-contrib-permalinks'],
          //permalinks: { structure: ':year/:shortName/index.html' },
          layout: 'layout-portfolio.hbs'
        },     
				files: [
          //{
				  //src: ['<%= site.content %>/portfolio/published/*.json'],
				  //dest: '<%= site.production %>/work/'
					//},
          {
				  src: ['<%= site.content %>/portfolio/index.hbs'],
				  dest: '<%= site.production %>/work/',
					}
				]        
			}
		},	
		
		
		/*
		 * watch files for changes
		 */
		watch: {
		  dev: {
				files: [
					 '<%= site.source %>/**/*.{js,less,hbs}',
					 '<%= site.content %>/**/*.{html,hbs,md,json,yml}'
					 ],
				tasks: [
					'less',
					 'uglify',
					 'assemble'
				],
				options: {
					spawn: false,
					interrupt: true,
					livereload: true,
				}
			}
		},
		
		
    /*
     * start local server
     */			 
    connect: {
      dev: {
        options: {
          port: 35729,
          open: true,
          base: '<%= site.production %>'
        }
      }
    },
        
    /*
     * deploy to AWS S3
     */
    s3: {
    
      options: {
        key: '<%= aws.auth.key %>',
        secret: '<%= aws.auth.secret %>',
        access: 'public-read',
        headers: {
          // two Year cache policy (1000 * 60 * 60 * 24 * 730)
          "Cache-Control": "max-age=630720000, public",
          "Expires": new Date(Date.now() + 63072000000).toUTCString()
        }
      },
      
      // dev.pburtchaell.com bucket 
      staging: {
        options: {
          encodePaths: true,
          bucket: '<%= aws.bucket.staging %>'
        },
        upload: [{
        src: '<%= site.production %>/**/*',
        dest: './'
        }]
      },
      
      // pburtchaell.com bucket 
      production: {
        options: {
          bucket: '<%= aws.bucket.production %>'
        },
        upload: [
          {
          src: '<%= site.production %>/**/*',
          dest: './'
          },
          {
          src: '<%= site.production %>/assets/**/',
          dest: './assets/**/'
          }
        ]
      }
      
    }
    
	});
	
	
  /*
   * plugins, such wow
   */
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('assemble-less');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-spell');
  grunt.loadNpmTasks('grunt-s3');
  
  grunt.registerTask('congrats', 'Log some stuff', function() {
    grunt.log.write('Congrats your site has been assembled.').ok();
  });
	
	/* 
	 * tasks
	 */
  grunt.registerTask('deploy-staging', ['s3:staging']); // deploy the site to the dev.pburtchaell.com bucket
  grunt.registerTask('deploy-production', ['s3:production']); // deploy the site to the pburtchaell.com bucket
  grunt.registerTask('default', ['assemble','connect:production']);	
  grunt.registerTask('dev', ['connect:dev','watch:dev']);
	grunt.registerTask('build', [
    'clean:site',
    'assemble',
    'less:assets',
    'uglify:assets',
    'copy:assets',
    'compress:assets',
    'congrats'
	]);
    
}