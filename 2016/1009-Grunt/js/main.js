function test(argunment){
	this.a=1;
};
test.protatype.method_name=function(first_argument){
	console.log(this.a);
}