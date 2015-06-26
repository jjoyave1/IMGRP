;(function (){

  'use strict';

  angular.module('Images')

  .controller('User', ['$scope', '$http', 'PARSE', '$location', 'UserService', function($scope, $http, PARSE, $location, UserService) {

    // imagecard constructor
    var User = function(options) {
      this.username = options.username;
      this.password = options.password;
      this.email = options.email;
    };

    //upload image method
    $scope.userSignUp = function(x) {
      var user = new User(x);

      $http.post(PARSE.URL + 'users/', user, PARSE.CONFIG)
      .success( function() {

        $location.path('/');
        $scope.user = {};

      })
    };

    $scope.login = function(x) {
      console.log(x);
      UserService.userLogin(x);
    };

    $scope.logout = function() {

      Cookies.expire('access_token');
      Cookies.expire('username');
      Cookies.expire('id');

      $scope.user = {}

    };

    $scope.username = Cookies.get('username');


  }]);

}());
