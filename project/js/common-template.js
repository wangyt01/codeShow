//////////////////////////////////
//文    件:common-template.js                
//作    者:王勇坛                        
//时    间:2018                
//整体说明:vue公共组件组册
//修 改 人:
//修改时间:
//修改说明:                
//////////////////////////////////

//公共左侧
Vue.component('common-left', {
    data: function() {
        return {
            data: [{
                url: "plant",
                name: "植物类",
                iClass: "iconfont icon-rencan"
            }, {
                url: "animal",
                name: "动物类",
                iClass: "iconfont icon-dongwu"
            }, {
                url: "#",
                name: "矿物类",
                iClass: "iconfont icon-grade"
            }, {
                url: "#",
                name: "其他",
                iClass: "iconfont icon-yaocai"
            }, {
                url: "#",
                name: "文化",
                iClass: "iconfont icon-zhongyao1"
            }]
        }
    },
    template: ' \
    <div class="c-left">\
            <div class="c-l-content">\
                <ul>\
                    <li v-for="(el,index) in data" @click="urlGo(index)">\
                        <p><i v-bind:class="el.iClass"></i></p>\
                        <p class="name">{{el.name}}</p>\
                    </li>\
                </ul>\
            </div>\
    </div>\
	',
    methods: {
        urlGo: function(Index) {
            // 后缀
            var suffix = '.html';
            var self = this;
            var index = Index;
            var Url = self.$data.data[index].url;
            window.location.href = Url + suffix;
        }
    }
})

//公共顶部
Vue.component('common-header-right', {
    data: function() {
        return {

        }
    },
    template: ' \
		  <div class="r-user-content">\
                    <div class="left-input">\
                        <span class="l-select" style="">\
                            <select name="" id="">\
                                <option value="">全部</option>\
                                <option value="">植物类</option>\
                                <option value="">动物类</option>\
                                <option value="">矿物类</option>\
                                <option value="">其他</option>\
                                <option value="">文化</option>\
                            </select>\
                        <!-- <i class="iconfont icon-xiangyou"></i></span> -->\
                        <input type="text" placeholder="请输入名称">\
                        </span>\
                        <!-- 搜索按钮 -->\
                        <i class="iconfont icon-sousuo"></i>\
                    </div>\
                    <div class="left-select" style="display:none;">\
                        <!-- 搜索按钮 -->\
                        <i class="iconfont icon-sousuo" id="sousuo"></i>\
                    </div>\
                    <div class="right">\
                        <div class="user">\
                            <a href="#"><i class="iconfont icon-yonghu"></i>&nbsp;用户名</a>\
                        </div>\
                        <div class="exit">\
                            <a href="login.html"><i class="iconfont icon-icon"></i>&nbsp;退出</a>\
                        </div>\
                    </div>\
                </div>\
	'
})

//公共底部
Vue.component('common-footer', {
    data: function() {
        return {

        }
    },
    template: ' \
            <div class="footer c-footer">\
                <div class="f-content">\
                    <span>技术支持</span><a href="#">济南中飞科技有限公司</a>\
                </div>\
            </div>\
	'
})

//展示的列表
Vue.component('r-list-show', {
    data: function() {
        return {

        }
    },
    template: ' \
     <div class="r-list-show" style="display:none;">\
                    <ul>\
                        <li>\
                            <a href="plant-content.html"><i class="iconfont icon-xinxi"></i>\
                            <span>基本信息</span></a>\
                        </li>\
                        <li>\
                            <a href="plant-content-identify.html"><i class="iconfont icon-biaoqian"></i>\
                        <span>性状鉴别</span></a>\
                        </li>\
                        <li>\
                            <a href="plant-content-drugs.html"><i class="iconfont icon-zhongyao"></i>\
                            <span>炮制</span></a>\
                        </li>\
                        <li>\
                            <a href="#">\
                        <i class="iconfont icon-jinqixiangsichengjiaoanlichaxun"></i>\
                        <span>伪药/附药</span></a></li>\
                        <li class="active">\
                            <a href="plant-content-efficacy.html">\
                        <i class="iconfont icon-youxiao"></i><span>功效</span></a>\
                        </li>\
                        <li>\
                            <a href="plant-content-culture.html"><i class="iconfont icon-lishi"></i>\
                            <span>中医药文化</span></a>\
                        </li>\
                    </ul>\
                </div>\
    '
})


