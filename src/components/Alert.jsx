import React from 'react';
import { useStoreContext } from '../store';
import { turnOffAlert } from '../actions/actionCreators';

const Alert = () => {
  const { state: { isOverloaded }, dispatch } = useStoreContext();
  return (
    <div id="alert">
      <p>Alert:</p>
      <p>{isOverloaded ? 'High CPU load detected' : 'CPU load back to normal.'}</p>
      <button
        type="submit"
        onClick={() => {
          dispatch(turnOffAlert());
        }}
      >
        Okay
      </button>
    </div>
  );
};

export default Alert;