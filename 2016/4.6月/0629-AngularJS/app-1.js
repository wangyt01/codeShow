/**
 * Created by Window Hello on 2016/6/29.
 */
var app=angular.module('app',[]);

app.directive('hello',function(){
    return{
        replace:true,//替换掉我们自己定义的标签
        template:'<div>Hello AngularJS</div>'
    }
})

