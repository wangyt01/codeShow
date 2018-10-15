//公共head


/**
 * 引用JS和CSS头文件
 */
var rootPath = getRootPath(); //项目路径
/**
 * 动态加载CSS和JS文件
 */
var dynamicLoading = {
    meta: function() {
        document.write('<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">');
        document.writeln("<meta http-equiv=\'X-UA-Compatible\' content=\'IE=Edge,chrome=1\'>");
        document.writeln("<!-- 图标 -->");
        document.writeln("<link rel='shortcut icon' href='" + rootPath + "./common/images/favicon.ico' type='image/x-icon' />");
    },
    css: function(path) {
        if (!path || path.length === 0) {
            throw new Error('argument "path" is required!');
        }
        document.write('<link rel="stylesheet" type="text/css" href="' + path + '">');
    },
    js: function(path, charset) {
        if (!path || path.length === 0) {
            throw new Error('argument "path" is required!');
        }
        document.write('<script charset="' + (charset ? charset : "utf-8") + '" src="' + path + '"></script>');
    }
};


/**
 * 取得项目路径
 * @author wul
 */
function getRootPath() {
    //取得当前URL
    var path = window.document.location.href;
    //取得主机地址后的目录
    var pathName = window.document.location.pathname;
    var post = path.indexOf(pathName);
    //取得主机地址
    var hostPath = path.substring(0, post);
    console.log(hostPath)
    //取得项目名
    var name = pathName.substring(0, pathName.substr(1).indexOf("/") + 1);
    if (hostPath == "file://") {
        return name + "/github/codeShow/"
    } else {
        return hostPath + name + "/";
    }

}

//动态生成meta
dynamicLoading.meta();

//动态加载项目 CSS文件
dynamicLoading.css(rootPath + "/plug-in/bootstrap-3.3.6/dist/css/bootstrap.css");
dynamicLoading.css(rootPath + "/plug-in/layui-2.1.4/css/layui.css");
dynamicLoading.css(rootPath + "/plug-in/iconfont/iconfont.css");
document.writeln("    <!-- 重置样式 -->");
dynamicLoading.css(rootPath + "/common/css/reset.css");
document.writeln("    <!-- 公共样式 -->");
dynamicLoading.css(rootPath + "/common/css/common.css");



//动态加载项目 JS文件
document.writeln("<!-- 公共js -->");
dynamicLoading.js(rootPath + "/common/js/common.js", "utf-8");
dynamicLoading.js(rootPath + "/plug-in/JQuery-3.0.0/jquery-3.0.0.js", "utf-8");
dynamicLoading.js(rootPath + "/plug-in/layui-2.1.4/layui.js", "utf-8");
dynamicLoading.js(rootPath + "/plug-in/vue@2.5.6/vue.min.js", "utf-8");
document.writeln("<!-- 公共模板 -->");
dynamicLoading.js(rootPath + "/common/js/common-template.js", "utf-8");
// dynamicLoading.js(rootPath + "/js/process/center/common/jquery.dataTables.js", "utf-8");
// dynamicLoading.js(rootPath + "/js/platform/system/loadHeader.js", "utf-8");


// $(function(){
//     $(".container").append('<div id="header"></div>');
//     $("#header").load(getRootPath() + "header.html");
// });