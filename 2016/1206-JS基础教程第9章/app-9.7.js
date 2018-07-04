window.addEventListener("load",initPage,false);

function initPage(){
	var now = new Date();
	var lastVisit = new Date(cookieVal("pageVisit"));
	var expireDate = new Date();
	expireDate.setMonth(expireDate.getMonth()+6);
	//这些代码对lastVisit和expireDate日期进行初始化。
	//第一个是cookie中保存的访问者上一次访问站点的日期，第二个
	//是重写cookie时将使用的过期日期。

	document.cookie = "pageVisit=" + now + ";expires=" + expireDate.toGMTString();
	//这一行写cookie，她将当前日期写到pageVisit中，将expireDate
	//的值写到expires中。
    var allGrafs = document.getElementsByTagName("p");
    //创建一个包换页面上所有<p>元素的数组，这样就可以遍历它们，
    //逐一寻找我们要处理的元素。

    for(var i=0;i<allGrafs.length;i++){
    	if(allGrafs[i].id.indexOf("New-")!=-1){
    		newCheck(allGrafs[i],allGrafs[i].id.substring(4));
    		//我们检查这个段落是否是这个访问者没看过的。
    	}
    }

    function newCheck(grafElement,dtString){
    	var yyyy = parseInt(dtString.substring(0,4),10);
    	var mm = parseInt(dtString.substring(4,6),10);
    	var dd = parseInt(dtString.substring(6,8),10);
    	//这三行代码从字符串中解析日期。
    	var lastChgd = new Date(yyyy,mm -1,dd);
    	//因为已经获得了年、月、日，所以可以设置lastChgd。
    	//JavaScript的日期比较古怪，必须将月份减1才能得到正确的
    	//结果。

    	if(lastChgd.getTime() > lastVisit.getTime()){
    		//现在，可以对两个日期进行比较。
    		grafElement.className +=" newImg";
    	}
    }
}

function cookieVal(cookieName){
	var thisCookie = document.cookie.split("; ");

	for(var i=0;i<thisCookie.length;i++){
		if(cookieName == thisCookie[i].split("=")[0]){
			return thisCookie[i].split("=")[1];
		}
	}
	return "1 January 1970";
}