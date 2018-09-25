/******************
 ** 连接数据库 test
 ** 
 *******************/

'use strict'
// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

// 实例化连接对象
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("连接成功!");
});

var kittySchema = mongoose.Schema({
	name: String,
	// 用户名: 字符串
    username: String,
    // 密码: 字符串
    password: String,
    //时间
    date: { type: Date, default: Date.now }
}
//这个代码添加,防止表在moogoose查循中表的名字自动添加 s 
,{collection: 'demos' }
);


// 创建model

//表abcs
var abcModel = mongoose.model('abcs', kittySchema);
//表demos
var demoModel = mongoose.model('demos',kittySchema);
//第三个参数添加之后不会让表自动添加s
var demo = mongoose.model('demo',kittySchema,'demo');
// var doc = ({
// 	name: 'test'
// })

// //增加数据create() - 但是把数据添加到demos中去了  demo存在没有意义
// Kitten.create(doc, function(err, docs){
//     if(err) console.log(err);
//     console.log('create()创建--保存成功：' + docs);
// });

// //简单查询
// demo.find({},function(err,data){
// 	if(err) console.log(err)
// 		console.log("查询结果: " + data);
// })

// //查询数据-简单查询所有
// demoModel.find({},function(err,docs){
// 	if(err) console.log(err);
// 	console.log("查询结果: "+ docs);
// })




module.exports = demoModel