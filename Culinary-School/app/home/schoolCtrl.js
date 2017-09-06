culinaryApp.controller("schoolCtrl", function($scope, $location){
$scope.toSchedule = function(){
    $location.path("/schedule");
}
});