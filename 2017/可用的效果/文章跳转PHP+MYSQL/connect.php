<?php
// error_reporting(E_ALL^E_NOTICE^E_WARNING);
error_reporting(0);


$host = "localhost";
$username = "root";
$password = "123456";
$dbname = "bsjx";
 
// 开始获取数据库连接
$conn = mysql_connect($host,$username,$password) or die(mysql_error());
// 手动更改客户端编码
mysql_query("set names utf8");
// 选择使用哪一个数据库
mysql_select_db($dbname);
?>