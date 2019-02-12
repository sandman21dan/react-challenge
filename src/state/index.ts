import { createAction, handleActions} from 'redux-actions';

export interface AppState {
  counter: number;
  numbers: number[];
}

const defaultState: AppState = {
  counter: 0,
  numbers: [12,23,24,45,32],
}

export const increment = createAction('INCREMENT');
export const decrement = createAction('DECREMENT');
export const addToNumbers = createAction('ADD_TO_NUMBERS', (numbers: number) => numbers);

export const reducer = handleActions(
  {
    INCREMENT: (state, action) => ({
      ...state,
      counter: state.counter + 1,
    }),
    DECREMENT: (state, action) => ({
      ...state,
      counter: state.counter - 1,
    }),
    ADD_TO_NUMBERS: (state, action) => ({
      ...state,
      counter: state.counter,
      numbers: [ ...state.numbers, action.payload ]
    }),
  },
  defaultState,
);
