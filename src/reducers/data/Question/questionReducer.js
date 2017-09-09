import {
  QUESTION_ANSWER,
} from '../../../models/actionTypes';

export default {
  [QUESTION_ANSWER]: (state, { payload }) => (
    state.setIn(
      ['questions', payload.index, 'result'],
      payload.answer,
    )
  ),
};
