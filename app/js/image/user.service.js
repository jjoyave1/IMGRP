;(function (){

  'use strict';

  angular.module('Images').service('UserService', ['$http', 'PARSE', function($http, PARSE){

    var endpoint = PARSE.URL;

    this.userLogin = function(data) {
      var params = 'username=' + data.username + '&password=' + data.password;

      $http.get(PARSE.URL + 'login?' + params, PARSE.CONFIG)
      .success( function(x) {

        console.log(x);

            Cookies.set('username', x.username);
            Cookies.set('id', x.objectId);


      });
    };

    this.userLogout = function() {

      Cookies.expire('access_token');
      Cookies.expire('username');
      Cookies.expire('id');

      $scope.user = {};

    };

  }]);

}());
