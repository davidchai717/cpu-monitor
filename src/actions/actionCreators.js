import * as types from './actions';

export const insertNewLoad = (payload) => ({
  type: types.INSERT_NEW_LOAD,
  payload,
});

export const turnOffAlert = () => ({
  type: types.TOGGLE_ALERT,
  payload: false,
});
