window.addEventListener("load",initAdvert,false);

function initAdvert(){
	var adBox = "annoyingAdvert";

	document.getElementById(adBox).style.display = "block";
	//这个层最初应该是隐藏的，所以看不到它。但是在加载页面之后，
	//脚本通过把display属性设置为block来显示他。
	document.getElementById("closeBox").addEventListener(
	 "click",
	 function(){
	 	document.getElementById(adBox).style.display = "none";
	 },
	 false
	);
}