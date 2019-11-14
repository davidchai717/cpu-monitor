import React, { useContext } from 'react';

export const Store = React.createContext();

export const useStoreContext = () => useContext(Store);
