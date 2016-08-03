try {
	var unix = require('unix-dgram');
}  catch (e) {
	var unix = null;
	if (!unix) {
		/* TODO: Fallback to the commandline systemd-notify utility */
		console.log("Missing unix_dgram bindings, no systemd notifications will be sent.");
	}
}

module.exports = function(state) {
	if (!process.env.NOTIFY_SOCKET) {
		return;
	}

	if (!unix) {
		return;
	}

	var message = Buffer(state + '\n');
	var client = unix.createSocket('unix_dgram');
	client.on('error', console.error);
	client.send(message, 0, message.length, process.env.NOTIFY_SOCKET);
	client.close();
}
