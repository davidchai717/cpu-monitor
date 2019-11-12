import * as types from '../actions/actions';

export const initialState = {
  loadData: [],
  showAlert: false,
  isOverload: false,
  alertText: null,
};

export const mainReducer = (state, action) => {
  const newState = { ...state };
  switch (action.type) {
    case types.INSERT_NEW_LOAD:
      newState.loadData.push(action.payload);
      return newState;
    default:
      return state;
  }
};
