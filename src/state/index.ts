import { createAction, handleActions } from 'redux-actions';

export interface AppState {
  counter: number;
}

const defaultState: AppState = {
  counter: 0,
}

export const increment = createAction('INCREMENT');
export const decrement = createAction('DECREMENT');

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
  },
  defaultState,
);
