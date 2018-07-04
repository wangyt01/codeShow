/**
 * Created by Window Hello on 2016/6/29.
 */
var app=angular.module('app',[]);

app.directive('hello',function(){
    return{
        restrict:'A',//A属性 E template C 类名
        link:function(){
            alert("我是属性")
        }
    }
})

app.directive('jike',function(){
    return{
        restrict:'C',
        link:function(){
            alert('我是jike')
        }
    }
})
