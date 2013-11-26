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
				banner: '/*Primary stylesheet - http://pburtchaell.com/ - Copyright (c) 2013 PBDVA, Ltd.*/',
				compress: true,
				metadata: '<%= site.source %>/less/data/*.{json,yml}'
			},
			
			site: {
				files: {
					'<%= site.destination %>/assets/css/styles.min.css' : '<%= site.source %>/less/styles.less'
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
				partials: ['<%= site.templates %>/partials/**/*.{hbs,md}'],
				//plugins: '<%= site.plugins %>',
				
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
						src: ['<%= site.content %>/*.hbs'],
						dest: '<%= site.destination %>/',
						ext: '<%= site.extension %>'
					},
					{
						src: ['<%= site.content %>/legal/*.md'],
						dest: '<%= site.destination %>/legal/',
						ext: '<%= site.extension %>'
					},
					{
						src: ['<%= site.content %>/about/*.hbs'],
						dest: '<%= site.destination %>/about/',
						ext: '<%= site.extension %>'
					}
				]
			},
			
			// generate blog
			blog: {
				
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
					{
						src: ['<%= site.content %>/blog/*.{hbs,md}'],
						dest: '<%= site.destination %>/blog/',
						ext: '<%= site.extension %>'
					},
					
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
				files: ['<%= site.source %>/**/*.{js,less}'],
				tasks: [
					'less'
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
	grunt.loadNpmTasks('grunt-spell');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	
	
	/* 
	 * tasks
	 */
	grunt.registerTask('default', [
		'assemble',
		'watch'
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