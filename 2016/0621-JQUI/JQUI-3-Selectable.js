/**
 * Created by Window Hello on 2016/6/21.
 */
$(document).ready(function(){
   $("#btn").button();
    $("#select").selectable();
    $("#btn").on("click",function(){
       //alert("hello")
        if($("#right").hasClass("ui-selected")){
             alert("恭喜你答对了！");
        }else{
            alert("答错了");
        }
    });
});
