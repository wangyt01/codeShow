window.onload = initAll;
var usedNums  = new Array(76);
function initAll(){
	if(document.getElementById){
		document.getElementById("reload").onclick= anotherCard;
		newCard();
	}
	else{
		alert("Sorry,your browser dosen't this script");
	}
}
function newCard(){
	for(var i=0;i<24;i++){
		setSquare(i);
	}
}
function setSquare(thisSquare){
	var currSquare = "square"+thisSquare;
	var colPlace= new Array(0,0,0,0,0,1,1,1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4);
	var colBasis = colPlace[thisSquare]*15;
	var newNum;
	do{
		newNum = colBasis+getNewNum()+1;
	}
	while(usedNums[newNum]);
	usedNums[newNum]=true;
	document.getElementById(currSquare).innerHTML = newNum;
}
function getNewNum(){
	return Math.floor(Math.random()*15);
}
function anotherCard(){
	for (var i=1;i<usedNums.length;i++){
		usedNums[i]=false;
	}
	newCard();
    return false;
	
}
//以多种方式调用脚本
//1.document.grtElementById("reload").onclick = anotherCard;
//newCard();
//我们已经看过initAll()函数，但是这里的initAll()函数有一些变化：在HTML页面上设置
//链接，让它在被单击时调用anotherCard()。initAll()函数中原来的所有计算现在被转移
//到新的newCard()函数中，这里只需要调用newCard()函数，newCard()函数中没有需要讨论的
//新代码。
//2.function anotherCard(){
//for(var i=1;i<usedNums.length;i++){
//usedNums[1]=false;
//}
//newCard();
//return false;
//}
//这是anotherCard()函数，当用户点击链接时会调用这个函数，他执行3个操作：
//1）将usedNums[]数组中所有的元素设置为false（这样就可以重新使用所有的数字）；
//2）调用newCard()函数(生成另一个卡片)；
//3）返回false值，使浏览器不尝试加载链接的href中指定的页面
//这是Ajax基本特色