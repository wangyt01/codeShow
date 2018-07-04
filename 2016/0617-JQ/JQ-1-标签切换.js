/**
 * Created by 你爸爸 on 2016/6/17.
 */
$(document).ready(function(){
   $("#tabfirst li").each(function(index){
       var liNode = $(this);
        $(this).mouseover(function(){
            timeoutid=setTimeout(function(){
                $("div.content").removeClass("content");
                $("#tabfirst li.table").removeClass("table");
                $("div").eq(index).addClass("content");
                liNode.addClass("table");
            },300);
        }).mouseout(function(){
                clearTimeout(timeoutid);
        });
   });

    $("#realcontent").load("这是一个新的页面1.html");
    $("#tabsecond li").each(function(index){
        $(this).click(function(){
             $("#tabsecond li.table").removeClass("table");
            $(this).addClass("table");

            if(index==0){
                $("#realcontent").load("这是一个新的页面1.html");
            }else if(index == 1){
                $("#realcontent").load("这是一个新的页面2.html")
            }else if(index == 2){
                $("#realcontent").load("这是一个新的页面3.html")
            }
        })
    })
});
