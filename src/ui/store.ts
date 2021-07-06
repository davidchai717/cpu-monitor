import React, { useContext } from 'react';
import { Store as StoreType } from './types';

export const Store = React.createContext(null);

export const useStoreContext = (): StoreType => useContext(Store);
