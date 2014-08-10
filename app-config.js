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
