var unix = require('unix-dgram');

module.exports = function(state) {
	if (!process.env.NOTIFY_SOCKET) {
		return;
	}

	var message = Buffer(state + '\n');
	var client = unix.createSocket('unix_dgram');
	client.on('error', console.error);
	client.send(message, 0, message.length, process.env.NOTIFY_SOCKET);
	client.close();
}
