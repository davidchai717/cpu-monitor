/* eslint-disable no-case-declarations */
import * as types from '../actions/actions';

interface State {
  loadData: Array<number>;
  timeStamps: Array<Date>;
  pastAlerts: Array<Alert>;
  showAlert: boolean;
  isOverloaded: boolean;
}

interface Action {
  type: string;
  payload?: any;
}

export const initialState: State = {
  loadData: [],
  timeStamps: [],
  pastAlerts: [],
  showAlert: false,
  isOverloaded: false,
};

class Alert {
  isOverloaded: boolean;
  time: Date;

  constructor(isOverloaded: boolean, time: Date) {
    this.isOverloaded = isOverloaded;
    this.time = time;
  }
}

export const mainReducer = (state: State, action: Action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case types.INSERT_NEW_LOAD:
      const { time, payload } = action.payload;
      newState.timeStamps.push(time);
      newState.loadData.push(Number(payload));
      // check the average CPU load over the last 2 minutes
      const { loadData, isOverloaded } = newState;
      if (loadData.length >= 12) {
        const averageLoad = loadData.slice(-12).reduce((sum: number, currNum: number) => sum + currNum) / 12;
        if (averageLoad >= 1 && !isOverloaded) {
          // if over 1, throw an alert
          newState.isOverloaded = true;
          newState.showAlert = true;
          newState.pastAlerts.push(new Alert(true, time));
        } else if (averageLoad < 1 && isOverloaded) {
          // if CPU recovered from high load, throw an alert
          newState.isOverloaded = false;
          newState.showAlert = true;
          newState.pastAlerts.push(new Alert(false, time));
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
