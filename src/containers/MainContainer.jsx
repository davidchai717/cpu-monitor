import React, { useEffect } from 'react';
import { useStoreContext } from '../store';
import { insertNewLoad } from '../actions/actionCreators';
import Graph from '../components/Graph.jsx';

const MainContainer = () => {
  const { state, dispatch } = useStoreContext();
  console.log(state);
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
      {state.loadData.length}
      <Graph />
      {/* StatusContainer */}
    </div>
  );
};

export default MainContainer;
