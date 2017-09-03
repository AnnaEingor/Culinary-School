culinaryApp.controller("classesCtrl", function($scope, $uibModal, $routeParams){

     $scope.openModalBase = function () {
         $uibModal.open({
          templateUrl: "app/classes/modalBase.html",
           controller: "modalCtrl"
           
        });
      };

    
});

