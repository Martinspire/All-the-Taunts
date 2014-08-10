var taunter = angular.module(
	'Taunter.controllers.mediaController', []);

taunter.controller('mediaController', ['$scope',
	function ($scope)
	{
		$scope.media = {
			current: 0,
			length: 8,
			filename: "899 - Valkurie_intro.wav"
		}
	}
]);
