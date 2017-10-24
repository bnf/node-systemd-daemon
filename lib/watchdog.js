var sd_notify = require('./notify');
var interval = null;

/* Get watchdog timeout in milliseconds (if enabled) */
exports.enabled = function() {
	/* Only supporting systemd >= 209 here, we don't care for older ones. */
	if (process.env.WATCHDOG_USEC && process.env.WATCHDOG_PID == process.pid) {
		var usec = parseInt(process.env.WATCHDOG_USEC, 10);
		if (isNaN(usec)) {
			return 0;
		}
		/* Return milliseconds, as that's what's used in node */
		return usec / 1000;
	} else {
		return 0;
	}
}

exports.start = function() {
	if (interval !== null) {
		return;
	}

	var msec = exports.enabled();
	if (msec > 0) {
		interval = setInterval(function() {
			sd_notify("WATCHDOG=1");
		/* Interval is half the watchdog timeout, as suggested by systemd documentation. */
		}, msec/2);
	}
}

exports.stop = function() {
	if (interval !== null) {
		clearInterval(interval);
		interval = null;
	}
}
