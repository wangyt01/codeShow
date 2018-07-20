window.onload = initForm;

function initForm(){
	var allTags = document.forms[0].getElementsByTagName("*");

	for(var i=0;i<allTags.length;i++){
		if(allTags[i].className.indexOf("reqd")>-1){
			//我们使用class属性在运行时决定什么时候应该使用onblur事件
			//处理程序。
			allTags[i].onblur = fieldCheck;
			//当用户离开必须填写的字段时，字段上的这个事件处理程序会调用
			//fieldCheck()函数。
		}
	}
}

function fieldCheck(){
	if(this.value == ""){
		this.className +=" highlight";
		this.focus();
	}
	else{
		this.className ="reqd";
	}
}
//fieldCheck()函数检查在当前字段中是否输入了某些信息。如果这个字段
//还没有值那么通过将"highlight"添加到它的class属性上，将字段的背景色
//改为浅黄色，并且用focus()将焦点重新放回这个表单字段中。纠正错误
//之后，简单的将class属性重新设置为初始值，背景色恢复为白色。