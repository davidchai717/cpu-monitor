import React from 'react';
import { useStoreContext } from '../store';
import Status from '../components/Status';

const StatusContainer = () => {
  const { state: { isOverloaded, pastAlerts } } = useStoreContext();
  // Compiles the previous alerts by type
  const highLoadAlerts = pastAlerts.filter((alert) => alert.isOverloaded);
  const recoveryAlerts = pastAlerts.filter((alert) => !alert.isOverloaded);
  return (
    <div id="status-container">
      <h2>
        CPU status:
        <span id={isOverloaded ? 'warning-status-text' : 'normal-status-text'}>
          {isOverloaded ? ' High Usage' : ' Normal'}
        </span>
      </h2>
      <Status alertArr={highLoadAlerts} label="Number of High CPU Load Occurances" />
      <Status alertArr={recoveryAlerts} label="Number of CPU Load Recoveries" />
    </div>
  );
};

export default StatusContainer;
