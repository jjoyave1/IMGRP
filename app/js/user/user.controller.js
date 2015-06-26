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

    $scope.userLogin = function(data) {
      var user = {}
      user.username = data.username;
      user.password = data.password;
      user.objectId = data.objectId;
      user.email = data.email;

      $http.get(PARSE.URL + 'classes/users/', PARSE.CONFIG)
      .success( function(x) {

        for (var i = 0; i < x.results.length; i++) {
          if(x.results[i].username == user.username) {

            Cookies.set('access_token');
            Cookies.set('username', user.username);
            Cookies.set('id', x.results[i].objectId);

          }
        }

      });
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
