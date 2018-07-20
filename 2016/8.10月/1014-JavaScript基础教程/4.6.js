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

	thisLink.imgToChange[0] = textImage;
	thisLink.onmouseout = rollOut;
	thisLink.onmouseover = rollOver;

	thisLink.outImage[0] = new Image();
	thisLink.outImage[0].src = textImage.src;

	thisLink.overImage[0] = new Image();
	thisLink.overImage[0].src = "images/" + thisLink.id + "Text.png";
	var rolloverObj = document.getElementById(thisLink.id + "Img");

	if (rolloverObj) {
		thisLink.imgToChange[1] = rolloverObj;

		thisLink.outImage[1] = new Image();
		thisLink.outImage[1].src = rolloverObj.src;

		thisLink.overImage[1] = new Image();
        thisLink.overImage[1].src = "images/" + thisLink.id + "_on.png";
	}
}
function rollOver(){
	for(var i=0;i<this.imgToChange.length;i++){
		this.imgToChange[i].src=this.overImage[i].src;
	}
}
function rollOut(){
	for (var i=0;i<this.imgToChange.length;i++){
		this.imgToChange[i].src=this.outImage[i].src;
	}
}