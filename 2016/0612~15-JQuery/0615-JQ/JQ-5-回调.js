/**
 * Created by Administrator on 2016/6/15.
 */
$(document).ready(function(){
   $("#btn1").click(function(){
       $("#div1").hide(1000,function(){
          alert("动画结束，这个方法称为回调") ;
       });
       $("#btn2").click(function(){
          $("#div2").css("background","red").slideUp(1000).slideDown(1000);
       });
   }) ;
});
