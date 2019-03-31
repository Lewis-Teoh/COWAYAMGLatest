'use strict';

angular.module('webApp.ombak', ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/ombak', {
			templateUrl: 'ombak/ombak.html',
			controller: 'OmbakCtrl'
		});
	}])

	.controller('ombakCtrl', ['$scope', , function ($scope) {

    }]);