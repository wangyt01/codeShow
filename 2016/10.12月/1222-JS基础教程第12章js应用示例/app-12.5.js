window.addEventListener("load",initAll,false);

function initAll(){
	document.getElementById("sillySubmit").addEventListener(
		"click",
		function(){
			document.getElementById("msgField").innerHTML = getStillyName();
			return false;
		},
		false
		);
}

function getStillyName(){
	var firstName = ["Runny","Buttercup","Dinky","Stinky","Crusty","Greasy","Gidget","Cheesypoof","Lumpy","Wacky","Tiny","Flunky","Flunky","Zippy","Doofus","Gobsmacked","Slimy","Grimy","Salamander","Oily","Burrito","Bumpy","Loopy","Snotty","Irving","Egbert"];
    var lastName1 = ["Snicker","Burger","Gross","Bubble","Sheep","Corset","Toilet","Lizard","Waffle","Kumquat","Burger","Chimp","Liver","Gorilla","Rhino","Emu","Pizza","Toad","Gerbil","Pickle","Tofu","Chicken","Potato","Hamster","Lemur","Vermin"];
    var lastName2 = ["face","dip","nose","brain","head","breath","pants","shorts","lips","mouth","muffin","butt","bottom","elbow","honker","tose","buns","spew","kisser","fanny","squirt","chunks","brains","wit","wit","juice","shower"];
 
    var firstNm = document.getElementById("fName").value.toUpperCase();
    var lastNm = document.getElementById("lName").value.toUpperCase();
    //页面要求每个访问者在文本字段中输入他们的名字和姓氏。当提交表单时，在
    //grtStillyName()函数中，首先将名字和姓氏转换为全大写，并且将结果存储
    //在变量firstNm和lastNm中。
    var validName = true;

    if(firstNm ==""){
    	validName =false;
    }
    else{
    	var firstNum = firstNm.charCodeAt(0)-65;
    	//charCodeAt()方法从字符串中取出一个字符。
    	if(firstNum<0||firstNum>25){
    		validName = false;
    	}
    	//如果用户输入的名字并非以A~Z的字符开头，那么就没有对应的娱乐名。
    }
    if(!validName){
    	document.getElementById("fName").focus();
    	document.getElementById("fName").select();
    	return "That's not a valid first name";
    }
    //在这里检查validName，如果validName是false，就意味着用户输入的名字是无效
    //的。当发生这种情况时，我们将输入光标放进这个字段，选择这个字段中
    //所有的内容，并且返回上一个错误信息。

    if(lastNm ==""){
    	validName =false;
    }
    else{
    	var lastNum1 = lastNm.charCodeAt(0)-65;
    	var lastNum2 = lastNm.charCodeAt(lastNm.length-1)-65;
    	//为了找到访问者的娱乐姓氏，需要找到姓氏的第一个字符和最后一个字符的
    	//ASCII值。

    	if(lastNum1<0||lastNum1>25||lastNum2<0||lastNum2>25){
    		validName = false;
    	}
    	//与名字字段一样，必须确保姓氏的第一个字符和最后一个字符包含A~Z
    	//的字符。
    }

    if(!validName){
    	document.getElementById("lName").focus();
    	document.getElementById("lName").select();
    	return "That's not a valid last name";
    }
    return "Your silly name is "+firstName[firstNum]+" "+lastName1[lastNum1]+lastName2[lastNum2];

}