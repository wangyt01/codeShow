/**
 * Created by Window Hello on 2016/6/29.
 */
var app=angular.module('app',[]);

app.controller('AppCtrl',function($scope){
    $scope.loadMoreData=function(){
        alert("正在加载数据...")
    }
})

app.directive('enter',function(){
    return function(scope,element,attrs){
      element.bind('mouseenter',function(){
          //scope.loadMoreData();
          //scope.$apply("loadMoreData()");
          scope.$apply(attrs.enter);
      })
    }
})
