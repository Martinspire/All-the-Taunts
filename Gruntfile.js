/* Gruntfile.js */
module.exports = function (grunt)
{
	// Load all grunt tasks and pluginsautomatically
	require('load-grunt-tasks')(grunt);
	// Time how long tasks take. Can help when optimizing build times
	require('time-grunt')(grunt);

	// Project configuration.
	grunt.initConfig(
	{
		pkg: grunt.file.readJSON('package.json'),

		// Used to connect to a locally running web server (so Jasmine can test against a DOM)
		connect:
		{
			options:
			{
				port: 8000,
				livereload: 35729,
				// Change this to '0.0.0.0' to access the server from outside
				//hostname: '0.0.0.0'
			},
			livereload:
			{
				options:
				{
					base: [
						'.tmp',
						'./'
					]
				}
			},
			test:
			{
				options:
				{
					port: 9001,
					base: [
						'.tmp',
						'test',
						'./'
					]
				}
			},
			dist:
			{
				options:
				{
					open: true,
					base: './',
					livereload: false
				}
			}
		},
		//used to setup jshint for use in IDE's like Sublime and validate with display in terminal command
		jshint:
		{
			/*
                Note:
                In case there is a /release/ directory found, we don't want to lint that
                so we use the ! (bang) operator to ignore the specified directory
            */
			files: ['Gruntfile.js', 'app.js', 'constants/*.js', 'controllers/**/*.js',
				'directives/**/*.js', 'filters/**/*.js', 'services/**/*.js'
			],
			options:
			{
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				boss: true,
				eqnull: true,
				browser: true,

				globals:
				{
					// AMD
					module: true,
					require: false,
					requirejs: false,
					define: true,

					// Environments
					console: true,

					// General Purpose Libraries
					$: true,
					jQuery: true,

					// Testing
					sinon: true,
					describe: true,
					it: true,
					expect: true,
					beforeEach: true,
					afterEach: true
				}
			}
		},
		//sass will compile scss to css
		sass:
		{
			dist: //run distribution version of sass with compression and copy to dist/css filder
			{
				options:
				{
					style: 'compressed',
					debugInfo: false,
					sourcemap: false
				},
				expand: true,
				cwd: 'sass/',
				src: ['*.scss'],
				dest: 'dist/css/',
				ext: '.css'
			},
			dev: //run dev version of sass for expanded, sourcemaps and copy to css folder
			{
				options:
				{
					style: 'expanded',
					debugInfo: false,
					sourcemap: true,
					//require: ['./app/styles/sass/helpers/url64.rb']
				},
				expand: true,
				cwd: 'sass/',
				src: ['*.scss'],
				dest: 'css/',
				ext: '.css'
			}
		},
		//make js pretty by implementing certain code-standards
		jsbeautifier:
		{
			files: ['*.js', '*/*.js'],
			options:
			{
				js:
				{
					breakChainedMethods: true,
					indentWithTabs: true,
					jslintHappy: true,
					brace_style: "expand",
					wrap_line_length: 80
				}
			}
		},
		//make files ugly by compressing and minifying them for speed and optimalisation
		uglify:
		{
			min:
			{
				options:
				{
					compress:
					{
						drop_console: true
					},
					mangle:
					{
						except: ['jQuery', 'Angular']
					}
				},
				files: [
				{
					src: [
						"constants/constants.js",
						"controllers/*.js",
						"directives/*.js",
						"filters/*.js",
						"services/*.js",
						"app.js"
					],
					dest: "dist/js/app.js"
				}]
			}

		},
		//remove everything in dist folder to start fresh
		clean:
		{
			dist:
			{
				src: ["dist"]
			}
		},
		//run copy task to create all needed files in dist folder
		//will copy images, locales, partials and vendors and changes index-dist to index.html inside dist folder
		copy:
		{
			dist:
			{
				files: [
				{
					expand: true,
					src: ['img/**'],
					dest: 'dist/'
				},
				{
					expand: true,
					src: ['partials/**'],
					dest: 'dist/'
				},
				{
					expand: true,
					src: ['vendor/**'],
					dest: 'dist/'
				},
				{
					expand: true,
					src: ['index-dist.html'],
					dest: 'dist/',
					rename: function (dest, src)
					{
						return dest + src.replace('index-dist', 'index');
					}
				}]
			}
		},
		// Run: 'grunt watch' from command line for this section to take effect
		watch:
		{
			options:
			{
				livereload: true
			},
			files: ['*.js', '*/*.js', '*/*.json', '*.html', '**/*.html',
				'!vendor/*', '!node_modules/*', '!dist/*', '!dist/*/*', '!dist/*/*/*'
			],
			//tasks: 'default',
			// js: {
			//     files: ['<%= jshint.files %>'],
			//     tasks: ['jshint']
			// }
			styles:
			{
				files: ['sass/**/*.scss'],
				tasks: ['sass:dev']
			},
			tasks: ['jsbeautifier'],
			livereload:
			{
				options:
				{
					livereload: '<%= connect.options.livereload %>',

				},
				files: [
					'.**/*.html',
					'.css/{,*/}*.css',
					'.**/*.js'
				]
			}
		},
		// Run some tasks in parallel to speed up build process
		concurrent:
		{
			server: [
				'sass:dev'
			],
			dev: [
				'sass:dev'
			],
			dist: [
				'sass:dist'
			]
		},
		open:
		{
			dev:
			{
				path: 'http://localhost:<%= connect.options.port%>'
			},
			test:
			{
				path: 'http://localhost:<%= connect.options.port%>/dist'
			}
		}
	});

	// Default task: running development server with livereload, beautifier and watch for sass changes. User is logged in.
	grunt.registerTask('default', function ()
	{
		grunt.task.run([
			'concurrent:dev',
			'connect:livereload',
			'open:dev',
			'jsbeautifier',
			'watch'
		]);
	});
	// Distribution task: running cleaning on dist folder, create main.css from sass files, compress and combine js files and copy all needed files to dist folder
	grunt.registerTask('dist', ['clean:dist', 'sass:dist', 'uglify:min',
		'copy:dist'
	]);

	// Test task: allows for testing with debugging off and authentication normal
	// TODO: remove debugging and change backend when we have hardware
	grunt.registerTask('test', ['clean:dist', 'sass:dist', 'uglify:min',
		'copy:dist', 'open:test'
	]);

};
