import { combineReducers } from 'redux';

import { todos, currentLabel } from './todos2/reducers';

export const rootReducer = combineReducers({
  todos,
  currentLabel,
});