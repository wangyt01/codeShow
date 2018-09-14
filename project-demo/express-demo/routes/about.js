var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/views/about.pug', function(req, res, next) {
  res.send('这是关于的界面,由路由引入');
});

module.exports = router;