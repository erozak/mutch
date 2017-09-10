import { List } from 'immutable';

import {
  MUTCH_EXCEL_CHANGE,
  MUTCH_RESET,
} from '../../../models/actionTypes';

export default {
  [MUTCH_EXCEL_CHANGE]: (state, { payload }) => (
    state.set('excel', payload.excel)
  ),

  [MUTCH_RESET]: state => (
    state
      .set('genres', List())
      .set('gaming', false)
      .set('questions', false)
      .set('pickedGenre', '')
  ),
};
