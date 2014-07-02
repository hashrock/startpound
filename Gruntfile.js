module.exports = function (grunt) {
	grunt.initConfig({
		jshint: {
			files: [
				['<%= my_js_files %>'],
				'package.json',
			],
			options: {
				jshintrc: '.jshintrc'
			}
		},
		watch: {
			html: {
				files: ['<%= my_html_files %>'],
				tasks: ["jsbeautifier"],
				options: {
					livereload: true
				}
			},
			css: {
				files: ['<%= my_css_files %>'],
				options: {
					livereload: true
				}
			},
			js: {
				files: ['<%= my_js_files %>'],
				tasks: ["jsbeautifier", "jshint"],
				options: {
					livereload: true
				}
			}
		},
		connect: {
			server: {
				options: {
					port: 4000,
					base: './'
				}
			}
		},
		jsbeautifier: {
			files: ['<%= my_js_files %>', '<%= my_html_files %>'],
			options: {
				config: ".jsbeautifyrc"
			}
		},
		my_js_files: ["*.js"],
		my_html_files: ['*.html'],
		my_css_files: ['*.css']
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-jsbeautifier');
	grunt.registerTask('default', ['connect', 'watch']);
};
