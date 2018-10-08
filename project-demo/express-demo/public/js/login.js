var ctx = ' ';
//注册
layui.use('form', function() {
	var form = layui.form;
	//监听提交
	form.on('submit(regForm)', function(data) {
		// layer.msg(JSON.stringify(data.field));
		//数据结果
		// console.log(data.field)
		var data = {
			name: data.field.username,
			psw: data.field.password
		}
		// console.log(data)
		$.ajax({
			url: '/registered',
			type: 'post',
			data: data,
			success: function(data, status) {
				if (status == 'success') {
					layer.confirm('注册成功,是否登录?', function(index) {
						location.href = 'login';
						layer.close(index);
					})
				}
			},
			error: function(data, err) {
				layer.confirm('用户已存在,是否重新注册?', function(index) {
					//do something
					location.href = 'registered';
					layer.close(index);
				});
			}
		})
		return false;
	});
});

//登录
layui.use('form', function() {
	var form = layui.form;
	//监听提交
	form.on('submit(loginForm)', function(data) {
		var data = {
			name: data.field.username,
			psw: data.field.password
		}
		console.log(data);
		$.ajax({
			url: '/login',
			type: 'post',
			data: data,
			success: function(data, status) {
				if (status == 'success') {
					layer.msg('登录成功!', {
							time: 500 //2秒关闭（如果不配置，默认是3秒）
							,offset: '300px'
						},
						function(indexPage) {
							location.href = '/';
							layer.close(indexPage);
						})
				}
			},
			error: function(data, err) {
				layer.confirm('登录失败,请检查登录信息,是否重新输入?', function(index) {
					location.href = 'login';
					layer.close(index);
				})
			}
		})
		return false;
	});
});