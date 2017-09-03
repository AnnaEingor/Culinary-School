culinaryApp.controller("pricesCtrl", function($scope, $location){

    $scope.persist = function() {
       $location.path ("/newUser");
    } ;
    

});