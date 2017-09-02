import { createAction } from 'redux-actions';

import {
  MUTCH_EXCEL_CHANGE,
  MUTCH_RESTART,
} from '../../models/actionTypes';

import onMutchInit from './onInit';

export const onMutchExcelChange = createAction(MUTCH_EXCEL_CHANGE, excel => ({ excel }));
export { onMutchInit };
export const onMutchRestart = createAction(MUTCH_RESTART);
