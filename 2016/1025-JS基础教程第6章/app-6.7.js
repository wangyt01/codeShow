window.onload = function(){
 document.forms[0].onsubmit = validForm;
}

function validForm(){
	var allGood = true;
	var allTags = document.forms[0].getElementsByTagName("*");

	for(i=0;i<allTags.length;i++){
		if(!validTag(allTags[i])){
			allGood = false;
		}
			}
		return allGood;

		function validTag(thisTag){
			var outClass = "";
			var allClasses = thisTag.className.split(" ");
			//split()分割数组
			for(var j=0;j<allClasses.length;j++){
				outClass += validBasedOnClass(allClasses[j])+" ";
			}
			thisTag.className = outClass;

			if(outClass.indexOf("invalid")>-1){
				//indexOf()方法可返回某个指定的字符串值在字符串中首次出现的位置。
			invalidLabel(thisTag.parentNode);
			thisTag.focus();
			if(thisTag.nodeName == "INPUT"){
				thisTag.select();
				//当前查看的这个标签是<input>标签么？如果是，就选择他的
				//值，让用户能够更轻松的修改他。
			}
			return false;
			}
			return true;

			function validBasedOnClass(thisClass){
				var classBack = "";

				switch(thisClass){
					case "":
					case "invalid":
					break;
					case "reqd":
                    if(allGood&& thisTag.value == ""){
                    	classBack = "invalid ";
                    }
                    classBack += thisClass;
                    break;
                    case "radio":
                    if(allGood&& !radioPicked(thisTag.name)){
                    	classBack = "invalid ";

                    }
                    classBack +=thisClass;
                    break;
                    case "isNum":
                    case "isZip":
                    case "email":
                    classBack += thisClass;
                    break;
                    default:
                    if(allGood && !crossCheck(thisTag.thisClass)){
                    	classBack = "invalid";
                    	//这行代码在switch/case条件结构的radio块中。我们希望确保
                    	//至少选择一个单选按钮，新的radioPicked()函数处理这个问题
                    	//。如果返回false，那么就将classBack设置为invalid。
                    }
                    classBack +=thisClass;
				}
                     return classBack;

                     function crossCheck(inTag,otherFieldID){
                     	if(!document.getElementById(otherFieldID)){
                     		return false;
                     	}
                     	return (inTag.value !=""|| document.getElementById(otherFieldID).value != "");
                     }
                     function radioPicked(radioName){
                     	var radioSet = document.forms[0][radioName];
                     	//开始新的radioPicked()函数，并对radioSet变量进行初始化。

                     	if(radioSet){
                     		for (k=0;k<radioSet.length;k++){
                     			if(radioSet[k].checked){
                     				return true;
                     				//如果radioSet包含一个值，那我们就知道了想要检查的单选按钮
                     				//组。接下来启用另一个循环检查每个单选按钮。当发现一个单选
                     				//按钮被选中时，就返回true,因为这是我们希望保证的。
                     			}
                     		}
                     	}
                     	return false;
                     }
			}
		}
		function invalidLabel(parentTag){
			if(parentTag.nodeName =="LABEL"){
				parentTag.className += " invalid";
			}
		}
	}
