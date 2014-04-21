'use strict';

var animateApp = angular.module('animateApp', ['ngRoute','ngAnimate']);

animateApp.config(function ($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'page-home/index.html',
      controller: 'mainController'
    })
    .when('/live', {
      templateUrl: 'page-live/index.html',
      controller: 'liveController'
    })
    .when('/studio', {
      templateUrl: 'page-studio/index.html',
      controller: 'studioController'
    });

});

animateApp.controller('mainController', function ($scope) {
  $scope.pageClass = 'page-main';
});

animateApp.controller('liveController', function ($scope) {
  $scope.pageClass = 'page-live';
});

animateApp.controller('studioController', function ($scope) {
  $scope.pageClass = 'page-studio';
});
