window.onload = initAll;
var usedNums= new Array(76);
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
	var currSquare = "square"+thisSquare;
	var colPlace = new Array(0,0,0,0,0,1,1,1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4);
	var colBasis = colPlace[thisSquare]*15;
	var newNum;
	do{
		newNum = colBasis+getnewNum()+1;
	}
	while(usedNums[newNum]);
	usedNums[newNum]=true;
	document.getElementById(currSquare).innerHTML=newNum;
}
function getnewNum(){
	return Math.floor(Math.random()*15);
}
//使用do/while循环
//1.var newNum;
//在前面的示例中，我们在创建newNum变量时对它进行初始化。因为我们将多次设置它，
//所以在进行循环之前创建它，这样只需要一次。
//2.do
//这一行开始do代码块。关于这种循环必须记住的一点是，do块中的代码至少会执行一次。
//3.newNum = colBasis+gerNewNum()+1;
//与前面的一样，循环中的这行代码将newNum变量设置为我们需要的数字。
//5.while(usedNums[newNum]);
//while检查会使do代码块反复执行，知道检查结果为flase为止。在这个示例中，我们检查
//uesdNum[]数组中newNum位置上的值，从而检查newNum是否已经使用过了。如果这个数字
//已经用过了，控制就被传递回do块的开头，整个过程再次重复。最终，我们会找到一个没有使用过
//的数字。在此之后，就会离开循环，将usedNum设置为true,并将newNum写到卡片上。