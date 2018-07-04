window.onload=rolloverInit;
function rolloverInit(){
	for(var i=0;i<document.links.length;i++){
		var linkObj =document.links[i];
		if(linkObj.className){
			var imgObj = document.getElementById(linkObj.className);
			//我们要使用class属性。在这一行上，寻找链接对象的className。
			if(imgObj){
				setupRollover(linkObj,imgObj);
			}
		}
	}
}
function setupRollover(theLink,textImage){
	theLink.imgToChange = textImage;
	//我们将当前链接对象（theLink）和图像对象(我们称之为textImage传递给setupRollover()
	//.函数)
	theLink.onmouseout = function(){
		this.imgToChange.src = this.outImage.src;
	}
	theLink.onmouseover=function(){
		this.imgToChange.src=this.overImage.src;
	}
	theLink.outImage = new Image();
	theLink.outImage.src=textImage.src;

	theLink.overImage = new Image();
	theLink.overImage.src = "images/"+theLink.id+"Text.png";
}