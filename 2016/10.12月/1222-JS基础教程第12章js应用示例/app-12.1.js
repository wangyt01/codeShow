window.addEventListener("load",initAll,false);

function initAll(){
	var allLinks = document.getElementsByTagName("a");
	//当页面加载时，调用initAll()函数，该函数首先创建一个包含页面
	//上所有链接的数组。

	for(var i=0;i<allLinks.length;i++){
		if(allLinks[i].className.indexOf("menuLink")>-1){
			allLinks[i].addEventListener("click",toggleMenu,false);
		}
	}
	//在找到所有链接之后，对他们进行遍历，查找具有menuLink类的链接，
	//并且给这些链接添加click处理程序。在这里，click处理程序设置为
	//单击连接时调用toggleMenu()函数。
}
function toggleMenu(evt){
	var startMenu = this.href.lastIndexOf("/")+1;
	var stopMenu = this.href.lastIndexOf(".");
	var thisMenuName = this.href.substring(startMenu,stopMenu);
	//我们需要的菜单名在这两个位置之间，所有在这里设置他。

	var thisMenuStyle = document.getElementById(thisMenuName).style;
	if(thisMenuStyle.display =="block"){
		thisMenuStyle.display = "none";
	}
	else{
		thisMenuStyle.display = "block";
	}
	evt.preventDefault();
	//在这个函数之后，是阻止对已点击连接的任何进一步处理。
}