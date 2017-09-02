import {
  GENRE_INIT,
  GENRE_CHANGE,
  GENRE_RESTART,
} from '../../../models/actionTypes';

export default {
  [GENRE_CHANGE]: (state, { payload }) => (
    state.set('pickedGenre', payload.genre)
  ),

  [GENRE_INIT]: (state, { payload }) => (
    state.set('genres', payload.genres)
  ),

  [GENRE_RESTART]: state => (
    state
      .setIn(['score', 'correct'], 0)
      .setIn(['score', 'wrong'], 0)
  ),
};
