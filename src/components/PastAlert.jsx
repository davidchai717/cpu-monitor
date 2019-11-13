import React from 'react';

const PastAlertContainer = (props) => {
  const { alert: { time, isOverloaded } } = props;
  return (
    <div className={isOverloaded ? 'warning-past-alert' : 'normal-past-alert'}>
      <p>{time}</p>
      <p>{isOverloaded ? 'High CPU usage' : 'CPU load recovered'}</p>
    </div>
  );
};

export default PastAlertContainer;
