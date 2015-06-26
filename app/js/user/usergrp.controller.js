;(function (){

  'use strict';

  angular.module('Images')

  .controller('UserGrp',  ['$scope', '$http', 'PARSE', function($scope, $http, PARSE) {

    $scope.userGrp = [];

    $http.get(PARSE.URL + 'users/', PARSE.CONFIG)

    .success( function (data) {
      console.log(data)
      // $scope.userGrp = data.results;
    });

  }]);

}());
