window.addEventListener("load",initDate,false);

function initDate(){
	var spanTags = document.getElementsByTagName("span");

	for(var i=0;i<spanTags.length;i++){
		if(spanTags[i].className.indexOf("tz")==0){
			//第i个标签是否具有以tz开头的class属性。
			showTheTime(spanTags[i],spanTags[i].className.substring(2));
			//开始一个循环，对spanTags数组包含的页面元素进行遍历。
			//传递给showTheTime()两个参数：第一个是第i个标签元素，第二个是
			//class属性。
		}
	}
}

function showTheTime(currElem,tzOffset){
	var dayName = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");

	var thatTZ = new Date();
	var dateStr = thatTZ.toUTCString();
	//创建一个新的日期变量thatTZ.
	//下一行将日期和时间(基于UT形式)转化为字符串。

	dateStr = dateStr.substr(0,dateStr.length -3 );
	thatTZ.setTime(Date.parse(dateStr));
	thatTZ.setHours(thatTZ.getHours()+parseInt(tzOffset));

	currElem.innerHTML = showTheHours(thatTZ.getHours())+showZeroFielded(thatTZ.getMinutes())+showAmPm(thatTZ.getHours())+dayName[thatTZ.getDay()];

	function showTheHours(theHour){
		if(theHour == 0){
			return 12;
		}
		if(theHour < 13){
	        return theHour;
		}
		return theHour-12;
	}

	function showZeroFielded(inValue){
		if(inValue>9){
			return ":"+inValue;
		}
		return ":0"+inValue;
	}

	function showAmPm(thatTime){
		if(thatTime<12){
			return " AM ";
		}
		return " PM ";
	}
}