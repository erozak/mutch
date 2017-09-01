import {
  GENRE_RESTART,
  GENRE_CHANGE,
} from '../../../models/actionTypes';

export default {
  [GENRE_RESTART]: state => (
    state
      .setIn(['score', 'correct'], 0)
      .setIn(['score', 'wrong'], 0)
  ),
  [GENRE_CHANGE]: (state, genre) => state.set('pickedGenre', genre),
};
