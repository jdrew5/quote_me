var myApp = angular.module("myApp", ['ngRoute', 'ui.grid', 'ui.bootstrap']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/main', {
            templateUrl: "/assets/views/routes/main.html",
            controller: "MainController"
        }).
        when('/maintenance', {
            templateUrl: "/assets/views/routes/maintenance.html",
            controller: "MaintenanceController"
        }).
        otherwise({
            redirectTo: 'main'
        });
}]);
