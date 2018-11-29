'use strict';

angular.module('webApp.petit', ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/petit', {
			templateUrl: 'petit/petit.html',
			controller: 'PetitCtrl'
		});
	}])

	.controller('PetitCtrl', ['$scope', , function ($scope) {

    }]);