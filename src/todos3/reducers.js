import { ADD_TODO, TYPE_TODO } from "./actions";

export function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      if (action.label) {
        const id = state.length;
        return [...state, { id, label: action.label }];
      } else {
        return state;
      }
    
    default:
      return state;
  }
}

export function currentLabel(state = '', action) {
  switch (action.type) {
    case TYPE_TODO:
      return action.label;
    
    case ADD_TODO:
      return '';
    
    default:
      return state;
  }
}