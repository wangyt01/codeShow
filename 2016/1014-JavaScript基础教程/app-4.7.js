window.onload=rotate;
var theAd = 0;
var adImages = new Array("images/w_1 (1).jpg","images/w_1 (2).jpg","images/w_1 (3).jpg");
//创建变量theAd，他在这段代码中被设置了初始值。第二行代码创建了一个名为adImages
//的新数组，他包含构成循环广告条的3个jpg文件的文件名。

function rotate(){
	//先创建一个称为rotate()的新函数。
	theAd++;
	if(theAd==adImages.length){
		theAd=0;
		//这一行检查代码theAd的值是否等于adImages数组中成员的数量，如果等于，就将
		//theAd的值设置为0。
	}
	document.getElementById("adBanner").src = adImages[theAd];
	//页面上循环显示的图像的id是adBanner。
	setTimeout(rotate,2*1000);	
	//这一行告诉脚本每隔多长时间改变广告条中的图片。可以使用内置的JavaScript
	//命令setTimeout指定一个操作应该间隔多长时间执行一次。2秒变一次。	
}