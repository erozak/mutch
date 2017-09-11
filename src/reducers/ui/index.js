import { handleActions } from 'redux-actions';

import nav from './Nav';
import popup from './Popup';
import spinner from './Spinner';

import {
  uiState,
} from '../../models/state';

export default handleActions({
  ...nav,
  ...popup,
  ...spinner,
}, uiState);
