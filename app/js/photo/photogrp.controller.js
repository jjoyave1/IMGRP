;(function (){

  'use strict';

  angular.module('Images')

  .controller('ImageGrp',  ['$scope', '$http', 'PARSE', function($scope, $http, PARSE) {

    $scope.title = "Uploads";

    $scope.imageGrp = [];

    $http.get(PARSE.URL + 'classes/uploads/', PARSE.CONFIG)

    .success( function (data) {
      $scope.imageGrp = data.results;
    });

  }]);

}());
