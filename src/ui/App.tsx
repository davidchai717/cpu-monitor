import React, { useReducer, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Store } from './store';
import { mainReducer, initialState } from './reducers/mainReducer';
import { insertNewLoad } from './actions/actionCreators';

const { ipcRenderer } = window.require('electron');

import Chart from './pages/Chart';
import PastAlerts from './pages/PastAlerts';
import About from './pages/About';

import Navbar from './components/Navbar';

const App = () => {
  // Initialize reducer for global store
  const [state, dispatch] = useReducer(mainReducer, initialState);

  useEffect(() => {
    ipcRenderer.send('requestCpuUsage');
    ipcRenderer.on('cpuLoad', (_, load) => {
      const data = JSON.parse(load);
      dispatch(insertNewLoad(data));
    });

    return () => {
      console.log('sent?');
      ipcRenderer.send('stopSendingCpuUsage');
    };
  }, []);

  return (
    <Store.Provider value={{ state, dispatch }}>
      <div className="md:flex flex-col md:flex-row md:min-h-screen w-full">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Chart />
            </Route>
            <Route path="/past-alerts">
              <PastAlerts />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </Router>
      </div>
    </Store.Provider>
  );
};

export default App;
