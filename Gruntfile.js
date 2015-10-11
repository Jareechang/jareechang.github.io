module.exports = function(grunt){
    
    grunt.initConfig({    
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
            css: {
              files: ['scss/**/*.scss'],
              tasks: ['sass'],        
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', ['watch']);

};