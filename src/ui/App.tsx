import React, { useReducer, useEffect } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Routes from './Routes';
import { Store } from './store';
import { mainReducer, initialState } from './reducers/mainReducer';
import { insertNewLoad } from './actions/actionCreators';

const { ipcRenderer } = window.require('electron');

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
      debugger;
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
            <Routes />
          </Switch>
        </Router>
      </div>
    </Store.Provider>
  );
};

export default App;
