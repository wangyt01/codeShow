window.onload=initLinks;
var bannerArray = new Array("fivepage_1.jpg","fivepage_2.jpg","fivepage_3.jpg");

function initLinks(){
	for (var i=0;i<parent.document.links.length;i++){
		parent.document.links[i].onclick=setBanner;
	}
	setBanner();
}

function setBanner(){
	var radomNum = Math.floor(Math.random()*bannerArray.length);
	parent.document.getElementById("adBanner").src=bannerArray[radomNum];
}