//展示的列表
Vue.component("r-list-show", {
    data: function() {
        return {

        }
    },
    template: '\
     <div class="r-list-show" style="display:none;">\
                    <ul>\
                        <li class="active">\
                            <a href="plant-content.html"><i class="iconfont icon-xinxi"></i>\
                            <span>基本信息</span></a>\
                        </li>\
                        <li>\
                            <a href="plant-content-identify.html"><i class="iconfont icon-biaoqian"></i>\
                        <span>性状鉴别</span></a>\
                        </li>\
                        <li>\
                            <a href="plant-content-drugs.html"><i class="iconfont icon-zhongyao"></i>\
                            <span>炮制</span></a>\
                        </li>\
                        <li>\
                            <a href="#">\
                        <i class="iconfont icon-jinqixiangsichengjiaoanlichaxun"></i>\
                        <span>伪药/附药</span></a></li>\
                        <li>\
                            <a href="plant-content-efficacy.html">\
                        <i class="iconfont icon-youxiao"></i><span>功效</span></a>\
                        </li>\
                        <li>\
                            <a href="plant-content-culture.html"><i class="iconfont icon-lishi"></i>\
                            <span>中医药文化</span></a>\
                            </li>\
                    </ul>\
      </div>\
    '
})

//植物内容--0
Vue.component("plant-content", {
    data: function() {
        return {
            isShow: false
        }
    },
    template: ' \
      <!-- S 中部内容 -->\
            <div class="p-content">\
                <div class="c-r-content ">\
                    <!-- 内容 -->\
                    <div class="c-left-content">\
                        <p><span>[&nbsp;狗脊&nbsp;]</span></p>\
                        <img src="img/img-1.jpg" height="" width="" alt="">\
                    </div>\
                    <div class="c-right-content">\
                        <ul>\
                            <li id="explain" @click="showInfo()">\
                                <p><i class="iconfont icon-shuoming1"></i></p>\
                                <p class="name"><a href="#">说明</a></p>\
                            </li>\
                            <li @click="showVideo()">\
                                <p><i class="iconfont icon-shipin" style=""></i></p>\
                                <p class="name"><a href="#">视频</a></p>\
                            </li>\
                        </ul>\
                    </div>\
                    <!-- 说明展示 -->\
                    <div class="explain-show" v-show="isShow">\
                        <div class="title-top">\
                            <span>说明</span>\
                            <a href="#" @click="closeInfo()" id="explainClose"><i class="iconfont icon-cuo"></i></a>\
                        </div>\
                        <div class="show-content">\
                            <div class="name s-text"><span>[名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称]:</span>&nbsp;&nbsp;狗脊</div>\
                            <div class="another-name s-text"><span>[药材别称]:</span>&nbsp;&nbsp;根及根茎</div>\
                            <div class="base s-text"><span>[基&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;源]:</span>&nbsp;&nbsp;蚌壳蕨科植物金毛狗脊Cibotium barometz（L.）J.Sm.的干燥根茎。</div>\
                            <div class="harvest s-text"><span>[采收加工]:</span>&nbsp;&nbsp;秋、冬二季采挖，除去泥沙，干燥；或去硬根、叶柄及金黄色绒毛，切厚片，干燥，为“生狗脊片”，蒸后，晒至六、七成干，切厚片，干燥，为“熟狗脊片”。\
                            </div>\
                            <div class="address s-text"><span>[产&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;地]</span>&nbsp;&nbsp;主产于四川、福建等地。</div>\
                        </div>\
                    </div>\
                </div>\
            </div>\
            <!-- E 中部内容 -->\
    ',
    methods: {
        showInfo: function() {
            if (!this.isShow) {
                this.isShow = true;
            } else {
                this.isShow = false;
            }
           
        },
        closeInfo:function(){
            this.isShow = false;
        },
        showVideo: function() {

        }
    }
})

