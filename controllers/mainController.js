var taunter = angular.module(
	'Taunter.controllers.mainController', []);

taunter.controller('mainController', ['$scope', '$rootScope', '$timeout',
	'tauntsFactory',
	function ($scope, $rootScope, $timeout, tauntsFactory)
	{
		$rootScope.globalError = [];
	}
]);
