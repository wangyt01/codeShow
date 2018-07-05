// ==UserScript==
// @name         试用机器人
// @namespace    GOUDONGSHIYONG
// @version      1.1.2
// @description  一键试用全部商品，开始前可以选择过滤。
// @author       Shadows-隐
// @match        *://try.jd.com/*
// @license      Mozilla Public License 2.0; http://www.mozilla.org/MPL/2.0/
// ==/UserScript==

var shield = "粉底|贴膜|口红|内裤|女士|婴儿"; //屏蔽词，商品含有目标词时，商品将会被过滤。
var wantTo = "吸尘器|电视"; //目标词，只要商品含有目标词，商品无论什么情况下都会被选中，即使也含有屏蔽词。
var price = 1; //价格，只试用价格以上的商品。

var style = ".dogDong-begin {margin-right:15px;}.dogDong-stop {display: none;width: 50px;height: 50px;border-radius: 50%;border: 1px;background: red;position: fixed;right: 25px;bottom: 100px;z-index: 99999999;color: #fff;}.dogDong-run .dogDong-begin{display: none;}.dogDong-run .dogDong-stop{display: block;}";

function DogMachine(list, shield, wantTo) {
    this.list = list;
    this.shield = new RegExp(shield);
    this.wantTo = new RegExp(wantTo);
    this.times = [0, 0];
    this.wait = true; //上一个请求结束之后再继续
    this.follow = false; //是否关注店铺
    this.init();
}
//默认配置
DogMachine.prototype.init = function () {
        //页面之间数据传递
        //!!sessionStorage.getItem("times") = false
    if (!!sessionStorage.getItem("times")) {
        this.times = sessionStorage.getItem("times").split(",");
        $("#times").val(this.times[1]);
    }
    if ($("#isFollow").is(':checked')) {
        this.follow = true;
    }

    let _this = this;
    _this.list = $.grep(_this.list, function (v, i) {
        let _$ = $(v);
        let prc;
        try {
            prc = _$.find(".p-price").children().html().match(/[\d.]+/)[0] - 0;
        } catch (error) {
            prc = 999999999;
        }
        let name = _$.find(".p-name").html();
        if ((price > prc || _this.shield.test(name)) && !_this.wantTo.test(name)) {
            return v;
        }
    }, true);

    this.run();
};
DogMachine.prototype.bowwow = function (codes) {
    let _this = this;
    let code = $(codes).find("a")[0].href.match(/\/([\d]+)\./)[1];
    this.wait = false;
    $.ajax({
        url: "https://try.jd.com/migrate/apply",
        data: {
            activityId: code,
            source: 0
        },
        success: function (r) {
            _this.wait = true;
            if (r.code == 1) {
                console.log(r);
                if (_this.follow) {
                    $.ajax({
                        url: "https://try.jd.com/" + code + ".html",
                        success: function (r) {
                            let follow;
                            let name;
                            try {
                                follow = r.match(/vender_id ="([\d]+)"/)[1];
                                name = r.match(/<a class="p-name" href="\/\/try.jd.com\/activity\/getActivityById\?id=[\d]+">(.*)\<\/a\>/)[1];
                            } catch (error) {
                                console.log("关注失败!");
                                return;
                            }
                            $.ajax({
                                url: "https://follow-soa.jd.com/rpc/shardVender/follow",
                                dataType: "jsonp",
                                xhrFields: {
                                    withCredentials: true
                                },
                                data: {
                                    sysName: "try.jd.com",
                                    venderId: follow
                                },
                                success: function (r) {
                                    if (r.success == true) {
                                        console.log(name + "  关注成功！");
                                    }
                                }
                            });
                        }
                    });
                }
            } else if (r.code - 0 == -104 || r.code - 0 == -100 || "bottom" in r) {

            } else if (r.code - 0 == -110) {
                location.href = location.href;
            } else {
                _this.list.push(codes);
            }
        },
        error: function () {
            _this.wait = true;
        },
        complete: function () {
            _this.wait = true;
        }
    });
};
DogMachine.prototype.run = function () {
    let page = $(".ui-pager-next").attr("rel") || 1;
    let _this = this;
    setInterval(function () {
        if (_this.list.length < 1 && page == 1) {
            if (_this.times[0] == _this.times[1]) {
                alert("运行完毕！");
                sessionStorage.removeItem("times");
                sessionStorage.removeItem("run");
                location.href = location.href;
            } else {
                _this.times[0] = _this.times[0] - 0 + 1;
                sessionStorage.setItem("times", _this.times.join(","));
            }
        }
        if (_this.wait) {
            let codes = _this.list.shift();
            if (!codes) {
                if (location.href.indexOf('page=') != -1) {
                    location.href = location.href.replace(/page=([\d]+)/, "page=" + page);
                } else {
                    location.href = location.href + "?&page=" + page;
                }
            } else {
                _this.bowwow(codes);
            }
        }
    }, 6000);
};
var addStyleNode = function (str) {
    let styleNode = document.createElement("style");
    styleNode.type = "text/css";
    if (styleNode.styleSheet) {
        styleNode.styleSheet.cssText = str; //ie下要通过 styleSheet.cssText写入.
    } else {
        styleNode.innerHTML = str; //在ff中， innerHTML是可读写的，但在ie中，它是只读的.
    }
    document.getElementsByTagName("head")[0].appendChild(styleNode);
};

