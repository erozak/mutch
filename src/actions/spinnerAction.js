import { createAction } from 'redux-actions';

import {
  SPINNER_MUTCH_HIDE,
  SPINNER_MUTCH_SHOW,
  SPINNER_GENRE_HIDE,
  SPINNER_GENRE_SHOW,
} from '../models/actionTypes';


export const onSpinnerMutchHide = createAction(SPINNER_MUTCH_HIDE);
export const onSpinnerMutchShow = createAction(SPINNER_MUTCH_SHOW);
export const onSpinnerGenreHide = createAction(SPINNER_GENRE_HIDE);
export const onSpinnerGenreShow = createAction(SPINNER_GENRE_SHOW);
