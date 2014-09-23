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
		express: {
			options: {

			},
			dist: {
				options: {
					script: 'backend/server.js',
					debug: false,
        			node_env: 'dist'
				}
			},
			dev: {
				options: {
					script: 'backend/server.js',
					debug: true,
        			node_env: 'dev'
				}
			}
		},
		//used to setup jshint for use in IDE's like Sublime and validate with display in terminal command
		jshint:
		{
			files: ['Gruntfile.js', 'frontend/app.js', 'frontend/constants/*.js', 'frontend/controllers/**/*.js',
				'frontend/directives/**/*.js', 'frontend/filters/**/*.js', 'frontend/services/**/*.js'
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
				cwd: 'frontend/sass/',
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
				cwd: 'frontend/sass/',
				src: ['*.scss'],
				dest: 'frontend/css/',
				ext: '.css'
			}
		},
		//make js pretty by implementing certain code-standards
		jsbeautifier:
		{
			files: ['frontend/*.js', 'frontend/**/*.js', '!frontend/vendor/*'],
			options:
			{
				js:
				{
					breakChainedMethods: true,
					indentWithTabs: true,
					jslintHappy: true,
					brace_style: "expand",
					wrap_line_length: 0
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
						"frontend/app.js",
						"frontend/constants/*.js",
						"frontend/controllers/*.js",
						"frontend/directives/*.js",
						"frontend/filters/*.js",
						"frontend/services/*.js"
					],
					dest: "dist/js/app.js"
				}]
			}
		},
		//remove everything in dist folder to start fresh
		clean:
		{
			build:
			{
				src: ["build"]
			},
			dist:
			{
				src: ["dist"]
			}
		},
		//run copy task to create all needed files in dist folder
		//will copy images, locales, partials and vendors and changes index-dist to index.html inside dist folder
		copy:
		{
			build:
			{
				files: [
				{
					cwd: 'frontend/',
					expand: true,
					src: ['img/**'],
					dest: 'dist/'
				},
				{
					cwd: 'frontend/',
					expand: true,
					src: ['partials/**'],
					dest: 'dist/'
				},
				{
					cwd: 'frontend/',
					expand: true,
					src: ['vendor/**'],
					dest: 'dist/'
				},
				{
					cwd: 'frontend/',
					expand: true,
					src: ['font/**'],
					dest: 'dist/'
				},
				{
					cwd: 'frontend/',
					expand: true,
					src: ['taunts/**'],
					dest: 'dist/'
				},
				{
					cwd: 'frontend/',
					expand: true,
					src: ['server.js'],
					dest: 'dist/'
				},
				{
					expand: true,
					src: ['dist-package.json'],
					dest: 'dist/',
					rename: function (dest, src)
					{
						return dest + src.replace('dist-package', 'package');
					}
				},
				{
					cwd: 'frontend/',
					expand: true,
					src: ['index-dist.html'],
					dest: 'dist/',
					rename: function (dest, src)
					{
						return dest + src.replace('index-dist', 'index');
					}
				}]
			},
			dist:
			{
				files: [
				{
					cwd: 'frontend/',
					expand: true,
					src: ['img/**'],
					dest: 'dist/'
				},
				{
					cwd: 'frontend/',
					expand: true,
					src: ['partials/**'],
					dest: 'dist/'
				},
				{
					cwd: 'frontend/',
					expand: true,
					src: ['vendor/**'],
					dest: 'dist/'
				},
				{
					cwd: 'frontend/',
					expand: true,
					src: ['node_modules/**'],
					dest: 'dist/'
				},
				{
					cwd: 'frontend/',
					expand: true,
					src: ['font/**'],
					dest: 'dist/'
				},
				{
					cwd: 'frontend/',
					expand: true,
					src: ['taunts/**'],
					dest: 'dist/'
				},
				{
					cwd: 'frontend/',
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
			options: {
			 	livereload: 8080
			},
			frontend: {
				files: ['frontend/*.js', 'frontend/**/*.js', 'frontend/*/*.json', 'frontend/*.html', 'frontend/**/*.html',
					'!frontend/vendor/*', '!frontend/node_modules/*', '!dist/*', '!dist/**/*'
				],
				tasks: ['jsbeautifier']
			},
			sass: {
				files: ['frontend/sass/**/*.scss'],
				tasks: ['sass:dev']
			},
			express: {
				files: ['backend/**/*.js', 'Gruntfile.js'],
				tasks: ['express:dev'],
				options:{
					spawn:false,
					atBegin: false
				}
			}
		},
		// Run some tasks in parallel to speed up build process
		concurrent:
		{
			dev: {
				target: {
					options:{
						logConcurrentOutput: true
					},
					tasks: ['watch:express','watch:frontend','watch:sass']
				}
			}
		},
		open:
		{
			all: {
				path: 'http://localhost:8000'
			}
		},
		nodewebkit:
		{
			options:
			{
				build_dir: './build',
				// choose what platforms to compile for here
				mac: true,
				win: true,
				linux32: true,
				linux64: true
			},
			src: ['./dist/**/*']
		}
	});

	// Default task: running development server with livereload, beautifier and watch for sass changes. User is logged in.
	grunt.registerTask('default', function ()
	{
		grunt.task.run([
			'express:dev',
			'open:all',
			'watch'
		]);
	});
	// Distribution task: running cleaning on dist folder, create main.css from sass files, compress and combine js files and copy all needed files to dist folder
	grunt.registerTask('dist-prepare', ['clean:dist', 'sass:dist', 'uglify:min',
		'copy:dist'
	]);

	// Distribution task: running cleaning on dist folder, create main.css from sass files, compress and combine js files and copy all needed files to dist folder
	grunt.registerTask('dist-serve', ['express:dist', 'open:all', 'watch'
	]);
	// Test task: allows for testing with debugging off and authentication normal
	// TODO: remove debugging and change backend when we have hardware
	grunt.registerTask('test', ['clean:dist', 'sass:dist', 'uglify:min',
		'copy:dist', 'open:all'
	]);

	// Build task: allows for building an app out of repository
	grunt.registerTask('build-prepare', ['clean:dist', 'sass:dist', 'uglify:min',
		'copy:build'
	]);
	// Build task: allows for building an app out of repository
	grunt.registerTask('build', ['clean:build', 'nodewebkit'
	]);
};
