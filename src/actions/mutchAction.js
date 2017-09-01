import { createAction } from 'redux-actions';

import {
  MUTCH_INIT,
  MUTCH_EXCEL_CHANGE,
  MUTCH_RESTART,
} from '../models/actionTypes';

export const onMutchInit = createAction(MUTCH_INIT);
export const onMutchExcelChange = createAction(MUTCH_EXCEL_CHANGE, excel => excel);
export const onMutchRestart = createAction(MUTCH_RESTART);
