window.addEventListener("load",initAll,false);
var xhr = false;

function initAll(){
	document.getElementById("makeTextRequest").addEventListener("click",getNewFile,false);
	document.getElementById("makeXMLRequest").addEventListener("click",getNewFile,false);
}
//当加载页面时，会调用initAll()函数。在这里，我们设置两个click处理
//程序，当用户点击这两个链接是触发getNewFile()

function getNewFile(evt){
	makeRequest(this.href);
	evt.preventDefault();
}
function makeRequest(url){
	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
	}
	else{
		if(window.ActiveXObject){
			try{
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch (e){

			}
		}
	}
	if(xhr){
		xhr.addEventListener("readystatechange",showContents,false);
		xhr.open("GET",url,true);
		xhr.send(null);
	}
	//调用open()并且传递3个参数：一个HTTP请求方法、服务器上一个文件的URL
	//和一个布尔值，这个布尔值告诉服务器请求是否异步。
	else{
		document.getElmentById("updateArea").innerHTML="Sorry,but I couldn't create an XMLHttpRequest";
	}
}
function showContents(){
	if(xhr.readyState ==4){
		if(xhr.status ==200){
			if(xhr.responseXML && xhr.responseXML.childNodes.length>0){
				var outMsg = getText(xhr.responseXML.getElementsByTagName("choices")[0]);
			}
			else{
				var outMsg = xhr.responseText;
			}
		}
		else{
			var outMsg ="There was problem with the request "+xhr.status;
		}
		document.getElementById("updateArea").innerHTML = outMsg;
	}
	function getText(inVal){
		if(inVal.textContent){
			return inVal.textContent;
		}
	return inVal.text;
	}
}

