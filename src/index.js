import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import reducer from './reducers/index';
import { createStore } from 'redux';;
import { Provider } from 'react-redux';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
);

