import os from 'os';

// Helper functions to help parse and format the time
const _addZero = (num: number): string => {
  if (num >= 10) return String(num);
  return `0${String(num)}`;
};

const _processTime = (time: Date): string => {
  const hour = _addZero(time.getHours());
  const minute = _addZero(time.getMinutes());
  const second = _addZero(time.getSeconds());
  return `${hour}:${minute}:${second}`;
};

// Helper function that stores and sends CPU load
export const sendLoad = (sendFn: (load: string) => void): void => {
  const timeNow = new Date();
  const time = _processTime(timeNow);
  const payload = (os.loadavg()[0] / os.cpus().length).toFixed(2);
  sendFn(
    JSON.stringify({
      time,
      payload,
    })
  );
};
