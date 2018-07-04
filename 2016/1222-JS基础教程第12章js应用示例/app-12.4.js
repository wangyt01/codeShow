window.addEventListener("load",initAll,false);

var currImg = 0;
var captionText =[
   "Our ship,leaving Vancouver.",
   "We took a helicopter ride at our first port, Juneau.",
   "The helicopter took us to Mendehall Glacier.",
   "The happy (and chilly) couple,on the glacier.",
   "Here's what our second stop,Ketchikan,looked like from the ship.",
   "We got to cruise through Glacier Bay.It was absolutely breathtaking！.",
   "7Here's what our second stop,Ketchikan,looked like from the ship.",
   "8Here's what our second stop,Ketchikan,looked like from the ship.",
   "9Here's what our second stop,Ketchikan,looked like from the ship.",
   "10Here's what our second stop,Ketchikan,looked like from the ship.",
];

function initAll(){
	document.getElementById("imgText").innerHTML = captionText[currImg];
	//initAll()函数需要3个东西：第一张幻灯片的照片寿命，以及前进和后退
	//按钮的click处理程序
	document.getElementById("prevLink").addEventListener("click",function(){newSlide(-1);},false);
	document.getElementById("nextLink").addEventListener("click",function(){newSlide(1);},false);

}

function newSlide(direction){
	var imgCt =captionText.length;
	currImg = currImg +direction;
	if(currImg<0){
		currImg = imgCt-1;
	}
	if(currImg ==imgCt){
		currImg =0;
	}
	document.getElementById("slideshow").src = "images/slideImg" +currImg+".jpg";
	document.getElementById("imgText").innerHTML = captionText[currImg];
}