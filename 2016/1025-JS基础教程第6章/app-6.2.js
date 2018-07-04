window.onload= initForm;

function initForm(){
	document.getElementById("months").selectedIndex = 0;
	document.getElementById("months").onchange = populateDays;
}

function populateDays(){
	var monthDays = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
	var monthStr = this.options[this.selectedIndex].value;
	//我们使用this从菜单中获得值，并且是他存储在monthStr中。

	if(monthStr != ""){
		var theMonth = parseInt(monthStr);
		//如果monthStr的值是""，那么用户就是在菜单中选择了单词Month,
		//而不是月份名。这些代码的作用是检查monthStr的值是不是""，如果
		//这个条件为真，那么用parseInt方法将monthStr转换为数字，并且
		//将变量theMonth设置为这个看结果。

		document.getElementById("days").options.length = 0;
		for(var i=0;i<monthDays[theMonth];i++){
			document.getElementById("days").options[i]=new Option(i+1);
			//在改变Day菜单时，首先把它的选项长度设置为0，这回消除以前
			//操作的影响。这个循环简单的遍历所选月份的每一天，为每一天
			//在菜单中添加一个新选项。传递给Option的是i+1,这使他显示的
			//是1~31,而不是0~30.
		}
	}
}