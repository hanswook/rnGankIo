module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        stripBanners: true,
        banner:
          '/*! <%=pkg.name%>-<%=pkg.version%>.js <%=grunt.template.today("yyyy-mm-dd") %> */\n',
      },
      files: {
        src: './static/script/test.js',
        dest: 'build/static/script/<%=pkg.name%>-<%=pkg.version%>.min.js',
      },
    },
    //css 压缩
    cssmin: {
      options: {
        report: 'gzip',
      },
      build: {
        expand: true,
        cwd: './static/style',
        src: ['test.css'],
        dest: './build/static/style',
      },
    },
    //html 压缩
    htmlmin: {
      options: {
        removeComments: true,
        removeCommentsFromCDATA: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeAttributeQuotes: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeOptionalTags: true,
      },
      build: {
        expand: true,
        cwd: './',
        src: ['*.html'],
        dest: './',
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.registerTask('default', ['uglify', 'cssmin', 'htmlmin']);
};
