window.onload=rolloverInit;
function rolloverInit(){
	for(var i=0;i<document.images.length;i++){
		// rolloverInit()函数扫描页面上的每个图像，检查图像外边的标签是否是<a>标签，
        //如果是，就说明它是一个链接。
		if(document.images[i].parentNode.tagName=="A"){
			//这里检查包围图像的是否是锚标签
			setupRollover(document.images[i]);
			//如果上一步测试结果是true，那么调用函数并传递当前图像。
		}
	}
}
function setupRollover(theImage){
	//这个函数将两个新的属性添加到传递给他的图像对象中。
	theImage.outImage=new Image();
	//获得传递进来的图像对象，并在其中添加新的outImage属性。
	theImage.outImage.src=theImage.src;
	//将新的outImage的来源设置为与theImage的来源相同。
	theImage.onmouseout=function(){
		this.src = this.outImage.src;
	}
	//第一行开始定义一个匿名函数。在这里我们告诉浏览器当用户鼠标离开时应该触发什么操作。
	theImage.overImage=new Image();
	//创建一个新的图像对象，它包含图像的overImage版本
	theImage.overImage.src="images/"+theImage.id+"_on.png"; 
	//设置overImage的来源。
	theImage.onmouseover =function(){
		this.src=this.overImage.src;
		//这是一个匿名函数。他告诉浏览器，当用户鼠标移动到图像上时，应该把
		//图像的源重新设置为overImage版本。
	}
}
