culinaryApp.factory("User", function() {
    function User(plainObject) {
        this.firstName = plainObject.firstName;
        this.lastName = plainObject.lastName;
        this.birthday = plainObject.birthday;
        this.email = plainObject.email;
        this.phone = plainObject.phone;
        this.password = plainObject.password;
    };
    return User;
});

culinaryApp.factory("activeUser", function(User) {
    
        var user = null;
    
        var isLoggedIn = function() {
            return user ? true : false;
        };
    
        var login = function(loggedInUser) {
            user = loggedInUser;
        };
    
        var logout = function() {
            user = null;
        };
    
        var get = function() {
            return user;
        };
    
        return {
            isLoggedIn: isLoggedIn,
            login: login,
            logout: logout,
            get: get
        };   
    });


culinaryApp.factory("Users", function($http, User) {
    var usersArr = [];
    var isLoaded = false;
    
    var addUser = function(user) {
        usersArr.push(user);
    };

    var updateUser = function(index, user) {
        usersArr[index] = user;
    }

    var removeUser = function(index) {
        usersArr.splice(index, 1);
    }
    var getAllUsers = function() {
        if (usersArr.length === 0) {
            $http.get("data/user.json").then(function(response) {
                for (var i = 0; i < response.data.length; i++) {
                    usersArr.push(new User(response.data[i]));
                }
            })
        }

        return usersArr;
    }

    var get = function(email) {
        return usersArr[usersArr.indexOf(email)];
    }


    return {
        addUser: addUser,
        updateUser: updateUser,
        removeUser: removeUser,
        getAllUsers: getAllUsers,
        get: get
    }
});



