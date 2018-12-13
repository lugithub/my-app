import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    return (
      <ul>
        {/* this is js expression */}
        {this.props.todos.map(todo => <li key={todo.id}>{todo.label}</li>)} 
      </ul>
    );
  }
}

export default TodoList;