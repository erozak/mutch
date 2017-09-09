import { createAction } from 'redux-actions';

import {
  MUTCH_EXCEL_CHANGE,
  MUTCH_RESTART,
} from '../../models/actionTypes';

export const onMutchExcelChange = createAction(MUTCH_EXCEL_CHANGE, excel => ({ excel }));
export const onMutchRestart = createAction(MUTCH_RESTART);
