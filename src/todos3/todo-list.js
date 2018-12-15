import React from 'react';
import { connect } from 'react-redux';

function TodoList({ todos }) {
  return (
    <ul>
      {/* this is js expression */}
      {todos.map(todo => <li key={todo.id}>{todo.label}</li>)} 
    </ul>
  );
}

function mapState({todos}) {
  return {
    todos,
  }
}

export default connect(mapState)(TodoList);