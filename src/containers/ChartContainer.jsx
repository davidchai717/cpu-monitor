import React from 'react';
import { useStoreContext } from '../store';
import CPULoadChart from '../components/CPULoadChart.jsx';
import PopUpAlert from '../components/PopUpAlert.jsx';
import StatusContainer from '../containers/StatusContainer.jsx';

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
