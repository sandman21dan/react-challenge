import { reducer, decrement, increment, addToNumbers}  from './';

it('Increases the counter', () => {
  const initialState = {
    counter: 10,
    numbers: [],
  };
  const expectedState = {
    counter: 11,
    numbers: [],
  };

  expect(reducer(initialState, increment())).toEqual(expectedState);
});

it('Adds to numbers store', () => {
  const initialState = {
    counter: 10,
    numbers: [],
  };
  const expectedState = {
    counter: 10,
    numbers: [20],
  };

  expect(reducer(initialState, addToNumbers(20) as any)).toEqual(expectedState);
});


it('Decreases the counter', () => {
  const initialState = {
    counter: 9,
    numbers: [],
  };
  const expectedState = {
    counter: 8,
    numbers: [],
  }

  expect(reducer(initialState, decrement())).toEqual(expectedState);
});
