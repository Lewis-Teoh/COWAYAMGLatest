'use strict';

angular.module('webApp.product', ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/inception', {
			templateUrl: 'product/inception.html',
			controller: 'ProductCtrl'
		});
	}])

	.controller('ProductCtrl', ['$scope', , function ($scope) {

    }]);