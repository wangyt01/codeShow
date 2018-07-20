window.addEventListener("load",initAll,false);

function initAll(){
	var allLinks = document.getElementsByTagName("a");

	for(var i=0;i<allLinks.length;i++){
		if(allLinks[i].className.indexOf("menuLink")>-1){
			allLinks[i].addEventListener("mouseover",toggleMenu,false);
			allLinks[i].addEventListener("click",clickHandler,false);
		}
	}
}

function clickHandler(evt){
	evt.preventDefault();
	//这个函数确保不会对单击的链接进行进一步的处理。
}

function toggleMenu(){
	var startMenu = this.href.lastIndexOf("/")+1;
	var stopMenu = this.href.lastIndexOf(".");
	var thisMenuName = this.href.substring(startMenu,stopMenu);

	var menuParent = document.getElementById(thisMenuName).parentNode;
	var thisMenuStyle = document.getElementById(thisMenuName).style;
	thisMenuStyle.display = "block";

	menuParent.addEventListener("mouseout",function(){thisMenuStyle.display ="none";},false);
	menuParent.addEventListener("mouseover",function(){thisMenuStyle.display = "block";},false);
}
