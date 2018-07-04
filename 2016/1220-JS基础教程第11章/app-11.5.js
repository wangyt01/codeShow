window.addEventListener("load",showTheTime,false);
//addEventListener()方法用于向指定元素添加事件句柄。

function showTheTime(){
	var now = new Date();

	document.getElementById("showTime").innerHTML = showTheHours(now.getHours())+showZeroFilled(now.getMinutes())+showZeroFilled(now.getSeconds())+showAmPm();
    //他仅仅是将其他函数的结果连接起来，构造出要在页面上显示的时间值。
    //然后将结果放入showTime的innerHTML属性。
	setTimeout(showTheTime,1000);
	//这行代码让浏览器每秒更新一次显示。

	function showTheHours(theHour){
		if(show24Hour()||(theHour>0&&theHour<13)){
			return theHour;
		}
		if(theHour == 0){
			return 12;
		}
		return theHour-12;
	}
	function showZeroFilled(inValue){
		if(inValue>9){
			return ":"+inValue;
		}
		return ":0"+inValue;
	}
	function show24Hour(){
		return (document.getElementById("show24").checked);
	}
	function showAmPm(){
		if(show24Hour()){
			return "";
		}
		if(now.getHours()<12){
			return " AM";
		}
		return " PM";
	}
}