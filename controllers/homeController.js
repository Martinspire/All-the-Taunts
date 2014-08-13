var taunter = angular.module(
	'Taunter.controllers.homeController', []);

taunter.controller('homeController', ['$scope', '$rootScope', '$timeout',
	'tauntsFactory',
	function ($scope, $rootScope, $timeout, tauntsFactory)
	{
		$scope.playThis = function (taunt, start)
		{
			var autostart = true;
			if (start === false)
			{
				autostart = false
			};
			$scope.file = {
				src: "taunts/" + taunt[1],
				description: taunt[2],
				id: taunt[0]
			};
			$scope.player.load([
			{
				src: 'taunts/' + taunt[1],
				type: 'audio/wav'
			}], autostart);
			$scope.toggleTitle = false;
		}
		$scope.playRandom = function ()
		{
			var rand = $scope.taunts[Math.floor(Math.random() * $scope.taunts.length)];
			$scope.playThis(rand);
		}
		$scope.play = function ()
		{
			$scope.player.play();
		}
		$scope.pause = function ()
		{
			$scope.player.pause();
		}
		$scope.stop = function ()
		{
			$scope.player.pause();
			$scope.player.seek(0);
		}
		$scope.setCurrentTime = function (time)
		{
			$scope.player.seek(time);
		}

		$scope.toggleTitle = false;
		$scope.toggleExpandTitle = function ()
		{
			$scope.toggleTitle = !$scope.toggleTitle;
		}

		$scope.searchNumber = undefined;
		$scope.searchText = undefined;
		$scope.menuSelection;
		$scope.toggleMenu = function (item)
		{
			$scope.searchNumber = undefined;
			$scope.searchText = undefined;
			if ($scope.menuSelection !== item)
			{
				$scope.menuSelection = item;
			}
			else
			{
				$scope.menuSelection = undefined;
			}
		}

		$scope.file = {
			src: "taunts/899 - Valkurie_intro.wav",
			description: "*Ride of the Valkyrie*",
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

		$scope.round = function (number)
		{
			return Math.round(number);
		}

		$scope.formatTime = function (seconds)
		{
			if (isNaN(seconds))
			{
				return "00:00";
			}
			seconds = Math.round(seconds);
			var hours = parseInt(seconds / 3600) % 24;
			var minutes = parseInt(seconds / 60) % 60;
			var seconds = seconds % 60;
			return (hours > 0 ? (hours < 10 ? "0" + hours : hours) + ":" : "") + (
				minutes < 10 ? "0" +
				minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
		}

		$timeout(function ()
		{
			console.log($scope.player);
			$scope.playThis($scope.taunts[0], false);
		});
	}
]);
