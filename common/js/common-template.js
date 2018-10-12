//////////////////////////////////
//文    件:common-template.js                
//作    者:王勇坛                        
//时    间:2018                
//整体说明:vue公共组件组册
//修 改 人:
//修改时间:
//修改说明:                
//////////////////////////////////

//公共顶部
Vue.component("common-header", {
	data: function() {
		return {
			data: [{
				url: "./2016/index-2016.html",
				name: "2016"
			}, {
				url: "./2017/2.index-2017-vue.html",
				name: "2017"
			}, {
				url: "./2018/2.index-2018-vue.html",
				name: "2018"
			}, {
				url: "./web前端/1.index(样式美化).html",
				name: "web前端"
			}]
		}
	},
	template: '  \
	 <header> \
            <div class="c-header"> \
                <div class="c-h-left"> \
                    <div class="title"> \
                        平凡的世界 \
                    </div> \
                </div> \
                <!-- 导航 --> \
                <div class="c-h-nav "> \
                    <div class="c-n-container"> \
                        <ul> \
                            <li v-for="el in data"><a v-bind:href="el.url" target="_blank">{{el.name}}</a></li> \
                        </ul> \
                    </div> \
                </div> \
            </div> \
        </header> \
	',
	methods: {

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