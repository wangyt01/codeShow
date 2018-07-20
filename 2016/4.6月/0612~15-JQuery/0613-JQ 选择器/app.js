/**
 * Created by Administrator on 2016/6/13.
 */
$(document).ready(function(){
    $("button").click(function(){
        $("p").text("p元素被修改了");
        $("#pid").text("id p元素被修改了")
        $(".pclass").text("class p元素被修改了")
    })
})
