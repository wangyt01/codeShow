/**
 * Created by Window Hello on 2016/6/26.
 */
angular.module('app',[])
    .controller('FirstCtrl',function($scope){
       $scope.msg="hello angular";
    })
.controller('NextCtrl',function($scope){
    $scope.msg="hello lol";
})
