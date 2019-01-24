'use strict';

// Declare app level module which depends on views, and components
angular.module('webApp', [
  'ngRoute',
  'webApp.home',
  'webApp.inception',
  'webApp.ferry',
  'webApp.harry',
  'webApp.villaem',
  'webApp.petit',
  'webApp.neo',
  'webApp.lucy',
  'webApp.core',
  'webApp.ombak',
  'webApp.storm',
  'webApp.lombok',
  'webApp.tuba',
  'webApp.contact',
  'webApp.promo',
  'webApp.lily'
  
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
