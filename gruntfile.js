module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [],
                dest: 'dist/js/mikemalcolm.co.uk.js'
            }
        },

        copy: {
            files: {
                cwd: 'src',
                src: ['index.html'],
                dest: 'dist/',
                expand: true
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: [{
                    cwd: 'src/scss',
                    expand: true,
                    src: ['**/*.scss'],
                    dest: 'dist/css',
                    ext: '.css',
                }]
            }
        },

        clean: {
            css: ['dist/css'],
            js: ['dist/js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['clean', 'copy', 'concat', 'sass']);
};