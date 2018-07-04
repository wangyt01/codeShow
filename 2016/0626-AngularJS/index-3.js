/**
 * Created by Window Hello on 2016/6/27.
 */
angular.module("app",[])
.controller("MyCtrl",function($scope){
    $scope.msg="";
    $scope.user={uname:'',pwd:''};
    $scope.errormsg="";
    $scope.reverse=function(){
        return $scope.msg.split("").revese().join("");
    };
    $scope.login=function(){
        //console.log($scope.user);
        if($scope.user.uname=="admin" && $scope.user.pwd=="123"){
          alert("登陆成功");
        }else{
            $scope.errormsg="用户名或密码错误";
        }
    }
});
