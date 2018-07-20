/**
 * Created by Window Hello on 2016/6/28.
 */
angular.module('app',[])
    .config(function($httpProvider) {

})
.controller('MyCtrl',function($scope,$http){
   $http.get('http://localhost:80/user/getUsers')
       .success(function(resp){
           console.log(resp);
       })
})
