var myApp = angular.module("myApp", ['ngRoute', 'ngMaterial', 'ui.grid']);

myApp.config(['$routeProvider', '$mdThemingProvider', function($routeProvider, $mdThemingProvider){
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
        })
    $mdThemingProvider.theme('default')
        .primaryPalette('indigo')
        .accentPalette('pink')
        .warnPalette('red')
        .backgroundPalette('grey');
}]);
