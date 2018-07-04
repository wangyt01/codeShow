document.addEventListener("keydown",keyHit,false);
//此处，我们注册keyHit()函数来处理onkeydown事件。
//addEventListener()函数有3个参数：事件本身(目标)、触发事件时调用
//的函数(监听器)，以及用来指定事件被捕获(true)还有冒泡(false)
//的布尔值.
var thisPic =0;

function keyHit(evt){
	var myPix = new Array("images/catseyenebula.jpg","images/crabnebula.jpg","images/eskimonebula.jpg","images/ringnebula.jpg");
	var imgCt = myPix.length-1;
	var ltArrow = 37;
	var rtArrow = 39;

	if(evt){
		var thisKey = evt.which;
	}
	else{
		var thisKey = window.event.keyCode;
	}

	if(thisKey == ltArrow){
		chgSlide(-1);
	}
	else if(thisKey == rtArrow){
		chgSlide(1);
	}

	function chgSlide(direction){
		thisPic = thisPic + direction;
		if(thisPic > imgCt){
			thisPic = 0;
		}
		if(thisPic < 0){
			thisPic = imgCt;
		}
		document.getElementById("myPicture").src = myPix[thisPic];
	}
}