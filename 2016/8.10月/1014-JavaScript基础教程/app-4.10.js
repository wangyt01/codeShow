window.onload = choosePic;

var myPix= new Array("images/a_1.jpg","images/a_2.jpg","images/a_3.jpg");

function choosePic(){
	var randomNum=Math.floor(Math.random()*myPix.length);
	//变量randomNum被设置为一个数学表达式的值。这个表达式最好是从内向外读。
	//Math.random生成一个0~1的随机数，然后将这个数字乘以myPic.length,即
	//数组中成员的数量，Math.floor将结果向下取整，这意味着最终产生0，1和2
	//中的一个数字。
	document.getElementById("myPicture").src=myPix[randomNum];
}