window.onload=initAll;
var usedNums = new Array(76);
function initAll(){
	if(document.getElementById){
		document.getElementById("reload").onclick=anotherCard;
		newCard();
	}
	else{
		alert("Sorry,your browser does't support this script");
	}
}
function newCard(){
	for(var i=0;i<24;i++){
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
	for (var i=1;i<usedNums.length;i++){
		usedNums[i]=false;
	}
	newCard();
	return false;
}
function toggleColor(evt){
	if(evt){
		var thisSquare=evt.target;
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
	checkWin();
}
function checkWin(){
	var winningOption=-1;
	var setSquares = 0;
	var winners = new Array(31,992,15360,507904,541729,557328,1083458,2162820,
		4329736,8519745,8659472,16252928);
	for(var i=0;i<24;i++){
		var currSquare ="square"+i;
		if(document.getElementById(currSquare).className !=""){
			document.getElementById(currSquare).className="pickedBG";
			setSquares = setSquares| Math.pow(2,i);
		}
	}
	for(var i=0;i<winners.length;i++){
		if((winners[i]& setSquares)==winners[i]){
			winningOption=i;
		}
	}
	if(winningOption>-1){
		for(var i=0;i<24;i++){
			if(winners[winningOption] & Math.pow(2,i)){
				currSquare="square"+i;
				document.getElementById(currSquare).className="winningBG";
			}
		}
	}
}
// 检查获胜状态
// 1.checkWin();
// 每当用户给格子加标记时，获胜状态都可能有变化，所以toggleColor()末尾要
// 调用checkWin()。
// var winningOption=-1;
	// var setSquares = 0;
	// var winners = new Array(31,992,15360,507904,541729,557328,1083458,2162820,
	// 	4329736,8519745,8659472,16252928);
// 在checkWin()的开头创建下面这些新变量。
// winningOption，存储用户可能遇到的获胜选项。
// setSquare，存储已经单击的格子。
// winners，是一个数字数组，其中的每个数字是有效获胜组合的编码值。
// 3.for(var i=0;i<24;i++){
		// var currSquare ="square"+i;
		// if(document.getElementById(currSquare).className !=""){
//对于卡片上的每个格子，需要检查他的号码是否已经被叫过。我们将使用格子的class
//属性作为标志————如果他是空的，就是没有被单击过；如果有class属性值，就执行下面的代码。、
//4.document.getElementById(currSquare).className="pickedBG";
			// setSquares = setSquares| Math.pow(2,i);
// 第一行很简单，实际上他应该是多余的————class属性已经设置为pickedBG。但是，也有可能例外
// ，比如当用户单击了他们原来不打算单击的格子时，碰巧获胜了（这会吧class属性重新设置为
// winningBG而不是pickedBG),然后用户每次单击这个格子恢复他的状态。如果用户实际上是获胜者
// ，后面会重新设置class属性。
// 第二行使用按位算术，根据卡片的每个可能状态把setSquare设置为一个数字。（|）对
// 两个值执行"或"计算：setSquares本身数字2^i。2^i是Math(2,i)的结果，2^0是1，2^1是
// 2，2^2是4，以此类推。对这两个数字执行按位"或"操作会产生一个表示用户所处状态
// 的变量（共超过1600万个可能的状态）。
// 5.for(var i=0;i<winners.length;i++){
	// 	if((winners[i]& setSquares)==winners[i]){
	// 		winningOption=i;
	// 	}
	// }
// 这是第二个比较复杂的部分。现在只知道卡片所处的状态，我们希望查明他
// 是否是获胜状态。在一般的Bingo游戏中，有12个获胜状态，这部分代码的
// 当前状态与每个获胜状态作比较。我们在每个获胜状态和当前状态之间执行
// 按位"与"计算。这会产生一个新状态，在这个状态中只有那些同时出现在
// 两个状态中的格子，才具有true值。然后，对这个新状态和同一个获胜状态
// 作比较，这样就能判断卡片是否完全符合这个获胜模式，即结果不包含
//获胜状态之外的所有选择，而且只要在获胜模式中找到的所有格子也会出现在
//当前模式，用户就是获胜者。在这里，把winningOption设置为i，这就是用户
//匹配模式。 
//6.if(winningOption>-1){
		// for(var i=0;i<24;i++){
			// if(winners[winningOption] & Math.pow(2,i)){
			// 	currSquare="square"+i;
			// 	document.getElementById(currSquare).className="winningBG";
// 最后，如果winningOption是大于-1的数字，就说明用户是获胜者。在这种情况下，
// 希望循环遍历每个格子，检查在获胜模式中是否可以找到他。如果是，就把class属性
// 设置为winningBG，我们的工作就完成了。