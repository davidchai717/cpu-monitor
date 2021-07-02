import { mainReducer, initialState } from '../reducers/mainReducer';
import { insertNewLoad, turnOffAlert } from '../actions/actionCreators';

describe('mainReducer alert logic unit tests', () => {
  let newState;
  beforeEach(() => {
    // Make a shallow copy of the state in order to keep the original copy untouched
    newState = JSON.parse(JSON.stringify(initialState));
  });
  describe('INSERT_NEW_LOAD', () => {
    // Helper function to mock adding loads over 2 minutes to state
    const addRandomLoadstoState = (state, max, min) => {
      const loadActions = [];
      for (let i = 1; i <= 12; i += 1) {
        const randomizedLoad = Math.random() * (max - min) + min;
        loadActions.push(insertNewLoad({ time: 'Placeholder', payload: randomizedLoad }));
      }
      // Process the actions through the reducer
      return loadActions.reduce((reducedState, action) => mainReducer(reducedState, action), state);
    };
    it('State should reflect when high CPU load is detected', () => {
      newState = addRandomLoadstoState(newState, 3, 1);
      const { showAlert, isOverloaded, pastAlerts } = newState;
      expect(showAlert).toBe(true);
      expect(isOverloaded).toBe(true);
      // Should be added to pastAlerts
      expect(pastAlerts.length).toBe(1);
      expect(pastAlerts[0]).toMatchObject({ isOverloaded: true, time: 'Placeholder' });
    });
    it('State should reflect when CPU load has recovered', () => {
      newState = addRandomLoadstoState(newState, 3, 1);
      newState = addRandomLoadstoState(newState, 1, 0);
      const { showAlert, isOverloaded, pastAlerts } = newState;
      expect(showAlert).toBe(true);
      expect(isOverloaded).toBe(false);
      // Should be added to pastAlerts
      expect(pastAlerts.length).toBe(2);
      expect(pastAlerts[1]).toMatchObject({ isOverloaded: false, time: 'Placeholder' });
    });
    it('Flags in the state should not change if CPU load has been normal', () => {
      newState = addRandomLoadstoState(newState, 1, 0);
      const { showAlert, isOverloaded, pastAlerts } = newState;
      expect(showAlert).toBe(false);
      expect(isOverloaded).toBe(false);
      expect(pastAlerts.length).toBe(0);
    });
  });
  describe('TOGGLE_ALERT', () => {
    afterEach(() => {
      // Make a shallow copy of the state in order to keep the original copy untouched
      newState = { ...initialState };
    });
    it('showAlert should be turned false when turnOffAlert is triggered', () => {
      newState.showAlert = true;
      newState = mainReducer(newState, turnOffAlert());
      expect(newState.showAlert).toBe(false);
    });
  });
});
