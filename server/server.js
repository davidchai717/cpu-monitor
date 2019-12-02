const express = require('express');
const path = require('path');

const app = express();

// ---Express Server used in production mode
if (process.env.NODE_ENV === 'production') {
  app.use('/dist', express.static(path.resolve(__dirname, '../dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/index.html'));
  });
  app.listen('5000');
}