$(function () {
    addStyleNode(style);
    if(location.href.indexOf("http://")!=-1){
        //一个字符替换另一个字符
        location.href=location.href.replace("http://","https://");
    }
    let btn_box = $('<div class="f-result-sum"></div>');
    let btn1 = $('<button class="dogDong-begin">一键试用</button>');
    let btn2 = $('<button class="dogDong-stop">停止</button>');
    let checkbox = $('<input type="checkbox" id="isFollow"><label for="isFollow">关注店铺</label>');
    let times = $('<input id="times" placeholder="重跑次数">');
    let lshield = $('<label>&nbsp;&nbsp;屏蔽词：</label><input id="shield" placeholder="默认">');
    let lwantTo = $('<label>&nbsp;&nbsp;目标词：</label><input id="wantTo" placeholder="默认">');
    let lprice = $('<label>&nbsp;&nbsp;价格：</label><input id="price">');
    times.css('width', '55px');
    lprice.css('width', '55px');
    checkbox.click(function () {
        let check = $("#isFollow");
        if (check.is(':checked')) {
            sessionStorage.setItem("isFollow", true);
        } else {
            sessionStorage.removeItem("isFollow");
        }
    });
    btn1.click(function () {
        //开始试用方法
        if (isNaN($("#times").val() - 0)) {
            alert('一定要输入阿拉伯整数！');
            return false;
        } else {
            sessionStorage.setItem("times", $("#times").val() - 0 + ",0");
        }
        localStorage.setItem("shield", $("#shield").val() || shield);
        localStorage.setItem("wantTo", $("#wantTo").val() || wantTo);
        localStorage.setItem("price", $("#price").val() || price);

        sessionStorage.setItem("run", 1); //标记开始
        $(".top-page.clearfix").addClass("dogDong-run"); //隐藏一键试用按钮，显示停止
        var goods = $(".try-button.show:contains('我要申请'),.try-button.show:contains('我要试用')").parent().toArray();
        new DogMachine(goods, $("#shield").val(), $("#wantTo").val());
    });

    btn2.click(function () {
        sessionStorage.removeItem("run");
        location.href = location.href;
    });

    btn_box.append(btn1, btn2, times, checkbox, lshield, lwantTo, lprice);

    function runAsync() {
        var def = $.Deferred();
        $(".top-page.clearfix").append(btn_box);
        let stop = setInterval(function () {
            if ($("#pager")) {
                clearInterval(stop);
                def.resolve();
            }
        }, 500)
        return def.promise();
    }

    runAsync().then(function () {
        if (!!sessionStorage.getItem("isFollow")) {
            $("#isFollow").attr('checked', true);
        }

        let oldshield = localStorage.getItem("shield");
        let oldwantTo = localStorage.getItem("wantTo");
        let oldprice = localStorage.getItem("price");

        !!oldshield ? $("#shield").val(oldshield) : $("#shield").val(shield);
        !!oldwantTo ? $("#wantTo").val(oldwantTo) : $("#wantTo").val(wantTo);
        !!oldprice ? $("#price").val(oldprice) : $("#price").val(price);

        if (!!sessionStorage.getItem("run")) {
            $(".top-page.clearfix").addClass("dogDong-run");
            setTimeout(function () {
                var goods = $(".try-button.show:contains('我要申请'),.try-button.show:contains('我要试用')").parent().toArray();
                new DogMachine(goods, $("#shield").val(), $("#wantTo").val());
            }, 1000);
        }
    })
});