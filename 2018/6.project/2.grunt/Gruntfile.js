// module.exports = function(grunt) {
//   //Project configuration.
//   grunt.initConfig({
//     pkg: grunt.file.readJSON('package.json'),
//     uglify: {
//       options: {
//         banner: '*! create by <%=grunt.template.today("yyy-mm-dd")%>*/\n'
//       },
//       static_mappings: {
//         files: [{
//           src: 'src/index.js',
//           dest: 'build/index.min.js'
//         }],
//       }
//     },
//     concat: {
//       options: {
//         // 定义一个用于插入合并输出文件之间的字符
//         separator: ';'
//       },
//       dist: {
//         // 将要被合并的文件
//         src: ['build/*.js'],
//         // 合并后的JS文件的存放位置
//         dest: 'dest/all.min.js'
//       },
//     },
//     watch: {
//       files: ['js/index.js'],
//       tasks: ['uglify', 'concat']
//     }

//   });
//   //加载包含"uglify"任务的插件。
//   grunt.loadNpmTasks('grunt-contrib-uglify');
//   grunt.loadNpmTasks('grunt-contrib-concat');
//   grunt.loadNpmTasks('grunt-contrib-watch');
//   //默认被执行的任务列表。
//   grunt.registerTask('default', ['uglify', 'concat', 'watch']);
// };


module.exports = function(grunt) {
    // 使用严格模式
    'use strict';

    // 这里定义我们需要的任务
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        meta: {
            basePath: './',
            srcPath: 'dest/sass/', // 源码
            deployPath: 'dist/' // 编译输出
                ,
            srcPath_1: './scss/' // 源码
        },
        // the banner is inserted at the top of the output
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
        // 设置任务，删除文件夹
        clean: {
            dist: 'dist/'
        },


        // 通过sass编译成css文件
        sass: {
            dist: {
                options: {

                    sourcemap: 'none', //.map 映射是否生成
                    style: "expanded"
                },
                files: [{
                    expand: true,
                    cwd: '<%= meta.srcPath %>',
                    src: ['*.scss'],
                    dest: '<%= meta.deployPath %>',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: '<%= meta.srcPath_1 %>',
                    src: ['*.scss'],
                    dest: '<%= meta.deployPath %>',
                    ext: '.css'
                }]

            }
        },

        // 检测改变，自动跑sass任务
        watch: {
            scripts: {
                files: ['<%= meta.srcPath %>*.scss','<%= meta.srcPath_1 %>*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            }
        }
    });

    // 一定要引用着3个模块
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // 把需要跑的任务注册到default这里每次运行grunt的时候先删除dist，然后重新编译，最后监测文件夹的情况。
    grunt.registerTask('default', ['clean:dist', 'sass:dist', 'watch:scripts']);
};