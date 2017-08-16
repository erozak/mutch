import {
  createStore,
  applyMiddleware,
} from 'redux';
import { createLogger } from 'redux-logger';
import Immutable from 'immutable';

import reducers from '../reducers';

const initialState = Immutable.Map();
const logger = createLogger({
  collapsed: () => true,
  diff: true,
  stateTransformer: state => state.toJS(),
});

export default createStore(
  reducers,
  initialState,
  applyMiddleware(logger),
);
