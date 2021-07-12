import { app, BrowserWindow, ipcMain } from 'electron';
import { sendLoad } from './services/cpu';

const eventStack: NodeJS.Timeout[] = [];

const createWindow = (): void => {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    minWidth: 1024,
    minHeight: 768,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // TODO: Make sure to implement DEV/PROD mode detection. Default to dev for now
  if (true) {
    win.loadURL('http://localhost:8080');
  } else {
    win.loadFile('./public/index.html');
  }
};

ipcMain.on('requestCpuUsage', (event) => {
  console.log('WebSockets connected');
  sendLoad((load) => event.reply('cpuLoad', load));
  const dataPersist = setInterval(() => {
    sendLoad((load) => event.reply('cpuLoad', load));
  }, 10000);
  eventStack.push(dataPersist);
});

ipcMain.on('stopSendingCpuUsage', () => {
  console.log('clear');
  while (eventStack.length) {
    clearInterval(eventStack.pop());
  }
});

app.whenReady().then(() => {
  createWindow();
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

process.on('uncaughtException', (err) => {
  console.log('Caught exception: ' + err);
});
