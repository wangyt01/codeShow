window.addEventListener("load",initAll,false);
var nodeChgArea;


function initAll(){
	document.getElementById("theForm").addEventListener("submit",nodeChanger,false);
	nodeChgArea = document.getElementById("modifiable");
	//将全局变量nodeChgArea设置为这个元素节点。
	// alert("1");
}

function addNode(){
	var inText = document.getElementById("textArea").value;
	var newText = document.createTextNode(inText);

	var newGraf = document.createElement("p");
	newGraf.appendChild(newText);

	nodeChgArea.appendChild(newGraf);
	// alert("2");
}

function delNode(){
	var grafChoice = document.getElementById("grafCount").selectedIndex;
	var allGrafs = nodeChgArea.getElementsByTagName("p");
	var oldGraf = allGrafs.item(grafChoice);
	//当用户选择进行段落删除时，他们必须选择要删除的段落。我们从
	//grafCount字段选取段落，并且将他们存储在grafChoice中。然后，将
	//allGrafs变量设置为nodeChangingArea中的所有段落，并且要删除的
	//段落存储在oldGraf中。

	nodeChgArea.removeChild(oldGraf);
	// alert("3")
}

function insertNode() {
	var grafChoice = document.getElementById("grafCount").selectedIndex;
	var inText = document.getElementById("textArea").value;

	var newText = document.createTextNode(inText);
	var newGraf = document.createElement("p");
	newGraf.appendChild(newText);

	var allGrafs = nodeChgArea.getElementsByTagName("p");
	var oldGraf = allGrafs.item(grafChoice);

	nodeChgArea.insertBefore(newGraf,oldGraf);
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
			if (pGrafCt > 0) {
				insertNode();
				break;
			}
		  default:
		  alert("No valid action was chosen");
	}
    // alert("4");
	document.getElementById("grafCount").options.length = 0;

	for(i=0;i<nodeChgArea.getElementsByTagName("p").length;i++){
		document.getElementById("grafCount").options[i] = new Option(i+1);
	}
	evt.preventDefault();
}