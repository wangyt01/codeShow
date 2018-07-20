window.onload = initAll;
function initAll(){
	for(var i =0;i<24;i++){
		setSquare(i);//这行代码在initAll()函数中。我们将i的值传递给setSquare()函数；
	}
}
function setSquare(thisSquare){
	var currSquare = "square"+thisSquare;
	var newNum = Math.floor(Math.random()*75)+1;
	document.getElementById(currSquare).innerHTML=newNum;
	
}