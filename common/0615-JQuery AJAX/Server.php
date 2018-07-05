<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/6/15
 * Time: 10:30
 */

if(isset($_GET['name'])){
    echo "hello:".$_GET['name'];
}else{
    echo "Args Error";
}