module.exports = function (io) {
  'use strict';
  //var io = require('socket.io').listen(server);
  var messages = [];
  io.sockets.on('connection', function(socket){
    socket.broadcast.emit('user connected');
    console.log("new user");
    
      socket.on('taunt', function (data) {
        var from = data.from;
        var taunt = data.taunt;
        var msg = data.msg;
      //console.log('recieved taunt from', from, 'taunt', taunt, 'msg', msg);
      messages.push({msg: msg, from: from});
      io.sockets.emit('broadcastTaunt', {
        taunt: taunt,
        from: from,
        msg: msg
      });
      //console.log('broadcast complete');
    });

      socket.on('message', function (data) {
        var from = data.from;
        var msg = data.msg;
      //console.log('recieved message from', from, 'msg', msg);
      messages.push({msg: msg, from: from});
      io.sockets.emit('broadcastMessage', {
        msg: msg,
        from: from
      });
      //console.log('broadcast complete');
    });

      socket.on('history', function () {
      //console.log('recieved task to send history');
      socket.emit('broadcastHistory', {
        messages: messages
      });
      //console.log('broadcast complete');
    });
  });
  // io.on('connection', function (socket) {
  //   socket.broadcast.emit('user connected');

  //   socket.on('message', function (from, msg) {

  //     console.log('recieved message from', from, 'msg', JSON.stringify(msg));

  //     console.log('broadcasting message');
  //     console.log('payload is', msg);
  //     io.sockets.emit('broadcast', {
  //       payload: msg,
  //       source: from
  //     });
  //     console.log('broadcast complete');
  //   });
  // });
};
