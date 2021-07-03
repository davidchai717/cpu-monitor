import React from 'react';
import { useStoreContext } from '../../store';
import CPULoadChart from './CPULoadChart';
import PopUpAlert from './PopUpAlert';
import StatusContainer from './StatusContainer';

const Chart = () => {
  const {
    state: { showAlert },
  } = useStoreContext();
  return (
    <div id="chart-container">
      <CPULoadChart />
      {showAlert ? <PopUpAlert /> : null}
      <StatusContainer />
    </div>
  );
};

export default Chart;
