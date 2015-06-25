;(function (){

  'use strict';

  angular.module('Images')

  .controller('User', ['$scope', '$http', 'PARSE', '$location', function($scope, $http, PARSE, $location) {

    // imagecard constructor
    var User = function(options) {
      this.username = options.username;
      this.password = options.password;
      this.email = options.email;
    };

    //upload image method
    $scope.userSignUp = function(x) {
      var user = new User(x);

      $http.post(PARSE.URL + 'classes/users/', user, PARSE.CONFIG)
      .success( function() {

        $location.path('/');
        $scope.user = {};

      })
    };


  }]);

}());
