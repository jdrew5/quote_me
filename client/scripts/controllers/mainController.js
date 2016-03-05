myApp.controller('MainController', ['$scope','$http', function($scope, $http){

  $scope.quotes = [];
  console.log("hi from main controller");
  $scope.getQuotes = function() {
    $http.get('/data/all').then(function(response){
      $scope.quotes = response.data;
      console.log("quotes ", $scope.quotes);
      });
  };

  $scope.getQuotes();

}]);
