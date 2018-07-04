window.onload = initForm;

function initForm() {
	document.forms[0].onsubmit = validForm;
	document.getElementById("sunroof").onclick = doorSet;
	 /*这行代码添加在initForm()中。当用户单击遮阳伞复选框时，将调用
	 doorSet()函数。*/
}

function validForm() {
	var allGood = true;
	var allTags = document.getElementsByTagName("*");

	for (var i = 0; i < allTags.length; i++) {
		if (!validTag(allTags[i])) {
			allGood = false;
		}
	}
	return allGood;

	function validTag(thisTag) {
		var outClass = "";
		var allClasses = thisTag.className.split(" ");

		for (var j = 0; j < allClasses.length; j++) {
			outClass += validBasedOnClass(allClasses[j]) + " ";
		}

		thisTag.className = outClass;

		if (outClass.indexOf("invalid") > -1) {
			invalidLabel(thisTag.parentNode);
			thisTag.focus();
			if (thisTag.nodeName == "INPUT") {
				thisTag.select();
			}
			return false;
		}
		return true;

		function validBasedOnClass(thisClass) {
			var classBack = "";

			switch (thisClass) {
				case "":
				case "invalid":
					break;
				case "reqd":
					if (allGood && thisTag.value == "") {
						classBack = "invalid ";
					}
					classBack += thisClass;
					break;
				case "radio":
					if (allGood && !radioPicked(thisTag.name)) {
						classBack = "invalid ";
					}
					classBack += thisClass;
					break;
				case "isNum":
				case "isZip":
				case "email":
					classBack += thisClass;
					break;
				default:
					if (allGood && !crossCheck(thisTag, thisClass)) {
						classBack = "invalid ";
					}
					classBack += thisClass;
			}
			return classBack;

			function crossCheck(inTag, otherFieldID) {
				if (!document.getElementById(otherFieldID)) {
					return false;
				}
				return (inTag.value != "" || document.getElementById(otherFieldID).value != "");
			}

			function radioPicked(radioName) {
				var radioSet = document.forms[0][radioName];

				if (radioSet) {
					for (k = 0; k < radioSet.length; k++) {
						if (radioSet[k].checked) {
							return true;
						}
					}
				}
				return false;
			}
		}
	}

	function invalidLabel(parentTag) {
		if (parentTag.noedName == "LABEL") {
			parentTag.className += " invalid";
		}
	}
}

function doorSet() {
	if (this.checked) {
		document.getElementById("twoDoor").checked = true;
		/*这个新函数检查是否选中遮阳篷选项，然后重新设置为true。
		如果是取消选中遮阳篷复选框，那么不做任何处理。*/
	}
}