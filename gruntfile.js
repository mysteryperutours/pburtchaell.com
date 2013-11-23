/* Website of Patrick Burtchaell - User interface designer, videographer, & outdoorsman
 * http://www.pburtchaell.com/ - http://twitter.com/pburtchaell
 *
 *
 * Thanks to Grunt.js, Assemble.js and Node.js 
 *
 *
 * Copyright (c) 2013 PBDVA, Ltd.
 * Licensed under the MIT license, for more visit pburtchaell.com/license 
 */


'use strict';

module.exports = function(grunt) {

	grunt.initConfig({ 
 
		pkg		: 	grunt.file.readJSON('package.json'),
		site	: 	grunt.file.readYAML('src/data/site.yml'),
		
		/*
		 * compile LESS to CSS
		 */
		/*less: {
			
			options: {
				//version: 'assets/src/js/vendor/less/',
				banner: 'Primary stylesheet - http://pburtchaell.com/ - Copyright (c) 2013 PBDVA, Ltd.',
				compress: true
			},
			
			site: {
				files: {
					src: '<%= site.source %>/less/styles.less',
					dest: '<%= site.destination %>/assets/css/styles.min.css'
				}
			}
			
		},*/
		
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
		/*spell: {
    		all: {
				src: ['<%= site.content %>/blog/published'],
      			options: {
        			lang: 'en',
        			ignore: ['cliches', 'double negatives']
      			}
			}
  		},*/
		
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
				partials: ['<%= site.templates %>/includes/**/*.{hbs,md}'],
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
						dest: '<%= site.destination %>',
						ext: '<%= site.extension %>'
					},
					{
						src: ['<%= site.content %>/legal/*.md'],
						dest: '<%= site.destination %>/legal',
						ext: '<%= site.extension %>'
					}	
				]
			},
			
			// generate blog
			blog: {
				
				options: { layout: 'post.hbs' },
				
				// finished posts
				published: {
					files: [ 
						{
							src: ['<%= site.content %>/blog/published/*.{hbs,md}'],
							dest: '<%= site.destination %>/blog',
							ext: '<%= site.extension %>'
						}
					]
				},
				
				// unfinished posts
				draft: {
					files: [ 
						{
							src: ['<%= site.content %>/blog/drafts/*.{hbs,md}'],
							dest: '<%= site.destination %>/blog/drafts',
							ext: '<%= site.extension %>'
						}
					]
				}
				
			},
						 
			// generate portfolio
			portfolio: {
				files: [
					{
						src: ['<%= site.content %>/portfolio/*.hbs'],
						dest: '<%= site.destination %>/works',
						ext: '<%= site.extension %>'
					}	
				]
			}
						
		}	
		
	});
	
	
	/*
	 * plugins
	 */
	grunt.loadNpmTasks('assemble');
	grunt.loadNpmTasks('assemble-less');
	
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-spell');
	
	
	/* 
	 * tasks
	 */
	grunt.registerTask('default', ['assemble']);	
	grunt.registerTask('development', ['watch']);
	grunt.registerTask('production', [
		'spell',
		'recess',
		'less',
		'uglify',
		'assemble',
		'htmlmin'
	]);
	
}