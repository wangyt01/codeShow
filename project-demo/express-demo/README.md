
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

#### 4.  监控js代码改变的插件nodemon  
##### 要全局安装，项目中安装出现错误，所以全局安装使用就可以了
```
    npm install -g nodemon
    //使用
    nodemon ./bin/www
```
#### 5.  mongodb 配置启动
- 在E:\mongodb中建mongod.cfg文件,添加一下内容 
```
  systemLog:
    destination: file
    path: e:\mongodb\data\log\mongod.log
  storage:
    dbPath: E:\mongodb\data\db
```
- 启动MongoDB服务
```
  net start MongoDB
```
  
