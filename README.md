# node-systemd-daemon

Native implementation of the sd-daemon subset of libsystemd. Providing socket activation, sd\_notify, sd\_booted and watchdog support.

## Usage

```javascript
var sd = require('systemd-daemon');
/* Enable watchdog reporting if required by the unit file.
   Use sd.watchdog.stop() once you shutdown your app. */
sd.watchdog.start();

/* Listen on systemd socket if available, else port 3000 */
app.listen(sd.socket() || 3000, function() {
  /* Notify systemd we've finished startup.
     To be used together with Type=notify in app.service */
  sd.notify('READY=1');
});
```

## ES6 Usage

```javascript
import { watchdog, socket, notify } from 'systemd-daemon';

/* Enable watchdog reporting if required by the unit file.
   Use watchdog.stop() once you shutdown your app. */
watchdog.start();

/* Listen on systemd socket if available, else port 3000 */
app.listen(socket() || 3000, function() {
  /* Notify systemd we've finished startup.
     To be used together with Type=notify in app.service */
  notify('READY=1');
});
```
