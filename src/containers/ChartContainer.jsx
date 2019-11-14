import React from 'react';
import { useStoreContext } from '../store';
import CPULoadChart from '../components/CPULoadChart';
import PopUpAlert from '../components/PopUpAlert';
import StatusContainer from './StatusContainer';

const ChartContainer = () => {
  const { state: { showAlert } } = useStoreContext();
  return (
    <div id="chart-container">
      <CPULoadChart />
      {showAlert ? <PopUpAlert /> : null}
      <StatusContainer />
    </div>
  );
};

export default ChartContainer;
