import React, { useContext } from 'react';

export const Store = React.createContext(null);

export const useStoreContext = () => useContext(Store);
