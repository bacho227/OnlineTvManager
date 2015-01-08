/**
 * Created by bacho on 1/8/15.
 */
function log() {
	console.log.apply(console, arguments);
}
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(12345);
log('asd')
io.on('connection', function (socket) {
	log('connect')
	socket.on('message', function () {
		log('message', arguments);
	});
	socket.on('disconnect', function () {
		log('disconnect', arguments);
	});
});