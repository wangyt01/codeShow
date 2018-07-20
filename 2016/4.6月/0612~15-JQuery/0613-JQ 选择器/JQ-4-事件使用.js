/**
 * Created by Administrator on 2016/6/13.
 */

var bth;

$(document).ready(function(){
    bth = $("#bth");
    bth.click(function(){
        var e = jQuery.Event("MyEvent");
        bth.trigger(e);
    });

    bth.bind("MyEvent",function(event){
        console.log(event)
    })
})
