;(function (){

  'use strict';

  angular.module('Images')

  .controller('UserGrp',  ['$scope', '$http', 'PARSE', function($scope, $http, PARSE) {

    $scope.userGrp = [];

    $http.get(PARSE.URL + 'classes/users/', PARSE.CONFIG)

    .success( function (data) {
      $scope.userGrp = data.results;
    });

  }]);

}());
