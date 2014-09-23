taunter.factory('broadcastFactory', ['$resource', 'socketFactory',
	function ($resource, socketFactory)
	{
		var socket = socketFactory();
		socket.forward(['broadcastHistory', 'broadcastMessage', 'broadcastTaunt', 'error']);
		return socket;
	}
]);
