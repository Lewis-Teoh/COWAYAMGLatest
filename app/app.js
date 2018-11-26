'use strict';

// Declare app level module which depends on views, and components
angular.module('webApp', [
  'ngRoute',
  'webApp.home',
  'webApp.product',
  'webApp.inception'
  
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
