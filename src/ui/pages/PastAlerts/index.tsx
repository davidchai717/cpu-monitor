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
      {!pastAlerts.length ? <p>No alerts available yet.</p> : null}
      {pastAlerts.map((alert, i) => <AlertBox alert={alert} key={`alert-${i}`} />)}
    </BasePage>
  );
};

export default PastAlertContainer;
