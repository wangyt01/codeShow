addOnload(initOne);
addOnload(initTwo);
addOnload(initThree);

function addOnload(newFunction){
	var oldOnload = window.onload;

	if(typeof oldOnload == "function"){
		//我们这一行中检查oldOnlod变量的类型。如果已经设置了window.onload
		//,那么他应该是一个函数调用。如果它是函数，就执行以下代码。
		window.onload = function(){
			oldOnload();
			newFunction();
		}
	}
	else{
		window.onload = newFunction;
	}
}

function initOne(){
	document.getElementById("pageBody").style.backgroundColor = "#00f";

}

function initTwo(){
	document.getElementById("pageBody").style.color = "#f00";
}

function initThree(){
	var allTags = document.getElementById("pageBody").getElementsByTagName("*");

	for (var i=0;i<allTags.length;i++){
		if(allTags[i].nodeName == "H1"){
			allTags[i].style.border = "5px green solid";
			allTags[i].style.padding = "25px";
			allTags[i].style.backgroundColor = "#FFF";
		}
	}
}