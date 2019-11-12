import React, { useReducer } from 'react';
import { Store } from '../store';
import MainContainer from '../containers/MainContainer.jsx';
import { mainReducer, initialState } from '../reducers/mainReducer';

const App = () => {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      <MainContainer />
    </Store.Provider>
  );
};

export default App;
