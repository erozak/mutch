import { handleActions } from 'redux-actions';

import genre from './Genre';
import question from './Question';

import {
  dataState,
} from '../../models/state';

export default handleActions({
  ...genre,
  ...question,
}, dataState);
