'use strict';

angular.module('webApp.ferry', ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/ferry', {
			templateUrl: 'ferry/ferry.html',
			controller: 'FerryCtrl'
		});
	}])

	.controller('InceptionCtrl', ['$scope', , function ($scope) {

    }]);