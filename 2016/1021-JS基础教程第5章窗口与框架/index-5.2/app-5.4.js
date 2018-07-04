window.onload = initLinks;
    function initLinks(){
    	for(var i=0;i<document.links.length;i++){
    		document.links[i].onclick =writeContent;
    		document.links[i].thisPage = i+1;
            //initLinks()函数首先循环遍历页面上所有的链接。然后对于
            //每个链接设置了两个元素：onclick处理函数和thisPage属性。后者
            //存在单击链接后会显示的页码，例如链接0就是"page1"。循环中的
            //onclick处理函数可以让每个链接在单击后调用writeContent()函数。
    	}
    }
    function writeContent(){
    	var newText = "<h1>You are now looking at example"+this.thisPage+".<\/h1>";

    	document.getElementById("icontent")
    .contentWindow.document.body.innerHTML=newText;
    //单击链接就会触发setContent()函数，这个函数将新页面加载进
    //iframe。这是通过找到页面中的icontent元素，并将它的
    //contentWindow.document.location.href重置为Window,
    //然后获取它包含的document。之后，在获取document的
    //location并重置href，而这个href就是用户选择加载的URL。
    	return false;
        //setContent()返回false，意味着告知浏览器不要
        //将href一并载入主窗口。
    }
    //chrome浏览器不支持火狐支持