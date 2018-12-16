import { combineReducers } from 'redux';

import { todos, currentLabel } from './todos3/reducers';

export const rootReducer = combineReducers({
  todos,
  currentLabel,
});