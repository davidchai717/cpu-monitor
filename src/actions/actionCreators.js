import * as types from './actions';

export const insertNewLoad = (payload) => ({
  type: types.INSERT_NEW_LOAD,
  payload,
});

export const turnOffAlert = () => ({
  type: types.TOGGLE_ALERT,
  payload: false,
});

export const turnOnAlert = () => ({
  type: types.TOGGLE_ALERT,
  payload: true,
});

export const initiateChart = () => ({
  type: types.INITIATE_CHART,
});
