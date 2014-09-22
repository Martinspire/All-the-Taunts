var taunter = angular.module(
	'Taunter.services.broadcastFactory', ['ngResource']);

taunter.factory('broadcastFactory', function (socketFactory)
{
	var socket = socketFactory();
	socket.forward(['broadcastHistory', 'broadcastMessage', 'broadcastTaunt', 'error']);
	return socket;
});
