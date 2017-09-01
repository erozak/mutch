import { createAction } from 'redux-actions';

import {
  GENRE_RESTART,
  GENRE_CHANGE,
} from '../models/actionTypes';

export const onGenreRestart = createAction(GENRE_RESTART);
export const onGenreChange = createAction(GENRE_CHANGE, genre => genre);
