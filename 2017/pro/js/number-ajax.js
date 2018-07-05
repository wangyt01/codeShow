//AJAX引入xml数据
function loadDoc() {
		var xhttp = new XMLHttpRequest();
		 {// code for IE7+, Firefox, Chrome, Opera, Safari
 		 xmlhttp=new XMLHttpRequest();
  			}
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				myFunction(this);
			}
		};
		xhttp.open("GET", "test.xml", true);
		xhttp.send();
	}
	function myFunction(xml) {
		var i;
		var xmlDoc = xml.responseXML;
		var table="";
		var x = xmlDoc.getElementsByTagName("CD");
		for (i = 0; i <x.length; i++) {
			table += "<li><a href='#'>" +
			x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
			"</a></li>";
		}
		document.getElementById("list-second-on").innerHTML = table;
	}