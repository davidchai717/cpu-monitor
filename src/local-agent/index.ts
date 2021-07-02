'use strict';

import os from 'os';
import WebSocket from 'ws';

// Establish WebSocket server
const ws = new WebSocket.Server({ port: 5000 });

// Helper functions to help parse and format the time
const addZero = (num: number) => {
  if (num >= 10) return String(num);
  return `0${String(num)}`;
};

const processTime = (time: Date) => {
  const hour = addZero(time.getHours());
  const minute = addZero(time.getMinutes());
  const second = addZero(time.getSeconds());
  return `${hour}:${minute}:${second}`;
};

// Helper function that stores and sends CPU load
const sendLoad = (client: WebSocket): void => {
  const timeNow = new Date();
  const time = processTime(timeNow);
  const payload = (os.loadavg()[0] / os.cpus().length).toFixed(2);
  client.send(
    JSON.stringify({
      time,
      payload,
    })
  );
};

// Initiates agent
ws.on('connection', (client): void => {
  sendLoad(client);
  const dataPersist = setInterval(() => {
    sendLoad(client);
  }, 10000);

  client.on('close', () => {
    clearInterval(dataPersist);
  });
});
