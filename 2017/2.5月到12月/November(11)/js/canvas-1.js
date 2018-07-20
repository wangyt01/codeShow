// canvas居中
// window.onload = function() {
// 	main_div = document.getElementById("main");
// 	if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE8.0") {
// 		var windowScreen = document.documentElement;
// 		main_top = (windowScreen.clientWidth - main_div.clientWidth) / 2 + "px";
// 		main_left = (windowScreen.clientHeight - main_div.clientHeight) / 2 + "px";
// 		main_div.style.top = main_top;
// 		main_div.style.left = main_left;
// 	} else {
// 		main_div.style.top = "50%";
// 		main_div.style.left = "50%";
// 	}
// }


// 页码切换
var last = null;
var mainShow = false;
var btnShow = document.getElementById("show_ul");
var list = btnShow.getElementsByTagName("li");
var main = document.getElementById("main");
list[0].onclick = function() {
		if (mainShow) {
			main.classList.remove("owui-hide");
			mainShow = false;
		} else {
			main.classList.add("owui-hide");
			mainShow = true;
		}
	}
	// li标签背景切换
	// for(var i=0;i<list.length;i++){
	// 	list[i].onclick = function(){
	// 		if(last){
	// 			last.classList.remove("active");
	// 		}
	// 		this.classList.add("active");
	// 		last = this;

// 		}

// 	}

// 按钮显示隐藏 p元素
var isShow = true;
var btn = document.getElementById("show_btn");
var p = document.querySelectorAll("p[class='owui-p']");
btn.onclick = function() {
	if (isShow) {
		for (var i = 0; i < p.length; i++) {
			// p[i].setAttribute("class","owui-hide");
			p[i].classList.add("owui-hide");
		}
		isShow = false;
	} else {
		for (var i = 0; i < p.length; i++) {
			p[i].classList.remove("owui-hide")
		}
		isShow = true;
	}
}

// fillStyle JS
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "#0000ff";
ctx.fillRect(20, 20, 150, 100);

var c = document.getElementById("canvas_1");
var ctx = c.getContext("2d");
var my_gradient = ctx.createLinearGradient(0, 0, 0, 170);
my_gradient.addColorStop(0, "black");
my_gradient.addColorStop(1, "white");
ctx.fillStyle = my_gradient;
ctx.fillRect(20, 20, 150, 100);

var c = document.getElementById("canvas_2");
var ctx = c.getContext("2d");
var my_gradient = ctx.createLinearGradient(0, 0, 170, 0);
my_gradient.addColorStop(0, "black");
my_gradient.addColorStop(1, "white");
ctx.fillStyle = my_gradient;
ctx.fillRect(20, 20, 150, 100);

var c = document.getElementById("canvas_3");
var ctx = c.getContext("2d");
var my_gradient = ctx.createLinearGradient(0, 0, 170, 0);
my_gradient.addColorStop(0, "black");
my_gradient.addColorStop(0.5, "red");
my_gradient.addColorStop(1, "white");
ctx.fillStyle = my_gradient;
ctx.fillRect(20, 20, 150, 100);

var c = document.getElementById("canvas_4");
var ctx = c.getContext("2d");
ctx.strokeStyle = "#0000ff";
ctx.strokeRect(20, 20, 150, 100);

// strokeStyle JS
var c = document.getElementById("canvas_5");
var ctx = c.getContext("2d");
var gradient = ctx.createLinearGradient(0, 0, 170, 0);
gradient.addColorStop("0", "magenta");
gradient.addColorStop("0.5", "blue");
gradient.addColorStop("1", "red");

//用渐变进行填充
ctx.strokeStyle = gradient;
ctx.lineWidth = 5;
ctx.strokeRect(20, 20, 150, 100);

var c = document.getElementById("canvas_6");
var ctx = c.getContext("2d");
ctx.font = "30px Verdana";
ctx.strokeText("Hello World!", 10, 50);
//创建渐变
var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
gradient.addColorStop("0", "magenta");
gradient.addColorStop("0.5", "blue");
gradient.addColorStop("1", "red");
//用渐变进行填充
ctx.strokeStyle = gradient;
ctx.strokeText("Ordinary World!", 10, 90)

// shadowColor
var c = document.getElementById("canvas_7");
var ctx = c.getContext("2d");
ctx.shadowBlur = 20;
ctx.shadowColor = "black";
ctx.fillStyle = "blue";
ctx.fillRect(20, 20, 100, 80);

var c = document.getElementById("canvas_8");
var ctx = c.getContext("2d");
ctx.shadowBlur = 10;
ctx.shadowOffsetX = 20;
ctx.shadowColor = "black";
ctx.fillStyle = "blue";
ctx.fillRect(20, 20, 100, 80);

