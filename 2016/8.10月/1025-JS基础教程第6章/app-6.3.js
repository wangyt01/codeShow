

window.onload = function() {
	document.forms[0].onsubmit = validForm;
	//当页面加载时，匿名函数会查找页面第一个表单。对于这个表单，他为表单
	//的onsubmit添加一个时间处理程序:调用validForm。当onsubmit处理程序
	//返回false值时，表单就不会传递给服务器。只有再返回true时，服务器
	//才会受到表单。
}

function validForm() {
	var allGood = true;
	var allTags = document.forms[0].getElementsByTagName("*");
	//document.getElementsByTagName("*")是非常有用的————星号让JS返回
	//一个包含页面上所有标签的数组。如果能使用这个函数获取特定元素
	//的所有标签就更方便了，此处就是这种情况。这一行代码查找页面第一个
	//表单内部的所有标签。

	for (var i=0; i<allTags.length; i++) {
		if (!validTag(allTags[i])) {
				allGood = false;
		//这个循环再allTags中进行搜索，而if条件语句调用validTag()函数
		//这会检查每个标签，了解是否有什么东西阻止表单提交这个页面。
		//传递给validTag()函数的是allTag[i]，也就是当前正在处理的对象。如果
		//任何标签导致validTag()返回false，就将allGood设置为false。但是，即使
		//已经出现了false，我们仍然继续循环遍历所有标签。
		}
	}
	return allGood;
	//现在返回allGood，以此表明是否应该继续提交表单。

	function validTag(thisTag) {
		//创建validTag()函数，并且让它接收thisTag值。
		var outClass = "";
		var allClasses = thisTag.className.split(" ");
		//对于每个标签，我们希望检查每个class属性。创建allClasses数组并且
		//用thisTag.className.split(" ")设置它。这个函数会按照传递给它的
		//字符串，将字符串分割为数组。在这里，分割符字符串是一个空格，所以
		//他会将字符串"this that and the other"转换为一个包含5个元素的数组:
		//this、that、and、the、other。
		//我们希望检查每个class属性，因为class表示我们希望对每个表单字段进行
		//什么处理。在这个示例中，我们关心的一个值是reqd，这表示必须填写这个
		//字段。如果任何字段具有class值reqd，那么它必须包含某些值。
	
		for (var j=0; j<allClasses.length; j++) {
		outClass += validBasedOnClass(allClasses[j]) + " ";
		//对于allClasses中的每个class属性循环一次。
		//对于这个类，执行outClass += validBasedOnClass(allClasses[j]) + " ";。
		//这会调用validBasedOnClass()函数，并且传递当前查看的类。这个函数返回
		//某些东西，这些东西加上一个空格之后追加到outClass变量中。
		}
	
		thisTag.className = outClass;
		//在结束outClass循环时，我们获得outClass的内容并且将他放进thisTag.className
		//，这会覆盖这个表单字段当前的class属性。
	
		if (outClass.indexOf("invalid") > -1) {
			//在新的class属性中可能返回的值之一是单词invalid。所以要检查它
			//如果在新的类中找到了invalid，就说明有问题，因此执行对应的操作。
			thisTag.focus();
			//如果这个字段可以获得焦点，那么希望将焦点放进这个字段，这一行就
			//完成任务。这是让用户知道那个字段有问题的方法。
			if (thisTag.nodeName == "INPUT") {
				thisTag.select();
		//当前查看的这个标签是<input>标签吗？如果是，就选择它的值，让用户
		//能够更轻松的修改他。
			}
			return false;
			//我们让然在"返回无效元素中"，所以将false返回到进行调用的地方。
		}
		return true;
		//如果一切都运行良好并且有效，就返回true。

		function validBasedOnClass(thisClass) {
			var classBack = "";
			//创建心函数validBasedOnClass，并且让他接收thisClass值。接下来创建
			//classBack变量，并且将他初始化为空。这个变量将包含返回的类，也就是
			//我们希望发回的值。
		
			switch(thisClass) {
				//switch语句检查传递给他的一个class属性，并根据这个属性执行
				//对应的操作。
				case "":
				case "invalid":
				break;
				//如果thisClass是空或是invalid，那么就跳出条件语句，否则继续。
				case "reqd":
				if ( allGood && thisTag.value == ""){
					classBack = "invalid ";
				}
				classBack += thisClass;
				break;
				//如果正在处理的属性是reqd，allGood是true，并且当前标签的当前只是""
				//,那么将classBack设置为invalid，因为这说明有问题，我们希望通知用户。
				//在此之后，无论是否有问题，我们都将当前的的类追加到classBack中，使它
				//不会丢失。
				default:
				classBack += thisClass;
				//如果上面的分支与发生的情况都不匹配，就会执行default块，
				//当发生这种情况时，就说明当前处理的类是我们不关心的，
				//所以只需要将它追加到classBack中，而不必担心其他事情。
			}
			return classBack;
		}
	}
}