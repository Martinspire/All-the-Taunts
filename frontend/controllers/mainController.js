var taunter = angular.module('Taunter');
angular.module('Taunter')
	.controller('mainController', ['$scope', '$rootScope', '$timeout', 'tauntsFactory',
		function ($scope, $rootScope, $timeout, tauntsFactory)
		{
			$rootScope.globalError = [];
		}
	]);
