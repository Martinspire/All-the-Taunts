var taunter = angular.module('Taunter', [
	'ngRoute',
	'ngSanitize',
	'ngStorage',
	'mediaPlayer',
	'cfp.hotkeys',
	'Taunter.constants',
	'Taunter.controllers',
	'Taunter.directives',
	'Taunter.filters',
	'Taunter.services'
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