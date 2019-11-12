import React from 'react';
import { useStoreContext } from '../store';
import { turnOffAlert } from '../actions/actionCreators';

const Alert = () => {
  const { state: { alertText }, dispatch } = useStoreContext();
  return (
    <div id="alert">
      <p>Alert:</p>
      <p>{alertText}</p>
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