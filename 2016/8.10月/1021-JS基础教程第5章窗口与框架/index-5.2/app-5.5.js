window.onload=initLinks;
var pageCount = new Array(0,0,0,0);
//为了显示加载页面的次数，我们需要一种记录该信息的方法。在这里我们
//将会使用pageCount.

function initLinks(){
	for (var i=0;i<document.links.length;i++){
		document.links[i].onclick=writeContent;
		document.links[i].thisPage=i+1;
	}
}
function writeContent(){
	pageCount[this.thisPage]++;
	//这行代码自增pageCount数组，这样我们就可以跟踪到访问特定页面的
	//次数了。
	var newText = "<h1>You are now looking at example"+this.thisPage;
	newText+=".<br>You have been to this page";
	newText+=pageCount[this.thisPage]+"times.<\/h1>";

	document.getElementById("icontent").contentWindow.document.body.innerHTML=newText;
	//setContent()返回false，意味着告知浏览器不要
        //将href一并载入主窗口。
	return false;
}