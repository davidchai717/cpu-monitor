import React from 'react';
import { useStoreContext } from '../../store';
import CPULoadChart from './CPULoadChart';
import PopUpAlert from './PopUpAlert';
import StatusContainer from './StatusContainer';
import BasePage from '../../components/BasePage';

const Chart = () => {
  const {
    state: { showAlert },
  } = useStoreContext();
  return (
    <BasePage title="Chart">
      <CPULoadChart />
      {showAlert ? <PopUpAlert /> : null}
      <StatusContainer />
    </BasePage>
  );
};

export default Chart;
