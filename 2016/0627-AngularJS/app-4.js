/**
 * Created by Window Hello on 2016/6/27.
 */
angular.module('app',[])
.controller('AddressCtrl',function($scope){
    $scope.list=[
        {id:1,address:'岱岳小区1栋1层'},
        {id:2,address:'岱岳小区11栋11层'},
        {id:3,address:'岱岳小区111栋111层'},
        {id:4,address:'岱岳小区1111栋1111层'}
    ];
})