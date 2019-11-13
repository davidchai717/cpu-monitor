import React from 'react';
import { useStoreContext } from '../store';

const StatusContainer = () => {
  const { state: { isOverloaded, pastAlerts } } = useStoreContext();
  const highLoadAlerts = pastAlerts.filter(alert => alert.isOverloaded);
  const recoveryAlerts = pastAlerts.filter(alert => !alert.isOverloaded);
  return (
    <div id="current-status">
      <h2>
        CPU status:
        <span id={isOverloaded ? 'alert-status-text' : 'normal-status-text'}>
          {isOverloaded ? ' High Usage' : ' Normal'}
        </span>
      </h2>
      {/* To modularize this piece to be more DRY */}
      <p>
        <strong>Num of High CPU Load Occurances: </strong>
        {highLoadAlerts.length}
      </p>
      {highLoadAlerts.length ? (
        <p>
          Last orccured at:
          {highLoadAlerts[highLoadAlerts.length - 1].time}
        </p>
      ) : null}
      <p>
        <strong>Num of CPU Recoveries: </strong>
        {recoveryAlerts.length}
      </p>
      {recoveryAlerts.length ? (
        <p>
          Last orccured at:
          {recoveryAlerts[recoveryAlerts.length - 1].time}
        </p>
      ) : null}
    </div>
  );
};

export default StatusContainer;
