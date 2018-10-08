var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//++add login variable
var bodyParser = require('body-parser');
var session = require('express-session');

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// var aboutRouter = require('./routes/about');
// var loginRouter = require('./routes/login');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//--取消pug模板的使用
// app.set('view engine', 'pug');
//++添加ejs模板的使用
app.set('view engine', 'ejs');


app.use(logger('dev'));
//--delete
// app.use(express.json());
// app.use(express.urlencoded({
// 	extended: false
// }));
//++change login app.use
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//++session数据存储时长
app.use(session({ 
	secret: 'secret',
	cookie:{ 
		maxAge: 1000*60*30
	}
}));
//++当登录错误是打印文档，session数据清除
app.use(function(req,res,next){ 
	res.locals.user = req.session.user;
	var err = req.session.error;
	delete req.session.error;
	res.locals.message = "";
	// if(err){ 
	// 	res.locals.message = '<div class="alert alert-danger" style="margin-bottom:20px;color:red;">'+err+'</div>';
	// }
	next();
});


app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/about', aboutRouter);
// app.use('/login', loginRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});


module.exports = app;

//打开项目的命令
//set DEBUG=express-demo:* & npm start