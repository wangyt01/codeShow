/**
 * Created by Administrator on 2016/6/16.
 */
$(document).ready(function(){
    alert("高度:"+$("#div").height());
    alert("宽度:"+$("#div").width());
    alert($("#div").innerHeight());//210+50+50
    alert("不传递参数:"+$("#div").outerHeight());//210+50+50+2+2
    alert("传递参数:"+$("#div").outerHeight(true));//100+210+50+50+2+2
});
