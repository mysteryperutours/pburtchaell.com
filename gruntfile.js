/* Website of Patrick Burtchaell - User interface designer, videographer, & outdoorsman
 * http://www.pburtchaell.com/ - http://twitter.com/pburtchaell
 *
 *
 * Copyright (c) 2013 PBDVA, LLC.
 * Licensed under the MIT license, pburtchaell.com/license 
 */


'use strict';

module.exports = function(grunt) {

	grunt.initConfig({ 
 
		pkg		: 	grunt.file.readJSON('package.json'),
        aws     :   grunt.file.readJSON('aws.json'),
		site	: 	grunt.file.readYAML('src/data/site.yml'),
        
		
        /*
         * clean <% site.build %> & <% site.release %>
         * this will remove all old files before creating the new files
         */
        clean: {
            //build: ['<%= site.development %>/**/*.html','<%= site.development %>/**'],
            release: ['<%= site.production %>/**/*.html','<%= site.production %>/**']
        },
        
		/*
		 * compile SCSS (LESS) to CSS
		 */
		less: {
			
			options: {
				//version: 'assets/src/js/vendor/less/',
				banner: '/*<%= pkg.name %> - <%= pkg.url %> - <%= pkg.license %>*/',
				compress: true,
				metadata: '<%= site.source %>/less/data/*.{json,yml}'
			},
			
			site: {
				files: {
					'<%= site.development %>/assets/css/styles.min.css' : '<%= site.source %>/less/styles.less',
					'<%= site.development %>/assets/css/ie8.min.css' : '<%= site.source %>/less/browsers/ie8.less', // IE8 Styles
					'<%= site.development %>/assets/css/ie9.min.css' : '<%= site.source %>/less/browsers/ie9.less'  // IE9 Styles		
				}
			}
			
		},
		
		/*
		 * add vendor prefixes to CSS
		 */
		/*autoprefixer: {
			
			options: {
			},
			
			assets: {
				
			},
			
		},*/
			
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
			site: {
				files: {
					'<%= site.development %>/assets/js/post.min.js' : '<%= site.source %>/js/post.js',
					'<%= site.development %>/assets/js/pre.min.js' : '<%= site.source %>/js/pre.js',
					'<%= site.development %>/assets/js/GGS.min.js' : '<%= site.source %>/js/vendor/GGS.js',
					'<%= site.development %>/assets/js/dribble.js' : '<%= site.source %>/js/vendor/dribbble.js',
					'<%= site.development %>/assets/js/highlight.min.js' : '<%= site.source %>/js/vendor/highlight.pack.js',
                    '<%= site.development %>/assets/js/about.min.js' : '<%= site.source %>/js/about.js',
				}
			}
		},
        
        /*
         * minify HTML
         */
        htmlmin: {
            site: { 
                options: {                            
                    removeComments: true,
                    collapseWhitespace: true,
                    removeRedundantAttributes: true,
                    removeOptionalTags: true,
                    removeAttributeQuotes: true,
                    collapseBooleanAttributes: true, 
                },
                files: {                              
                    '<%= site.development %>/**/*.html': '<%= site.development %>/**/*.html',
                }
            }
        },
        
        /*
         * compress files
         */
        compress: {
            site: {
                options: {
                    mode: 'gzip',
                    pretty: true,
                },
                expand: true,
                cwd: '<%= site.development %>/assets/',
                src: ['**/*'],
                dest: '<%= site.production %>/assets/'
            }
        },
        
        /* 
         * copy images and fonts to <% site.build %> and <% site.release %>
         */
        copy: {
            // Copy likes to be a bitch; thus, I am not using it.
        },
		
		/* 
		 * now let's assemble this bad boy
		 */	
		assemble: {
			
			//  assemble options
			options: {
				
				flatten: true,
				data: ['<%= site.source %>/data/*.{json,yml}', 'package.json'],
				assets: '<%= site.development %>/assets',
				helpers: [
                    'helper-compose',
                    'handlebars-helper-moment',
                    '<%= site.source %>/helpers/*.js'
                ],
				partials: [
                    '<%= site.templates %>/partials/**/*.{hbs,md}', // partials are always used on every page (i.e. header, footer, navigation, etc.)
                    '<%= site.templates %>/snippets/**/*.{hbs,md}'  // snippets are only used occasionally (i.e. branding, social media links, etc.)
                ],
				plugins: [
                    'assemble-contrib-permalinks',
                ],
				layoutdir: '<%= site.templates %>/layouts',
				layout: 'default.hbs',
				ext: '<%= site.extension %>', // *.html by default
				postprocess: require('pretty'), //
				prettify: {
					padcomments: true
				}
				
			},
			
			// assemble general pages
			site: {
                
                options: {	
                    plugins: ['assemble-contrib-permalinks'],
					permalinks: {
						structure: ':shortName/index.html'
					}
				},
                
				files: [ 
					{
						src: ['<%= site.content %>/*.{hbs,md}'],
						dest: '<%= site.development %>/'
					}
				]
			},
			
			// assemble blog
			blog: {
				
				options: {	
                    plugins: ['assemble-contrib-permalinks'],
					permalinks: {
						structure: ':year/:month/:shortName/index.html'
					},
                    layout: 'layout-blog.hbs',
                    compose: {
                        cwd: '<%= site.content %>/blog/',
                        sep: '<!-- /article -->'
                    },
				},
				
				files: [ 
					{
                        // assemble the blog posts
						src: ['<%= site.content %>/blog/published/*.{hbs,md}'],
						dest: '<%= site.development %>/blog/'
					},
					{
                        // assemble the blog post drafts
						src: ['<%= site.content %>/blog/drafts/*.{hbs,md}'],
						dest: '<%= site.development %>/blog/drafts/',
						
					},
                    {
                        // assemble the blog index page
						src: ['<%= site.content %>/blog/index.hbs'],
						dest: '<%= site.development %>/blog/index.html'
					}
				]
				
			},
						 
			// assemble portfolio
			portfolio: {
                
				options: {
                    plugins: ['assemble-contrib-permalinks'],
					permalinks: {
						structure: ':year/:shortName/index.html'
					},
                    layout: 'layout-portfolio.hbs'
				},
                
				files: [
                    {
                        // assemble the portfolio content pages
						src: ['<%= site.content %>/portfolio/published/*.json'],
						dest: '<%= site.development %>/work/'
					},
                    {
                        // assemble the portfolio index page
						src: ['<%= site.content %>/portfolio/index.hbs'],
						dest: '<%= site.development %>/work/index.html',
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
					 '<%= site.content %>/**/*.{hbs,md,json,yml}'
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
					dateFormat: function(time) {
      					grunt.log.writeln('Congrats! The watch finished in ' + time + 'ms at' + (new Date()).toString());
      					grunt.log.writeln('Waiting on you <% pkg.author.name %>.');
    				}
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
        			base: '<%= site.development %>'
				}
    		},
            production: {
      			options: {
        			port: 35729,
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
            
            staging: { // dev.pburtchaell.com bucket 
                
                options: {
                    encodePaths: true,
                    bucket: '<%= aws.bucket.staging %>'
                },
                
                // upload all files from the tmp directory
                upload: [{
                    src: '<%= site.development %>/**/*',
                    dest: './'
                }]
                
            },
            
            production: { // pburtchaell.com bucket 
                
                options: {
                    bucket: '<%= aws.bucket.production %>'
                },
                
                // upload all files from the dist directory
                upload: [{
                    src: '<%= site.production %>/**/*',
                    dest: './'
                }]
                
            },
            
            content: { // content.pburtchaell.com bucket 
                
                options: {
                    bucket: '<%= aws.bucket.content %>'
                },
                
                // upload all files from the dist directory
                upload: [{
                    src: '<%= site.production %>/assets/**/*',
                    dest: './'
                }]
                
            }
        
        },
		
		
		/*
		 * reload server
		 */	
		//reload: {
			//port: '35729'
    	//},
					 
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
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-spell');
    grunt.loadNpmTasks('grunt-s3');
    //grunt.loadNpmTasks('grunt-autoprefixer');
	
	/* 
	 * tasks
	 */
    
    grunt.registerTask('deploy -staging', ['s3:staging']); // deploy the site to the dev.pburtchaell.com bucket
    grunt.registerTask('deploy -production', ['s3:production']); // deploy the site to the pburtchaell.com bucket
    
	grunt.registerTask('default', [
		'assemble',
        'connect:production'
	]);	

	grunt.registerTask('dev', [
		'connect:dev',
		'watch:dev'
	]);

	grunt.registerTask('build', [
        'clean:release', // 1. remove old files from the <% site.release %> directory
        'spell',         // 2. spellcheck the blog content so I don't sound dumb 
		'assemble',      // 3. assemble the site to the <% site.build %> directory
        'less',          // 4. create the stylesheets
        'uglify',        // 5. minify the javascripts
        'compress',      // 6. compress all the things
	]);
    
}