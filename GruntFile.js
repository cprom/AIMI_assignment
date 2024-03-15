
module.exports = function(grunt) {

  // Load required plugins
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Configure tasks
  grunt.initConfig({
    copy: {
      dist: {
        files: [
          // Copy index.html directly
          { src: 'src/index.html', dest: 'dist/index.html' },
          // Copy js folder and its contents
          { expand: true, cwd: 'src/js', src: ['**'], dest: 'dist/js' }
        ]
      }
    },
    sass: {
      dist: {
        options: {
          // Enable source maps for easier debugging
          sourceMap: true
        },
        files: {
          'dist/css/styles.css': 'src/js/scss/styles.scss'
        }
      }
    }
  });

  // Register tasks
  grunt.registerTask('compile-scss', ['sass:dist']);
  grunt.registerTask('default', ['copy', 'compile-scss']);
};
