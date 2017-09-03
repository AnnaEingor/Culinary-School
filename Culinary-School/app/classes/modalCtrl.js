 culinaryApp.controller("modalCtrl", function($scope, $uibModalInstance){
    
     $scope.dismiss = function () {
         $uibModalInstance.close("User dismissed");
     }
 })