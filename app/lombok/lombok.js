'use strict';

angular.module('webApp.lombok', ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/lombok', {
			templateUrl: 'lombok/lombok.html',
			controller: 'LombokCtrl'
		});
	}])

	.controller('LombokCtrl', ['$scope', , function ($scope) {

    }]);