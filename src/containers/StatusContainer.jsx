import React from 'react';
import { useStoreContext } from '../store';

const StatusContainer = () => {
  const { state: { isOverloaded, pastAlerts } } = useStoreContext();
  const highLoadAlerts = pastAlerts.filter((alert) => alert.isOverloaded);
  const recoveryAlerts = pastAlerts.filter((alert) => !alert.isOverloaded);
  return (
    <div id="current-status">
      <h2>
        CPU status:
        <span id={isOverloaded ? 'warning-status-text' : 'normal-status-text'}>
          {isOverloaded ? ' High Usage' : ' Normal'}
        </span>
      </h2>
      {/* TODO: To modularize this piece to be more DRY */}
      <p>
        <strong>Number of High CPU Load Occurances: </strong>
        {highLoadAlerts.length}
      </p>
      {highLoadAlerts.length ? (
        <p>
          Last occured at:
          {highLoadAlerts[highLoadAlerts.length - 1].time}
        </p>
      ) : null}
      <p>
        <strong>Number of CPU Load Recoveries: </strong>
        {recoveryAlerts.length}
      </p>
      {recoveryAlerts.length ? (
        <p>
          Last occured at:
          {recoveryAlerts[recoveryAlerts.length - 1].time}
        </p>
      ) : null}
    </div>
  );
};

export default StatusContainer;
