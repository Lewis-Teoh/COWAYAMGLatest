'use strict';

angular.module('webApp.neo', ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/neo', {
			templateUrl: 'neo/neo.html',
			controller: 'NeoCtrl'
		});
	}])

	.controller('NeoCtrl', ['$scope', , function ($scope) {
	
    }]);