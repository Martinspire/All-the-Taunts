var taunter = angular.module(
	'Taunter.controllers.homeController', []);

taunter.controller('homeController', ['$scope', '$rootScope', '$timeout', '$filter', 'hotkeys', 'tauntsFactory', 'ngAudio',
	function ($scope, $rootScope, $timeout, $filter, hotkeys, tauntsFactory, ngAudio)
	{
		$scope.taunts = tauntsFactory.getTaunts();

		$scope.player = ngAudio.load('taunts/' + $scope.taunts[0][1]);
		$scope.file = {
			src: $scope.taunts[0][1],
			description: $scope.taunts[0][2],
			id: $scope.taunts[0][0]
		};

		$scope.playThis = function (taunt, start)
		{
			$scope.file = {
				src: "taunts/" + taunt[1],
				description: taunt[2],
				id: taunt[0]
			};
			$scope.player.load('taunts/' + taunt[1]);
			if (start === true || start === undefined)
			{
				$scope.player.play();
			}
			$scope.toggleTitle = false;
		};
		$scope.playRandom = function ()
		{
			var rand = $scope.taunts[Math.floor(Math.random() * $scope.taunts.length)];
			$scope.playThis(rand);
		};
		$scope.play = function ()
		{
			$scope.player.play();
		};
		$scope.pause = function ()
		{
			$scope.player.pause();
		};
		$scope.stop = function ()
		{
			$scope.player.stop();
		};
		$scope.setCurrentTime = function (time)
		{
			$scope.player.setCurrentTime(time);
		};

		$scope.toggleTitle = false;
		$scope.toggleExpandTitle = function ()
		{
			$scope.toggleTitle = !$scope.toggleTitle;
		};

		$scope.searchNumber = undefined;
		$scope.searchText = undefined;
		$scope.searchNumberFocus = false;
		$scope.searchTextFocus = false;

		$scope.playFirst = function (keyword)
		{
			if (keyword === undefined || keyword === "")
			{
				$scope.searchNumber = undefined;
				$scope.searchText = undefined;
				return false;
			}
			var playTaunt = $filter('filter')($scope.taunts, keyword);
			if (playTaunt.length > 0)
			{
				$scope.playThis(playTaunt[0], true);
			}
			$scope.menuSelection = undefined;
		};

		$scope.menuSelection = undefined;
		$scope.toggleMenu = function (item)
		{
			$scope.searchNumber = undefined;
			$scope.searchText = undefined;
			$scope.searchNumberFocus = false;
			$scope.searchTextFocus = false;
			if ($scope.menuSelection !== item)
			{
				$scope.menuSelection = item;
				if (item === 'search')
				{
					$scope.searchNumberFocus = true;
				}
				else if (item === 'filter')
				{
					$scope.searchTextFocus = true;
				}
			}
			else
			{
				$scope.menuSelection = undefined;
			}
		};

		$scope.playlist = [];
		for (var t in $scope.taunts)
		{
			$scope.playlist.push(
			{
				src: 'taunts/' + $scope.taunts[t][1],
				type: 'audio/wav'
			});
		}

		$scope.round = function (number)
		{
			return Math.round(number);
		};

		$scope.formatTime = function (totalSeconds)
		{
			if (isNaN(totalSeconds))
			{
				return "00:00";
			}
			totalSeconds = Math.round(totalSeconds);
			var hours = parseInt(totalSeconds / 3600) % 24;
			var minutes = parseInt(totalSeconds / 60) % 60;
			var seconds = totalSeconds % 60;
			return (hours > 0 ? (hours < 10 ? "0" + hours : hours) + ":" : "") + (
				minutes < 10 ? "0" +
				minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
		};

		hotkeys.add(
		{
			combo: 'shift+s',
			description: 'Open search',
			callback: function (event)
			{
				if ($scope.menuSelection === 'search')
				{
					$scope.searchNumber = undefined;
				}
				else
				{
					$scope.toggleMenu('search');
				}
				event.preventDefault();
			},
			allowIn: 'input'
		});
		hotkeys.add(
		{
			combo: 'shift+f',
			description: 'Open filter',
			callback: function (event)
			{
				if ($scope.menuSelection === 'filter')
				{
					$scope.searchText = undefined;
				}
				else
				{
					$scope.toggleMenu('filter');
				}
				event.preventDefault();
			},
			allowIn: 'input'
		});
		hotkeys.add(
		{
			combo: 'shift+m',
			description: 'Mute',
			callback: function (event)
			{
				$scope.player.stop();
				event.preventDefault();
			},
			allowIn: 'input'
		});
		console.log($scope.player);
	}
]);
