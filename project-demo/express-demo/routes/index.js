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
	next();
});

router.post('/index', function(req, res) {
	var id = req.body.id;
	var name = req.body.username;
	var response = res;
	console.log("-------------------")
	console.log(name.length)
	console.log("-------------------")

	//删除利用id
	if (id) {
		//删除
		demoModel.deleteOne({
			_id: id
		}, function(err, result) {
			if (err) {
				console.log("删除错误" + err);
				//页面错误的状态
				res.send(500);
				return;
			} else {
				console.log("删除成功");
				//页面的成功状态
				res.send(JSON.stringify(result));
				return;
			}
		});
	}
	//查询利用名字
	if (name != void 0) {
		if (name.length == 0) {
			var param = {}
		} else {
			var param = {
				name: name
			}
		}
		console.log('$$$$$$$$$$$$$$$$')
		demoModel.find(param, function(err, data, res) {
			if (err) {
				console.log(err);
				res.send({
					result: false
				});
				return;
			} else {
				console.log("查询成功");
				response.send(data);
				return;

			}
		})
	}
})

// router.get('/logout', function(req, res, next) {
// 	console.log("***************************************");
// 	//删除登录信息
// 	delete req.session.user;
// 	if (req.session.user != void 0) {
// 		console.log("已经登录");
// 		res.redirect("/");
// 	} else {
// 		// console.log("no login")
// 		// res.render("login")
// 		res.redirect("login");
// 		// res.render("login");
// 	}
// });

// module.exports = router;

router.get('/about', function(req, res) {
	res.render('about', {
		title: '关于'
	});
});
router.post('/about', function(req, res) {});

router.get('/login', function(req, res, next) {
	res.render('login', {
		title: '登录'
	});
	next();
});
router.post('/login', function(req, res) {
	var username = req.body.name;
	var psw = req.body.psw;
	var param = {
		name: username,
		password: psw
	}
	console.log(param)
	demoModel.findOne({
		name: username
	}, function(err, result) {
		if (err) {
			res.send(500);
			console.log("login:" + err);
			return;

		} else if (!result) {
			req.session.error = '用户名不存在';
			res.send(404);
			return;

		} else {
			//从数据库查出的密码是否和这个一样
			if (psw != result.password) {
				req.session.error = '密码错误';
				res.send(404);
				return;

			} else {
				req.session.user = result;
				res.send(200);
				return;

			}
		}
	})
});

router.get('/registered', function(req, res) {
	res.render('registered', {
		title: '注册'
	});
});
router.post('/registered', function(req, res, next) {
	var username = req.body.name;
	var psw = req.body.psw;
	var param = {
		name: username,
		password: psw
	}
	console.log(param)
	demoModel.findOne({
		name: username
	}, function(err, result) {
		if (err) {
			res.send(500);
			console.log("registered:" + err);
			return;

		} else if (result) {
			req.session.error = '用户已存在';
			res.send(500);
			return;

		} else {

			demoModel.create(param, function(err, docs) {
				if (err) {
					res.send(500);
					console.log("err:" + err);
					return;

				} else {
					req.session.error = '创建成功';
					res.send(200);
					console.log('create()创建--保存成功：' + docs);
					return;

				}
			})
		}
	})
	next();
});


module.exports = router;