//谁调用指谁
//例1 输出 undefined
function test(){
	alert(this.m);
}
window.test();
//例二 输出100
window.m=100;
function test(){
	alert(this.m);
}
window.test();
//例3  输出100
this.m = 100;
function test(){
	alert(this.m);
}
window.test();
//例2，例3 说明this在这里指向window。
//例4 输出100
this.m = 1000;
var obj = {
	m:100,
	test:function(){
		alert(this.m);
	}
}
obj.test();
//例5 闭包 输出先100后1000
this.m = 1000;
var obj = {
	m:100,
	test:function(){
		alert(this.m);
		return function(){
			alert(this.m);
		}
	}
};
(obj.test())();
//里面这个function指向到了外面的window
///例6
this.m = 1000;
var obj = {
	m:100,
	test:function(){
		alert(this.m);
		return function(){
			alert(this.m);
		}
	}
};
var t = obj.test()
window.t();
//例5，例6说明(obj.test())();等于var t = obj.test()
//window.t();
//例8 输出1
this.a = 1000;
function test(){
	this.a=1;
}
test.prototype.geta=function(){
	return this.a;
};
var p = new test;
console.log(p.geta());
//例9 输出test {a: 1}
function test(){
	this.a=1;
}
test.prototype.a =100;
var p = new test;
console.log(p);
//例10 输出1
function test(){
	this.a=1;
}
test.prototype.a =100;
var p = new test;
console.log(p.a);