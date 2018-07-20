window.onload = newWinLinks;

function newWinLinks() {
	for(var i=0;i<document.links.length;i++){
		if(document.links[i].className=="newWin"){
			document.links[i].onclick=newWindow;
		}
	}
}

function newWindow() {
	var catWindow = window.open(this.href,"catWin","width=350,height=260");
	catWindow.focus();
	//这里使用focus()方法使得我们新打开的窗口位于最前面。
	return false;
}