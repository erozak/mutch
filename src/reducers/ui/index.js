import { handleActions } from 'redux-actions';

import popup from './Popup';
import spinner from './Spinner';

import {
  uiState,
} from '../../models/state';

export default handleActions({
  ...popup,
  ...spinner,
}, uiState);
