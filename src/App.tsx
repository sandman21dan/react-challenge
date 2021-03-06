import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';
import { reducer } from './state';


import Counter from './Counter';

const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);

const App: React.StatelessComponent = () => (
  <Provider store={store}>
    <div className="App">
      <h2>Counter app</h2>
      <Counter />
    </div>
  </Provider>
);

export default App;
