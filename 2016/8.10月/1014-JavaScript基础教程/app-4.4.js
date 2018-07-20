window.onload =rolloverInit;
function rolloverInit(){
	for(var i=0;i<document.links.length;i++){
		var linkObj = document.links[i];
		//我们创建linkObj变量并将它设置为当前链接。
		if(linkObj.id){
			var imgObj = document.getElementById(linkObj.id+"Img");
			//如果linkObj有id，就检查页面上是否有对应的图像函数，这个元素的id
			//是linkObj的id加上Img。如果有这样的函数，就将他放新变量imgObj中。
			if(imgObj){
				setupRollover(linkObj,imgObj);
				//如果imgObj存在，那么调用setupRollover()函数，
				//并将连接对象和图像对象传递给它
			}
		}
	}
}
function setupRollover(theLink,theImage){
	theLink.imgToChang = theImage;
	//在链接对象中添加一个新的属性imgToChang
	theLink.onmouseout = function(){
		this.imgToChang.src = this.outImage.src;
	}
	theLink.onmouseover =function(){
		this.imgToChang.src = this.overImage.src;
	}
	//mouseOver和mouseOut被触发时，现在重新设置this.imgToChang.src，而不是设置
	//this.src本身。
	theLink.outImage = new Image();
	theLink.outImage.src = theImage.src;
	theLink.overImage  =new Image();
	theLink.overImage.src = "images/"+theLink.id+"_on.png";
}