/**
 * Created by Administrator on 2016/6/13.
 */
$(document).ready(function(){
    //$("button").click(function(){//鼠标单击消失按钮
    //$("button").dblclick(function(){//鼠标双击消失按钮
    //$("button").mouseenter(function(){//鼠标移动消失按钮
    $("button").mouseleave(function(){//鼠标离开按钮消失
    $(this).hide();
    })
})
