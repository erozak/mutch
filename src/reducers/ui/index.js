import { handleActions } from 'redux-actions';

import popup from './Popup';

import {
  uiState,
} from '../../models/state';

export default handleActions({
  ...popup,
}, uiState);
