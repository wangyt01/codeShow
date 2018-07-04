window.onload =choosePic;
var theAd = 0;
var adImages = new Array("images/a_1.jpg","images/a_2.jpg","images/a_3.jpg");

function choosePic(){
	theAd = Math.floor(Math.random()*adImages.length);
	//变量randomNum被设置为一个数学表达式的值。这个表达式最好是从内向外读。
	//Math.random生成一个0~1的随机数，然后将这个数字乘以adImages.length,即
	//数组中成员的数量，Math.floor将结果向下取整，这意味着最终产生0，1和2
	//中的一个数字。
	document.getElementById("adBanner").src = adImages[theAd];
	rotate();
}
function rotate(){
	//先创建一个称为rotate()的新函数。
	theAd++;
	if(theAd ==adImages.length){
		theAd=0;
		//这一行检查代码theAd的值是否等于adImages数组中成员的数量，如果等于，就将
		//theAd的值设置为0。

	}
	document.getElementById("adBanner").src=adImages[theAd];
	//页面上循环显示的图像的id是adBanner。
	setTimeout(rotate,3*1000);
	//这一行告诉脚本每隔多长时间改变广告条中的图片。可以使用内置的JavaScript
	//命令setTimeout指定一个操作应该间隔多长时间执行一次。3秒变一次。	
}