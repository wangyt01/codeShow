// alert("Welcome to my JavaScript");
// if(confirm("Are you sure you want to do that")){//confirm()方法有一个参数（向用户询问的问题）
// 	alert("You said yes");
// }
// else{
// 	alert("You said no");
// }
// window.onload = initAll;
// function initAll(){
// 	document.getElementById("redirect").onclick =initRedirect;
// }
// function initRedirect(){
// 	window.location ="index-3.html";
// 	return false;
// }
// window.onload =iniAll;
// function iniAll(){
// 	document.getElementById("redirect").onclick = initRedirect;
// } 
// function initRedirect(){
// 	alert("We are not responsible for the content of pages outside our site");
// 	window.location = this;
// 	return false;
// }
window.onload = initAll;
function initAll(){
	document.getElementById("Lincoln").onclick = saySomething;
	document.getElementById("Kennedy").onclick = saySomething;
	document.getElementById("Nixon").onclick = saySomething;
}
function saySomething(){
	switch(this.id){
		case "Lincoln":
		alert("Four score and seven years ago...");
		break;
		case "Kennedy":
		alert("Ask not what your country can do for you...");
		break;
		case "Nixon":
	    alert("I'm not a crook!");
		break;
		default:
	}}