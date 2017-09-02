import {
  MUTCH_EXCEL_CHANGE,
} from '../../../models/actionTypes';

export default {
  [MUTCH_EXCEL_CHANGE]: (state, { payload }) => (
    state.set('excel', payload.excel)
  ),
};
