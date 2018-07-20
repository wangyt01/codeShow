/**
 * Created by Window Hello on 2016/6/27.
 */
angular.module("app",[])
.controller('UserCtrl',function($scope){
  $scope.user={
      isShowImg:true,
      showicon:true,
      icon:'美女10.jpg',
      uname:'',
      pwd:'',
      zw:'1',
      sex:'1',
      aihao:[1]
  };
    $scope.isChecked=function(n){
        var isok=false;
        for(var i=0;i<$scope.user.aihao.length;i++){
            if(n==$scope.user.aihao[i]){
                isok=true;
                break;
            }
        }
        return isok;
    }
    $scope.register=function(u){
        console.log(u);
    }
})
