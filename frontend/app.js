var taunter = angular.module('Taunter', [
	'ngRoute',
	'ngSanitize',
	'ngResource',
	'ngStorage',
	'ngAudio',
	'cfp.hotkeys',
	'btford.socket-io'
]);
taunter.config(['$routeProvider', '$locationProvider',
	function ($routeProvider, $locationProvider)
	{
		$routeProvider
			.when('/',
			{
				templateUrl: 'partials/home.html',
				controller: 'homeController',
				controllerAs: 'home'
			})
			.otherwise(
			{
				redirectTo: '/'
			});

		$locationProvider.html5Mode(true);
	}
]);
