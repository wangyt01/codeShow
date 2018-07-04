/**
 * Created by Administrator on 2016/6/13.
 */
$(document).ready(function() {
    //$("#btn").click(function(){
    //    alert("text:"+$("#text").text());
    //    $("#btn").click(function(){
    //        alert("text:"+$("#text").html())
    $("#btn").click(function () {
        alert("text:" + $("#it").val());
    });
    $("#btn1").click(function () {
        alert("text:" + $("#aid").attr("id"));
    });
});

