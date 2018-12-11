'use strict';

angular.module('webApp.promo', ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/promo', {
			templateUrl: 'promo/promo.html',
			controller: 'PromoCtrl'
		});
	}])

	.controller('PromoCtrl', ['$scope', , function ($scope) {

    }]);