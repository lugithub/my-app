import React from 'react';

import TodoList from './todo-list';
import TodoAdd from './todo-add';

function TodoApp() {
  return (
    <div>
      <h1>TODO</h1>
      <TodoList />
      <TodoAdd />
    </div>
  );
}

export default TodoApp;