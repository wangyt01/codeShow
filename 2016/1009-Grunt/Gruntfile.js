module.exports=function(grunt){
	//Project configuration.
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		uglify:{
			options:{
				banner:'*! create by <%=grunt.template.today("yyy-mm-dd")%>*/\n'
			},
			static_mappings:{
				files:[{
					src:'js/index.js',
					dest:'build/index.min.js'
				},{
					src:'js/main.js',
					dest:'build/main.min.js'
				}],
			}
		},
		 concat: {
  options: {
    // 定义一个用于插入合并输出文件之间的字符
    separator: ';'
  },
  dist: {
    // 将要被合并的文件
    src: ['build/*.js'],
    // 合并后的JS文件的存放位置
    dest: 'dest/all.min.js'
  },
},
      watch:{
      	files:['js/index.js'],
      	tasks:['uglify','concat']
      }
      
	});
	//加载包含"uglify"任务的插件。
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
    //默认被执行的任务列表。
	grunt.registerTask('default',['uglify','concat','watch']);
};