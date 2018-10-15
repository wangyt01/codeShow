//////////////////////////////////
//文    件:common-template.js                
//作    者:王勇坛                        
//时    间:2018                
//整体说明:vue公共组件组册
//修 改 人:
//修改时间:
//修改说明:                
//////////////////////////////////
//head中引入代码
Vue.component('common-link',{
	data:function(){
		return{

		}
	},
	template:' \
	<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">\
    <!-- 图标 -->\
    <link rel="shortcut icon" href="./common/images/favicon.ico" type="image/x-icon" />\
    <link rel="stylesheet" href="./common/css/reset.css">\
    <link rel="stylesheet" href="./common/bootstrap-3.3.6/dist/css/bootstrap.css">\
    <link rel="stylesheet" href="./common/layui-2.1.4/css/layui.css">\
    <!-- 公共样式 -->\
    <link rel="stylesheet" href="./common/css/common.css">\
	'
})


//公共顶部
Vue.component("common-header", {
	data: function() {
		return {
			data: [{
				url: "/github/codeShow/2016/index-2016.html",
				name: "2016"
			}, {
				url: "/github/codeShow/2017/2.index-2017-vue.html",
				name: "2017"
			}, {
				url: "/github/codeShow/2018/2.index-2018-vue.html",
				name: "2018"
			}, {
				url: "/github/codeShow/web前端/1.index(样式美化).html",
				name: "web前端"
			}]
		}
	},
	template: '  \
	 <header> \
            <div class="c-header"> \
                <div class="c-h-left"> \
                    <div class="title" @click="openIndex()"> \
                        平凡的世界 \
                    </div> \
                </div> \
                <!-- 导航 --> \
                <div class="c-h-nav "> \
                    <div class="c-n-container"> \
                        <ul> \
                            <li v-for="(el,index) in data" ><a href="#" @click="openUrl(index)">{{el.name}}</a></li> \
                        </ul> \
                    </div> \
                </div> \
            </div> \
        </header> \
	',
	methods: {
		openUrl:function(Index){
			// var tempwindow=window.open('_blank'); // 先打开页面
			// tempwindow.location=this.data[Index].url; // 后更改页面地址
			window.location.href = this.data[Index].url;
		},
		openIndex:function(){
			window.location.href ="/github/codeShow/index.html";
		}
	}
})

//公共底部
Vue.component("common-footer", {
	data: function() {
		return {

		}
	},
	template: ' \
	 <footer>\
            <div class="c-footer">公共底部</div>\
        </footer>\
	',
	methods: {

	}
})