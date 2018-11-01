// import _ from 'lodash';

function component() {
	var element = document.createElement('div');

	// Lodash, now imported by this script
	element.innerHTML = _.join(['test', 'webpack'], ' ');

	return element;
}
/**
* * 循环显示
*/
function cycle(){
	var root = document.getElementById("root");

	var arr = [];
	for(let i=0;i<5;i++){
		arr.push("##"+i+"***"+"test");
	}
	root.innerHTML = _.join(arr,'<br> ');

	return root;
}

window.onload = function(){
	cycle();
}
document.body.appendChild(component());