document.onkeydown = keyHit;
//这里将keyHit()函数注册为onkeydown事件的处理程序。
var thisPic = 0;
//在全局范围对变量thisPic进行初始化和设置，因此他存储全局的值
//在每次调用keyHit()时都可以使用这个变量。

function keyHit(evt){
	var myPix = new Array("images/callisto.jpg","images/europa.jpg","images/io.jpg","images/ganymede.jpg");
	var imgCt = myPix.length-1;
	var ltArrow = 37;
	var rtArrow = 39;
	//左箭头产生数字37，右箭头产生数字39。我们把这些值存储在变量中，
	//用来判断用户按下的是哪个键。

	if(evt){
		var thisKey = evt.which;
		// alert(thisKey);
		// 如果不确定某个键的键值，就在这里加入alert(thisKey)；
		// 然后按下你要检查的键。这个警告框会显示键值。
	}
	else{
		var thisKey = window.event.keyCode;
	}

	//了解用户按下的那个键的方法取决于他们使用的浏览器。如果是
	//Firefox、Chrome或Safari,就查看evt.which,这个属性包含键的
	//编码。如果是IE，那么编码包含在window.event.keyCode中。
	//无论是哪种都保存在thisKey中。

	if(thisKey == ltArrow){
		chgSlide(-1);
	}
		else if(thisKey == rtArrow){
			chgSlide(1);
		}
		//如果用户按下左箭头键，就将幻灯片退后一帧；如果按下右箭头
		//键；就将幻灯片前进一帧。如果他们按下的是其他键，就不会
		//任何操作。


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
