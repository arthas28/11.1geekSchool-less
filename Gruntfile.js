module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    //编译less文件
    less: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      files: {
        expand: true,
        cwd: 'less/',
        src: 'jikexueyuan.less',
        dest: 'css/',
        ext: '.css'
      }
    },
    // 压缩js
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'javascript/jikexueyuan.js',
        dest: 'build/jikexueyuan.min.js'
      }
    },
    // 压缩css
    cssmin: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'css/jikexueyuan.css',
        dest: 'build/jikexueyuan.min.css'
      }
    },
    // 压缩图片
    imagemin: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      files: {
        expand: true, 
        cwd: 'image/',
        src: '**/*.{png,jpg}', 
        dest: 'image'
      }
    },
    //监测less文件改动
    watch: {
        files: 'less/jikexueyuan.less',
        tasks: ['less','cssmin']
    }
  });

  // 加载包含 'less','uglify',cssmin','imagemin','watch' 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['less','uglify','cssmin','imagemin','watch']);

};