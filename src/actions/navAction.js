import { createAction } from 'redux-actions';

import {
  NAV_TOGGLE,
} from '../models/actionTypes';

export const onNavToggle = createAction(NAV_TOGGLE);
