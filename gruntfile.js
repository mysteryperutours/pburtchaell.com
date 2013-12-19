/* Website of Patrick Burtchaell - User interface designer, videographer, & outdoorsman
 * http://www.pburtchaell.com/ - http://twitter.com/pburtchaell
 *
 *
 * Thanks to Grunt.js, Assemble.js and Node.js 
 *
 *
 * Copyright (c) 2013 PBDVA, Ltd.
 * Licensed under the MIT license, pburtchaell.com/license 
 */


'use strict';

module.exports = function(grunt) {

	grunt.initConfig({ 
 
		pkg		: 	grunt.file.readJSON('package.json'),
		site	: 	grunt.file.readYAML('src/data/site.yml'),
		
		/*
		 * compile LESS to CSS
		 */
		less: {
			
			options: {
				//version: 'assets/src/js/vendor/less/',
				banner: '/*Patrick Burtchaell - http://pburtchaell.com/ - Copyright (c) 2013 PBDVA, Ltd.*/',
				compress: true,
				metadata: '<%= site.source %>/less/data/*.{json,yml}'
			},
			
			site: {
				files: {
					'<%= site.destination %>/assets/css/styles.min.css' : '<%= site.source %>/less/styles.less',
					'<%= site.destination %>/assets/css/ie8.min.css' : '<%= site.source %>/less/browsers/ie8.less', // IE8 Styles
					'<%= site.destination %>/assets/css/ie9.min.css' : '<%= site.source %>/less/browsers/ie9.less'  // IE9 Styles		
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
    		all: {
				src: ['<%= site.content %>/blog/published/*.md'],
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
					'<%= site.destination %>/assets/js/post.min.js' : '<%= site.source %>/js/post.js',
					'<%= site.destination %>/assets/js/pre.min.js' : '<%= site.source %>/js/pre.js',
					'<%= site.destination %>/assets/js/GGS.min.js' : '<%= site.source %>/js/vendor/GGS.js',
					'<%= site.destination %>/assets/js/dribble.js' : '<%= site.source %>/js/vendor/dribbble.js',
					'<%= site.destination %>/assets/js/highlight.min.js' : '<%= site.source %>/js/vendor/highlight.pack.js',
				}
			}
		},
		
		/* 
		 * assemble
		 */	
		assemble: {
			
			//  assemble options
			options: {
				
				
				flatten: true,
	
				// set the directories
				data: ['<%= site.source %>/data/*.{json,yml}', 'package.json'],
				assets: '<%= site.destination %>/assets',
				//helpers: ['<%= site.source %>/extensions/*.js', 'helper-prettify'],
				partials: ['<%= site.templates %>/partials/**/*.{hbs,md}','<%= site.templates %>/snippets/**/*.{hbs,md}' ],
				//plugins: ['<%= site.plugins %>',
				
				layoutdir: '<%= site.templates %>/layouts',
				layout: 'default.hbs',
				
				// postprocess: require('pretty')
				/*prettify: {
					indent: 2;	
					condense: true,
					padcomments: true
				}*/
				
			},
			
			// generate pages
			site: {
				files: [ 
					{
						src: ['<%= site.content %>/*.{hbs,md}'],
						dest: '<%= site.destination %>/',
						ext: '<%= site.extension %>'
					},
					{
						src: ['<%= site.content %>/legal/*.{hbs,md}'],
						dest: '<%= site.destination %>/legal/',
						ext: '<%= site.extension %>'
					},
					{
						src: ['<%= site.content %>/about/*.{hbs,md}'],
						dest: '<%= site.destination %>/about/',
						ext: '<%= site.extension %>'
					},
					{
						src: ['<%= site.content %>/styleguide.md'],
						dest: '<%= site.destination %>/styleguide/index',
						ext: '<%= site.extension %>'
					}
				]
			},
			
			// generate blog
			blog: {
				
				// use assemble-contrib-permalinks for pretty URLs
				options: {
					plugins: [
						'assemble-contrib-permalinks'
					],
						
					permalinks: {
						// all pages using prety URLS most have a "shortName" 
						structure: ':year/:month/:shortName/index.html'
					}
				},
				
				files: [ 
					
					{
						src: ['<%= site.content %>/blog/published/*.{hbs,md}'],
						dest: '<%= site.destination %>/blog/',
						ext: '<%= site.extension %>'
					},
					{
						src: ['<%= site.content %>/blog/drafts/*.{hbs,md}'],
						dest: '<%= site.destination %>/blog/drafts/',
						ext: '<%= site.extension %>'
					},
					/*{
						src: ['<%= site.content %>/blog/*.{hbs,md}'],
						dest: '<%= site.destination %>/blog/',
						ext: '<%= site.extension %>'
					},*/
					
				]
				
			},
						 
			// generate portfolio
			portfolio: {
				files: [
					{
						src: ['<%= site.content %>/portfolio/*.hbs'],
						dest: '<%= site.destination %>/work/',
						ext: '<%= site.extension %>'
					}	
				]
			}
						
		},	
		
		
		/*
		 * watch files for changes
		 */
		watch: {
			scripts: {
				files: [
					 '<%= site.source %>/**/*.{js,less,hbs}',
					 '<%= site.content %>/*.hbs'
					 ],
				tasks: [
					'less',
					 'uglify:site',
					 'assemble:site'
				],
				options: {
					spawn: false,
					interrupt: true,
					livereload: true,
					dateFormat: function(time) {
      					grunt.log.writeln('Congrat! The watch finished in ' + time + 'ms at' + (new Date()).toString());
      					grunt.log.writeln('Waiting on you Patrick.');
    				}
				}
			}
		},
		
		
		/*
		 * start server
		 */			 
		connect: {
    		server: {
      			options: {
        			port: 35729,
        			base: 'dist'
				}
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
	 * plugins
	 */
	grunt.loadNpmTasks('assemble');
	grunt.loadNpmTasks('assemble-less');
	//grunt.loadNpmTasks('grunt-autoprefixer');
	//grunt.loadNpmTasks('grunt-spell');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	
	
	/* 
	 * tasks
	 */
	grunt.registerTask('default', [
		'assemble'
	]);	
	grunt.registerTask('dev', [
		'connect',
		'watch'
	]);
	/*grunt.registerTask('build', [
		'spell',
		'recess',
		'less',
		'uglify',
		'assemble',
		'htmlmin'
	]);*/
	
}