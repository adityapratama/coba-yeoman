'use strict';

/**
 * @ngdoc overview
 * @name cobaYeomanApp
 * @description
 * # cobaYeomanApp
 *
 * Main module of the application.
 */
angular
  .module('aplikasi', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/user', {
        templateUrl: 'views/system/user.html',
        controller: 'UserCtrl'
      })
      .when('/menu', {
        templateUrl: 'views/system/menu.html',
        controller: 'MenuCtrl'
      })
      .when('/role', {
        templateUrl: 'views/system/role.html',
        controller: 'RoleCtrl'
      })
      .when('/permission', {
        templateUrl: 'views/system/permission.html',
        controller: 'PermissionCtrl'
      })
      .when('/barang', {
        templateUrl: 'views/master/barang.html',
        controller: 'ProductCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
