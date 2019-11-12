/* eslint-disable no-case-declarations */
import * as types from '../actions/actions';

export const initialState = {
  loadData: [],
  timeStamps: [],
  chartInitiated: false,
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
      newState.loadData.push(payload);
      return newState;
    case types.INITIATE_CHART:
      newState.chartInitiated = true;
      return newState;
    default:
      return state;
  }
};
