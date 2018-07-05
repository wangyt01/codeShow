function autoAjax(url, fnSucc, fnFaild) {
    //1【创建】
    if (window.XMLHttpRequest) {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        var oAjax = new XMLHttpRequest();
    } else {
        // IE6, IE5 浏览器执行代码
        var oAjax = new ActiveXObject("Microsoft.XMLHTTP");
    };

    //2: 【连接】true:表示异步
    oAjax.open('GET', url, true);

    //3：【发送】
    oAjax.send();

    //4：【接受】
    oAjax.onreadystatechange = function() {

        //判断浏览器操作到哪一步
        if (oAjax.readyState == 4) { //4：读取完成
            if (oAjax.status == 200) {
                fnSucc(JSON.parse(oAjax.responseText));
            } else {
                if (fnFaild) {
                    fnFaild(oAjax.status);
                }
            }

        }
    }
}