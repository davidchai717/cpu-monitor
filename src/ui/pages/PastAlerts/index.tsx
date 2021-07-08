import React from 'react';
import { useStoreContext } from '../../store';
import AlertBox from './components/AlertBox';
import BasePage from '../../components/BasePage';

const PastAlertContainer = () => {
  const {
    state: { pastAlerts },
  } = useStoreContext();

  return (
    <BasePage title="Past Alerts">
      {pastAlerts.length ? pastAlerts.map((alert, i) => <AlertBox alert={alert} key={`alert-${i}`} />) : <p>No alerts available yet.</p> }
    </BasePage>
  );
};

export default PastAlertContainer;
