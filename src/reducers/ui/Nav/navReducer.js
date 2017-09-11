import {
  NAV_TOGGLE,
} from '../../../models/actionTypes';

export default {
  [NAV_TOGGLE]: state => (
    state.set('nav', !state.get('nav'))
  ),
};
