Native libsystemd-daemon implementation 
---------------------------------------

Usage
=====

```javascript
var sd = require('systemd-daemon');

app.listen(sd.socket() || 3000, function() {
  sd.notify('READY=1');
});
