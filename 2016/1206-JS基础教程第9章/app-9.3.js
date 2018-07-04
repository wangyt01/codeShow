window.addEventListener("load",showCookie,false);

function showCookie(){
	var outMsg= "";

	if(document.cookie == ""){
		outMsg = "There are no cookies here";
	}
	else{
		var thisCookie = document.cookie.split("; ");

		for (var i=0;i<thisCookie.length;i++){
			outMsg +="Cookie name is '" + thisCookie[i].split("=")[0];
			outMsg +="', and the value is '"+thisCookie[i].split("=")[1]+"'<br>";
		}
	}
	document.getElementById("cookieDate").innerHTML = outMsg;
}