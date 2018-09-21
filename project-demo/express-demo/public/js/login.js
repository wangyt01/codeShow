var ctx = ' ';
	//Demo
layui.use('form', function(){
  var form = layui.form;
  //监听提交
  form.on('submit(regForm)', function(data){
    // layer.msg(JSON.stringify(data.field));
    //数据结果
    // console.log(data.field)
    var data = {
    	name: data.field.username,
    	psw: data.field.password
    }
    // console.log(data)
	
	// autoAjax('/registered',data,function(data){
	// 	alert('fff')
	// })
 		$.ajax({
		url:'/registered',
		type:'post',
		data:data,
		success:function(data,status){
			alert(status)
			if(status=='success'){
				// location.href='login';
				// layer.msg('注册成功',function(){
					// layer.confirm('注册成功,是否登录?',function(){
					// location.href='login';
					// });
			}
		},
		error:function(data,err){
			console.log('ajax fail');
			layer.alert('用户已存在!');
			location.href='registered';

		}
	})
	return false;
  });
});