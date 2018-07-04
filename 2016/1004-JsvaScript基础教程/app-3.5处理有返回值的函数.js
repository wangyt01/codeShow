window.onload = initAll;
function initAll(){
	if(document.getElementById){
		for (var i=0;i<24;i++){
			setSquare(i);
		}
	}
		else{
			alert("Sorry,your browser does'n support this script");
		}
	}
	function setSquare(thisSquare){
		var currSquare="square"+thisSquare;
		//thisSquare能输出0-23
		var colPlace = new Array(0,0,0,0,0,1,1,1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4);
		var colBasis = colPlace[thisSquare]*15;
		var newNum = colBasis + getNewNum()+1;
		document.getElementById(currSquare).innerHTML=newNum;
	}
function getNewNum(){
	return Math.floor(Math.random()*15);
	//这行代码计算一个0~14的随机数并返回他。在可以使用变量或数字的任何地方，都可以使用这个函数。
}