/**
 * Created by Window Hello on 2016/6/23.
 */
var valueSpan,slider;

$(document).ready(function(){
   //$("#slider").slider();
    slider=$("#slider");
    valueSpan = $("#span");

    //slider.slider({
    //    change:function(enent,ui){
    //        valueSpan.text(slider.slider("option","value"));
    //    }
    //})
    slider.slider({
        slide:function(event,ui){
            valueSpan.text(slider.slider("option","value"));
        }
    });
});

