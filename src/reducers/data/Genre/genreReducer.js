import {
  GENRE_INIT,
  GENRE_CHANGE,
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
};
