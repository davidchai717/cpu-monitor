import React from 'react';

const PastAlertContainer = (props) => {
  const { time, isOverloaded } = props.alert;
  return (
    <div className={isOverloaded ? 'warning-past-alert' : 'normal-past-alert'}>
      <p>{time}</p>
      <p>{isOverloaded ? 'High CPU usage' : 'CPU recovered'}</p>
    </div>
  );
};

export default PastAlertContainer;
