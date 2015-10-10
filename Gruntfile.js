module.exports = function(grunt){
    
    grunt.initConfig({
        
        concat: {
            js: {
              src: ['js/intro.js', 'src/project.js', 'src/outro.js'],
              dest: 'build/js/main.js',
            },
            css: {
              src: ['css/main.css', 'css/theme.css'],
              dest: 'build/css/styles.css',
            },
        },

        sass: {                              
            dist: {                          
                options: {                     
                  style: 'compressed'
                },
                files: {                       
                  'css/styles.min.css': 'scss/styles.scss',                                         
                }
            }
        },

        watch: {
            js: {
              files: ['js/**/*.js'],
              tasks: ['concat:js'],        
            },
            css: {
              files: ['scss/**/*.scss'],
              tasks: ['sass'],        
            },
        }


    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', ['watch']);

};