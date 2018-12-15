export const ADD_TODO = 'ADD_TODO';
export const TYPE_TODO = 'TYPE_TODO';

export function addTodo(label) {
  return {
    label,
    type: ADD_TODO,
  }
}

export function typeTodo(label) {
  return {
    label,
    type: TYPE_TODO,
  }
}