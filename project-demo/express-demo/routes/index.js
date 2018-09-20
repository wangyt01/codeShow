var express = require('express');
var demoModel = require('../lib/mongo/demo_db');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var response = res;
	demoModel.find({}, function(err, data, res) {
		if (err) console.log(err)
		response.render('index', {
			title: '首页',
			data: data
		});
		// console.log("index-结果查询:"+ data);
	})
	// res.render('index', { title: 'Express-demo' ,message:"这是index.js中的信息数据"});

});

router.get('/about', function(req, res) {
	res.render('about', {
		title: '关于'
	});
});
router.post('/about', function(req, res) {});

router.get('/login', function(req, res) {
	res.render('login', {
		title: '登录'
	});
});
router.post('/login', function(req, res) {});

router.get('/registered', function(req, res) {
	res.render('registered', {
		title: '注册'
	});
});
router.post('/registered', function(req, res, next) {
	var schema = new Schema({
		username: 111,
		password: 2222
	});
	schema.post('save', function(next) {
		// do stuff
		console.log("fffff")
		next(); //执行完毕，执行下一中间件
	});
});


module.exports = router;