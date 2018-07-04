window.addEventListener("load",initPage,false);

function initPage(){
	var expireDate = new Date();
	//获取当前日期并且将他赋值给新变量exprieDate.
	expireDate.setMonth(expireDate.setMonth()+6);
	//取出expireDate的月份部分，在月份上加6，然后将expiereDate的
	//月份设置为新的值。

	var hitCt = parseInt(cookieVal("pageHits"));
	//字符串pageHit是这个cookie的名称。
	hitCt++;

	document.cookie = "pageHit=" + hitCt +";expires="+expireDate.toGMTString();
	//这行代码将更新后的信息写回cookie.
	document.getElementById("pageHits").innerHTML = "You have visited this page "+hitCt+" times";
	//这一行在文档窗口显示用户信息。 
} 

function cookieVal(cookieName){
	//创建心函数。需要向他传递一些数据，在函数变量cookieName
	//引用这些数据。
	var thisCookie = document.cookie.split("; ");
	//将变量thisCookie设置为split("; ")方法生成的数组。

	for(var i=0;i<thisCookie.length;i++){
		if(cookieName == thisCookie[i].split("=")[0]){
			//这个条件语句检查cookieName是否与cookie数组中的
			//第i个元素名称相同。
			return thisCookie[i].split("=")[1];
		}
	}
	return 0;
}