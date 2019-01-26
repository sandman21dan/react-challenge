import { reducer, decrement, increment }  from './';

it('Increases the counter', () => {
  const initialState = {
    counter: 10,
  };
  const expectedState = {
    counter: 11,
  }

  expect(reducer(initialState, increment())).toEqual(expectedState);
});

it('Decreases the counter', () => {
  const initialState = {
    counter: 9,
  };
  const expectedState = {
    counter: 8,
  }

  expect(reducer(initialState, decrement())).toEqual(expectedState);
});
