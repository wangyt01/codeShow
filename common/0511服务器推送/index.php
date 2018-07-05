<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/5/11
 * Time: 15:19
 */
header('Content-Type:text/event-stream');

for($i = 0; $i<100;$i++){
    date_default_timezone_set("Asia/Shanghai");
    echo"event:newDate\n";
    echo 'data:' .date('Y-m-d H-i-s');
    echo "\n\n";
    flush();
    sleep(1);
}