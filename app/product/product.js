'use strict';

angular.module('webApp.product', ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/product', {
			templateUrl: 'product/product.html',
			controller: 'ProductCtrl'
		});
	}])

	.controller('ProductCtrl', ['$scope', , function ($scope) {

    }]);