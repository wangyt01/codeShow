window.onload = initForm;
window.onunload = function() {};
//当窗口加载时，我们调用一个匿名函数，这个函数没名称，不做任何事情，
//提供这个函数必须将onunload设置为某种东西，否则，当单机浏览器的back
//时，就不会发生onload事件，因为在某些浏览器(Firefox和Safair)中页面
//会被缓存。让onunload执行任何操作，就会是页面不被缓存，因此用户
//后退时，会发onload事件。

function initForm() {
	document.getElementById("newLocation").selectedIndex = 0;
	//在initForm()函数中，第一行获得HTML页面上的菜单，并且将他的
	//selectedIndex属性设置为0，这个会使他显示Select a topic。
	document.getElementById("newLocation").onchange = jumpPage;
}

function jumpPage() {
	var newLoc = document.getElementById("newLocation");
	var newPage = newLoc.options[newLoc.selectedIndex].value;
	//从方括号的代码开始，由外一次分析。newLoc.selectedIndex是一个0~5的
	//数字。得到这个数字之后，接下来获得对应的菜单项的值，这就是我们希望
	//跳转到的网页。然后将结果赋值给变量newPage。

	if (newPage != "") {
		window.location = newPage;
		//检查newPage是否为空。换句话说，如果newPage有一个值，那么让
		//窗口转到悬着的菜单项所指定的URL。
	}
}