/**
 * Created by Administrator on 2016/6/15.
 */
$(document).ready(function(){
    $("#hide").click(function(){
        $("p").hide(500);
    });
    $("#show").click(function(){
        $("p").show(500);
    });
    $("#toggle").click(function(){
       $("p").toggle(500);
    });
});
