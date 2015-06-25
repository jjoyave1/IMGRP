;(function (){

  'use strict';

  angular.module('Images', ['ngRoute'])

  .constant('PARSE', {
    URL: 'https://www.parse.com/1/',

    CONFIG: {

      headers: {

        'X-Parse-Application-Id': 'PXyzOH5lu5kR1OTEVJ08XehjaX2vbmgibVZoY5IJ',
        'X-Parse-REST-API-Key': 'X0fMOkHjCEU2wqgJN43712DpfPAIo5BWjUpy9TY3'

      }

    }

  })

  .config( [ '$routeProvider',
    function ($routeProvider) {

      $routeProvider.when('/', {

        controller: 'ImageGrp',
        templateUrl: 'js/view/home.tpl.html'

      })

      .when('/upload', {

        controller: 'Image',
        templateUrl: 'js/view/upload.tpl.html'

      })

      .when('/about', {

        controller: 'Image',
        templateUrl: 'js/view/about.tpl.html'

      })

      .when('/signup', {

        controller: 'User',
        templateUrl: 'js/view/regis.tpl.html'

      });


    }
  ]);

}());
