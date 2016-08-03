# Native libsystemd-daemon implementation

## Usage

```javascript
var sd = require('systemd-daemon');

/* Listen on systemd socket if available, else port 3000 */
app.listen(sd.socket() || 3000, function() {
  /* Notify systemd we've finished startup. To be used together with Type=notify in app.service */
  sd.notify('READY=1');
});
