/**
 * Created by Window Hello on 2016/6/22.
 */

$(document).ready(function(){
    var autotags =["iwen","ime","html","javascript","java","android","ios"];
    $("#tags").autocomplete({
        source:autotags
    });
});
