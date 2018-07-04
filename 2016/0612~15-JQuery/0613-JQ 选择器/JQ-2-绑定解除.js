/**
 * Created by Administrator on 2016/6/13.
 */
$(document).ready(function() {
//    $("#clickBt").bind("click",clickHander1);//绑定
//    $("#clickBt").bind("click",clickHander2);
//    $("#clickBt").unbind("click",clickHander2);//解除
//})

    $("#clickBt").on("click", clickHander1);
    $("#clickBt").on("click", clickHander2);
    $("#clickBt").off("click", clickHander1);
})

function clickHander1(e){
    console.log("clickHander1")
}
function clickHander2(e){
    console.log("clickHander2")
}
