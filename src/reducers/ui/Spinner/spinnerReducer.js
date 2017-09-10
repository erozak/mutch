import {
  SPINNER_MUTCH_HIDE,
  SPINNER_MUTCH_SHOW,
  SPINNER_GENRE_HIDE,
  SPINNER_GENRE_SHOW,
} from '../../../models/actionTypes';

export default {
  [SPINNER_MUTCH_HIDE]: state => state.setIn(['spinner', 'mutch'], false),
  [SPINNER_MUTCH_SHOW]: state => state.setIn(['spinner', 'mutch'], true),
  [SPINNER_GENRE_HIDE]: state => state.setIn(['spinner', 'genre'], false),
  [SPINNER_GENRE_SHOW]: state => state.setIn(['spinner', 'genre'], true),
};
