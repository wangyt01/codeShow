window.onload = initForm;

function initForm(){
	document.forms[0].onsubmit = validForm;
	document.getElementById("sunroof").onclick = doorSet;
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

		for (var j=0;j<allClasses.length;j++){
			outClass += validBasedOnClass(allClasses[j])+ " ";
		}
		thisTag.className = outClass;

		if(outClass.indexOf("invalid")>-1){
			invalidLabel(thisTag.parentNode);
			thisTag.focus();
			if(thisTag.nodeName == "INPUT"){
				thisTag.select();
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
				if(allGood && thisTag.value ==""){
					classBack = "invalid ";

				}
				classBack += thisClass;
				break;
				case "radio":
				if(allGood && !radioPicked(thisTag.name)){
					classBack = "invalid ";
				}
				classBack += thisClass;
				break;
				case "isNum":
				if(allGood && !isNum(thisTag.value)){
					classBack = "invalid ";
				}
				classBack += thisClass;
				break;
				case "isZip":
				if(allGood && !isZip(thisTag.value)){
					classBack = "invalid ";
				}
				classBack += thisClass;
				break;
				case "email":
				if(allGood && !validEmail(thisTag.value)){
					classBack = "invalid ";
				}
				classBack += thisClass;
				break;
				default:
				if(allGood && !crossCheck(thisTag,thisClass)){
					classBack = "invalid ";
				}
				classBack += thisClass;

			}
			return classBack;

			function crossCheck(inTag,otherFieldID){
				if(!document.getElementById(otherFieldID)){
					return false;
				}
				return (inTag.value != ""|| document.getElementById(otherFieldID).value != "");
			}
			function radioPicked(radioName){
				var radioSet = document.forms[0][radioName];

				if(radioSet){
					for(k=0;k<radioSet.length;k++){
						if(radioSet[k].checked){
							return true;
						}
					}
				}
				return false;
			}

			function isNum(passedVal){
				if(passedVal == ""){
					return false;
				}
				for (var k=0;k<passedVal.length;k++){
					if(passedVal.charAt(k) < "0"){
						return false;
					}
					if(passedVal.charAt(k) > "9"){
						return false;
					}
				}
				return true;
			}

			function isZip(inZip){
				if(inZip == ""){
					return true;
				}
				return (isNum(inZip));
			}

			function validEmail(email){
				var invalidChars = " /:,;";
				//在validEmail函数中，创建变量invalidChar，其中包含电子邮件地址
				//中最可能出现的5个无效字符：空格、斜杠、冒号、逗号、分号。

				if(email == ""){
					return false;
					//这个测试的意思是，"如果email字段的内容为空的，那么结果是false."
				}

				for (var k=0;k<invalidChars.length;k++){
					var badChar = invalidChars.charAt(k);
					if(email.indexOf(badChar)>-1){
						return false;
					}
				}
				var atPos = email.indexOf("@",1);
				if(atPos == -1){
					return false;
					//将atPos变量设置为@符号的位置。脚本使用indexOf从地址的第二个
					//字符开始检查第一个@符号。如果这个@符号的位置是—1，就意味着地址中没有
					//@符号，因此是错误的。
				}
				if (email.indexOf("@",atPos+1)!=-1){
					return false;
					//现在，脚本检查第一个@符号之后的字符，从而确保只有一个@符号，并且
					//拒绝任何包含多个@符号的输入。
				}
				var periodPos = email.indexOf(".",atPos);
				if(periodPos == -1){
					return false;
				}
				if(periodPos+3 > email.length){
					return false;
					//最后，脚本要求在地址的点号后面至少有两个字符。如果通过了所有
					//这些检查。而没有发现错误，这意味着电子邮件的地址有效的，返回
					//true.
				}
				return true;
			}
		}
	}

	function invalidLabel(parentTag){
		if(parentTag.nodeName == "LABEL"){
			parentTag.className += " invalid";
		}
	}
}

function doorSet(){
	if(this.checked){
		document.getElementById("twoDoor").checked = true;
	}
}