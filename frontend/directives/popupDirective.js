taunter.directive('popup', [

	function ()
	{
		return {
			restrict: 'E',
			replace: 'true',
			transclude: 'true',
			templateUrl: 'partials/directive/popup.html'
		};
	}
]);
