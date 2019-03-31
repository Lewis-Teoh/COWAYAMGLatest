'use strict';

angular.module('webApp.villaem2', ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/villaem2', {
			templateUrl: 'villaem2/villaem2.html',
			controller: 'Villaem2Ctrl'
		});
	}])

	.controller('Villaem2', ['$scope', , function ($scope) {

    }]);