import 'babel-polyfill';
import 'font-awesome-webpack';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import '../sass/main.scss';

// import store from './store';

import Frame from './components/Frame';

/*
import TodoList from './components/TodoList';
*/

ReactDOM.render(
  <Frame />,
  document.querySelector('#app'),
);
