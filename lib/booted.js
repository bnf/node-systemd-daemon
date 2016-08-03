var fs = require('fs');

/* callback is optional */
module.exports = function(callback) {
  callback = callback || null;

  if (callback) {
    fs.access('/run/systemd/system', function(err) {
      callback(!err);
    });
  } else {
    try {
      fs.accessSync('/run/systemd/system')
      return true;
    } catch(e) {
      return false;
    }
  }
}
