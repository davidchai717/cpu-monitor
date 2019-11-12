const os = require('os');
const WebSocket = require('ws');

// Establish WebSocket server
const ws = new WebSocket.Server({ port: 3000 });

// Helper function that stores and sends CPU load
const sendLoad = (client) => {
  const timeNow = new Date();
  const time = `${timeNow.getHours()}:${timeNow.getMinutes()}:${timeNow.getSeconds()}`;
  const payload = os.loadavg()[0] / os.cpus().length;
  client.send(JSON.stringify({
    x: time,
    y: payload,
  }));
};

// Begin executing sendLoad every 10 secs upon connecting
ws.on('connection', (client) => {
  const timeNow = new Date();
  const time = `${timeNow.getHours()}:${timeNow.getMinutes()}:${timeNow.getSeconds()}`;
  const payload = os.loadavg()[0] / os.cpus().length;
  client.send(JSON.stringify({
    x: time,
    y: payload,
  }));
  setInterval(() => {
    sendLoad(client);
  }, 10000);
});

ws.on('close', () => {
  clearInterval(sendLoad);
});
