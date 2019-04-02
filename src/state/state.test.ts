import reducer, { decrement, increment, addToNumbers } from './';

it('Increases the counter', () => {
  const initialState = {
    counter: 10,
    numbers: [],
    inputField: 0
  };
  const expectedState = {
    counter: 11,
    numbers: [],
    inputField: 0
  };

  expect(reducer(initialState, increment())).toEqual(expectedState);
});

it('Adds to numbers store', () => {
  const initialState = {
    counter: 10,
    numbers: [],
    inputField: 0
  };
  const expectedState = {
    counter: 10,
    numbers: [20],
    inputField: 0
  };

  expect(reducer(initialState, addToNumbers(20) as any)).toEqual(expectedState);
});


it('Decreases the counter', () => {
  const initialState = {
    counter: 9,
    numbers: [],
    inputField: 0
  };
  const expectedState = {
    counter: 8,
    numbers: [],
    inputField: 0
  }

  expect(reducer(initialState, decrement())).toEqual(expectedState);
});
