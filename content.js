/**
 * Created by bacho on 1/8/15.
 */
function log() {
	console.log.apply(console, arguments);
}
var socketUrl = 'http://localhost:12345/';
function alo() {
	log('aajksd lakjd hlkasd lkasdlkasd lkjasdlkjasdlkas jkd')
}
$(function () {
	var sock = $('<script type="text/javascript" src="http://localhost:12345/socket.io/socket.io.js"></script>');
	$('head').append(sock);

	//
	//window.socketio = io.connect(socketUrl);
	//socketio.on('connect', function () {
	//	console.debug('>> connected');
	//});
	//socketio.on('message', function (message) {
	//	console.group('%c::server:: %ctime: ' + new Date(), "font-size: 12px;", "font-size: 12px;color: blue;"); //
	//	console.debug.apply(console, message);
	//	console.groupEnd();
	//});
	//
	//socketio.on('disconnect', function () {
	//	console.debug('>> disconnected');
	//});
});