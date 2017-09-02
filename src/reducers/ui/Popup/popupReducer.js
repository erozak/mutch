import {
  POPUP_OPEN,
  POPUP_CLOSE,
} from '../../../models/actionTypes';

export default {
  [POPUP_OPEN]: (state, question) => (
    state
      .set('popupShow', true)
      .set('pickedQuestion', question)
  ),
  [POPUP_CLOSE]: state => (
    state
      .set('popupShow', false)
      .set('pickedQuestion', -1)
  ),
};
