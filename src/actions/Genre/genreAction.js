import { createAction } from 'redux-actions';

import {
  GENRE_CHANGE,
  GENRE_INIT,
  GENRE_RESTART,
} from '../../models/actionTypes';

export const onGenreChange = createAction(GENRE_CHANGE, (genre, questions) => ({
  genre,
  questions,
}));
export const onGenreInit = createAction(GENRE_INIT, genres => ({ genres }));
export const onGenreRestart = createAction(GENRE_RESTART);
