'use strict';

angular.module('webApp.lucy', ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/lucy', {
			templateUrl: 'lucy/lucy.html',
			controller: 'LucyCtrl'
		});
	}])

	.controller('LucyCtrl', ['$scope', , function ($scope) {

    }]);