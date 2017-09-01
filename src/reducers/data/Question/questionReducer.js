import {
  QUESTION_ANSWER,
} from '../../../models/actionTypes';

export default {
  [QUESTION_ANSWER]: (state, {
    index,
    answer,
  }) => state.setIn(['question', index], answer),
};
