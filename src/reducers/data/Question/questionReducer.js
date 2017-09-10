import {
  QUESTION_ANSWER,
} from '../../../models/actionTypes';

export default {
  [QUESTION_ANSWER]: (state, { payload }) => {
    let newState = state.setIn(
      ['questions', payload.index, 'result'],
      payload.answer,
    );

    const answered = newState.get('questions').filter(val => val.get('result') !== undefined).size;
    if (answered === newState.get('amount')) newState = newState.set('gaming', false);

    return newState;
  },
};
