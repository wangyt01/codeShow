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
$page_size = 10;
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
//取出id
// $mysql="select * from news  ";
// mysql_query("set names utf8");
// $query=mysql_query($mysql);

// 处理结果集
	echo "<table class='table' border='#CCF solid 0px'><th>新闻中心</th>";
    echo "<tr class='table-tr'><td>&nbsp;&nbsp;&nbsp;编号</td><td>标题</td><td>时间</td></tr>";
while(($row = mysql_fetch_array($result))){
 echo "<tr>";
 //这是ID
 echo "<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;".$row[0]."</td>";
 //这是文章的题目
 echo "<td><a href='xq.php?id={$row['id']}'>{$row['title']}</a></td>";
 //时间
 echo "<td>".substr($row[2],0,10)."</td>";
 // echo "<td>".$row[3]."</td>";
 // echo "<td>".$row[4]."</td>";
 // echo "<td>".$row[5]."</td>";
 echo "</tr>";
}
echo "</table>";
// 循环显示总页数
?>
<?php



echo '<a href="index.php?page_number=1">首页</a>  ';
for($i=1;$i<=$total_pages;$i++){
 echo '<a href="./index.php?page_number='.$i.'">第'.$i.'页</a>  ';
}
echo '<a href="index.php?page_number='.($current_page_number-1).'">上一页</a>  ';
echo '<a href="index.php?page_number='.($current_page_number+1).'">下一页</a>  ';
echo '<a href="index.php?page_number='.($total_pages).'">尾页</a>  ';
echo "<br>";

echo "所有信息:".$total_records[0]."条";
// echo "共找到 ".$total_pages."条信息";

// 释放数据连接资源
mysql_free_result($result);
mysql_close($conn);

?>