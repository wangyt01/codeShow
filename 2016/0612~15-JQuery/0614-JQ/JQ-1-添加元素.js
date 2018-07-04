/**
 * Created by Administrator on 2016/6/14.
 */
/**
 *append
 * prepend
 * before
 * after
 */

$(document).ready(function(){
    $("#btn1").click(function(){
        //$("#p1").append("this is my webpage add content");
        $("#p1").prepend("this is my webpage add content,");
    });
    $("#btn2").click(function(){
        //$("#p2").before("hello");
       $("#p2").after("hello");
    });

});

function appendText(){
    /**
     * html,jQuery,DOM
     */
    var text1="<p>孤独拜月</p>"
    var text2=$("<p></p>").text("ime");
    var text3 = document.createElement("p");
    text3.innerHTML="acely";
    $("body").append(text1,text2,text3);
}
