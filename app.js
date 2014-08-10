var taunter = angular.module('Taunter', [
	'ngRoute',
	'ngSanitize',
	'ngStorage',
	'mediaPlayer',
	'Taunter.constants',
	'Taunter.controllers',
	'Taunter.directives',
	'Taunter.filters',
	'Taunter.services'
]);
angular.module('Taunter')
	.config(['$routeProvider',
		function ($routeProvider)
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
		}
	]);
