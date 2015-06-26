;(function (){

  'use strict';

  angular.module('Images')

  .controller("Image", ['$scope', '$http', 'PARSE', '$location', function($scope, $http, PARSE, $location) {

    // imagecard constructor
    var Image = function(options) {
      this.username = options.username;
      this.URL = options.URL;
    };

    //upload image method
    $scope.uploadImage = function(x) {
      var image = new Image(x);

      $http.post(PARSE.URL + 'classes/uploads/', image, PARSE.CONFIG)
      .success( function() {

        $location.path('/');
        $scope.image = {};

      })
    };


  }]);

}());
