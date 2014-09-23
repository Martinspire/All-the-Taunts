var taunter = angular.module('Taunter', [
	'ngRoute',
	'ngSanitize',
	'ngResource',
	'ngStorage',
	'ngAudio',
	'cfp.hotkeys',
	'btford.socket-io'
]);
angular.module('Taunter')
	.config(['$routeProvider', '$locationProvider',
		function ($routeProvider, $locationProvider)
		{
			$routeProvider
				.when('/',
				{
					templateUrl: 'partials/home.html',
					controller: 'homeController'
				})
				.otherwise(
				{
					redirectTo: '/'
				});

			$locationProvider.html5Mode(true);
		}
	]);
