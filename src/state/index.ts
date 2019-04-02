import { createAction, Action } from 'redux-actions';
import { combineReducers } from 'redux';

export interface AppState {
  counter: number;
  numbers: number[];
  inputField: number;
}

const defaultState: AppState = {
  counter: 0,
  numbers: [12, 23, 24, 45, 32],
  inputField: 1,
}

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const INPUT_FIELD_CHANGE = 'INPUT_FIELD_CHANGE'
const ADD_TO_NUMBERS = 'ADD_TO_NUMBERS'


export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
export const addToNumbers = createAction(ADD_TO_NUMBERS, (numbers: number) => numbers);
export const inputFieldChange = createAction(INPUT_FIELD_CHANGE, (entry: number) => entry);

const counterReducer = (counter: number = defaultState.counter, action: Action<void>) => {
  switch (action.type) {
    case INCREMENT:
      return counter + 1;
    case DECREMENT:
      return counter - 1;
    default:
      return counter;
  }
}

const inputFieldReducer = (inputField: number = defaultState.inputField, action: Action<number>): number => {
  switch (action.type) {
    case INPUT_FIELD_CHANGE:
      return action.payload || 0;
    default:
      return inputField;
  }
}

const numbersReducer = (numbers: number[] = defaultState.numbers, action: Action<number>): number[] => {
  switch (action.type) {
    case ADD_TO_NUMBERS:
      if (action.payload) {
        return [...numbers, action.payload];
      }
      return numbers;
    default:
      return numbers;
  }
}

export default combineReducers({
  counter: counterReducer,
  inputField: inputFieldReducer,
  numbers: numbersReducer,
});
