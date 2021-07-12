/* eslint-disable no-case-declarations */
import * as actionTypes from '../actions/actions';
import { State, Action, AlertInterface } from '../types';
import { produce } from 'immer';

export const initialState: State = {
  loadData: [],
  timeStamps: [],
  pastAlerts: [],
  showAlert: false,
  isOverloaded: false,
};

class Alert implements AlertInterface {
  isOverloaded;
  time;

  constructor(isOverloaded: boolean, time: Date) {
    this.isOverloaded = isOverloaded;
    this.time = time;
  }
}

// Using Immer here to easily make a new copy of the state and ensure default state doesn't get mutated
export const mainReducer = produce((draft: State, action: Action): void => {
  switch (action.type) {
    case actionTypes.INSERT_NEW_LOAD:
      const { time, payload } = action.payload;
      draft.timeStamps.push(time);
      draft.loadData.push(Number(payload));
      // check the average CPU load over the last 2 minutes
      const { loadData, isOverloaded } = draft;
      // TODO: Refactor the following logic into their own mutations
      if (loadData.length >= 12) {
        const averageLoad = loadData.slice(-12).reduce((sum: number, currNum: number) => sum + currNum) / 12;
        if (averageLoad >= 1 && !isOverloaded) {
          // if over 1, throw an alert
          draft.isOverloaded = true;
          draft.showAlert = true;
          draft.pastAlerts.push(new Alert(true, time));
        } else if (averageLoad < 1 && isOverloaded) {
          // if CPU recovered from high load, throw an alert
          draft.isOverloaded = false;
          draft.showAlert = true;
          draft.pastAlerts.push(new Alert(false, time));
        }
      }
      break;
    case actionTypes.TOGGLE_ALERT:
      draft.showAlert = action.payload;
      break;
    default:
      break;
  }
})  
