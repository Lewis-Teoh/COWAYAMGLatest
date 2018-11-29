'use strict';

// Declare app level module which depends on views, and components
angular.module('webApp', [
  'ngRoute',
  'webApp.home',
  'webApp.product',
  'webApp.inception',
  'webApp.ferry',
  'webApp.harry',
  'webApp.villaem',
  'webApp.petit'
  
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
