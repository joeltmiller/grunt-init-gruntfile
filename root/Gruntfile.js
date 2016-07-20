module.exports = function(grunt) {

  grunt.initConfig({

    jshint: {
      files: ['Gruntfile.js', 'public/*.js', 'routes/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['**/*.js'],
      tasks: ['jshint']
    },
    copy: {
      main: {
        files: [
          // makes all src relative to cwd
          {expand: true, cwd: 'node_modules', src: ['angular/**', 'bootstrap/**'], dest: 'dest/'},
        ],
      },
    },
    uglify: {
     my_target: {
       options: {
         mangle: false
       },
       files: {
         'dest/output.min.js': ['public/scripts/MainController.js']
       }
     }
   }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['jshint', 'watch']);
  grunt.registerTask('banana', ['watch']);

};
