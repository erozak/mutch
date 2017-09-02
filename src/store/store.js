import {
  createStore,
  applyMiddleware,
} from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { Map } from 'immutable';

import reducers from '../reducers';

const initialState = Map();

const logger = createLogger({
  collapsed: () => true,
  diff: true,
  stateTransformer: state => state.toJS(),
});

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(logger, thunk),
);

export default store;
