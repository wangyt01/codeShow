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
function setupRollover(thisLink, textImage) {
	thisLink.imgToChange = new Array;
	thisLink.outImage = new Array;
	thisLink.overImage = new Array;
	//添加这些行，是因为这个脚本有更多的脚本处理。在每一行中，我们为thisLink
	//创建一个新属性，每个属性都是一个数组。

	thisLink.imgToChange[0] = textImage;
	//imgToChange是一个包含图像的数组。
	thisLink.onmouseout = rollOut;
	thisLink.onmouseover = rollOver;

	thisLink.outImage[0] = new Image();
	thisLink.outImage[0].src = textImage.src;
	//与前面一样，需要存储图像的outImage版本，但是这一次他存储在outImage数组的
	//的第一个元素中。

	thisLink.overImage[0] = new Image();
	thisLink.overImage[0].src = "images/" + thisLink.id + "Text.png";
	//计算出图像的outImage版本的文件名并将其存储在overImage数组的第一个元素中。
	var rolloverObj = document.getElementById(thisLink.id + "Img");

	if (rolloverObj) {
		//现在需要检查这个翻转器是否将触发多个图像，而不是一个图像。
		thisLink.imgToChange[1] = rolloverObj;
        //按照前面设置的imgToChange[0]的方式，将imgToChange[1]设置为新的rolloverObj。

		thisLink.outImage[1] = new Image();
		thisLink.outImage[1].src = rolloverObj.src;
		//这将outImage数组的第二个元素设置为图像的outImage版本。

		thisLink.overImage[1] = new Image();
        thisLink.overImage[1].src = "images/" + thisLink.id + "_on.png";
        //计算出图像的overImage版本的文件名并将其存储在overImage数组的第二个元素中。
	}
}
function rollOver(){
	for(var i=0;i<this.imgToChange.length;i++){
		this.imgToChange[i].src=this.overImage[i].src;
		//这段代码在rollOver函数中，这里是对图像进行切换的地方。
	}
}
function rollOut(){
	for (var i=0;i<this.imgToChange.length;i++){
		this.imgToChange[i].src=this.outImage[i].src;
	}
}