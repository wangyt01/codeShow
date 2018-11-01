layui.use('layer', function() {
    var layer = layui.layer;
})

//mui配置
mui.init({
    //关闭back按键监听
    keyEventBind: {
        backbutton: true
    },
    pullRefresh: {
        container: '#pullrefresh',
        //上拉加载
        down: {
            style: 'circle', //必选，下拉刷新样式，目前支持原生5+ ‘circle’ 样式
            contentrefresh: '正在加载...',
            callback: pullupRefresh
        }
    }
})



mui.ready(function() {
    //多个滚动条隐藏一条
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.001, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值 0.0006 
        indicators: false //隐藏一条滚动条 增大减速系数。。。
    });
    //滚动条滚动到底部
    mui('.mui-scroll-wrapper').scroll().scrollToBottom(1);
});
mui.plusReady(function() {
    // vm.query();
    //滚动到底部
    // mui('.mui-scroll-wrapper').scroll().scrollToBottom(100);


});
/**
 * 下拉加载下一页
 */
function pullupRefresh() {
    setTimeout(function() {
        //加载隐藏刷新框
        mui('#pullrefresh').pullRefresh().endPulldownToRefresh();
    }, 1500);
}


var vm = new Vue({
    el: "#phoneShow",
    data: {
        data: [{
            name: "刘德华",
            time: "14:00",
            content: "太棒了,66666666666太棒了,66666666666太棒了,66666666666太棒了,66666666666太棒了,66666666666"
        }, {
            name: "周润发",
            time: "14:00",
            content: "太棒了,66666666666太棒了,66666666666太棒了,66666666666太棒了,66666666666太棒了,66666666666"
        }, {
            name: "李连杰",
            time: "14:00",
            content: "太棒了,66666666666太棒了,66666666666太棒了,66666666666太棒了,66666666666太棒了,66666666666"
        }, {
            name: "成龙",
            time: "14:00",
            content: "太棒了,66666666666太棒了,66666666666太棒了,66666666666太棒了,66666666666太棒了,66666666666"
        }],
        // data: [1,2,3],
        useData: ["很好", "不错", "6666", "发发发", "6666", "发发发", "6666", "发发发"],
        isShow: null,
        eIsShow: null, //底部显示
        emojiShowBg: null, //表情背景显示
        inputText: "", //输入框文字
        numIsShow: null, //点赞显示
        dzShow: null, //点赞和点赞后显示隐藏
        dzNumber: 9999, //点赞数量
    },
    methods: {
        // 发送
        sendClick: function() {
            layer.msg('发送');
            this.eIsShow = false;
            //表情隐藏
            $('.emoji_container').css("display", "none");
            //输入框值
            var inputText = $("#editor").val();
            //输入框值放入表情转化的id中
            $("#sourceText").text(inputText);
            //表情转化
            emojiParseF();
            //表情转化以html输出
            var cHtml = $("#sourceText").html()
            // console.log(cHtml)
            //发送推出数组
            this.data.push({
                name: "成龙",
                time: "14:00",
                content: cHtml
            })
            //发送后清理输入框
            $("#editor").val("");
            // $("#sourceText").text("");

        },
        // 表情隐藏显示
        eShowF: function() {
            if (this.eIsShow) {
                this.eIsShow = false;
            } else {
                this.eIsShow = true;
            }
        },
        //获取输入框焦点
        iFoucus: function() {
            // layer.msg('获取焦点');
            // this.eIsShow = false;
            this.numIsShow = true;
        },
        // 暂时删除
        eChange: function(type) {
            if (type == 'zj') {
                layer.msg("最近");
                this.emojiShowBg = false;
            } else if (type == 'emoji') {
                layer.msg("emoji");
                this.emojiShowBg = true;
            }

        },
        // 常用评论
        useClick: function(name) {
            layer.msg("常用弹幕:" + name);
        },
        // 点赞显示颜色
        dzClick: function() {
            if (this.dzShow) {
                this.dzShow = false;
                this.dzNumber--
            } else {
                this.dzShow = true;
                this.dzNumber++
            }
        }

    }
})
$(document).ready(function() {
    autoPage();
})


//直播视频加载
var player = new TcPlayer('id_test_video', {
    // "m3u8": "http://21111.liveplay.myqclo;ud.com/live/21111_df6592ccc45111e892905cb9018cf0d4_550.m3u8", //请替换成实际可用的播放地址
    "mp4": "//1256993030.vod2.myqcloud.com/d520582dvodtransgzp1256993030/7732bd367447398157015849771/v.f30.mp4",
    "controls": "system",
    "x5_player": true,
    "autoplay": false, //iOS下safari浏览器，以及大部分移动端浏览器是不开放视频自动播放这个能力的
    "coverpic": {
        "style": "stretch",
        // "src": "img/video-bg-2.jpg"
    },
    "width": '100%', //视频的显示宽度，请尽量使用视频分辨率宽度
    "height": '100%', //视频的显示高度，请尽量使用视频分辨率高度
    listener: function(msg) {
        $('#id_test_video video').attr('x5-playsinline', "true");
        // $('#id_test_video video').attr('x5-playsinline', "true");
        return;
    }
});

/***
 ** 自适应页面
 */
function autoPage() {
    var pageHeight = document.documentElement ? document.documentElement.clientHeight : document.body.clientHeight;
    var topHeight = pageHeight - (202 + 36 + 178 * 0.5);
    //内容高度
    $(".phone-show").css("height", pageHeight + "px");
    //评论区
    // $(".m-content").css("height", topHeight + "px");
    //
    $('.c-content').css("height", topHeight + "px")

}