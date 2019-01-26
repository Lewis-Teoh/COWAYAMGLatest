'use strict';

angular.module('webApp.fontana', ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/fontana', {
			templateUrl: 'fontana/fontana.html',
			controller: 'FontanaCtrl'
		});
	}])

	.controller('FontanaCtrl', ['$scope', , function ($scope) {

    }]);