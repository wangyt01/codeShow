window.addEventListener("load",showDays,false);

function showDays(){
	var spanTags = document.getElementsByTagName("span");
	//创建一个新数组spanTags，并用页面上的所有标签填充他。

	for(var i=0;i<spanTags.length;i++){
		if(spanTags[i].className.indexOf("daysTill")>-1){
			spanTags[i].innerHTML = showTheDaysTill(spanTags[i].id);
		}
	}
	function showTheDaysTill(thisDate){
		var theDays;

		switch(thisDate){
			case "anniv":
			theDays = daysTill(5,6);
			break;
			case "bday":
			theDays = daysTill(8,7);
			break;
			case "xmas":
			theDays = daysTill(12,25);
			break;
			default:
		}
		return theDays + " ";
	}

	function daysTill(mm,dd){
		var now = new Date();
		var inDate = new Date(now.getFullYear(),mm-1,dd);

		if(inDate.getTime()<now.getTime()){
			inDate.setYear(now.getFullYear()+1);
			//将这个日期和今天进行比较。如果今年这个日期过了，就将年份递增
			//，从而下一年的日期作为对比的目标。
		}

		return Math.ceil(dayToDays(inDate)-dayToDays(now));
		//在这里，我们计算的inDate和前面日期之间的天数。
	}
	function dayToDays(inTime){
		return inTime.getTime() / (1000*60*60*24);
		//将日期存储为自1970年1月1日以来的毫秒数。
	}
}