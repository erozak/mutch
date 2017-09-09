import { createAction } from 'redux-actions';

import {
  POPUP_OPEN,
  POPUP_CLOSE,
} from '../models/actionTypes';

export const onPopupOpen = createAction(POPUP_OPEN, index => ({ question: index }));
export const onPopupClose = createAction(POPUP_CLOSE);
