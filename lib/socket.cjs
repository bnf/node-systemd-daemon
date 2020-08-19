var listen_fds = require('./listen-fds.cjs');

module.exports = function(index) {
	index = index || 0

	if (listen_fds() < (index+1)) {
		return null;
	}

	return {
		fd: listen_fds.start + index
	};
}
