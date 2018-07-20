    //定义变量
    //     var x;
    // x = "age";
    // document.write(x+"<br>");
    // x = "name";
    // document.write(x);
    window.onload = function() {
    	var btn1 = document.getElementById("btn1");
    	//if语句
    	btn1.onclick = function myFunction() {
    		var x = "";
    		var time = new Date().getHours();
    		if (time < 12) {
    			x = "Good Morning";
    		} else {
    			x = "Good Afternoon"
    		}
    		document.getElementById("demo").innerHTML = x;

    	}
    	var btn2 = document.getElementById("btn2")
    	btn2.onclick = function() {
    		var r = Math.random();
    		var x = document.getElementById("demo")
    		if (r > 0.5) {
    			x.innerHTML = "<a href='http://www.baidu.com'>百度一下</a>";
    		} else {
    			x.innerHTML = "<a href='http://wyong.me'>欢迎拜访我的博客</a>";
    		}
    	}
    	var btn3 = document.getElementById("btn3");
    	btn3.onclick = function myFunction() {
    		var x;
    		var d = new Date().getDay();
    		switch (d) {
    			case 0:
    				x = "Today is Sunday";
    				break;
    			case 1:
    				x = "Today is Monday";
    				break;
    			case 2:
    				x = "Today is Tuesday";
    				break;
    			case 3:
    				x = "Today is Wednesday";
    				break;
    			case 4:
    				x = "Today is Thursday";
    				break;
    			case 5:
    				x = "Today is Friday";
    				break;
    			case 6:
    				x = "Today is Saturday";
    				break;

    		}
    		document.getElementById("demo").innerHTML = x;
    	}
    	var btn4 = document.getElementById("btn4");
    	btn4.onclick = function myFunction() {
    		alert("Hello \n How are you!");
    	}


    	var btn4_1 = document.getElementById("btn4_1");
    	btn4_1.onclick = function myFunction() {
    		var x;
    		var r = confirm("按下按钮！");
    		if (r == true) {
    			x = "你按下了\"确定\"按钮！";
    		} else {
    			x = "你按下了\"取消\"按钮！";
    		}
    		document.getElementById("demo").innerHTML = x;
    	}
    	var btn5 = document.getElementById("btn5");
    	btn5.onclick = function myFunction() {
    		var x;
    		var person = prompt("请你输入你的名字", "Tom");
    		if (person != null && person != "") {
    			x = "你好" + person + "!今天感觉如何？";
    			document.getElementById("demo").innerHTML = x;
    		}

    	}
    	var btn6 = document.getElementById("btn6");
    	btn6.onclick = function myFunction() {
    		var x = "",
    			i;
    		for (i = 1; i < 7; i++) {
    			x = x + "<h" + i + ">Heading" + "</h" + i + ">";
    		}
    		document.getElementById("demo").innerHTML = x;
    	}
    	var btn6_1 = document.getElementById("btn6_1");
    	btn6_1.onclick = function myFunction() {
    		var x = "",
    			i = 0;
    		while (i < 5) {
    			x = x + "this number is" + i + "<br>";
    			i++;
    		}
    		document.getElementById("demo").innerHTML = x;
    	}
    	var btn6_2 = document.getElementById("btn6_2");
    	btn6_2.onclick = function myFunction() {
    		var x = "",
    			i = 0;
    		do {
    			x = x + "该数字为" + i + "<br>";
    			i++;
    		}
    		while (i < 5)
    		document.getElementById("demo").innerHTML = x;
    	}
    	var btn7 = document.getElementById("btn7");
    	btn7.onclick = function myFunction() {
    		var x = "",
    			i = 0;
    		for (i = 0; i < 10; i++) {
    			if (i == 4) {
    				break;
    			}
    			x = x + "this is number" + i + "<br>";
    		}
    		document.getElementById("demo").innerHTML = x;
    	}
    	var btn7_1 = document.getElementById("btn7_1");
    	btn7_1.onclick = function myFunction() {
    		var x = "",
    			i = 0;
    		for (i = 0; i < 10; i++) {
    			if (i == 3) {
    				continue;
    			}
    			x = x + "this number is " + i + "<br>";
    		}
    		document.getElementById("demo").innerHTML = x;
    	}
    	var btn8 = document.getElementById("btn8");
    	btn8.onclick =
    		function myFunction() {
    			var x;
    			var txt = "";
    			var person = {
    				fname: "Bill",
    				lname: "Gates",
    				age: 56
    			};
    			for (x in person) {
    				txt = txt + " " + person[x];
    			}
    			document.getElementById("demo").innerHTML = txt;
    		}
    	var btn9 = document.getElementById("btn9");
    	btn9.onclick = function displayDate() {
    		document.getElementById("demo").innerHTML = Date();
    	}
    	var btn10 = document.getElementById("btn10");
    	var txt = "";
    	btn10.onclick = function message() {
    		try {
    			addddlert("Welcome guset!");
    		} catch (err) {
    			txt = "本页有一个错误。\n\n";
    			txt += "错误描述：" + err.message + "\n\n";
    			txt += "点击确定继续。\n\n";
    			alert(txt);
    		}
    	}


    	var btn11 = document.getElementById("btn11");
    	btn11.onclick = function message() {
    		try {
    			adddlert("Welcome guset!");
    		} catch (err) {
    			txt = "本页有一个错误.\n\n";
    			txt += "单击确定继续跳转\n";
    			txt += "或者单击取消返回\n\n";
    			if (confirm(txt)) {
    				document.location.href = "http://www.wyong.me/";
    			}
    		}
    	}

    	var btn12 = document.getElementById("btn12");
    	onerror = handleErr;
    	btn12.onclick = function handleErr(msg, url, l) {
    		txt = "该页面有一个错误\n\n";
    		txt += "错误：" + msg + "\n";
    		txt += "URL:" + url + "\n";
    		txt += "行:" + l + "\n\n";
    		txt += "点击确定继续。\n\n";
    		alert(txt);
    		return true;
    	}

    	function message() {
    		addddlert("Wlecome guest!");
    	}
    }

    // window.onload =function(){



    // function myFunction(name,job){
    // 	alert("Welcome"+name+",the"+job);
    // }
    // function myFunction(txt){
    // 	alert(txt);
    // }
    // function myFunction(){
    // 	return("Hello World");
    // }
    // 	document.write(myFunction())

    // window.onload = initAll;

    // 	function initAll(a,b){
    // 	return a*b;
    // }
    // document.getElementById("demo").innerHTML = initAll(4,9);



    // function setCookie(cname,cvalue,exdays){
    // 	var d = new Date();
    // 	d.setTime(d.getTime()+(exdays*24*60*60*1000));
    // 	var expires = "expires=" + d.toGMTString();
    // 	document.cookie = cname + "=" + cvalue + ";" + expires;
    // }
    // function getCookie(cname){
    // 	var name = cname + "=";
    // 	var ca = document.cookie.split(';');
    // 	for(var i = 0;i<ca.length;i++){
    // 		var c = ca[i].trim();
    // 		if(c.indexOf(name) == 0) return c.substring(name.length,c.length)
    // 	}
    // 	return "";
    // }
    // function checkCookie(){
    // 	var user = getCookie("username");
    // 	if(user!=""){
    // 		alert("Welcome again"+ user);
    // 	}
    // 	else{
    // 		user = prompt("Please enter your name:","");
    // 		if(user!=""){
    // 			alert ("Welcome agein" + user);
    // 		}
    // 		else{
    //            user = prompt("Please enter your name:","");
    //            if(user!="" && user!= null){
    //            	setCookie("username",user,30);
    //            }			
    // 		}
    // 	}
    // }

    // function myFunction(){
    // 	setTimeout(function(){
    // 		alert("Hello")
    // 	},3000)
    // }		
    // function timedText(){
    // 	var x = document.getElementById('txt');
    // 	var t1 = setTimeout(function(){
    // 		x.value = "2 seconds"
    // 	},2000);
    // 	var t2 = setTimeout(function(){
    // 		x.value = "4 seconds"
    // 	},4000);
    // 	var t3 = setTimeout(function(){
    // 		x.value = "6 seconds"
    // 	},6000)
    // }

    // var c = 0;
    // var t ;
    // var timer_is_on = 0;
    // function timedCount(){
    // 	document.getElementById('txt').value = c;
    // 	c= c+1;
    // 	t = setTimeout("timedCount()",1000);
    // }
    // function doTimer(){
    // 	if(!timer_is_on){
    // 		timer_is_on = 1;
    // 		timedCount();
    // 	}
    // }
    // function loadXMLDoc()
    // {
    // 	var xmlhttp;
    // 	if (window.XMLHttpRequest)
    // 	{
    // 		//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    // 		xmlhttp=new XMLHttpRequest();
    // 	}
    // 	else
    // 	{
    // 		// IE6, IE5 浏览器执行代码
    // 		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    // 	}
    // 	xmlhttp.onreadystatechange=function()
    // 	{
    // 		if (xmlhttp.readyState==4 && xmlhttp.status==200)
    // 		{
    // 			document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
    // 		}
    // 	}
    // 	xmlhttp.open("GET","/try/ajax/ajax_info.txt",true);
    // 	xmlhttp.send();
    // }