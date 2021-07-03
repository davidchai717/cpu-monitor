import React from 'react';

const PastAlert = ({ alert: { time, isOverloaded } }) => (
  <div className={isOverloaded ? 'warning-past-alert' : 'normal-past-alert'}>
    <p>{time}</p>
    <p>{isOverloaded ? 'High CPU usage' : 'CPU load recovered'}</p>
  </div>
);

export default PastAlert;
