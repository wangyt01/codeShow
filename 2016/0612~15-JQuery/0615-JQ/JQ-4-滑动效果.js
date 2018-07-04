/**
 * Created by Administrator on 2016/6/15.
 */
$(document).ready(function(){
    $("#flipshow").on("click",function(){
       $("#content").slideDown(1000);
    });
    $("#fliphide").on("click",function(){
       $("#content").slideUp(1000);
    });
    $("#fliptoggle").on("click",function(){
       $("#content").slideToggle(1000);
    });
});
