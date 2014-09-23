var taunter = angular.module('Taunter');
angular.module('Taunter')
	.directive('popup', function ()
	{
		return {
			restrict: 'E',
			replace: 'true',
			transclude: 'true',
			templateUrl: 'partials/directive/popup.html'
		};
	});
