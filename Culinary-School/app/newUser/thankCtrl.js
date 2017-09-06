culinaryApp.controller("thankCtrl", function($scope, $uibModalInstance){
    
     $scope.dismiss = function () {
         $uibModalInstance.close("User dismissed");
     };

     
 })