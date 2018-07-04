/**
 * Created by Administrator on 2016/6/15.
 */
var jq=$.noConflict();
jq(document).ready(function(){
   jq("button").click(function(){
       jq("p").text("jQuery 仍在运行!");
   }) ;
});
