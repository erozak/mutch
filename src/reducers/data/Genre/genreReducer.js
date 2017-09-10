import { List } from 'immutable';

import {
  GENRE_INIT,
  GENRE_CHANGE,
  GENRE_RESET,
} from '../../../models/actionTypes';

export default {
  [GENRE_CHANGE]: (state, { payload }) => (
    state
      .set(
        'pickedGenre',
        payload.genre,
      )
      .set('questions', payload.questions)
      .set('gaming', true)
  ),

  [GENRE_INIT]: (state, { payload }) => (
    state.set('genres', payload.genres)
  ),

  [GENRE_RESET]: state => (
    state
      .set('questions', List())
      .set('gaming', false)
  ),
};
