import React, { useReducer, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Store } from './store';
import { mainReducer, initialState } from './reducers/mainReducer';
import { insertNewLoad } from './actions/actionCreators';

import Chart from './pages/Chart';
import PastAlerts from './pages/PastAlerts';
import Navbar from './components/Navbar';

const App = () => {
  // Initialize reducer for global store
  const [state, dispatch] = useReducer(mainReducer, initialState);

  useEffect(() => {
    // Listens for updates from the WS server
    const ws = new WebSocket('ws://localhost:5000');
    ws.addEventListener('open', () => {
      ws.addEventListener('message', (event) => {
        const data = JSON.parse(event.data);
        dispatch(insertNewLoad(data));
      });
    });
  }, []);

  return (
    <Store.Provider value={{ state, dispatch }}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Chart />
          </Route>
          <Route path="/past-alerts">
            <PastAlerts />
          </Route>
        </Switch>
      </Router>
    </Store.Provider>
  );
};

export default App;