//性状鉴别--1
Vue.component("plant-content-identify", {
    data: function() {
        return {

        }
    },
    template: '  \
    <!-- 内容顶部 -->\
            <div class="p-c-identify">\
                <div class="c-left-top">\
                    <span><a href="#"><i class="iconfont icon-lecloud_suoyouyingyong"></i>个子</a></span>\
                    <span class="s-active"><a href="#" ><i class="iconfont icon-zhongyaoyinpian"></i>饮片1</a></span>\
                    <span><a href="#"><i class="iconfont icon-zhongyaoyinpian"></i>饮片2</a></span>\
                </div>\
                <!-- S 中部内容 -->\
                <div class="c-r-content">\
                    <!-- 内容 -->\
                    <div class="c-left-content">\
                        <p><span>[&nbsp;狗脊&nbsp;]</span></p>\
                        <img src="img/img-1.jpg" height="" width="" alt="">\
                    </div>\
                    <div class="c-right-content">\
                        <ul>\
                            <li id="explain">\
                                <p><i class="iconfont icon-shuoming" style=""></i></p>\
                                <p class="name"><a href="#">说明</a></p>\
                            </li>\
                            <!-- <li>\
                            <p><i class="iconfont icon-shipin" style="font-size:28px;"></i></p>\
                            <p class="name">视频</p>\
                        </li> -->\
                        </ul>\
                    </div>\
                    <!-- 说明展示 -->\
                    <div class="explain-show" style="display:none;">\
                        <div class="title-top">\
                            <span>说明</span>\
                            <a href="#" id="explainClose"><i class="iconfont icon-cuo"></i></a>\
                        </div>\
                        <div class="show-content">\
                            <div class="name s-text"><span>[名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称]:</span>&nbsp;&nbsp;狗脊</div>\
                            <div class="another-name s-text"><span>[药材别称]:</span>&nbsp;&nbsp;根及根茎</div>\
                            <div class="base s-text"><span>[基&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;源]:</span>&nbsp;&nbsp;蚌壳蕨科植物金毛狗脊Cibotium barometz（L.）J.Sm.的干燥根茎。</div>\
                            <div class="harvest s-text"><span>[采收加工]:</span>&nbsp;&nbsp;秋、冬二季采挖，除去泥沙，干燥；或去硬根、叶柄及金黄色绒毛，切厚片，干燥，为“生狗脊片”，蒸后，晒至六、七成干，切厚片，干燥，为“熟狗脊片”。\
                            </div>\
                            <div class="address s-text"><span>[产&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;地]</span>&nbsp;&nbsp;主产于四川、福建等地。</div>\
                        </div>\
                    </div>\
                </div>\
            </div>\
            <!-- E 中部内容 -->\
    '
})


