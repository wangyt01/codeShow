/**
 * Created by Administrator on 2016/6/16.
 */
/*
   parent()
   parents()
   parentsUntil()

 */

$(document).ready(function(){
    $("#btn1").click(function(){
        $("a").parent().css({border:"2px solid green"});

    });
    $("#btn2").click(function() {
        $("a").parents("#div1").css({border: "2px solid red"});
    });
    $("#btn3").click(function() {
        $("a").parentsUntil("#div1").css({border:"2px solid blue"});
    });
});
