//a.脸.嘴.腿
function classA(){
	this.lian="";
	this.zui="";
	this.tui="";
}
classA.prototype = {
	setLian:function(){
		this.lian = "红扑扑";
		return this;
	},
	setZui:function(){
        this.zui = "大嘴";
        return this;
	},
	setTui:function(){
		this.tui = "大长腿";
	}
	
};
var person = new classA();
person.setLian().setZui().setTui();
console.log(person);