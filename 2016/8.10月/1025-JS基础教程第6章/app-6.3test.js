window.onload = function(){
	document.forms[0].onsubmit = validForm;
}

function validForm(){
	var allGood = true;
	var allTags = document.forms[0].getElementsByTagName("*");

	for(var i=0;i<allTags.length;i++){
		if(!validTag(allTags[i])){
			allGood = false;
		}
	}
	return allGood;

	function validTag(thisTag){
		
	}
}