/*添加js代码，让用户不用鼠标也能够操作这个菜单*/

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

function clickhandler(evt){
	if(evt){
		evt.preventDefault();

		if(typeof evt.target=="string"){
			toggleMenu(evt,evt.target);
		}
		else{
			toggleMenu(evt,evt.target.toString());
		}
	}
	else{
		toggleMenu(evt,window.event.srcElement.href);
	}
}

function toggleMenu(evt,currMenu){
	if(toggleMenu.argument.length<2){
		var currMenu = this.href;
	}

	var startMenu = currMenu.lastIndexOf("/")+1;
	var stopMenu = currMenu.lastIndexOf(".");
	var thisMenuName = currMenu.substring(startMenu,stopMenu);

	var menuParent = document.getElementById(thisMenuName).parentNode;
	var thisMenuStyle = document.getElementById(thisMenuName).style;
	thisMenuStyle.display = "block";

	menuParent.addEventListener("mouseout",function(){thisMenuStyle.display="none";},false);
	menuParent.addEventListener("mouseover",function(){thisMenuStyle.display="block";},false);
}