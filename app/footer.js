'use strict';

angular.module('webApp.footer', ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/footer', {
			templateUrl: 'footer.html',
			controller: 'FooterCtrl'
		});
	}])

	.controller('Footer', ['$scope', , function ($scope) {

    }]);