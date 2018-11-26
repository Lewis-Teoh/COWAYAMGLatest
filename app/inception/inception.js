'use strict';

angular.module('webApp.inception', ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/inception', {
			templateUrl: 'inception/inception.html',
			controller: 'InceptionCtrl'
		});
	}])

	.controller('InceptionCtrl', ['$scope', , function ($scope) {

    }]);