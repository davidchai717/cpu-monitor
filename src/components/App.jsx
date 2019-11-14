import React, { useReducer } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Store } from '../store';
import MainContainer from '../containers/MainContainer';
import { mainReducer, initialState } from '../reducers/mainReducer';

const App = () => {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      <Router>
        <MainContainer />
      </Router>
    </Store.Provider>
  );
};

export default App;
