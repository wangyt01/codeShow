window.onload = function(){
	document.forms[0].onsubmit = validForm;
}

function validForm(){
	var allGood = true;
	var allTags = document.forms[0].getElementsByTagName("*");

	for (var i=0;i<allTags.length;i++){
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

		if(outClass.indexOf("invalid") > -1){
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
				case "email":
				if(allGood && !validEmail(thisTag.value)){
					classBack = "invalid ";
				}
				default:
				classBack +=thisClass;
			}
			return classBack;
		}

		function validEmail(email){
			var re=/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
			// var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w)*(\.\w{2,3})+$/;
			//正则表达式总是以（/）开头和结尾。斜杠之间的所有的内容都是正则表达式。
			//  ^托字符表示我们要使用这个·表达式检查以特定的字符串开头的字符串。
			//如果去掉托字符，那么即使字符串开头有一堆“垃圾字符”，电子邮件地址
			//也可能被认为是有效的。
			//  表达式\w表示任意字符，包括a~z,A~Z,0~9和下划线。电子邮件地址必须
			//以这些字符之一开头。
			//  加号+表示我们要寻找前面条目的一次或多次。
			//  左括号（ 表示一个组。这意味着后面将要引用圆括号中的所有内容。
			//  方括号[]用来表示可以出现任意一个字符。在这个示例中，方括号内
			//包含字符\.-。我们希望允许用户输入点好或连字符，但是点好对正则
			//表达式有特殊意义，所以需要在他前面加上\，这表示我们指的实际上
			//是点号本身，而不是它的特殊意义。在特殊字符面前使用反斜杠称为
			//“字符串转义”。
			//  问号？表示前面的条目可以不出现或者出现一次。
			//  在？后面，再次使用\w+，这表示点号或连字符后面必须有其他一些字符
			//  右圆括号）表示这个组结束了。在此之后是一个星号，表示前面的条目
			//可以出现一次或出现多次。
			//  再次使用\w+，这表示域名必须以一个或多个a~z、A~Z、0~9或下划线
			//字符开头。在此之后同样是([\.-w+])*,表示电子邮件地址的后缀中允许
			//有点号或者连字符。
			//  $表示匹配的字符串必须在这里结束。
   
			return re.test(email);
		}

		function invalidLabel(parentTag){
			if(parentTag.nodeName == "LABEL"){
				parentTag.className += "invalid";   
			}
		}
	}

}