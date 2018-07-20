/**
 * Created by Window Hello on 2016/6/29.
 */
var app=angular.module('app',[]);

app.directive('food',function(){
    return {
        restrict: 'E',
        scope:{},
        controller: function ($scope) {
            $scope.foods = [];
            this.addApple = function () {
                $scope.foods.push('apple');
            }
            this.addOrange = function () {
                $scope.foods.push('orange');

            }
            this.addBanana = function () {
                $scope.foods.push('banana');
            }
        },
        link:function(scope,element,attrs){
            element.bind('mouseenter',function(){
                console.log(scope.foods);
            });
        }
    }
});

app.directive('apple',function(){
    return{
      require:'food',
        link:function(scope,element,attrs,foodCtrl){
            foodCtrl.addApple();
        }
    }
})
app.directive('orange',function(){
    return{
        require:'food',
        link:function(scope,element,attrs,foodCtrl){
            foodCtrl.addOrange();
        }
    }
})
app.directive('banana',function(){
    return{
        require:'food',
        link:function(scope,element,attrs,foodCtrl){
            foodCtrl.addBanana();
        }
    }
})
