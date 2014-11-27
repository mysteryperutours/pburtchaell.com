'use strict';

angular

  .module('downbeat', [
    'ngRoute',
    'ngAnimate'
  ])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'main/index.html',
        controller: 'mainController',
        controllerAs: 'main'
      })
      .when('/live', {
        templateUrl: 'live/index.html',
        controller: 'liveController',
        controllerAs: 'live'
      })
      .when('/studio', {
        templateUrl: 'studio/index.html',
        controller: 'studioController',
        controllerAs: 'studio'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

  .controller('mainController', function ($scope) {
    $scope.pageClass = 'page-main';
  })

  .controller('liveController', function ($scope) {
    $scope.pageClass = 'page-live';
  })

  .controller('studioController', function ($scope) {
    $scope.pageClass = 'page-studio';
  });
