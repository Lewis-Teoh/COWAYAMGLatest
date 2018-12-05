'use strict';

angular.module('webApp.storm', ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/storm', {
			templateUrl: 'storm/storm.html',
			controller: 'StormCtrl'
		});
	}])

	.controller('StormCtrl', ['$scope', , function ($scope) {

    }]);