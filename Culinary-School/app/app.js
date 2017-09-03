var culinaryApp = angular.module("culinaryApp", ["ngRoute", "ngAnimate", "ui.bootstrap"]); 

culinaryApp.config(function($routeProvider){
    $routeProvider
 .when("/", {
   templateUrl: "app/home/school.html",
   })

   .when("/classes", {
           templateUrl: "app/classes/classes.html",
            controller: "classesCtrl"
       })
    .when("/gallery", {
        templateUrl: "app/gallery/gallery.html"
      })
    .when("/prices", {
        templateUrl: "app/prices/prices.html",
        controller: "pricesCtrl"
    })
    .when("/contacts", {
        templateUrl: "app/contacts/contacts.html"
    })
    .when("/newUser", {
        templateUrl: "app/newUser/newUser.html",
        controller: "newUserCtrl"
    })
    .when("/schedule", {
        templateUrl: "app/schedule/schedule.html"
    })

       .otherwise({
        templateUrl: "app/home/school.html"
    });
});