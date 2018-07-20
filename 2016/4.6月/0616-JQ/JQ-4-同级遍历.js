/**
 * Created by Administrator on 2016/6/16.
 */
/*
  siblings()
  next()
  nextAll()
  nextUntil()
  prev()
  prevAll()
  preUntil()
 */
$(document).ready(function(){
   $("#btn1").click(function(){
       $("h3").siblings().css({border:"2px solid red"});
   }) ;
    $("#btn2").click(function(){
        $("h3").next().css({border:"2px solid green"});
    }) ;
    $("#btn3").click(function(){
        $("h3").nextAll().css({border:"2px solid blue"});
    }) ;
    $("#btn4").click(function(){
        $("h3").nextUntil("h6").css({border:"2px solid yellow"});
    }) ;
    $("#btn5").click(function(){
        $("h3").prev().css({border:"2px solid #d200d2"});
    }) ;
    $("#btn6").click(function(){
        $("h3").prevAll().css({border:"2px solid black"});
    }) ;
    $("#btn7").click(function(){
     }) ;

});
