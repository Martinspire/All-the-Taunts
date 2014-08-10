var taunter = angular.module(
	'Taunter.controllers.mainController', []);

taunter.controller('mainController', ['$scope', '$rootScope', 'tauntsFactory',
	function ($scope, $rootScope, tauntsFactory)
	{
		$scope.globalError = [];

		$scope.file = {
			src: "taunts/899 - Valkurie_intro.wav",
			description: "899 - *Ride of the Valkyrie*",
			id: 899
		}

		$scope.taunts = tauntsFactory.getTaunts();

		$scope.playlist = [];
		for (var t in $scope.taunts)
		{
			$scope.playlist.push(
			{
				src: 'taunts/' + $scope.taunts[t][1],
				type: 'audio/wav'
			})
		}

		$scope.loadTaunt = function (taunt)
		{
			console.log("set as taunt", taunt);
			$scope.file = {
				src: "taunts/" + taunt[1],
				description: taunt[2],
				id: taunt[0]
			};
		}

		$scope.round = function (number)
		{
			return Math.round(number);
		}

		$scope.formatTime = function (seconds)
		{
			if (isNaN(seconds))
			{
				return "";
			}
			seconds = Math.round(seconds);
			var hours = parseInt(seconds / 3600) % 24;
			var minutes = parseInt(seconds / 60) % 60;
			var seconds = seconds % 60;
			return (hours > 0 ? (hours < 10 ? "0" + hours : hours) + ":" : "") + (
				minutes < 10 ? "0" +
				minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
		}
	}
]);
