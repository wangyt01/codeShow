/**
 * Created by Administrator on 2016/6/16.
 */
/*
first()
last()
eq()
filter()
not()
 */
$(document).ready(function(){
    $("#btn1").click(function(){
        $("div p").first().css("background-color","green");
    });
    $("#btn2").click(function(){
        $("div p").last().css("background-color","#d200d2");
    });
    $("#btn3").click(function(){
        $("div p").eq(2).css("background-color","aqua");
    });
    $("#btn4").click(function(){
        $("div p").filter(".pclass").css("background-color","yellow");
    });
    $("#btn5").click(function(){
        $("div p").not(".pclass").css("background-color","blue");
    });
});

