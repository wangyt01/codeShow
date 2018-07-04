/**
 * Created by Administrator on 2016/6/16.
 */
$(document).ready(function(){
    $(".main>a").click(function(){
        var ulNode = $(this).next("ul");
        //if(ulNode.css("display")=="none"){
        //    ulNode.css("display","block");
        //}else{
        //    ulNode.css("display","none");
        //}
        //ulNode.show();
        //ulNode.hide();
        //ulNode.toggle(500);//数字,slow,normal,fast
        //ulNode.slideDown();
        //ulNode.slideUp();
        ulNode.slideToggle();
        changeIcon($(this));
    });
    $(".hmain").hover(function() {
        $(this).children("ul").slideDown();
        changeIcon($(this).children("a"));
    },function(){
        $(this).children("ul").slideUp();
        changeIcon($(this).children("a"));
       // $(this).children("ul").slideToggle();
    });
});

function changeIcon(mainNode){
    if(mainNode){
        if(mainNode.css("background-image").indexOf("image/list-add.png")>=0){
            mainNode.css("background-image","url(image/list-2.png)");
        }else{
            mainNode.css("background-image","url(image/list-add.png)");
        }
    }
}
