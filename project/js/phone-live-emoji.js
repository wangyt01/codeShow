// 接下来步骤
// 1.获取点击的这张图片
// 2.input中放进去这个图片的值.
// 3.把这个图片或者标志符号放进页面的div中.
var isFirst = true;
$("#btnLoad1").click(function() {
    if (vm.$data.eIsShow) {
        vm.$data.eIsShow = false;
    } else {
        vm.$data.eIsShow = true;
    }
    setTimeout(function() {
        emojiAuto()
    }, 200)
    if (isFirst) {
        $("#editor").emoji({
            button: "#btnLoad1",
            showTab: false,
            // animation: 'slide',
            position: 'topLeft',
            icons: [{
                name: "QQ表情",
                path: "plug-in/jQuery-emoji/dist/img/tieba/",
                maxNum: 40,
                // excludeNums: [41, 45, 54],
                file: ".jpg",
                placeholder: ":{alias}:",
                alias: {
                    1: "hehe",
                    2: "haha",
                    3: "tushe",
                    4: "a",
                    5: "ku",
                    6: "lu",
                    7: "kaixin",
                    8: "han",
                    9: "lei",
                    10: "heixian",
                    11: "bishi",
                    12: "bugaoxing",
                    13: "zhenbang",
                    14: "qian",
                    15: "yiwen",
                    16: "yinxian",
                    17: "tu",
                    18: "yi",
                    19: "weiqu",
                    20: "huaxin",
                    21: "hu",
                    22: "xiaonian",
                    23: "neng",
                    24: "taikaixin",
                    25: "huaji",
                    26: "mianqiang",
                    27: "kuanghan",
                    28: "guai",
                    29: "shuijiao",
                    30: "jinku",
                    31: "shengqi",
                    32: "jinya",
                    33: "pen",
                    34: "aixin",
                    35: "xinsui",
                    36: "meigui",
                    37: "liwu",
                    38: "caihong",
                    39: "xxyl",
                    40: "taiyang",
                    41: "qianbi",
                    42: "dnegpao",
                    43: "chabei",
                    44: "dangao",
                    45: "yinyue",
                    46: "haha2",
                    47: "shenli",
                    48: "damuzhi",
                    49: "ruo",
                    50: "OK"
                }
            }]
        });
        isFirst = false;
    } else {
        console.log("不是第一次");
    }
});
function emojiAuto() {
    var pageHeight = document.documentElement ? document.documentElement.clientHeight : document.body.clientHeight;
    $(".emoji_container").css({
        "left": 0,
        "top": "",
        "bottom": "32px"
    });
    $('.emoji_content').css({
        "height": "175px"
    })
    $('.emoji_container').css({
        'border': "0"
    })
    $('.emoji_content ul li').css({
        "width": "10%",
        "height": "50px",
        "border": "0"
    })
    // $('.emoji_content ul li a').click(function() {
    //     // console.log($(this))

    // })

}

function emojiParseF(Id){
    var id = Id || "sourceText";
     $("#"+id).emojiParse({
            icons: [{
                path: "plug-in/jQuery-emoji/dist/img/tieba/",
                file: ".jpg",
                placeholder: ":{alias}:",
                alias: {
                    1: "hehe",
                    2: "haha",
                    3: "tushe",
                    4: "a",
                    5: "ku",
                    6: "lu",
                    7: "kaixin",
                    8: "han",
                    9: "lei",
                    10: "heixian",
                    11: "bishi",
                    12: "bugaoxing",
                    13: "zhenbang",
                    14: "qian",
                    15: "yiwen",
                    16: "yinxian",
                    17: "tu",
                    18: "yi",
                    19: "weiqu",
                    20: "huaxin",
                    21: "hu",
                    22: "xiaonian",
                    23: "neng",
                    24: "taikaixin",
                    25: "huaji",
                    26: "mianqiang",
                    27: "kuanghan",
                    28: "guai",
                    29: "shuijiao",
                    30: "jinku",
                    31: "shengqi",
                    32: "jinya",
                    33: "pen",
                    34: "aixin",
                    35: "xinsui",
                    36: "meigui",
                    37: "liwu",
                    38: "caihong",
                    39: "xxyl",
                    40: "taiyang",
                    41: "qianbi",
                    42: "dnegpao",
                    43: "chabei",
                    44: "dangao",
                    45: "yinyue",
                    46: "haha2",
                    47: "shenli",
                    48: "damuzhi",
                    49: "ruo",
                    50: "OK"
                }
            }]
        });
}
