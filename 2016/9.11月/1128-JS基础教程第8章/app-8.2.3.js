document.onmousemove = moveHandler;

function moveHandler(evt){
	if(!evt){
		evt = window.event;
	}
	animateEyes(evt.clientX,evt.clientY);
}
//每当发生mousemove事件时，就会触发moveHandler()函数。如果访问者使用
//IE，就需要对evt进行初始化，然后对所有浏览器，调用animateEyes()
//函数并且将鼠标指针的X和Y坐标传递个他。

function animateEyes(xPos,yPos){
	//这个函数根据传递给他的X和Y坐标转动眼睛。
	var rightEye = document.getElementById("rEye");
	var leftEye = document.getElementById("lEye");
	var rightEyeball = document.getElementById("rDot").style;
	var leftEyeball = document.getElementById("lDot").style;
	//这段代码将变量设置为左右眼眶图像和瞳孔图像的id。

	leftEyeball.left = newEyeballPos(xPos,leftEye.offsetLeft);
	leftEyeball.top = newEyeballPos(yPos,leftEye.offsetTop);
	rightEyeball.left = newEyeballPos(xPos,rightEye.offsetLeft);
	rightEyeball.top = newEyeballPos(yPos,rightEye.offsetTop);
    //这些代码根据鼠标指针的位置绘制眼球，其中使用了下一步中定义
    //的newEyeballPos()函数的结果。

	function newEyeballPos(currPos,eyePos){
		return Math.min(Math.max(currPos,eyePos+3),eyePos+17)+"px";
		//我们不希望眼球跑到眼眶外面去。所以对于每个眼球，我们确保它
		//尽可能接近鼠标指针，同时仍然在眼眶里。
	}
}