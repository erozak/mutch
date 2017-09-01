import { handleActions } from 'redux-actions';

import mutch from './Mutch';
import popup from './Popup';

import {
  uiState,
} from '../../models/state';

export default handleActions({
  ...mutch,
  ...popup,
}, uiState);
