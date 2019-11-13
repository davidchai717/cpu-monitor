import React, { useEffect } from 'react';
import { useStoreContext } from '../store';
import { insertNewLoad } from '../actions/actionCreators';
import ChartContainer from './ChartContainer.jsx';

const MainContainer = () => {
  const { dispatch } = useStoreContext();
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
      <ChartContainer />
    </div>
  );
};

export default MainContainer;
