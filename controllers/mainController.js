var taunter = angular.module(
	'Taunter.controllers.mainController', []);

taunter.controller('mainController', ['$scope', '$rootScope',
	function ($scope, $rootScope)
	{
		$scope.globalError = [];
	}
]);
