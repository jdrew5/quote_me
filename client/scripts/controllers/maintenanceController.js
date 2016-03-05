myApp.controller('MaintenanceController', ['$scope','$http', function($scope, $http){

  $scope.quotes = [];
  $scope.quote = {};
  $scope.gridOptions = {};

  $scope.getQuotes = function() {
    $http.get('/data/all').then(function(response){
      $scope.quotes = response.data;
      console.log("quotes ", $scope.quotes);
      $scope.gridOptions = {
                columnDefs : [
                    {name: 'Action',
                        cellEditableCondition: false,
                        cellTemplate: '<button ng-click="grid.appScope.editQuote(row.entity)" ' +
                        'id="editQuote" class="btn btn-xs btn-primary">Edit</button>' +
                        '<button ng-click="grid.appScope.deleteQuote(row.entity)" ' +
                        'id="deleteQuote" class="btn btn-xs btn-danger">Delete</button>' },
                    { name: 'quote', displayName: 'Quote'},
                    { name: 'name', displayName: 'Name' },
                    { name: 'date', displayName: 'Date' },
                    { name: 'location', displayName: 'Location'}],
                data: $scope.quotes
            };
      });
  };

  $scope.getQuotes();

  $scope.addQuote = function() {
    // var quoteObject = {
    //   quote: "this is new",
    //   name: "john",
    //   date: "02-26-2016",
    //   location: "minneapolis"
    // };

    $http.post('/data', $scope.quote).then(function(response){
      console.log("result from post ", response);
      $scope.getQuotes();
      $scope.quote = {};
    });
  };

  $scope.deleteQuote = function(arg) {
    console.log("deleting ", arg);
    $http.delete('/data/delete'+ arg._id).then(function(response){
      console.log("deleted response ", response);
      $scope.getQuotes();
    });
  };

}]);
