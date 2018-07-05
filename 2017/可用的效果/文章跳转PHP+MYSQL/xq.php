<?php
//解决中文乱码,发现不能奏效，则考虑MySQL客户端乱码情况
header("Content-type=text/html;charset=utf-8");

include( "connect.php" );

// 获取总的记录数
$sql_total_records = "select count(*) from news";
$total_records_result = mysql_query($sql_total_records);
$total_records = mysql_fetch_row($total_records_result);
// echo "所有信息:".$total_records[0]."";


// 获得总页数，一般来说页面大小事固定的，所以这里暂且定为一页5个数据
$page_size = 1;
$total_pages = ceil($total_records[0]/$page_size);
// echo "共找到 ".$total_pages."条信息";
// echo "<br>";


// 通过GET方式获得客户端访问的页码
$current_page_number = isset($_GET['page_number'])?$_GET['page_number']:1;
if($current_page_number<1) {
 $current_page_number =1;
}
if($current_page_number>$total_pages){
 $current_page_number = $total_pages;
}
// echo "要访问的页码为：".$current_page_number;

// 获取到了要访问的页面以及页面大小，下面开始分页
$begin_position = ($current_page_number-1)*$page_size;
$sql = "select * from news limit $begin_position,$page_size";
$result = mysql_query($sql);


// 处理结果集
	
   
while(($row = mysql_fetch_row($result))){

 // echo "<h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;".$row[0]."</h2>";
 echo "<div class='text-top'>";
 echo "<h4>".$row[1]."</h4>";
 echo "<p>".substr($row[2],0,10)."</p><br>";
 echo "</div>";
 echo "<p>".$row[3]."</p>";
 // echo "<td>".$row[4]."</td>";
 // echo "<td>".$row[5]."</td>";
}

// 循环显示总页数
?>
<?php



echo '<a href="index.php?page_number=1">首页</a>  ';
// for($i=1;$i<=$total_pages;$i++){
//  echo '<a href="./xq.php?page_number='.$i.'">第'.$i.'页</a>  ';
// }
echo '<a href="xq.php?page_number='.($current_page_number-1).'">上一页</a>  ';
echo '<a href="xq.php?page_number='.($current_page_number+1).'">下一页</a>  ';
echo '<a href="xq.php?page_number='.($total_pages).'">尾页</a>  ';
echo "<br>";

echo "所有信息:".$total_records[0]."";
echo "共找到 ".$total_pages."条信息";

// 释放数据连接资源
mysql_free_result($result);
mysql_close($conn);

?>