import { mainReducer, initialState } from '../reducers/mainReducer';
import { insertNewLoad, turnOffAlert } from '../actions/actionCreators';

describe('mainReducer alert logic unit tests', () => {
  describe('INSERT_NEW_LOAD', () => {
    // Keeping track of the state change for the following tests
    let newState = initialState;
    it('State should reflect when high CPU load is detected', () => {
      // Generate 12 mock actions that contain high load data
      const loadActions = [];
      for (let i = 1; i <= 12; i += 1) {
        const randomizedLoad = Math.random() * (3 - 1) + 1;
        loadActions.push(insertNewLoad({ time: 'Placeholder', payload: randomizedLoad }));
      }
      // Process the actions through the reducer
      newState = loadActions.reduce((state, action) => mainReducer(state, action), newState);
      const { showAlert, isOverloaded, pastAlerts } = newState;
      expect(showAlert).toBe(true);
      expect(isOverloaded).toBe(true);
      // Should be added to pastAlerts
      expect(pastAlerts.length).toBe(1);
      expect(pastAlerts[0]).toMatchObject({ isOverloaded: true, time: 'Placeholder' });
    });
    it('State should reflect when CPU load has recovered', () => {
      // Generate 12 mock actions that contain normal load data
      const loadActions = [];
      for (let i = 1; i <= 12; i += 1) {
        const randomizedLoad = Math.random() * 1;
        loadActions.push(insertNewLoad({ time: 'Placeholder', payload: randomizedLoad }));
      }
      // Process the actions through the reducer
      newState = loadActions.reduce((state, action) => mainReducer(state, action), newState);
      const { showAlert, isOverloaded, pastAlerts } = newState;
      expect(showAlert).toBe(true);
      expect(isOverloaded).toBe(false);
      // Should be added to pastAlerts
      expect(pastAlerts.length).toBe(2);
      expect(pastAlerts[1]).toMatchObject({ isOverloaded: false, time: 'Placeholder' });
    });
  });
  describe('TOGGLE_ALERT', () => {
    it('showAlert should be turned false when turnOffAlert is triggered', () => {
      // Make a shallow copy of the state in order to mutate the value directly
      const copyofState = { ...initialState };
      copyofState.showAlert = true;
      const newState = mainReducer(copyofState, turnOffAlert());
      expect(newState.showAlert).toBe(false);
    });
  });
});
