import React from 'react';
import { useStoreContext } from '../store';

const CurrentStatus = () => {
  const { state: { isOverload } } = useStoreContext();
  return (
    <div id="current-status">
      <h2>CPU status:</h2>
      <p>{isOverload ? 'High Usage' : 'Normal'}</p>
    </div>
  );
};

export default CurrentStatus;
