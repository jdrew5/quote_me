myApp.controller('MainController', ['$scope','$http', function($scope, $http){

  $scope.quotes = [];
  $scope.myInterval = 3000;
  $scope.slides = [
    {
      image: 'http://lorempixel.com/400/200/'
    },
    {
      image: 'http://lorempixel.com/400/200/food'
    },
    {
      image: 'http://lorempixel.com/400/200/sports'
    },
    {
      image: 'http://lorempixel.com/400/200/people'
    }
  ];

  console.log("hi from main controller");
  $scope.getQuotes = function() {
    $http.get('/data/all').then(function(response){
      $scope.quotes = response.data;
      console.log("quotes ", $scope.quotes);
      });
  };

  $scope.getQuotes();

}]);
