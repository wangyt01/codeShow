window.addEventListener("load",initAll,false);

function initAll(){
	document.getElementById("theForm").addEventListener("submit",addNode,false);
	document.getElementById("deleteNode").addEventListener("click",delNode,false);
}

function addNode(evt){
	var inText= document.getElementById("textArea").value;
	var newText = document.createTextNode(inText);

	var newGraf = document.createElement("p");
	newGraf.appendChild(newText);

	var docBody = document.getElementsByTagName("body")[0];
	docBody.appendChild(newGraf);

	evt.preventDefault();
}

function delNode(evt){
	var allGrafs = document.getElementsByTagName("p");
	// var allGrafs = document.getElementsByTagName("button");
	//使用getElementsByTagName方法收集页面上所有段落标签，
	//并且将他们存储在allGrafs数组中。

	if(allGrafs.length > 1){
		//在进行实际的删除操作之前，首先必须检查allGrafs数组的长度
		//是否大于1.
		var lastGraf =allGrafs[allGrafs.length-1];
		//如果有段落，那么以数组长度减1就可以获得页面上的最后一个段落
		var docBoby = document.getElementsByTagName("body")[0];
		docBoby.removeChild(lastGraf);
	}
	else{
		alert("Nothing to remove!");
	}

	evt.preventDefault();
}