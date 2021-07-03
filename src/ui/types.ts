import { Dispatch } from 'react';

export type State = {
  loadData: Array<number>;
  timeStamps: Array<Date>;
  pastAlerts: Array<AlertInterface>;
  showAlert: boolean;
  isOverloaded: boolean;
};

export type Store = {
  dispatch: Dispatch<Action>;
  state: State;
};

export type Action = {
  type: string;
  payload?: any;
};

export interface AlertInterface {
  isOverloaded: boolean;
  time: Date;
}
