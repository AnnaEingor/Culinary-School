 culinaryApp.controller("modalCtrl", function($scope, $location, $uibModalInstance){
    $scope.persist = function() {
        $location.path("/newUser");
     };
    
     $scope.dismiss = function () {
         $uibModalInstance.close("User dismissed");
     };

     
 })