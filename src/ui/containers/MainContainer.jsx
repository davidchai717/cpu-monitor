import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useStoreContext } from '../store';
import { insertNewLoad } from '../actions/actionCreators';
import ChartContainer from './ChartContainer';
import PastAlertContainer from './PastAlertContainer';
import HeadContainer from './HeadContainer';

const MainContainer = () => {
  const { dispatch } = useStoreContext();
  useEffect(() => {
    // Listens for updates from the WS server
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
      <HeadContainer />
      <Switch>
        <Route exact path="/">
          <ChartContainer />
        </Route>
        <Route path="/past-alerts">
          <PastAlertContainer />
        </Route>
      </Switch>
    </div>
  );
};

export default MainContainer;
