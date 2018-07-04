window.addEventListener("load",initDate,false);

function initDate(){
	var now = new Date();
	document.getElementById("dtField").innerHTML = timeString(now.getHours());

	function timeString(theHour){
		if(theHour <5){
			return "What are you doing up so later?";
		}
		if(theHour <9){
			return "Good Moring!";
		}
		if(theHour <17){
			return "No surfing during working hours!";
			//工作时间不要上网。
		}
		return "Good Evening!";
	}
}