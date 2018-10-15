/**
** ajax获取数据
**
**
*/

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


/**
 ** 快速排序
 ** @param {Array} elements 数组
 */
function quickSort(elements) {
    if (elements.length <= 1) {
        return elements;
    }
    //floor() 对一个数进行下舍入 
    var pivotIndex = Math.floor(elements.length / 2);
    //splice(index,howmany) 向/从数组中添加/删除项目，然后返回被删除的项目 
    //howmany为如果设置为 0，则不会删除项目 
    //pivot 删除的数
    var pivot = elements.splice(pivotIndex, 1)[0];
    var left = [];
    var right = [];
    //
    for (var i = 0; i < elements.length; i++) {
        if (elements[i] < pivot) {
            left.push(elements[i]);
        } else {
            right.push(elements[i]);
        }
    }
    //concat() 方法用于连接两个或多个数组
    return quickSort(left).concat([pivot], quickSort(right));
}