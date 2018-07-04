/**
 * Created by Administrator on 2016/6/15.
 */
$(document).ready(function(){
   $("div").addClass("style1");
    $("div").click(function(){
        //$(this).addClass("style2");
        $(this).toggleClass("style2");
    });
});
