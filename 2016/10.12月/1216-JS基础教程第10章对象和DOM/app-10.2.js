window.addEventListener("load",initAll,false);

function initAll(){
	document.getElementById("theForm").addEventListener("submit",addNode,false);
}

function addNode(evt){
	var inText=document.getElementById("textArea").value;
	var newText = document.createTextNode(inText);
	//使用createTextNode()方法创建一个新的文本节点，他将包含在
	//textArea中找到的文本。

	var newGraf = document.createElement("p");
	//用createElement()方法创建一个新的元素节点。
	newGraf.appendChild(newText);

	var docBody = document.getElementsByTagName("body")[0];
	//为了将新节点添加到文档的body中，需要查明body的位置。
	docBody.appendChild(newGraf);

	evt.preventDefault();
	//现在使用事件处理高级方法，为了找阻止表单提交我们需要采取一些措施。
}