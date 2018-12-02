'use strict';

angular.module('webApp.tuba', ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/tuba', {
			templateUrl: 'tuba/tuba.html',
			controller: 'TubeCtrl'
		});
	}])

	.controller('TubaCtrl', ['$scope', , function ($scope) {

    }]);