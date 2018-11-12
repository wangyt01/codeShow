
//1.作用域
console.log(a);//undefined

var a = 1;

//this
a_1();

function a_1(){
	console.log(this);
	this.c = function(){
		console.log("hello")
		return "你好";
	}
}

var a_1F = new a_1();

a_1F.c()

//es6 变量提升

try{
console.log(b);
}catch(err){
	console.log("打印错误："+err);
}
try{
console.log(c);
}catch(err){
console.log("打印错误："+err);
}

let b = 1;
const c = 2;

console.log("b:"+b)
console.log("c:"+c)

//forEach

var aArray = ["a","b","c","d"];
// for(let i=0;i<aArray.length;i++){

// }

aArray.forEach(function(value,index,array){
	console.log(index+":"+value);
	console.log(array);
})
