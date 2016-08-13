# node-systemd-daemon

Native implementation of the sd-daemon subset of libsystemd. Providing socket activation, sd\_notify, sd\_booted and watchdog support.

## Usage

```javascript
var sd = require('systemd-daemon');
sd.watchdog.start();

/* Listen on systemd socket if available, else port 3000 */
app.listen(sd.socket() || 3000, function() {
  /* Notify systemd we've finished startup.
     To be used together with Type=notify in app.service */
  sd.notify('READY=1');
});
