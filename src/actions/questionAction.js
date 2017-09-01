import { createAction } from 'redux-actions';

import {
  QUESTION_ANSWER,
} from '../models/actionTypes';

export const onQuestionAnswer = createAction(
  QUESTION_ANSWER,
  (index, answer) => ({
    index,
    answer,
  }),
);
