window.addEventListener("load",initDate,false);
//家在文档时调用initDate().

function initDate(){
	var dayName = new Array("Sunday","Monday","Tueday","Wednesday","Thursday","Friday","Saturday");
	var monName = new Array("January","Fabruary","March","April","May","June","July","August","September","October","November","December");

	var now = new Date();
	var dtString = dayName[now.getDay()]+", "+monName[now.getMonth()]+" "+now.getDate();
	document.getElementById("dtField").innerHTML = dtString;
}