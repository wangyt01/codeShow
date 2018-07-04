window.onload =initAll;
function initAll(){
	for(var i=0;i<24;i++){
		var newNum = Math.floor(Math.random()*75)+1;
		// 在循环内部，我们创建了一个新的变量newNum，并将他赋值给等号右边计算的结果。
		document.getElementById("square"+i).innerHTML=newNum;
	}
}