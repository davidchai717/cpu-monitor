import React from 'react';
import { useStoreContext } from '../store';
import CPULoadChart from '../components/CPULoadChart.jsx';
import Alert from '../components/Alert.jsx';
import StatusContainer from '../containers/StatusContainer.jsx';

const ChartContainer = () => {
  const { state: { showAlert } } = useStoreContext();
  return (
    <div id="chart-container">
      <CPULoadChart />
      {showAlert ? <Alert /> : null}
      <StatusContainer />
    </div>
  );
};

export default ChartContainer;
