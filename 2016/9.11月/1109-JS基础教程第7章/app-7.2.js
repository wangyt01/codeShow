window.onload = function(){
	document.forms[0].onsubmit = validForm;
}

function validForm(){
	var allGood = true;
	var allTags = document.getElementsByTagName("*");

	for(var i=0;i<allTags.length;i++){
		if(!validTag(allTags[i])){
			allGood = false;
		}
	}
	return false;

	function validTag(thisTag){
		var outClass = "";
		var allClasses = thisTag.className.split(" ");

		for(var j=0;j<allClasses.length;j++){
			outClass +=validBasedOnClass(allClasses[j])+" ";
		}

		thisTag.className = outClass;

		if(outClass.indexOf("invalid")>-1){
			invalidLabel(thisTag.parentNode);
			thisTag.focus();
			if(thisTag.nodeName =="INPUT"){
				thisTag.select();
			}
			return false;
		}
		return true;

		function validBasedOnClass(thisClass){
			var calssBack = "";

			switch(thisClass){
				case "":
				case "invalid":
				break;
				case "imgURL":
				if(allGood&&!setImgURL(thisTag.value)){
					calssBack = "invalid ";
				}
				default:
				calssBack +=thisClass;
			}
			return calssBack;
		}

		function setImgURL(newURL){
			var re = /^(file|http):\/\/\S+\.(gif|jpg|png)$/i;
			//输入可以以文本http或file开头，所以将这两个字符串放在一个组中，
			//用|分隔，表示可以接受两者之一。无论用户使用本地硬盘还是从Web获得
			//图像，://几个字符都是必须的，所以接下来检查这些字符。
			//  在此之后几乎可以出现任何字符，所以用\S+表示后面是一个或多个非
			//空格字符。然后需要另一个斜杠来分割域名和文件名，然后是另一个\S+
			//来处理文件名。
			//  修饰符i允许用户输入大写或小写字母。这个修饰符让正则表达式不区分
			//大小写。

			if(re.test(newURL)){
				document.getElementById("chgImg").src = newURL;
				return true;
			}
			return false;
		}
		function invalidLabel(parentTag){
			if(parentTag.nodeName == "LABEL"){
				parentTag.className +=" invalid";
			}
		}
	}
}