/**
 * Created by Administrator on 2016/5/10.
 */

var countNum = 0;
function count(){
    postMessage(countNum);
    countNum++;
    setTimeout(count,1000);
}

count();
var i=0;


