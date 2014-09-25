taunter.controller('homeController', ['$scope', '$filter', 'hotkeys', 'ngAudio', 'tauntsFactory', 'broadcastFactory',
	function ($scope, $filter, hotkeys, ngAudio, tauntsFactory, broadcastFactory)
	{
		/* jshint validthis: true */
		var vm = this; //bind $scope to vm (viewmodel)
		vm.toggleTitle = false;

		vm.searchNumber = undefined;
		vm.searchText = undefined;
		vm.searchNumberFocus = false;
		vm.searchTextFocus = false;

		vm.filterSelection = undefined;
		vm.infoSelection = false;
		vm.settingsSelection = false;

		vm.taunts = tauntsFactory.getTaunts();

		vm.player = ngAudio.load('taunts/' + vm.taunts[0][1]);
		vm.file = {
			src: vm.taunts[0][1],
			description: vm.taunts[0][2],
			id: vm.taunts[0][0]
		};

		vm.message = '';
		vm.messageLog = [];
		vm.nickname = "anonymous";
		vm.hasChat = false;

		vm.playThis = function (taunt, start, network)
		{
			console.log("play", taunt, start, network);
			if (network === undefined)
			{
				network = false;
			}
			if (!isNaN(taunt[0]))
			{
				vm.player.stop();
				vm.file = {
					src: "taunts/" + taunt[1],
					description: taunt[2],
					id: taunt[0]
				};
				var filename = 'taunts/' + taunt[1];
				vm.player = ngAudio.load(filename);
				if (start === true || start === undefined)
				{
					vm.player.play();
				}
				vm.toggleTitle = false;

				if (vm.hasChat)
				{
					if (network === false)
					{
						sendTaunt((taunt[0] - 101)); //not starting at 0 but at 100 (+101)
					}
				}
			}
		};
		vm.playRandom = function ()
		{
			var rand = vm.taunts[Math.floor(Math.random() * vm.taunts.length)];
			vm.playThis(rand);
		};
		vm.play = function ()
		{
			vm.player.play();
		};
		vm.pause = function ()
		{
			vm.player.pause();
		};
		vm.stop = function ()
		{
			vm.player.stop();
		};
		vm.setCurrentTime = function (time)
		{
			vm.player.setCurrentTime(time);
		};

		vm.toggleExpandTitle = function ()
		{
			vm.toggleTitle = !vm.toggleTitle;
		};

		vm.playFirst = function (keyword)
		{
			if (keyword === undefined || keyword === "")
			{
				vm.searchNumber = undefined;
				vm.searchText = undefined;
				return false;
			}
			var playTaunt = $filter('filter')(vm.taunts, keyword);
			if (playTaunt.length > 0)
			{
				vm.playThis(playTaunt[0], true);
			}
			vm.menuSelection = undefined;
		};

		vm.toggleFilter = function (item)
		{
			vm.searchNumber = undefined;
			vm.searchText = undefined;
			vm.searchNumberFocus = false;
			vm.searchTextFocus = false;
			if (vm.filterSelection !== item)
			{
				vm.filterSelection = item;
				if (item === 'search')
				{
					vm.searchNumberFocus = true;
				}
				else if (item === 'filter')
				{
					vm.searchTextFocus = true;
				}
			}
			else
			{
				vm.filterSelection = undefined;
			}
		};

		vm.toggleInfo = function (newValue)
		{
			if (newValue === true || newValue === false)
			{
				vm.infoSelection = newValue;
			}
			else
			{
				vm.infoSelection = !vm.infoSelection;
			}
		};
		vm.toggleSettings = function (newValue)
		{
			if (newValue === true || newValue === false)
			{
				vm.settingsSelection = newValue;
			}
			else
			{
				vm.settingsSelection = !vm.settingsSelection;
			}
		};

		vm.round = function (number)
		{
			return Math.round(number);
		};

		vm.formatTime = function (totalSeconds)
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
				if (vm.filterSelection === 'search')
				{
					vm.searchNumber = undefined;
				}
				else
				{
					vm.toggleFilter('search');
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
				if (vm.filterSelection === 'filter')
				{
					vm.searchText = undefined;
				}
				else
				{
					vm.toggleFilter('filter');
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
				vm.player.volume(0);
				event.preventDefault();
			},
			allowIn: 'input'
		});

		function getHistory()
		{
			broadcastFactory.emit('history');
		}
		getHistory();

		vm.sendMessage = function ()
		{
			var message = vm.message;
			broadcastFactory.emit('message',
			{
				from: vm.nickname,
				msg: message
			});
			console.log('message sent', message);
			vm.message = '';
		};

		function sendTaunt(id)
		{
			console.log("sending taunt", id);
			broadcastFactory.emit('taunt',
			{
				from: vm.nickname,
				taunt: id,
				msg: vm.taunts[id][2]
			});
			console.log('message sent',
			{
				from: vm.nickname,
				taunt: id,
				msg: vm.taunts[id][2]
			});
		}

		$scope.$on('socket:broadcastTaunt', function (event, data)
		{
			console.log('got taunt', data);
			if (!data.taunt)
			{
				console.log('invalid taunt', data);
				return;
			}
			var taunt = vm.taunts[data.taunt];
			$scope.$apply(function ()
			{
				if (vm.file.id !== taunt[0])
				{
					vm.playThis(taunt, true, true);
				}
				vm.messageLog.push(
				{
					id: vm.messageLog.length,
					from: data.from,
					msg: data.msg
				});
			});
		});

		$scope.$on('socket:broadcastMessage', function (event, data)
		{
			console.log('got a message', data);
			if (!data.msg)
			{
				console.log('invalid message', data);
				return;
			}
			$scope.$apply(function ()
			{
				vm.messageLog.push(
				{
					id: vm.messageLog.length,
					from: data.from,
					msg: data.msg
				});
			});
		});
		$scope.$on('socket:broadcastHistory', function (event, data)
		{
			vm.hasChat = true;
			if (vm.messageLog.length < 1)
			{
				console.log('got history', data);
				if (!data.messages)
				{
					console.log('invalid history', data);
					return;
				}
				$scope.$apply(function ()
				{
					for (var x = 0; x < data.messages.length; x++)
					{
						vm.messageLog.push(
						{
							id: x,
							from: data.messages[x].from,
							msg: data.messages[x].msg
						});
					}
				});
			}
		});

		$scope.$on('socket:error', function (event, data)
		{
			console.log("error with socket");
		});

		console.log(vm.player);
	}
]);
