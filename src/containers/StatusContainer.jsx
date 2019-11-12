import React from 'react';
import CurrentStatus from '../components/CurrentStatus.jsx';
import PastAlertContainer from '../containers/PastAlertContainer.jsx';

const StatusContainer = () => {
  return (
    <div id="status-container">
      <CurrentStatus />
      <PastAlertContainer />
    </div>
  );
};

export default StatusContainer;
