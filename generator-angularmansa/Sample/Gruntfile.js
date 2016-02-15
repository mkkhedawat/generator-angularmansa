'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        connect: {
            options: {
                port: 8000,
                livereload: 35729,
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: {
                        target: 'http://localhost:8000/app/index.html'
                    }
                }
            }
        },
        watch: {
            src: {
                files: ['app/*.html', 'app/**/*.js', 'app/**/**/*.js'],
                options: {
                    livereload: true
                }
            },
            bower: {
                files: ['bower.json'],
                tasks: ['wiredep']
            }
        },
        wiredep: {
            task: {
                src: [
                    'app/index.html'
                ]
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-wiredep');

    grunt.registerTask('serve', ['connect', 'watch:src']);
    grunt.registerTask('bower', ['watch:bower']);
};