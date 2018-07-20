window.onload = newWinLinks;

function newWinLinks(){
	for(var i=0;i<document.links.length;i++){
		if(document.links[i].className=="newWin"){
			document.links[i].onclick=newWindow;
		}
	}
}
function newWindow(){
	var catWindow =window.open("pixel1.jpg","catWin","resizable=no,width=350,height=260");
	//catWindow包含一个新的窗口对象，指向图片文件pixel1.jpg。新窗口的名称
	//为catWin。名称是必填项，以为随后的代码中我们可能需要通过链接或其他
	//脚本来指向窗口。
	return false;
}