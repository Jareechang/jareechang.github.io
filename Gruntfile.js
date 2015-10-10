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

        watch: {
            js: {
              files: ['js/**/*.js'],
              tasks: ['concat:js'],        
            },
            css: {
              files: ['css/**/*.css'],
              tasks: ['concat:css'],        
            },
        },

        sass: {                              
            dist: {                          
                options: {                     
                  style: 'expanded'
                },
                files: {                       
                  'css/main.css': 'scss/main.scss',                       
                  'css/responsive.css': 'scss/responsive.scss'                       
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', ['sass']);

};