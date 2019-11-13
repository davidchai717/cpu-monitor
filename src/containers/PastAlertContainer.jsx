import React from 'react';
import { useStoreContext } from '../store';
import PastAlert from '../components/PastAlert.jsx';

const PastAlertContainer = () => {
  const { state: { pastAlerts } } = useStoreContext();
  console.log(pastAlerts);
  const pastAlertComps = [];
  for (let i = pastAlerts.length - 1; i >= 0; i -= 1) {
    pastAlertComps.push(<PastAlert
      alert={pastAlerts[i]}
    />);
  }
  return (
    <div id="past-alert-container">
      <h2>Past Alerts</h2>
      {!pastAlerts.length ? <p>No alerts available yet.</p> : null}
      {pastAlertComps}
    </div>
  );
};

export default PastAlertContainer;
