
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
