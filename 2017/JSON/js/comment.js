// 段函数1
document.write("<script src='http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js'></script>")

var getId = function(id){
	return document.getElementById(id);
};

var getName = function(node){
	return document.getElementsByTagName(node);
};

var conLog = function(e){
	return console.log(e);
};

var objCall = function(e){
	return Object.prototype.toString.call(e);
}

var addChild = function(node){
	return document.body.appendChild(node);
}



//小球动画的封装
//Animate类编写一个动画
	var tween = {
		linear: function(t,b,c,d){
			return c*t/d + b;
		},
		easeIn: function(t,b,c,d){
			return c*(t/d)*t +b;
		},
		strongEaseIn: function(t,b,c,d){
			return c*(t/=d)*t*t*t*t+b;
		},
		strongEaseOut: function(t,b,c,d){
			return c*((t=t/d-1)*t*t*t*t+1)+b;
		},
		sineaseIn: function(t,b,c,d){
			return c*(t/=d)*t*t+b;
		},
		sineaseOut: function(t,b,c,d){
			return c*((t=t/d-1)*t*t+1)+b;
		}
	};

	var Animate = function(dom){
		this.dom = dom;			//进行运动的dome节点
		this.startTime = 0;		//动画开始的时间
		this.startPos = 0;		//动画开始是，dom节点的位置，即dom的初始位置
		this.endPos = 0;		//动画结束时，dom节点的位置，即dom的目标位置
		this.propertyName = null;//dom节点需要被改变的css属性名
		this.easing = null;		//缓动算法
		this.duration = null;	//动画持续时间
	};

	Animate.prototype.start = function(propertyName,endPos,duration,easing){
		this.startTime =+ new Date; //动画启动时间
		this.startPos = this.dom.getBoundingClientRect()[ propertyName ];//dom节点初始
		this.propertyName = propertyName;//dom节点需要被改变的css属性名
		this.endPos = endPos; //dom节点目标位置
		this.duration = duration; //动画持续事件
		this.easing = tween [easing]; //缓动算法

		var self = this;
		var timeId = setInterval(function(){//启动定时器，开始执行动画
			if(self.step() === false){
				clearInterval (timeId);
			}
		}, 19);
		};
		Animate.prototype.step = function(){
		var t =+ new Date; //取得当前时间
		if(t>= this.startTime + this.duration){
			this.update(this.endPos);//更新小球的css属性值
			return false;
		}
		var pos = this.easing(t - this.startTime,this.startPos,this.endPos-this.startPos,this.duration);
		//pso为小球的当前位置
		this.update(pos); //更新小球的css属性值
	};
	Animate.prototype.update = function(pos){
		this.dom.style[this.propertyName] = pos + 'px';
	};
//小球动画封装