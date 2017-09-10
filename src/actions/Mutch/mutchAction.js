import { createAction } from 'redux-actions';

import {
  MUTCH_EXCEL_CHANGE,
  MUTCH_RESET,
} from '../../models/actionTypes';

export const onMutchExcelChange = createAction(MUTCH_EXCEL_CHANGE, excel => ({ excel }));
export const onMutchReset = createAction(MUTCH_RESET);
