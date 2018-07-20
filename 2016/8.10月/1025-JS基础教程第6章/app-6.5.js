window.onload =function(){
	document.forms[0].onsubmit = validForm;
}

function validForm(){
	var allGood = true;
	var allTags = document.forms[0].getElementsByTagName("*");

	for(var i=0;i<allTags.length;i++){
		if(!validTag(allTags[i])){
			allGood = false;
		}
	}
	return allGood;

	function validTag(thisTag){
		var outClass = "";
		var allClasses = thisTag.className.split(" ");


		for(var j=0;j<allClasses.length;j++){
			outClass +=validBasedOnClass(allClasses[j]) + " ";
		}
		thisTag.className = outClass;

		if(outClass.indexOf("invalid")>-1){
			invalidLabel(thisTag.parentNode);
			//这行代码被添加到validTag()内的无效检查中。
			thisTag.focus();
			if(thisTag.nodeName == "INPUT"){
				thisTag.select();
			}
			return false;
		}
		return true;
		
		function validBasedOnClass(thisClass) {
			var classBack = "";
		
			switch(thisClass) {
				case "":
				case "invalid":
					break;
				case "reqd":
					if (allGood && thisTag.value == "") {
						classBack = "invalid ";
					}
					classBack += thisClass;
					break;
				default:
					if (allGood && !crossCheck(thisTag,thisClass)) {
						classBack = "invalid ";
					}
					classBack += thisClass;
			}
			return classBack;
				
			function crossCheck(inTag,otherFieldID) {
				if (!document.getElementById(otherFieldID)) {
					return false;
				}
				return (inTag.value == document.getElementById(otherFieldID).value);
			}
		}
	}
	function invalidLabel(parentTag) {
		if (parentTag.nodeName == "LABEL") {
			parentTag.className += " invalid";
			//这个函数接受一个标签并检查这个标签(tag)是否是一个标签
			//(label)。如果是，就在它的类中添加invalid属性。
		}
	}
}

		