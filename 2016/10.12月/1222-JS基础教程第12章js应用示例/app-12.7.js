window.addEventListener("load",initStyle,false);
window.addEventListener("unload",unloadStyle,false);

function initStyle(){
	var thisCookie = cookieVal("style");

	if(thisCookie){
		var title = thisCookie;
	}
	else{
		var title = getPreferredStylesheet();
	}
	setActiveStylesheet(title);
	//initStyle()函数在页面运行时加载，它的目标是对页面需要的
	//所有的东西进行初始化。

	var allButtons = document.getElementsByTagName("input");
	for(var i=0;i<allButtons.length;i++){
		if(allButtons[i].type =="button"){
			allButtons[i].addEventListener("click",setActiveStylesheet,false);
		}
	}
	//initStyle()函数还需要给按钮添加事件处理程序。在这里，在单击按钮时
	//，事件处理程序都调用setActiveStylesheet().

}
function unloadStyle(){
	var expireDate = new Date();
	expireDate.setYear(expireDate.getFullYear()+1);
	document.cookie = "style="+getActiveStylesheet()+";expires="+expireDate.toGMTString()+";path=/";
}
//在页面卸载时，需要设置cookie供以后使用。cookie终止日期设置为
//一年以后，然后调用getActiveStylesheet()获得用户当前的设置，
//并且写出cookie供以后使用。
function getPreferredStylesheet(){
	var thisLink,relAttribute;
	var linksFound = document.getElementsByTagName("link");
	//如果在加载页面时，没有cookie能够供用户以前选择的样式，脚本就需要
	//判断首选的样式表。

	for(var i=0;i<linksFound.length;i++){
		thisLink =linksFound[i];
		relAttribute =thisLink.getAttribute("rel");
		if(relAttribute.indexOf("style")>-1&&relAttribute.indexOf("alternate")==-1&&thisLink.getAttribute("title")){
			return thisLink.getAttribute("title");
		}
	}
	//这个函数遍历每个标签，检查她们是否有rel属性，这个属性的值是否
	//包含style,这个属性的值是否不包含alternate,以及标签是否
	//有title属性。如过找到符合所有这些条件的链接标签，他连接的就是
	//首选样式表，所以返回它的title属性。
	return "";
}

function getActiveStylesheet(){
	var thisLink,relAttribute;
	var linksFound =document.getElementsByTagName("link");

	for(var i=0;i<linksFound.length;i++){
		thisLink = linksFound[i];
		relAttribute =thisLink.getAttribute("rel");
		if(relAttribute.indexOf("style")>-1&&thisLink.getAttribute("title")&&!thisLink,disabled){
			return thisLink.getAttribute("title");
		}
	}
	//正如前面提到的，当用户离开这个站点时，我们希望使用cookie存储他们
	//选择的样式表。这样的话，当他们以后再次访问这里时，就会看到他们
	//喜欢的文字。
	return "";
}

function setActiveStylesheet(inVal){
	var thisLink,relAttribute;
	var linksFound = document.getElementsByTagName("link");

	if(inVal){
		if(typeof inVal =="string"){
			var title = inVal;
		}
		else{
			var title = inVal.target.id;
		}
	}
	else{
		var title = window.event.srcElement.id;
	}
	//正如前面看到，当用户加载这个页面时，调用setActiveStylesheet()
	//函数并且传递一个参数，这个参数内成为inVal。
	for(var i=0;i<linksFound.length;i++){
		thisLink = linksFound[i];
	    relAttribute = thisLink.getAttribute("rel");
	    if(relAttribute.indexOf("style")>-1&&thisLink.getAttribute("title")){
	    	if(thisLink.getAttribute("title") ==title){
	    		thisLink.disabled = false;
	    	}
	    	else{
	    		thisLink.disabled =true;
	    	}
	    }
    }
    //如果当前使用的样式表的title属性为default，而用户单击了Lg Serif
    //按钮，JavaScript就知道应该装卸serif样式表。
}
function cookieVal(cookieName){
	var thisCookie =document.cookie.split("; ");
	for(var i=0;i<thisCookie.length;i++){
		if(cookieName ==thisCookie[i].split("=")[0]){
			return thisCookie[i].split("=")[1];
		}
	}
	return "";
}
