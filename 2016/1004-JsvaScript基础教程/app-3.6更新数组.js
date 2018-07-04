window.onload = initAll;
var usedNums = new Array(76);
function initAll(){
	if(document.getElementById){
		for(var i=0;i<24;i++){
			setSquare(i);
		}
	}
	else{
		alert("Sorry,your browser doesn't support this script");
	}
}
function setSquare(thisSquare){
	var currSquare="square"+thisSquare;
	var colPlace=new Array(0,0,0,0,0,1,1,1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4);
	var colBasis=colPlace[thisSquare]*15;
	//0，15，30，45，60
	var newNum=colBasis+getNewNum()+1;
	//0，76
	 if(!usedNums[newNum]){
	 	usedNums[newNum]=true;
		document.getElementById(currSquare).innerHTML=newNum;
	 }
}
alert(usedNums);
function getNewNum(){
	return Math.floor(Math.random()*15);
	//0~15
}
//在运行时更新数组
//1.var usedNums = new Array(76);
//这是一种声明数组的新方法。我们将usedNums变量声明为一个包含76个对象的新数组。
//正如前面提到的，这些对象可以是任何东西。在这个示例中，他们是布尔值，即true/false值。
//2.if(!usedNums[newNum]){
//usedNums[newNum]=true;}
//如果usedNums数组中的newNum位置是flase，那么就将它设置为true，并将newNum写到卡片上。
//如果newNum位置上是true，就什么也不做，这样就不会有重复的数字，但是卡片可能会留下空格。
//