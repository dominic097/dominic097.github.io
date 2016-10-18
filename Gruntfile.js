/**
 * Created by dominic on 15/10/16.
 */

module.exports = function(grunt) {


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            scripts: {
                files: '**/*.js',
                tasks: ['jshint', 'browserify', 'copy'],
                options: {
                    interrupt: true,
                    dateFormat: function(time) {
                        grunt.log.writeln('The watch finished in ' + time + 'ms at' + (new Date()).toString());
                        grunt.log.writeln('Waiting for more changes...');
                    }
                }
            }
            // browserify: {
            //     files: ['src/scripts/**/*.js'],
            //     tasks: ['']
            // }
        },

        copy: {
            main: {
                expand: true,
                src: 'src/css/*.css',
                dest: 'build/css/',
                flatten: true
            }
        },

        browserify: {
            dist: {
                options: {
                    transform: [['babelify', {presets: ['es2015', 'react']}]]
                },
                src: ['src/js/app.js'],
                dest: 'build/js/app.js'
            }
        },

        concat_css: {
            options: {
                // Task-specific options go here.
            },
            all: {
                src: ["src/**/*.css"],
                dest: "build/css/app.css"
            }
        },

        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['src/js/vendor/*.js', 'build/js/*.js'],
                dest: 'build/js/app.js',
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-contrib-concat');


    grunt.registerTask('default', ['browserify', 'concat_css', 'concat']);

};
