const os = require('os');
const express = require('express');

const app = express();

// setInterval(() => {
//   console.log(os.loadavg()[0]/os.cpus().length);
// }, 10000);

// console.log(process.env.NODE_ENV);

app.listen(3000);
