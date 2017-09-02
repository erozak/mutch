import { handleActions } from 'redux-actions';

import genre from './Genre';
import mutch from './Mutch';
import question from './Question';

import {
  dataState,
} from '../../models/state';

export default handleActions({
  ...genre,
  ...mutch,
  ...question,
}, dataState);
