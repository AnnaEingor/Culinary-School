var culinaryApp = angular.module("culinaryApp", ["ngRoute", "ngAnimate", "ui.bootstrap"]); 

culinaryApp.config(function($routeProvider){
    $routeProvider
 .when("/", {
   templateUrl: "app/home/school.html",
   })

   .when("/classes", {
           templateUrl: "app/classes/classes.html",
        //    controller: "classesCtrl"
       })
    .when("/gallery", {
        templateUrl: "app/gallery/gallery.html"
      })
    .when("/prices", {
        templateUrl: "app/prices/prices.html"
    })
    .when("/contacts", {
        templateUrl: "app/contacts/contacts.html"
    })

       .otherwise({
        templateUrl: "app/home/school.html"
    });
});