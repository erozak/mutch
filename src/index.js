import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import '../sass/main.scss';

import store from './store';

import Frame from './components/Frame';

/*
import TodoList from './components/TodoList';
*/

ReactDOM.render(
  <Provider store={store}>
    <Frame />
  </Provider>,
  document.querySelector('#app'),
);
