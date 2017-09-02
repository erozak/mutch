import {
  POPUP_OPEN,
  POPUP_CLOSE,
} from '../../../models/actionTypes';

export default {
  [POPUP_OPEN]: (state, { payload }) => (
    state
      .setIn(['popup', 'show'], true)
      .setIn(['popup', 'question'], payload.question)
  ),
  [POPUP_CLOSE]: state => (
    state
      .setIn(['popup', 'show'], false)
      .setIn(['popup', 'question'], -1)
  ),
};
