import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import '../sass/main.scss';

import store from './store';

import Main from './components/Main';

/*
import TodoList from './components/TodoList';
*/

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.querySelector('#app'),
);
