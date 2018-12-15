import React from 'react';

function TodoList({ todos }) {
  return (
    <ul>
      {/* this is js expression */}
      {todos.map(todo => <li key={todo.id}>{todo.label}</li>)} 
    </ul>
  );
}

export default TodoList;