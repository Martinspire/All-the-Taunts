var connect = require('connect');
var http = require('http');
var web = connect().use(connect.static('./'));

http.createServer(web).listen(3000, 'localhost');