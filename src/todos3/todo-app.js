import React from 'react';

import TodoList from './todo-list';
import TodoAdd from './todo-add';

export default class TodoApp extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>TODO</h1>
        <TodoList />
        <TodoAdd />        
      </div>
    );
  }
}