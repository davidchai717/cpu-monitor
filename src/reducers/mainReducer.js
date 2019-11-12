/* eslint-disable no-case-declarations */
import * as types from '../actions/actions';

export const initialState = {
  loadData: [],
  timeStamps: [],
  showAlert: false,
  isOverload: false,
  alertText: null,
};

export const mainReducer = (state, action) => {
  const newState = { ...state };
  switch (action.type) {
    case types.INSERT_NEW_LOAD:
      const { time, payload } = action.payload;
      newState.timeStamps.push(time);
      newState.loadData.push(Number(payload));
      // check if CPU load averages at above or at 2 during the last 2 minutes
      const { loadData, isOverload } = newState;
      if (loadData.length >= 12) {
        const averageLoad = loadData.slice(-12).reduce((sum, currNum) => (sum + currNum)) / 12;
        // if over 2, throw an alert
        if (averageLoad >= 2 && !isOverload) {
          newState.isOverload = true;
          newState.showAlert = true;
          newState.alertText = 'High CPU load detected.';
        } else if (averageLoad < 2 && isOverload) {
          newState.isOverload = false;
          newState.showAlert = true;
          newState.alertText = 'CPU load back to normal.';
        }
      }
      return newState;
    case types.TOGGLE_ALERT:
      newState.showAlert = action.payload;
      return newState;
    default:
      return state;
  }
};
