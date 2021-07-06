import React from 'react';
import { useStoreContext } from '../../store';
import AlertBox from './components/AlertBox';
import BasePage from '../../components/BasePage';

const PastAlertContainer = () => {
  const {
    state: { pastAlerts },
  } = useStoreContext();
  // Renders all the previous alerts
  const pastAlertComps = [];
  for (let i = pastAlerts.length - 1; i >= 0; i -= 1) {
    pastAlertComps.push(<AlertBox alert={pastAlerts[i]} key={`alert-${i}`} />);
  }
  return (
    <BasePage title="Past Alerts">
      {!pastAlerts.length ? <p>No alerts available yet.</p> : null}
      {pastAlertComps}
    </BasePage>
  );
};

export default PastAlertContainer;
