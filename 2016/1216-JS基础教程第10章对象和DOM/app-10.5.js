window.addEventListener("load",initAll,false);
var nodeChgArea;

 function initAll(){
	document.getElementById("theForm").addEventListener("submit",nodeChanger,false);
	nodeChgArea = document.getElementById("modifiable");

}
function addNode(){
    var inText = document.getElementById("textArea").value;
	var newText = document.createTextNode(inText);

	var newGraf = document.createElement("p");
	newGraf.appendChild(newText);

	nodeChgArea.appendChild(newGraf);


}


function delNode(){
	var grafChoice = document.getElementById("grafCount").selectedIndex;
	var allGrafs = nodeChgArea.getElementsByTagName("p");
	var oldGraf = allGrafs.item(grafChoice);

	nodeChgArea.removeChild(oldGraf);

}

function insertNode(){
	var grafChoice = document.getElementById("grafCount").selectedIndex;
	var inText = document.getElementById("textArea").value;
    //用户插入一个段落，我们需要知道两个信息：用户希望插入段落的位置以及他们希望插入的文本。

	var newText = document.createTextNode(inText);
	var newGraf = document.createElement("p");
	newGraf.appendChild(newText);
    //这是创建新的的段落节点并且以用户文本填充它的标准方法。

	var allGrafs = nodeChgArea.getElementsByTagName("p");
	var oldGraf = allGrafs.item(grafChoice);

	nodeChgArea.insertBefore(newGraf,oldGraf);
    //插入新节点的方法是调用insertBefore()方法并且传递两个参数：新节点和一个现有的节点。
}


 function nodeChanger(evt){
	var actionType = -1;
	var pGrafCt = nodeChgArea.getElementsByTagName("p").length;
	var radioButtonSet = document.getElementById("theForm").nodeAction;
	for(var i=0;i<radioButtonSet.length;i++){
		if(radioButtonSet[i].checked){
			actionType = i;
		}
	}

	switch(actionType){
		case 0:
		  addNode();
		  break;
		case 1:
		  if(pGrafCt>0){
		  	delNode();
		  	break;
		  }
		case 2:
		  if(pGrafCt>0){
		  	insertNode();
		  	break;
		  }
		  default:
		  alert("No balid action was chosen");
	}

	document.getElementById("grafCount").options.length = 0;

	for(i=0;i<nodeChgArea.getElementsByTagName("p").length;i++){
		document.getElementById("grafCount").options[i] = new Option(i+1);
	}

	evt.preventDefault();
}

