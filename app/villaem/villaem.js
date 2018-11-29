'use strict';

angular.module('webApp.villaem', ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/villaem', {
			templateUrl: 'villaem/villaem.html',
			controller: 'VillaemCtrl'
		});
	}])

	.controller('Villaem', ['$scope', , function ($scope) {

    }]);