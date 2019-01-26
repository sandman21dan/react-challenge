import * as React from 'react';
import { connect } from 'react-redux';
import { AppState, increment, decrement } from '../state';

interface CounterProps {
  count: number;
  handleIncrease: () => any;
  handleDecrease: () => any;
}

const Counter: React.StatelessComponent<CounterProps> = ({
  count,
  handleIncrease,
  handleDecrease,
}) => (
  <>
    <button onClick={handleIncrease}>+</button>
    <button onClick={handleDecrease}>-</button>
    <p>{count}</p>
  </>
);

const mapStateToProps = (state: AppState) => ({
  count: state.counter,
});

const mapDispatchToProps = {
  handleIncrease: increment,
  handleDecrease: decrement,
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
