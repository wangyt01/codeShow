if(typeof document.oncontextmenu == "object"){
	if(document.all){
		document.onmousedown = captureMousedown;
	}
	//第一块代码检查浏览器是否是Firefox，这种浏览器使用window.oncontextmenu
	//.如果他不是Firefox，在检查document.all,这是检查浏览器是否是IE的简便方法
	//。如果它是IE，就在触发onmousedown时运行captureMousedown().
	else{
		document.oncontextmenu = captureMousedown;
	}
	//如果到达这里，就说明访问者使用的是Safari或者Chrome,这种浏览器需要在
	//socument对象上设置oncontextmenu.
}
else{
	window.oncontextmenu = captureMousedown;
}
//最后，如果浏览器是Firefox，就让window的oncontextmenu事件调用captureMousedown()
//函数。
function captureMousedown(evt){
	//这个函数要处理onmousedown和oncontextmenu事件。Chrome、Safari和Firefox
	//在触发事件时会自动生成和传递evt参数，这个变量包含关于事件的信息。
	if(evt){
		var mouseClick = evt.which;
	}
	else{
		var mouseClick = window.event.button;
	}
	//如果evt变量存在，就可以通过检查evt.which来判断用户单击的是那个按钮。
	//如果用户使用IE，用户操作的结果会在window.event.button中找到的。无论
	//哪一种情况，结果都存储在mouseClick变量中。
	if(mouseClick ==1 || mouseClick == 3){
		alert("Menu Disabled");
		return false;
	}
	//如果mouseClick是1或3，就弹出一个警告框，向用户指出这个功能被禁用了，
	//并且返回false.返回false会阻止显示菜单窗口。
}