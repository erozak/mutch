import {
  MUTCH_INIT,
  MUTCH_EXCEL_CHANGE,
} from '../../../models/actionTypes';

export default {
  [MUTCH_INIT]: state => (
    state.set(
      'pickedExcel',
      state.get('excel'),
    )
  ),
  [MUTCH_EXCEL_CHANGE]: (state, excel) => state.set('excel', excel),
};
