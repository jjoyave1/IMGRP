;(function (){

  'use strict';

  angular.module('Images')

  .controller('ImageGrp',  ['$scope', '$http', 'PARSE', 'ImageService', function($scope, $http, PARSE, ImageService) {

    $scope.title = "Uploads";

    $scope.imageGrp = [];

    $http.get(PARSE.URL + 'classes/uploads/', PARSE.CONFIG)

    .success( function (data) {
      $scope.imageGrp = data.results;
    });

    $scope.removePic = function(x) {

      ImageService.deleteImage(x).success( function(){

        $('[data-id="'+ x.objectId + '"]').fadeOut( function () {
          $scope.imageGroup = _.without($scope.imageGrp, x);
        });
      });
    };

  }]);

}());
