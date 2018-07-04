window.addEventListener("load",nameFieldInit,false);

function nameFieldInit(){
	//创建函数定义cookie的值。
	var userName = "";
	//用空值对变量初始化。
	if(document.cookie != ""){
		userName = document.cookie.split("=")[1];
		//检查document.cookie对象是否不包含空值。
	}

	document.getElementById("nameField").value = userName;
	//如果cookie文件中存储了一个用户名，那么在页面加载时设置
	//gerElementById("nameField").value会把这个用户名放进文本字段。
	document.getElementById("nameField").onblur = setCookie;
	document.getElementById("cookieForm").onsubmit = setCookie;
	//第一行，用户离开文本字段是，onblur事件处理程序会调用setCookie()
	//函数。第二行，表单的onsubmit事件处理程序会做同样的事情。
}

function setCookie(){
	var expireDate = new Date();
	//获取当前日期并且将他赋值给新变量exprieDate.
	expireDate.setMonth(expireDate.getMonth()+6);
	//取出expireDate的月份部分，在月份上加6，然后将expiereDate的
	//月份设置为新的值。

	var userName = document.getElementById("nameField").value;
	//创建新变量userName,并将用户在文本字段中输入的值赋给他。
	document.cookie = "userName="+userName+";expires="+expireDate.toGMTString();
    //这里是写cookie的地方。

	document.getElementById("nameField").blur;
	return false;
	//浏览器是否是IE
}