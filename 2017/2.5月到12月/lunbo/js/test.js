;(function($){

	var defaluts = {
		width: 600,
		height: 300,
		title: false,
		type: "slide",
		duration: 500,
		interval: 5000,
		arrowControl: true,
		prevBtn: null,
		nexvBtn: null,
		navControl: true,
		afterInit: function(){}
	};

	var CSS_SHOW = "show",
		canTransiton = supportCSS3("transition");

		$.fn.extend({
			QFocus: function(options){
				var setting = $.extend({},defaluts,options);
				init(setting,this);
				return this;
			}
		});

		function init(setting,_this){
			var images = _this.find('li'),
				length = images.length,
				interval,
				duration,
				titles,title,
				len,img,i,
				prev,next,
				options = {},
				style;

				images.css('width',setting.width);
				_this.css({'width':setting.width,"height":setting.height});

				if(setting.arrowControl && !setting.prevBtn && !setting.nextBtn){
					
				}
		}
})