'use strict';

angular.module('webApp.bidet', ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/bidet', {
			templateUrl: 'bidet/bidet.html',
			controller: 'BidetCtrl'
		});
	}])

	.controller('BidetCtrl', ['$scope', , function ($scope) {

    }]);