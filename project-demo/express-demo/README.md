
#### 1.  启动的命令  
```
   //打开项目的命令  
   set DEBUG=express-demo:* & npm start
```

#### 2.  中间件的使用  
```
	app.use(express.static(path.join(__dirname, 'public')));

	http://localhost:3000/images/user.jpg
```
#### 3.  让npm打印出端口号

##### 修改./bin/www中 www文件,在函数`onListening()`中添加如下代码
```
    console.log("成功启动并打印端口号 http://localhost:" + port);
    console.log('express-demo server listening on port ' + port);
```
