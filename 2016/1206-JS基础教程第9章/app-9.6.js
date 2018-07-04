window.addEventListener("load",initPage,false);

function initPage(){
	var now = new Date();
	var expireDate = new Date();
	expireDate.setMonth(expireDate.getMonth()+6);

	var hitCt = parseInt(cookieVal("pageHit"));
	hitCt++;

	var lastVisit = cookieVal("pageVisit");
	//首先将字符串pageVisit传递给cookieVal()函数，从而寻找名
	//为pageVisit的cookie.它返回一个值，然后将这个值存储在
	//lastVisit中。
	if(lastVisit == 0){
		lastVisit = "";
	}

	document.cookie = "pageHit="+ hitCt+"+expires="+expireDate.toGMTString();
	document.cookie = "pageVisit=" +now + "expires="+expireDate.toGMTString();

	var outMsg = "You have visited this page "+hitCt +" times.";
	if(lastVisit != ""){
		outMsg +="<br>Your last visit was "+ lastVisit;
		//ourMsg变量存储要向站点访问者显示的消息。
	}

	document.getElementById("cookieData").innerHTML = outMsg;
}

function cookieVal(cookieName){
	var thisCookie = document.cookie.split("; ");

	for(var i=0;i<thisCookie.length;i++){
		if(cookieName == thisCookie[i].split("=")[0]){
			return thisCookie[i].split("=")[1];
		}
	}
	return 0;
}