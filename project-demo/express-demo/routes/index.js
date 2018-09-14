var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express-demo' ,message:"这是index.js中的信息数据"});
});



module.exports = router;
