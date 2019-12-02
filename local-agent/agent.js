const os = require('os');
const WebSocket = require('ws');

// Establish WebSocket server
const ws = new WebSocket.Server({ port: 3000 });

// Helper functions to help parse and format the time
const addZero = (num) => {
  if (num >= 10) return String(num);
  return `0${String(num)}`;
};

const processTime = (time) => {
  const hour = addZero(time.getHours());
  const minute = addZero(time.getMinutes());
  const second = addZero(time.getSeconds());
  return `${hour}:${minute}:${second}`;
};

// Helper function that stores and sends CPU load
const sendLoad = (client) => {
  const timeNow = new Date();
  const time = processTime(timeNow);
  const payload = (os.loadavg()[0] / os.cpus().length).toFixed(2);
  client.send(JSON.stringify({
    time,
    payload,
  }));
};

// Begin executing sendLoad every 10 secs upon connecting
ws.on('connection', (client) => {
  sendLoad(client);
  const dataPersist = setInterval(() => {
    sendLoad(client);
  }, 10000);
  // Clears upon disconnecting
  client.on('close', () => {
    clearInterval(dataPersist);
  });
});
