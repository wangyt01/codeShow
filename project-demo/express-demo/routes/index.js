var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express-demo' ,message:"这是index.js中的信息数据"});
});

router.get('/about', function (req, res) {
res.render('about', { title: '关于' });
});
router.post('/about', function (req, res) {
});

module.exports = router;
