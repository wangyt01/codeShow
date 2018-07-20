<?php 
$mysql_server_name='localhost';      //改成自己的mysql数据库服务器
$mysql_username='root';                  //改成自己的mysql数据库用户名
$mysql_password='123456';        //改成自己的mysql数据库密码
$mysql_database='test';        //改成自己的mysql数据库名
 
$conn=mysql_connect($mysql_server_name,$mysql_username,$mysql_password,$mysql_database); 
$sql='CREATE DATABASE mycounter DEFAULT CHARACTER SET gbk COLLATE gbk_chinese_ci; 
'; 
mysql_query($sql); 
$sql='CREATE TABLE `counter` (`id` INT(255) UNSIGNED NOT NULL AUTO_INCREMENT ,`count` INT(255) UNSIGNED NOT NULL DEFAULT 0,PRIMARY KEY ( `id` ) ) TYPE = innodb;'; 
mysql_select_db($mysql_database,$conn); 
$result=mysql_query($sql); 
//echo $sql; 
mysql_close($conn); 
echo "Hello!数据库mycounter已经成功建立！"; 
?>