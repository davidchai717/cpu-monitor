const os = require('os');

setInterval(() => {
  console.log(os.loadavg()[0]/os.cpus().length);
}, 10000);