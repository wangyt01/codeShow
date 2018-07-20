/**
 * Created by Administrator on 2016/6/13.
 */
$(document).ready(function(){
    $("body").bind("click",bodyHandler);
    $("div").bind("click",divHandler1);
    $("div").bind("click.",divHandler2);
});

function bodyHandler(event){
    conlog(event);
}

function divHandler1(event){
    conlog(event);
    //event.stopPropagation();
    event.stopImmediatePropagation();
}
function divHandler2(event){
    conlog(event);
}
function conlog(event){
    console.log(event);
}
