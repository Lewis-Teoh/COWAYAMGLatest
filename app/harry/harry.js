'use strict';

angular.module('webApp.harry', ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/harry', {
			templateUrl: 'harry/harry.html',
			controller: 'HarryCtrl'
		});
	}])

	.controller('HarryCtrl', ['$scope', , function ($scope) {

    }]);