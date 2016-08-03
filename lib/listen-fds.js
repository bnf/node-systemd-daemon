module.exports = function() {
  if (!process.env.LISTEN_PID) {
    return 0;
  }

  var listen_pid = parseInt(process.env.LISTEN_PID, 10);
  if (isNaN(listen_pid)) {
    return -1;
  }

  /* Is this for us?
   * (May have been passed accidentially by a parent process,
   * caused by a missing cloexec */
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

  /* TODO: cloexec the passed fd's, but we have no node api for that :( */
  /* TODO: unset environment */

  return listen_fds;
}

module.exports.start = 3
