culinaryApp.controller("newUserCtrl", function($scope, User, Users){
    $scope.usrFirstName = " ";
    $scope.usrLastName = " "; 
    $scope.usrPhone = " "; 
    $scope.usrCity = " "; 
    $scope.usrEmail = " "; 
    
    $scope.newUser = new User({});
    
        $scope.saveUser = function(){
            var userArr = Users.getAllUsers();
              for(i=0; i<userArr.length; i++) {
                if (userArr[i].email === $scope.email) {
                    alert("email already registrated");
                }
                        if($scope.newUser.firstName === undefined) {
                            $scope.newUser.firstName = $scope.fName;
                        }
                        if($scope.newUser.lastName === undefined) {
                            $scope.newUser.lastName = $scope.lName;
                        }
                        if($scope.newUser.phone === undefined) {
                            $scope.newUser.phone = $scope.usrPhone;
                        }
                        if($scope.newUser.birthday === undefined) {
                            $scope.newUser.birthday = $scope.bday;
                        }
                        if($scope.newUser.email === undefined) {
                            $scope.newUser.email = $scope.email;
                        }
                        if($scope.newUser.password === undefined) {
                            $scope.newUser.password = $scope.password;
                        }
                    };
                        
                        Users.updateUser(i,$scope.newUser);
                    };
                        
    
});