//炮制--2
Vue.component("plant-content-drugs", {
    data: function() {
        return {

        }
    },
    template: ' \
<!-- S 中部内容 -->\
            <div class="p-c-drugs">\
                <div class="c-r-content">\
                    <!-- 内容 -->\
                    <div class="c-left-content">\
                        <p><span>[&nbsp;狗脊&nbsp;]</span></p>\
                        <img src="img/img-1.jpg" height="" width="" alt="">\
                    </div>\
                    <div class="c-right-content">\
                        <ul>\
                            <li id="explain">\
                                <p><i class="iconfont icon-shuoming" style=""></i></p>\
                                <p class="name"><a href="#">炮制<br>方法</a></p>\
                            </li>\
                            <!--   <li>\
                            <p><i class="iconfont icon-shipin" style="font-size:28px;"></i></p>\
                            <p class="name">视频</p>\
                        </li> -->\
                        </ul>\
                    </div>\
                    <!-- 说明展示 -->\
                    <div class="explain-show" style="display:none;">\
                        <div class="explain-show-bg">\
                            <div class="title-top">\
                                <span>炮制方法</span>\
                                <a href="#" id="explainClose"><i class="iconfont icon-cuo"></i></a>\
                            </div>\
                            <div class="show-content">\
                                <div class="name">地榆炭</div>\
                                <p>（1）取净地榆片，置炒制容器内，用武火加热，炒至表面焦黑色、内部棕褐色，取出晾凉，筛去碎屑。 </p>\
                                <p>（2）形如生地榆片，表面焦黑色，内部棕褐色。</p>\
                                <p></p>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
            </div>\
            <!-- E 中部内容 -->\
    '
})
//功效--4
Vue.component("plant-content-efficacy", {
    data: function() {
        return {
            data: []
        }
    },
    template: '\
            <!-- S 中部内容 -->\
            <div class="p-c-efficacy">\
                <div class="c-r-content">\
                    <div class="e-content">\
                        <div class="bottom-content" v-for="el in data">\
                            <div class="deco-1 name">\
                                {{el.type}}\
                            </div>\
                            <div class="line-1"></div>\
                            <div class="line-2"></div>\
                            <div class="deco-info info">\
                                {{el.info}}\
                            </div>\
                        </div>\
                        <!--  <div class="bottom-content">\
                        <div class="deco-1 name">\
                            适应病症\
                        </div>\
                        <div class="line-1"></div>\
                        <div class="line-2"></div>\
                        <div class="deco-info info">用于腰膝酸软，下肢无力，风湿痹痛。</div>\
                    </div>\
                    <div class="bottom-content">\
                        <div class="deco-1 name">\
                            功能描述\
                        </div>\
                        <div class="line-1"></div>\
                        <div class="line-2"></div>\
                        <div class="deco-info info">主腰背强，机关缓急，周痹寒湿，膝痛。颇利老人。</div>\
                    </div> -->\
                    </div>\
                </div>\
            </div>\
            <!-- E 中部内容 -->\
    ',
    mounted: function() {
        this.$nextTick(function() {
            this.query();
        })
    },
    methods: {
        query: function() {
            var self = this;
            autoAjax('data/plant-content-efficacy.json', function(json) {
                self.data = json;
            })
        }
    }
})
//中医药文化--5
Vue.component("plant-content-culture", {
    data: function() {
        return {

        }
    },
    template: '\
        <!-- S 中部内容 -->\
            <div class="p-c-culture">\
                <div class="c-r-content">\
                    <div class="cul-content">\
                        <div class="text-content">\
                            <div class="top-text">\
                                <span>\
                                \
                            </span>\
                            </div>\
                            <div class="middle-text">\
                                文化】《名医》曰：生桐柏及冤句，二月八月，采根，暴干。《纲目》:地榆，除下焦热，治大小便血证。止血，取上截切片炒用，其梢则能行血，不可不知。杨士瀛云：诸疮痛者加地榆，痒者加黄芩。 文化】《名医》曰：生桐柏及冤句，二月八月，采根，暴干。《纲目》:地榆，除下焦热，治大小便血证。止血，取上截切片炒用，其梢则能行血，不可不知。杨士瀛云：诸疮痛者加地榆，痒者加黄芩。\
                            </div>\
                            <div class="bottom-text">\
                                <span>\
                                \
                            </span>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
            </div>\
            <!-- E 中部内容 -->\
    '
})

/**
 ** 左侧列表活动
 ** @param {number} index 第几个li元素
 **
 */
function leftListActive(index) {
    var li = $('.c-l-content>ul>li:nth-child(' + index + ')')
    li.addClass("active");
    li.siblings().removeClass("active");
}


var ctx = ""
/**
 * 对ajax请求的封装
 * @param url
 * @param param
 * @param sucess
 * @param fail
 */
function autoAjax(url, param, sucess, fail) {
    var jqxhr = $.post(ctx + url, param, function(data, textStatus, jqXHR) {
        if (data && data.needLogin) { //超时
            var loginUrl = "";
            if (typeof(login_url) == "undefined") {
                var lurl = window.sessionStorage.getItem("login_url")
                if (lurl) {
                    loginUrl = lurl;
                } else {
                    loginUrl = ctx + "/jsp/admin/login.jsp";
                }
            } else {
                loginUrl = login_url;
            }
            top.location.href = loginUrl;
            return;
        }
        if (sucess) {
            sucess(data);
        }

    }, "json");

}