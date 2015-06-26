;(function (){

  'use strict';

  angular.module('Images').service('ImageService', ['$http', 'PARSE', function($http, PARSE){

    var endpoint = PARSE.URL + 'classes/uploads/';

    this.deleteImage = function (x) {

      var URLtoDelete = endpoint + x.objectId;

      return $http.delete(URLtoDelete, PARSE.CONFIG);

    }

  }]);

}());
