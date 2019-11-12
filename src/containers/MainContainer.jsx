import React, { useEffect } from 'react';
import { useStoreContext } from '../store';
import { insertNewLoad } from '../actions/actionCreators';
import CPULoadChart from '../components/CPULoadChart.jsx';
import Alert from '../components/Alert.jsx';
import StatusContainer from '../containers/StatusContainer.jsx';

const MainContainer = () => {
  const { state: { showAlert }, dispatch } = useStoreContext();
  useEffect(() => {
    const ws = new WebSocket('ws://localhost:3000');
    ws.addEventListener('open', () => {
      ws.addEventListener('message', (event) => {
        const data = JSON.parse(event.data);
        dispatch(insertNewLoad(data));
      });
    });
  }, []);
  return (
    <div id="main-container">
      <h1>CPU Monitor</h1>
      <CPULoadChart />
      {showAlert ? <Alert /> : null}
      <StatusContainer />
    </div>
  );
};

export default MainContainer;
