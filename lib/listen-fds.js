module.exports = function() {
  if (!process.env.LISTEN_PID) {
    return 0;
  }

  var listen_pid = parseInt(process.env.LISTEN_PID, 10);
  if (isNaN(listen_pid)) {
    return -1;
  }
  if (listen_pid != process.pid) {
    return 0;
  }

  if (!process.env.LISTEN_FDS) {
    return 0;
  }

  var listen_fds = parseInt(process.env.LISTEN_FDS, 10);
  if (isNaN(listen_fds)) {
    return -1;
  }

  /* TODO: cloexec fd's – we have no node api for that :( */

  return listen_fds;
}

module.exports.start = 3
