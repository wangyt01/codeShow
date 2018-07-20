/**
 * Created by Window Hello on 2016/6/27.
 */
angular.module("app",[])
    .factory('Data',function(){
        return{
            msg:'我来自factory',
            shopcar:['1','2','3']

        }
    })

.controller("FCtrl",function($scope,Data){//下单ctrl
    $scope.data=Data;
})
    .controller("SCtrl",function($scope,Data){//购物车
        $scope.data=Data;
    })
