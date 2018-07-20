window.onload=initAll;
var usedNums = new Array(76);
function initAll(){
	if(document.getElementById){
		document.getElementById("reload").onclick = anotherCard;
		newCard();
	}
	else{
		alert("Sorry,your browser doesn't support this script");
	}
}
function newCard(){
	for (var i=0;i<24;i++){
		setSquare(i);
	}
}
function setSquare(thisSquare){
	var currSquare = "square"+thisSquare;
	var colPlace = new Array(0,0,0,0,0,1,1,1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4);
	var colBasis = colPlace[thisSquare]*15;
	var newNum;
	do{
		newNum = colBasis+getNewNum()+1;
	}
	while(usedNums[newNum]);
	usedNums[newNum]=true;
	document.getElementById(currSquare).innerHTML=newNum;
	document.getElementById(currSquare).className="";
	document.getElementById(currSquare).onmousedown=toggleColor;
}
function getNewNum(){
	return Math.floor(Math.random()*15);
}
function anotherCard(){
	for(var i=1;i<usedNums.length;i++){
		usedNums[i]=false;
	}
	newCard();
	return false;
}
function toggleColor(evt){
	if(evt){
		var thisSquare = evt.target;
	}
	else{
		var thisSquare = window.event.srcElement;
	}
	if(thisSquare.className==""){
		thisSquare.className="pickedBG";
	}
	else{
		thisSquare.className="";
	}
}
// 使用JavaScript应用样式
// 1.document.getElementById(currSquare).className="";
// document.getElementById(currSquare).onmousedown=toggleColor;
// 因为Bingo卡片是可以重复使用的，所以要确保Bingo卡片最初是空的：对于在setSquare()
// 中设置的每个格子，把class设置为""(空字符串)，并让onmousedown事件处理程序调用新的
// toggleColor()函数。
// 2.function toggleColor(evt){
// 现在，在新的toggleColor()函数中就要使用这个样式了。用户现在可以单击卡片上
// 任何格子，这个格子背景颜色就会改变，表示这个号码被叫过了。
// 3.if(evt){
// var thisSquare = evt.target;
// }
// else{
// 	var thisSquare = window.event.srcElement;
// }
// 首先，需要查明单击的是那个格子。
// 4.if(thisSquare.className==""){
		// thisSquare.className="pickedBG";
	// }
	// else{
		// thisSquare.className="";
	// }
// }
// 在这里，检查被单击的格子的class属性是否有一个值。如果没有，就给他设置pickedBG
// 值，因为格子的背景表示这个数字已经被选择了。
// 现在仅仅修改class属性并不会改变页面上的任何东西。class为pickedBG的任何标签的背景颜色与
// free格子相同。在这里修改class会对这个格子自动应用这个样式，使他显示粉红色背景。
// 当然，用户可能选错格子，需要有办法纠正错误。再次单击格子，这一次className有一个值
// ，所以把它恢复为空字符串。