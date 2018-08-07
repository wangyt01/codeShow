/**
 * Created by Administrator on 2016/6/15.
 */
$(document).ready(function(){
    $("body").text("wait...");
    //alert("hello");
   $("body").load("box.htm",function(a,status,c){
      console.log(status);
           if(status=="error"){
               $("body").text("片段加载失败");
           }
   });

    $.getScript("HelloJS.js").complete(function(){
        sayHello();
    });
});
