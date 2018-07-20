window.onload=initBannerLink;

var theAd = 0;
var adURL = new Array("baidu.com","sun.com","microsoft.com");
var adImages = new Array("images/w_1 (1).jpg","images/w_1 (2).jpg","images/w_1 (3).jpg");
function initBannerLink(){
	if(document.getElementById("adBanner").parentNode.tagName =="A"){
		document.getElementById("adBanner").parentNode.onclick=newLocation;
		//它首先检查adBanner对象是否包围在链接标签中。如果是这样，那么当单击
		//链接时，将调用newLocation()函数。最后调用rotate()函数。
	}
	rotate();
}
function newLocation(){
	document.location.href = "http://www."+adURL[theAd];
	return false;
	//这段代码在新函数newLocation中，将document.location.href对象设置为
	//文本字符串http://www.加上adURL的值。因为adURL是一个数组，所以需要
	//指定数组的一个成员。
}
function rotate(){
	theAd++;
	if(theAd ==adImages.length){
		theAd=0;
	}
	document.getElementById("adBanner").src=adImages[theAd];
	setTimeout(rotate,3*1000);
}