'use strict';

angular.module('webApp.core', ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/core', {
			templateUrl: 'core/core.html',
			controller: 'CoreCtrl'
		});
	}])

	.controller('CoreCtrl', ['$scope', , function ($scope) {

    }]);