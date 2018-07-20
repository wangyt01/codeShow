var o = {
	m: function(){
		var self = this;
		console.log(this ===0);
		f();

		function f(){
			console.log(this===0);
			console.log(self===0);
		}
	}
};
console.log(o);