/**
 * Created by Administrator on 2016/6/13.
 */
$(document).ready(function(){
    $("#btn1").click(function(){
    $("#p1").text("LOL");
    });
    $("#btn2").click(function(){
        $("#p2").html("<a href='http://www.baidu.com'>百度一下</a>");
    });
    $("#btn3").click(function(){
        $("#i3").val("孤独拜月");
    });
    $("#btn4").click(function(){
        $("#aid").attr("href","http://lol.qq.com");
    });
    $("#btn5").click(function(){
        $("#p5").text(function(i,ot){
            return "old:"+ot+" new:这是新的内容"+(i);
        });
    })
});
