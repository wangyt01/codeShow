var a = [1,2,3,4];

var sum = a.reduce(function(x,y){
	return x+y
},0);//z数组求和
var product = a.reduce(function(x,y){
	return x*y
},1)//数组求积
var max = a.reduce(function(x,y){
	return (x>y)?x:y;
});//求最大值

console.log(sum);
console.log(product);
console.log(max);