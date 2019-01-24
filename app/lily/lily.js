'use strict';

angular.module('webApp.lily', ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/lily', {
			templateUrl: 'lily/lily.html',
			controller: 'LilyCtrl'
		});
	}])

	.controller('LilyCtrl', ['$scope', , function ($scope) {

    }]);