var c = document.getElementById("canvas_9");
var ctx = c.getContext("2d");
ctx.shadowBlur = 10;
ctx.shadowOffsetX = -20;
ctx.shadowColor = "black";
ctx.fillStyle = "blue";
ctx.fillRect(40, 20, 100, 80);

var c = document.getElementById("canvas_10");
var ctx = c.getContext("2d");
ctx.shadowBlur = 10;
ctx.shadowOffsetY = 20;
ctx.shadowColor = "black";
ctx.fillStyle = "blue";
ctx.fillRect(20, 40, 100, 80);

// shadowBlur
var c = document.getElementById("canvas_11");
var ctx = c.getContext("2d");
ctx.shadowBlur = 20;
ctx.shadowColor = "black";
ctx.fillStyle = "blue";
ctx.fillRect(20, 20, 100, 80);

// createRadialGradient
var c = document.getElementById("canvas_12");
var ctx = c.getContext("2d");

var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 100);

//addColorStop
var c = document.getElementById("canvas_13");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop("0.3", "magenta");
grd.addColorStop("0.5", "blue");
grd.addColorStop("0.6", "green");
grd.addColorStop("0.8", "yellow");
grd.addColorStop(1, "red");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);

// lineCap
var c = document.getElementById("canvas_14");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.lineWidth = 10;
ctx.lineCap = "butt";
ctx.moveTo(20, 20);
ctx.lineTo(200, 20);
ctx.stroke();

ctx.beginPath();
ctx.lineCap = "round";
ctx.moveTo(20, 40);
ctx.lineTo(200, 40);
ctx.stroke();

ctx.beginPath();
ctx.lineCap = "square";
ctx.moveTo(20, 60);
ctx.lineTo(200, 60);
ctx.stroke();

// lineJoin
var c = document.getElementById("canvas_15");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.lineJoin = "round";
ctx.moveTo(20, 20);
ctx.lineTo(60, 50);
ctx.lineTo(20, 100);
ctx.lineWidth = 10;
ctx.stroke();

ctx.beginPath();
ctx.lineJoin = "bevel";
ctx.moveTo(70, 20);
ctx.lineTo(110, 50);
ctx.lineTo(70, 100);
ctx.stroke();

ctx.beginPath();
ctx.lineJoin = "miter";
ctx.moveTo(120, 20);
ctx.lineTo(200, 50);
ctx.lineTo(120, 100);
ctx.stroke();

// 绘制五角星
var c = document.getElementById("canvas_16");
var ctx = c.getContext("2d");
var x = 100,
	y = 20;
ctx.beginPath();
ctx.lineJoin = "miter";
//五角星边的长度为100px，x1、h2为五角星的底部点坐标偏差值，x2、h2为五角星上部点偏差值
var x1 = 100 * Math.sin(Math.PI / 10);
var h1 = 100 * Math.cos(Math.PI / 10);
var x2 = 50;
var h2 = 50 * Math.tan(Math.PI / 5);
ctx.moveTo(x, y);
ctx.lineTo(x + x1, y + h1);
ctx.lineTo(x - 50, y + h2);
ctx.lineTo(x + 50, y + h2);
ctx.lineTo(x - x1, y + h1);
ctx.lineTo(x - x1, y + h1);
ctx.lineTo(x, y);
ctx.fillStyle = "red";
ctx.strokeStyle = "red";
ctx.lineCap
ctx.fill();
ctx.stroke();

// 绘制矩形
var c = document.getElementById("canvas_17");
var ctx = c.getContext("2d");
ctx.rect(20, 20, 150, 100);
ctx.stroke();

// 绘制3个矩形
var c = document.getElementById("canvas_18");
var ctx = c.getContext("2d");

// 红色矩形
ctx.beginPath();
ctx.lineWidth = "6";
ctx.strokeStyle = "red";
ctx.rect(5, 5, 290, 140);
ctx.stroke();

// 绿色矩形
ctx.beginPath();
ctx.lineWidth = "4";
ctx.strokeStyle = "green";
ctx.rect(30, 30, 50, 50);
ctx.stroke();

// 蓝色矩形
ctx.beginPath();
ctx.lineWidth = "10";
ctx.strokeStyle = "blue";
ctx.rect(50, 50, 150, 80);
ctx.stroke();

var c = document.getElementById("canvas_19");
var ctx = c.getContext("2d");
ctx.fillRect(20, 20, 150, 100);

var c = document.getElementById("canvas_20");
var ctx = c.getContext("2d");
ctx.fillStyle = "#ffaeae";
ctx.fillRect(0, 0, 300, 150);
ctx.clearRect(20, 20, 100, 50);