import { createAction } from 'redux-actions';

import {
  GENRE_CHANGE,
  GENRE_INIT,
  GENRE_RESET,
} from '../../models/actionTypes';

export const onGenreChange = createAction(GENRE_CHANGE, (genre, questions) => ({
  genre,
  questions,
}));
export const onGenreInit = createAction(GENRE_INIT, genres => ({ genres }));
export const onGenreReset = createAction(GENRE_RESET);
