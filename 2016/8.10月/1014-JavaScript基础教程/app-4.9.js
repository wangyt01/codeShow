window.onload=initLinks;

var thePic = 0;
var myPix = new Array("images/w_1 (1).jpg","images/w_1 (2).jpg","images/w_1 (3).jpg");

function initLinks(){
	document.getElementById("prevLink").onclick = processPrevious;
	document.getElementById("nextLink").onclick= processNext;
	//这个函数为Provious或Next链接设置onclick事件处理程序。
}

function processPrevious(){
	if(thePix==0){
		thePic=myPix.length;
		//这个函数使幻灯片向前切换图像。它首先检查thePic是否等于0.如果是
		//这个函数就获取myPix数组中图像数量。
	}
	thePic--;
	document.getElementById("myPicture"),src=myPix[thePic];
	//第一行将thePic的值减1.下一行将myPicture的src属性设置为myPic的当前这值
	//对应的元素。
	return false;
}
function processNext(){
	thePic++;
	if(thePic==myPix.length){
		thePic=0;
	}
	document.getElementById("myPicture").src=myPix[thePic];
	return false;
}