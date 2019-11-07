// 1------
console.log([typeof null, null instanceof Object]);
//2------
var val = 'smtg';
console.log('value is:' + (val === 'smtg') ? "something" : "nothing");
//3-----执行的速度问题
var name = 'world';
(function() {
	if (typeof name === 'undefined') {
		var name = 'jack';
		console.log('good:' + name)
	} else {
		console.log('hello' + name);
	}
})();
//4----js 浮点数bug
var two = 0.2;
var one = 0.1;
var eight = .8;
var six = .6;
console.log(two - one)
console.log(eight - six)
console.log([two - one == one,eight - six == two]);
//5-----
function showCase(value){
	switch(value){
		case 'A':
		console.log(value);
		break;
		case 'B':
		console.log(value);
		break;
		case undefined:
		console.log('undefined');
		break;
		default:
		console.log('Do not know!');
	}
}

showCase(new String('A'));
//6-------
console.log(Array.isArray(Array.prototype))
//7-------
var a = [0];
if([0]){
	console.log(a == true);
}else{
	console.log('wut');
}
//8------
console.log([] == [])
//9------
console.log('5' + 3);
console.log('5' - 3);
//10-----
(function(){
 var x = y = 1;
})();
try{
console.log(y);
}catch(err){
	console.log(err);
}
try{
console.log(x);
}catch(err){
	console.log(err);
}
//11-----

